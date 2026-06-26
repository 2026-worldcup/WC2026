const SUPABASE_URL = "https://ugwjflbeyjfaidwhweva.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ljkn1OeUIHwXIx2o3djCGQ_-UmMaO9I";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Centralisation globale de la liste d'émojis avatars
const AVATAR_EMOJIS = [
    "⚽", "🏐", "🏀", "🥅", "🏃‍♂️", "🤾", "⛹️", "🦁", "🦅", "🦊", "🐺", "🐉", 
    "🐯", "🐼", "🦄", "😎", "🤠", "🥸", "🤯", "🤨", "😏", "😜", "🤙", "⚡", 
    "🔥", "💥", "🌪️", "✨", "👑", "🏆", "💎", "⭐", "🥇"
];

const MATCH_SCHEDULE = {
    // ============================
    // PHASE DE GROUPES (11 → 24 juin)
    // ============================
    "G-A-1": { display: null, iso: null }, "G-A-2": { display: null, iso: null },
    "G-B-1": { display: null, iso: null }, "G-B-2": { display: null, iso: null }, "G-B-3": { display: null, iso: null },
    "G-C-1": { display: null, iso: null }, "G-C-2": { display: null, iso: null },
    "G-D-1": { display: null, iso: null }, "G-D-2": { display: null, iso: null }, "G-D-3": { display: null, iso: null },
    "G-E-1": { display: null, iso: null }, "G-E-2": { display: null, iso: null }, "G-E-3": { display: null, iso: null },
    "G-F-1": { display: null, iso: null }, "G-F-2": { display: null, iso: null }, "G-F-3": { display: null, iso: null },
    "G-G-1": { display: null, iso: null }, "G-G-2": { display: null, iso: null }, "G-G-3": { display: null, iso: null },
    "G-H-1": { display: null, iso: null }, "G-H-2": { display: null, iso: null }, "G-H-3": { display: null, iso: null },
    "G-I-1": { display: null, iso: null }, "G-I-2": { display: null, iso: null }, "G-I-3": { display: null, iso: null },
    "G-J-1": { display: null, iso: null }, "G-J-2": { display: null, iso: null }, "G-J-3": { display: null, iso: null },
    "G-K-1": { display: null, iso: null }, "G-K-2": { display: null, iso: null }, "G-K-3": { display: null, iso: null },
    "G-L-1": { display: null, iso: null }, "G-L-2": { display: null, iso: null }, "G-L-3": { display: null, iso: null },

    // 25 juin
    "G-E-4": { display: "Jeudi 25 Juin – 22:00", iso: "2026-06-25T22:00:00+02:00" },
    "G-E-5": { display: "Jeudi 25 Juin – 22:00", iso: "2026-06-25T22:00:00+02:00" },
    "G-F-4": { display: "Vendredi 26 Juin – 01:00", iso: "2026-06-26T01:00:00+02:00" },
    "G-F-5": { display: "Vendredi 26 Juin – 01:00", iso: "2026-06-26T01:00:00+02:00" },
    "G-D-3": { display: "Vendredi 26 Juin – 04:00", iso: "2026-06-26T04:00:00+02:00" },
    "G-D-4": { display: "Vendredi 26 Juin – 04:00", iso: "2026-06-26T04:00:00+02:00" },
    "G-D-5": { display: "Samedi 26 Juin – 04:00", iso: "2026-06-26T04:00:00+02:00" },

    // 26 juin
    "G-I-4": { display: "Vendredi 26 Juin – 21:00", iso: "2026-06-26T21:00:00+02:00" },
    "G-I-5": { display: "Vendredi 26 Juin – 21:00", iso: "2026-06-26T21:00:00+02:00" },
    "G-H-4": { display: "Samedi 27 Juin – 02:00", iso: "2026-06-27T02:00:00+02:00" },
    "G-H-5": { display: "Samedi 27 Juin – 02:00", iso: "2026-06-27T02:00:00+02:00" },
    "G-G-4": { display: "Samedi 27 Juin – 05:00", iso: "2026-07-27T05:00:00+02:00" },
    "G-G-5": { display: "Samedi 27 Juin – 05:00", iso: "2026-07-27T05:00:00+02:00" },
    
    // 27 juin
    "G-L-4": { display: "Samedi 27 Juin – 23:00", iso: "2026-06-27T23:00:00+02:00" },
    "G-L-5": { display: "Samedi 27 Juin – 23:00", iso: "2026-06-27T23:00:00+02:00" },
    "G-K-4": { display: "Dimanche 28 Juin – 01:30", iso: "2026-06-28T01:30:00+02:00" },
    "G-K-5": { display: "Dimanche 28 Juin – 01:30", iso: "2026-06-28T01:30:00+02:00" },
    "G-J-4": { display: "Dimanche 28 Juin – 04:00", iso: "2026-06-28T04:00:00+02:00" },
    "G-J-5": { display: "Dimanche 28 Juin – 04:00", iso: "2026-06-28T04:00:00+02:00" },

    // 16es de finale
    "16-1": { display: "Dimanche 28 Juin – 21:00", iso: "2026-06-28T21:00:00+02:00" },
    "16-2": { display: "Lundi 29 Juin – 19:00", iso: "2026-06-29T19:00:00+02:00" },
    "16-3": { display: "Lundi 29 Juin – 22:30", iso: "2026-06-29T22:30:00+02:00" },
    "16-4": { display: "Mardi 30 Juin – 03:00", iso: "2026-06-30T03:00:00+02:00" },
    "16-5": { display: "Mardi 30 Juin – 19:00", iso: "2026-06-30T19:00:00+02:00" },
    "16-6": { display: "Mardi 30 Juin – 23:00", iso: "2026-06-30T23:00:00+02:00" },
    "16-7": { display: "Mercredi 1 Juillet – 03:00", iso: "2026-07-01T03:00:00+02:00" },
    "16-8": { display: "Mercredi 1 Juillet – 18:00", iso: "2026-07-01T18:00:00+02:00" },
    "16-9": { display: "Mercredi 1 Juillet – 22:00", iso: "2026-07-01T22:00:00+02:00" },
    "16-10": { display: "Jeudi 2 Juillet – 02:00", iso: "2026-07-02T02:00:00+02:00" },
    "16-11": { display: "Jeudi 2 Juillet – 21:00", iso: "2026-07-02T21:00:00+02:00" },
    "16-12": { display: "Vendredi 3 Juillet – 01:00", iso: "2026-07-03T01:00:00+02:00" },
    "16-13": { display: "Vendredi 3 Juillet – 05:00", iso: "2026-07-03T05:00:00+02:00" },
    "16-14": { display: "Vendredi 3 Juillet – 20:00", iso: "2026-07-03T20:00:00+02:00" },
    "16-15": { display: "Samedi 4 Juillet – 00:00", iso: "2026-07-04T00:00:00+02:00" },
    "16-16": { display: "Samedi 4 Juillet – 03:30", iso: "2026-07-04T03:30:00+02:00" },

    // Huitièmes
    "8-1": { display: "Samedi 4 Juillet – 19:00", iso: "2026-07-04T19:00:00+02:00" },
    "8-2": { display: "Samedi 4 Juillet – 23:00", iso: "2026-07-04T23:00:00+02:00" },
    "8-3": { display: "Dimanche 5 Juillet – 22:00", iso: "2026-07-05T22:00:00+02:00" },
    "8-4": { display: "Lundi 6 Juillet – 06:00", iso: "2026-07-06T06:00:00+02:00" },
    "8-5": { display: "Lundi 6 Juillet – 21:00", iso: "2026-07-06T21:00:00+02:00" },
    "8-6": { display: "Mardi 7 Juillet – 02:00", iso: "2026-07-07T02:00:00+02:00" },
    "8-7": { display: "Mardi 7 Juillet – 18:00", iso: "2026-07-07T18:00:00+02:00" },
    "8-8": { display: "Mardi 7 Juillet – 22:00", iso: "2026-07-22T22:00:00+02:00" },

    // Quarts
    "4-1": { display: "Jeudi 9 Juillet – 22:00", iso: "2026-07-09T22:00:00+02:00" },
    "4-2": { display: "Vendredi 10 Juillet – 21:00", iso: "2026-07-10T21:00:00+02:00" },
    "4-3": { display: "Samedi 11 Juillet – 23:00", iso: "2026-07-11T23:00:00+02:00" },
    "4-4": { display: "Dimanche 12 Juillet – 03:00", iso: "2026-07-12T03:00:00+02:00" },

    // Demi-finales
    "2-1": { display: "Mardi 14 Juillet – 21:00", iso: "2026-07-14T21:00:00+02:00" },
    "2-2": { display: "Mercredi 15 Juillet – 21:00", iso: "2026-07-15T21:00:00+02:00" },

    // Petite Finale
    "3-1": { display: "Samedi 18 Juillet – 23:00", iso: "2026-07-18T23:00:00+02:00" },

    // Finale
    "F-1": { display: "Dimanche 19 Juillet – 21:00", iso: "2026-07-19T21:00:00+02:00" }
};

const TEAMS = {
    'A': ['Mexique', 'Afrique du Sud', 'Coree du Sud', 'Tchequie'],
    'B': ['Canada', 'Bosnie', 'Qatar', 'Suisse'],
    'C': ['Bresil', 'Maroc', 'Haiti', 'Ecosse'],
    'D': ['USA', 'Paraguay', 'Australie', 'Turquie'],
    'E': ['Allemagne', 'Curacao', 'Cote dIvoire', 'Equateur'],
    'F': ['Pays-Bas', 'Japon', 'Suede', 'Tunisie'],
    'G': ['Belgique', 'Egypte', 'Iran', 'Nouvelle-Zelande'],
    'H': ['Espagne', 'Cap-Vert', 'Arabie Saoudite', 'Uruguay'],
    'I': ['France', 'Senegal', 'Irak', 'Norvege'],
    'J': ['Argentine', 'Algerie', 'Autriche', 'Jordanie'],
    'K': ['Portugal', 'RD Congo', 'Ouzbekistan', 'Colombie'],
    'L': ['Angleterre', 'Croatie', 'Ghana', 'Panama']
};

const CODES = {
    'Mexique':'MEX', 'Afrique du Sud':'RSA', 'Coree du Sud':'KOR', 'Tchequie':'CZE',
    'Canada':'CAN', 'Bosnie':'BIH', 'Qatar':'QAT', 'Suisse':'SUI',
    'Bresil':'BRA', 'Maroc':'MAR', 'Haiti':'HAI', 'Ecosse':'SCO',
    'USA':'USA', 'Paraguay':'PAR', 'Australie':'AUS', 'Turquie':'TUR',
    'Allemagne':'GER', 'Curacao':'CUW', 'Cote dIvoire':'CIV', 'Equateur':'ECU',
    'Pays-Bas':'NED', 'Japon':'JPN', 'Suede':'SWE', 'Tunisie':'TUN',
    'Belgique':'BEL', 'Egypte':'EGY', 'Iran':'IRN', 'Nouvelle-Zelande':'NZL',
    'Espagne':'ESP', 'Cap-Vert':'CPV', 'Arabie Saoudite':'KSA', 'Uruguay':'URU',
    'France':'FRA', 'Senegal':'SEN', 'Irak':'IRQ', 'Norvege':'NOR',
    'Argentine':'ARG', 'Algerie':'ALG', 'Autriche':'AUT', 'Jordanie':'JOR',
    'Portugal':'POR', 'RD Congo':'COD', 'Ouzbekistan':'UZB', 'Colombie':'COL',
    'Angleterre':'ENG', 'Croatie':'CRO', 'Ghana':'GHA', 'Panama':'PAN'
};

const FLAGS = {
    'MEX': '🇲🇽', 'RSA': '🇿🇦', 'KOR': '🇰🇷', 'CZE': '🇨🇿', 'CAN': '🇨🇦', 'BIH': '🇧🇦', 'QAT': '🇶🇦', 'SUI': '🇨🇭',
    'BRA': '🇧🇷', 'MAR': '🇲🇦', 'HAI': '🇭🇹', 'SCO': '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'USA': '🇺🇸', 'PAR': '🇵🇾', 'AUS': '🇦🇺', 'TUR': '🇹🇷',
    'GER': '🇩🇪', 'CUW': '🇨🇼', 'CIV': '🇨🇮', 'ECU': '🇪🇨', 'NED': '🇳🇱', 'JPN': '🇯🇵', 'SWE': '🇸🇪', 'TUN': '🇹🇳',
    'BEL': '🇧🇪', 'EGY': '🇪🇬', 'IRN': '🇮🇷', 'NZL': '🇳🇿', 'ESP': '🇪🇸', 'CPV': '🇨🇻', 'KSA': '🇸🇦', 'URU': '🇺🇾',
    'FRA': '🇫🇷', 'SEN': '🇸🇳', 'IRQ': '🇮🇶', 'NOR': '🇳🇴', 'ARG': '🇦🇷', 'ALG': '🇩🇿', 'AUT': '🇦🇹', 'JOR': '🇯🇴',
    'POR': '🇵🇹', 'COD': '🇨🇩', 'UZB': '🇺🇿', 'COL': '🇨🇴', 'ENG': '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'CRO': '🇭🇷', 'GHA': '🇬🇭', 'PAN': '🇵🇦'
};

const STAGE_ORDERS = {
    '16': [1, 4, 3, 6, 12, 11, 10, 9, 2, 5, 7, 8, 15, 14, 13, 16],
    '8': [1, 2, 5, 6, 3, 4, 7, 8],
    '4': [1, 2, 3, 4],
    '2': [1, 2],
    '3': [1],
    'F': [1]
};

const KNOCKOUT_PLACEHOLDERS = {
    "16-1-t1": "2A", "16-1-t2": "2B",
    "16-2-t1": "1C", "16-2-t2": "2F",
    "16-3-t1": "1E", "16-3-t2": "3ABCDF",
    "16-4-t1": "1F", "16-4-t2": "2C",
    "16-5-t1": "2E", "16-5-t2": "2I",
    "16-6-t1": "1I", "16-6-t2": "3CDFGH",
    "16-7-t1": "1A", "16-7-t2": "3CEFHI",
    "16-8-t1": "1L", "16-8-t2": "3EHIJK",
    "16-9-t1": "1G", "16-9-t2": "3AEHIJ",
    "16-10-t1": "1D", "16-10-t2": "3BEFIJ",
    "16-11-t1": "1H", "16-11-t2": "2J",
    "16-12-t1": "2K", "16-12-t2": "2L",
    "16-13-t1": "1B", "16-13-t2": "3EFGIJ",
    "16-14-t1": "2D", "16-14-t2": "2G",
    "16-15-t1": "1J", "16-15-t2": "2H",
    "16-16-t1": "1K", "16-16-t2": "3DEIJL",

    "8-1-t1": "16-1", "8-1-t2": "16-4",
    "8-2-t1": "16-3", "8-2-t2": "16-6",
    "8-3-t1": "16-2", "8-3-t2": "16-5",
    "8-4-t1": "16-7", "8-4-t2": "16-8",
    "8-5-t1": "16-12", "8-5-t2": "16-11",
    "8-6-t1": "16-10", "8-6-t2": "16-9",
    "8-7-t1": "16-15", "8-7-t2": "16-14",
    "8-8-t1": "16-13", "8-8-t2": "16-16",

    "4-1-t1": "8-2", "4-1-t2": "8-1",
    "4-2-t1": "8-5", "4-2-t2": "8-6",
    "4-3-t1": "8-3", "4-3-t2": "8-4",
    "4-4-t1": "8-7", "4-4-t2": "8-8",

    "2-1-t1": "4-1", "2-1-t2": "4-2",
    "2-2-t1": "4-3", "2-2-t1": "4-4",

    "3-1-t1": "p. 2-1", "3-1-t2": "p. 2-2",
    "F-1-t1": "2-1", "F-1-t2": "2-2"
};

const MATCH_MAP = [ [0,1], [2,3], [0,2], [3,1], [3,0], [1,2] ];
const GROUP_MATCHES = {};
for (let l in TEAMS) {
    GROUP_MATCHES[l] = MATCH_MAP.map((m, idx) => ({ t1: TEAMS[l][m[0]], t2: TEAMS[l][m[1]] }));
}

let scores = {}; 
let tree = {}; 
let currentActiveMatchId = null;
let globalRankList = []; 

const KNOCKOUT_LINKS = {
    '16-1': { nextId: 1, nextPos: 't1' }, '16-4': { nextId: 1, nextPos: 't2' },
    '16-3': { nextId: 2, nextPos: 't1' }, '16-6': { nextId: 2, nextPos: 't2' },
    '16-2': { nextId: 3, nextPos: 't1' }, '16-5': { nextId: 3, nextPos: 't2' },
    '16-7': { nextId: 4, nextPos: 't1' }, '16-8': { nextId: 4, nextPos: 't2' },
    '16-12': { nextId: 5, nextPos: 't1' }, '16-11': { nextId: 5, nextPos: 't2' },
    '16-10': { nextId: 6, nextPos: 't1' }, '16-9': { nextId: 6, nextPos: 't2' },
    '16-15': { nextId: 7, nextPos: 't1' }, '16-14': { nextId: 7, nextPos: 't2' },
    '16-13': { nextId: 8, nextPos: 't1' }, '16-16': { nextId: 8, nextPos: 't2' },

    '8-2': { nextId: 1, nextPos: 't1' }, '8-1': { nextId: 1, nextPos: 't2' },
    '8-5': { nextId: 2, nextPos: 't1' }, '8-6': { nextId: 2, nextPos: 't2' },
    '8-3': { nextId: 3, nextPos: 't1' }, '8-4': { nextId: 3, nextPos: 't2' },
    '8-7': { nextId: 4, nextPos: 't1' }, '8-8': { nextId: 4, nextPos: 't2' },

    '4-1': { nextId: 1, nextPos: 't1' }, '4-2': { nextId: 1, nextPos: 't2' },
    '4-3': { nextId: 2, nextPos: 't1' }, '4-4': { nextId: 2, nextPos: 't2' },

    '2-1': { nextId: 1, nextPos: 't1' }, '2-2': { nextId: 1, nextPos: 't2' }
};

function initTheme() {
    const savedTheme = localStorage.getItem('wc_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').innerText = "☀️ Mode Clair";
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-toggle').innerText = "🌙 Mode Sombre";
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('wc_theme')) { 
            if (e.matches) {
                document.body.classList.add('dark-mode');
                document.getElementById('theme-toggle').innerText = "☀️ Mode Clair";
            } else {
                document.body.classList.remove('dark-mode');
                document.getElementById('theme-toggle').innerText = "🌙 Mode Sombre";
            }
        }
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('wc_theme', isDark ? 'dark' : 'light');
    document.getElementById('theme-toggle').innerText = isDark ? "☀️ Mode Clair" : "🌙 Mode Sombre";
}

// Injection unifiée de la liste des avatars
function populateAvatars() {
    const authSelect = document.getElementById('auth-avatar');
    const accSelect = document.getElementById('acc-select-avatar');
    
    const optionsHTML = AVATAR_EMOJIS.map(emoji => `<option value="${emoji}">${emoji}</option>`).join('');
    
    if (authSelect) authSelect.innerHTML = optionsHTML;
    if (accSelect) accSelect.innerHTML = optionsHTML;
}

async function init() {
    initTheme();
    populateAvatars();
    updateAuthUI();
    renderGroupsSection(['A','B','C','D','E','F'], 'sec-G1');
    renderGroupsSection(['G','H','I','J','K','L'], 'sec-G2');
    renderKnockoutContainers();
    await syncFromSupabase();
}

function getMatchTimeContext(matchId) {
    const isTerminated = (scores[`${matchId}-0`] !== undefined && scores[`${matchId}-1`] !== undefined);
    if (MATCH_SCHEDULE[matchId] && MATCH_SCHEDULE[matchId].display && MATCH_SCHEDULE[matchId].iso) {
        return { text: MATCH_SCHEDULE[matchId].display, iso: MATCH_SCHEDULE[matchId].iso, status: isTerminated ? "complete" : "live" };
    }
    return { text: "Horaire inconnu", iso: null, status: isTerminated ? "complete" : "unknown" };
}

function renderStatusBadgeHTML(context) {
    if (context.status === 'complete' || context.status === 'unknown') return `<span class="status-badge complete">Terminé</span>`;
    return `<span class="status-badge live">À venir</span>`;
}

async function handleAuth() {
    const pseudo = document.getElementById('auth-pseudo').value.trim();
    const code = document.getElementById('auth-code').value.trim();
    const avatar = document.getElementById('auth-avatar').value;
    if (!pseudo || !code) { alert("Champs vides !"); return; }

    const { data: user, error } = await supabaseClient.from('users').select('*').eq('pseudo', pseudo).maybeSingle();
    if (error) { alert("Erreur : " + error.message); return; }

    if (user) {
        if (user.code === code) {
            localStorage.setItem('wc_pseudo', pseudo);
            localStorage.setItem('wc_code', code);
            localStorage.setItem('wc_avatar', user.avatar || '⚽');
            updateAuthUI();
            if (document.getElementById('sec-account').classList.contains('active')) updateAccountDashboard();
        } else { alert("Code secret erroné."); }
    } else {
        const { error: insError } = await supabaseClient.from('users').insert({ pseudo, code, avatar });
        if (insError) { alert("Erreur : " + insError.message); } 
        else {
            localStorage.setItem('wc_pseudo', pseudo); localStorage.setItem('wc_code', code); localStorage.setItem('wc_avatar', avatar);
            updateAuthUI(); await calculateLeaderboard();
            if (document.getElementById('sec-account').classList.contains('active')) updateAccountDashboard();
        }
    }
}

function handleLogout() { 
    localStorage.clear(); 
    updateAuthUI(); 
    if (document.getElementById('sec-account').classList.contains('active')) updateAccountDashboard();
}

function updateAuthUI() {
    const pseudo = localStorage.getItem('wc_pseudo');
    if (pseudo) {
        document.getElementById('auth-logged-out').style.display = 'none';
        document.getElementById('auth-logged-in').style.display = 'flex';
        document.getElementById('user-display-name').innerText = pseudo;
        document.getElementById('user-display-avatar').innerText = localStorage.getItem('wc_avatar') || '⚽';
    } else {
        document.getElementById('auth-logged-out').style.display = 'flex';
        document.getElementById('auth-logged-in').style.display = 'none';
    }
}

async function syncFromSupabase() {
    try {
        const { data, error } = await supabaseClient.from('matches').select('*');
        if (error) throw error;
        scores = {};
        if (data) {
            data.forEach(row => {
                if (row.score1 !== null) scores[`${row.id}-0`] = row.score1;
                if (row.score2 !== null) scores[`${row.id}-1`] = row.score2;
                if (row.tab1 !== null) scores[`${row.id}-tab0`] = row.tab1;
                if (row.tab2 !== null) scores[`${row.id}-tab1`] = row.tab2;
            });
        }
        calculate(); await calculateLeaderboard();
    } catch (e) { console.error("Sync Error:", e.message); }
}

function formatTeamName(name, fallbackKey = null) {
    if (!name || name === '...' || name === 'En attente') {
        const fallbackLabel = fallbackKey && KNOCKOUT_PLACEHOLDERS[fallbackKey] ? KNOCKOUT_PLACEHOLDERS[fallbackKey] : '';
        return `<span style="opacity:0.55; font-style: italic;">En attente ${fallbackLabel ? '(' + fallbackLabel + ')' : ''}</span>`;
    }
    const code = CODES[name];
    return `${code ? (FLAGS[code] || '') : ''} ${name}`;
}

function renderGroupsSection(letters, containerId) {
    const container = document.getElementById(containerId); if (!container) return; container.innerHTML = '';
    letters.forEach(group => {
        const card = document.createElement('div'); card.className = 'card';
        card.innerHTML = `
            <div style="font-weight:800; color:var(--primary); font-size:1.1rem; margin-bottom:12px;">Groupe ${group}</div>
            <table class="standing-table">
                <thead><tr><th>R</th><th>Équipe</th><th>Pts</th><th>Diff</th></tr></thead>
                <tbody id="tab-${group}"></tbody>
            </table>
            <div class="match-list" id="matches-${group}"></div>`;
        container.appendChild(card); renderGroupMatches(group);
    });
}

async function updateAccountDashboard() {
    const pseudo = localStorage.getItem('wc_pseudo');
    const loggedOutView = document.getElementById('account-logged-out-view');
    const loggedInView = document.getElementById('account-logged-in-view');

    if (!pseudo) {
        if(loggedOutView) loggedOutView.style.display = 'block';
        if(loggedInView) loggedInView.style.display = 'none';
        return;
    }

    if(loggedOutView) loggedOutView.style.display = 'none';
    if(loggedInView) loggedInView.style.display = 'block';

    // 1. Récupération des statistiques depuis le classement général calculé
    const myStats = globalRankList.find(p => p.pseudo === pseudo);
    if (myStats) {
        document.getElementById('acc-stat-rank').innerText = `#${myStats.rank}`;
        document.getElementById('acc-stat-pts').innerText = `${myStats.totalPoints} pts`;
        document.getElementById('acc-stat-details').innerText = `Détails : ${myStats.exacts} exacts | ${myStats.diffs} écarts | ${myStats.partials} issues`;
    } else {
        document.getElementById('acc-stat-rank').innerText = `--`;
        document.getElementById('acc-stat-pts').innerText = `0 pts`;
        document.getElementById('acc-stat-details').innerText = `Aucun match calculé`;
    }

    // 2. Traitement des pronostics manquants (Fenêtre glissante de 48 heures)
    const now = new Date();
    const fortyEightHoursLater = new Date(now.getTime() + (48 * 60 * 60 * 1000));
    
    const { data: myPronos } = await supabaseClient.from('pronostics').select('match_id').eq('pseudo', pseudo);
    const predictedMatchIds = new Set(myPronos ? myPronos.map(p => p.match_id) : []);

    let upcomingMissingHTML = '';
    
    for (let matchId in MATCH_SCHEDULE) {
        const m = MATCH_SCHEDULE[matchId];
        if (m.iso) {
            const matchDate = new Date(m.iso);
            if (matchDate > now && matchDate <= fortyEightHoursLater && !predictedMatchIds.has(matchId)) {
                let t1 = "Équipe A", t2 = "Équipe B";
                
                if (matchId.startsWith('G-')) {
                    const parts = matchId.split('-');
                    const gLetter = parts[1];
                    const mIdx = parseInt(parts[2]);
                    if (GROUP_MATCHES[gLetter] && GROUP_MATCHES[gLetter][mIdx]) {
                        t1 = GROUP_MATCHES[gLetter][mIdx].t1;
                        t2 = GROUP_MATCHES[gLetter][mIdx].t2;
                    }
                } else {
                    t1 = tree[`${matchId}-t1`] || "En attente";
                    t2 = tree[`${matchId}-t2`] || "En attente";
                }

                upcomingMissingHTML += `
                    <div class="missing-prono-item" onclick="showSection('G1', document.querySelector('.tab')); openMatchModal('${matchId}', '${t1}', '${t2}')">
                        <div class="missing-prono-info">
                            <strong>${m.display}</strong><br>
                            <small>${t1} 🆚 ${t2}</small>
                        </div>
                        <button class="missing-prono-btn">Parier ⚡</button>
                    </div>`;
            }
        }
    }
    
    document.getElementById('acc-missing-pronos').innerHTML = upcomingMissingHTML || "<p style='color:green; font-weight:600; text-align:center; padding:10px;'>🎉 Parfait ! Aucun pronostic manquant pour les prochaines 48h.</p>";
    
    // 3. Remplissage automatique des champs de configuration
    document.getElementById('acc-input-pseudo').value = pseudo;
    document.getElementById('acc-input-code').value = localStorage.getItem('wc_code') || '';
    document.getElementById('acc-select-avatar').value = localStorage.getItem('wc_avatar') || '⚽';
}

async function saveAccountChanges() {
    const oldPseudo = localStorage.getItem('wc_pseudo');
    const oldCode = localStorage.getItem('wc_code');
    if (!oldPseudo) return;

    const newPseudo = document.getElementById('acc-input-pseudo').value.trim();
    const newCode = document.getElementById('acc-input-code').value.trim();
    const newAvatar = document.getElementById('acc-select-avatar').value;

    if (!newPseudo || !newCode) { alert("Les champs ne peuvent pas être vides."); return; }

    if (newPseudo !== oldPseudo) {
        const { data: checkUser } = await supabaseClient.from('users').select('pseudo').eq('pseudo', newPseudo).maybeSingle();
        if (checkUser) { alert("Ce pseudo est déjà utilisé par un autre joueur."); return; }
    }

    const { error: uError } = await supabaseClient.from('users').update({
        pseudo: newPseudo, code: newCode, avatar: newAvatar
    }).eq('pseudo', oldPseudo).eq('code', oldCode);

    if (uError) { alert("Erreur lors de la mise à jour : " + uError.message); return; }

    if (newPseudo !== oldPseudo) {
        await supabaseClient.from('pronostics').update({ pseudo: newPseudo, user_code: newCode }).eq('pseudo', oldPseudo);
    }

    localStorage.setItem('wc_pseudo', newPseudo);
    localStorage.setItem('wc_code', newCode);
    localStorage.setItem('wc_avatar', newAvatar);

    alert("Compte mis à jour avec succès !");
    updateAuthUI();
    await syncFromSupabase();
    await updateAccountDashboard();
}

function renderGroupMatches(group) {
    const list = document.getElementById(`matches-${group}`); if (!list) return; list.innerHTML = '';
    GROUP_MATCHES[group].forEach((m, idx) => {
        const keyBase = `G-${group}-${idx}`;
        const s1 = scores[`${keyBase}-0`] ?? '-'; const s2 = scores[`${keyBase}-1`] ?? '-';
        const ctx = getMatchTimeContext(keyBase);
        list.innerHTML += `
            <div class="match-row" onclick="openMatchModal('${keyBase}', '${m.t1}', '${m.t2}')">
                <div class="match-meta"><span>${ctx.text || 'Phase de groupes'}</span> ${renderStatusBadgeHTML(ctx)}</div>
                <div class="match-teams">
                    <span class="team-name">${formatTeamName(m.t1)}</span>
                    <div class="score-box-view">${s1} : ${s2}</div>
                    <span class="team-name">${formatTeamName(m.t2)}</span>
                </div>
            </div>`;
    });
}

function renderKnockoutContainers() {
    setupStageCards('box-16es', '16', '1/16 Finales');
    setupStageCards('box-8es', '8', '1/8 Finales');
    setupStageCards('box-quarts', '4', 'Quarts');
    setupStageCards('box-demis', '2', 'Demis');
    setupStageCards('box-petite-finale', '3', 'Petite Finale'); 
    setupStageCards('box-finale', 'F', 'Grande Finale');
}

function setupStageCards(id, label, titleText) {
    const target = document.getElementById(id); if (!target) return; target.innerHTML = '';
    const visualOrder = STAGE_ORDERS[label] || [];
    visualOrder.forEach(i => {
        const keyBase = `${label}-${i}`;
        const s1 = scores[`${keyBase}-0`] ?? '-'; const s2 = scores[`${keyBase}-1`] ?? '-';
        const ctx = getMatchTimeContext(keyBase);
        target.innerHTML += `
        <div class="match-row" onclick="openMatchModal('${keyBase}', tree['${keyBase}-t1'], tree['${keyBase}-t2'])">
            <div class="match-meta"><span>${titleText} - #${i}</span> ${renderStatusBadgeHTML(ctx)}</div>
            <div class="match-teams">
                <span id="${keyBase}-t1" class="team-name">...</span>
                <div class="score-box-view">${s1} : ${s2}</div>
                <span id="${keyBase}-t2" class="team-name">...</span>
            </div>
        </div>`;
    });
}

async function openMatchModal(matchId, t1, t2) {
    currentActiveMatchId = matchId; const ctx = getMatchTimeContext(matchId);
    document.getElementById('modal-match-title').innerText = `Fiche Match – #${matchId}`;
    document.getElementById('modal-match-date').innerText = ctx.text;
    document.getElementById('modal-t1-name').innerHTML = formatTeamName(t1, `${matchId}-t1`);
    document.getElementById('modal-t2-name').innerHTML = formatTeamName(t2, `${matchId}-t2`);

    const s1_val = scores[`${matchId}-0`] ?? '-'; const s2_val = scores[`${matchId}-1`] ?? '-';
    document.getElementById('modal-score-val').innerText = `${s1_val} - ${s2_val}`;

    const tBox = document.getElementById('modal-tab-val');
    tBox.innerText = (s1_val !== '-' && s1_val === s2_val && scores[`${matchId}-tab0`] !== undefined) 
        ? `TAB : ${scores[`${matchId}-tab0`]} - ${scores[`${matchId}-tab1` ]}` : '';

    const pronoForm = document.getElementById('prono-form-card');
    const lockAlert = document.getElementById('modal-lock-msg');
    const userPseudo = localStorage.getItem('wc_pseudo');

    if (!userPseudo) {
        pronoForm.style.display = 'none'; lockAlert.innerHTML = "🔒 Connectez-vous pour pouvoir parier."; lockAlert.style.display = 'block';
    } else if (ctx.status === 'complete' || (ctx.iso && new Date() >= new Date(ctx.iso))) {
        pronoForm.style.display = 'none'; lockAlert.innerHTML = "🔒 Verrouillé (Match débuté ou terminé)."; lockAlert.style.display = 'block';
    } else {
        pronoForm.style.display = 'block'; lockAlert.style.display = 'none';
        document.getElementById('prono-s1').value = ''; document.getElementById('prono-s2').value = '';
    }
    document.getElementById('match-modal').style.display = 'flex'; await loadMatchPronostics(matchId);
}

function closeModal() { document.getElementById('match-modal').style.display = 'none'; }

async function loadMatchPronostics(matchId) {
    const container = document.getElementById('prono-list-container'); 
    container.innerHTML = "Chargement...";
    
    const { data: usersData, error: uError } = await supabaseClient.from('users').select('pseudo, avatar');
    if (uError) { container.innerHTML = "Erreur de chargement des profils."; return; }
    
    const avatarMap = {};
    if (usersData) {
        usersData.forEach(u => {
            avatarMap[u.pseudo] = u.avatar || '⚽';
        });
    }

    const { data, error } = await supabaseClient.from('pronostics').select('*').eq('match_id', matchId);
    if (error) { container.innerHTML = "Erreur."; return; }
    if (!data || data.length === 0) { container.innerHTML = "Aucun pronostic déposé."; return; }
    
    container.innerHTML = data.map(p => {
        const userAvatar = avatarMap[p.pseudo] || '⚽';
        return `
            <div class="prono-item">
                <span><span class="profile-avatar">${userAvatar}</span> <strong>${p.pseudo}</strong></span>
                <span class="prono-val">${p.predicted_score1} - ${p.predicted_score2}</span>
            </div>
        `;
    }).join('');
}

async function saveUserPronostic() {
    const pseudo = localStorage.getItem('wc_pseudo'), user_code = localStorage.getItem('wc_code');
    const s1 = document.getElementById('prono-s1').value.trim(), s2 = document.getElementById('prono-s2').value.trim();
    if (!pseudo || !user_code) return; if (s1 === '' || s2 === '') { alert("Score invalide."); return; }

    const ctx = getMatchTimeContext(currentActiveMatchId);
    if (ctx.status === 'complete' || (ctx.iso && new Date() >= new Date(ctx.iso))) { alert("Verrouillé !"); return; }

    const { error } = await supabaseClient.from('pronostics').upsert({
        match_id: currentActiveMatchId, pseudo, predicted_score1: parseInt(s1), predicted_score2: parseInt(s2), user_code, updated_at: new Date()
    }, { onConflict: 'match_id, pseudo' });

    if (error) { alert("Erreur d'envoi : " + error.message); } 
    else { alert("Pronostic sauvegardé !"); closeModal(); await syncFromSupabase(); }
}

async function calculateLeaderboard() {
    const tbody = document.getElementById('leaderboard-tbody'); if (!tbody) return;

    const { data: users, error: uErr } = await supabaseClient.from('users').select('pseudo, avatar');
    const { data: pronos, error: pErr } = await supabaseClient.from('pronostics').select('*');
    if (uErr || pErr) return;

    let userScores = {};
    users.forEach(u => { 
        userScores[u.pseudo] = { pseudo: u.pseudo, avatar: u.avatar || '⚽', exacts: 0, diffs: 0, partials: 0, totalPoints: 0 }; 
    });

    pronos.forEach(p => {
        const actS1 = scores[`${p.match_id}-0`], actS2 = scores[`${p.match_id}-1`];
        if (actS1 !== undefined && actS2 !== undefined && userScores[p.pseudo]) {
            const prS1 = p.predicted_score1, prS2 = p.predicted_score2;
            
            const actualSign = Math.sign(actS1 - actS2);
            const predSign = Math.sign(prS1 - prS2);

            if (actS1 === prS1 && actS2 === prS2) {
                userScores[p.pseudo].exacts++;
                userScores[p.pseudo].totalPoints += 5;
            } else if (actualSign === predSign) {
                const actualDiff = actS1 - actS2;
                const predDiff = prS1 - prS2;
                if (actualDiff === predDiff) {
                    userScores[p.pseudo].diffs++;
                    userScores[p.pseudo].totalPoints += 3;
                } else {
                    userScores[p.pseudo].partials++;
                    userScores[p.pseudo].totalPoints += 2;
                }
            }
        }
    });

    let rankList = Object.values(userScores).sort((a,b) => {
        return b.totalPoints - a.totalPoints || b.exacts - a.exacts || b.diffs - a.diffs || b.partials - a.partials;
    });

    let currentRank = 1;
    rankList.forEach((player, index) => {
        if (index > 0) {
            const prev = rankList[index - 1];
            const isTie = player.totalPoints === prev.totalPoints && 
                          player.exacts === prev.exacts && 
                          player.diffs === prev.diffs && 
                          player.partials === prev.partials;
            if (!isTie) {
                currentRank = index + 1;
            }
        }
        player.rank = currentRank;
    });

    globalRankList = rankList; 

    const counts = {};
    rankList.forEach(p => { counts[p.rank] = (counts[p.rank] || 0) + 1; });

    tbody.innerHTML = rankList.map((player) => {
        const isTie = counts[player.rank] > 1;
        const stringRank = isTie ? `#${player.rank} <span style="font-size:0.65rem; opacity:0.6; font-weight:normal;">(ex.)</span>` : `#${player.rank}`;
        return `
            <tr>
                <td><strong>${stringRank}</strong></td>
                <td><span class="profile-avatar">${player.avatar}</span> ${player.pseudo}</td>
                <td style="text-align: center; color: var(--text-muted); font-weight:600;">${player.exacts}</td>
                <td style="text-align: center; color: var(--text-muted); font-weight:600;">${player.diffs}</td>
                <td style="text-align: center; color: var(--text-muted); font-weight:600;">${player.partials}</td>
                <td style="text-align: right; padding-right: 15px; font-size: 1rem; color: var(--accent);"><strong>${player.totalPoints} pts</strong></td>
            </tr>
        `;
    }).join('');
    
    if (document.getElementById('sec-account').classList.contains('active')) updateAccountDashboard();
}

function calculate() {
    let groupStandings = {}; let allGroupsDone = true; tree = {}; 

    for (let l in TEAMS) {
        let sData = TEAMS[l].map(name => ({ name, pts: 0, diff: 0, bp: 0 })); let matchesPlayed = 0;
        MATCH_MAP.forEach((m, idx) => {
            let s1 = scores[`G-${l}-${idx}-0`], s2 = scores[`G-${l}-${idx}-1`];
            if (s1 !== undefined && s2 !== undefined) {
                matchesPlayed++;
                sData[m[0]].diff += (s1 - s2); sData[m[0]].bp += s1; sData[m[1]].diff += (s2 - s1); sData[m[1]].bp += s2;
                if (s1 > s2) sData[m[0]].pts += 3; else if (s2 > s1) sData[m[1]].pts += 3; else { sData[m[0]].pts += 1; sData[m[1]].pts += 1; }
            }
        });
        sData.sort((a,b) => b.pts - a.pts || b.diff - a.diff || b.bp - a.bp);
        let isComplete = matchesPlayed === 6; groupStandings[l] = { teams: sData, isComplete };
        if (!isComplete) allGroupsDone = false;

        renderGroupMatches(l);
        const tbody = document.getElementById(`tab-${l}`);
        if (tbody) {
            tbody.innerHTML = sData.map((t,i) => `
                <tr class="${(i < 2 && isComplete) ? 'qualified' : ''}"><td>${i+1}</td><td>${formatTeamName(t.name)}</td><td><strong>${t.pts}</strong></td><td>${t.diff}</td></tr>`).join("");
        }
    }
    buildKnockoutTree(groupStandings, allGroupsDone);
    processStage(16, '16', '8'); processStage(8, '8', '4'); processStage(4, '4', '2'); processStage(2, '2', 'F'); processStage(1, '3', null); processStage(1, 'F', 'CHAMPION');
    updateKnockoutUI();
}

function buildKnockoutTree(standings, allGroupsDone) {
    let bestThirds = [];
    if (allGroupsDone) {
        for (let l in standings) {
            if (standings[l].teams[2]) {
                bestThirds.push({ name: standings[l].teams[2].name, group: l, pts: standings[l].teams[2].pts, diff: standings[l].teams[2].diff, bp: standings[l].teams[2].bp });
            }
        }
        bestThirds.sort((a, b) => b.pts - a.pts || b.diff - a.diff || b.bp - a.bp); bestThirds = bestThirds.slice(0, 8);
    }

    let thirdAssignments = Array(8).fill('');
    if (allGroupsDone && bestThirds.length === 8) {
        const targets = ['E', 'I', 'A', 'L', 'G', 'D', 'B', 'K']; let pool = [...bestThirds];
        for (let i = 0; i < 8; i++) {
            let matchIdx = pool.findIndex(t => t.group !== targets[i]); if (matchIdx === -1) matchIdx = 0; 
            thirdAssignments[i] = pool[matchIdx].name; pool.splice(matchIdx, 1); 
        }
    }

    const getTeam = (groupLetter, rank) => {
        if (standings[groupLetter] && standings[groupLetter].isComplete) return standings[groupLetter].teams[rank]?.name || '';
        return '';
    };

    const config = [
        { t1: getTeam('A', 1), t2: getTeam('B', 1) },        
        { t1: getTeam('C', 0), t2: getTeam('F', 1) },        
        { t1: getTeam('E', 0), t2: thirdAssignments[0] },    
        { t1: getTeam('F', 0), t2: getTeam('C', 1) },        
        { t1: getTeam('E', 1), t2: getTeam('I', 1) },        
        { t1: getTeam('I', 0), t2: thirdAssignments[1] },    
        { t1: getTeam('A', 0), t2: thirdAssignments[2] },    
        { t1: getTeam('L', 0), t2: thirdAssignments[3] },    
        { t1: getTeam('G', 0), t2: thirdAssignments[4] },    
        { t1: getTeam('D', 0), t2: thirdAssignments[5] },    
        { t1: getTeam('H', 0), t2: getTeam('J', 1) },        
        { t1: getTeam('K', 1), t2: getTeam('L', 1) },        
        { t1: getTeam('B', 0), t2: thirdAssignments[6] },    
        { t1: getTeam('D', 1), t2: getTeam('G', 1) },        
        { t1: getTeam('J', 0), t2: getTeam('H', 1) },        
        { t1: getTeam('K', 0), t2: thirdAssignments[7] }     
    ];

    config.forEach((match, idx) => {
        tree[`16-${idx + 1}-t1`] = match.t1; tree[`16-${idx + 1}-t2`] = match.t2;
    });
}

function processStage(count, curr, next) {
    for (let i = 1; i <= count; i++) {
        let t1 = tree[`${curr}-${i}-t1`], t2 = tree[`${curr}-${i}-t2`];
        let s1 = scores[`${curr}-${i}-0`], s2 = scores[`${curr}-${i}-1`];
        if (t1 && t2 && s1 !== undefined && s2 !== undefined) {
            let winner, loser;
            if (s1 > s2) { winner = t1; loser = t2; } else if (s2 > s1) { winner = t2; loser = t1; } else {
                let tab1 = scores[`${curr}-${i}-tab0`], tab2 = scores[`${curr}-${i}-tab1`];
                if (tab1 !== undefined && tab2 !== undefined) { winner = tab1 > tab2 ? t1 : t2; loser = tab1 > tab2 ? t2 : t1; }
            }
            if (winner && next) {
                if (next === 'CHAMPION') { tree['CHAMPION'] = winner; } else {
                    const link = KNOCKOUT_LINKS[`${curr}-${i}`];
                    if (link) {
                        tree[`${next}-${link.nextId}-${link.nextPos}`] = winner;
                        if (curr === '2') tree[`3-1-${link.nextPos}`] = loser;
                    }
                }
            }
        }
    }
}

function updateKnockoutUI() {
    const stages = [
        { label: '16', text: '1/16 Finales' }, { label: '8', text: '1/8 Finales' }, 
        { label: '4', text: 'Quarts' }, { label: '2', text: 'Demis' }, 
        { label: '3', text: 'Petite Finale' }, { label: 'F', text: 'Grande Finale' }
    ];
    
    stages.forEach(stage => {
        const visualOrder = STAGE_ORDERS[stage.label] || [];
        visualOrder.forEach(i => {
            const keyBase = `${stage.label}-${i}`;
            let el1 = document.getElementById(`${keyBase}-t1`), el2 = document.getElementById(`${keyBase}-t2`);
            let t1Name = tree[`${keyBase}-t1`], t2Name = tree[`${keyBase}-t2`];
            
            if (el1) el1.innerHTML = formatTeamName(t1Name, `${keyBase}-t1`); 
            if (el2) el2.innerHTML = formatTeamName(t2Name, `${keyBase}-t2`);
            
            let s1 = scores[`${keyBase}-0`] ?? '-'; let s2 = scores[`${keyBase}-1`] ?? '-';
            let rowEl = el1 ? el1.closest('.match-row') : null;
            
            if (rowEl) {
                rowEl.querySelector('.score-box-view').innerText = `${s1} : ${s2}`;
                const ctx = getMatchTimeContext(keyBase);
                rowEl.querySelector('.match-meta').innerHTML = `<span>${stage.text} - #${i}</span> ${renderStatusBadgeHTML(ctx)}`;
                rowEl.onclick = () => openMatchModal(keyBase, t1Name, t2Name);
            }
        });
    });
    const cb = document.getElementById('world-champion'); if (cb) cb.innerHTML = formatTeamName(tree['CHAMPION']) || "À déterminer";
}

async function importData() {
    const codeInput = document.getElementById('import-code-input').value.trim();
    const { data: config, error: configError } = await supabaseClient.from('app_config').select('value').eq('key', 'import_code').maybeSingle();
    if (configError || !config || config.value !== codeInput) { alert("Code admin incorrect."); return; }

    let txt = document.getElementById('io-text').value.trim(); if (!txt) return;
    let lines = txt.split("\n"), upsertPayloads = [];
    const regex = /^(G|16|8|4|2|3|F)(?:-(\d+))?\.([A-Z]{3})-([A-Z]{3}):(\d+)-(\d+)(?:\((\d+)-(\d+)\))?$/;

    for (let line of lines) {
        let match = line.trim().match(regex); if (!match) continue;
        let [, type, explicitIdx, c1, c2, s1, s2, tab1, tab2] = match;
        let t1 = Object.keys(CODES).find(k => CODES[k] === c1), t2 = Object.keys(CODES).find(k => CODES[k] === c2);
        if (!t1 || !t2) continue;

        let matchId = null;
        if (type === 'G') {
            for (let l in GROUP_MATCHES) {
                GROUP_MATCHES[l].forEach((m, idx) => {
                    if ((m.t1 === t1 && m.t2 === t2) || (m.t1 === t2 && m.t2 === m.t1)) {
                        matchId = `G-${l}-${idx}`; let rev = m.t1 === t2;
                        scores[`${matchId}-0`] = parseInt(rev ? s2 : s1); scores[`${matchId}-1`] = parseInt(rev ? s1 : s2);
                    }
                });
            }
        } else {
            if (explicitIdx) {
                matchId = `${type}-${explicitIdx}`; let currT1 = tree[`${matchId}-t1`]; let rev = (currT1 === t2);
                scores[`${matchId}-0`] = parseInt(rev ? s2 : s1); scores[`${matchId}-1`] = parseInt(rev ? s1 : s2);
                if (tab1 !== undefined) { scores[`${matchId}-tab0`] = parseInt(rev ? tab2 : tab1); scores[`${matchId}-tab1`] = parseInt(rev ? tab1 : tab2); }
            } else {
                let count = type === '16' ? 16 : type === '8' ? 8 : type === '4' ? 4 : type === '2' ? 2 : 1;
                for (let i = 1; i <= count; i++) {
                    let currT1 = tree[`${type}-${i}-t1`], currT2 = tree[`${type}-${i}-t2` || `${type}-${i}-t2__`];
                    if ((currT1 === t1 && currT2 === t2) || (currT1 === t2 && currT2 === t1)) {
                        matchId = `${type}-${i}`; let rev = currT1 === t2;
                        scores[`${matchId}-0`] = parseInt(rev ? s2 : s1); scores[`${matchId}-1`] = parseInt(rev ? s1 : s2);
                        if (tab1 !== undefined) { scores[`${matchId}-tab0`] = parseInt(rev ? tab2 : tab1); scores[`${matchId}-tab1`] = parseInt(rev ? tab1 : tab2); }
                    }
                }
            }
        }
        if (matchId) {
            upsertPayloads.push({ id: matchId, score1: scores[`${matchId}-0`], score2: scores[`${matchId}-1`], tab1: scores[`${matchId}-tab0`] || null, tab2: scores[`${matchId}-tab1`] || null });
        }
    }
    if(upsertPayloads.length > 0) {
        const { error } = await supabaseClient.from('matches').upsert(upsertPayloads);
        if (!error) { alert("Scores synchronisés !"); await syncFromSupabase(); }
    }
}

function exportData() {
    let out = [];
    for (let l in GROUP_MATCHES) {
        GROUP_MATCHES[l].forEach((m, idx) => {
            let s1 = scores[`G-${l}-${idx}-0`], s2 = scores[`G-${l}-${idx}-1`];
            if (s1 !== undefined && s2 !== undefined) out.push(`G.${CODES[m.t1]}-${CODES[m.t2]}:${s1}-${s2}`);
        });
    }
    const stages = [{ count: 16, label: '16' }, { count: 8, label: '8' }, { count: 4, label: '4' }, { count: 2, label: '2' }, { count: 1, label: '3' }, { count: 1, label: 'F' }];
    stages.forEach(stage => {
        for (let i = 1; i <= stage.count; i++) {
            let keyBase = `${stage.label}-${i}`; let t1 = tree[`${keyBase}-t1`], t2 = tree[`${keyBase}-t2`];
            let s1 = scores[`${keyBase}-0`], s2 = scores[`${keyBase}-1`] || scores[`${keyBase}-1__`];
            if (t1 && t2 && s1 !== undefined && s2 !== undefined) {
                let c1 = CODES[t1], c2 = CODES[t2];
                if (c1 && c2) {
                    let tab0 = scores[`${keyBase}-tab0`], tab1 = scores[`${keyBase}-tab1`];
                    let tabStr = (tab0 !== undefined && tab1 !== undefined) ? `(${tab0}-${tab1})` : '';
                    out.push(`${stage.label}-${i}.${c1}-${c2}:${s1}-${s2}${tabStr}`);
                }
            }
        }
    });
    document.getElementById('io-text').value = out.join("\n");
}

function exportBracketToPNG() {
    const element = document.getElementById('bracket-capture-target');
    const isDark = document.body.classList.contains('dark-mode');
    const bgCanvasColor = isDark ? '#111a2e' : '#f1f5f9'; 
    
    html2canvas(element, { backgroundColor: bgCanvasColor, scale: 2 }).then(canvas => {
        const link = document.createElement('a'); 
        link.download = 'Arbre_2026.png'; 
        link.href = canvas.toDataURL('image/png'); 
        link.click();
    });
}

function showSection(id, el) {
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`sec-${id}`).classList.add('active'); el.classList.add('active');
}

window.onload = init;