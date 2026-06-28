const SUPABASE_URL = "https://ugwjflbeyjfaidwhweva.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_ljkn1OeUIHwXIx2o3djCGQ_-UmMaO9I";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Centralisation globale de la liste d'émojis avatars
const AVATAR_EMOJIS = [
  "⚽", "😖", "🏐", "🏀", "🥅", "🏃‍♂️", "🤾", "⛹️","🦁", "🦅", "🦊", "🐺", "🐉", "🐯", "🐼", "🦄",
  "😎", "🤠", "🥸", "🤯", "🤨", "😏", "😜", "🤙","⚡", "🔥", "💥", "🌪️", "✨",
  "👑", "🏆", "💎", "⭐", "🥇","🏈", "🥊", "🥋", "🚴‍♂️", "🏄‍♂️", "🏊‍♂️", "⛷️", "🏇",
  "🐻", "🦍", "🦓", "🦒", "🐸", "🐙", "🦈","🤘", "😤", "🤩", "😶‍🌫️", "😈", "🤓", "😬", "🤫",
  "🌈", "🌟", "💫", "🌋", "🌌", "⚔️", "🛡️", "🎯","💰", "🏅", "🎖️", "📣", "🎉", "🎵", "🎮", "🧩", "🧑‍💻"
];

const MATCH_SCHEDULE = {
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

    "G-E-4": { display: "Jeudi 25 Juin – 22:00", iso: "2026-06-25T22:00:00+02:00" },
    "G-E-5": { display: "Jeudi 25 Juin – 22:00", iso: "2026-06-25T22:00:00+02:00" },
    "G-F-4": { display: "Vendredi 26 Juin – 01:00", iso: "2026-06-26T01:00:00+02:00" },
    "G-F-5": { display: "Vendredi 26 Juin – 01:00", iso: "2026-06-26T01:00:00+02:00" },
    "G-D-3": { display: "Vendredi 26 Juin – 04:00", iso: "2026-06-26T04:00:00+02:00" },
    "G-D-4": { display: "Vendredi 26 Juin – 04:00", iso: "2026-06-26T04:00:00+02:00" },
    "G-D-5": { display: "Samedi 26 Juin – 04:00", iso: "2026-06-26T04:00:00+02:00" },

    "G-I-4": { display: "Vendredi 26 Juin – 21:00", iso: "2026-06-26T21:00:00+02:00" },
    "G-I-5": { display: "Vendredi 26 Juin – 21:00", iso: "2026-06-26T21:00:00+02:00" },
    "G-H-4": { display: "Samedi 27 Juin – 02:00", iso: "2026-06-27T02:00:00+02:00" },
    "G-H-5": { display: "Samedi 27 Juin – 02:00", iso: "2026-06-27T02:00:00+02:00" },
    "G-G-4": { display: "Samedi 27 Juin – 05:00", iso: "2026-07-27T05:00:00+02:00" },
    "G-G-5": { display: "Samedi 27 Juin – 05:00", iso: "2026-07-27T05:00:00+02:00" },
    
    "G-L-4": { display: "Samedi 27 Juin – 23:00", iso: "2026-06-27T23:00:00+02:00" },
    "G-L-5": { display: "Samedi 27 Juin – 23:00", iso: "2026-06-27T23:00:00+02:00" },
    "G-K-4": { display: "Dimanche 28 Juin – 01:30", iso: "2026-06-28T01:30:00+02:00" },
    "G-K-5": { display: "Dimanche 28 Juin – 01:30", iso: "2026-06-28T01:30:00+02:00" },
    "G-J-4": { display: "Dimanche 28 Juin – 04:00", iso: "2026-06-28T04:00:00+02:00" },
    "G-J-5": { display: "Dimanche 28 Juin – 04:00", iso: "2026-06-28T04:00:00+02:00" },

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

    "8-1": { display: "Samedi 4 Juillet – 19:00", iso: "2026-07-04T19:00:00+02:00" },
    "8-2": { display: "Samedi 4 Juillet – 23:00", iso: "2026-07-04T23:00:00+02:00" },
    "8-3": { display: "Dimanche 5 Juillet – 22:00", iso: "2026-07-05T22:00:00+02:00" },
    "8-4": { display: "Lundi 6 Juillet – 06:00", iso: "2026-07-06T06:00:00+02:00" },
    "8-5": { display: "Lundi 6 Juillet – 21:00", iso: "2026-07-06T21:00:00+02:00" },
    "8-6": { display: "Mardi 7 Juillet – 02:00", iso: "2026-07-07T02:00:00+02:00" },
    "8-7": { display: "Mardi 7 Juillet – 18:00", iso: "2026-07-07T18:00:00+02:00" },
    "8-8": { display: "Mardi 7 Juillet – 22:00", iso: "2026-07-22T22:00:00+02:00" },

    "4-1": { display: "Jeudi 9 Juillet – 22:00", iso: "2026-07-09T22:00:00+02:00" },
    "4-2": { display: "Vendredi 10 Juillet – 21:00", iso: "2026-07-10T21:00:00+02:00" },
    "4-3": { display: "Samedi 11 Juillet – 23:00", iso: "2026-07-11T23:00:00+02:00" },
    "4-4": { display: "Dimanche 12 Juillet – 03:00", iso: "2026-07-12T03:00:00+02:00" },

    "2-1": { display: "Mardi 14 Juillet – 21:00", iso: "2026-07-14T21:00:00+02:00" },
    "2-2": { display: "Mercredi 15 Juillet – 21:00", iso: "2026-07-15T21:00:00+02:00" },

    "3-1": { display: "Samedi 18 Juillet – 23:00", iso: "2026-07-18T23:00:00+02:00" },
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

// DICTIONNAIRE MANUEL DES 1/16 DE FINALE
// Modifie les noms des équipes ici pour refléter le tirage réel ou les équipes qualifiées
const MANUAL_KNOCKOUT_TEAMS = {
    "16-1": { t1: "Mexique", t2: "Suisse" },
    "16-2": { t1: "Bresil", t2: "Japon" },
    "16-3": { t1: "Allemagne", t2: "Turquie" },
    "16-4": { t1: "Pays-Bas", t2: "Maroc" },
    "16-5": { t1: "Cote dIvoire", t2: "France" },
    "16-6": { t1: "Senegal", t2: "USA" },
    "16-7": { t1: "Afrique du Sud", t2: "Suede" },
    "16-8": { t1: "Angleterre", t2: "Arabie Saoudite" },
    "16-9": { t1: "Belgique", t2: "Coree du Sud" },
    "16-10": { t1: "Paraguay", t2: "Bosnie" },
    "16-11": { t1: "Espagne", t2: "Algerie" },
    "16-12": { t1: "RD Congo", t2: "Croatie" },
    "16-13": { t1: "Canada", t2: "Iran" },
    "16-14": { t1: "Australie", t2: "Egypte" },
    "16-15": { t1: "Argentine", t2: "Cap-Vert" },
    "16-16": { t1: "Portugal", t2: "Ouzbekistan" }
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

  //DICTIONNAIRE MANUEL DES 1/16 DE FINALE
// Modifie les noms des équipes ici pour refléter le tirage réel ou les équipes qualifiées
const MANUAL_KNOCKOUT_TEAMS = {
    "16-1": { t1: "Afrique du Sud", t2: "Canada" },
    "16-2": { t1: "Bresil", t2: "Japon" },
    "16-3": { t1: "Allemagne", t2: "Paraguay" },
    "16-4": { t1: "Pays-Bas", t2: "Maroc" },
    "16-5": { t1: "Cote dIvoire", t2: "Norvège" },
    "16-6": { t1: "France", t2: "Suède" },
    "16-7": { t1: "Mexique", t2: "Equateur" },
    "16-8": { t1: "Angleterre", t2: "RD Congo" },
    "16-9": { t1: "Belgique", t2: "Sénégal" },
    "16-10": { t1: "USA", t2: "Bosnie" },
    "16-11": { t1: "Espagne", t2: "Autriche" },
    "16-12": { t1: "Portugal", t2: "Croatie" },
    "16-13": { t1: "Suisse", t2: "Algérie" },
    "16-14": { t1: "Australie", t2: "Egypte" },
    "16-15": { t1: "Argentine", t2: "Cap-Vert" },
    "16-16": { t1: "Colombie", t2: "Ghana" }

const STAGE_ORDERS = {
    '16': [1, 4, 3, 6, 12, 11, 10, 9, 2, 5, 7, 8, 15, 14, 13, 16],
    '8': [1, 2, 5, 6, 3, 4, 7, 8],
    '4': [1, 2, 3, 4],
    '2': [1, 2],
    '3': [1],
    'F': [1]
};

const KNOCKOUT_PLACEHOLDERS = {
    "16-1-t1": "2A", "16-1-t2": "2B", "16-2-t1": "1C", "16-2-t2": "2F",
    "16-3-t1": "1E", "16-3-t2": "3ABCDF", "16-4-t1": "1F", "16-4-t2": "2C",
    "16-5-t1": "2E", "16-5-t2": "2I", "16-6-t1": "1I", "16-6-t2": "3CDFGH",
    "16-7-t1": "1A", "16-7-t2": "3CEFHI", "16-8-t1": "1L", "16-8-t2": "3EHIJK",
    "16-9-t1": "1G", "16-9-t2": "3AEHIJ", "16-10-t1": "1D", "16-10-t2": "3BEFIJ",
    "16-11-t1": "1H", "16-11-t2": "2J", "16-12-t1": "2K", "16-12-t2": "2L",
    "16-13-t1": "1B", "16-13-t2": "3EFGIJ", "16-14-t1": "2D", "16-14-t2": "2G",
    "16-15-t1": "1J", "16-15-t2": "2H", "16-16-t1": "1K", "16-16-t2": "3DEIJL",
    "8-1-t1": "16-1", "8-1-t2": "16-4", "8-2-t1": "16-3", "8-2-t2": "16-6",
    "8-3-t1": "16-2", "8-3-t2": "16-5", "8-4-t1": "16-7", "8-4-t2": "16-8",
    "8-5-t1": "16-12", "8-5-t2": "16-11", "8-6-t1": "16-10", "8-6-t2": "16-9",
    "8-7-t1": "16-15", "8-7-t2": "16-14", "8-8-t1": "16-13", "8-8-t2": "16-16",
    "4-1-t1": "8-2", "4-1-t2": "8-1", "4-2-t1": "8-5", "4-2-t2": "8-6",
    "4-3-t1": "8-3", "4-3-t2": "8-4", "4-4-t1": "8-7", "4-4-t2": "8-8",
    "2-1-t1": "4-1", "2-1-t2": "4-2", "2-2-t1": "4-3", "2-2-t1": "4-4",
    "3-1-t1": "p. 2-1", "3-1-t2": "p. 2-2", "F-1-t1": "2-1", "F-1-t2": "2-2"
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
let myPronostics = {};
let currentMatchPronosticsData = [];

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

// Fonction utilitaire asynchrone de hachage SHA-256 pour sécuriser les codes secrets
async function hashString(str) {
    if (!str) return '';
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Initialisation de l'œil d'affichage dynamique pour le mot de passe
function setupPasswordToggle() {
    const codeInput = document.getElementById('acc-input-code');
    if (codeInput && !document.getElementById('acc-code-toggle')) {
        codeInput.type = 'password';
        const wrapper = document.createElement('div');
        wrapper.className = 'password-wrapper';
        codeInput.parentNode.insertBefore(wrapper, codeInput);
        wrapper.appendChild(codeInput);

        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'acc-code-toggle';
        toggleBtn.type = 'button';
        toggleBtn.className = 'btn-toggle-password';
        toggleBtn.innerHTML = '👁️';
        toggleBtn.onclick = () => {
            if (codeInput.type === 'password') {
                codeInput.type = 'text';
                toggleBtn.innerHTML = '🙈';
            } else {
                codeInput.type = 'password';
                toggleBtn.innerHTML = '👁️';
            }
        };
        wrapper.appendChild(toggleBtn);
    }
}

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
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('wc_theme', isDark ? 'dark' : 'light');
    document.getElementById('theme-toggle').innerText = isDark ? "☀️ Mode Clair" : "🌙 Mode Sombre";
}

function populateAvatars() {
    const authSelect = document.getElementById('auth-avatar');
    const accSelect = document.getElementById('acc-select-avatar');
    const optionsHTML = AVATAR_EMOJIS.map(emoji => `<option value="${emoji}">${emoji}</option>`).join('');
    if (authSelect) authSelect.innerHTML = optionsHTML;
    if (accSelect) accSelect.innerHTML = optionsHTML;
}

const AUTO_RELOAD_INTERVAL_MS = 10 * 60 * 1000; 
const AUTO_RELOAD_RETRY_MS = 45 * 1000;         

function scheduleAutoReload(delay = AUTO_RELOAD_INTERVAL_MS) {
    setTimeout(() => {
        const modalOpen = document.getElementById('match-modal')?.style.display === 'flex';
        const active = document.activeElement;
        const isTyping = active && ['INPUT', 'TEXTAREA', 'SELECT'].includes(active.tagName);
        if (modalOpen || isTyping) {
            scheduleAutoReload(AUTO_RELOAD_RETRY_MS);
        } else {
            window.location.reload();
        }
    }, delay);
}

async function init() {
    initTheme();
    populateAvatars();
    setupPasswordToggle();
    updateAuthUI();
    renderGroupsSection(['A','B','C','D','E','F'], 'sec-G1');
    renderGroupsSection(['G','H','I','J','K','L'], 'sec-G2');
    renderKnockoutContainers();
    await syncFromSupabase();
    if (getSession()) showRankReveal();
    scheduleAutoReload();
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

const TOAST_ICONS = { success: '✅', error: '⚠️', warning: '🔒', info: 'ℹ️' };

function showToast(message, type = 'info', duration = 4500) {
    const container = document.getElementById('toast-container');
    if (!container) { console.log(`[${type}] ${message}`); return; }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${TOAST_ICONS[type] || TOAST_ICONS.info}</span>
        <span class="toast-msg">${message}</span>
        <button class="toast-close" aria-label="Fermer">✕</button>`;

    const dismiss = () => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 250);
    };
    toast.querySelector('.toast-close').onclick = dismiss;

    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(dismiss, duration);
}

function renderMyPronoBadgeHTML(matchId) {
    const session = getSession();
    if (!session) return '';
    const mine = myPronostics[matchId];
    if (mine) {
        return `<span class="my-prono-badge has" title="Votre pronostic">🎯 Mon prono : ${mine.s1}-${mine.s2}</span>`;
    }
    return `<span class="my-prono-badge none" title="Aucun pronostic déposé">— Pas de prono</span>`;
}

async function loadMyPronostics() {
    const session = getSession();
    if (!session) { myPronostics = {}; return; }
    const { data, error } = await supabaseClient
        .from('pronostics')
        .select('match_id, predicted_score1, predicted_score2')
        .eq('pseudo', session.pseudo);
    myPronostics = {};
    if (!error && data) {
        data.forEach(p => { myPronostics[p.match_id] = { s1: p.predicted_score1, s2: p.predicted_score2 }; });
    }
}

let rankRevealTimer = null;

function showRankReveal() {
    const session = getSession();
    if (!session) return;
    const myStats = globalRankList.find(p => p.pseudo === session.pseudo);
    if (!myStats) return; 

    const overlay = document.getElementById('rank-reveal-overlay');
    const numberEl = document.getElementById('rank-reveal-number');
    const pointsEl = document.getElementById('rank-reveal-points');
    if (!overlay || !numberEl || !pointsEl) return;

    clearTimeout(rankRevealTimer);

    const colorClass = myStats.rank === 1 ? 'rank-gold' : myStats.rank === 2 ? 'rank-silver' : myStats.rank === 3 ? 'rank-bronze' : 'rank-other';
    numberEl.className = `rank-reveal-number ${colorClass}`;
    numberEl.innerText = `#${myStats.rank}`;
    pointsEl.innerText = `${myStats.pseudo} — ${myStats.totalPoints} pt${myStats.totalPoints === 1 ? '' : 's'}`;

    overlay.style.display = 'flex';
    requestAnimationFrame(() => overlay.classList.add('show'));

    rankRevealTimer = setTimeout(dismissRankReveal, 1500);
}

function dismissRankReveal() {
    clearTimeout(rankRevealTimer);
    const overlay = document.getElementById('rank-reveal-overlay');
    if (!overlay || overlay.style.display !== 'flex') return;
    overlay.classList.remove('show');
    setTimeout(() => { overlay.style.display = 'none'; }, 450);
}

function getSession() {
    const pseudo = localStorage.getItem('wc_pseudo');
    if (!pseudo) return null;
    return {
        pseudo,
        code: localStorage.getItem('wc_code') || '',
        avatar: localStorage.getItem('wc_avatar') || '⚽'
    };
}

function setSession({ pseudo, code, avatar }) {
    localStorage.setItem('wc_pseudo', pseudo);
    localStorage.setItem('wc_code', code);
    localStorage.setItem('wc_avatar', avatar || '⚽');
}

function clearSession() {
    localStorage.removeItem('wc_pseudo');
    localStorage.removeItem('wc_code');
    localStorage.removeItem('wc_avatar');
}

async function handleAuth() {
    const pseudo = document.getElementById('auth-pseudo').value.trim();
    const code = document.getElementById('auth-code').value.trim();
    const avatar = document.getElementById('auth-avatar').value;
    if (!pseudo || !code) { showToast("Merci de remplir le pseudo et le code secret.", "warning"); return; }

    const hashedCode = await hashString(code);
    const { data: user, error } = await supabaseClient.from('users').select('*').eq('pseudo', pseudo).maybeSingle();
    if (error) { showToast("Erreur : " + error.message, "error"); return; }

    if (user) {
        if (user.code === hashedCode) {
            setSession({ pseudo, code, avatar: user.avatar || '⚽' });
            updateAuthUI();
            await loadMyPronostics(); calculate();
            showToast(`Bon retour, ${pseudo} !`, "success");
            showRankReveal();
            if (document.getElementById('sec-account').classList.contains('active')) await updateAccountDashboard();
        } else { showToast("Code secret erroné.", "error"); }
    } else {
        const { error: insError } = await supabaseClient.from('users').insert({ pseudo, code: hashedCode, avatar });
        if (insError) { showToast("Erreur : " + insError.message, "error"); } 
        else {
            setSession({ pseudo, code, avatar });
            updateAuthUI(); await calculateLeaderboard();
            await loadMyPronostics(); calculate();
            showToast(`Bienvenue ${pseudo}, votre compte a été créé !`, "success");
            showRankReveal();
            if (document.getElementById('sec-account').classList.contains('active')) await updateAccountDashboard();
        }
    }
}

function handleLogout() { 
    clearSession();
    updateAuthUI(); 
    myPronostics = {};
    calculate();
    if (document.getElementById('sec-account').classList.contains('active')) updateAccountDashboard();
}

function updateAuthUI() {
    const session = getSession();
    if (session) {
        document.getElementById('auth-logged-out').style.display = 'none';
        document.getElementById('auth-logged-in').style.display = 'flex';
        document.getElementById('user-display-name').innerText = session.pseudo;
        document.getElementById('user-display-avatar').innerText = session.avatar;
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
        await loadMyPronostics();
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
    const session = getSession();
    const loggedOutView = document.getElementById('account-logged-out-view');
    const loggedInView = document.getElementById('account-logged-in-view');

    if (!session) {
        if (loggedOutView) loggedOutView.style.display = 'block';
        if (loggedInView) loggedInView.style.display = 'none';
        return;
    }

    const { data: dbUser, error: userError } = await supabaseClient
        .from('users').select('pseudo, avatar').eq('pseudo', session.pseudo).maybeSingle();

    if (userError) {
        showToast("Impossible de charger votre compte (" + userError.message + ").", "error");
        return;
    }

    if (!dbUser) {
        clearSession();
        updateAuthUI();
        if (loggedOutView) loggedOutView.style.display = 'block';
        if (loggedInView) loggedInView.style.display = 'none';
        return;
    }

    if (dbUser.avatar && dbUser.avatar !== session.avatar) {
        localStorage.setItem('wc_avatar', dbUser.avatar);
        session.avatar = dbUser.avatar;
        updateAuthUI();
    }

    if (loggedOutView) loggedOutView.style.display = 'none';
    if (loggedInView) loggedInView.style.display = 'block';

    const myStats = globalRankList.find(p => p.pseudo === session.pseudo);
    if (myStats) {
        document.getElementById('acc-stat-rank').innerText = `#${myStats.rank}`;
        document.getElementById('acc-stat-pts').innerText = `${myStats.totalPoints} pts`;
        document.getElementById('acc-stat-details').innerText = `Détails : ${myStats.exacts} exacts | ${myStats.diffs} écarts | ${myStats.partials} issues`;
    } else {
        document.getElementById('acc-stat-rank').innerText = `--`;
        document.getElementById('acc-stat-pts').innerText = `0 pts`;
        document.getElementById('acc-stat-details').innerText = `Aucun match calculé`;
    }

    const now = new Date();
    const fortyEightHoursLater = new Date(now.getTime() + (48 * 60 * 60 * 1000));
    const { data: myPronos } = await supabaseClient.from('pronostics').select('match_id').eq('pseudo', session.pseudo);
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
                    const gLetter = parts[1]; const mIdx = parseInt(parts[2]);
                    if (GROUP_MATCHES[gLetter] && GROUP_MATCHES[gLetter][mIdx]) {
                        t1 = GROUP_MATCHES[gLetter][mIdx].t1; t2 = GROUP_MATCHES[gLetter][mIdx].t2;
                    }
                } else {
                    t1 = tree[`${matchId}-t1`] || "En attente"; t2 = tree[`${matchId}-t2`] || "En attente";
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
    
    document.getElementById('acc-input-pseudo').value = dbUser.pseudo;
    document.getElementById('acc-input-code').value = session.code;
    document.getElementById('acc-select-avatar').value = dbUser.avatar || '⚽';
}

async function saveAccountChanges() {
    const session = getSession();
    if (!session) return;

    const newPseudo = document.getElementById('acc-input-pseudo').value.trim();
    const newCode = document.getElementById('acc-input-code').value.trim();
    const newAvatar = document.getElementById('acc-select-avatar').value;
    if (!newPseudo || !newCode) { showToast("Les champs ne peuvent pas être vides.", "warning"); return; }

    const saveBtn = document.querySelector('#sec-account .btn.primary');
    const originalBtnText = saveBtn ? saveBtn.innerText : null;
    if (saveBtn) { saveBtn.disabled = true; saveBtn.innerText = "Enregistrement..."; }

    try {
        const { data: dbUser, error: fetchError } = await supabaseClient
            .from('users').select('pseudo, code, avatar').eq('pseudo', session.pseudo).maybeSingle();

        if (fetchError) { showToast("Erreur réseau lors de la vérification de votre compte : " + fetchError.message, "error"); return; }
        if (!dbUser) {
            showToast("Votre compte n'existe plus sur le serveur. Vous allez être déconnecté.", "warning");
            handleLogout();
            return;
        }

        const oldHashedCode = await hashString(session.code);
        if (dbUser.code !== oldHashedCode) {
            showToast("Votre session locale est désynchronisée avec le serveur (code secret différent). Merci de vous déconnecter puis de vous reconnecter avant de réessayer.", "warning", 7000);
            return;
        }

        if (newPseudo !== session.pseudo) {
            const { data: existing, error: checkError } = await supabaseClient
                .from('users').select('pseudo').eq('pseudo', newPseudo).maybeSingle();
            if (checkError) { showToast("Erreur lors de la vérification du pseudo : " + checkError.message, "error"); return; }
            if (existing) { showToast("Ce pseudo est déjà utilisé par un autre joueur.", "error"); return; }
        }

        const newHashedCode = await hashString(newCode);

        const { data: updatedRows, error: updateError } = await supabaseClient
            .from('users')
            .update({ pseudo: newPseudo, code: newHashedCode, avatar: newAvatar })
            .eq('pseudo', session.pseudo)
            .select();

        if (updateError) {
            if (updateError.code === '23505') showToast("Ce pseudo est déjà pris par un autre joueur.", "error");
            else showToast("Erreur lors de la mise à jour : " + updateError.message, "error");
            return;
        }
        if (!updatedRows || updatedRows.length === 0) {
            showToast("La mise à jour n'a pas pu être appliquée (aucune ligne modifiée côté serveur).", "error", 8000);
            return;
        }

        if (newPseudo !== session.pseudo) {
            const { data: updatedPronos, error: pronoError } = await supabaseClient
                .from('pronostics')
                .update({ pseudo: newPseudo})
                .eq('pseudo', session.pseudo)
                .select();

            if (pronoError) {
                showToast("Votre profil a bien été mis à jour, mais la synchronisation de vos pronostics existants a échoué. Contactez l'administrateur.", "error", 8000);
            }
        }

        setSession({ pseudo: newPseudo, code: newCode, avatar: newAvatar });

        showToast("Compte mis à jour avec succès !", "success");
        updateAuthUI();
        await syncFromSupabase();
        await updateAccountDashboard();
    } finally {
        if (saveBtn) { saveBtn.disabled = false; saveBtn.innerText = originalBtnText; }
    }
}

function renderGroupMatches(group) {
    const list = document.getElementById(`matches-${group}`); if (!list) return; list.innerHTML = '';
    GROUP_MATCHES[group].forEach((m, idx) => {
        const keyBase = `G-${group}-${idx}`;
        const s1 = scores[`${keyBase}-0`] ?? '-'; const s2 = scores[`${keyBase}-1`] ?? '-';
        const ctx = getMatchTimeContext(keyBase);
        list.innerHTML += `
            <div class="match-row" onclick="openMatchModal('${keyBase}', '${m.t1}', '${m.t2}')">
                <div class="match-meta">
                    <span>${ctx.text || 'Phase de groupes'}</span>
                    <div class="match-meta-right">${renderStatusBadgeHTML(ctx)}${renderMyPronoBadgeHTML(keyBase)}</div>
                </div>
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
            <div class="match-meta">
                <span>${titleText} - #${i}</span>
                <div class="match-meta-right">${renderStatusBadgeHTML(ctx)}${renderMyPronoBadgeHTML(keyBase)}</div>
            </div>
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
    const session = getSession();

    if (!session) {
        pronoForm.style.display = 'none'; lockAlert.innerHTML = "🔒 Connectez-vous pour pouvoir parier."; lockAlert.style.display = 'block';
    } else if (ctx.status === 'complete' || (ctx.iso && new Date() >= new Date(ctx.iso))) {
        pronoForm.style.display = 'none'; lockAlert.innerHTML = "🔒 Match débuté ou terminé."; lockAlert.style.display = 'block';
    } else {
        pronoForm.style.display = 'block'; lockAlert.style.display = 'none';
        document.getElementById('prono-s1').value = ''; document.getElementById('prono-s2').value = '';
    }

    currentMatchPronosticsData = [];
    const trendsPanel = document.getElementById('prono-trends-panel');
    if (trendsPanel) trendsPanel.style.display = 'none';
    const statsBtn = document.getElementById('stats-toggle-btn');
    if (statsBtn) statsBtn.classList.remove('active');

    document.getElementById('match-modal').style.display = 'flex'; await loadMatchPronostics(matchId);
}

function closeModal() { document.getElementById('match-modal').style.display = 'none'; }

async function loadMatchPronostics(matchId) {
    const container = document.getElementById('prono-list-container'); container.innerHTML = "Chargement...";
    const { data: usersData, error: uError } = await supabaseClient.from('users').select('pseudo, avatar');
    if (uError) { container.innerHTML = "Erreur de chargement des profils."; return; }
    
    const avatarMap = {};
    if (usersData) { usersData.forEach(u => { avatarMap[u.pseudo] = u.avatar || '⚽'; }); }

    const { data, error } = await supabaseClient.from('pronostics').select('*').eq('match_id', matchId);
    if (error) { container.innerHTML = "Erreur."; return; }

    currentMatchPronosticsData = data || [];

    if (!data || data.length === 0) { container.innerHTML = "Aucun pronostic déposé."; return; }
    
    container.innerHTML = data.map(p => {
        const userAvatar = avatarMap[p.pseudo] || '⚽';
        return `
            <div class="prono-item">
                <span><span class="profile-avatar">${userAvatar}</span> <strong>${p.pseudo}</strong></span>
                <span class="prono-val">${p.predicted_score1} - ${p.predicted_score2}</span>
            </div>`;
    }).join('');
}

function toggleProTrends() {
    const panel = document.getElementById('prono-trends-panel');
    const btn = document.getElementById('stats-toggle-btn');
    if (!panel) return;
    const isHidden = panel.style.display === 'none' || !panel.style.display;
    if (isHidden) {
        renderProTrendsChart();
        panel.style.display = 'block';
        if (btn) btn.classList.add('active');
    } else {
        panel.style.display = 'none';
        if (btn) btn.classList.remove('active');
    }
}

function renderProTrendsChart() {
    const panel = document.getElementById('prono-trends-panel');
    if (!panel) return;
    const data = currentMatchPronosticsData || [];

    if (data.length === 0) {
        panel.innerHTML = `<p class="trends-empty">Pas encore assez de pronostics pour dégager une tendance.</p>`;
        return;
    }

    let winT1 = 0, draw = 0, winT2 = 0;
    const scoreFreq = {};
    data.forEach(p => {
        const s1 = p.predicted_score1, s2 = p.predicted_score2;
        if (s1 > s2) winT1++; else if (s2 > s1) winT2++; else draw++;
        const key = `${s1}-${s2}`;
        scoreFreq[key] = (scoreFreq[key] || 0) + 1;
    });

    const total = data.length;
    const pct = n => Math.round((n / total) * 100);
    const topScores = Object.entries(scoreFreq).sort((a, b) => b[1] - a[1]).slice(0, 3);

    const t1Name = (document.getElementById('modal-t1-name').innerText || 'Équipe 1').trim();
    const t2Name = (document.getElementById('modal-t2-name').innerText || 'Équipe 2').trim();

    const bar = (label, count, color) => `
        <div class="trend-bar-row">
            <span class="trend-bar-label" title="${label}">${label}</span>
            <div class="trend-bar-track"><div class="trend-bar-fill" style="width:${pct(count)}%; background:${color};"></div></div>
            <span class="trend-bar-pct">${pct(count)}%</span>
        </div>`;

    panel.innerHTML = `
        <div class="trends-title">Tendances sur ${total} pronostic${total > 1 ? 's' : ''}</div>
        ${bar(t1Name, winT1, 'var(--primary)')}
        ${bar('Match nul', draw, '#94a3b8')}
        ${bar(t2Name, winT2, 'var(--accent)')}
        <div class="trends-top-scores">
            <span class="trends-sub">Scores les plus pronostiqués :</span>
            ${topScores.map(([score, c]) => `<span class="trend-score-chip">${score} (${c}x)</span>`).join('')}
        </div>`;
}

async function saveUserPronostic() {
    const session = getSession();
    const s1 = document.getElementById('prono-s1').value.trim(), s2 = document.getElementById('prono-s2').value.trim();
    if (!session) return; if (s1 === '' || s2 === '') { showToast("Merci d'indiquer un score pour les deux équipes.", "warning"); return; }

    const ctx = getMatchTimeContext(currentActiveMatchId);
    if (ctx.status === 'complete' || (ctx.iso && new Date() >= new Date(ctx.iso))) { showToast("Ce match est verrouillé : il a débuté ou est déjà terminé.", "warning"); return; }

    const { error } = await supabaseClient.from('pronostics').upsert({
        match_id: currentActiveMatchId, pseudo: session.pseudo, predicted_score1: parseInt(s1), predicted_score2: parseInt(s2), updated_at: new Date()
    }, { onConflict: 'match_id, pseudo' });

    if (error) { showToast("Erreur d'envoi : " + error.message, "error"); } 
    else { showToast("Pronostic sauvegardé !", "success"); closeModal(); await syncFromSupabase(); }
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
            const actualSign = Math.sign(actS1 - actS2); const predSign = Math.sign(prS1 - prS2);

            if (actS1 === prS1 && actS2 === prS2) {
                userScores[p.pseudo].exacts++; userScores[p.pseudo].totalPoints += 5;
            } else if (actualSign === predSign) {
                const actualDiff = actS1 - actS2; const predDiff = prS1 - prS2;
                if (actualDiff === predDiff) {
                    userScores[p.pseudo].diffs++; userScores[p.pseudo].totalPoints += 3;
                } else {
                    userScores[p.pseudo].partials++; userScores[p.pseudo].totalPoints += 2;
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
            const isTie = player.totalPoints === prev.totalPoints && player.exacts === prev.exacts && player.diffs === prev.diffs && player.partials === prev.partials;
            if (!isTie) currentRank = index + 1;
        }
        player.rank = currentRank;
    });

    globalRankList = rankList; 

    let leaderboardSection = document.getElementById('sec-LEADERBOARD');
    if (leaderboardSection) {
        let card = leaderboardSection.querySelector('.card');
        if (card) {
            let existingPodium = card.querySelector('.podium-container');
            if (existingPodium) existingPodium.remove();

            if (rankList.length > 0) {
                const podiumContainer = document.createElement('div');
                podiumContainer.className = 'podium-container';
                const top3 = rankList.slice(0, 3);
                let podiumHTML = '';
                
                const visualMapping = [1, 0, 2];
                visualMapping.forEach(idx => {
                    const p = top3[idx];
                    if (p) {
                        const styleClass = idx === 0 ? 'first' : idx === 1 ? 'second' : 'third';
                        const crown = idx === 0 ? '<div class="podium-crown">👑</div>' : '';
                        podiumHTML += `
                            <div class="podium-column ${styleClass}">
                                ${crown}
                                <div class="podium-avatar">${p.avatar}</div>
                                <div class="podium-name">${p.pseudo}</div>
                                <div class="podium-points">${p.totalPoints} pts</div>
                                <div class="podium-rank-number">${idx + 1}</div>
                            </div>`;
                    }
                });
                podiumContainer.innerHTML = podiumHTML;
                let tableWrapper = card.querySelector('div[style*="overflow-x: auto"]');
                if (tableWrapper) card.insertBefore(podiumContainer, tableWrapper);
                else card.appendChild(podiumContainer);
            }
        }
    }

    const counts = {};
    rankList.forEach(p => { counts[p.rank] = (counts[p.rank] || 0) + 1; });

    tbody.innerHTML = rankList.map((player) => {
        const isTie = counts[player.rank] > 1;
        const stringRank = isTie ? `#${player.rank} <span style="font-size:0.65rem; opacity:0.6; font-weight:normal;">(ex.)</span>` : `#${player.rank}`;
        const rankClass = player.rank === 1 ? 'rank-row-gold' : player.rank === 2 ? 'rank-row-silver' : player.rank === 3 ? 'rank-row-bronze' : '';
        return `
            <tr class="${rankClass}">
                <td><strong>${stringRank}</strong></td>
                <td><span class="profile-avatar">${player.avatar}</span> ${player.pseudo}</td>
                <td style="text-align: center; color: var(--text-muted); font-weight:600;">${player.exacts}</td>
                <td style="text-align: center; color: var(--text-muted); font-weight:600;">${player.diffs}</td>
                <td style="text-align: center; color: var(--text-muted); font-weight:600;">${player.partials}</td>
                <td style="text-align: right; padding-right: 15px; font-size: 1rem; color: var(--accent);"><strong>${player.totalPoints} pts</strong></td>
            </tr>`;
    }).join('');
    
    if (document.getElementById('sec-account').classList.contains('active')) updateAccountDashboard();
}

function calculate() {
    let groupStandings = {}; 
    let allGroupsDone = true; 
    tree = {}; 

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

    // Initialisation forcée de la phase finale 
    for (let i = 1; i <= 16; i++) {
        const matchKey = `16-${i}`;
        if (MANUAL_KNOCKOUT_TEAMS[matchKey]) {
            tree[`${matchKey}-t1`] = MANUAL_KNOCKOUT_TEAMS[matchKey].t1;
            tree[`${matchKey}-t2`] = MANUAL_KNOCKOUT_TEAMS[matchKey].t2;
        }
    }

    processStage(16, '16', '8'); 
    processStage(8, '8', '4'); 
    processStage(4, '4', '2'); 
    processStage(2, '2', 'F'); 
    processStage(1, '3', null); 
    processStage(1, 'F', 'CHAMPION');
    
    updateKnockoutUI();
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
                rowEl.querySelector('.match-meta').innerHTML = `<span>${stage.text} - #${i}</span><div class="match-meta-right">${renderStatusBadgeHTML(ctx)}${renderMyPronoBadgeHTML(keyBase)}</div>`;
                rowEl.onclick = () => openMatchModal(keyBase, t1Name, t2Name);
            }
        });
    });
    const cb = document.getElementById('world-champion'); if (cb) cb.innerHTML = formatTeamName(tree['CHAMPION']) || "À déterminer";
}

async function importData() {
    const codeInput = document.getElementById('import-code-input').value.trim();
    const { data: config, error: configError } = await supabaseClient.from('app_config').select('value').eq('key', 'import_code').maybeSingle();
    if (configError || !config || config.value !== codeInput) { showToast("Code admin incorrect.", "error"); return; }

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
                    let currT1 = tree[`${type}-${i}-t1`], currT2 = tree[`${type}-${i}-t2`];
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
        if (!error) { showToast("Scores synchronisés !", "success"); await syncFromSupabase(); }
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
            let keyBase = `${stage.label}-${i}`; let t1 = tree[`${keyBase}-t1`], t2 = tree[`${keyBase}-t2__` || `${keyBase}-t2` ];
            let s1 = scores[`${keyBase}-0`], s2 = scores[`${keyBase}-1` || `${keyBase}-1__` ];
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

function scrollToBracketColumn(targetId, btnEl, smooth = true) {
    document.querySelectorAll('.jump-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    const wrapper = document.querySelector('.bracket-scroll-wrapper');
    const target = document.getElementById(targetId);
    if (!wrapper || !target) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const delta = (targetRect.left + targetRect.width / 2) - (wrapperRect.left + wrapperRect.width / 2);
    wrapper.scrollTo({ left: wrapper.scrollLeft + delta, behavior: smooth ? 'smooth' : 'auto' });
}

const BRACKET_STAGE_SEQUENCE = [
    { label: '16', count: 16, colId: 'col-16' },
    { label: '8', count: 8, colId: 'col-8' },
    { label: '4', count: 4, colId: 'col-quarts' },
    { label: '2', count: 2, colId: 'col-demis' },
    { label: 'F', count: 1, colId: 'col-final' }
];

function isStageComplete(label, count) {
    for (let i = 1; i <= count; i++) {
        if (scores[`${label}-${i}-0`] === undefined || scores[`${label}-${i}-1`] === undefined) return false;
    }
    return true;
}

function getCurrentBracketColId() {
    for (const stage of BRACKET_STAGE_SEQUENCE) {
        if (!isStageComplete(stage.label, stage.count)) return stage.colId;
    }
    return 'col-final'; 
}

function centerBracketOnCurrentStage() {
    setTimeout(() => {
        const colId = getCurrentBracketColId();
        const btn = document.querySelector(`.jump-btn[data-target="${colId}"]`);
        scrollToBracketColumn(colId, btn, false);
    }, 30);
}

function exportBracketToPNG() {
    const element = document.getElementById('bracket-capture-target');
    const isDark = document.body.classList.contains('dark-mode');
    const bgCanvasColor = isDark ? '#111a2e' : '#f1f5f9'; 
    html2canvas(element, { backgroundColor: bgCanvasColor, scale: 2 }).then(canvas => {
        const link = document.createElement('a'); link.download = 'Arbre_2026.png'; link.href = canvas.toDataURL('image/png'); link.click();
    });
}

function showSection(id, el) {
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`sec-${id}`).classList.add('active'); el.classList.add('active');
}

window.onload = init;
