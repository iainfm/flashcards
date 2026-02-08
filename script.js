// Most common Spanish verbs with their English translations and present tense conjugations
const spanishVerbs = [
    {
        infinitive: "ser",
        regular: false,
        translation: "to be (permanent)",
        conjugations: {
            yo: "soy",
            tú: "eres",
            él: "es",
            nosotros: "somos",
            vosotros: "sois",
            ellos: "son"
        }
    },
    {
        infinitive: "estar",
        regular: false,
        translation: "to be (temporary)",
        conjugations: {
            yo: "estoy",
            tú: "estás",
            él: "está",
            nosotros: "estamos",
            vosotros: "estáis",
            ellos: "están"
        }
    },
    {
        infinitive: "haber",
        regular: false,
        translation: "to have (auxiliary)",
        conjugations: {
            yo: "he",
            tú: "has",
            él: "ha / hay",
            nosotros: "hemos",
            vosotros: "habéis",
            ellos: "han"
        }
    },
    {
        infinitive: "tener",
        regular: false,
        translation: "to have",
        conjugations: {
            yo: "tengo",
            tú: "tienes",
            él: "tiene",
            nosotros: "tenemos",
            vosotros: "tenéis",
            ellos: "tienen"
        }
    },
    {
        infinitive: "hacer",
        regular: false,
        translation: "to do, to make",
        conjugations: {
            yo: "hago",
            tú: "haces",
            él: "hace",
            nosotros: "hacemos",
            vosotros: "hacéis",
            ellos: "hacen"
        }
    },
    {
        infinitive: "poder",
        regular: false,
        translation: "to be able, can",
        conjugations: {
            yo: "puedo",
            tú: "puedes",
            él: "puede",
            nosotros: "podemos",
            vosotros: "podéis",
            ellos: "pueden"
        }
    },
    {
        infinitive: "decir",
        regular: false,
        translation: "to say, to tell",
        conjugations: {
            yo: "digo",
            tú: "dices",
            él: "dice",
            nosotros: "decimos",
            vosotros: "decís",
            ellos: "dicen"
        }
    },
    {
        infinitive: "ir",
        regular: false,
        translation: "to go",
        conjugations: {
            yo: "voy",
            tú: "vas",
            él: "va",
            nosotros: "vamos",
            vosotros: "vais",
            ellos: "van"
        }
    },
    {
        infinitive: "ver",
        regular: false,
        translation: "to see",
        conjugations: {
            yo: "veo",
            tú: "ves",
            él: "ve",
            nosotros: "vemos",
            vosotros: "veis",
            ellos: "ven"
        }
    },
    {
        infinitive: "dar",
        regular: false,
        translation: "to give",
        conjugations: {
            yo: "doy",
            tú: "das",
            él: "da",
            nosotros: "damos",
            vosotros: "dais",
            ellos: "dan"
        }
    },
    {
        infinitive: "saber",
        regular: false,
        translation: "to know (facts)",
        conjugations: {
            yo: "sé",
            tú: "sabes",
            él: "sabe",
            nosotros: "sabemos",
            vosotros: "sabéis",
            ellos: "saben"
        }
    },
    {
        infinitive: "querer",
        regular: false,
        translation: "to want, to love",
        conjugations: {
            yo: "quiero",
            tú: "quieres",
            él: "quiere",
            nosotros: "queremos",
            vosotros: "queréis",
            ellos: "quieren"
        }
    },
    {
        infinitive: "llegar",
        regular: true,
        translation: "to arrive",
        conjugations: {
            yo: "llego",
            tú: "llegas",
            él: "llega",
            nosotros: "llegamos",
            vosotros: "llegáis",
            ellos: "llegan"
        }
    },
    {
        infinitive: "pasar",
        regular: true,
        translation: "to pass, to happen",
        conjugations: {
            yo: "paso",
            tú: "pasas",
            él: "pasa",
            nosotros: "pasamos",
            vosotros: "pasáis",
            ellos: "pasan"
        }
    },
    {
        infinitive: "deber",
        regular: true,
        translation: "to owe, must",
        conjugations: {
            yo: "debo",
            tú: "debes",
            él: "debe",
            nosotros: "debemos",
            vosotros: "debéis",
            ellos: "deben"
        }
    },
    {
        infinitive: "poner",
        regular: false,
        translation: "to put, to place",
        conjugations: {
            yo: "pongo",
            tú: "pones",
            él: "pone",
            nosotros: "ponemos",
            vosotros: "ponéis",
            ellos: "ponen"
        }
    },
    {
        infinitive: "parecer",
        regular: false,
        translation: "to seem, to appear",
        conjugations: {
            yo: "parezco",
            tú: "pareces",
            él: "parece",
            nosotros: "parecemos",
            vosotros: "parecéis",
            ellos: "parecen"
        }
    },
    {
        infinitive: "quedar",
        regular: true,
        translation: "to stay, to remain",
        conjugations: {
            yo: "quedo",
            tú: "quedas",
            él: "queda",
            nosotros: "quedamos",
            vosotros: "quedáis",
            ellos: "quedan"
        }
    },
    {
        infinitive: "creer",
        regular: true,
        translation: "to believe",
        conjugations: {
            yo: "creo",
            tú: "crees",
            él: "cree",
            nosotros: "creemos",
            vosotros: "creéis",
            ellos: "creen"
        }
    },
    {
        infinitive: "hablar",
        regular: true,
        translation: "to speak, to talk",
        conjugations: {
            yo: "hablo",
            tú: "hablas",
            él: "habla",
            nosotros: "hablamos",
            vosotros: "habláis",
            ellos: "hablan"
        }
    },
    {
        infinitive: "llevar",
        regular: true,
        translation: "to carry, to wear",
        conjugations: {
            yo: "llevo",
            tú: "llevas",
            él: "lleva",
            nosotros: "llevamos",
            vosotros: "lleváis",
            ellos: "llevan"
        }
    },
    {
        infinitive: "dejar",
        regular: true,
        translation: "to leave, to let",
        conjugations: {
            yo: "dejo",
            tú: "dejas",
            él: "deja",
            nosotros: "dejamos",
            vosotros: "dejáis",
            ellos: "dejan"
        }
    },
    {
        infinitive: "seguir",
        regular: false,
        translation: "to follow, to continue",
        conjugations: {
            yo: "sigo",
            tú: "sigues",
            él: "sigue",
            nosotros: "seguimos",
            vosotros: "seguís",
            ellos: "siguen"
        }
    },
    {
        infinitive: "encontrar",
        regular: false,
        translation: "to find, to meet",
        conjugations: {
            yo: "encuentro",
            tú: "encuentras",
            él: "encuentra",
            nosotros: "encontramos",
            vosotros: "encontráis",
            ellos: "encuentran"
        }
    },
    {
        infinitive: "llamar",
        regular: true,
        translation: "to call",
        conjugations: {
            yo: "llamo",
            tú: "llamas",
            él: "llama",
            nosotros: "llamamos",
            vosotros: "llamáis",
            ellos: "llaman"
        }
    },
    {
        infinitive: "venir",
        regular: false,
        translation: "to come",
        conjugations: {
            yo: "vengo",
            tú: "vienes",
            él: "viene",
            nosotros: "venimos",
            vosotros: "venís",
            ellos: "vienen"
        }
    },
    {
        infinitive: "pensar",
        regular: false,
        translation: "to think",
        conjugations: {
            yo: "pienso",
            tú: "piensas",
            él: "piensa",
            nosotros: "pensamos",
            vosotros: "pensáis",
            ellos: "piensan"
        }
    },
    {
        infinitive: "salir",
        regular: false,
        translation: "to leave, to go out",
        conjugations: {
            yo: "salgo",
            tú: "sales",
            él: "sale",
            nosotros: "salimos",
            vosotros: "salís",
            ellos: "salen"
        }
    },
    {
        infinitive: "volver",
        regular: false,
        translation: "to return, to come back",
        conjugations: {
            yo: "vuelvo",
            tú: "vuelves",
            él: "vuelve",
            nosotros: "volvemos",
            vosotros: "volvéis",
            ellos: "vuelven"
        }
    },
    {
        infinitive: "tomar",
        regular: true,
        translation: "to take, to drink",
        conjugations: {
            yo: "tomo",
            tú: "tomas",
            él: "toma",
            nosotros: "tomamos",
            vosotros: "tomáis",
            ellos: "toman"
        }
    },
    {
        infinitive: "conocer",
        regular: false,
        translation: "to know (people/places)",
        conjugations: {
            yo: "conozco",
            tú: "conoces",
            él: "conoce",
            nosotros: "conocemos",
            vosotros: "conocéis",
            ellos: "conocen"
        }
    },
    {
        infinitive: "vivir",
        regular: true,
        translation: "to live",
        conjugations: {
            yo: "vivo",
            tú: "vives",
            él: "vive",
            nosotros: "vivimos",
            vosotros: "vivís",
            ellos: "viven"
        }
    },
    {
        infinitive: "sentir",
        regular: false,
        translation: "to feel, to be sorry",
        conjugations: {
            yo: "siento",
            tú: "sientes",
            él: "siente",
            nosotros: "sentimos",
            vosotros: "sentís",
            ellos: "sienten"
        }
    },
    {
        infinitive: "tratar",
        regular: true,
        translation: "to treat, to try",
        conjugations: {
            yo: "trato",
            tú: "tratas",
            él: "trata",
            nosotros: "tratamos",
            vosotros: "tratáis",
            ellos: "tratan"
        }
    },
    {
        infinitive: "mirar",
        regular: true,
        translation: "to look, to watch",
        conjugations: {
            yo: "miro",
            tú: "miras",
            él: "mira",
            nosotros: "miramos",
            vosotros: "miráis",
            ellos: "miran"
        }
    },
    {
        infinitive: "contar",
        regular: false,
        translation: "to count, to tell",
        conjugations: {
            yo: "cuento",
            tú: "cuentas",
            él: "cuenta",
            nosotros: "contamos",
            vosotros: "contáis",
            ellos: "cuentan"
        }
    },
    {
        infinitive: "empezar",
        regular: false,
        translation: "to begin, to start",
        conjugations: {
            yo: "empiezo",
            tú: "empiezas",
            él: "empieza",
            nosotros: "empezamos",
            vosotros: "empezáis",
            ellos: "empiezan"
        }
    },
    {
        infinitive: "esperar",
        regular: true,
        translation: "to wait, to hope",
        conjugations: {
            yo: "espero",
            tú: "esperas",
            él: "espera",
            nosotros: "esperamos",
            vosotros: "esperáis",
            ellos: "esperan"
        }
    },
    {
        infinitive: "buscar",
        regular: true,
        translation: "to search, to look for",
        conjugations: {
            yo: "busco",
            tú: "buscas",
            él: "busca",
            nosotros: "buscamos",
            vosotros: "buscáis",
            ellos: "buscan"
        }
    },
    {
        infinitive: "existir",
        regular: true,
        translation: "to exist",
        conjugations: {
            yo: "existo",
            tú: "existes",
            él: "existe",
            nosotros: "existimos",
            vosotros: "existís",
            ellos: "existen"
        }
    },
    {
        infinitive: "entrar",
        regular: true,
        translation: "to enter",
        conjugations: {
            yo: "entro",
            tú: "entras",
            él: "entra",
            nosotros: "entramos",
            vosotros: "entráis",
            ellos: "entran"
        }
    },
    {
        infinitive: "trabajar",
        regular: true,
        translation: "to work",
        conjugations: {
            yo: "trabajo",
            tú: "trabajas",
            él: "trabaja",
            nosotros: "trabajamos",
            vosotros: "trabajáis",
            ellos: "trabajan"
        }
    },
    {
        infinitive: "escribir",
        regular: true,
        translation: "to write",
        conjugations: {
            yo: "escribo",
            tú: "escribes",
            él: "escribe",
            nosotros: "escribimos",
            vosotros: "escribís",
            ellos: "escriben"
        }
    },
    {
        infinitive: "perder",
        regular: false,
        translation: "to lose, to miss",
        conjugations: {
            yo: "pierdo",
            tú: "pierdes",
            él: "pierde",
            nosotros: "perdemos",
            vosotros: "perdéis",
            ellos: "pierden"
        }
    },
    {
        infinitive: "producir",
        regular: false,
        translation: "to produce",
        conjugations: {
            yo: "produzco",
            tú: "produces",
            él: "produce",
            nosotros: "producimos",
            vosotros: "producís",
            ellos: "producen"
        }
    },
    {
        infinitive: "ocurrir",
        regular: true,
        translation: "to occur, to happen",
        conjugations: {
            yo: "ocurro",
            tú: "ocurres",
            él: "ocurre",
            nosotros: "ocurrimos",
            vosotros: "ocurrís",
            ellos: "ocurren"
        }
    },
    {
        infinitive: "entender",
        regular: false,
        translation: "to understand",
        conjugations: {
            yo: "entiendo",
            tú: "entiendes",
            él: "entiende",
            nosotros: "entendemos",
            vosotros: "entendéis",
            ellos: "entienden"
        }
    },
    {
        infinitive: "pedir",
        regular: false,
        translation: "to ask for, to request",
        conjugations: {
            yo: "pido",
            tú: "pides",
            él: "pide",
            nosotros: "pedimos",
            vosotros: "pedís",
            ellos: "piden"
        }
    },
    {
        infinitive: "recibir",
        regular: true,
        translation: "to receive",
        conjugations: {
            yo: "recibo",
            tú: "recibes",
            él: "recibe",
            nosotros: "recibimos",
            vosotros: "recibís",
            ellos: "reciben"
        }
    },
    {
        infinitive: "recordar",
        regular: false,
        translation: "to remember",
        conjugations: {
            yo: "recuerdo",
            tú: "recuerdas",
            él: "recuerda",
            nosotros: "recordamos",
            vosotros: "recordáis",
            ellos: "recuerdan"
        }
    },
    {
        infinitive: "terminar",
        regular: true,
        translation: "to finish, to end",
        conjugations: {
            yo: "termino",
            tú: "terminas",
            él: "termina",
            nosotros: "terminamos",
            vosotros: "termináis",
            ellos: "terminan"
        }
    },
    {
        infinitive: "permitir",
        regular: true,
        translation: "to permit, to allow",
        conjugations: {
            yo: "permito",
            tú: "permites",
            él: "permite",
            nosotros: "permitimos",
            vosotros: "permitís",
            ellos: "permiten"
        }
    },
    {
        infinitive: "aparecer",
        regular: false,
        translation: "to appear",
        conjugations: {
            yo: "aparezco",
            tú: "apareces",
            él: "aparece",
            nosotros: "aparecemos",
            vosotros: "aparecéis",
            ellos: "aparecen"
        }
    },
    {
        infinitive: "conseguir",
        regular: false,
        translation: "to get, to obtain",
        conjugations: {
            yo: "consigo",
            tú: "consigues",
            él: "consigue",
            nosotros: "conseguimos",
            vosotros: "conseguís",
            ellos: "consiguen"
        }
    },
    {
        infinitive: "comenzar",
        regular: false,
        translation: "to begin, to commence",
        conjugations: {
            yo: "comienzo",
            tú: "comienzas",
            él: "comienza",
            nosotros: "comenzamos",
            vosotros: "comenzáis",
            ellos: "comienzan"
        }
    },
    {
        infinitive: "servir",
        regular: false,
        translation: "to serve",
        conjugations: {
            yo: "sirvo",
            tú: "sirves",
            él: "sirve",
            nosotros: "servimos",
            vosotros: "servís",
            ellos: "sirven"
        }
    },
    {
        infinitive: "sacar",
        regular: true,
        translation: "to take out, to get",
        conjugations: {
            yo: "saco",
            tú: "sacas",
            él: "saca",
            nosotros: "sacamos",
            vosotros: "sacáis",
            ellos: "sacan"
        }
    },
    {
        infinitive: "necesitar",
        regular: true,
        translation: "to need",
        conjugations: {
            yo: "necesito",
            tú: "necesitas",
            él: "necesita",
            nosotros: "necesitamos",
            vosotros: "necesitáis",
            ellos: "necesitan"
        }
    },
    {
        infinitive: "mantener",
        regular: false,
        translation: "to maintain, to keep",
        conjugations: {
            yo: "mantengo",
            tú: "mantienes",
            él: "mantiene",
            nosotros: "mantenemos",
            vosotros: "mantenéis",
            ellos: "mantienen"
        }
    },
    {
        infinitive: "resultar",
        regular: true,
        translation: "to result, to turn out",
        conjugations: {
            yo: "resulto",
            tú: "resultas",
            él: "resulta",
            nosotros: "resultamos",
            vosotros: "resultáis",
            ellos: "resultan"
        }
    },
    {
        infinitive: "leer",
        regular: true,
        translation: "to read",
        conjugations: {
            yo: "leo",
            tú: "lees",
            él: "lee",
            nosotros: "leemos",
            vosotros: "leéis",
            ellos: "leen"
        }
    },
    {
        infinitive: "caer",
        regular: false,
        translation: "to fall",
        conjugations: {
            yo: "caigo",
            tú: "caes",
            él: "cae",
            nosotros: "caemos",
            vosotros: "caéis",
            ellos: "caen"
        }
    },
    {
        infinitive: "cambiar",
        regular: true,
        translation: "to change",
        conjugations: {
            yo: "cambio",
            tú: "cambias",
            él: "cambia",
            nosotros: "cambiamos",
            vosotros: "cambiáis",
            ellos: "cambian"
        }
    },
    {
        infinitive: "presentar",
        regular: true,
        translation: "to present, to introduce",
        conjugations: {
            yo: "presento",
            tú: "presentas",
            él: "presenta",
            nosotros: "presentamos",
            vosotros: "presentáis",
            ellos: "presentan"
        }
    },
    {
        infinitive: "crear",
        regular: true,
        translation: "to create",
        conjugations: {
            yo: "creo",
            tú: "creas",
            él: "crea",
            nosotros: "creamos",
            vosotros: "creáis",
            ellos: "crean"
        }
    },
    {
        infinitive: "abrir",
        regular: true,
        translation: "to open",
        conjugations: {
            yo: "abro",
            tú: "abres",
            él: "abre",
            nosotros: "abrimos",
            vosotros: "abrís",
            ellos: "abren"
        }
    },
    {
        infinitive: "considerar",
        regular: true,
        translation: "to consider",
        conjugations: {
            yo: "considero",
            tú: "consideras",
            él: "considera",
            nosotros: "consideramos",
            vosotros: "consideráis",
            ellos: "consideran"
        }
    },
    {
        infinitive: "oír",
        regular: false,
        translation: "to hear",
        conjugations: {
            yo: "oigo",
            tú: "oyes",
            él: "oye",
            nosotros: "oímos",
            vosotros: "oís",
            ellos: "oyen"
        }
    },
    {
        infinitive: "acabar",
        regular: true,
        translation: "to finish, to end",
        conjugations: {
            yo: "acabo",
            tú: "acabas",
            él: "acaba",
            nosotros: "acabamos",
            vosotros: "acabáis",
            ellos: "acaban"
        }
    },
    {
        infinitive: "explicar",
        regular: true,
        translation: "to explain",
        conjugations: {
            yo: "explico",
            tú: "explicas",
            él: "explica",
            nosotros: "explicamos",
            vosotros: "explicáis",
            ellos: "explican"
        }
    },
    {
        infinitive: "tocar",
        regular: true,
        translation: "to touch, to play (instrument)",
        conjugations: {
            yo: "toco",
            tú: "tocas",
            él: "toca",
            nosotros: "tocamos",
            vosotros: "tocáis",
            ellos: "tocan"
        }
    },
    {
        infinitive: "reconocer",
        regular: false,
        translation: "to recognise",
        conjugations: {
            yo: "reconozco",
            tú: "reconoces",
            él: "reconoce",
            nosotros: "reconocemos",
            vosotros: "reconocéis",
            ellos: "reconocen"
        }
    },
    {
        infinitive: "estudiar",
        regular: true,
        translation: "to study",
        conjugations: {
            yo: "estudio",
            tú: "estudias",
            él: "estudia",
            nosotros: "estudiamos",
            vosotros: "estudiáis",
            ellos: "estudian"
        }
    },
    {
        infinitive: "alcanzar",
        regular: true,
        translation: "to reach, to achieve",
        conjugations: {
            yo: "alcanzo",
            tú: "alcanzas",
            él: "alcanza",
            nosotros: "alcanzamos",
            vosotros: "alcanzáis",
            ellos: "alcanzan"
        }
    },
    {
        infinitive: "nacer",
        regular: false,
        translation: "to be born",
        conjugations: {
            yo: "nazco",
            tú: "naces",
            él: "nace",
            nosotros: "nacemos",
            vosotros: "nacéis",
            ellos: "nacen"
        }
    },
    {
        infinitive: "dirigir",
        regular: false,
        translation: "to direct, to manage",
        conjugations: {
            yo: "dirijo",
            tú: "diriges",
            él: "dirige",
            nosotros: "dirigimos",
            vosotros: "dirigís",
            ellos: "dirigen"
        }
    },
    {
        infinitive: "correr",
        regular: true,
        translation: "to run",
        conjugations: {
            yo: "corro",
            tú: "corres",
            él: "corre",
            nosotros: "corremos",
            vosotros: "corréis",
            ellos: "corren"
        }
    },
    {
        infinitive: "utilizar",
        regular: true,
        translation: "to use, to utilize",
        conjugations: {
            yo: "utilizo",
            tú: "utilizas",
            él: "utiliza",
            nosotros: "utilizamos",
            vosotros: "utilizáis",
            ellos: "utilizan"
        }
    },
    {
        infinitive: "pagar",
        regular: true,
        translation: "to pay",
        conjugations: {
            yo: "pago",
            tú: "pagas",
            él: "paga",
            nosotros: "pagamos",
            vosotros: "pagáis",
            ellos: "pagan"
        }
    },
    {
        infinitive: "ayudar",
        regular: true,
        translation: "to help",
        conjugations: {
            yo: "ayudo",
            tú: "ayudas",
            él: "ayuda",
            nosotros: "ayudamos",
            vosotros: "ayudáis",
            ellos: "ayudan"
        }
    },
    {
        infinitive: "gustar",
        regular: true,
        translation: "to like, to please",
        conjugations: {
            yo: "gusto",
            tú: "gustas",
            él: "gusta",
            nosotros: "gustamos",
            vosotros: "gustáis",
            ellos: "gustan"
        }
    },
    {
        infinitive: "jugar",
        regular: false,
        translation: "to play (game/sport)",
        conjugations: {
            yo: "juego",
            tú: "juegas",
            él: "juega",
            nosotros: "jugamos",
            vosotros: "jugáis",
            ellos: "juegan"
        }
    },
    {
        infinitive: "ofrecer",
        regular: false,
        translation: "to offer",
        conjugations: {
            yo: "ofrezco",
            tú: "ofreces",
            él: "ofrece",
            nosotros: "ofrecemos",
            vosotros: "ofrecéis",
            ellos: "ofrecen"
        }
    },
    {
        infinitive: "descubrir",
        regular: true,
        translation: "to discover",
        conjugations: {
            yo: "descubro",
            tú: "descubres",
            él: "descubre",
            nosotros: "descubrimos",
            vosotros: "descubrís",
            ellos: "descubren"
        }
    },
    {
        infinitive: "levantar",
        regular: true,
        translation: "to raise, to lift",
        conjugations: {
            yo: "levanto",
            tú: "levantas",
            él: "levanta",
            nosotros: "levantamos",
            vosotros: "levantáis",
            ellos: "levantan"
        }
    },
    {
        infinitive: "intentar",
        regular: true,
        translation: "to try, to attempt",
        conjugations: {
            yo: "intento",
            tú: "intentas",
            él: "intenta",
            nosotros: "intentamos",
            vosotros: "intentáis",
            ellos: "intentan"
        }
    },
    {
        infinitive: "usar",
        regular: true,
        translation: "to use",
        conjugations: {
            yo: "uso",
            tú: "usas",
            él: "usa",
            nosotros: "usamos",
            vosotros: "usáis",
            ellos: "usan"
        }
    },
    {
        infinitive: "formar",
        regular: true,
        translation: "to form, to train",
        conjugations: {
            yo: "formo",
            tú: "formas",
            él: "forma",
            nosotros: "formamos",
            vosotros: "formáis",
            ellos: "forman"
        }
    },
    {
        infinitive: "traer",
        regular: false,
        translation: "to bring",
        conjugations: {
            yo: "traigo",
            tú: "traes",
            él: "trae",
            nosotros: "traemos",
            vosotros: "traéis",
            ellos: "traen"
        }
    },
    {
        infinitive: "partir",
        regular: true,
        translation: "to leave, to split",
        conjugations: {
            yo: "parto",
            tú: "partes",
            él: "parte",
            nosotros: "partimos",
            vosotros: "partís",
            ellos: "parten"
        }
    },
    {
        infinitive: "morir",
        regular: false,
        translation: "to die",
        conjugations: {
            yo: "muero",
            tú: "mueres",
            él: "muere",
            nosotros: "morimos",
            vosotros: "morís",
            ellos: "mueren"
        }
    },
    {
        infinitive: "aceptar",
        regular: true,
        translation: "to accept",
        conjugations: {
            yo: "acepto",
            tú: "aceptas",
            él: "acepta",
            nosotros: "aceptamos",
            vosotros: "aceptáis",
            ellos: "aceptan"
        }
    },
    {
        infinitive: "realizar",
        regular: true,
        translation: "to carry out, to accomplish",
        conjugations: {
            yo: "realizo",
            tú: "realizas",
            él: "realiza",
            nosotros: "realizamos",
            vosotros: "realizáis",
            ellos: "realizan"
        }
    },
    {
        infinitive: "suponer",
        regular: false,
        translation: "to suppose, to assume",
        conjugations: {
            yo: "supongo",
            tú: "supones",
            él: "supone",
            nosotros: "suponemos",
            vosotros: "suponéis",
            ellos: "suponen"
        }
    },
    {
        infinitive: "comprender",
        regular: true,
        translation: "to understand, to comprise",
        conjugations: {
            yo: "comprendo",
            tú: "comprendes",
            él: "comprende",
            nosotros: "comprendemos",
            vosotros: "comprendéis",
            ellos: "comprenden"
        }
    },
    {
        infinitive: "lograr",
        regular: true,
        translation: "to achieve, to manage",
        conjugations: {
            yo: "logro",
            tú: "logras",
            él: "logra",
            nosotros: "logramos",
            vosotros: "lográis",
            ellos: "logran"
        }
    },
    {
        infinitive: "comer",
        regular: true,
        translation: "to eat",
        conjugations: {
            yo: "como",
            tú: "comes",
            él: "come",
            nosotros: "comemos",
            vosotros: "coméis",
            ellos: "comen"
        }
    },
    {
        infinitive: "sentar",
        regular: false,
        translation: "to sit, to seat",
        conjugations: {
            yo: "siento",
            tú: "sientas",
            él: "sienta",
            nosotros: "sentamos",
            vosotros: "sentáis",
            ellos: "sientan"
        }
    },
    {
        infinitive: "ganar",
        regular: true,
        translation: "to win, to earn",
        conjugations: {
            yo: "gano",
            tú: "ganas",
            él: "gana",
            nosotros: "ganamos",
            vosotros: "ganáis",
            ellos: "ganan"
        }
    },
    {
        infinitive: "mover",
        regular: false,
        translation: "to move",
        conjugations: {
            yo: "muevo",
            tú: "mueves",
            él: "mueve",
            nosotros: "movemos",
            vosotros: "movéis",
            ellos: "mueven"
        }
    },
    {
        infinitive: "dormir",
        regular: false,
        translation: "to sleep",
        conjugations: {
            yo: "duermo",
            tú: "duermes",
            él: "duerme",
            nosotros: "dormimos",
            vosotros: "dormís",
            ellos: "duermen"
        }
    },
    {
        infintive: "disfrutar",
        regular: true,
        translation: "to enjoy",
        conjugations: {
            yo: "disfruto",
            tú: "disfrutas",
            él: "disfruta",
            nosotros: "disfrutamos",
            vosotros: "disfrutáis",
            ellos: "disfrutan"
        }
    },
    {
        infinitive: "olvidar",
        regular: true,
        translation: "to forget",
        conjugations: {
            yo: "olvido",
            tú: "olvidas",
            él: "olvida",
            nosotros: "olvidamos",
            vosotros: "olvidáis",
            ellos: "olvidan"
        }
    },
    {
        infinitive: "lanzar",
        regular: true,
        translation: "to throw, to launch",
        conjugations: {
            yo: "lanzo",
            tú: "lanzas",
            él: "lanza",
            nosotros: "lanzamos",
            vosotros: "lanzáis",
            ellos: "lanzan"
        }
    },
    {
        infinitive: "reír",
        regular: false,
        translation: "to laugh",
        conjugations: {
            yo: "río",
            tú: "ríes",
            él: "ríe",
            nosotros: "reímos",
            vosotros: "reís",
            ellos: "ríen"
        }
    },
    {
        infinitive: "aprender",
        regular: true,
        translation: "to learn",
        conjugations: {
            yo: "aprendo",
            tú: "aprendes",
            él: "aprende",
            nosotros: "aprendemos",
            vosotros: "aprendéis",
            ellos: "aprenden"
        }
    },
    {
        infinitive: "sonreír",
        regular: false,
        translation: "to smile",
        conjugations: {
            yo: "sonrío",
            tú: "sonríes",
            él: "sonríe",
            nosotros: "sonreímos",
            vosotros: "sonreís",
            ellos: "sonríen"
        }
    }
];

// Application state
let currentVerb = null;
let showingConjugations = false;
let usedVerbs = [];

// DOM elements
const flashcard = document.getElementById('flashcard');
const infinitiveEl = document.getElementById('infinitive');
const translationEl = document.getElementById('translation');
const conjugationsEl = document.getElementById('conjugations');

// Get a random verb that hasn't been shown recently
function getRandomVerb() {
    // If we've used all verbs, reset the used list
    if (usedVerbs.length >= spanishVerbs.length) {
        usedVerbs = [];
    }
    
    // Get available verbs (not recently used)
    const availableVerbs = spanishVerbs.filter(verb => 
        !usedVerbs.includes(verb.infinitive)
    );
    
    // Pick a random verb from available ones
    const randomIndex = Math.floor(Math.random() * availableVerbs.length);
    const verb = availableVerbs[randomIndex];
    
    // Add to used list
    usedVerbs.push(verb.infinitive);
    
    return verb;
}

// Display the verb infinitive and translation
function showInfinitive(verb) {
    infinitiveEl.textContent = verb.infinitive + (verb.regular ? "" : " (irr.)");
    translationEl.textContent = verb.translation;
    conjugationsEl.classList.add('hidden');
    infinitiveEl.classList.remove('hidden');
    translationEl.classList.remove('hidden');
}

// Display the conjugations
function showConjugations(verb) {
    // Infinitive and translation should always be visible at the top
    infinitiveEl.textContent = verb.infinitive + (verb.regular ? "" : " (irr.)");
    translationEl.textContent = verb.translation;
    infinitiveEl.classList.remove('hidden');
    translationEl.classList.remove('hidden');

    // Clear previous content
    conjugationsEl.innerHTML = '';

    // Create heading
    const heading = document.createElement('h3');
    heading.textContent = 'Present Tense Conjugations';
    heading.style.marginTop = '20px';
    conjugationsEl.appendChild(heading);

    // Create conjugation items
    const conjugations = [
        { pronoun: 'yo', form: verb.conjugations.yo },
        { pronoun: 'tú', form: verb.conjugations.tú },
        { pronoun: 'él/ella/Ud.', form: verb.conjugations.él },
        { pronoun: 'nosotros', form: verb.conjugations.nosotros },
        { pronoun: 'vosotros', form: verb.conjugations.vosotros },
        { pronoun: 'ellos/ellas/Uds.', form: verb.conjugations.ellos }
    ];

    conjugations.forEach(({ pronoun, form }) => {
        const div = document.createElement('div');
        div.className = 'conjugation-item';

        const pronounSpan = document.createElement('span');
        pronounSpan.className = 'pronoun';
        pronounSpan.textContent = pronoun;

        div.appendChild(pronounSpan);
        div.appendChild(document.createTextNode(' ' + form));

        conjugationsEl.appendChild(div);
    });

    conjugationsEl.classList.remove('hidden');
}

// Handle card click or button click
function handleClick() {
    if (!showingConjugations) {
        // Show conjugations
        showConjugations(currentVerb);
        showingConjugations = true;
    } else {
        // Show new verb
        currentVerb = getRandomVerb();
        showInfinitive(currentVerb);
        showingConjugations = false;
    }
}

// Event listeners
flashcard.addEventListener('click', handleClick);

// Initialize with a random verb
currentVerb = getRandomVerb();
showInfinitive(currentVerb);
