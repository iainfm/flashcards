// Most common Spanish verbs with their English translations and conjugations for multiple tenses
const spanishVerbs = [
    {
        infinitive: "ser",
        regular: false,
        translation: "to be (permanent)",
        tenses: {
            present: {
                yo: "soy",
                tú: "eres",
                él: "es",
                nosotros: "somos",
                vosotros: "sois",
                ellos: "son"
            },
            preterite: {
                yo: "fui",
                tú: "fuiste",
                él: "fue",
                nosotros: "fuimos",
                vosotros: "fuisteis",
                ellos: "fueron"
            },
            imperfect: {
                yo: "era",
                tú: "eras",
                él: "era",
                nosotros: "éramos",
                vosotros: "erais",
                ellos: "eran"
            },
            future: {
                yo: "seré",
                tú: "serás",
                él: "será",
                nosotros: "seremos",
                vosotros: "seréis",
                ellos: "serán"
            },
            conditional: {
                yo: "sería",
                tú: "serías",
                él: "sería",
                nosotros: "seríamos",
                vosotros: "seríais",
                ellos: "serían"
            }
        }
    },
    {
        infinitive: "estar",
        regular: false,
        translation: "to be (temporary)",
        tenses: {
            present: {
                yo: "estoy",
                tú: "estás",
                él: "está",
                nosotros: "estamos",
                vosotros: "estáis",
                ellos: "están"
            },
            preterite: {
                yo: "estuve",
                tú: "estuviste",
                él: "estuvo",
                nosotros: "estuvimos",
                vosotros: "estuvisteis",
                ellos: "estuvieron"
            },
            imperfect: {
                yo: "estaba",
                tú: "estabas",
                él: "estaba",
                nosotros: "estábamos",
                vosotros: "estabais",
                ellos: "estaban"
            },
            future: {
                yo: "estaré",
                tú: "estarás",
                él: "estará",
                nosotros: "estaremos",
                vosotros: "estaréis",
                ellos: "estarán"
            },
            conditional: {
                yo: "estaría",
                tú: "estarías",
                él: "estaría",
                nosotros: "estaríamos",
                vosotros: "estaríais",
                ellos: "estarían"
            }
        }
    },
    {
        infinitive: "haber",
        regular: false,
        translation: "to have (auxiliary)",
        tenses: {
            present: {
                yo: "he",
                tú: "has",
                él: "ha / hay",
                nosotros: "hemos",
                vosotros: "habéis",
                ellos: "han"
            },
            preterite: {
                yo: "hube",
                tú: "hubiste",
                él: "hubo",
                nosotros: "hubimos",
                vosotros: "hubisteis",
                ellos: "hubieron"
            },
            imperfect: {
                yo: "había",
                tú: "habías",
                él: "había",
                nosotros: "habíamos",
                vosotros: "habíais",
                ellos: "habían"
            },
            future: {
                yo: "habré",
                tú: "habrás",
                él: "habrá",
                nosotros: "habremos",
                vosotros: "habréis",
                ellos: "habrán"
            },
            conditional: {
                yo: "habría",
                tú: "habrías",
                él: "habría",
                nosotros: "habríamos",
                vosotros: "habríais",
                ellos: "habrían"
            }
        }
    },
    {
        infinitive: "tener",
        regular: false,
        translation: "to have",
        tenses: {
            present: {
                yo: "tengo",
                tú: "tienes",
                él: "tiene",
                nosotros: "tenemos",
                vosotros: "tenéis",
                ellos: "tienen"
            },
            preterite: {
                yo: "tuve",
                tú: "tuviste",
                él: "tuvo",
                nosotros: "tuvimos",
                vosotros: "tuvisteis",
                ellos: "tuvieron"
            },
            imperfect: {
                yo: "tenía",
                tú: "tenías",
                él: "tenía",
                nosotros: "teníamos",
                vosotros: "teníais",
                ellos: "tenían"
            },
            future: {
                yo: "tendré",
                tú: "tendrás",
                él: "tendrá",
                nosotros: "tendremos",
                vosotros: "tendréis",
                ellos: "tendrán"
            },
            conditional: {
                yo: "tendría",
                tú: "tendrías",
                él: "tendría",
                nosotros: "tendríamos",
                vosotros: "tendríais",
                ellos: "tendrían"
            }
        }
    },
    {
        infinitive: "hacer",
        regular: false,
        translation: "to do, to make",
        tenses: {
            present: {
                yo: "hago",
                tú: "haces",
                él: "hace",
                nosotros: "hacemos",
                vosotros: "hacéis",
                ellos: "hacen"
            },
            preterite: {
                yo: "hice",
                tú: "hiciste",
                él: "hizo",
                nosotros: "hicimos",
                vosotros: "hicisteis",
                ellos: "hicieron"
            },
            imperfect: {
                yo: "hacía",
                tú: "hacías",
                él: "hacía",
                nosotros: "hacíamos",
                vosotros: "hacíais",
                ellos: "hacían"
            },
            future: {
                yo: "haré",
                tú: "harás",
                él: "hará",
                nosotros: "haremos",
                vosotros: "haréis",
                ellos: "harán"
            },
            conditional: {
                yo: "haría",
                tú: "harías",
                él: "haría",
                nosotros: "haríamos",
                vosotros: "haríais",
                ellos: "harían"
            }
        }
    },
    {
        infinitive: "poder",
        regular: false,
        translation: "to be able, can",
        tenses: {
            present: {
                yo: "puedo",
                tú: "puedes",
                él: "puede",
                nosotros: "podemos",
                vosotros: "podéis",
                ellos: "pueden"
            },
            preterite: {
                yo: "pude",
                tú: "pudiste",
                él: "pudo",
                nosotros: "pudimos",
                vosotros: "pudisteis",
                ellos: "pudieron"
            },
            imperfect: {
                yo: "podía",
                tú: "podías",
                él: "podía",
                nosotros: "podíamos",
                vosotros: "podíais",
                ellos: "podían"
            },
            future: {
                yo: "podré",
                tú: "podrás",
                él: "podrá",
                nosotros: "podremos",
                vosotros: "podréis",
                ellos: "podrán"
            },
            conditional: {
                yo: "podría",
                tú: "podrías",
                él: "podría",
                nosotros: "podríamos",
                vosotros: "podríais",
                ellos: "podrían"
            }
        }
    },
    {
        infinitive: "decir",
        regular: false,
        translation: "to say, to tell",
        tenses: {
            present: {
                yo: "digo",
                tú: "dices",
                él: "dice",
                nosotros: "decimos",
                vosotros: "decís",
                ellos: "dicen"
            },
            preterite: {
                yo: "dije",
                tú: "dijiste",
                él: "dijo",
                nosotros: "dijimos",
                vosotros: "dijisteis",
                ellos: "dijeron"
            },
            imperfect: {
                yo: "decía",
                tú: "decías",
                él: "decía",
                nosotros: "decíamos",
                vosotros: "decíais",
                ellos: "decían"
            },
            future: {
                yo: "diré",
                tú: "dirás",
                él: "dirá",
                nosotros: "diremos",
                vosotros: "diréis",
                ellos: "dirán"
            },
            conditional: {
                yo: "diría",
                tú: "dirías",
                él: "diría",
                nosotros: "diríamos",
                vosotros: "diríais",
                ellos: "dirían"
            }
        }
    },
    {
        infinitive: "ir",
        regular: false,
        translation: "to go",
        tenses: {
            present: {
                yo: "voy",
                tú: "vas",
                él: "va",
                nosotros: "vamos",
                vosotros: "vais",
                ellos: "van"
            },
            preterite: {
                yo: "fui",
                tú: "fuiste",
                él: "fue",
                nosotros: "fuimos",
                vosotros: "fuisteis",
                ellos: "fueron"
            },
            imperfect: {
                yo: "iba",
                tú: "ibas",
                él: "iba",
                nosotros: "íbamos",
                vosotros: "ibais",
                ellos: "iban"
            },
            future: {
                yo: "iré",
                tú: "irás",
                él: "irá",
                nosotros: "iremos",
                vosotros: "iréis",
                ellos: "irán"
            },
            conditional: {
                yo: "iría",
                tú: "irías",
                él: "iría",
                nosotros: "iríamos",
                vosotros: "iríais",
                ellos: "irían"
            }
        }
    },
    {
        infinitive: "ver",
        regular: false,
        translation: "to see",
        tenses: {
            present: {
                yo: "veo",
                tú: "ves",
                él: "ve",
                nosotros: "vemos",
                vosotros: "veis",
                ellos: "ven"
            },
            preterite: {
                yo: "vi",
                tú: "viste",
                él: "vio",
                nosotros: "vimos",
                vosotros: "visteis",
                ellos: "vieron"
            },
            imperfect: {
                yo: "veía",
                tú: "veías",
                él: "veía",
                nosotros: "veíamos",
                vosotros: "veíais",
                ellos: "veían"
            },
            future: {
                yo: "veré",
                tú: "verás",
                él: "verá",
                nosotros: "veremos",
                vosotros: "veréis",
                ellos: "verán"
            },
            conditional: {
                yo: "vería",
                tú: "verías",
                él: "vería",
                nosotros: "veríamos",
                vosotros: "veríais",
                ellos: "verían"
            }
        }
    },
    {
        infinitive: "dar",
        regular: false,
        translation: "to give",
        tenses: {
            present: {
                yo: "doy",
                tú: "das",
                él: "da",
                nosotros: "damos",
                vosotros: "dais",
                ellos: "dan"
            },
            preterite: {
                yo: "di",
                tú: "diste",
                él: "dio",
                nosotros: "dimos",
                vosotros: "disteis",
                ellos: "dieron"
            },
            imperfect: {
                yo: "daba",
                tú: "dabas",
                él: "daba",
                nosotros: "dábamos",
                vosotros: "dabais",
                ellos: "daban"
            },
            future: {
                yo: "daré",
                tú: "darás",
                él: "dará",
                nosotros: "daremos",
                vosotros: "daréis",
                ellos: "darán"
            },
            conditional: {
                yo: "daría",
                tú: "darías",
                él: "daría",
                nosotros: "daríamos",
                vosotros: "daríais",
                ellos: "darían"
            }
        }
    },
    {
        infinitive: "saber",
        regular: false,
        translation: "to know (facts)",
        tenses: {
            present: {
                yo: "sé",
                tú: "sabes",
                él: "sabe",
                nosotros: "sabemos",
                vosotros: "sabéis",
                ellos: "saben"
            },
            preterite: {
                yo: "supe",
                tú: "supiste",
                él: "supo",
                nosotros: "supimos",
                vosotros: "supisteis",
                ellos: "supieron"
            },
            imperfect: {
                yo: "sabía",
                tú: "sabías",
                él: "sabía",
                nosotros: "sabíamos",
                vosotros: "sabíais",
                ellos: "sabían"
            },
            future: {
                yo: "sabré",
                tú: "sabrás",
                él: "sabrá",
                nosotros: "sabremos",
                vosotros: "sabréis",
                ellos: "sabrán"
            },
            conditional: {
                yo: "sabría",
                tú: "sabrías",
                él: "sabría",
                nosotros: "sabríamos",
                vosotros: "sabríais",
                ellos: "sabrían"
            }
        }
    },
    {
        infinitive: "querer",
        regular: false,
        translation: "to want, to love",
        tenses: {
            present: {
                yo: "quiero",
                tú: "quieres",
                él: "quiere",
                nosotros: "queremos",
                vosotros: "queréis",
                ellos: "quieren"
            },
            preterite: {
                yo: "quise",
                tú: "quisiste",
                él: "quiso",
                nosotros: "quisimos",
                vosotros: "quisisteis",
                ellos: "quisieron"
            },
            imperfect: {
                yo: "quería",
                tú: "querías",
                él: "quería",
                nosotros: "queríamos",
                vosotros: "queríais",
                ellos: "querían"
            },
            future: {
                yo: "querré",
                tú: "querrás",
                él: "querrá",
                nosotros: "querremos",
                vosotros: "querréis",
                ellos: "querrán"
            },
            conditional: {
                yo: "querría",
                tú: "querrías",
                él: "querría",
                nosotros: "querríamos",
                vosotros: "querríais",
                ellos: "querrían"
            }
        }
    },
    {
        infinitive: "llegar",
        regular: true,
        translation: "to arrive",
        tenses: {
            present: {
                yo: "llego",
                tú: "llegas",
                él: "llega",
                nosotros: "llegamos",
                vosotros: "llegáis",
                ellos: "llegan"
            },
            preterite: {
                yo: "llegué",
                tú: "llegaste",
                él: "llegó",
                nosotros: "llegamos",
                vosotros: "llegasteis",
                ellos: "llegaron"
            },
            imperfect: {
                yo: "llegaba",
                tú: "llegabas",
                él: "llegaba",
                nosotros: "llegábamos",
                vosotros: "llegabais",
                ellos: "llegaban"
            },
            future: {
                yo: "llegaré",
                tú: "llegarás",
                él: "llegará",
                nosotros: "llegaremos",
                vosotros: "llegaréis",
                ellos: "llegarán"
            },
            conditional: {
                yo: "llegaría",
                tú: "llegarías",
                él: "llegaría",
                nosotros: "llegaríamos",
                vosotros: "llegaríais",
                ellos: "llegarían"
            }
        }
    },
    {
        infinitive: "pasar",
        regular: true,
        translation: "to pass, to happen",
        tenses: {
            present: {
                yo: "paso",
                tú: "pasas",
                él: "pasa",
                nosotros: "pasamos",
                vosotros: "pasáis",
                ellos: "pasan"
            },
            preterite: {
                yo: "pasé",
                tú: "pasaste",
                él: "pasó",
                nosotros: "pasamos",
                vosotros: "pasasteis",
                ellos: "pasaron"
            },
            imperfect: {
                yo: "pasaba",
                tú: "pasabas",
                él: "pasaba",
                nosotros: "pasábamos",
                vosotros: "pasabais",
                ellos: "pasaban"
            },
            future: {
                yo: "pasaré",
                tú: "pasarás",
                él: "pasará",
                nosotros: "pasaremos",
                vosotros: "pasaréis",
                ellos: "pasarán"
            },
            conditional: {
                yo: "pasaría",
                tú: "pasarías",
                él: "pasaría",
                nosotros: "pasaríamos",
                vosotros: "pasaríais",
                ellos: "pasarían"
            }
        }
    },
    {
        infinitive: "deber",
        regular: true,
        translation: "to owe, must",
        tenses: {
            present: {
                yo: "debo",
                tú: "debes",
                él: "debe",
                nosotros: "debemos",
                vosotros: "debéis",
                ellos: "deben"
            },
            preterite: {
                yo: "debí",
                tú: "debiste",
                él: "debió",
                nosotros: "debimos",
                vosotros: "debisteis",
                ellos: "debieron"
            },
            imperfect: {
                yo: "debía",
                tú: "debías",
                él: "debía",
                nosotros: "debíamos",
                vosotros: "debíais",
                ellos: "debían"
            },
            future: {
                yo: "deberé",
                tú: "deberás",
                él: "deberá",
                nosotros: "deberemos",
                vosotros: "deberéis",
                ellos: "deberán"
            },
            conditional: {
                yo: "debería",
                tú: "deberías",
                él: "debería",
                nosotros: "deberíamos",
                vosotros: "deberíais",
                ellos: "deberían"
            }
        }
    },
    {
        infinitive: "poner",
        regular: false,
        translation: "to put, to place",
        tenses: {
            present: {
                yo: "pongo",
                tú: "pones",
                él: "pone",
                nosotros: "ponemos",
                vosotros: "ponéis",
                ellos: "ponen"
            },
            preterite: {
                yo: "puse",
                tú: "pusiste",
                él: "puso",
                nosotros: "pusimos",
                vosotros: "pusisteis",
                ellos: "pusieron"
            },
            imperfect: {
                yo: "ponía",
                tú: "ponías",
                él: "ponía",
                nosotros: "poníamos",
                vosotros: "poníais",
                ellos: "ponían"
            },
            future: {
                yo: "pondré",
                tú: "pondrás",
                él: "pondrá",
                nosotros: "pondremos",
                vosotros: "pondréis",
                ellos: "pondrán"
            },
            conditional: {
                yo: "pondría",
                tú: "pondrías",
                él: "pondría",
                nosotros: "pondríamos",
                vosotros: "pondríais",
                ellos: "pondrían"
            }
        }
    },
    {
        infinitive: "parecer",
        regular: false,
        translation: "to seem, to appear",
        tenses: {
            present: {
                yo: "parezco",
                tú: "pareces",
                él: "parece",
                nosotros: "parecemos",
                vosotros: "parecéis",
                ellos: "parecen"
            },
            preterite: {
                yo: "parecí",
                tú: "pareciste",
                él: "pareció",
                nosotros: "parecimos",
                vosotros: "parecisteis",
                ellos: "parecieron"
            },
            imperfect: {
                yo: "parecía",
                tú: "parecías",
                él: "parecía",
                nosotros: "parecíamos",
                vosotros: "parecíais",
                ellos: "parecían"
            },
            future: {
                yo: "pareceré",
                tú: "parecerás",
                él: "parecerá",
                nosotros: "pareceremos",
                vosotros: "pareceréis",
                ellos: "parecerán"
            },
            conditional: {
                yo: "parecería",
                tú: "parecerías",
                él: "parecería",
                nosotros: "pareceríamos",
                vosotros: "pareceríais",
                ellos: "parecerían"
            }
        }
    },
    {
        infinitive: "quedar",
        regular: true,
        translation: "to stay, to remain",
        tenses: {
            present: {
                yo: "quedo",
                tú: "quedas",
                él: "queda",
                nosotros: "quedamos",
                vosotros: "quedáis",
                ellos: "quedan"
            },
            preterite: {
                yo: "quedé",
                tú: "quedaste",
                él: "quedó",
                nosotros: "quedamos",
                vosotros: "quedasteis",
                ellos: "quedaron"
            },
            imperfect: {
                yo: "quedaba",
                tú: "quedabas",
                él: "quedaba",
                nosotros: "quedábamos",
                vosotros: "quedabais",
                ellos: "quedaban"
            },
            future: {
                yo: "quedaré",
                tú: "quedarás",
                él: "quedará",
                nosotros: "quedaremos",
                vosotros: "quedaréis",
                ellos: "quedarán"
            },
            conditional: {
                yo: "quedaría",
                tú: "quedarías",
                él: "quedaría",
                nosotros: "quedaríamos",
                vosotros: "quedaríais",
                ellos: "quedarían"
            }
        }
    },
    {
        infinitive: "creer",
        regular: true,
        translation: "to believe",
        tenses: {
            present: {
                yo: "creo",
                tú: "crees",
                él: "cree",
                nosotros: "creemos",
                vosotros: "creéis",
                ellos: "creen"
            },
            preterite: {
                yo: "creí",
                tú: "creíste",
                él: "creyó",
                nosotros: "creímos",
                vosotros: "creísteis",
                ellos: "creyeron"
            },
            imperfect: {
                yo: "creía",
                tú: "creías",
                él: "creía",
                nosotros: "creíamos",
                vosotros: "creíais",
                ellos: "creían"
            },
            future: {
                yo: "creeré",
                tú: "creerás",
                él: "creerá",
                nosotros: "creeremos",
                vosotros: "creeréis",
                ellos: "creerán"
            },
            conditional: {
                yo: "creería",
                tú: "creerías",
                él: "creería",
                nosotros: "creeríamos",
                vosotros: "creeríais",
                ellos: "creerían"
            }
        }
    },
    {
        infinitive: "hablar",
        regular: true,
        translation: "to speak, to talk",
        tenses: {
            present: {
                yo: "hablo",
                tú: "hablas",
                él: "habla",
                nosotros: "hablamos",
                vosotros: "habláis",
                ellos: "hablan"
            },
            preterite: {
                yo: "hablé",
                tú: "hablaste",
                él: "habló",
                nosotros: "hablamos",
                vosotros: "hablasteis",
                ellos: "hablaron"
            },
            imperfect: {
                yo: "hablaba",
                tú: "hablabas",
                él: "hablaba",
                nosotros: "hablábamos",
                vosotros: "hablabais",
                ellos: "hablaban"
            },
            future: {
                yo: "hablaré",
                tú: "hablarás",
                él: "hablará",
                nosotros: "hablaremos",
                vosotros: "hablaréis",
                ellos: "hablarán"
            },
            conditional: {
                yo: "hablaría",
                tú: "hablarías",
                él: "hablaría",
                nosotros: "hablaríamos",
                vosotros: "hablaríais",
                ellos: "hablarían"
            }
        }
    },
    {
        infinitive: "llevar",
        regular: true,
        translation: "to carry, to wear",
        tenses: {
            present: {
                yo: "llevo",
                tú: "llevas",
                él: "lleva",
                nosotros: "llevamos",
                vosotros: "lleváis",
                ellos: "llevan"
            },
            preterite: {
                yo: "llevé",
                tú: "llevaste",
                él: "llevó",
                nosotros: "llevamos",
                vosotros: "llevasteis",
                ellos: "llevaron"
            },
            imperfect: {
                yo: "llevaba",
                tú: "llevabas",
                él: "llevaba",
                nosotros: "llevábamos",
                vosotros: "llevabais",
                ellos: "llevaban"
            },
            future: {
                yo: "llevaré",
                tú: "llevarás",
                él: "llevará",
                nosotros: "llevaremos",
                vosotros: "llevaréis",
                ellos: "llevarán"
            },
            conditional: {
                yo: "llevaría",
                tú: "llevarías",
                él: "llevaría",
                nosotros: "llevaríamos",
                vosotros: "llevaríais",
                ellos: "llevarían"
            }
        }
    },
    {
        infinitive: "dejar",
        regular: true,
        translation: "to leave, to let",
        tenses: {
            present: {
                yo: "dejo",
                tú: "dejas",
                él: "deja",
                nosotros: "dejamos",
                vosotros: "dejáis",
                ellos: "dejan"
            },
            preterite: {
                yo: "dejé",
                tú: "dejaste",
                él: "dejó",
                nosotros: "dejamos",
                vosotros: "dejasteis",
                ellos: "dejaron"
            },
            imperfect: {
                yo: "dejaba",
                tú: "dejabas",
                él: "dejaba",
                nosotros: "dejábamos",
                vosotros: "dejabais",
                ellos: "dejaban"
            },
            future: {
                yo: "dejaré",
                tú: "dejarás",
                él: "dejará",
                nosotros: "dejaremos",
                vosotros: "dejaréis",
                ellos: "dejarán"
            },
            conditional: {
                yo: "dejaría",
                tú: "dejarías",
                él: "dejaría",
                nosotros: "dejaríamos",
                vosotros: "dejaríais",
                ellos: "dejarían"
            }
        }
    },
    {
        infinitive: "seguir",
        regular: false,
        translation: "to follow, to continue",
        tenses: {
            present: {
                yo: "sigo",
                tú: "sigues",
                él: "sigue",
                nosotros: "seguimos",
                vosotros: "seguís",
                ellos: "siguen"
            },
            preterite: {
                yo: "seguí",
                tú: "seguiste",
                él: "siguió",
                nosotros: "seguimos",
                vosotros: "seguisteis",
                ellos: "siguieron"
            },
            imperfect: {
                yo: "seguía",
                tú: "seguías",
                él: "seguía",
                nosotros: "seguíamos",
                vosotros: "seguíais",
                ellos: "seguían"
            },
            future: {
                yo: "seguiré",
                tú: "seguirás",
                él: "seguirá",
                nosotros: "seguiremos",
                vosotros: "seguiréis",
                ellos: "seguirán"
            },
            conditional: {
                yo: "seguiría",
                tú: "seguirías",
                él: "seguiría",
                nosotros: "seguiríamos",
                vosotros: "seguiríais",
                ellos: "seguirían"
            }
        }
    },
    {
        infinitive: "encontrar",
        regular: false,
        translation: "to find, to meet",
        tenses: {
            present: {
                yo: "encuentro",
                tú: "encuentras",
                él: "encuentra",
                nosotros: "encontramos",
                vosotros: "encontráis",
                ellos: "encuentran"
            },
            preterite: {
                yo: "encontré",
                tú: "encontraste",
                él: "encontró",
                nosotros: "encontramos",
                vosotros: "encontrasteis",
                ellos: "encontraron"
            },
            imperfect: {
                yo: "encontraba",
                tú: "encontrabas",
                él: "encontraba",
                nosotros: "encontrábamos",
                vosotros: "encontrabais",
                ellos: "encontraban"
            },
            future: {
                yo: "encontraré",
                tú: "encontrarás",
                él: "encontrará",
                nosotros: "encontraremos",
                vosotros: "encontraréis",
                ellos: "encontrarán"
            },
            conditional: {
                yo: "encontraría",
                tú: "encontrarías",
                él: "encontraría",
                nosotros: "encontraríamos",
                vosotros: "encontraríais",
                ellos: "encontrarían"
            }
        }
    },
    {
        infinitive: "llamar",
        regular: true,
        translation: "to call",
        tenses: {
            present: {
                yo: "llamo",
                tú: "llamas",
                él: "llama",
                nosotros: "llamamos",
                vosotros: "llamáis",
                ellos: "llaman"
            },
            preterite: {
                yo: "llamé",
                tú: "llamaste",
                él: "llamó",
                nosotros: "llamamos",
                vosotros: "llamasteis",
                ellos: "llamaron"
            },
            imperfect: {
                yo: "llamaba",
                tú: "llamabas",
                él: "llamaba",
                nosotros: "llamábamos",
                vosotros: "llamabais",
                ellos: "llamaban"
            },
            future: {
                yo: "llamaré",
                tú: "llamarás",
                él: "llamará",
                nosotros: "llamaremos",
                vosotros: "llamaréis",
                ellos: "llamarán"
            },
            conditional: {
                yo: "llamaría",
                tú: "llamarías",
                él: "llamaría",
                nosotros: "llamaríamos",
                vosotros: "llamaríais",
                ellos: "llamarían"
            }
        }
    },
    {
        infinitive: "venir",
        regular: false,
        translation: "to come",
        tenses: {
            present: {
                yo: "vengo",
                tú: "vienes",
                él: "viene",
                nosotros: "venimos",
                vosotros: "venís",
                ellos: "vienen"
            },
            preterite: {
                yo: "vine",
                tú: "viniste",
                él: "vino",
                nosotros: "vinimos",
                vosotros: "vinisteis",
                ellos: "vinieron"
            },
            imperfect: {
                yo: "venía",
                tú: "venías",
                él: "venía",
                nosotros: "veníamos",
                vosotros: "veníais",
                ellos: "venían"
            },
            future: {
                yo: "vendré",
                tú: "vendrás",
                él: "vendrá",
                nosotros: "vendremos",
                vosotros: "vendréis",
                ellos: "vendrán"
            },
            conditional: {
                yo: "vendría",
                tú: "vendrías",
                él: "vendría",
                nosotros: "vendríamos",
                vosotros: "vendríais",
                ellos: "vendrían"
            }
        }
    },
    {
        infinitive: "pensar",
        regular: false,
        translation: "to think",
        tenses: {
            present: {
                yo: "pienso",
                tú: "piensas",
                él: "piensa",
                nosotros: "pensamos",
                vosotros: "pensáis",
                ellos: "piensan"
            },
            preterite: {
                yo: "pensé",
                tú: "pensaste",
                él: "pensó",
                nosotros: "pensamos",
                vosotros: "pensasteis",
                ellos: "pensaron"
            },
            imperfect: {
                yo: "pensaba",
                tú: "pensabas",
                él: "pensaba",
                nosotros: "pensábamos",
                vosotros: "pensabais",
                ellos: "pensaban"
            },
            future: {
                yo: "pensaré",
                tú: "pensarás",
                él: "pensará",
                nosotros: "pensaremos",
                vosotros: "pensaréis",
                ellos: "pensarán"
            },
            conditional: {
                yo: "pensaría",
                tú: "pensarías",
                él: "pensaría",
                nosotros: "pensaríamos",
                vosotros: "pensaríais",
                ellos: "pensarían"
            }
        }
    },
    {
        infinitive: "salir",
        regular: false,
        translation: "to leave, to go out",
        tenses: {
            present: {
                yo: "salgo",
                tú: "sales",
                él: "sale",
                nosotros: "salimos",
                vosotros: "salís",
                ellos: "salen"
            },
            preterite: {
                yo: "salí",
                tú: "saliste",
                él: "salió",
                nosotros: "salimos",
                vosotros: "salisteis",
                ellos: "salieron"
            },
            imperfect: {
                yo: "salía",
                tú: "salías",
                él: "salía",
                nosotros: "salíamos",
                vosotros: "salíais",
                ellos: "salían"
            },
            future: {
                yo: "saldré",
                tú: "saldrás",
                él: "saldrá",
                nosotros: "saldremos",
                vosotros: "saldréis",
                ellos: "saldrán"
            },
            conditional: {
                yo: "saldría",
                tú: "saldrías",
                él: "saldría",
                nosotros: "saldríamos",
                vosotros: "saldríais",
                ellos: "saldrían"
            }
        }
    },
    {
        infinitive: "volver",
        regular: false,
        translation: "to return, to come back",
        tenses: {
            present: {
                yo: "vuelvo",
                tú: "vuelves",
                él: "vuelve",
                nosotros: "volvemos",
                vosotros: "volvéis",
                ellos: "vuelven"
            },
            preterite: {
                yo: "volví",
                tú: "volviste",
                él: "volvió",
                nosotros: "volvimos",
                vosotros: "volvisteis",
                ellos: "volvieron"
            },
            imperfect: {
                yo: "volvía",
                tú: "volvías",
                él: "volvía",
                nosotros: "volvíamos",
                vosotros: "volvíais",
                ellos: "volvían"
            },
            future: {
                yo: "volveré",
                tú: "volverás",
                él: "volverá",
                nosotros: "volveremos",
                vosotros: "volveréis",
                ellos: "volverán"
            },
            conditional: {
                yo: "volvería",
                tú: "volverías",
                él: "volvería",
                nosotros: "volveríamos",
                vosotros: "volveríais",
                ellos: "volverían"
            }
        }
    },
    {
        infinitive: "tomar",
        regular: true,
        translation: "to take, to drink",
        tenses: {
            present: {
                yo: "tomo",
                tú: "tomas",
                él: "toma",
                nosotros: "tomamos",
                vosotros: "tomáis",
                ellos: "toman"
            },
            preterite: {
                yo: "tomé",
                tú: "tomaste",
                él: "tomó",
                nosotros: "tomamos",
                vosotros: "tomasteis",
                ellos: "tomaron"
            },
            imperfect: {
                yo: "tomaba",
                tú: "tomabas",
                él: "tomaba",
                nosotros: "tomábamos",
                vosotros: "tomabais",
                ellos: "tomaban"
            },
            future: {
                yo: "tomaré",
                tú: "tomarás",
                él: "tomará",
                nosotros: "tomaremos",
                vosotros: "tomaréis",
                ellos: "tomarán"
            },
            conditional: {
                yo: "tomaría",
                tú: "tomarías",
                él: "tomaría",
                nosotros: "tomaríamos",
                vosotros: "tomaríais",
                ellos: "tomarían"
            }
        }
    },
    {
        infinitive: "conocer",
        regular: false,
        translation: "to know (people/places)",
        tenses: {
            present: {
                yo: "conozco",
                tú: "conoces",
                él: "conoce",
                nosotros: "conocemos",
                vosotros: "conocéis",
                ellos: "conocen"
            },
            preterite: {
                yo: "conocí",
                tú: "conociste",
                él: "conoció",
                nosotros: "conocimos",
                vosotros: "conocisteis",
                ellos: "conocieron"
            },
            imperfect: {
                yo: "conocía",
                tú: "conocías",
                él: "conocía",
                nosotros: "conocíamos",
                vosotros: "conocíais",
                ellos: "conocían"
            },
            future: {
                yo: "conoceré",
                tú: "conocerás",
                él: "conocerá",
                nosotros: "conoceremos",
                vosotros: "conoceréis",
                ellos: "conocerán"
            },
            conditional: {
                yo: "conocería",
                tú: "conocerías",
                él: "conocería",
                nosotros: "conoceríamos",
                vosotros: "conoceríais",
                ellos: "conocerían"
            }
        }
    },
    {
        infinitive: "vivir",
        regular: true,
        translation: "to live",
        tenses: {
            present: {
                yo: "vivo",
                tú: "vives",
                él: "vive",
                nosotros: "vivimos",
                vosotros: "vivís",
                ellos: "viven"
            },
            preterite: {
                yo: "viví",
                tú: "viviste",
                él: "vivió",
                nosotros: "vivimos",
                vosotros: "vivisteis",
                ellos: "vivieron"
            },
            imperfect: {
                yo: "vivía",
                tú: "vivías",
                él: "vivía",
                nosotros: "vivíamos",
                vosotros: "vivíais",
                ellos: "vivían"
            },
            future: {
                yo: "viviré",
                tú: "vivirás",
                él: "vivirá",
                nosotros: "viviremos",
                vosotros: "viviréis",
                ellos: "vivirán"
            },
            conditional: {
                yo: "viviría",
                tú: "vivirías",
                él: "viviría",
                nosotros: "viviríamos",
                vosotros: "viviríais",
                ellos: "vivirían"
            }
        }
    },
    {
        infinitive: "sentir",
        regular: false,
        translation: "to feel, to be sorry",
        tenses: {
            present: {
                yo: "siento",
                tú: "sientes",
                él: "siente",
                nosotros: "sentimos",
                vosotros: "sentís",
                ellos: "sienten"
            },
            preterite: {
                yo: "sentí",
                tú: "sentiste",
                él: "sintió",
                nosotros: "sentimos",
                vosotros: "sentisteis",
                ellos: "sintieron"
            },
            imperfect: {
                yo: "sentía",
                tú: "sentías",
                él: "sentía",
                nosotros: "sentíamos",
                vosotros: "sentíais",
                ellos: "sentían"
            },
            future: {
                yo: "sentiré",
                tú: "sentirás",
                él: "sentirá",
                nosotros: "sentiremos",
                vosotros: "sentiréis",
                ellos: "sentirán"
            },
            conditional: {
                yo: "sentiría",
                tú: "sentirías",
                él: "sentiría",
                nosotros: "sentiríamos",
                vosotros: "sentiríais",
                ellos: "sentirían"
            }
        }
    },
    {
        infinitive: "tratar",
        regular: true,
        translation: "to treat, to try",
        tenses: {
            present: {
                yo: "trato",
                tú: "tratas",
                él: "trata",
                nosotros: "tratamos",
                vosotros: "tratáis",
                ellos: "tratan"
            },
            preterite: {
                yo: "traté",
                tú: "trataste",
                él: "trató",
                nosotros: "tratamos",
                vosotros: "tratasteis",
                ellos: "trataron"
            },
            imperfect: {
                yo: "trataba",
                tú: "tratabas",
                él: "trataba",
                nosotros: "tratábamos",
                vosotros: "tratabais",
                ellos: "trataban"
            },
            future: {
                yo: "trataré",
                tú: "tratarás",
                él: "tratará",
                nosotros: "trataremos",
                vosotros: "trataréis",
                ellos: "tratarán"
            },
            conditional: {
                yo: "trataría",
                tú: "tratarías",
                él: "trataría",
                nosotros: "trataríamos",
                vosotros: "trataríais",
                ellos: "tratarían"
            }
        }
    },
    {
        infinitive: "mirar",
        regular: true,
        translation: "to look, to watch",
        tenses: {
            present: {
                yo: "miro",
                tú: "miras",
                él: "mira",
                nosotros: "miramos",
                vosotros: "miráis",
                ellos: "miran"
            },
            preterite: {
                yo: "miré",
                tú: "miraste",
                él: "miró",
                nosotros: "miramos",
                vosotros: "mirasteis",
                ellos: "miraron"
            },
            imperfect: {
                yo: "miraba",
                tú: "mirabas",
                él: "miraba",
                nosotros: "mirábamos",
                vosotros: "mirabais",
                ellos: "miraban"
            },
            future: {
                yo: "miraré",
                tú: "mirarás",
                él: "mirará",
                nosotros: "miraremos",
                vosotros: "miraréis",
                ellos: "mirarán"
            },
            conditional: {
                yo: "miraría",
                tú: "mirarías",
                él: "miraría",
                nosotros: "miraríamos",
                vosotros: "miraríais",
                ellos: "mirarían"
            }
        }
    },
    {
        infinitive: "contar",
        regular: false,
        translation: "to count, to tell",
        tenses: {
            present: {
                yo: "cuento",
                tú: "cuentas",
                él: "cuenta",
                nosotros: "contamos",
                vosotros: "contáis",
                ellos: "cuentan"
            },
            preterite: {
                yo: "conté",
                tú: "contaste",
                él: "contó",
                nosotros: "contamos",
                vosotros: "contasteis",
                ellos: "contaron"
            },
            imperfect: {
                yo: "contaba",
                tú: "contabas",
                él: "contaba",
                nosotros: "contábamos",
                vosotros: "contabais",
                ellos: "contaban"
            },
            future: {
                yo: "contaré",
                tú: "contarás",
                él: "contará",
                nosotros: "contaremos",
                vosotros: "contaréis",
                ellos: "contarán"
            },
            conditional: {
                yo: "contaría",
                tú: "contarías",
                él: "contaría",
                nosotros: "contaríamos",
                vosotros: "contaríais",
                ellos: "contarían"
            }
        }
    },
    {
        infinitive: "empezar",
        regular: false,
        translation: "to begin, to start",
        tenses: {
            present: {
                yo: "empiezo",
                tú: "empiezas",
                él: "empieza",
                nosotros: "empezamos",
                vosotros: "empezáis",
                ellos: "empiezan"
            },
            preterite: {
                yo: "empecé",
                tú: "empezaste",
                él: "empezó",
                nosotros: "empezamos",
                vosotros: "empezasteis",
                ellos: "empezaron"
            },
            imperfect: {
                yo: "empezaba",
                tú: "empezabas",
                él: "empezaba",
                nosotros: "empezábamos",
                vosotros: "empezabais",
                ellos: "empezaban"
            },
            future: {
                yo: "empezaré",
                tú: "empezarás",
                él: "empezará",
                nosotros: "empezaremos",
                vosotros: "empezaréis",
                ellos: "empezarán"
            },
            conditional: {
                yo: "empezaría",
                tú: "empezarías",
                él: "empezaría",
                nosotros: "empezaríamos",
                vosotros: "empezaríais",
                ellos: "empezarían"
            }
        }
    },
    {
        infinitive: "esperar",
        regular: true,
        translation: "to wait, to hope",
        tenses: {
            present: {
                yo: "espero",
                tú: "esperas",
                él: "espera",
                nosotros: "esperamos",
                vosotros: "esperáis",
                ellos: "esperan"
            },
            preterite: {
                yo: "esperé",
                tú: "esperaste",
                él: "esperó",
                nosotros: "esperamos",
                vosotros: "esperasteis",
                ellos: "esperaron"
            },
            imperfect: {
                yo: "esperaba",
                tú: "esperabas",
                él: "esperaba",
                nosotros: "esperábamos",
                vosotros: "esperabais",
                ellos: "esperaban"
            },
            future: {
                yo: "esperaré",
                tú: "esperarás",
                él: "esperará",
                nosotros: "esperaremos",
                vosotros: "esperaréis",
                ellos: "esperarán"
            },
            conditional: {
                yo: "esperaría",
                tú: "esperarías",
                él: "esperaría",
                nosotros: "esperaríamos",
                vosotros: "esperaríais",
                ellos: "esperarían"
            }
        }
    },
    {
        infinitive: "buscar",
        regular: true,
        translation: "to search, to look for",
        tenses: {
            present: {
                yo: "busco",
                tú: "buscas",
                él: "busca",
                nosotros: "buscamos",
                vosotros: "buscáis",
                ellos: "buscan"
            },
            preterite: {
                yo: "busqué",
                tú: "buscaste",
                él: "buscó",
                nosotros: "buscamos",
                vosotros: "buscasteis",
                ellos: "buscaron"
            },
            imperfect: {
                yo: "buscaba",
                tú: "buscabas",
                él: "buscaba",
                nosotros: "buscábamos",
                vosotros: "buscabais",
                ellos: "buscaban"
            },
            future: {
                yo: "buscaré",
                tú: "buscarás",
                él: "buscará",
                nosotros: "buscaremos",
                vosotros: "buscaréis",
                ellos: "buscarán"
            },
            conditional: {
                yo: "buscaría",
                tú: "buscarías",
                él: "buscaría",
                nosotros: "buscaríamos",
                vosotros: "buscaríais",
                ellos: "buscarían"
            }
        }
    },
    {
        infinitive: "existir",
        regular: true,
        translation: "to exist",
        tenses: {
            present: {
                yo: "existo",
                tú: "existes",
                él: "existe",
                nosotros: "existimos",
                vosotros: "existís",
                ellos: "existen"
            },
            preterite: {
                yo: "existí",
                tú: "exististe",
                él: "existió",
                nosotros: "existimos",
                vosotros: "exististeis",
                ellos: "existieron"
            },
            imperfect: {
                yo: "existía",
                tú: "existías",
                él: "existía",
                nosotros: "existíamos",
                vosotros: "existíais",
                ellos: "existían"
            },
            future: {
                yo: "existiré",
                tú: "existirás",
                él: "existirá",
                nosotros: "existiremos",
                vosotros: "existiréis",
                ellos: "existirán"
            },
            conditional: {
                yo: "existiría",
                tú: "existirías",
                él: "existiría",
                nosotros: "existiríamos",
                vosotros: "existiríais",
                ellos: "existirían"
            }
        }
    },
    {
        infinitive: "entrar",
        regular: true,
        translation: "to enter",
        tenses: {
            present: {
                yo: "entro",
                tú: "entras",
                él: "entra",
                nosotros: "entramos",
                vosotros: "entráis",
                ellos: "entran"
            },
            preterite: {
                yo: "entré",
                tú: "entraste",
                él: "entró",
                nosotros: "entramos",
                vosotros: "entrasteis",
                ellos: "entraron"
            },
            imperfect: {
                yo: "entraba",
                tú: "entrabas",
                él: "entraba",
                nosotros: "entrábamos",
                vosotros: "entrabais",
                ellos: "entraban"
            },
            future: {
                yo: "entraré",
                tú: "entrarás",
                él: "entrará",
                nosotros: "entraremos",
                vosotros: "entraréis",
                ellos: "entrarán"
            },
            conditional: {
                yo: "entraría",
                tú: "entrarías",
                él: "entraría",
                nosotros: "entraríamos",
                vosotros: "entraríais",
                ellos: "entrarían"
            }
        }
    },
    {
        infinitive: "trabajar",
        regular: true,
        translation: "to work",
        tenses: {
            present: {
                yo: "trabajo",
                tú: "trabajas",
                él: "trabaja",
                nosotros: "trabajamos",
                vosotros: "trabajáis",
                ellos: "trabajan"
            },
            preterite: {
                yo: "trabajé",
                tú: "trabajaste",
                él: "trabajó",
                nosotros: "trabajamos",
                vosotros: "trabajasteis",
                ellos: "trabajaron"
            },
            imperfect: {
                yo: "trabajaba",
                tú: "trabajabas",
                él: "trabajaba",
                nosotros: "trabajábamos",
                vosotros: "trabajabais",
                ellos: "trabajaban"
            },
            future: {
                yo: "trabajaré",
                tú: "trabajarás",
                él: "trabajará",
                nosotros: "trabajaremos",
                vosotros: "trabajaréis",
                ellos: "trabajarán"
            },
            conditional: {
                yo: "trabajaría",
                tú: "trabajarías",
                él: "trabajaría",
                nosotros: "trabajaríamos",
                vosotros: "trabajaríais",
                ellos: "trabajarían"
            }
        }
    },
    {
        infinitive: "escribir",
        regular: true,
        translation: "to write",
        tenses: {
            present: {
                yo: "escribo",
                tú: "escribes",
                él: "escribe",
                nosotros: "escribimos",
                vosotros: "escribís",
                ellos: "escriben"
            },
            preterite: {
                yo: "escribí",
                tú: "escribiste",
                él: "escribió",
                nosotros: "escribimos",
                vosotros: "escribisteis",
                ellos: "escribieron"
            },
            imperfect: {
                yo: "escribía",
                tú: "escribías",
                él: "escribía",
                nosotros: "escribíamos",
                vosotros: "escribíais",
                ellos: "escribían"
            },
            future: {
                yo: "escribiré",
                tú: "escribirás",
                él: "escribirá",
                nosotros: "escribiremos",
                vosotros: "escribiréis",
                ellos: "escribirán"
            },
            conditional: {
                yo: "escribiría",
                tú: "escribirías",
                él: "escribiría",
                nosotros: "escribiríamos",
                vosotros: "escribiríais",
                ellos: "escribirían"
            }
        }
    },
    {
        infinitive: "perder",
        regular: false,
        translation: "to lose, to miss",
        tenses: {
            present: {
                yo: "pierdo",
                tú: "pierdes",
                él: "pierde",
                nosotros: "perdemos",
                vosotros: "perdéis",
                ellos: "pierden"
            },
            preterite: {
                yo: "perdí",
                tú: "perdiste",
                él: "perdió",
                nosotros: "perdimos",
                vosotros: "perdisteis",
                ellos: "perdieron"
            },
            imperfect: {
                yo: "perdía",
                tú: "perdías",
                él: "perdía",
                nosotros: "perdíamos",
                vosotros: "perdíais",
                ellos: "perdían"
            },
            future: {
                yo: "perderé",
                tú: "perderás",
                él: "perderá",
                nosotros: "perderemos",
                vosotros: "perderéis",
                ellos: "perderán"
            },
            conditional: {
                yo: "perdería",
                tú: "perderías",
                él: "perdería",
                nosotros: "perderíamos",
                vosotros: "perderíais",
                ellos: "perderían"
            }
        }
    },
    {
        infinitive: "producir",
        regular: false,
        translation: "to produce",
        tenses: {
            present: {
                yo: "produzco",
                tú: "produces",
                él: "produce",
                nosotros: "producimos",
                vosotros: "producís",
                ellos: "producen"
            },
            preterite: {
                yo: "produje",
                tú: "produjiste",
                él: "produjo",
                nosotros: "produjimos",
                vosotros: "produjisteis",
                ellos: "produjeron"
            },
            imperfect: {
                yo: "producía",
                tú: "producías",
                él: "producía",
                nosotros: "producíamos",
                vosotros: "producíais",
                ellos: "producían"
            },
            future: {
                yo: "produciré",
                tú: "producirás",
                él: "producirá",
                nosotros: "produciremos",
                vosotros: "produciréis",
                ellos: "producirán"
            },
            conditional: {
                yo: "produciría",
                tú: "producirías",
                él: "produciría",
                nosotros: "produciríamos",
                vosotros: "produciríais",
                ellos: "producirían"
            }
        }
    },
    {
        infinitive: "ocurrir",
        regular: true,
        translation: "to occur, to happen",
        tenses: {
            present: {
                yo: "ocurro",
                tú: "ocurres",
                él: "ocurre",
                nosotros: "ocurrimos",
                vosotros: "ocurrís",
                ellos: "ocurren"
            },
            preterite: {
                yo: "ocurrí",
                tú: "ocurriste",
                él: "ocurrió",
                nosotros: "ocurrimos",
                vosotros: "ocurristeis",
                ellos: "ocurrieron"
            },
            imperfect: {
                yo: "ocurría",
                tú: "ocurrías",
                él: "ocurría",
                nosotros: "ocurríamos",
                vosotros: "ocurríais",
                ellos: "ocurrían"
            },
            future: {
                yo: "ocurriré",
                tú: "ocurrirás",
                él: "ocurrirá",
                nosotros: "ocurriremos",
                vosotros: "ocurriréis",
                ellos: "ocurrirán"
            },
            conditional: {
                yo: "ocurriría",
                tú: "ocurrirías",
                él: "ocurriría",
                nosotros: "ocurriríamos",
                vosotros: "ocurriríais",
                ellos: "ocurrirían"
            }
        }
    },
    {
        infinitive: "entender",
        regular: false,
        translation: "to understand",
        tenses: {
            present: {
                yo: "entiendo",
                tú: "entiendes",
                él: "entiende",
                nosotros: "entendemos",
                vosotros: "entendéis",
                ellos: "entienden"
            },
            preterite: {
                yo: "entendí",
                tú: "entendiste",
                él: "entendió",
                nosotros: "entendimos",
                vosotros: "entendisteis",
                ellos: "entendieron"
            },
            imperfect: {
                yo: "entendía",
                tú: "entendías",
                él: "entendía",
                nosotros: "entendíamos",
                vosotros: "entendíais",
                ellos: "entendían"
            },
            future: {
                yo: "entenderé",
                tú: "entenderás",
                él: "entenderá",
                nosotros: "entenderemos",
                vosotros: "entenderéis",
                ellos: "entenderán"
            },
            conditional: {
                yo: "entendería",
                tú: "entenderías",
                él: "entendería",
                nosotros: "entenderíamos",
                vosotros: "entenderíais",
                ellos: "entenderían"
            }
        }
    },
    {
        infinitive: "pedir",
        regular: false,
        translation: "to ask for, to request",
        tenses: {
            present: {
                yo: "pido",
                tú: "pides",
                él: "pide",
                nosotros: "pedimos",
                vosotros: "pedís",
                ellos: "piden"
            },
            preterite: {
                yo: "pedí",
                tú: "pediste",
                él: "pidió",
                nosotros: "pedimos",
                vosotros: "pedisteis",
                ellos: "pidieron"
            },
            imperfect: {
                yo: "pedía",
                tú: "pedías",
                él: "pedía",
                nosotros: "pedíamos",
                vosotros: "pedíais",
                ellos: "pedían"
            },
            future: {
                yo: "pediré",
                tú: "pedirás",
                él: "pedirá",
                nosotros: "pediremos",
                vosotros: "pediréis",
                ellos: "pedirán"
            },
            conditional: {
                yo: "pediría",
                tú: "pedirías",
                él: "pediría",
                nosotros: "pediríamos",
                vosotros: "pediríais",
                ellos: "pedirían"
            }
        }
    },
    {
        infinitive: "recibir",
        regular: true,
        translation: "to receive",
        tenses: {
            present: {
                yo: "recibo",
                tú: "recibes",
                él: "recibe",
                nosotros: "recibimos",
                vosotros: "recibís",
                ellos: "reciben"
            },
            preterite: {
                yo: "recibí",
                tú: "recibiste",
                él: "recibió",
                nosotros: "recibimos",
                vosotros: "recibisteis",
                ellos: "recibieron"
            },
            imperfect: {
                yo: "recibía",
                tú: "recibías",
                él: "recibía",
                nosotros: "recibíamos",
                vosotros: "recibíais",
                ellos: "recibían"
            },
            future: {
                yo: "recibiré",
                tú: "recibirás",
                él: "recibirá",
                nosotros: "recibiremos",
                vosotros: "recibiréis",
                ellos: "recibirán"
            },
            conditional: {
                yo: "recibiría",
                tú: "recibirías",
                él: "recibiría",
                nosotros: "recibiríamos",
                vosotros: "recibiríais",
                ellos: "recibirían"
            }
        }
    },
    {
        infinitive: "recordar",
        regular: false,
        translation: "to remember",
        tenses: {
            present: {
                yo: "recuerdo",
                tú: "recuerdas",
                él: "recuerda",
                nosotros: "recordamos",
                vosotros: "recordáis",
                ellos: "recuerdan"
            },
            preterite: {
                yo: "recordé",
                tú: "recordaste",
                él: "recordó",
                nosotros: "recordamos",
                vosotros: "recordasteis",
                ellos: "recordaron"
            },
            imperfect: {
                yo: "recordaba",
                tú: "recordabas",
                él: "recordaba",
                nosotros: "recordábamos",
                vosotros: "recordabais",
                ellos: "recordaban"
            },
            future: {
                yo: "recordaré",
                tú: "recordarás",
                él: "recordará",
                nosotros: "recordaremos",
                vosotros: "recordaréis",
                ellos: "recordarán"
            },
            conditional: {
                yo: "recordaría",
                tú: "recordarías",
                él: "recordaría",
                nosotros: "recordaríamos",
                vosotros: "recordaríais",
                ellos: "recordarían"
            }
        }
    },
    {
        infinitive: "terminar",
        regular: true,
        translation: "to finish, to end",
        tenses: {
            present: {
                yo: "termino",
                tú: "terminas",
                él: "termina",
                nosotros: "terminamos",
                vosotros: "termináis",
                ellos: "terminan"
            },
            preterite: {
                yo: "terminé",
                tú: "terminaste",
                él: "terminó",
                nosotros: "terminamos",
                vosotros: "terminasteis",
                ellos: "terminaron"
            },
            imperfect: {
                yo: "terminaba",
                tú: "terminabas",
                él: "terminaba",
                nosotros: "terminábamos",
                vosotros: "terminabais",
                ellos: "terminaban"
            },
            future: {
                yo: "terminaré",
                tú: "terminarás",
                él: "terminará",
                nosotros: "terminaremos",
                vosotros: "terminaréis",
                ellos: "terminarán"
            },
            conditional: {
                yo: "terminaría",
                tú: "terminarías",
                él: "terminaría",
                nosotros: "terminaríamos",
                vosotros: "terminaríais",
                ellos: "terminarían"
            }
        }
    },
    {
        infinitive: "permitir",
        regular: true,
        translation: "to permit, to allow",
        tenses: {
            present: {
                yo: "permito",
                tú: "permites",
                él: "permite",
                nosotros: "permitimos",
                vosotros: "permitís",
                ellos: "permiten"
            },
            preterite: {
                yo: "permití",
                tú: "permitiste",
                él: "permitió",
                nosotros: "permitimos",
                vosotros: "permitisteis",
                ellos: "permitieron"
            },
            imperfect: {
                yo: "permitía",
                tú: "permitías",
                él: "permitía",
                nosotros: "permitíamos",
                vosotros: "permitíais",
                ellos: "permitían"
            },
            future: {
                yo: "permitiré",
                tú: "permitirás",
                él: "permitirá",
                nosotros: "permitiremos",
                vosotros: "permitiréis",
                ellos: "permitirán"
            },
            conditional: {
                yo: "permitiría",
                tú: "permitirías",
                él: "permitiría",
                nosotros: "permitiríamos",
                vosotros: "permitiríais",
                ellos: "permitirían"
            }
        }
    },
    {
        infinitive: "aparecer",
        regular: false,
        translation: "to appear",
        tenses: {
            present: {
                yo: "aparezco",
                tú: "apareces",
                él: "aparece",
                nosotros: "aparecemos",
                vosotros: "aparecéis",
                ellos: "aparecen"
            },
            preterite: {
                yo: "aparecí",
                tú: "apareciste",
                él: "apareció",
                nosotros: "aparecimos",
                vosotros: "aparecisteis",
                ellos: "aparecieron"
            },
            imperfect: {
                yo: "aparecía",
                tú: "aparecías",
                él: "aparecía",
                nosotros: "aparecíamos",
                vosotros: "aparecíais",
                ellos: "aparecían"
            },
            future: {
                yo: "apareceré",
                tú: "aparecerás",
                él: "aparecerá",
                nosotros: "apareceremos",
                vosotros: "apareceréis",
                ellos: "aparecerán"
            },
            conditional: {
                yo: "aparecería",
                tú: "aparecerías",
                él: "aparecería",
                nosotros: "apareceríamos",
                vosotros: "apareceríais",
                ellos: "aparecerían"
            }
        }
    },
    {
        infinitive: "conseguir",
        regular: false,
        translation: "to get, to obtain",
        tenses: {
            present: {
                yo: "consigo",
                tú: "consigues",
                él: "consigue",
                nosotros: "conseguimos",
                vosotros: "conseguís",
                ellos: "consiguen"
            },
            preterite: {
                yo: "conseguí",
                tú: "conseguiste",
                él: "consiguió",
                nosotros: "conseguimos",
                vosotros: "conseguisteis",
                ellos: "consiguieron"
            },
            imperfect: {
                yo: "conseguía",
                tú: "conseguías",
                él: "conseguía",
                nosotros: "conseguíamos",
                vosotros: "conseguíais",
                ellos: "conseguían"
            },
            future: {
                yo: "conseguiré",
                tú: "conseguirás",
                él: "conseguirá",
                nosotros: "conseguiremos",
                vosotros: "conseguiréis",
                ellos: "conseguirán"
            },
            conditional: {
                yo: "conseguiría",
                tú: "conseguirías",
                él: "conseguiría",
                nosotros: "conseguiríamos",
                vosotros: "conseguiríais",
                ellos: "conseguirían"
            }
        }
    },
    {
        infinitive: "servir",
        regular: false,
        translation: "to serve",
        tenses: {
            present: {
                yo: "sirvo",
                tú: "sirves",
                él: "sirve",
                nosotros: "servimos",
                vosotros: "servís",
                ellos: "sirven"
            },
            preterite: {
                yo: "serví",
                tú: "serviste",
                él: "sirvió",
                nosotros: "servimos",
                vosotros: "servisteis",
                ellos: "sirvieron"
            },
            imperfect: {
                yo: "servía",
                tú: "servías",
                él: "servía",
                nosotros: "servíamos",
                vosotros: "servíais",
                ellos: "servían"
            },
            future: {
                yo: "serviré",
                tú: "servirás",
                él: "servirá",
                nosotros: "serviremos",
                vosotros: "serviréis",
                ellos: "servirán"
            },
            conditional: {
                yo: "serviría",
                tú: "servirías",
                él: "serviría",
                nosotros: "serviríamos",
                vosotros: "serviríais",
                ellos: "servirían"
            }
        }
    },
    {
        infinitive: "sacar",
        regular: true,
        translation: "to take out, to get",
        tenses: {
            present: {
                yo: "saco",
                tú: "sacas",
                él: "saca",
                nosotros: "sacamos",
                vosotros: "sacáis",
                ellos: "sacan"
            },
            preterite: {
                yo: "saqué",
                tú: "sacaste",
                él: "sacó",
                nosotros: "sacamos",
                vosotros: "sacasteis",
                ellos: "sacaron"
            },
            imperfect: {
                yo: "sacaba",
                tú: "sacabas",
                él: "sacaba",
                nosotros: "sacábamos",
                vosotros: "sacabais",
                ellos: "sacaban"
            },
            future: {
                yo: "sacaré",
                tú: "sacarás",
                él: "sacará",
                nosotros: "sacaremos",
                vosotros: "sacaréis",
                ellos: "sacarán"
            },
            conditional: {
                yo: "sacaría",
                tú: "sacarías",
                él: "sacaría",
                nosotros: "sacaríamos",
                vosotros: "sacaríais",
                ellos: "sacarían"
            }
        }
    },
    {
        infinitive: "necesitar",
        regular: true,
        translation: "to need",
        tenses: {
            present: {
                yo: "necesito",
                tú: "necesitas",
                él: "necesita",
                nosotros: "necesitamos",
                vosotros: "necesitáis",
                ellos: "necesitan"
            },
            preterite: {
                yo: "necesité",
                tú: "necesitaste",
                él: "necesitó",
                nosotros: "necesitamos",
                vosotros: "necesitasteis",
                ellos: "necesitaron"
            },
            imperfect: {
                yo: "necesitaba",
                tú: "necesitabas",
                él: "necesitaba",
                nosotros: "necesitábamos",
                vosotros: "necesitabais",
                ellos: "necesitaban"
            },
            future: {
                yo: "necesitaré",
                tú: "necesitarás",
                él: "necesitará",
                nosotros: "necesitaremos",
                vosotros: "necesitaréis",
                ellos: "necesitarán"
            },
            conditional: {
                yo: "necesitaría",
                tú: "necesitarías",
                él: "necesitaría",
                nosotros: "necesitaríamos",
                vosotros: "necesitaríais",
                ellos: "necesitarían"
            }
        }
    },
    {
        infinitive: "mantener",
        regular: false,
        translation: "to maintain, to keep",
        tenses: {
            present: {
                yo: "mantengo",
                tú: "mantienes",
                él: "mantiene",
                nosotros: "mantenemos",
                vosotros: "mantenéis",
                ellos: "mantienen"
            },
            preterite: {
                yo: "mantuve",
                tú: "mantuviste",
                él: "mantuvo",
                nosotros: "mantuvimos",
                vosotros: "mantuvisteis",
                ellos: "mantuvieron"
            },
            imperfect: {
                yo: "mantenía",
                tú: "mantenías",
                él: "mantenía",
                nosotros: "manteníamos",
                vosotros: "manteníais",
                ellos: "mantenían"
            },
            future: {
                yo: "mantendré",
                tú: "mantendrás",
                él: "mantendrá",
                nosotros: "mantendremos",
                vosotros: "mantendréis",
                ellos: "mantendrán"
            },
            conditional: {
                yo: "mantendría",
                tú: "mantendrías",
                él: "mantendría",
                nosotros: "mantendríamos",
                vosotros: "mantendríais",
                ellos: "mantendrían"
            }
        }
    },
    {
        infinitive: "comenzar",
        regular: false,
        translation: "to begin, to commence",
        tenses: {
            present: {
                yo: "comienzo",
                tú: "comienzas",
                él: "comienza",
                nosotros: "comenzamos",
                vosotros: "comenzáis",
                ellos: "comienzan"
            },
            preterite: {
                yo: "comencé",
                tú: "comenzaste",
                él: "comenzó",
                nosotros: "comenzamos",
                vosotros: "comenzasteis",
                ellos: "comenzaron"
            },
            imperfect: {
                yo: "comenzaba",
                tú: "comenzabas",
                él: "comenzaba",
                nosotros: "comenzábamos",
                vosotros: "comenzabais",
                ellos: "comenzaban"
            },
            future: {
                yo: "comenzaré",
                tú: "comenzarás",
                él: "comenzará",
                nosotros: "comenzaremos",
                vosotros: "comenzaréis",
                ellos: "comenzarán"
            },
            conditional: {
                yo: "comenzaría",
                tú: "comenzarías",
                él: "comenzaría",
                nosotros: "comenzaríamos",
                vosotros: "comenzaríais",
                ellos: "comenzarían"
            }
        }
    },
    {
        infinitive: "resultar",
        regular: true,
        translation: "to result, to turn out",
        tenses: {
            present: {
                yo: "resulto",
                tú: "resultas",
                él: "resulta",
                nosotros: "resultamos",
                vosotros: "resultáis",
                ellos: "resultan"
            },
            preterite: {
                yo: "resulté",
                tú: "resultaste",
                él: "resultó",
                nosotros: "resultamos",
                vosotros: "resultasteis",
                ellos: "resultaron"
            },
            imperfect: {
                yo: "resultaba",
                tú: "resultabas",
                él: "resultaba",
                nosotros: "resultábamos",
                vosotros: "resultabais",
                ellos: "resultaban"
            },
            future: {
                yo: "resultaré",
                tú: "resultarás",
                él: "resultará",
                nosotros: "resultaremos",
                vosotros: "resultaréis",
                ellos: "resultarán"
            },
            conditional: {
                yo: "resultaría",
                tú: "resultarías",
                él: "resultaría",
                nosotros: "resultaríamos",
                vosotros: "resultaríais",
                ellos: "resultarían"
            }
        }
    },
    {
        infinitive: "leer",
        regular: true,
        translation: "to read",
        tenses: {
            present: {
                yo: "leo",
                tú: "lees",
                él: "lee",
                nosotros: "leemos",
                vosotros: "leéis",
                ellos: "leen"
            },
            preterite: {
                yo: "leí",
                tú: "leíste",
                él: "leyó",
                nosotros: "leímos",
                vosotros: "leísteis",
                ellos: "leyeron"
            },
            imperfect: {
                yo: "leía",
                tú: "leías",
                él: "leía",
                nosotros: "leíamos",
                vosotros: "leíais",
                ellos: "leían"
            },
            future: {
                yo: "leeré",
                tú: "leerás",
                él: "leerá",
                nosotros: "leeremos",
                vosotros: "leeréis",
                ellos: "leerán"
            },
            conditional: {
                yo: "leería",
                tú: "leerías",
                él: "leería",
                nosotros: "leeríamos",
                vosotros: "leeríais",
                ellos: "leerían"
            }
        }
    },
    {
        infinitive: "caer",
        regular: false,
        translation: "to fall",
        tenses: {
            present: {
                yo: "caigo",
                tú: "caes",
                él: "cae",
                nosotros: "caemos",
                vosotros: "caéis",
                ellos: "caen"
            },
            preterite: {
                yo: "caí",
                tú: "caíste",
                él: "cayó",
                nosotros: "caímos",
                vosotros: "caísteis",
                ellos: "cayeron"
            },
            imperfect: {
                yo: "caía",
                tú: "caías",
                él: "caía",
                nosotros: "caíamos",
                vosotros: "caíais",
                ellos: "caían"
            },
            future: {
                yo: "caeré",
                tú: "caerás",
                él: "caerá",
                nosotros: "caeremos",
                vosotros: "caeréis",
                ellos: "caerán"
            },
            conditional: {
                yo: "caería",
                tú: "caerías",
                él: "caería",
                nosotros: "caeríamos",
                vosotros: "caeríais",
                ellos: "caerían"
            }
        }
    },
    {
        infinitive: "cambiar",
        regular: true,
        translation: "to change",
        tenses: {
            present: {
                yo: "cambio",
                tú: "cambias",
                él: "cambia",
                nosotros: "cambiamos",
                vosotros: "cambiáis",
                ellos: "cambian"
            },
            preterite: {
                yo: "cambié",
                tú: "cambiaste",
                él: "cambió",
                nosotros: "cambiamos",
                vosotros: "cambiasteis",
                ellos: "cambiaron"
            },
            imperfect: {
                yo: "cambiaba",
                tú: "cambiabas",
                él: "cambiaba",
                nosotros: "cambiábamos",
                vosotros: "cambiabais",
                ellos: "cambiaban"
            },
            future: {
                yo: "cambiaré",
                tú: "cambiarás",
                él: "cambiará",
                nosotros: "cambiaremos",
                vosotros: "cambiaréis",
                ellos: "cambiarán"
            },
            conditional: {
                yo: "cambiaría",
                tú: "cambiarías",
                él: "cambiaría",
                nosotros: "cambiaríamos",
                vosotros: "cambiaríais",
                ellos: "cambiarían"
            }
        }
    },
    {
        infinitive: "presentar",
        regular: true,
        translation: "to present, to introduce",
        tenses: {
            present: {
                yo: "presento",
                tú: "presentas",
                él: "presenta",
                nosotros: "presentamos",
                vosotros: "presentáis",
                ellos: "presentan"
            },
            preterite: {
                yo: "presenté",
                tú: "presentaste",
                él: "presentó",
                nosotros: "presentamos",
                vosotros: "presentasteis",
                ellos: "presentaron"
            },
            imperfect: {
                yo: "presentaba",
                tú: "presentabas",
                él: "presentaba",
                nosotros: "presentábamos",
                vosotros: "presentabais",
                ellos: "presentaban"
            },
            future: {
                yo: "presentaré",
                tú: "presentarás",
                él: "presentará",
                nosotros: "presentaremos",
                vosotros: "presentaréis",
                ellos: "presentarán"
            },
            conditional: {
                yo: "presentaría",
                tú: "presentarías",
                él: "presentaría",
                nosotros: "presentaríamos",
                vosotros: "presentaríais",
                ellos: "presentarían"
            }
        }
    },
    {
        infinitive: "crear",
        regular: true,
        translation: "to create",
        tenses: {
            present: {
                yo: "creo",
                tú: "creas",
                él: "crea",
                nosotros: "creamos",
                vosotros: "creáis",
                ellos: "crean"
            },
            preterite: {
                yo: "creé",
                tú: "creaste",
                él: "creó",
                nosotros: "creamos",
                vosotros: "creasteis",
                ellos: "crearon"
            },
            imperfect: {
                yo: "creaba",
                tú: "creabas",
                él: "creaba",
                nosotros: "creábamos",
                vosotros: "creabais",
                ellos: "creaban"
            },
            future: {
                yo: "crearé",
                tú: "crearás",
                él: "creará",
                nosotros: "crearemos",
                vosotros: "crearéis",
                ellos: "crearán"
            },
            conditional: {
                yo: "crearía",
                tú: "crearías",
                él: "crearía",
                nosotros: "crearíamos",
                vosotros: "crearíais",
                ellos: "crearían"
            }
        }
    },
    {
        infinitive: "abrir",
        regular: true,
        translation: "to open",
        tenses: {
            present: {
                yo: "abro",
                tú: "abres",
                él: "abre",
                nosotros: "abrimos",
                vosotros: "abrís",
                ellos: "abren"
            },
            preterite: {
                yo: "abrí",
                tú: "abriste",
                él: "abrió",
                nosotros: "abrimos",
                vosotros: "abristeis",
                ellos: "abrieron"
            },
            imperfect: {
                yo: "abría",
                tú: "abrías",
                él: "abría",
                nosotros: "abríamos",
                vosotros: "abríais",
                ellos: "abrían"
            },
            future: {
                yo: "abriré",
                tú: "abrirás",
                él: "abrirá",
                nosotros: "abriremos",
                vosotros: "abriréis",
                ellos: "abrirán"
            },
            conditional: {
                yo: "abriría",
                tú: "abrirías",
                él: "abriría",
                nosotros: "abriríamos",
                vosotros: "abriríais",
                ellos: "abrirían"
            }
        }
    },
    {
        infinitive: "considerar",
        regular: true,
        translation: "to consider",
        tenses: {
            present: {
                yo: "considero",
                tú: "consideras",
                él: "considera",
                nosotros: "consideramos",
                vosotros: "consideráis",
                ellos: "consideran"
            },
            preterite: {
                yo: "consideré",
                tú: "consideraste",
                él: "consideró",
                nosotros: "consideramos",
                vosotros: "considerasteis",
                ellos: "consideraron"
            },
            imperfect: {
                yo: "consideraba",
                tú: "considerabas",
                él: "consideraba",
                nosotros: "considerábamos",
                vosotros: "considerabais",
                ellos: "consideraban"
            },
            future: {
                yo: "consideraré",
                tú: "considerarás",
                él: "considerará",
                nosotros: "consideraremos",
                vosotros: "consideraréis",
                ellos: "considerarán"
            },
            conditional: {
                yo: "consideraría",
                tú: "considerarías",
                él: "consideraría",
                nosotros: "consideraríamos",
                vosotros: "consideraríais",
                ellos: "considerarían"
            }
        }
    },
    {
        infinitive: "oír",
        regular: false,
        translation: "to hear",
        tenses: {
            present: {
                yo: "oigo",
                tú: "oyes",
                él: "oye",
                nosotros: "oímos",
                vosotros: "oís",
                ellos: "oyen"
            },
            preterite: {
                yo: "oí",
                tú: "oíste",
                él: "oyó",
                nosotros: "oímos",
                vosotros: "oísteis",
                ellos: "oyeron"
            },
            imperfect: {
                yo: "oía",
                tú: "oías",
                él: "oía",
                nosotros: "oíamos",
                vosotros: "oíais",
                ellos: "oían"
            },
            future: {
                yo: "oiré",
                tú: "oirás",
                él: "oirá",
                nosotros: "oiremos",
                vosotros: "oiréis",
                ellos: "oirán"
            },
            conditional: {
                yo: "oiría",
                tú: "oirías",
                él: "oiría",
                nosotros: "oiríamos",
                vosotros: "oiríais",
                ellos: "oirían"
            }
        }
    },
    {
        infinitive: "acabar",
        regular: true,
        translation: "to finish, to end",
        tenses: {
            present: {
                yo: "acabo",
                tú: "acabas",
                él: "acaba",
                nosotros: "acabamos",
                vosotros: "acabáis",
                ellos: "acaban"
            },
            preterite: {
                yo: "acabé",
                tú: "acabaste",
                él: "acabó",
                nosotros: "acabamos",
                vosotros: "acabasteis",
                ellos: "acabaron"
            },
            imperfect: {
                yo: "acababa",
                tú: "acababas",
                él: "acababa",
                nosotros: "acabábamos",
                vosotros: "acababais",
                ellos: "acababan"
            },
            future: {
                yo: "acabaré",
                tú: "acabarás",
                él: "acabará",
                nosotros: "acabaremos",
                vosotros: "acabaréis",
                ellos: "acabarán"
            },
            conditional: {
                yo: "acabaría",
                tú: "acabarías",
                él: "acabaría",
                nosotros: "acabaríamos",
                vosotros: "acabaríais",
                ellos: "acabarían"
            }
        }
    },
    {
        infinitive: "explicar",
        regular: true,
        translation: "to explain",
        tenses: {
            present: {
                yo: "explico",
                tú: "explicas",
                él: "explica",
                nosotros: "explicamos",
                vosotros: "explicáis",
                ellos: "explican"
            },
            preterite: {
                yo: "expliqué",
                tú: "explicaste",
                él: "explicó",
                nosotros: "explicamos",
                vosotros: "explicasteis",
                ellos: "explicaron"
            },
            imperfect: {
                yo: "explicaba",
                tú: "explicabas",
                él: "explicaba",
                nosotros: "explicábamos",
                vosotros: "explicabais",
                ellos: "explicaban"
            },
            future: {
                yo: "explicaré",
                tú: "explicarás",
                él: "explicará",
                nosotros: "explicaremos",
                vosotros: "explicaréis",
                ellos: "explicarán"
            },
            conditional: {
                yo: "explicaría",
                tú: "explicarías",
                él: "explicaría",
                nosotros: "explicaríamos",
                vosotros: "explicaríais",
                ellos: "explicarían"
            }
        }
    },
    {
        infinitive: "tocar",
        regular: true,
        translation: "to touch, to play (instrument)",
        tenses: {
            present: {
                yo: "toco",
                tú: "tocas",
                él: "toca",
                nosotros: "tocamos",
                vosotros: "tocáis",
                ellos: "tocan"
            },
            preterite: {
                yo: "toqué",
                tú: "tocaste",
                él: "tocó",
                nosotros: "tocamos",
                vosotros: "tocasteis",
                ellos: "tocaron"
            },
            imperfect: {
                yo: "tocaba",
                tú: "tocabas",
                él: "tocaba",
                nosotros: "tocábamos",
                vosotros: "tocabais",
                ellos: "tocaban"
            },
            future: {
                yo: "tocaré",
                tú: "tocarás",
                él: "tocará",
                nosotros: "tocaremos",
                vosotros: "tocaréis",
                ellos: "tocarán"
            },
            conditional: {
                yo: "tocaría",
                tú: "tocarías",
                él: "tocaría",
                nosotros: "tocaríamos",
                vosotros: "tocaríais",
                ellos: "tocarían"
            }
        }
    },
    {
        infinitive: "reconocer",
        regular: false,
        translation: "to recognise",
        tenses: {
            present: {
                yo: "reconozco",
                tú: "reconoces",
                él: "reconoce",
                nosotros: "reconocemos",
                vosotros: "reconocéis",
                ellos: "reconocen"
            },
            preterite: {
                yo: "reconocí",
                tú: "reconociste",
                él: "reconoció",
                nosotros: "reconocimos",
                vosotros: "reconocisteis",
                ellos: "reconocieron"
            },
            imperfect: {
                yo: "reconocía",
                tú: "reconocías",
                él: "reconocía",
                nosotros: "reconocíamos",
                vosotros: "reconocíais",
                ellos: "reconocían"
            },
            future: {
                yo: "reconoceré",
                tú: "reconocerás",
                él: "reconocerá",
                nosotros: "reconoceremos",
                vosotros: "reconoceréis",
                ellos: "reconocerán"
            },
            conditional: {
                yo: "reconocería",
                tú: "reconocerías",
                él: "reconocería",
                nosotros: "reconoceríamos",
                vosotros: "reconoceríais",
                ellos: "reconocerían"
            }
        }
    },
    {
        infinitive: "estudiar",
        regular: true,
        translation: "to study",
        tenses: {
            present: {
                yo: "estudio",
                tú: "estudias",
                él: "estudia",
                nosotros: "estudiamos",
                vosotros: "estudiáis",
                ellos: "estudian"
            },
            preterite: {
                yo: "estudié",
                tú: "estudiaste",
                él: "estudió",
                nosotros: "estudiamos",
                vosotros: "estudiasteis",
                ellos: "estudiaron"
            },
            imperfect: {
                yo: "estudiaba",
                tú: "estudiabas",
                él: "estudiaba",
                nosotros: "estudiábamos",
                vosotros: "estudiabais",
                ellos: "estudiaban"
            },
            future: {
                yo: "estudiaré",
                tú: "estudiarás",
                él: "estudiará",
                nosotros: "estudiaremos",
                vosotros: "estudiaréis",
                ellos: "estudiarán"
            },
            conditional: {
                yo: "estudiaría",
                tú: "estudiarías",
                él: "estudiaría",
                nosotros: "estudiaríamos",
                vosotros: "estudiaríais",
                ellos: "estudiarían"
            }
        }
    },
    {
        infinitive: "alcanzar",
        regular: true,
        translation: "to reach, to achieve",
        tenses: {
            present: {
                yo: "alcanzo",
                tú: "alcanzas",
                él: "alcanza",
                nosotros: "alcanzamos",
                vosotros: "alcanzáis",
                ellos: "alcanzan"
            },
            preterite: {
                yo: "alcancé",
                tú: "alcanzaste",
                él: "alcanzó",
                nosotros: "alcanzamos",
                vosotros: "alcanzasteis",
                ellos: "alcanzaron"
            },
            imperfect: {
                yo: "alcanzaba",
                tú: "alcanzabas",
                él: "alcanzaba",
                nosotros: "alcanzábamos",
                vosotros: "alcanzabais",
                ellos: "alcanzaban"
            },
            future: {
                yo: "alcanzaré",
                tú: "alcanzarás",
                él: "alcanzará",
                nosotros: "alcanzaremos",
                vosotros: "alcanzaréis",
                ellos: "alcanzarán"
            },
            conditional: {
                yo: "alcanzaría",
                tú: "alcanzarías",
                él: "alcanzaría",
                nosotros: "alcanzaríamos",
                vosotros: "alcanzaríais",
                ellos: "alcanzarían"
            }
        }
    },
    {
        infinitive: "nacer",
        regular: false,
        translation: "to be born",
        tenses: {
            present: {
                yo: "nazco",
                tú: "naces",
                él: "nace",
                nosotros: "nacemos",
                vosotros: "nacéis",
                ellos: "nacen"
            },
            preterite: {
                yo: "nací",
                tú: "naciste",
                él: "nació",
                nosotros: "nacimos",
                vosotros: "nacisteis",
                ellos: "nacieron"
            },
            imperfect: {
                yo: "nacía",
                tú: "nacías",
                él: "nacía",
                nosotros: "nacíamos",
                vosotros: "nacíais",
                ellos: "nacían"
            },
            future: {
                yo: "naceré",
                tú: "nacerás",
                él: "nacerá",
                nosotros: "naceremos",
                vosotros: "naceréis",
                ellos: "nacerán"
            },
            conditional: {
                yo: "nacería",
                tú: "nacerías",
                él: "nacería",
                nosotros: "naceríamos",
                vosotros: "naceríais",
                ellos: "nacerían"
            }
        }
    },
    {
        infinitive: "dirigir",
        regular: false,
        translation: "to direct, to manage",
        tenses: {
            present: {
                yo: "dirijo",
                tú: "diriges",
                él: "dirige",
                nosotros: "dirigimos",
                vosotros: "dirigís",
                ellos: "dirigen"
            },
            preterite: {
                yo: "dirigí",
                tú: "dirigiste",
                él: "dirigió",
                nosotros: "dirigimos",
                vosotros: "dirigisteis",
                ellos: "dirigieron"
            },
            imperfect: {
                yo: "dirigía",
                tú: "dirigías",
                él: "dirigía",
                nosotros: "dirigíamos",
                vosotros: "dirigíais",
                ellos: "dirigían"
            },
            future: {
                yo: "dirigiré",
                tú: "dirigirás",
                él: "dirigirá",
                nosotros: "dirigiremos",
                vosotros: "dirigiréis",
                ellos: "dirigirán"
            },
            conditional: {
                yo: "dirigiría",
                tú: "dirigirías",
                él: "dirigiría",
                nosotros: "dirigiríamos",
                vosotros: "dirigiríais",
                ellos: "dirigirían"
            }
        }
    },
    {
        infinitive: "correr",
        regular: true,
        translation: "to run",
        tenses: {
            present: {
                yo: "corro",
                tú: "corres",
                él: "corre",
                nosotros: "corremos",
                vosotros: "corréis",
                ellos: "corren"
            },
            preterite: {
                yo: "corrí",
                tú: "corriste",
                él: "corrió",
                nosotros: "corrimos",
                vosotros: "corristeis",
                ellos: "corrieron"
            },
            imperfect: {
                yo: "corría",
                tú: "corrías",
                él: "corría",
                nosotros: "corríamos",
                vosotros: "corríais",
                ellos: "corrían"
            },
            future: {
                yo: "correré",
                tú: "correrás",
                él: "correrá",
                nosotros: "correremos",
                vosotros: "correréis",
                ellos: "correrán"
            },
            conditional: {
                yo: "correría",
                tú: "correrías",
                él: "correría",
                nosotros: "correríamos",
                vosotros: "correríais",
                ellos: "correrían"
            }
        }
    },
    {
        infinitive: "utilizar",
        regular: true,
        translation: "to use, to utilize",
        tenses: {
            present: {
                yo: "utilizo",
                tú: "utilizas",
                él: "utiliza",
                nosotros: "utilizamos",
                vosotros: "utilizáis",
                ellos: "utilizan"
            },
            preterite: {
                yo: "utilicé",
                tú: "utilizaste",
                él: "utilizó",
                nosotros: "utilizamos",
                vosotros: "utilizasteis",
                ellos: "utilizaron"
            },
            imperfect: {
                yo: "utilizaba",
                tú: "utilizabas",
                él: "utilizaba",
                nosotros: "utilizábamos",
                vosotros: "utilizabais",
                ellos: "utilizaban"
            },
            future: {
                yo: "utilizaré",
                tú: "utilizarás",
                él: "utilizará",
                nosotros: "utilizaremos",
                vosotros: "utilizaréis",
                ellos: "utilizarán"
            },
            conditional: {
                yo: "utilizaría",
                tú: "utilizarías",
                él: "utilizaría",
                nosotros: "utilizaríamos",
                vosotros: "utilizaríais",
                ellos: "utilizarían"
            }
        }
    },
    {
        infinitive: "pagar",
        regular: true,
        translation: "to pay",
        tenses: {
            present: {
                yo: "pago",
                tú: "pagas",
                él: "paga",
                nosotros: "pagamos",
                vosotros: "pagáis",
                ellos: "pagan"
            },
            preterite: {
                yo: "pagué",
                tú: "pagaste",
                él: "pagó",
                nosotros: "pagamos",
                vosotros: "pagasteis",
                ellos: "pagaron"
            },
            imperfect: {
                yo: "pagaba",
                tú: "pagabas",
                él: "pagaba",
                nosotros: "pagábamos",
                vosotros: "pagabais",
                ellos: "pagaban"
            },
            future: {
                yo: "pagaré",
                tú: "pagarás",
                él: "pagará",
                nosotros: "pagaremos",
                vosotros: "pagaréis",
                ellos: "pagarán"
            },
            conditional: {
                yo: "pagaría",
                tú: "pagarías",
                él: "pagaría",
                nosotros: "pagaríamos",
                vosotros: "pagaríais",
                ellos: "pagarían"
            }
        }
    },
    {
        infinitive: "ayudar",
        regular: true,
        translation: "to help",
        tenses: {
            present: {
                yo: "ayudo",
                tú: "ayudas",
                él: "ayuda",
                nosotros: "ayudamos",
                vosotros: "ayudáis",
                ellos: "ayudan"
            },
            preterite: {
                yo: "ayudé",
                tú: "ayudaste",
                él: "ayudó",
                nosotros: "ayudamos",
                vosotros: "ayudasteis",
                ellos: "ayudaron"
            },
            imperfect: {
                yo: "ayudaba",
                tú: "ayudabas",
                él: "ayudaba",
                nosotros: "ayudábamos",
                vosotros: "ayudabais",
                ellos: "ayudaban"
            },
            future: {
                yo: "ayudaré",
                tú: "ayudarás",
                él: "ayudará",
                nosotros: "ayudaremos",
                vosotros: "ayudaréis",
                ellos: "ayudarán"
            },
            conditional: {
                yo: "ayudaría",
                tú: "ayudarías",
                él: "ayudaría",
                nosotros: "ayudaríamos",
                vosotros: "ayudaríais",
                ellos: "ayudarían"
            }
        }
    },
    {
        infinitive: "gustar",
        regular: true,
        translation: "to like, to please",
        tenses: {
            present: {
                yo: "gusto",
                tú: "gustas",
                él: "gusta",
                nosotros: "gustamos",
                vosotros: "gustáis",
                ellos: "gustan"
            },
            preterite: {
                yo: "gusté",
                tú: "gustaste",
                él: "gustó",
                nosotros: "gustamos",
                vosotros: "gustasteis",
                ellos: "gustaron"
            },
            imperfect: {
                yo: "gustaba",
                tú: "gustabas",
                él: "gustaba",
                nosotros: "gustábamos",
                vosotros: "gustabais",
                ellos: "gustaban"
            },
            future: {
                yo: "gustaré",
                tú: "gustarás",
                él: "gustará",
                nosotros: "gustaremos",
                vosotros: "gustaréis",
                ellos: "gustarán"
            },
            conditional: {
                yo: "gustaría",
                tú: "gustarías",
                él: "gustaría",
                nosotros: "gustaríamos",
                vosotros: "gustaríais",
                ellos: "gustarían"
            }
        }
    },
    {
        infinitive: "jugar",
        regular: false,
        translation: "to play (game/sport)",
        tenses: {
            present: {
                yo: "juego",
                tú: "juegas",
                él: "juega",
                nosotros: "jugamos",
                vosotros: "jugáis",
                ellos: "juegan"
            },
            preterite: {
                yo: "jugué",
                tú: "jugaste",
                él: "jugó",
                nosotros: "jugamos",
                vosotros: "jugasteis",
                ellos: "jugaron"
            },
            imperfect: {
                yo: "jugaba",
                tú: "jugabas",
                él: "jugaba",
                nosotros: "jugábamos",
                vosotros: "jugabais",
                ellos: "jugaban"
            },
            future: {
                yo: "jugaré",
                tú: "jugarás",
                él: "jugará",
                nosotros: "jugaremos",
                vosotros: "jugaréis",
                ellos: "jugarán"
            },
            conditional: {
                yo: "jugaría",
                tú: "jugarías",
                él: "jugaría",
                nosotros: "jugaríamos",
                vosotros: "jugaríais",
                ellos: "jugarían"
            }
        }
    },
    {
        infinitive: "ofrecer",
        regular: false,
        translation: "to offer",
        tenses: {
            present: {
                yo: "ofrezco",
                tú: "ofreces",
                él: "ofrece",
                nosotros: "ofrecemos",
                vosotros: "ofrecéis",
                ellos: "ofrecen"
            },
            preterite: {
                yo: "ofrecí",
                tú: "ofreciste",
                él: "ofreció",
                nosotros: "ofrecimos",
                vosotros: "ofrecisteis",
                ellos: "ofrecieron"
            },
            imperfect: {
                yo: "ofrecía",
                tú: "ofrecías",
                él: "ofrecía",
                nosotros: "ofrecíamos",
                vosotros: "ofrecíais",
                ellos: "ofrecían"
            },
            future: {
                yo: "ofreceré",
                tú: "ofrecerás",
                él: "ofrecerá",
                nosotros: "ofreceremos",
                vosotros: "ofreceréis",
                ellos: "ofrecerán"
            },
            conditional: {
                yo: "ofrecería",
                tú: "ofrecerías",
                él: "ofrecería",
                nosotros: "ofreceríamos",
                vosotros: "ofreceríais",
                ellos: "ofrecerían"
            }
        }
    },
    {
        infinitive: "descubrir",
        regular: true,
        translation: "to discover",
        tenses: {
            present: {
                yo: "descubro",
                tú: "descubres",
                él: "descubre",
                nosotros: "descubrimos",
                vosotros: "descubrís",
                ellos: "descubren"
            },
            preterite: {
                yo: "descubrí",
                tú: "descubriste",
                él: "descubrió",
                nosotros: "descubrimos",
                vosotros: "descubristeis",
                ellos: "descubrieron"
            },
            imperfect: {
                yo: "descubría",
                tú: "descubrías",
                él: "descubría",
                nosotros: "descubríamos",
                vosotros: "descubríais",
                ellos: "descubrían"
            },
            future: {
                yo: "descubriré",
                tú: "descubrirás",
                él: "descubrirá",
                nosotros: "descubriremos",
                vosotros: "descubriréis",
                ellos: "descubrirán"
            },
            conditional: {
                yo: "descubriría",
                tú: "descubrirías",
                él: "descubriría",
                nosotros: "descubriríamos",
                vosotros: "descubriríais",
                ellos: "descubrirían"
            }
        }
    },
    {
        infinitive: "levantar",
        regular: true,
        translation: "to raise, to lift",
        tenses: {
            present: {
                yo: "levanto",
                tú: "levantas",
                él: "levanta",
                nosotros: "levantamos",
                vosotros: "levantáis",
                ellos: "levantan"
            },
            preterite: {
                yo: "levanté",
                tú: "levantaste",
                él: "levantó",
                nosotros: "levantamos",
                vosotros: "levantasteis",
                ellos: "levantaron"
            },
            imperfect: {
                yo: "levantaba",
                tú: "levantabas",
                él: "levantaba",
                nosotros: "levantábamos",
                vosotros: "levantabais",
                ellos: "levantaban"
            },
            future: {
                yo: "levantaré",
                tú: "levantarás",
                él: "levantará",
                nosotros: "levantaremos",
                vosotros: "levantaréis",
                ellos: "levantarán"
            },
            conditional: {
                yo: "levantaría",
                tú: "levantarías",
                él: "levantaría",
                nosotros: "levantaríamos",
                vosotros: "levantaríais",
                ellos: "levantarían"
            }
        }
    },
    {
        infinitive: "intentar",
        regular: true,
        translation: "to try, to attempt",
        tenses: {
            present: {
                yo: "intento",
                tú: "intentas",
                él: "intenta",
                nosotros: "intentamos",
                vosotros: "intentáis",
                ellos: "intentan"
            },
            preterite: {
                yo: "intenté",
                tú: "intentaste",
                él: "intentó",
                nosotros: "intentamos",
                vosotros: "intentasteis",
                ellos: "intentaron"
            },
            imperfect: {
                yo: "intentaba",
                tú: "intentabas",
                él: "intentaba",
                nosotros: "intentábamos",
                vosotros: "intentabais",
                ellos: "intentaban"
            },
            future: {
                yo: "intentaré",
                tú: "intentarás",
                él: "intentará",
                nosotros: "intentaremos",
                vosotros: "intentaréis",
                ellos: "intentarán"
            },
            conditional: {
                yo: "intentaría",
                tú: "intentarías",
                él: "intentaría",
                nosotros: "intentaríamos",
                vosotros: "intentaríais",
                ellos: "intentarían"
            }
        }
    },
    {
        infinitive: "usar",
        regular: true,
        translation: "to use",
        tenses: {
            present: {
                yo: "uso",
                tú: "usas",
                él: "usa",
                nosotros: "usamos",
                vosotros: "usáis",
                ellos: "usan"
            },
            preterite: {
                yo: "usé",
                tú: "usaste",
                él: "usó",
                nosotros: "usamos",
                vosotros: "usasteis",
                ellos: "usaron"
            },
            imperfect: {
                yo: "usaba",
                tú: "usabas",
                él: "usaba",
                nosotros: "usábamos",
                vosotros: "usabais",
                ellos: "usaban"
            },
            future: {
                yo: "usaré",
                tú: "usarás",
                él: "usará",
                nosotros: "usaremos",
                vosotros: "usaréis",
                ellos: "usarán"
            },
            conditional: {
                yo: "usaría",
                tú: "usarías",
                él: "usaría",
                nosotros: "usaríamos",
                vosotros: "usaríais",
                ellos: "usarían"
            }
        }
    },
    {
        infinitive: "formar",
        regular: true,
        translation: "to form, to train",
        tenses: {
            present: {
                yo: "formo",
                tú: "formas",
                él: "forma",
                nosotros: "formamos",
                vosotros: "formáis",
                ellos: "forman"
            },
            preterite: {
                yo: "formé",
                tú: "formaste",
                él: "formó",
                nosotros: "formamos",
                vosotros: "formasteis",
                ellos: "formaron"
            },
            imperfect: {
                yo: "formaba",
                tú: "formabas",
                él: "formaba",
                nosotros: "formábamos",
                vosotros: "formabais",
                ellos: "formaban"
            },
            future: {
                yo: "formaré",
                tú: "formarás",
                él: "formará",
                nosotros: "formaremos",
                vosotros: "formaréis",
                ellos: "formarán"
            },
            conditional: {
                yo: "formaría",
                tú: "formarías",
                él: "formaría",
                nosotros: "formaríamos",
                vosotros: "formaríais",
                ellos: "formarían"
            }
        }
    },
    {
        infinitive: "traer",
        regular: false,
        translation: "to bring",
        tenses: {
            present: {
                yo: "traigo",
                tú: "traes",
                él: "trae",
                nosotros: "traemos",
                vosotros: "traéis",
                ellos: "traen"
            },
            preterite: {
                yo: "traje",
                tú: "trajiste",
                él: "trajo",
                nosotros: "trajimos",
                vosotros: "trajisteis",
                ellos: "trajeron"
            },
            imperfect: {
                yo: "traía",
                tú: "traías",
                él: "traía",
                nosotros: "traíamos",
                vosotros: "traíais",
                ellos: "traían"
            },
            future: {
                yo: "traeré",
                tú: "traerás",
                él: "traerá",
                nosotros: "traeremos",
                vosotros: "traeréis",
                ellos: "traerán"
            },
            conditional: {
                yo: "traería",
                tú: "traerías",
                él: "traería",
                nosotros: "traeríamos",
                vosotros: "traeríais",
                ellos: "traerían"
            }
        }
    },
    {
        infinitive: "partir",
        regular: true,
        translation: "to leave, to split",
        tenses: {
            present: {
                yo: "parto",
                tú: "partes",
                él: "parte",
                nosotros: "partimos",
                vosotros: "partís",
                ellos: "parten"
            },
            preterite: {
                yo: "partí",
                tú: "partiste",
                él: "partió",
                nosotros: "partimos",
                vosotros: "partisteis",
                ellos: "partieron"
            },
            imperfect: {
                yo: "partía",
                tú: "partías",
                él: "partía",
                nosotros: "partíamos",
                vosotros: "partíais",
                ellos: "partían"
            },
            future: {
                yo: "partiré",
                tú: "partirás",
                él: "partirá",
                nosotros: "partiremos",
                vosotros: "partiréis",
                ellos: "partirán"
            },
            conditional: {
                yo: "partiría",
                tú: "partirías",
                él: "partiría",
                nosotros: "partiríamos",
                vosotros: "partiríais",
                ellos: "partirían"
            }
        }
    },
    {
        infinitive: "morir",
        regular: false,
        translation: "to die",
        tenses: {
            present: {
                yo: "muero",
                tú: "mueres",
                él: "muere",
                nosotros: "morimos",
                vosotros: "morís",
                ellos: "mueren"
            },
            preterite: {
                yo: "morí",
                tú: "moriste",
                él: "murió",
                nosotros: "morimos",
                vosotros: "moristeis",
                ellos: "murieron"
            },
            imperfect: {
                yo: "moría",
                tú: "morías",
                él: "moría",
                nosotros: "moríamos",
                vosotros: "moríais",
                ellos: "morían"
            },
            future: {
                yo: "moriré",
                tú: "morirás",
                él: "morirá",
                nosotros: "moriremos",
                vosotros: "moriréis",
                ellos: "morirán"
            },
            conditional: {
                yo: "moriría",
                tú: "morirías",
                él: "moriría",
                nosotros: "moriríamos",
                vosotros: "moriríais",
                ellos: "morirían"
            }
        }
    },
    {
        infinitive: "aceptar",
        regular: true,
        translation: "to accept",
        tenses: {
            present: {
                yo: "acepto",
                tú: "aceptas",
                él: "acepta",
                nosotros: "aceptamos",
                vosotros: "aceptáis",
                ellos: "aceptan"
            },
            preterite: {
                yo: "acepté",
                tú: "aceptaste",
                él: "aceptó",
                nosotros: "aceptamos",
                vosotros: "aceptasteis",
                ellos: "aceptaron"
            },
            imperfect: {
                yo: "aceptaba",
                tú: "aceptabas",
                él: "aceptaba",
                nosotros: "aceptábamos",
                vosotros: "aceptabais",
                ellos: "aceptaban"
            },
            future: {
                yo: "aceptaré",
                tú: "aceptarás",
                él: "aceptará",
                nosotros: "aceptaremos",
                vosotros: "aceptaréis",
                ellos: "aceptarán"
            },
            conditional: {
                yo: "aceptaría",
                tú: "aceptarías",
                él: "aceptaría",
                nosotros: "aceptaríamos",
                vosotros: "aceptaríais",
                ellos: "aceptarían"
            }
        }
    },
    {
        infinitive: "realizar",
        regular: true,
        translation: "to carry out, to accomplish",
        tenses: {
            present: {
                yo: "realizo",
                tú: "realizas",
                él: "realiza",
                nosotros: "realizamos",
                vosotros: "realizáis",
                ellos: "realizan"
            },
            preterite: {
                yo: "realicé",
                tú: "realizaste",
                él: "realizó",
                nosotros: "realizamos",
                vosotros: "realizasteis",
                ellos: "realizaron"
            },
            imperfect: {
                yo: "realizaba",
                tú: "realizabas",
                él: "realizaba",
                nosotros: "realizábamos",
                vosotros: "realizabais",
                ellos: "realizaban"
            },
            future: {
                yo: "realizaré",
                tú: "realizarás",
                él: "realizará",
                nosotros: "realizaremos",
                vosotros: "realizaréis",
                ellos: "realizarán"
            },
            conditional: {
                yo: "realizaría",
                tú: "realizarías",
                él: "realizaría",
                nosotros: "realizaríamos",
                vosotros: "realizaríais",
                ellos: "realizarían"
            }
        }
    },
    {
        infinitive: "suponer",
        regular: false,
        translation: "to suppose, to assume",
        tenses: {
            present: {
                yo: "supongo",
                tú: "supones",
                él: "supone",
                nosotros: "suponemos",
                vosotros: "suponéis",
                ellos: "suponen"
            },
            preterite: {
                yo: "supuse",
                tú: "supusiste",
                él: "supuso",
                nosotros: "supusimos",
                vosotros: "supusisteis",
                ellos: "supusieron"
            },
            imperfect: {
                yo: "suponía",
                tú: "suponías",
                él: "suponía",
                nosotros: "suponíamos",
                vosotros: "suponíais",
                ellos: "suponían"
            },
            future: {
                yo: "supondré",
                tú: "supondrás",
                él: "supondrá",
                nosotros: "supondremos",
                vosotros: "supondréis",
                ellos: "supondrán"
            },
            conditional: {
                yo: "supondría",
                tú: "supondrías",
                él: "supondría",
                nosotros: "supondríamos",
                vosotros: "supondríais",
                ellos: "supondrían"
            }
        }
    },
    {
        infinitive: "comprender",
        regular: true,
        translation: "to understand, to comprise",
        tenses: {
            present: {
                yo: "comprendo",
                tú: "comprendes",
                él: "comprende",
                nosotros: "comprendemos",
                vosotros: "comprendéis",
                ellos: "comprenden"
            },
            preterite: {
                yo: "comprendí",
                tú: "comprendiste",
                él: "comprendió",
                nosotros: "comprendimos",
                vosotros: "comprendisteis",
                ellos: "comprendieron"
            },
            imperfect: {
                yo: "comprendía",
                tú: "comprendías",
                él: "comprendía",
                nosotros: "comprendíamos",
                vosotros: "comprendíais",
                ellos: "comprendían"
            },
            future: {
                yo: "comprenderé",
                tú: "comprenderás",
                él: "comprenderá",
                nosotros: "comprenderemos",
                vosotros: "comprenderéis",
                ellos: "comprenderán"
            },
            conditional: {
                yo: "comprendería",
                tú: "comprenderías",
                él: "comprendería",
                nosotros: "comprenderíamos",
                vosotros: "comprenderíais",
                ellos: "comprenderían"
            }
        }
    },
    {
        infinitive: "lograr",
        regular: true,
        translation: "to achieve, to manage",
        tenses: {
            present: {
                yo: "logro",
                tú: "logras",
                él: "logra",
                nosotros: "logramos",
                vosotros: "lográis",
                ellos: "logran"
            },
            preterite: {
                yo: "logré",
                tú: "lograste",
                él: "logró",
                nosotros: "logramos",
                vosotros: "lograsteis",
                ellos: "lograron"
            },
            imperfect: {
                yo: "lograba",
                tú: "lograbas",
                él: "lograba",
                nosotros: "lográbamos",
                vosotros: "lograbais",
                ellos: "lograban"
            },
            future: {
                yo: "lograré",
                tú: "lograrás",
                él: "logrará",
                nosotros: "lograremos",
                vosotros: "lograréis",
                ellos: "lograrán"
            },
            conditional: {
                yo: "lograría",
                tú: "lograrías",
                él: "lograría",
                nosotros: "lograríamos",
                vosotros: "lograríais",
                ellos: "lograrían"
            }
        }
    },
    {
        infinitive: "comer",
        regular: true,
        translation: "to eat",
        tenses: {
            present: {
                yo: "como",
                tú: "comes",
                él: "come",
                nosotros: "comemos",
                vosotros: "coméis",
                ellos: "comen"
            },
            preterite: {
                yo: "comí",
                tú: "comiste",
                él: "comió",
                nosotros: "comimos",
                vosotros: "comisteis",
                ellos: "comieron"
            },
            imperfect: {
                yo: "comía",
                tú: "comías",
                él: "comía",
                nosotros: "comíamos",
                vosotros: "comíais",
                ellos: "comían"
            },
            future: {
                yo: "comeré",
                tú: "comerás",
                él: "comerá",
                nosotros: "comeremos",
                vosotros: "comeréis",
                ellos: "comerán"
            },
            conditional: {
                yo: "comería",
                tú: "comerías",
                él: "comería",
                nosotros: "comeríamos",
                vosotros: "comeríais",
                ellos: "comerían"
            }
        }
    },
    {
        infinitive: "sentar",
        regular: false,
        translation: "to sit, to seat",
        tenses: {
            present: {
                yo: "siento",
                tú: "sientas",
                él: "sienta",
                nosotros: "sentamos",
                vosotros: "sentáis",
                ellos: "sientan"
            },
            preterite: {
                yo: "senté",
                tú: "sentaste",
                él: "sentó",
                nosotros: "sentamos",
                vosotros: "sentasteis",
                ellos: "sentaron"
            },
            imperfect: {
                yo: "sentaba",
                tú: "sentabas",
                él: "sentaba",
                nosotros: "sentábamos",
                vosotros: "sentabais",
                ellos: "sentaban"
            },
            future: {
                yo: "sentaré",
                tú: "sentarás",
                él: "sentará",
                nosotros: "sentaremos",
                vosotros: "sentaréis",
                ellos: "sentarán"
            },
            conditional: {
                yo: "sentaría",
                tú: "sentarías",
                él: "sentaría",
                nosotros: "sentaríamos",
                vosotros: "sentaríais",
                ellos: "sentarían"
            }
        }
    },
    {
        infinitive: "ganar",
        regular: true,
        translation: "to win, to earn",
        tenses: {
            present: {
                yo: "gano",
                tú: "ganas",
                él: "gana",
                nosotros: "ganamos",
                vosotros: "ganáis",
                ellos: "ganan"
            },
            preterite: {
                yo: "gané",
                tú: "ganaste",
                él: "ganó",
                nosotros: "ganamos",
                vosotros: "ganasteis",
                ellos: "ganaron"
            },
            imperfect: {
                yo: "ganaba",
                tú: "ganabas",
                él: "ganaba",
                nosotros: "ganábamos",
                vosotros: "ganabais",
                ellos: "ganaban"
            },
            future: {
                yo: "ganaré",
                tú: "ganarás",
                él: "ganará",
                nosotros: "ganaremos",
                vosotros: "ganaréis",
                ellos: "ganarán"
            },
            conditional: {
                yo: "ganaría",
                tú: "ganarías",
                él: "ganaría",
                nosotros: "ganaríamos",
                vosotros: "ganaríais",
                ellos: "ganarían"
            }
        }
    },
    {
        infinitive: "mover",
        regular: false,
        translation: "to move",
        tenses: {
            present: {
                yo: "muevo",
                tú: "mueves",
                él: "mueve",
                nosotros: "movemos",
                vosotros: "movéis",
                ellos: "mueven"
            },
            preterite: {
                yo: "moví",
                tú: "moviste",
                él: "movió",
                nosotros: "movimos",
                vosotros: "movisteis",
                ellos: "movieron"
            },
            imperfect: {
                yo: "movía",
                tú: "movías",
                él: "movía",
                nosotros: "movíamos",
                vosotros: "movíais",
                ellos: "movían"
            },
            future: {
                yo: "moveré",
                tú: "moverás",
                él: "moverá",
                nosotros: "moveremos",
                vosotros: "moveréis",
                ellos: "moverán"
            },
            conditional: {
                yo: "movería",
                tú: "moverías",
                él: "movería",
                nosotros: "moveríamos",
                vosotros: "moveríais",
                ellos: "moverían"
            }
        }
    },
    {
        infinitive: "dormir",
        regular: false,
        translation: "to sleep",
        tenses: {
            present: {
                yo: "duermo",
                tú: "duermes",
                él: "duerme",
                nosotros: "dormimos",
                vosotros: "dormís",
                ellos: "duermen"
            },
            preterite: {
                yo: "dormí",
                tú: "dormiste",
                él: "durmió",
                nosotros: "dormimos",
                vosotros: "dormisteis",
                ellos: "durmieron"
            },
            imperfect: {
                yo: "dormía",
                tú: "dormías",
                él: "dormía",
                nosotros: "dormíamos",
                vosotros: "dormíais",
                ellos: "dormían"
            },
            future: {
                yo: "dormiré",
                tú: "dormirás",
                él: "dormirá",
                nosotros: "dormiremos",
                vosotros: "dormiréis",
                ellos: "dormirán"
            },
            conditional: {
                yo: "dormiría",
                tú: "dormirías",
                él: "dormiría",
                nosotros: "dormiríamos",
                vosotros: "dormiríais",
                ellos: "dormirían"
            }
        }
    },
    {
        infinitive: "disfrutar",
        regular: true,
        translation: "to enjoy",
        tenses: {
            present: {
                yo: "disfruto",
                tú: "disfrutas",
                él: "disfruta",
                nosotros: "disfrutamos",
                vosotros: "disfrutáis",
                ellos: "disfrutan"
            },
            preterite: {
                yo: "disfruté",
                tú: "disfrutaste",
                él: "disfrutó",
                nosotros: "disfrutamos",
                vosotros: "disfrutasteis",
                ellos: "disfrutaron"
            },
            imperfect: {
                yo: "disfrutaba",
                tú: "disfrutabas",
                él: "disfrutaba",
                nosotros: "disfrutábamos",
                vosotros: "disfrutabais",
                ellos: "disfrutaban"
            },
            future: {
                yo: "disfrutaré",
                tú: "disfrutarás",
                él: "disfrutará",
                nosotros: "disfrutaremos",
                vosotros: "disfrutaréis",
                ellos: "disfrutarán"
            },
            conditional: {
                yo: "disfrutaría",
                tú: "disfrutarías",
                él: "disfrutaría",
                nosotros: "disfrutaríamos",
                vosotros: "disfrutaríais",
                ellos: "disfrutarían"
            }
        }
    },
    {
        infinitive: "olvidar",
        regular: true,
        translation: "to forget",
        tenses: {
            present: {
                yo: "olvido",
                tú: "olvidas",
                él: "olvida",
                nosotros: "olvidamos",
                vosotros: "olvidáis",
                ellos: "olvidan"
            },
            preterite: {
                yo: "olvidé",
                tú: "olvidaste",
                él: "olvidó",
                nosotros: "olvidamos",
                vosotros: "olvidasteis",
                ellos: "olvidaron"
            },
            imperfect: {
                yo: "olvidaba",
                tú: "olvidabas",
                él: "olvidaba",
                nosotros: "olvidábamos",
                vosotros: "olvidabais",
                ellos: "olvidaban"
            },
            future: {
                yo: "olvidaré",
                tú: "olvidarás",
                él: "olvidará",
                nosotros: "olvidaremos",
                vosotros: "olvidaréis",
                ellos: "olvidarán"
            },
            conditional: {
                yo: "olvidaría",
                tú: "olvidarías",
                él: "olvidaría",
                nosotros: "olvidaríamos",
                vosotros: "olvidaríais",
                ellos: "olvidarían"
            }
        }
    },
    {
        infinitive: "lanzar",
        regular: true,
        translation: "to throw, to launch",
        tenses: {
            present: {
                yo: "lanzo",
                tú: "lanzas",
                él: "lanza",
                nosotros: "lanzamos",
                vosotros: "lanzáis",
                ellos: "lanzan"
            },
            preterite: {
                yo: "lancé",
                tú: "lanzaste",
                él: "lanzó",
                nosotros: "lanzamos",
                vosotros: "lanzasteis",
                ellos: "lanzaron"
            },
            imperfect: {
                yo: "lanzaba",
                tú: "lanzabas",
                él: "lanzaba",
                nosotros: "lanzábamos",
                vosotros: "lanzabais",
                ellos: "lanzaban"
            },
            future: {
                yo: "lanzaré",
                tú: "lanzarás",
                él: "lanzará",
                nosotros: "lanzaremos",
                vosotros: "lanzaréis",
                ellos: "lanzarán"
            },
            conditional: {
                yo: "lanzaría",
                tú: "lanzarías",
                él: "lanzaría",
                nosotros: "lanzaríamos",
                vosotros: "lanzaríais",
                ellos: "lanzarían"
            }
        }
    },
    {
        infinitive: "reír",
        regular: false,
        translation: "to laugh",
        tenses: {
            present: {
                yo: "río",
                tú: "ríes",
                él: "ríe",
                nosotros: "reímos",
                vosotros: "reís",
                ellos: "ríen"
            },
            preterite: {
                yo: "reí",
                tú: "reíste",
                él: "rió",
                nosotros: "reímos",
                vosotros: "reísteis",
                ellos: "rieron"
            },
            imperfect: {
                yo: "reía",
                tú: "reías",
                él: "reía",
                nosotros: "reíamos",
                vosotros: "reíais",
                ellos: "reían"
            },
            future: {
                yo: "reiré",
                tú: "reirás",
                él: "reirá",
                nosotros: "reiremos",
                vosotros: "reiréis",
                ellos: "reirán"
            },
            conditional: {
                yo: "reiría",
                tú: "reirías",
                él: "reiría",
                nosotros: "reiríamos",
                vosotros: "reiríais",
                ellos: "reirían"
            }
        }
    },
    {
        infinitive: "aprender",
        regular: true,
        translation: "to learn",
        tenses: {
            present: {
                yo: "aprendo",
                tú: "aprendes",
                él: "aprende",
                nosotros: "aprendemos",
                vosotros: "aprendéis",
                ellos: "aprenden"
            },
            preterite: {
                yo: "aprendí",
                tú: "aprendiste",
                él: "aprendió",
                nosotros: "aprendimos",
                vosotros: "aprendisteis",
                ellos: "aprendieron"
            },
            imperfect: {
                yo: "aprendía",
                tú: "aprendías",
                él: "aprendía",
                nosotros: "aprendíamos",
                vosotros: "aprendíais",
                ellos: "aprendían"
            },
            future: {
                yo: "aprenderé",
                tú: "aprenderás",
                él: "aprenderá",
                nosotros: "aprenderemos",
                vosotros: "aprenderéis",
                ellos: "aprenderán"
            },
            conditional: {
                yo: "aprendería",
                tú: "aprenderías",
                él: "aprendería",
                nosotros: "aprenderíamos",
                vosotros: "aprenderíais",
                ellos: "aprenderían"
            }
        }
    },
    {
        infinitive: "sonreír",
        regular: false,
        translation: "to smile",
        tenses: {
            present: {
                yo: "sonrío",
                tú: "sonríes",
                él: "sonríe",
                nosotros: "sonreímos",
                vosotros: "sonreís",
                ellos: "sonríen"
            },
            preterite: {
                yo: "sonreí",
                tú: "sonreíste",
                él: "sonrió",
                nosotros: "sonreímos",
                vosotros: "sonreísteis",
                ellos: "sonrieron"
            },
            imperfect: {
                yo: "sonreía",
                tú: "sonreías",
                él: "sonreía",
                nosotros: "sonreíamos",
                vosotros: "sonreíais",
                ellos: "sonreían"
            },
            future: {
                yo: "sonreiré",
                tú: "sonreirás",
                él: "sonreirá",
                nosotros: "sonreiremos",
                vosotros: "sonreiréis",
                ellos: "sonreirán"
            },
            conditional: {
                yo: "sonreiría",
                tú: "sonreirías",
                él: "sonreiría",
                nosotros: "sonreiríamos",
                vosotros: "sonreiríais",
                ellos: "sonreirían"
            }
        }
    }
];

// Application state
let currentVerb = null;
let currentTense = 'present';
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
    
    // For debugging/demonstration: prioritize verbs with multiple tenses
    const verbsWithMultipleTenses = spanishVerbs.filter(verb => 
        verb.tenses && Object.keys(verb.tenses).length > 1 && !usedVerbs.includes(verb.infinitive)
    );
    
    // If we have unused verbs with multiple tenses, prefer those
    if (verbsWithMultipleTenses.length > 0) {
        const randomIndex = Math.floor(Math.random() * verbsWithMultipleTenses.length);
        const verb = verbsWithMultipleTenses[randomIndex];
        usedVerbs.push(verb.infinitive);
        return verb;
    }
    
    // Otherwise, get available verbs (not recently used)
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

// Get conjugations for a verb, handling both old and new structure
function getConjugations(verb, tense = 'present') {
    // If verb has new tenses structure
    if (verb.tenses) {
        return verb.tenses[tense] || verb.tenses.present;
    }
    // If verb has old conjugations structure (fallback)
    return verb.conjugations;
}

// Get available tenses for a verb
function getAvailableTenses(verb) {
    if (verb.tenses) {
        return Object.keys(verb.tenses);
    }
    return ['present'];
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
function showConjugations(verb, tense = 'present') {
    // Infinitive and translation should always be visible at the top
    infinitiveEl.textContent = verb.infinitive + (verb.regular ? "" : " (irr.)");
    translationEl.textContent = verb.translation;
    infinitiveEl.classList.remove('hidden');
    translationEl.classList.remove('hidden');

    // Clear previous content
    conjugationsEl.innerHTML = '';

    // Get the conjugations for the specified tense
    const conjugations = getConjugations(verb, tense);
    const availableTenses = getAvailableTenses(verb);
    
    // Create tense selector if multiple tenses available
    if (availableTenses.length > 1) {
        const tenseSelector = document.createElement('div');
        tenseSelector.className = 'tense-selector';
        tenseSelector.style.marginBottom = '15px';
        
        availableTenses.forEach(tenseName => {
            const button = document.createElement('button');
            button.textContent = tenseName.charAt(0).toUpperCase() + tenseName.slice(1);
            button.className = tenseName === tense ? 'tense-button active' : 'tense-button';
            button.onclick = (e) => {
                e.stopPropagation();
                currentTense = tenseName;
                showConjugations(verb, tenseName);
            };
            tenseSelector.appendChild(button);
        });
        
        conjugationsEl.appendChild(tenseSelector);
    }

    // Create heading
    const heading = document.createElement('h3');
    heading.textContent = `${tense.charAt(0).toUpperCase() + tense.slice(1)} Tense Conjugations`;
    heading.style.marginTop = '10px';
    conjugationsEl.appendChild(heading);

    // Create conjugation items
    const conjugationsList = [
        { pronoun: 'yo', form: conjugations.yo },
        { pronoun: 'tú', form: conjugations.tú },
        { pronoun: 'él/ella/Ud.', form: conjugations.él },
        { pronoun: 'nosotros', form: conjugations.nosotros },
        { pronoun: 'vosotros', form: conjugations.vosotros },
        { pronoun: 'ellos/ellas/Uds.', form: conjugations.ellos }
    ];

    conjugationsList.forEach(({ pronoun, form }) => {
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
        // Show conjugations using the current tense if available, otherwise fallback to present
        const availableTenses = getAvailableTenses(currentVerb);
        const tenseToShow = availableTenses.includes(currentTense) ? currentTense : 'present';
        currentTense = tenseToShow; // Update currentTense in case we fell back to present
        showConjugations(currentVerb, tenseToShow);
        showingConjugations = true;
    } else {
        // Show new verb but keep the same tense if possible
        currentVerb = getRandomVerb();
        const availableTenses = getAvailableTenses(currentVerb);
        
        // Keep the current tense if the new verb supports it, otherwise default to present
        if (!availableTenses.includes(currentTense)) {
            currentTense = 'present';
        }
        
        showInfinitive(currentVerb);
        showingConjugations = false;
    }
}

// Event listeners
flashcard.addEventListener('click', handleClick);

// Initialize with a random verb
currentVerb = getRandomVerb();
showInfinitive(currentVerb);
