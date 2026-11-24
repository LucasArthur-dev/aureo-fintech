// Autenticação simulada do protótipo (sem backend). Não usar em produção.
const AUREO_DEMO = { email: 'demo@aureo.com', senha: 'aureo123' };
const AUREO_USERS_KEY = 'aureoUsers';

async function aureoHash(text) {
    const bytes = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function aureoUsers() {
    try { return JSON.parse(localStorage.getItem(AUREO_USERS_KEY)) || []; }
    catch { return []; }
}

async function aureoCheckLogin(email, senha) {
    email = email.trim().toLowerCase();
    if (email === AUREO_DEMO.email && senha === AUREO_DEMO.senha) return true;
    const user = aureoUsers().find(u => u.email === email);
    return !!user && user.hash === await aureoHash(senha);
}

async function aureoRegister(nome, email, senha) {
    email = email.trim().toLowerCase();
    if (email === AUREO_DEMO.email) return false;
    const users = aureoUsers().filter(u => u.email !== email);
    users.push({ nome: nome.trim(), email, hash: await aureoHash(senha) });
    localStorage.setItem(AUREO_USERS_KEY, JSON.stringify(users));
    return true;
}
