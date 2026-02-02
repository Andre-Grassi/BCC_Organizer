// Complete course data for BCC UFPR
// Color categories:
// - blue: CI courses (computing)
// - yellow: CM/CE courses (math/statistics)
// - green: specific formation after barrier
// - orange: TCC
// - pink: internship
// - purple: optatives

// Barrier: All courses in semesters 1-3 must be completed before any course in 4+

export const CATEGORY_COLORS = {
    basic_ci: '#a8c5e2', // Light blue - CI basic
    basic_cm: '#fff3b0', // Light yellow - CM/CE basic
    specific: '#b8f0c0', // Light green - specific formation
    tcc: '#ffcc99',      // Orange - TCC
    internship: '#ffb6c1', // Pink - internship
    optative: '#e0b0ff',   // Purple/Lilac - optatives
};

// Semesters 1-3 are "formação básica" (barrier)
// Semesters 4-8 are "formação específica" + optatives + TCC + estágio

export const INITIAL_COURSES = {
    // SEMESTER 1 - Formação Básica
    'CI1055': { code: 'CI1055', name: 'Algoritmos e Estruturas de Dados 1', category: 'basic_ci', semester: 1, prerequisites: [] },
    'CI1003': { code: 'CI1003', name: 'Introdução à Ciência da Computação', category: 'basic_ci', semester: 1, prerequisites: [] },
    'CI1068': { code: 'CI1068', name: 'Circuitos Digitais', category: 'basic_ci', semester: 1, prerequisites: [] },
    'CM304': { code: 'CM304', name: 'Complementos de Matemática', category: 'basic_cm', semester: 1, prerequisites: [] },
    'CM310': { code: 'CM310', name: 'Pré-Cálculo', category: 'basic_cm', semester: 1, prerequisites: [] },

    // SEMESTER 2 - Formação Básica
    'CI1056': { code: 'CI1056', name: 'Algoritmos e Estruturas de Dados 2', category: 'basic_ci', semester: 2, prerequisites: ['CI1055'] },
    'CI1001': { code: 'CI1001', name: 'Programação 1', category: 'basic_ci', semester: 2, prerequisites: ['CI1055'] },
    'CI1210': { code: 'CI1210', name: 'Projetos Digitais e Microprocessadores', category: 'basic_ci', semester: 2, prerequisites: ['CI1068'] },
    'CM303': { code: 'CM303', name: 'Intr. à Geom. Analítica e Álgebra Linear', category: 'basic_cm', semester: 2, prerequisites: [] },
    'CM311': { code: 'CM311', name: 'Cálculo 1', category: 'basic_cm', semester: 2, prerequisites: ['CM310'] },

    // SEMESTER 3 - Formação Básica
    'CI1057': { code: 'CI1057', name: 'Algoritmos e Estruturas de Dados 3', category: 'basic_ci', semester: 3, prerequisites: ['CI1056', 'CI1001'] },
    'CI1002': { code: 'CI1002', name: 'Programação 2', category: 'basic_ci', semester: 3, prerequisites: ['CI1001'] },
    'CI1212': { code: 'CI1212', name: 'Arquitetura de Computadores', category: 'basic_ci', semester: 3, prerequisites: ['CI1210'] },
    'CI1237': { code: 'CI1237', name: 'Matemática Discreta', category: 'basic_cm', semester: 3, prerequisites: ['CM303', 'CM304'] },
    'CM312': { code: 'CM312', name: 'Cálculo 2', category: 'basic_cm', semester: 3, prerequisites: ['CM311'] },
    'CE009': { code: 'CE009', name: 'Introdução à Estatística', category: 'basic_cm', semester: 3, prerequisites: [] },

    // SEMESTER 4+ - Formação Específica (all require BARRIER)
    'CI1350': { code: 'CI1350', name: 'Interação Humano-computador', category: 'specific', semester: 4, prerequisites: ['BARRIER'] },
    'CI1062': { code: 'CI1062', name: 'Paradigmas de Programação', category: 'specific', semester: 4, prerequisites: ['BARRIER'] },
    'CI1164': { code: 'CI1164', name: 'Introdução à Computação Científica', category: 'specific', semester: 4, prerequisites: ['BARRIER'] },
    'CI1064': { code: 'CI1064', name: 'Software Básico', category: 'specific', semester: 4, prerequisites: ['BARRIER'] },
    'CI1165': { code: 'CI1165', name: 'Análise de Algoritmos', category: 'specific', semester: 4, prerequisites: ['BARRIER'] },
    'CI1059': { code: 'CI1059', name: 'Introdução à Teoria da Computação', category: 'specific', semester: 4, prerequisites: ['BARRIER'] },

    // SEMESTER 5
    'CI1162': { code: 'CI1162', name: 'Engenharia de Requisitos', category: 'specific', semester: 5, prerequisites: ['BARRIER'] },
    'CI1058': { code: 'CI1058', name: 'Redes de Computadores 1', category: 'specific', semester: 5, prerequisites: ['BARRIER'] },
    'CI1215': { code: 'CI1215', name: 'Sistemas Operacionais', category: 'specific', semester: 5, prerequisites: ['BARRIER', 'CI1064'] },
    'CI1065': { code: 'CI1065', name: 'Algoritmos e Teoria dos Grafos', category: 'specific', semester: 5, prerequisites: ['BARRIER', 'CI1165'] },
    'CI1238': { code: 'CI1238', name: 'Otimização', category: 'specific', semester: 5, prerequisites: ['BARRIER'] },

    // SEMESTER 6
    'CI1218': { code: 'CI1218', name: 'Bancos de Dados', category: 'specific', semester: 6, prerequisites: ['BARRIER'] },
    'CI1163': { code: 'CI1163', name: 'Design de Software', category: 'specific', semester: 6, prerequisites: ['BARRIER', 'CI1062', 'CI1162'] },
    'CI1061': { code: 'CI1061', name: 'Redes de Computadores 2', category: 'specific', semester: 6, prerequisites: ['BARRIER', 'CI1058'] },
    'CI1316': { code: 'CI1316', name: 'Programação Paralela', category: 'specific', semester: 6, prerequisites: ['BARRIER'] },
    'CI1209': { code: 'CI1209', name: 'Inteligência Artificial', category: 'specific', semester: 6, prerequisites: ['BARRIER'] },

    // SEMESTER 7
    'CI1221': { code: 'CI1221', name: 'Engenharia de Software', category: 'specific', semester: 7, prerequisites: ['BARRIER', 'CI1163'] },
    'CI1007': { code: 'CI1007', name: 'Segurança Computacional', category: 'specific', semester: 7, prerequisites: ['BARRIER'] },
    'CI1123': { code: 'CI1123', name: 'TCC 1', category: 'tcc', semester: 7, prerequisites: ['BARRIER'] },

    // SEMESTER 8
    'CI1005': { code: 'CI1005', name: 'Qualidade de Software', category: 'specific', semester: 8, prerequisites: ['BARRIER', 'CI1163'] },
    'CI1211': { code: 'CI1211', name: 'Construção de Compiladores', category: 'specific', semester: 8, prerequisites: ['BARRIER'] },
    'CI1124': { code: 'CI1124', name: 'TCC 2', category: 'tcc', semester: 8, prerequisites: ['BARRIER', 'CI1123'] },

    // Estágio (spans semesters 7-8)
    'CI1100': { code: 'CI1100', name: 'Estágio Obrigatório Supervisionado', category: 'internship', semester: 7, prerequisites: ['BARRIER'], span: 2 },

    // Optativas (6 slots distributed across semesters 5-8)
    'OPT1': { code: 'OPT1', name: 'Optativa 1', category: 'optative', semester: 5, prerequisites: ['BARRIER'], isPlaceholder: true },
    'OPT2': { code: 'OPT2', name: 'Optativa 2', category: 'optative', semester: 6, prerequisites: ['BARRIER'], isPlaceholder: true },
    'OPT3': { code: 'OPT3', name: 'Optativa 3', category: 'optative', semester: 7, prerequisites: ['BARRIER'], isPlaceholder: true },
    'OPT4': { code: 'OPT4', name: 'Optativa 4', category: 'optative', semester: 7, prerequisites: ['BARRIER'], isPlaceholder: true },
    'OPT5': { code: 'OPT5', name: 'Optativa 5', category: 'optative', semester: 8, prerequisites: ['BARRIER'], isPlaceholder: true },
    'OPT6': { code: 'OPT6', name: 'Optativa 6', category: 'optative', semester: 8, prerequisites: ['BARRIER'], isPlaceholder: true },
};

// List of all basic formation courses (semesters 1-3)
export const BASIC_FORMATION_COURSES = Object.keys(INITIAL_COURSES).filter(
    code => INITIAL_COURSES[code].semester <= 3
);

// Get courses grouped by semester
export const getCoursesBySemester = (courses) => {
    const semesters = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [] };
    Object.values(courses).forEach(course => {
        if (semesters[course.semester]) {
            semesters[course.semester].push(course);
        }
    });
    return semesters;
};

// Available optative courses catalog
export const OPTATIVE_CATALOG = [
    { code: 'CI1008', name: 'Introdução a Sistemas Embarcados', prerequisites: [] },
    { code: 'CI1009', name: 'Computação Paralela com GPUs', prerequisites: ['CI1215'] },
    { code: 'CI1010', name: 'Programação WEB', prerequisites: [] },
    { code: 'CI1011', name: 'Reconhecimento de Padrões', prerequisites: [] },
    { code: 'CI1015', name: 'Teste de Software', prerequisites: [] },
    { code: 'CI1017', name: 'Criptografia', prerequisites: [] },
    { code: 'CI1021', name: 'Programação de Dispositivos Móveis', prerequisites: [] },
    { code: 'CI1023', name: 'Projeto de Sistemas Embarcados', prerequisites: ['CI1064'] },
    { code: 'CI1026', name: 'Visão Computacional e Percepção', prerequisites: [] },
    { code: 'CI1029', name: 'Tópicos em Segurança Computacional', prerequisites: ['CI1215', 'CI1058'] },
    { code: 'CI1031', name: 'Desafios de Programação', prerequisites: [] },
    { code: 'CI1032', name: 'Tópicos em Complexidade Computacional', prerequisites: ['CI1059'] },
    { code: 'CI1033', name: 'Computação Quântica', prerequisites: ['CI1059'] },
    { code: 'CI1035', name: 'Tópicos em Computação Científica', prerequisites: ['CI1164'] },
    { code: 'CI1036', name: 'Tópicos em Programação Paralela', prerequisites: ['CI1215'] },
    { code: 'CI1037', name: 'Tópicos em Sistemas Operacionais', prerequisites: ['CI1215'] },
    { code: 'CI1084', name: 'Tópicos em Teoria dos Grafos', prerequisites: ['CI1065'] },
    { code: 'CI1087', name: 'Tópicos em Banco de Dados', prerequisites: ['CI1218'] },
    { code: 'CI1088', name: 'Sistemas Distribuídos', prerequisites: [] },
    { code: 'CI1171', name: 'Aprendizado de Máquina', prerequisites: [] },
    { code: 'CI1173', name: 'Computação Gráfica', prerequisites: [] },
    { code: 'CI1219', name: 'Sistemas Avançados de Banco de Dados', prerequisites: ['CI1218'] },
    { code: 'CI1315', name: 'Projeto de Sistemas Operacionais', prerequisites: ['CI1215'] },
    { code: 'CI1351', name: 'Tópicos em Interação Humano-computador', prerequisites: ['CI1350'] },
    { code: 'CI1360', name: 'Redes Móveis', prerequisites: ['CI1058'] },
    { code: 'CI1365', name: 'Tópicos em Redes de Computadores', prerequisites: ['CI1058'] },
    { code: 'CI1366', name: 'Gerenciamento de Redes de Computadores', prerequisites: ['CI1061'] },
    { code: 'CI1394', name: 'Processamento de Imagens', prerequisites: [] },
];
