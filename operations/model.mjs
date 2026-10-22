export const SCHEMA_VERSION = 1;
export const SOURCES = ['Zoho', 'Gmail', 'Otro'];
export const STAGES = ['Contacto inicial', 'Conversación', 'Propuesta enviada', 'Negociación', 'Ganada', 'Perdida'];
export const TRACKING = ['Pendiente', 'Esperando respuesta', 'Respondido', 'Cerrado'];
export const PRIORITIES = ['Alta', 'Media', 'Baja'];
const collections = ['contacts', 'deals', 'followups', 'tasks'];
export function emptyDatabase() { return { version: SCHEMA_VERSION, contacts: [], deals: [], followups: [], tasks: [], updatedAt: null }; }
const clean = (v, max = 240) => String(v ?? '').trim().slice(0, max);
const validDate = v => /^\d{4}-\d{2}-\d{2}$/.test(String(v)) && Number.isFinite(Date.parse(v+'T00:00:00Z'));
const email = v => v === '' || /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(v);
const isoDate = () => new Date().toISOString().slice(0,10);
export function id() { return typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `op-${Date.now()}-${Math.random().toString(36).slice(2)}`; }
export function sanitize(collection, value) {
  if (!collections.includes(collection) || !value || typeof value !== 'object' || Array.isArray(value)) throw Error('Tipo de registro no válido');
  const base = { id: clean(value.id, 80) || id(), createdAt: clean(value.createdAt, 40) || new Date().toISOString() };
  if (collection === 'contacts') {
    const name = clean(value.name, 160), address = clean(value.email, 250).toLowerCase();
    if (!name) throw Error('El contacto necesita un nombre');
    if (!email(address)) throw Error('El correo no es válido');
    return {...base, name, email: address, company: clean(value.company, 160), segment: clean(value.segment, 80) || 'Cliente', notes: clean(value.notes, 1000)};
  }
  if (collection === 'deals') {
    const title = clean(value.title,160), amount = Number(value.amount || 0);
    if (!title) throw Error('La oportunidad necesita un título');
    if (!Number.isFinite(amount) || amount < 0 || amount > 1e12) throw Error('Importe inválido');
    return {...base, title, company: clean(value.company,160), amount, stage: STAGES.includes(value.stage) ? value.stage : STAGES[0], nextAction: clean(value.nextAction, 240)};
  }
  if (collection === 'followups') {
    const subject = clean(value.subject, 180), due = clean(value.due, 10);
    if (!subject) throw Error('El seguimiento necesita un asunto');
    if (due && !validDate(due)) throw Error('Fecha inválida');
    return {...base, subject, contact: clean(value.contact, 160), source: SOURCES.includes(value.source) ? value.source : 'Otro', status: TRACKING.includes(value.status) ? value.status : TRACKING[0], due, notes: clean(value.notes, 1000)};
  }
  const title = clean(value.title, 180), due = clean(value.due, 10);
  if (!title) throw Error('La tarea necesita un título');
  if (due && !validDate(due)) throw Error('Fecha inválida');
  return {...base, title, due, priority: PRIORITIES.includes(value.priority) ? value.priority : 'Media', done: value.done === true};
}
export function normalize(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw) || raw.version !== SCHEMA_VERSION) throw Error('Versión de archivo no compatible');
  const out = emptyDatabase();
  for (const col of collections) {
    if (!Array.isArray(raw[col]) || raw[col].length > 10000) throw Error(`Colección inválida: ${col}`);
    out[col] = raw[col].map(item => sanitize(col, item));
    if (new Set(out[col].map(x=>x.id)).size !== out[col].length) throw Error(`IDs repetidos en ${col}`);
  }
  out.updatedAt = typeof raw.updatedAt === 'string' ? clean(raw.updatedAt,40) : null;
  return out;
}
export function upsert(db, collection, payload) {
  const item = sanitize(collection, payload);
  const out = normalize(db); const index = out[collection].findIndex(v => v.id === item.id);
  if (index >= 0) out[collection][index] = item; else out[collection].unshift(item);
  out.updatedAt = new Date().toISOString(); return out;
}
export function remove(db, collection, itemId) {
  if (!collections.includes(collection)) throw Error('Colección inválida');
  const out=normalize(db);out[collection]=out[collection].filter(v=>v.id!==itemId);out.updatedAt=new Date().toISOString();return out;
}
export function metrics(db, today=isoDate()) {
  const activeDeals=db.deals.filter(v=>!['Ganada','Perdida'].includes(v.stage));
  const pending=db.followups.filter(v=>!['Respondido','Cerrado'].includes(v.status));
  return {
    toFollow: pending.length,
    overdue: pending.filter(v=>v.due && v.due < today).length + db.tasks.filter(v=>!v.done && v.due && v.due<today).length,
    openDeals: activeDeals.length,
    pipelineAmount: activeDeals.reduce((n,v)=>n+v.amount,0),
    tasks: db.tasks.filter(v=>!v.done).length,
    contacts: db.contacts.length,
  };
}
export const money = value => new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(Number(value||0));
export const niceDate = value => !value ? 'Sin fecha' : new Intl.DateTimeFormat('es-AR',{day:'2-digit',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(`${value}T00:00:00Z`));
export function csvContacts(db) {
  const q=x=>{ const text=String(x??'').replace(/\r?\n/g,' '); const safe=/^[=+@\-\t\r]/.test(text.trimStart()) ? '\''+text : text; return '"'+safe.replaceAll('"','""')+'"'; };
  return ['Nombre,Email,Empresa,Segmento,Notas',...db.contacts.map(x=>[x.name,x.email,x.company,x.segment,x.notes].map(q).join(','))].join('\r\n');
}
