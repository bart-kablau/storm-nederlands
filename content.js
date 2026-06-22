/* ============================================================================
   content.js — Nederlands met Storm, grammatica (Grammaticagids, klas wm1d)
   Swapbare laag op de canonieke engine (tools/oefen-engine/).
   Bron van waarheid voor alle leerstof: nederlands/WAT-MOET-STORM-LEREN.md
   Vraagtypes: mc · sleep (categoriseren) · vb (voordoen) · stap (proef met hints)
     · ontleed (woorden aanwijzen in een zin) · gap · sequence
   ========================================================================== */

window.VAK = {
  id:"nederlands_grammatica",
  titel:"Nederlands met Storm — Grammatica",
  brand:"Nederlands met Storm", badge:"✍️", mascotEmoji:"🦉",
  spiekTitel:"Grammaticagids — spiekblad",
  wiskunde:false,
  spraak:{ vraagLang:"nl-NL", antwoordLang:"nl-NL" },
  matching:{ stripInfinitief:false, accentTolerant:false, lidwoordTolerant:false },
  masteryHits:2, stapelGrootte:8,
  tegels:["leerstof","begrippen","proeftoets","spiekblad"],
  proefTitel:"Grammatica-toets",
  tegelProef:{ em:"📝", h:"Grammatica-toets", p:"Alle regels door elkaar, net als de toets" },
  overzichtFilm:"grammatica-overzicht-nl"
};

window.LEERSTOF = [

/* ===================== EXEMPLAAR-ONDERWERP: lijdend voorwerp ===================== */
{
  id:"lijdend-voorwerp", emoji:"🎯", titel:"Lijdend voorwerp",
  kort:"Het zinsdeel dat aangeeft wie/wat iets ondergaat. Vraag: wie/wat + werkwoordelijk gezegde + onderwerp?",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "In sommige zinnen <b>ondergaat</b> iemand of iets wat er gedaan wordt. Dat zinsdeel is het <b>lijdend voorwerp</b>.",
        "Voorbeeld: <i>Ik kam <u>mijn haar</u></i>. 'Mijn haar' ondergáát het kammen → lijdend voorwerp.",
        "Je vindt het met de vraag: <b>wie of wat</b> + het werkwoordelijk gezegde + het onderwerp?"
      ],
      regel:"Lijdend voorwerp = wie/wat ondergaat iets. Vraag: wie/wat + wg + onderwerp?",
      voorbeelden:[
        {en:"Ryan at een chocoladereep.", let:"Wie/wat at Ryan? → een chocoladereep. Dat wordt opgegeten → lijdend voorwerp."},
        {en:"Nora bestelde een pizza.", let:"Wie/wat bestelde Nora? → een pizza → lijdend voorwerp."}
      ],
      vragen:[
        {t:"mc", q:"Wat is het lijdend voorwerp in: <i>Storm tekent een paard.</i>",
          o:["een paard","Storm","tekent"], a:"een paard",
          w:"Wie/wat tekent Storm? → een paard. Dat ondergaat het tekenen.",
          fout:{ "Storm":"Storm is degene die tekent → dat is het onderwerp, niet het lijdend voorwerp.",
                 "tekent":"'tekent' is het werkwoord (werkwoordelijk gezegde), geen lijdend voorwerp." }},
        {t:"sleep", opgave:"Heeft de zin een lijdend voorwerp?",
          chips:[{t:"Storm aait haar knuffel.",bak:"wel"},{t:"De keeper stopte de bal.",bak:"wel"},
                 {t:"Storm lacht hard.",bak:"geen"},{t:"Het regent buiten.",bak:"geen"}],
          bakjes:[{id:"wel",label:"wél een lijdend voorwerp",som:""},{id:"geen",label:"géén lijdend voorwerp",som:""}],
          w:"Vraag steeds: wie/wat ondergaat iets? Soms is er niets dat iets ondergaat."},
        {t:"vb", opgave:"De keeper stopte de bal.",
          waarom:{ q:"Waarom is 'de bal' het lijdend voorwerp?",
            o:["De bal ondergaat het stoppen","De bal doet iets","De bal is het onderwerp"],
            a:"De bal ondergaat het stoppen"},
          fout:{"De bal doet iets":"juist niet — de bal dóét niets, de bal ondergáát iets (het stoppen). Wie iets doet is het onderwerp; wie iets ondergaat is het lijdend voorwerp.","De bal is het onderwerp":"het onderwerp is hier 'de keeper' (die stopt). 'De bal' ondergaat het stoppen, dus dat is het lijdend voorwerp."},
          stappen:[
            {toon:"De keeper stopte de bal.", uitleg:"Eerst onderwerp + werkwoord: wie stopte? → de keeper (onderwerp), stopte (wg)."},
            {toon:"Wie/wat stopte de keeper?", uitleg:"Stel de vraag: wie/wat + wg + onderwerp."},
            {toon:"→ de bal", uitleg:"De bal ondergaat het stoppen → lijdend voorwerp."} ]}
      ]
    },
    { n:2, naam:"Zilver",
      uitleg:[
        "Vind het lijdend voorwerp met de <b>vraagproef</b>: <i>wie of wat</i> + het <b>werkwoordelijk gezegde</b> + het <b>onderwerp</b>?",
        "Doe het in stappen: zoek eerst het werkwoord en het onderwerp, stel daarna pas de vraag.",
        "Het antwoord op die vraag is het lijdend voorwerp."
      ],
      regel:"Vraagproef: wie/wat + werkwoordelijk gezegde + onderwerp? → het antwoord is het lijdend voorwerp.",
      voorbeelden:[ {en:"Mees verstuurde een appje.", let:"Wie/wat verstuurde Mees? → een appje → lijdend voorwerp."} ],
      vragen:[
        {t:"ontleed", q:"Tik de woorden aan die samen het LIJDEND VOORWERP vormen.",
          zin:"Storm aait haar lievelingsknuffel.", antwoord:[2,3], proef:"vraagproef",
          w:"Wie/wat aait Storm? → haar lievelingsknuffel. Dat ondergaat het aaien → lijdend voorwerp."},
        {t:"stap", opgave:"Lotte wil een taart bakken.", w:"Wie/wat wil Lotte bakken? → een taart.",
          meer:"Werkwoordelijk gezegde = wil bakken; onderwerp = Lotte. Vraag: wie/wat wil Lotte bakken? → een taart.",
          stappen:[
            {prompt:"Wat is het onderwerp? (wie doet er iets?)", a:"Lotte", hints:["Wie wil er bakken?"]},
            {prompt:"Stel de vraag wie/wat + wg + onderwerp. Wat is het lijdend voorwerp?", a:"een taart|de taart",
              hints:["Wie/wat wil Lotte bakken?","Een taart wordt gebakken → die ondergaat iets"]} ]},
        {t:"ontleed", q:"Tik de woorden aan die samen het LIJDEND VOORWERP vormen.",
          zin:"De juf gaf de klas een moeilijke toets.", antwoord:[5,6,7], proef:"vraagproef",
          w:"Wie/wat gaf de juf? → een moeilijke toets (dat wordt gegeven). 'de klas' ontvángt en is het meewerkend voorwerp, niet het lijdend voorwerp."}
      ]
    },
    { n:3, naam:"Goud",
      uitleg:[
        "Let op twee dingen. <b>1:</b> een lijdend voorwerp begint <b>nooit met een voorzetsel</b> (in, op, naar, met, aan, om …).",
        "<b>2:</b> niet in elke zin zit een lijdend voorwerp; soms is er niets dat iets ondergaat.",
        "Blijf de vraagproef gebruiken en check daarna of het antwoord niet met een voorzetsel begint."
      ],
      regel:"Lijdend voorwerp begint nooit met een voorzetsel; niet elke zin heeft er een.",
      voorbeelden:[ {en:"In het zwembad oefent Storm haar duik.", let:"Lijdend voorwerp = haar duik. 'In het zwembad' begint met 'in' (voorzetsel) → dat kan het niet zijn."} ],
      vragen:[
        {t:"ontleed", q:"Tik de woorden aan die samen het LIJDEND VOORWERP vormen.",
          zin:"In het zwembad oefent Storm haar duik.", antwoord:[5,6], proef:"vraagproef",
          w:"Wie/wat oefent Storm? → haar duik. 'In het zwembad' begint met het voorzetsel 'in' → geen lijdend voorwerp.",
          meer:"Een lijdend voorwerp begint nooit met een voorzetsel."},
        {t:"mc", q:"Welke zin heeft GÉÉN lijdend voorwerp?",
          o:["Storm zwemt in het diepe.","Storm pakt haar bril.","De trainer prees het team."], a:"Storm zwemt in het diepe.",
          w:"Bij 'Storm zwemt in het diepe' ondergaat niets iets; 'in het diepe' begint met een voorzetsel.",
          fout:{ "Storm pakt haar bril.":"hier is 'haar bril' het lijdend voorwerp (wie/wat pakt Storm?).",
                 "De trainer prees het team.":"hier is 'het team' het lijdend voorwerp (wie/wat prees de trainer?)." }},
        {t:"ontleed", q:"Tik de woorden aan die samen het LIJDEND VOORWERP vormen. (Let op: misschien is er geen!)",
          zin:"Storm lacht om de grap.", antwoord:[], proef:"vraagproef",
          w:"Wie/wat ondergaat hier iets? Niets. 'om de grap' begint met het voorzetsel 'om'. Géén lijdend voorwerp — tik niets aan en klik Check.",
          meer:"Niet in elke zin zit een lijdend voorwerp."}
      ]
    }
  ]
},

/* ===================== WOORDSOORT 1: lidwoord ===================== */
{
  id:"lidwoord", emoji:"🔤", titel:"Lidwoord",
  kort:"Het kleine woordje de, het of een dat bij een zelfstandig naamwoord hoort. Proef: kun je 'het' (of 'de') ervoor denken?",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Een <b>lidwoord</b> is een klein woordje dat bij een zelfstandig naamwoord hoort. Er zijn er maar <b>drie</b>: <b>de</b>, <b>het</b> en <b>een</b>.",
        "<b>de</b> en <b>het</b> zijn <b>bepaald</b> (je weet welke). <b>een</b> is <b>onbepaald</b> (zomaar eentje).",
        "Voorbeeld: <i><u>de</u> keeper</i> (bepaald) en <i><u>een</u> keeper</i> (zomaar een keeper)."
      ],
      regel:"Lidwoorden zijn: de, het, een. de/het = bepaald, een = onbepaald.",
      voorbeelden:[
        {en:"De bal rolt het veld op.", let:"'De' en 'het' zijn allebei lidwoorden (bepaald)."},
        {en:"Storm tekent een paard.", let:"'een' is een lidwoord (onbepaald): zomaar een paard."}
      ],
      vragen:[
        {t:"mc", q:"Welk woord is een lidwoord in: <i>Storm pakt de bal.</i>",
          o:["de","Storm","bal"], a:"de",
          w:"'de' is een lidwoord (bepaald). Het hoort bij het zelfstandig naamwoord 'bal'.",
          fout:{ "Storm":"Storm is een naam → een zelfstandig naamwoord, geen lidwoord.",
                 "bal":"'bal' is een zelfstandig naamwoord; het lidwoord ervoor is 'de'." }},
        {t:"mc", q:"Welk lidwoord is <b>onbepaald</b>?",
          o:["een","de","het"], a:"een",
          w:"'een' is onbepaald: het gaat om zomaar eentje. 'de' en 'het' zijn bepaald.",
          fout:{ "de":"'de' is bepaald (je weet welke).",
                 "het":"'het' is bepaald (je weet welke)." }},
        {t:"sleep", opgave:"Welke woorden zijn lidwoorden en welke niet?",
          chips:[{t:"de",bak:"wel"},{t:"het",bak:"wel"},{t:"een",bak:"wel"},
                 {t:"Storm",bak:"geen"},{t:"hockey",bak:"geen"},{t:"mooi",bak:"geen"}],
          bakjes:[{id:"wel",label:"is een lidwoord",som:""},{id:"geen",label:"géén lidwoord",som:""}],
          w:"Er zijn maar drie lidwoorden: de, het en een. Al het andere is iets anders."},
        {t:"vb", opgave:"Storm pakt het potlood.",
          waarom:{ q:"Welk woord is hier het lidwoord?",
            o:["het","potlood","pakt"],
            a:"het"},
          fout:{"potlood":"'potlood' is het zelfstandig naamwoord (een ding). Het lidwoord is het kleine woordje ervóór: 'het'.","pakt":"'pakt' is het werkwoord (wat Storm doet). Een lidwoord is 'de', 'het' of 'een' — hier dus 'het'."},
          stappen:[
            {toon:"Storm pakt het potlood.", uitleg:"Zoek de drie lidwoorden: de, het of een."},
            {toon:"→ het", uitleg:"'het' is een lidwoord (bepaald). Het hoort bij 'potlood'."},
            {toon:"'potlood' is het zelfstandig naamwoord", uitleg:"Het lidwoord 'het' hoort daarbij."} ]}
      ]
    },
    { n:2, naam:"Zilver",
      uitleg:[
        "Twijfel je of een woord een lidwoord is? Gebruik de <b>denk-proef</b>: kun je <i>het</i> (of <i>de</i>) ervóór denken bij een zelfstandig naamwoord?",
        "De drie lidwoorden zijn altijd: <b>de</b>, <b>het</b>, <b>een</b>. Geen ander woord is een lidwoord.",
        "Pas op: een lidwoord staat <b>niet altijd direct vóór</b> het zelfstandig naamwoord; er kan een bijvoeglijk naamwoord tussen staan."
      ],
      regel:"Proef: hoort het woordje (de/het/een) bij een zelfstandig naamwoord? Dan is het een lidwoord.",
      voorbeelden:[ {en:"De nieuwe schaatsen zijn van Storm.", let:"'De' is het lidwoord; 'nieuwe' staat ertussen, maar 'de' hoort bij 'schaatsen'."} ],
      vragen:[
        {t:"ontleed", q:"Tik het LIDWOORD aan.",
          zin:"De keeper stopt de bal.", antwoord:[0], proef:"denk-proef",
          w:"'De' (eerste woord) is het lidwoord bij 'keeper'. Er staat verderop nóg een 'de', maar de vraag vraagt om er één — het eerste lidwoord van de zin."},
        {t:"stap", opgave:"Storm draagt een rode rugzak.", w:"Zoek de drie lidwoorden: de, het of een.",
          meer:"Een lidwoord staat niet altijd direct vóór het zelfstandig naamwoord; 'rode' staat ertussen.",
          stappen:[
            {prompt:"Welk lidwoord staat er in de zin? (de, het of een)", a:"een", hints:["Welk woordje hoort bij 'rugzak'?","Het is onbepaald: zomaar een rugzak"]},
            {prompt:"Is dat lidwoord bepaald of onbepaald?", a:"onbepaald", hints:["'een' is altijd onbepaald"]} ]},
        {t:"ontleed", q:"Tik het LIDWOORD aan.",
          zin:"Storm aait een zachte knuffel.", antwoord:[2], proef:"denk-proef",
          w:"'een' (woord 2) is het lidwoord; 'zachte' is een bijvoeglijk naamwoord dat ertussen staat, maar 'een' hoort bij 'knuffel'."}
      ]
    },
    { n:3, naam:"Goud",
      uitleg:[
        "Let op de <b>uitzondering</b>: <i>het</i> is een lidwoord, maar <i>één</i> (met de streepjes é-é) is een <b>telwoord</b> dat '1' betekent.",
        "Trucje: kun je het vervangen door 'twee' of 'drie'? Dan is het het telwoord <i>één</i>. Kun je dat niet? Dan is het het lidwoord <i>het</i>.",
        "Onthoud ook: een lidwoord staat <b>niet altijd direct vóór</b> het zelfstandig naamwoord — er kan een bijvoeglijk naamwoord tussen staan."
      ],
      regel:"Lidwoord 'het' ≠ telwoord 'één' (é-é). Kun je 'twee' invullen? → telwoord. Lidwoord staat niet altijd direct vóór het zn.",
      voorbeelden:[ {en:"Storm scoorde één doelpunt.", let:"'één' (met é-é) betekent '1' → telwoord, géén lidwoord. Je kunt er 'twee' van maken."} ],
      vragen:[
        {t:"ontleed", q:"Tik het LIDWOORD aan. (Let op: misschien is een woord een telwoord!)",
          zin:"Storm heeft één hockeystick.", antwoord:[], proef:"vervang-door-twee",
          w:"'één' (met é-é) betekent '1' → dat is een telwoord, geen lidwoord. Je kunt er 'twee hockeysticks' van maken. Er staat dus géén lidwoord in deze zin — tik niets aan en klik Check.",
          meer:"Lidwoord 'het' verwar je niet met telwoord 'één'."},
        {t:"ontleed", q:"Tik het LIDWOORD aan.",
          zin:"Storm pakt het mooie tekenblok.", antwoord:[2], proef:"denk-proef",
          w:"'het' (woord 2) is hier een lidwoord (je kunt er geen 'twee' van maken). 'mooie' staat ertussen, maar 'het' hoort bij 'tekenblok'."},
        {t:"mc", q:"In welke zin is het vetgedrukte woord een <b>telwoord</b> (en dus géén lidwoord)?",
          o:["Storm heeft <b>één</b> bal.","Storm gooit <b>het</b> balletje.","Storm zoekt <b>de</b> bal."], a:"Storm heeft <b>één</b> bal.",
          w:"'één' (met é-é) betekent '1'; je kunt er 'twee' van maken → telwoord, geen lidwoord.",
          fout:{ "Storm gooit <b>het</b> balletje.":"'het' is hier een lidwoord (je kunt er geen 'twee' van maken).",
                 "Storm zoekt <b>de</b> bal.":"'de' is altijd een lidwoord (bepaald)." }}
      ]
    }
  ]
},

/* ===================== WOORDSOORT 2: zelfstandig naamwoord ===================== */
{
  id:"zelfstandig-naamwoord", emoji:"📦", titel:"Zelfstandig naamwoord",
  kort:"Een woord voor een mens, dier, plant, ding of gevoel — én namen. Proeven: lidwoord ervoor, verkleinwoord, meervoud.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Een <b>zelfstandig naamwoord</b> is een woord voor een <b>mens, dier, plant, ding</b> of <b>gevoel</b> (ezelsbruggetje: Me-Di-Pla-Di).",
        "Ook <b>namen</b> zijn zelfstandige naamwoorden: van mensen, plaatsen en merken.",
        "Voorbeeld: <i>keeper</i> (mens), <i>knuffel</i> (ding), <i>geluk</i> (gevoel) zijn allemaal zelfstandige naamwoorden."
      ],
      regel:"Zelfstandig naamwoord = woord voor mens, dier, plant, ding of gevoel (of een naam).",
      voorbeelden:[
        {en:"De hond rent door de tuin.", let:"'hond' (dier) en 'tuin' (ding/plek) zijn zelfstandige naamwoorden."},
        {en:"Storm voelt verdriet.", let:"'Storm' (naam) en 'verdriet' (gevoel) zijn allebei zelfstandige naamwoorden."}
      ],
      vragen:[
        {t:"mc", q:"Welk woord is een zelfstandig naamwoord in: <i>Storm aait de knuffel.</i>",
          o:["knuffel","aait","de"], a:"knuffel",
          w:"'knuffel' is een ding → een zelfstandig naamwoord.",
          fout:{ "aait":"'aait' is een werkwoord (wat Storm doet), geen zelfstandig naamwoord.",
                 "de":"'de' is een lidwoord, geen zelfstandig naamwoord." }},
        {t:"mc", q:"Welk woord is een zelfstandig naamwoord (een gevoel)?",
          o:["blijdschap","blij","heel"], a:"blijdschap",
          w:"'blijdschap' is een gevoel → een zelfstandig naamwoord. 'blij' is een bijvoeglijk naamwoord.",
          fout:{ "blij":"'blij' zegt iets over iemand → dat is een bijvoeglijk naamwoord.",
                 "heel":"'heel' versterkt iets, het is geen zelfstandig naamwoord." }},
        {t:"sleep", opgave:"Sleep elk zelfstandig naamwoord naar de juiste soort.",
          chips:[{t:"meester",bak:"mens"},{t:"hond",bak:"dier"},{t:"hockeystick",bak:"ding"},{t:"angst",bak:"gevoel"}],
          bakjes:[{id:"mens",label:"mens",som:""},{id:"dier",label:"dier",som:""},{id:"ding",label:"ding",som:""},{id:"gevoel",label:"gevoel",som:""}],
          w:"Een zelfstandig naamwoord kan een mens, dier, plant, ding of gevoel zijn (Me-Di-Pla-Di)."},
        {t:"vb", opgave:"Storm pakt haar potlood.",
          waarom:{ q:"Welk woord is het zelfstandig naamwoord?",
            o:["potlood","pakt","haar"],
            a:"potlood"},
          fout:{"pakt":"'pakt' is het werkwoord. Een zelfstandig naamwoord is een ding, dier of persoon — hier 'potlood'.","haar":"'haar' is een bezittelijk voornaamwoord (van wie het potlood is). Het zelfstandig naamwoord, het ding zelf, is 'potlood'."},
          stappen:[
            {toon:"Storm pakt haar potlood.", uitleg:"Zoek het woord voor een mens, dier, plant, ding of gevoel."},
            {toon:"→ potlood", uitleg:"Een potlood is een ding → zelfstandig naamwoord."},
            {toon:"(Storm is ook een zn: een naam!)", uitleg:"Namen zijn ook zelfstandige naamwoorden."} ]}
      ]
    },
    { n:2, naam:"Zilver",
      uitleg:[
        "Twijfel je? Gebruik de <b>3 proeven</b>. <b>1:</b> kun je er een <b>lidwoord</b> (de/het/een) vóór zetten?",
        "<b>2:</b> kun je er een <b>verkleinwoord</b> van maken? (boom → boom<u>pje</u>). <b>3:</b> kun je er <b>meervoud</b> van maken? (boom → bom<u>en</u>).",
        "Lukt minstens één proef, dan is het een zelfstandig naamwoord."
      ],
      regel:"3 proeven: lidwoord ervoor · verkleinwoord maken · meervoud maken.",
      voorbeelden:[ {en:"Storm bestelt een chai latte.", let:"'chai latte' → de chai latte (lidwoord), het lattetje (verkleinwoord), twee latte's (meervoud) → zelfstandig naamwoord."} ],
      vragen:[
        {t:"ontleed", q:"Tik het ZELFSTANDIG NAAMWOORD aan.",
          zin:"Storm verft een schilderij.", antwoord:[3], proef:"3-proeven",
          w:"'schilderij' → het schilderij (lidwoord), het schilderijtje (verkleinwoord), twee schilderijen (meervoud) → zelfstandig naamwoord."},
        {t:"stap", opgave:"Storm knuffelt haar konijn.", w:"Pas de proeven toe op 'konijn'.",
          meer:"Lidwoord: het konijn. Verkleinwoord: konijntje. Meervoud: konijnen. Alle drie lukken → zelfstandig naamwoord.",
          stappen:[
            {prompt:"Welk lidwoord past vóór 'konijn'? (de of het)", a:"het", hints:["het konijn"]},
            {prompt:"Maak het verkleinwoord van konijn.", a:"konijntje", hints:["…tje erachter"]},
            {prompt:"Is 'konijn' daardoor een zelfstandig naamwoord? (ja of nee)", a:"ja", hints:["De proeven lukten → dus ja"]} ]},
        {t:"ontleed", q:"Tik de TWEE zelfstandige naamwoorden aan.",
          zin:"De keeper stopt de bal.", antwoord:[1,4], proef:"3-proeven",
          w:"'keeper' (mens, woord 1) en 'bal' (ding, woord 4) zijn allebei zelfstandige naamwoorden. 'De' is een lidwoord, 'stopt' is een werkwoord."}
      ]
    },
    { n:3, naam:"Goud",
      uitleg:[
        "<b>Namen</b> zijn ook zelfstandige naamwoorden: personen (Storm, Femke), plaatsen (Veghel, Australië) en merken (Jumbo, Samsung).",
        "<b>Let op bij gevoelens (emoties):</b> daar kun je vaak géén meervoud van maken (geen 'gelukken' of 'trotsen'), maar het blíjft een zelfstandig naamwoord.",
        "Bij een emotie helpt dan de lidwoord-proef: <i>het geluk</i>, <i>de trots</i> → het is wél een zelfstandig naamwoord."
      ],
      regel:"Namen (mensen/plaatsen/merken) zijn ook zn. Bij emoties lukt meervoud vaak niet, maar het blijft een zn (lidwoord-proef).",
      voorbeelden:[ {en:"Storm reist naar Australië.", let:"'Storm' (persoon) en 'Australië' (plaats) zijn allebei namen → zelfstandige naamwoorden."} ],
      vragen:[
        {t:"ontleed", q:"Tik de TWEE namen aan (dat zijn ook zelfstandige naamwoorden).",
          zin:"Storm gaat duiken in Australië.", antwoord:[0,4], proef:"namen-zijn-zn",
          w:"'Storm' (woord 0, persoon) en 'Australië' (woord 4, plaats) zijn namen → allebei zelfstandige naamwoorden.",
          meer:"Namen van mensen, plaatsen en merken zijn ook zelfstandige naamwoorden."},
        {t:"ontleed", q:"Tik het ZELFSTANDIG NAAMWOORD aan (een gevoel).",
          zin:"Storm voelt veel geluk.", antwoord:[3], proef:"lidwoord-proef",
          w:"'geluk' (woord 3) is een gevoel. Je kunt er 'het geluk' van maken (lidwoord-proef). Meervoud lukt niet, maar het blíjft een zelfstandig naamwoord."},
        {t:"mc", q:"Waarom is 'verdriet' in <i>Storm voelt verdriet.</i> tóch een zelfstandig naamwoord, ook al kun je er geen meervoud van maken?",
          o:["Je kunt er een lidwoord voor zetten: het verdriet","Omdat het op -t eindigt","Omdat het achter een werkwoord staat"], a:"Je kunt er een lidwoord voor zetten: het verdriet",
          w:"Bij emoties lukt het meervoud vaak niet, maar de lidwoord-proef (het verdriet) bewijst dat het een zelfstandig naamwoord is.",
          fout:{ "Omdat het op -t eindigt":"De letter aan het eind zegt niets over de woordsoort.",
                 "Omdat het achter een werkwoord staat":"De plek in de zin bepaalt de woordsoort niet." }}
      ]
    }
  ]
},

/* ===================== WOORDSOORT 3: bijvoeglijk naamwoord ===================== */
{
  id:"bijvoeglijk-naamwoord", emoji:"🎨", titel:"Bijvoeglijk naamwoord",
  kort:"Een woord dat iets extra zegt over een zelfstandig naamwoord (mooi, rood, snel). Heeft een korte en lange vorm en trappen van vergelijking.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Een <b>bijvoeglijk naamwoord</b> zegt iets <b>extra over een zelfstandig naamwoord</b>: hoe iets is.",
        "Voorbeeld: <i>de <u>snelle</u> keeper</i> — 'snelle' zegt iets over de keeper. <i>het <u>rode</u> potlood</i> — 'rode' zegt iets over het potlood.",
        "Het staat vaak vóór het zelfstandig naamwoord, maar het kan ook erachter: <i>de keeper is <u>snel</u></i>."
      ],
      regel:"Bijvoeglijk naamwoord = zegt iets extra over een zelfstandig naamwoord (hoe iets is).",
      voorbeelden:[
        {en:"Storm heeft een nieuwe hockeystick.", let:"'nieuwe' zegt iets extra over de hockeystick → bijvoeglijk naamwoord."},
        {en:"De knuffel is zacht.", let:"'zacht' zegt iets over de knuffel (staat erachter) → bijvoeglijk naamwoord."}
      ],
      vragen:[
        {t:"mc", q:"Welk woord is het bijvoeglijk naamwoord in: <i>Storm pakt het rode potlood.</i>",
          o:["rode","potlood","pakt"], a:"rode",
          w:"'rode' zegt iets extra over het potlood (welke kleur) → bijvoeglijk naamwoord.",
          fout:{ "potlood":"'potlood' is een ding → zelfstandig naamwoord.",
                 "pakt":"'pakt' is wat Storm doet → werkwoord." }},
        {t:"mc", q:"Welk woord zegt iets <b>over</b> een zelfstandig naamwoord?",
          o:["snelle (de snelle keeper)","keeper","de"], a:"snelle (de snelle keeper)",
          w:"'snelle' vertelt hóe de keeper is → bijvoeglijk naamwoord.",
          fout:{ "keeper":"'keeper' is de mens zelf → zelfstandig naamwoord.",
                 "de":"'de' is een lidwoord." }},
        {t:"sleep", opgave:"Welke woorden zijn bijvoeglijke naamwoorden?",
          chips:[{t:"mooi",bak:"wel"},{t:"snel",bak:"wel"},{t:"zacht",bak:"wel"},
                 {t:"knuffel",bak:"geen"},{t:"rennen",bak:"geen"},{t:"de",bak:"geen"}],
          bakjes:[{id:"wel",label:"bijvoeglijk naamwoord",som:""},{id:"geen",label:"iets anders",som:""}],
          w:"Een bijvoeglijk naamwoord zegt hoe iets is (mooi, snel, zacht). 'knuffel' is een ding, 'rennen' een werkwoord, 'de' een lidwoord."},
        {t:"vb", opgave:"Storm tekent een groot paard.",
          waarom:{ q:"Welk woord zegt iets over het paard?",
            o:["groot","paard","tekent"],
            a:"groot"},
          fout:{"paard":"'paard' is het zelfstandig naamwoord zélf. We zoeken het woord dat er iets over zegt: hóe is het paard? → 'groot'.","tekent":"'tekent' is het werkwoord (wat Storm doet). Het bijvoeglijk naamwoord vertelt hoe het paard is: 'groot'."},
          stappen:[
            {toon:"Storm tekent een groot paard.", uitleg:"Zoek het woord dat vertelt hóe het paard is."},
            {toon:"→ groot", uitleg:"'groot' zegt iets extra over het paard → bijvoeglijk naamwoord."},
            {toon:"'paard' is het zelfstandig naamwoord", uitleg:"Daar zegt 'groot' iets over." }] }
      ]
    },
    { n:2, naam:"Zilver",
      uitleg:[
        "Een bijvoeglijk naamwoord heeft vaak een <b>korte vorm</b> (zonder -e) én een <b>lange vorm</b> (met -e): <i>sterk / sterke</i>, <i>groot / grote</i>.",
        "Ook heeft het <b>trappen van vergelijking</b>: <i>groot – groter – grootst</i>, <i>snel – sneller – snelst</i>.",
        "Lukt zo'n vergelijking? Dan weet je zeker dat het een bijvoeglijk naamwoord is."
      ],
      regel:"Bijvoeglijk naamwoord heeft korte/lange vorm (sterk/sterke) én trappen: groot–groter–grootst.",
      voorbeelden:[ {en:"Storm heeft de snelste tijd.", let:"snel – sneller – snelst → 'snelste' is een bijvoeglijk naamwoord (overtreffende trap)."} ],
      vragen:[
        {t:"ontleed", q:"Tik het BIJVOEGLIJK NAAMWOORD aan.",
          zin:"Storm draagt een warme jas.", antwoord:[3], proef:"trappen-proef",
          w:"'warme' (woord 3) zegt iets over de jas. Vergelijking: warm – warmer – warmst → bijvoeglijk naamwoord."},
        {t:"stap", opgave:"Maak de trappen van vergelijking.", w:"Een bijvoeglijk naamwoord heeft drie trappen.",
          meer:"groot – groter – grootst. De middelste heet de vergrotende trap, de laatste de overtreffende trap.",
          stappen:[
            {prompt:"Wat is de vergrotende trap van 'groot'?", a:"groter", hints:["groot – …er"]},
            {prompt:"Wat is de overtreffende trap van 'groot'?", a:"grootst|grootste", hints:["groot – groter – …st"]} ]},
        {t:"ontleed", q:"Tik de TWEE bijvoeglijke naamwoorden aan.",
          zin:"Storm heeft een snelle, sterke fiets.", antwoord:[3,4], proef:"trappen-proef",
          w:"'snelle,' (woord 3) en 'sterke' (woord 4) zeggen allebei iets over de fiets. Snel–sneller–snelst en sterk–sterker–sterkst → bijvoeglijke naamwoorden. (De komma plakt aan 'snelle'.)"}
      ]
    },
    { n:3, naam:"Goud",
      uitleg:[
        "De <b>uitzondering</b> is het <b>stoffelijk bijvoeglijk naamwoord</b>: dat zegt van welke <b>stof</b> iets is gemaakt (zilveren, houten, koperen).",
        "Het eindigt altijd op <b>-en</b>, heeft maar één vorm en staat <b>altijd vóór</b> het zelfstandig naamwoord.",
        "En heel belangrijk: een stoffelijk bijvoeglijk naamwoord heeft <b>géén trappen van vergelijking</b> (geen 'houtener' of 'zilverenst')."
      ],
      regel:"Stoffelijk bn (-en) zegt van welke stof iets is; vaste vorm, géén trappen, altijd vóór het zn.",
      voorbeelden:[ {en:"Storm kreeg een zilveren medaille.", let:"'zilveren' zegt waarvan de medaille is gemaakt → stoffelijk bn. Geen 'zilverener' → géén trappen."} ],
      vragen:[
        {t:"ontleed", q:"Tik het BIJVOEGLIJK NAAMWOORD aan (een stoffelijk bn).",
          zin:"Storm kreeg een houten beeldje.", antwoord:[3], proef:"stof-proef",
          w:"'houten' (woord 3) zegt van welke stof het beeldje is → stoffelijk bijvoeglijk naamwoord. Het eindigt op -en en heeft geen trappen.",
          meer:"Stoffelijk bn: vaste vorm op -en, altijd vóór het zn, géén trappen van vergelijking."},
        {t:"ontleed", q:"Tik de TWEE bijvoeglijke naamwoorden aan.",
          zin:"Storm draagt een gouden, zware ketting.", antwoord:[3,4], proef:"bn-proef",
          w:"'gouden,' (woord 3, stoffelijk: van goud) en 'zware' (woord 4: zwaar–zwaarder–zwaarst) zijn allebei bijvoeglijke naamwoorden. 'gouden' heeft géén trappen, 'zware' wel."},
        {t:"mc", q:"Welk woord is een <b>stoffelijk</b> bijvoeglijk naamwoord (en heeft dus géén trappen)?",
          o:["koperen","mooi","snel"], a:"koperen",
          w:"'koperen' zegt van welke stof iets is (van koper), eindigt op -en en heeft geen trappen ('koperener' bestaat niet).",
          fout:{ "mooi":"'mooi' heeft wel trappen (mooi–mooier–mooist) → gewoon bijvoeglijk naamwoord.",
                 "snel":"'snel' heeft wel trappen (snel–sneller–snelst) → gewoon bijvoeglijk naamwoord." }}
      ]
    }
  ]
},

/* ===================== WOORDSOORT 4: werkwoord ===================== */
{
  id:"werkwoord", emoji:"🏃", titel:"Werkwoord",
  kort:"Een woord dat aangeeft wat er gebeurt. Het zelfstandig ww is het belangrijkste; hulpwerkwoorden (hebben, zijn, kunnen…) zijn extra.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Een <b>werkwoord</b> geeft aan wat er gebeurt. Het <b>zelfstandig werkwoord</b> (zww) is het <b>belangrijkste</b>: het zegt wat het onderwerp <i>doet</i>.",
        "Een <b>hulpwerkwoord</b> (hww) is <b>extra</b>. De bekendste zijn: <i>hebben, zijn, worden, zullen, kunnen, mogen</i>.",
        "Voorbeeld: <i>Storm <u>koopt</u> een bal</i> → 'koopt' is het zelfstandig werkwoord (waar het over gaat)."
      ],
      regel:"zww = belangrijkste ww (wat het onderwerp doet). hww = extra (hebben/zijn/worden/zullen/kunnen/mogen).",
      voorbeelden:[
        {en:"Storm tekent een paard.", let:"'tekent' zegt wat Storm doet → zelfstandig werkwoord."},
        {en:"Storm kan goed duiken.", let:"'kan' is extra (hulpwerkwoord), 'duiken' is het belangrijkste (zelfstandig werkwoord)."}
      ],
      vragen:[
        {t:"mc", q:"Welk woord is het werkwoord in: <i>Storm rent naar het veld.</i>",
          o:["rent","veld","naar"], a:"rent",
          w:"'rent' geeft aan wat Storm doet → werkwoord.",
          fout:{ "veld":"'veld' is een ding → zelfstandig naamwoord.",
                 "naar":"'naar' is een voorzetsel, geen werkwoord." }},
        {t:"mc", q:"Welk woord is een <b>hulpwerkwoord</b>?",
          o:["kunnen","tekenen","rennen"], a:"kunnen",
          w:"'kunnen' is een hulpwerkwoord (extra). 'tekenen' en 'rennen' zeggen wat je doet → zelfstandige werkwoorden.",
          fout:{ "tekenen":"'tekenen' zegt wat je doet → zelfstandig werkwoord.",
                 "rennen":"'rennen' zegt wat je doet → zelfstandig werkwoord." }},
        {t:"sleep", opgave:"Is het een zelfstandig werkwoord of een hulpwerkwoord?",
          chips:[{t:"hebben",bak:"hww"},{t:"zijn",bak:"hww"},{t:"kunnen",bak:"hww"},
                 {t:"duiken",bak:"zww"},{t:"tekenen",bak:"zww"},{t:"scoren",bak:"zww"}],
          bakjes:[{id:"zww",label:"zelfstandig werkwoord",som:""},{id:"hww",label:"hulpwerkwoord",som:""}],
          w:"Hulpwerkwoorden (hebben, zijn, kunnen…) zijn extra. Zelfstandige werkwoorden zeggen wat je echt doet."},
        {t:"vb", opgave:"Storm kan goed keepen.",
          waarom:{ q:"Welk woord is het zelfstandig werkwoord (waar het écht over gaat)?",
            o:["keepen","kan","goed"],
            a:"keepen"},
          fout:{"kan":"'kan' is een hulpwerkwoord — het helpt alleen. Het zelfstandig werkwoord, waar het écht over gaat, is 'keepen'.","goed":"'goed' zegt hóe Storm keept (een bijwoord). Het werkwoord, de echte actie, is 'keepen'."},
          stappen:[
            {toon:"Storm kan goed keepen.", uitleg:"Er staan twee werkwoorden: kan en keepen."},
            {toon:"'kan' = hulpwerkwoord", uitleg:"'kan' is extra; de zin gaat niet over 'kunnen'."},
            {toon:"'keepen' = zelfstandig werkwoord", uitleg:"Daar gaat de zin écht over → het belangrijkste werkwoord."} ]}
      ]
    },
    { n:2, naam:"Zilver",
      uitleg:[
        "Vaak staan er <b>meer werkwoorden</b> in één zin. Het <b>zelfstandig werkwoord</b> is waar de zin écht over gaat.",
        "De zin <i>Storm kan een bal kopen</i> gaat over <b>kopen</b> (zww), niet over <b>kunnen</b> (hww).",
        "Truc: vraag je af waar de zin over gáát. Dat werkwoord is het zelfstandig werkwoord; de rest zijn hulpwerkwoorden."
      ],
      regel:"Waar gaat de zin écht over? Dat ww = zelfstandig werkwoord. De andere ww zijn hulpwerkwoorden.",
      voorbeelden:[ {en:"Storm wil volgend jaar voetballen.", let:"De zin gaat over 'voetballen' (zww). 'wil' is extra (hww)."} ],
      vragen:[
        {t:"ontleed", q:"Tik het ZELFSTANDIG WERKWOORD aan (waar de zin over gaat).",
          zin:"Storm wil een doelpunt scoren.", antwoord:[4], proef:"waar-gaat-het-over",
          w:"De zin gaat over 'scoren' (woord 4) → zelfstandig werkwoord. 'wil' is extra → hulpwerkwoord."},
        {t:"stap", opgave:"Storm gaat volgend jaar voetballen.", w:"Zoek welk werkwoord het belangrijkste is.",
          meer:"De zin gaat over voetballen, niet over gaan. 'gaat' is dus het hulpwerkwoord.",
          stappen:[
            {prompt:"Waar gaat de zin écht over? (het zelfstandig werkwoord)", a:"voetballen", hints:["Wat gaat Storm doen?"]},
            {prompt:"Welk werkwoord is dan het hulpwerkwoord (het extra woord)?", a:"gaat", hints:["Het andere werkwoord in de zin"]} ]},
        {t:"ontleed", q:"Tik het HULPWERKWOORD aan.",
          zin:"Storm heeft een mooi paard getekend.", antwoord:[1], proef:"hww-proef",
          w:"'heeft' (woord 1) is het hulpwerkwoord (extra). 'getekend' is het zelfstandig werkwoord (waar het over gaat)."}
      ]
    },
    { n:3, naam:"Goud",
      uitleg:[
        "Soms staan er <b>meerdere hulpwerkwoorden</b> in één zin, met maar één zelfstandig werkwoord.",
        "Voorbeeld: <i>Storm <u>zou</u> een bal <u>kunnen</u> <b>kopen</b></i>. Hier zijn <i>zou</i> én <i>kunnen</i> allebei hulpwerkwoord, en <b>kopen</b> is het zelfstandig werkwoord.",
        "De zin gaat nog steeds maar over één ding (kopen). Alle 'extra' werkwoorden zijn hulpwerkwoorden."
      ],
      regel:"Eén zin kan meerdere hww hebben + één zww. 'zou kunnen kopen' → zou + kunnen = hww, kopen = zww.",
      voorbeelden:[ {en:"Storm zou volgend jaar kunnen voetballen.", let:"'zou' en 'kunnen' zijn allebei hww; 'voetballen' is het zww (waar het over gaat)."} ],
      vragen:[
        {t:"ontleed", q:"Tik de TWEE hulpwerkwoorden aan.",
          zin:"Storm zou een bal kunnen kopen.", antwoord:[1,4], proef:"hww-proef",
          w:"'zou' (woord 1) en 'kunnen' (woord 4) zijn allebei hulpwerkwoorden. 'kopen' (woord 5) is het zelfstandig werkwoord — daar gaat de zin over.",
          meer:"In één zin kunnen meerdere hulpwerkwoorden staan, maar er is meestal maar één zelfstandig werkwoord."},
        {t:"ontleed", q:"Tik het ZELFSTANDIG WERKWOORD aan.",
          zin:"Storm zou een bal kunnen kopen.", antwoord:[5], proef:"waar-gaat-het-over",
          w:"De zin gaat over 'kopen' (woord 5) → zelfstandig werkwoord. 'zou' en 'kunnen' zijn allebei extra → hulpwerkwoorden."},
        {t:"mc", q:"In <i>Storm zou kunnen winnen.</i> — welke woorden zijn de hulpwerkwoorden?",
          o:["zou en kunnen","alleen winnen","zou en winnen"], a:"zou en kunnen",
          w:"'zou' en 'kunnen' zijn extra → allebei hulpwerkwoord. 'winnen' is het zelfstandig werkwoord (waar het over gaat).",
          fout:{ "alleen winnen":"'winnen' is juist het zelfstandig werkwoord, geen hulpwerkwoord.",
                 "zou en winnen":"'winnen' is het zelfstandig werkwoord; 'kunnen' is het tweede hulpwerkwoord." }}
      ]
    }
  ]
},

/* ===================== WOORDSOORT 5: persoonlijk voornaamwoord ===================== */
{
  id:"persoonlijk-vnw", emoji:"🙋", titel:"Persoonlijk voornaamwoord",
  kort:"Een woord dat naar een persoon verwijst en een zelfstandig naamwoord vervangt: ik, jij, hij, wij, mij, hem, ons…",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Een <b>persoonlijk voornaamwoord</b> verwijst naar een <b>persoon</b> en vervangt een zelfstandig naamwoord (een naam).",
        "Onderwerpsvorm (de persoon die iets doet): <b>ik, jij, hij, zij, wij, jullie, zij</b>.",
        "Voorwerpsvorm (de persoon die iets ondergaat of ontvangt): <b>mij, jou, hem, haar, ons, hen</b>."
      ],
      regel:"Persoonlijk vnw verwijst naar personen. Onderwerpsvorm: ik/jij/hij/wij. Voorwerpsvorm: mij/jou/hem/ons.",
      voorbeelden:[
        {en:"Zij is keeper.", let:"'Zij' verwijst naar een persoon en is hier onderwerp → persoonlijk voornaamwoord (onderwerpsvorm)."},
        {en:"De trainer prees haar.", let:"'haar' verwijst naar een persoon en ondergaat het prijzen → persoonlijk voornaamwoord (voorwerpsvorm)."}
      ],
      vragen:[
        {t:"mc", q:"Welk woord is een persoonlijk voornaamwoord in: <i>Zij scoort een goal.</i>",
          o:["Zij","scoort","goal"], a:"Zij",
          w:"'Zij' verwijst naar een persoon en vervangt een naam → persoonlijk voornaamwoord.",
          fout:{ "scoort":"'scoort' is een werkwoord (wat ze doet).",
                 "goal":"'goal' is een ding → zelfstandig naamwoord." }},
        {t:"mc", q:"Welke is een <b>onderwerpsvorm</b> (de persoon die iets doet)?",
          o:["wij","ons","hem"], a:"wij",
          w:"'wij' is een onderwerpsvorm (wij doen iets). 'ons' en 'hem' zijn voorwerpsvormen.",
          fout:{ "ons":"'ons' is een voorwerpsvorm (er gebeurt iets met ons).",
                 "hem":"'hem' is een voorwerpsvorm (er gebeurt iets met hem)." }},
        {t:"sleep", opgave:"Onderwerpsvorm of voorwerpsvorm?",
          chips:[{t:"ik",bak:"ond"},{t:"jij",bak:"ond"},{t:"wij",bak:"ond"},
                 {t:"mij",bak:"voor"},{t:"hem",bak:"voor"},{t:"ons",bak:"voor"}],
          bakjes:[{id:"ond",label:"onderwerpsvorm (doet iets)",som:""},{id:"voor",label:"voorwerpsvorm (ondergaat iets)",som:""}],
          w:"ik/jij/hij/wij = onderwerpsvorm (doen iets). mij/jou/hem/ons = voorwerpsvorm (er gebeurt iets mee)."},
        {t:"vb", opgave:"Hij gaf mij de bal.",
          waarom:{ q:"Welke twee woorden zijn persoonlijke voornaamwoorden?",
            o:["Hij en mij","Hij en bal","gaf en mij"],
            a:"Hij en mij"},
          fout:{"Hij en bal":"'Hij' klopt, maar 'bal' is een zelfstandig naamwoord, geen voornaamwoord. Het tweede persoonlijk vnw is 'mij'.","gaf en mij":"'mij' klopt, maar 'gaf' is een werkwoord, geen voornaamwoord. Het andere persoonlijk vnw is 'Hij'."},
          stappen:[
            {toon:"Hij gaf mij de bal.", uitleg:"Zoek de woorden die naar personen verwijzen."},
            {toon:"'Hij' = onderwerpsvorm", uitleg:"Hij doet iets (geeft) → persoonlijk voornaamwoord."},
            {toon:"'mij' = voorwerpsvorm", uitleg:"Mij ontvangt iets → ook een persoonlijk voornaamwoord." }] }
      ]
    },
    { n:2, naam:"Zilver",
      uitleg:[
        "Let op het <b>verschil</b> tussen de onderwerpsvorm en de voorwerpsvorm. De onderwerpsvorm hoort bij wie iets <i>doet</i>.",
        "<i>Ik / jij / hij / zij / wij / jullie / zij</i> zijn onderwerpsvormen.",
        "<i>Mij / jou / hem / haar / ons / hen</i> zijn voorwerpsvormen — daar gebeurt iets mee."
      ],
      regel:"Onderwerpsvorm bij wie iets doet (ik/jij/hij/wij). Voorwerpsvorm bij wie iets ondergaat (mij/jou/hem/ons).",
      voorbeelden:[ {en:"Wij winnen de wedstrijd.", let:"'Wij' is de onderwerpsvorm: wij doen iets (winnen)."} ],
      vragen:[
        {t:"ontleed", q:"Tik het PERSOONLIJK VOORNAAMWOORD aan.",
          zin:"Hij scoort het winnende doelpunt.", antwoord:[0], proef:"verwijst-naar-persoon",
          w:"'Hij' (woord 0) verwijst naar een persoon en is de onderwerpsvorm → persoonlijk voornaamwoord."},
        {t:"stap", opgave:"De juf gaf hem een complimentje.", w:"Zoek het woord dat naar een persoon verwijst.",
          meer:"'hem' verwijst naar een persoon. Het is een voorwerpsvorm: er wordt iets aan hém gegeven.",
          stappen:[
            {prompt:"Welk woord verwijst naar een persoon (geen naam)?", a:"hem", hints:["Niet 'de juf' — een vervangend woordje"]},
            {prompt:"Is 'hem' een onderwerpsvorm of een voorwerpsvorm?", a:"voorwerpsvorm", hints:["Doet hij iets, of gebeurt er iets met hem?"]} ]},
        {t:"ontleed", q:"Tik de TWEE persoonlijke voornaamwoorden aan.",
          zin:"Wij gaven haar een knuffel.", antwoord:[0,2], proef:"verwijst-naar-persoon",
          w:"'Wij' (woord 0, onderwerpsvorm) en 'haar' (woord 2, voorwerpsvorm) verwijzen allebei naar personen → persoonlijke voornaamwoorden."}
      ]
    },
    { n:3, naam:"Goud",
      uitleg:[
        "Een <b>persoonlijk</b> voornaamwoord verwar je makkelijk met een <b>bezittelijk</b> voornaamwoord (dat zegt van wie iets is).",
        "<b>Truc:</b> kun je het woord vervangen door <i>hij</i> of <i>hem</i>? Dan is het een <b>persoonlijk</b> voornaamwoord.",
        "Kun je het vervangen door <i>zijn</i>? Dan is het een <b>bezittelijk</b> voornaamwoord. Let op: <i>haar</i> kan allebei zijn — gebruik dan de truc."
      ],
      regel:"Vervang-truc: past 'hij/hem' → persoonlijk vnw. Past 'zijn' → bezittelijk vnw.",
      voorbeelden:[ {en:"De trainer roept haar.", let:"Vervang 'haar' door 'hem': 'De trainer roept hem' → klopt → persoonlijk voornaamwoord (voorwerpsvorm)."} ],
      vragen:[
        {t:"ontleed", q:"Tik het PERSOONLIJK VOORNAAMWOORD aan. (Tip: past 'hem' ervoor in de plaats?)",
          zin:"De trainer prees haar na de wedstrijd.", antwoord:[3], proef:"hij-hem-truc",
          w:"Vervang 'haar' (woord 3) door 'hem': 'De trainer prees hem' → klopt → persoonlijk voornaamwoord. (Was het 'zijn' geweest, dan bezittelijk.)",
          meer:"Truc: past hij/hem → persoonlijk; past zijn → bezittelijk."},
        {t:"ontleed", q:"Tik het PERSOONLIJK VOORNAAMWOORD aan. (Let op: er staat ook een bezittelijk vnw!)",
          zin:"Zij pakt haar hockeystick.", antwoord:[0], proef:"hij-hem-truc",
          w:"'Zij' (woord 0): vervang door 'hij' → 'Hij pakt…' klopt → persoonlijk voornaamwoord. 'haar' (woord 2) kun je vervangen door 'zijn' (zijn hockeystick) → dát is bezittelijk, dus niet aantikken."},
        {t:"mc", q:"In welke zin is 'haar' een <b>persoonlijk</b> voornaamwoord (vervangbaar door 'hem')?",
          o:["De trainer roept haar.","Storm pakt haar bal.","Dit is haar jas."], a:"De trainer roept haar.",
          w:"'De trainer roept hem' klopt → persoonlijk voornaamwoord. Bij de andere zinnen past 'zijn' (zijn bal / zijn jas) → bezittelijk.",
          fout:{ "Storm pakt haar bal.":"Hier past 'zijn bal' → bezittelijk voornaamwoord.",
                 "Dit is haar jas.":"Hier past 'zijn jas' → bezittelijk voornaamwoord." }}
      ]
    }
  ]
},

/* ===================== WOORDSOORT 6: bezittelijk voornaamwoord ===================== */
{
  id:"bezittelijk-vnw", emoji:"🔑", titel:"Bezittelijk voornaamwoord",
  kort:"Een woord dat aangeeft van wie iets is: mijn, jouw, zijn, haar, onze, hun. Staat vaak vóór het zelfstandig naamwoord.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Een <b>bezittelijk voornaamwoord</b> geeft aan <b>van wie</b> iets is.",
        "De bekendste zijn: <b>mijn, jouw, zijn, haar, onze/ons, jullie, hun</b>.",
        "Voorbeeld: <i><u>mijn</u> hockeystick</i> (van mij), <i><u>haar</u> knuffel</i> (van haar). Het staat vaak vóór het zelfstandig naamwoord."
      ],
      regel:"Bezittelijk vnw = van wie iets is (mijn/jouw/zijn/haar/onze/hun). Staat vaak vóór het zn.",
      voorbeelden:[
        {en:"Storm pakt haar bal.", let:"'haar' geeft aan van wie de bal is → bezittelijk voornaamwoord."},
        {en:"Dat is onze klas.", let:"'onze' geeft aan van wie de klas is → bezittelijk voornaamwoord."}
      ],
      vragen:[
        {t:"mc", q:"Welk woord geeft aan van wie iets is, in: <i>Storm pakt haar hockeystick.</i>",
          o:["haar","hockeystick","pakt"], a:"haar",
          w:"'haar' geeft aan van wie de hockeystick is → bezittelijk voornaamwoord.",
          fout:{ "hockeystick":"'hockeystick' is een ding → zelfstandig naamwoord.",
                 "pakt":"'pakt' is een werkwoord (wat Storm doet)." }},
        {t:"mc", q:"Welk woord is een bezittelijk voornaamwoord?",
          o:["mijn","ik","mij"], a:"mijn",
          w:"'mijn' geeft aan van wie iets is (mijn tas). 'ik' en 'mij' zijn persoonlijke voornaamwoorden.",
          fout:{ "ik":"'ik' verwijst naar een persoon die iets doet → persoonlijk voornaamwoord.",
                 "mij":"'mij' verwijst naar een persoon die iets ondergaat → persoonlijk voornaamwoord." }},
        {t:"sleep", opgave:"Welke woorden zeggen van wie iets is (bezittelijk)?",
          chips:[{t:"mijn",bak:"wel"},{t:"jouw",bak:"wel"},{t:"zijn",bak:"wel"},
                 {t:"ik",bak:"geen"},{t:"hem",bak:"geen"},{t:"de",bak:"geen"}],
          bakjes:[{id:"wel",label:"bezittelijk (van wie)",som:""},{id:"geen",label:"iets anders",som:""}],
          w:"mijn/jouw/zijn zeggen van wie iets is. 'ik' en 'hem' zijn persoonlijke voornaamwoorden, 'de' is een lidwoord."},
        {t:"vb", opgave:"Dit is mijn knuffel.",
          waarom:{ q:"Welk woord geeft aan van wie de knuffel is?",
            o:["mijn","knuffel","Dit"],
            a:"mijn"},
          fout:{"knuffel":"'knuffel' is het ding zelf (zelfstandig naamwoord). Het woord dat aangeeft van wie hij is, is 'mijn'.","Dit":"'Dit' wijst alleen iets aan (aanwijzend vnw). Bezit — van wie de knuffel is — lees je in 'mijn'."},
          stappen:[
            {toon:"Dit is mijn knuffel.", uitleg:"Zoek het woord dat zegt van wie de knuffel is."},
            {toon:"→ mijn", uitleg:"'mijn' = van mij → bezittelijk voornaamwoord."},
            {toon:"'knuffel' is het zelfstandig naamwoord", uitleg:"'mijn' staat ervóór en hoort erbij." }] }
      ]
    },
    { n:2, naam:"Zilver",
      uitleg:[
        "Een bezittelijk voornaamwoord staat <b>vaak vóór</b> het zelfstandig naamwoord en zegt van wie het is.",
        "Lijstje: <i>mijn (van mij), jouw (van jou), zijn (van hem), haar (van haar), onze (van ons), jullie, hun</i>.",
        "Vraag jezelf af: <b>van wie</b> is dit? Het antwoord-woordje is het bezittelijk voornaamwoord."
      ],
      regel:"Vraag 'van wie is het?' → het bezittelijke woordje (mijn/jouw/zijn/haar/onze/hun) ervoor.",
      voorbeelden:[ {en:"Storm verloor zijn duikbril.", let:"Van wie is de duikbril? Van hem → 'zijn' is het bezittelijk voornaamwoord."} ],
      vragen:[
        {t:"ontleed", q:"Tik het BEZITTELIJK VOORNAAMWOORD aan.",
          zin:"Storm vergat haar zwembril.", antwoord:[2], proef:"van-wie-proef",
          w:"Van wie is de zwembril? Van haar → 'haar' (woord 2) is het bezittelijk voornaamwoord."},
        {t:"stap", opgave:"Wij ruimen onze spullen op.", w:"Vraag: van wie zijn de spullen?",
          meer:"Van ons → 'onze' is het bezittelijk voornaamwoord. Het staat vóór 'spullen'.",
          stappen:[
            {prompt:"Van wie zijn de spullen? Welk woordje zegt dat?", a:"onze", hints:["van ons → on…"]},
            {prompt:"Staat dat bezittelijk voornaamwoord vóór of achter 'spullen'?", a:"voor|ervoor|vóór", hints:["onze spullen → kijk waar 'onze' staat"]} ]},
        {t:"ontleed", q:"Tik de TWEE bezittelijke voornaamwoorden aan.",
          zin:"Storm pakt mijn bal en haar stick.", antwoord:[2,5], proef:"van-wie-proef",
          w:"'mijn' (woord 2, van mij) en 'haar' (woord 5, van haar) zeggen allebei van wie iets is → bezittelijke voornaamwoorden."}
      ]
    },
    { n:3, naam:"Goud",
      uitleg:[
        "Twijfel je of een woord bezittelijk is? Gebruik de <b>vervang-door-zijn-truc</b>.",
        "Kun je het woord vervangen door <i>zijn</i> en blijft de zin kloppen? Dan is het een <b>bezittelijk</b> voornaamwoord.",
        "Past <i>zijn</i> niet, maar wel <i>hij/hem</i>? Dan is het een <b>persoonlijk</b> voornaamwoord. Zo houd je 'haar' uit elkaar."
      ],
      regel:"Vervang-door-zijn-truc: past 'zijn' → bezittelijk vnw. Past 'hij/hem' → persoonlijk vnw.",
      voorbeelden:[ {en:"Storm pakt haar stick.", let:"Vervang 'haar' door 'zijn': 'Storm pakt zijn stick' → klopt → bezittelijk voornaamwoord."} ],
      vragen:[
        {t:"ontleed", q:"Tik het BEZITTELIJK VOORNAAMWOORD aan. (Tip: past 'zijn' ervoor in de plaats?)",
          zin:"Storm zoekt haar duikbril overal.", antwoord:[2], proef:"vervang-door-zijn",
          w:"Vervang 'haar' (woord 2) door 'zijn': 'Storm zoekt zijn duikbril' → klopt → bezittelijk voornaamwoord.",
          meer:"Truc: past zijn → bezittelijk; past hij/hem → persoonlijk."},
        {t:"ontleed", q:"Tik het BEZITTELIJK VOORNAAMWOORD aan. (Let op: er staat ook een persoonlijk vnw!)",
          zin:"Zij poetst haar schaatsen.", antwoord:[2], proef:"vervang-door-zijn",
          w:"'haar' (woord 2): vervang door 'zijn' (zijn schaatsen) → klopt → bezittelijk voornaamwoord. 'Zij' (woord 0) kun je vervangen door 'hij' → dát is persoonlijk, dus niet aantikken."},
        {t:"mc", q:"In welke zin is 'haar' een <b>bezittelijk</b> voornaamwoord (vervangbaar door 'zijn')?",
          o:["Storm pakt haar bal.","De trainer roept haar.","Hij ziet haar."], a:"Storm pakt haar bal.",
          w:"'Storm pakt zijn bal' klopt → bezittelijk voornaamwoord. Bij de andere zinnen past 'hem' (roept hem / ziet hem) → persoonlijk.",
          fout:{ "De trainer roept haar.":"Hier past 'hem' (roept hem) → persoonlijk voornaamwoord.",
                 "Hij ziet haar.":"Hier past 'hem' (ziet hem) → persoonlijk voornaamwoord." }}
      ]
    }
  ]
},

/* ===================== ZINSDEEL 1: persoonsvorm ===================== */
{
  id:"persoonsvorm", emoji:"⏱️", titel:"Persoonsvorm",
  kort:"Het werkwoord dat de tijd en het getal aangeeft. Vind je met de tijdproef, de getalproef of de vraagproef.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "In elke zin staan één of meer werkwoorden. Eentje daarvan is de <b>persoonsvorm</b> (afgekort: pv).",
        "De persoonsvorm geeft de <b>tijd</b> aan (nu of vroeger) en het <b>getal</b> (één of meer).",
        "Voorbeeld: <i>Storm <u>scoort</u> een doelpunt</i> → 'scoort' is de persoonsvorm; hij verandert in 'scoorde' als je het vroeger laat gebeuren."
      ],
      regel:"Persoonsvorm = het werkwoord dat de tijd en het getal aangeeft.",
      voorbeelden:[
        {en:"Storm tekent een paard.", let:"'tekent' geeft de tijd aan (nu) → persoonsvorm. Vroeger: 'tekende'."},
        {en:"De keepers stoppen de bal.", let:"'stoppen' is meervoud (de keepers) → persoonsvorm. Met één keeper: 'stopt'."}
      ],
      vragen:[
        {t:"mc", q:"Wat is de persoonsvorm in: <i>Storm aait haar knuffel.</i>",
          o:["aait","Storm","knuffel"], a:"aait",
          w:"'aait' is het werkwoord dat de tijd aangeeft (nu). Vroeger: 'aaide' → dat is de persoonsvorm.",
          fout:{ "Storm":"Storm is een naam → het onderwerp, geen persoonsvorm.",
                 "knuffel":"'knuffel' is een ding → zelfstandig naamwoord, geen werkwoord." }},
        {t:"mc", q:"Welk woord verandert als je de zin <b>vroeger</b> laat gebeuren? <i>Storm springt in het water.</i>",
          o:["springt → sprong","water → water","Storm → Storms"], a:"springt → sprong",
          w:"Het werkwoord 'springt' wordt 'sprong' → dat is de persoonsvorm. De andere woorden veranderen niet door de tijd.",
          fout:{ "water → water":"'water' is een zelfstandig naamwoord; de tijd verandert dat niet.",
                 "Storm → Storms":"Een naam verandert niet door de tijd; alleen het werkwoord doet dat." }},
        {t:"sleep", opgave:"Welk woord van elke zin is de persoonsvorm?",
          chips:[{t:"loopt (Storm loopt hard)",bak:"pv"},{t:"duikt (Storm duikt diep)",bak:"pv"},
                 {t:"bal (Storm pakt de bal)",bak:"geen"},{t:"snel (Storm rent snel)",bak:"geen"}],
          bakjes:[{id:"pv",label:"is de persoonsvorm",som:""},{id:"geen",label:"géén persoonsvorm",som:""}],
          w:"De persoonsvorm is altijd een werkwoord dat de tijd aangeeft. 'bal' is een ding, 'snel' zegt hoe iets gaat."},
        {t:"vb", opgave:"De keeper stopt de bal.",
          waarom:{ q:"Waarom is 'stopt' de persoonsvorm?",
            o:["Het verandert in 'stopte' bij een andere tijd","Het is een ding","Het zegt van wie de bal is"],
            a:"Het verandert in 'stopte' bij een andere tijd"},
          fout:{"Het is een ding":"'stopt' is geen ding maar een werkwoord. Het is de persoonsvorm omdat het van vorm verandert als je de tijd verandert (stopt → stopte).","Het zegt van wie de bal is":"dat doet 'stopt' niet. Het is de persoonsvorm omdat het meeverandert met de tijd: nu 'stopt', verleden tijd 'stopte'."},
          stappen:[
            {toon:"De keeper stopt de bal.", uitleg:"Zoek het werkwoord dat de tijd aangeeft."},
            {toon:"Vroeger: De keeper stopte de bal.", uitleg:"'stopt' wordt 'stopte' → het verandert door de tijd."},
            {toon:"→ stopt", uitleg:"Het werkwoord dat verandert door de tijd is de persoonsvorm."} ]}
      ]
    },
    { n:2, naam:"Zilver",
      uitleg:[
        "Vind de persoonsvorm met een <b>proef</b>. <b>Tijdproef:</b> zet de zin in een andere tijd; het werkwoord dat verandert, is de pv.",
        "<b>Getalproef:</b> verander het getal van het onderwerp (één ↔ meer); het werkwoord dat meeverandert, is de pv.",
        "<b>Vraagproef:</b> maak er een ja/nee-vraag van; de persoonsvorm springt dan naar <b>voren</b>."
      ],
      regel:"Tijdproef (andere tijd), getalproef (ander getal) of vraagproef (pv springt vooraan).",
      voorbeelden:[ {en:"Wij worden door mama opgehaald.", let:"Vraagproef: 'Worden wij door mama opgehaald?' → 'worden' springt naar voren → persoonsvorm."} ],
      vragen:[
        {t:"ontleed", q:"Tik de PERSOONSVORM aan.",
          zin:"Storm scoort een mooi doelpunt.", antwoord:[1], proef:"tijdproef",
          w:"Tijdproef: 'Storm scoorde een mooi doelpunt' → 'scoort' (woord 1) verandert in 'scoorde' → persoonsvorm."},
        {t:"stap", opgave:"De keepers stoppen elke bal.", w:"Gebruik de getalproef: maak het onderwerp enkelvoud.",
          meer:"Eén keeper: 'De keeper stopt elke bal.' Het werkwoord 'stoppen' wordt 'stopt' → dat is de persoonsvorm.",
          stappen:[
            {prompt:"Maak het onderwerp enkelvoud. Wat wordt 'de keepers'?", a:"de keeper", hints:["Van meer naar één: de keeper"]},
            {prompt:"Welk werkwoord verandert daardoor mee? (dat is de persoonsvorm)", a:"stoppen|stopt", hints:["stoppen → stopt"]} ]},
        {t:"ontleed", q:"Tik de PERSOONSVORM aan.",
          zin:"De keepers stoppen elke bal.", antwoord:[2], proef:"getalproef",
          w:"Getalproef: één keeper → 'stoppen' (woord 2) wordt 'stopt'. Het werkwoord dat meeverandert met het getal is de persoonsvorm."}
      ]
    },
    { n:3, naam:"Goud",
      uitleg:[
        "Soms staan er <b>meerdere werkwoorden</b> in een zin, maar er is altijd maar <b>één</b> persoonsvorm.",
        "Voorbeeld: <i>Storm <u>wil</u> leren duiken</i> → 'wil', 'leren' én 'duiken' zijn werkwoorden, maar alleen <b>wil</b> is de persoonsvorm.",
        "Truc: doe de tijdproef. Het werkwoord dat verandert (wil → wilde) is de persoonsvorm; de andere werkwoorden blijven hetzelfde."
      ],
      regel:"Bij meerdere werkwoorden is er maar één persoonsvorm: die verandert bij de tijdproef.",
      voorbeelden:[ {en:"Storm gaat volgend jaar voetballen.", let:"Tijdproef: 'Storm ging volgend jaar voetballen' → 'gaat' verandert (→ging), 'voetballen' niet → 'gaat' is de pv."} ],
      vragen:[
        {t:"ontleed", q:"Tik de PERSOONSVORM aan. (Let op: er staan meer werkwoorden!)",
          zin:"Storm wil volgend jaar leren duiken.", antwoord:[1], proef:"tijdproef",
          w:"Tijdproef: 'Storm wilde volgend jaar leren duiken' → alleen 'wil' (woord 1) verandert in 'wilde'. 'leren' en 'duiken' blijven gelijk → 'wil' is de persoonsvorm.",
          meer:"In één zin staat altijd maar één persoonsvorm, ook als er meer werkwoorden zijn."},
        {t:"ontleed", q:"Tik de PERSOONSVORM aan. (Let op: er staan meer werkwoorden!)",
          zin:"Storm heeft een paard getekend.", antwoord:[1], proef:"tijdproef",
          w:"Tijdproef: 'Storm had een paard getekend' → 'heeft' (woord 1) verandert in 'had'. 'getekend' blijft gelijk → 'heeft' is de persoonsvorm."},
        {t:"mc", q:"In <i>Storm kan heel goed keepen.</i> — welk werkwoord is de persoonsvorm?",
          o:["kan","keepen","goed"], a:"kan",
          w:"Tijdproef: 'Storm kon heel goed keepen' → 'kan' wordt 'kon' (verandert), 'keepen' blijft gelijk → 'kan' is de persoonsvorm.",
          fout:{ "keepen":"'keepen' verandert niet bij de tijdproef → het is wel een werkwoord, maar niet de persoonsvorm.",
                 "goed":"'goed' is geen werkwoord; het zegt hóe Storm keept." }}
      ]
    }
  ]
},

/* ===================== ZINSDEEL 2: zinsdelen ===================== */
{
  id:"zinsdelen", emoji:"🧩", titel:"Zinsdelen",
  kort:"Groepjes woorden die in de zin bij elkaar horen. Vind ze met de verschuifproef: wat je vóór de pv kunt zetten is één zinsdeel.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Een zin kun je in stukjes knippen: dat zijn de <b>zinsdelen</b>. Een zinsdeel is één woord óf een groepje woorden dat bij elkaar hoort.",
        "In een gewone zin staat de persoonsvorm op de <b>tweede plaats</b>. Alles wat je vóór de pv kunt zetten, is samen één zinsdeel.",
        "Voorbeeld: <i>Meneer Bax | gooit | een stift | door de klas</i> → vier zinsdelen. 'een stift' hoort bij elkaar."
      ],
      regel:"Zinsdeel = woord of groepje woorden dat bij elkaar hoort. De pv staat op de tweede plaats.",
      voorbeelden:[
        {en:"De boze keeper stopt de bal.", let:"Zinsdelen: 'De boze keeper' | 'stopt' | 'de bal'. De drie woorden 'De boze keeper' horen bij elkaar."},
        {en:"Storm tekent een groot paard.", let:"Zinsdelen: 'Storm' | 'tekent' | 'een groot paard'. 'een groot paard' is samen één zinsdeel."}
      ],
      vragen:[
        {t:"mc", q:"Welke woorden vormen samen één zinsdeel in: <i>De boze keeper stopt de bal.</i>",
          o:["De boze keeper","keeper stopt","stopt de"], a:"De boze keeper",
          w:"'De boze keeper' hoort bij elkaar (lidwoord + bijvoeglijk naamwoord + zelfstandig naamwoord) → één zinsdeel.",
          fout:{ "keeper stopt":"'stopt' is een werkwoord en hoort er niet bij; werkwoorden zijn losse zinsdelen.",
                 "stopt de":"'de' hoort bij 'bal', niet bij 'stopt'." }},
        {t:"mc", q:"Op welke plaats staat de persoonsvorm in een <b>gewone</b> zin?",
          o:["op de tweede plaats","helemaal vooraan","helemaal achteraan"], a:"op de tweede plaats",
          w:"In een gewone zin staat de persoonsvorm altijd op de tweede plaats. Alleen in een vraagzin staat hij vooraan.",
          fout:{ "helemaal vooraan":"Dat is alleen in een vraagzin zo (Stopt de keeper de bal?).",
                 "helemaal achteraan":"De persoonsvorm staat nooit standaard achteraan in een gewone zin." }},
        {t:"sleep", opgave:"Hoort dit bij elkaar als één zinsdeel of niet?",
          chips:[{t:"een grote bal",bak:"wel"},{t:"de snelle keeper",bak:"wel"},
                 {t:"gooit een",bak:"geen"},{t:"keeper stopt",bak:"geen"}],
          bakjes:[{id:"wel",label:"hoort bij elkaar (één zinsdeel)",som:""},{id:"geen",label:"hoort NIET bij elkaar",som:""}],
          w:"Lidwoord + bijvoeglijk naamwoord + zelfstandig naamwoord horen bij elkaar. Een werkwoord is altijd een los zinsdeel."},
        {t:"vb", opgave:"Storm gooit een rode bal.",
          waarom:{ q:"Welke woorden vormen samen één zinsdeel?",
            o:["een rode bal","gooit een","Storm gooit"],
            a:"een rode bal"},
          fout:{"gooit een":"deze twee horen niet bij elkaar: 'gooit' is het gezegde, 'een' hoort bij 'bal'. Eén zinsdeel is 'een rode bal'.","Storm gooit":"'Storm' en 'gooit' zijn twee aparte zinsdelen (onderwerp + gezegde). Het zinsdeel dat bij elkaar hoort is 'een rode bal'."},
          stappen:[
            {toon:"Storm gooit een rode bal.", uitleg:"De persoonsvorm 'gooit' staat op de tweede plaats."},
            {toon:"Storm | gooit | een rode bal", uitleg:"'een rode bal' hoort bij elkaar: lidwoord + bijvoeglijk naamwoord + zelfstandig naamwoord."},
            {toon:"→ een rode bal", uitleg:"Dat groepje is samen één zinsdeel."} ]}
      ]
    },
    { n:2, naam:"Zilver",
      uitleg:[
        "Vind een zinsdeel met de <b>verschuifproef</b>: zet een woord of groepje vóór de persoonsvorm. Klinkt de zin nog goed? Dan is het samen één zinsdeel.",
        "<i>Meneer Bax gooit een stift door de klas</i> → ✓ <i>Een stift gooit meneer Bax door de klas</i>. 'een stift' kan naar voren → één zinsdeel.",
        "Onthoud: een werkwoord is altijd een los zinsdeel; het schuift nooit met de andere woorden mee."
      ],
      regel:"Verschuifproef: wat je vóór de pv kunt zetten zonder dat de zin raar wordt, is één zinsdeel.",
      voorbeelden:[ {en:"Storm pakt een nieuwe stick.", let:"Verschuifproef: 'Een nieuwe stick pakt Storm' → klopt → 'een nieuwe stick' is één zinsdeel."} ],
      vragen:[
        {t:"ontleed", q:"Tik de woorden aan die samen ÉÉN zinsdeel vormen (het deel met 'stift').",
          zin:"Meneer Bax gooit een stift door de klas.", antwoord:[3,4], proef:"verschuifproef",
          w:"Verschuifproef: 'Een stift gooit meneer Bax door de klas' → klopt. 'een' (woord 3) en 'stift' (woord 4) horen samen → één zinsdeel."},
        {t:"stap", opgave:"Door de klas gooit meneer Bax een stift.", w:"Gebruik de verschuifproef om te checken of 'door de klas' één zinsdeel is.",
          meer:"'Door de klas' staat nu vóór de persoonsvorm 'gooit' en de zin klopt → het is samen één zinsdeel.",
          stappen:[
            {prompt:"Welk werkwoord is de persoonsvorm in deze zin?", a:"gooit", hints:["Welk werkwoord verandert bij de tijdproef? gooit → gooide"]},
            {prompt:"Klinkt de zin goed met 'door de klas' vooraan? (ja of nee)", a:"ja", hints:["Lees hardop: Door de klas gooit meneer Bax een stift. Klopt dat?"]} ]},
        {t:"ontleed", q:"Tik de woorden aan die samen ÉÉN zinsdeel vormen (het deel met 'klas').",
          zin:"Meneer Bax gooit een stift door de klas.", antwoord:[5,6,7], proef:"verschuifproef",
          w:"'door' (5), 'de' (6) en 'klas.' (7) horen bij elkaar. Verschuifproef: 'Door de klas gooit meneer Bax een stift' → klopt → één zinsdeel."}
      ]
    },
    { n:3, naam:"Goud",
      uitleg:[
        "Bij het verschuiven blijven de woorden van een zinsdeel <b>in dezelfde volgorde</b> bij elkaar. Je mag ze niet door elkaar husselen.",
        "Test ook of iets juist <b>niet</b> bij elkaar hoort: <i>✗ Een stift door de klas gooit meneer Bax</i> klinkt raar → 'een stift door de klas' is dus géén zinsdeel.",
        "Een zin heeft dus vaste blokjes die als geheel naar voren schuiven, en het werkwoord blijft altijd los."
      ],
      regel:"Een zinsdeel schuift als geheel én in dezelfde volgorde mee; husselen mag niet.",
      voorbeelden:[ {en:"Storm legt zijn knuffel op het bed.", let:"'op het bed' schuift als blok naar voren: 'Op het bed legt Storm zijn knuffel' → klopt. 'het bed op' husselen mag niet."} ],
      vragen:[
        {t:"ontleed", q:"Tik de woorden aan die samen ÉÉN zinsdeel vormen (het deel met 'bed').",
          zin:"Storm legt zijn knuffel op het bed.", antwoord:[4,5,6], proef:"verschuifproef",
          w:"'op' (4), 'het' (5) en 'bed.' (6) schuiven samen naar voren: 'Op het bed legt Storm zijn knuffel' → klopt → één zinsdeel. De volgorde blijft gelijk.",
          meer:"Een zinsdeel schuift als geheel mee, in dezelfde volgorde."},
        {t:"stap", opgave:"Op het bed legt Storm zijn knuffel.", w:"Check met de verschuifproef of 'op het bed' als geheel, in dezelfde volgorde, bij elkaar hoort.",
          meer:"'op het bed' staat nu vóór de persoonsvorm 'legt' en de zin klopt → het is samen één zinsdeel. Husselen ('het bed op') mag niet.",
          stappen:[
            {prompt:"Welk werkwoord is de persoonsvorm in deze zin?", a:"legt", hints:["Tijdproef: legt → legde"]},
            {prompt:"Klinkt de zin nog goed met 'op het bed' als één blok vooraan? (ja of nee)", a:"ja", hints:["Lees hardop: Op het bed legt Storm zijn knuffel. Klopt dat?"]} ]},
        {t:"mc", q:"Waarom is 'een stift door de klas' GÉÉN zinsdeel in <i>Meneer Bax gooit een stift door de klas.</i>?",
          o:["'Een stift door de klas gooit meneer Bax' klinkt raar","Omdat het te lang is","Omdat er een werkwoord in zit"], a:"'Een stift door de klas gooit meneer Bax' klinkt raar",
          w:"De verschuifproef mislukt: je kunt 'een stift door de klas' niet als één geheel vóór de pv zetten → het zijn twee aparte zinsdelen.",
          fout:{ "Omdat het te lang is":"Lengte bepaalt niet of iets een zinsdeel is; de verschuifproef wel.",
                 "Omdat er een werkwoord in zit":"In 'een stift door de klas' zit geen werkwoord; het mislukt op de verschuifproef." }}
      ]
    }
  ]
},

/* ===================== ZINSDEEL 3: werkwoordelijk gezegde ===================== */
{
  id:"werkwoordelijk-gezegde", emoji:"⚙️", titel:"Werkwoordelijk gezegde",
  kort:"Alle werkwoorden van de zin samen (ook de persoonsvorm). Soms komen er nog woorden bij, zoals bij een gesplitst werkwoord.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Het <b>werkwoordelijk gezegde</b> (afgekort: wg) bestaat uit <b>alle werkwoorden</b> van één zin. De persoonsvorm hoort er dus ook bij.",
        "Voorbeeld: <i>Morgen <u>gaat</u> Storm <u>zwemmen</u></i> → 'gaat' en 'zwemmen' zijn samen het werkwoordelijk gezegde.",
        "Soms is het maar één werkwoord: <i>De keeper <u>stopt</u> de bal</i> → 'stopt' is in z'n eentje het werkwoordelijk gezegde."
      ],
      regel:"Werkwoordelijk gezegde = alle werkwoorden van de zin samen (inclusief de persoonsvorm).",
      voorbeelden:[
        {en:"Storm heeft mooi getekend.", let:"'heeft' en 'getekend' zijn samen het werkwoordelijk gezegde (twee werkwoorden)."},
        {en:"De keeper duikt.", let:"'duikt' is het enige werkwoord → in z'n eentje het werkwoordelijk gezegde."}
      ],
      vragen:[
        {t:"mc", q:"Wat hoort allemaal bij het werkwoordelijk gezegde?",
          o:["alle werkwoorden van de zin","alleen het laatste werkwoord","de zelfstandige naamwoorden"], a:"alle werkwoorden van de zin",
          w:"Het werkwoordelijk gezegde bestaat uit álle werkwoorden van de zin samen, dus ook de persoonsvorm.",
          fout:{ "alleen het laatste werkwoord":"Niet alleen het laatste; álle werkwoorden horen erbij.",
                 "de zelfstandige naamwoorden":"Die horen bij het onderwerp of een voorwerp, niet bij het werkwoordelijk gezegde." }},
        {t:"mc", q:"Wat is het werkwoordelijk gezegde in: <i>Storm gaat morgen zwemmen.</i>",
          o:["gaat zwemmen","gaat","morgen"], a:"gaat zwemmen",
          w:"'gaat' en 'zwemmen' zijn allebei werkwoorden → samen het werkwoordelijk gezegde.",
          fout:{ "gaat":"'gaat' is wel een werkwoord, maar 'zwemmen' hoort er ook bij.",
                 "morgen":"'morgen' is geen werkwoord; het zegt wanneer." }},
        {t:"sleep", opgave:"Welk woord is een werkwoord (hoort bij het werkwoordelijk gezegde) en welk niet?",
          chips:[{t:"heeft",bak:"ww"},{t:"getekend",bak:"ww"},{t:"zwemmen",bak:"ww"},
                 {t:"paard",bak:"geen"},{t:"morgen",bak:"geen"},{t:"snel",bak:"geen"}],
          bakjes:[{id:"ww",label:"werkwoord (hoort bij het wg)",som:""},{id:"geen",label:"géén werkwoord",som:""}],
          w:"Het werkwoordelijk gezegde bestaat uit werkwoorden. 'paard' is een ding, 'morgen' zegt wanneer, 'snel' zegt hoe."},
        {t:"vb", opgave:"De popster heeft mooi gezongen.",
          waarom:{ q:"Welke woorden vormen samen het werkwoordelijk gezegde?",
            o:["heeft en gezongen","alleen gezongen","heeft en mooi"],
            a:"heeft en gezongen"},
          fout:{"alleen gezongen":"'gezongen' is maar de helft. Het hulpwerkwoord 'heeft' hoort er ook bij: samen 'heeft gezongen'.","heeft en mooi":"'heeft' klopt, maar 'mooi' is geen werkwoord (het zegt hóe ze zong). Het gezegde is 'heeft gezongen'."},
          stappen:[
            {toon:"De popster heeft mooi gezongen.", uitleg:"Zoek alle werkwoorden in de zin."},
            {toon:"heeft = persoonsvorm, gezongen = voltooid deelwoord", uitleg:"Allebei zijn het werkwoorden."},
            {toon:"→ heeft gezongen", uitleg:"Samen vormen ze het werkwoordelijk gezegde. ('mooi' zegt hóe en hoort er niet bij.)"} ]}
      ]
    },
    { n:2, naam:"Zilver",
      uitleg:[
        "Het werkwoordelijk gezegde kan op verschillende manieren eruitzien. Het is altijd de persoonsvorm, vaak mét een tweede werkwoord erbij.",
        "Vormen: (1) alleen pv · (2) pv + heel werkwoord (gaat zwemmen) · (3) pv + voltooid deelwoord (heeft gezongen).",
        "Ook: (4) pv + te + werkwoord (zit te staren) · (5) pv + aan het + werkwoord (is aan het bellen)."
      ],
      regel:"Het wg is de pv plus eventueel een tweede werkwoord (heel ww, voltooid deelwoord, te + ww of aan het + ww).",
      voorbeelden:[ {en:"Storm zit te tekenen.", let:"'zit te tekenen' is het werkwoordelijk gezegde (pv + te + werkwoord)."} ],
      vragen:[
        {t:"ontleed", q:"Tik de TWEE werkwoorden aan die samen het WERKWOORDELIJK GEZEGDE vormen.",
          zin:"Storm heeft een paard getekend.", antwoord:[1,4], proef:"alle-werkwoorden",
          w:"'heeft' (woord 1, persoonsvorm) en 'getekend' (woord 4, voltooid deelwoord) zijn samen het werkwoordelijk gezegde."},
        {t:"stap", opgave:"Storm is de hele dag aan het tekenen.", w:"Zoek alle werkwoorden: dat is samen het werkwoordelijk gezegde.",
          meer:"Vorm: pv + aan het + werkwoord. 'is … aan het tekenen' is het werkwoordelijk gezegde.",
          stappen:[
            {prompt:"Welk werkwoord is de persoonsvorm?", a:"is", hints:["Tijdproef: is → was"]},
            {prompt:"Welk ander werkwoord hoort erbij (na 'aan het')?", a:"tekenen", hints:["… aan het tekenen"]} ]},
        {t:"ontleed", q:"Tik de TWEE werkwoorden aan die samen het WERKWOORDELIJK GEZEGDE vormen.",
          zin:"Morgen gaat Storm voetballen.", antwoord:[1,3], proef:"alle-werkwoorden",
          w:"'gaat' (woord 1, persoonsvorm) en 'voetballen' (woord 3, heel werkwoord) zijn samen het werkwoordelijk gezegde."}
      ]
    },
    { n:3, naam:"Goud",
      uitleg:[
        "De lastigste vorm is het <b>gesplitst werkwoord</b>: het werkwoord is in twee stukken uit elkaar gehaald.",
        "Voorbeeld: <i>Floor <u>ruimde</u> gisteren haar kamer <u>op</u></i> → het werkwoord is <b>opruimen</b>; 'ruimde' staat vooraan en 'op' helemaal achteraan.",
        "Allebei de stukjes ('ruimde' én 'op') horen samen bij het werkwoordelijk gezegde, ook al staan er woorden tussen."
      ],
      regel:"Gesplitst werkwoord: beide stukjes (bv. ruimde … op = opruimen) horen samen bij het wg.",
      voorbeelden:[ {en:"Storm belt zijn oma op.", let:"Het werkwoord is 'opbellen'; 'belt' en 'op' zijn samen het werkwoordelijk gezegde."} ],
      vragen:[
        {t:"ontleed", q:"Tik de TWEE stukjes aan die samen het WERKWOORDELIJK GEZEGDE vormen (gesplitst werkwoord).",
          zin:"Floor ruimde gisteren haar kamer op.", antwoord:[1,5], proef:"gesplitst-ww",
          w:"Het werkwoord is 'opruimen'. 'ruimde' (woord 1) en 'op.' (woord 5) horen samen bij het werkwoordelijk gezegde, ook al staan er woorden tussen.",
          meer:"Bij een gesplitst werkwoord horen beide stukjes bij het werkwoordelijk gezegde."},
        {t:"ontleed", q:"Tik de TWEE stukjes aan die samen het WERKWOORDELIJK GEZEGDE vormen (gesplitst werkwoord).",
          zin:"Storm belt zijn oma op.", antwoord:[1,4], proef:"gesplitst-ww",
          w:"Het werkwoord is 'opbellen'. 'belt' (woord 1) en 'op.' (woord 4) horen samen bij het werkwoordelijk gezegde."},
        {t:"mc", q:"In <i>Storm ruimt zijn kamer op.</i> — uit welke twee stukjes bestaat het gesplitste werkwoord?",
          o:["ruimt en op","ruimt en kamer","zijn en op"], a:"ruimt en op",
          w:"Het werkwoord is 'opruimen'; het is gesplitst in 'ruimt' (vooraan) en 'op' (achteraan).",
          fout:{ "ruimt en kamer":"'kamer' is een ding (zelfstandig naamwoord), geen deel van het werkwoord.",
                 "zijn en op":"'zijn' is hier een bezittelijk voornaamwoord (van wie de kamer is), geen werkwoord." }}
      ]
    }
  ]
},

/* ===================== ZINSDEEL 4: onderwerp ===================== */
{
  id:"onderwerp", emoji:"🦸", titel:"Onderwerp",
  kort:"Wie of wat iets doet of is. Vraag: wie/wat + alle werkwoorden? Onderwerp en persoonsvorm hebben altijd hetzelfde getal.",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "In elke zin <b>doet</b> of <b>is</b> iemand iets. Wie of wat dat doet, is het <b>onderwerp</b>.",
        "Het onderwerp kan een mens zijn, maar ook een dier, een ding of zelfs een gevoel.",
        "Voorbeeld: <i><u>Storm</u> scoort een doelpunt</i> → wie scoort? Storm → 'Storm' is het onderwerp."
      ],
      regel:"Onderwerp = wie of wat iets doet of is in de zin.",
      voorbeelden:[
        {en:"De keeper stopt de bal.", let:"Wie stopt? → de keeper → dat is het onderwerp."},
        {en:"Het paard rent door de wei.", let:"Wie/wat rent? → het paard → onderwerp (een dier kan ook onderwerp zijn)."}
      ],
      vragen:[
        {t:"mc", q:"Wat is het onderwerp in: <i>Storm tekent een paard.</i>",
          o:["Storm","een paard","tekent"], a:"Storm",
          w:"Wie tekent? → Storm. Degene die iets doet, is het onderwerp.",
          fout:{ "een paard":"'een paard' ondergáát het tekenen → dat is het lijdend voorwerp, niet het onderwerp.",
                 "tekent":"'tekent' is het werkwoord, geen onderwerp." }},
        {t:"mc", q:"Welke vraag helpt je het onderwerp te vinden?",
          o:["Wie of wat + alle werkwoorden?","Van wie is het?","Hoe gaat het?"], a:"Wie of wat + alle werkwoorden?",
          w:"Het onderwerp vind je met de vraag: wie of wat + alle werkwoorden van de zin?",
          fout:{ "Van wie is het?":"Dat is de vraag voor een bezittelijk voornaamwoord.",
                 "Hoe gaat het?":"Daarmee vind je een bijvoeglijk naamwoord, niet het onderwerp." }},
        {t:"sleep", opgave:"Wat is het onderwerp van elke zin?",
          chips:[{t:"Storm (Storm duikt diep)",bak:"o"},{t:"de keeper (de keeper springt)",bak:"o"},
                 {t:"bal (Storm pakt de bal)",bak:"geen"},{t:"tekent (Storm tekent)",bak:"geen"}],
          bakjes:[{id:"o",label:"is het onderwerp",som:""},{id:"geen",label:"géén onderwerp",som:""}],
          w:"Het onderwerp is wie/wat iets doet. 'bal' ondergaat iets (lijdend voorwerp), 'tekent' is het werkwoord."},
        {t:"vb", opgave:"De boze keeper stopt de bal.",
          waarom:{ q:"Wie of wat is het onderwerp?",
            o:["De boze keeper","de bal","stopt"],
            a:"De boze keeper"},
          fout:{"de bal":"'de bal' ondergaat het stoppen, dat is het lijdend voorwerp. Het onderwerp is wie stopt: 'De boze keeper'.","stopt":"'stopt' is het werkwoord (de persoonsvorm). Het onderwerp is wie die actie doet: 'De boze keeper'."},
          stappen:[
            {toon:"De boze keeper stopt de bal.", uitleg:"Stel de vraag: wie of wat stopt?"},
            {toon:"→ de boze keeper", uitleg:"Degene die het doet is het onderwerp; de drie woorden horen bij elkaar."},
            {toon:"'de bal' is geen onderwerp", uitleg:"De bal ondergáát het stoppen → dat is het lijdend voorwerp." }] }
      ]
    },
    { n:2, naam:"Zilver",
      uitleg:[
        "Vind het onderwerp met de <b>vraagproef</b>: <i>wie of wat</i> + alle werkwoorden van de zin? Het antwoord is het onderwerp.",
        "Of gebruik de <b>getalproef</b>: verander de persoonsvorm van één naar meer (of andersom). Het zinsdeel dat meeverandert, is het onderwerp.",
        "Belangrijk: het onderwerp en de persoonsvorm hebben <b>altijd hetzelfde getal</b> (allebei één, of allebei meer)."
      ],
      regel:"Vraagproef: wie/wat + alle werkwoorden? Getalproef: het zinsdeel dat meeverandert met de pv is het onderwerp.",
      voorbeelden:[ {en:"De boze keeper stopte de bal.", let:"Wie stopte? → de boze keeper. Getalproef: 'De boze keepers stopten' → het onderwerp verandert mee."} ],
      vragen:[
        {t:"ontleed", q:"Tik de woorden aan die samen het ONDERWERP vormen.",
          zin:"De boze keeper stopte de bal.", antwoord:[0,1,2], proef:"vraagproef",
          w:"Wie stopte? → de boze keeper. 'De' (0), 'boze' (1) en 'keeper' (2) horen samen → het onderwerp."},
        {t:"stap", opgave:"De meisjes lachen hard.", w:"Gebruik de getalproef: maak de persoonsvorm enkelvoud.",
          meer:"'De meisjes lachen' → enkelvoud: 'Het meisje lacht'. Het zinsdeel dat meeverandert (de meisjes → het meisje) is het onderwerp.",
          stappen:[
            {prompt:"Maak de persoonsvorm enkelvoud. Wat wordt 'lachen'?", a:"lacht", hints:["lachen → lacht"]},
            {prompt:"Welk zinsdeel verandert daardoor mee? (dat is het onderwerp)", a:"de meisjes|het meisje|de meisjes (het meisje)", hints:["de meisjes → het meisje"]} ]},
        {t:"ontleed", q:"Tik de woorden aan die samen het ONDERWERP vormen.",
          zin:"Het snelle paard wint de race.", antwoord:[0,1,2], proef:"vraagproef",
          w:"Wie/wat wint? → het snelle paard. 'Het' (0), 'snelle' (1) en 'paard' (2) horen samen → het onderwerp."}
      ]
    },
    { n:3, naam:"Goud",
      uitleg:[
        "Let op deze valkuil: het onderwerp begint <b>nooit met een voorzetsel</b> (in, op, naar, met, door, achter, aan, om …).",
        "Voorbeeld: <i>In het zwembad oefent <u>Storm</u> haar duik</i> → 'In het zwembad' begint met 'in' (voorzetsel) → dat kan het onderwerp niet zijn. Het onderwerp is 'Storm'.",
        "Stel altijd de vraag (wie/wat + alle werkwoorden) en check daarna of het antwoord niet met een voorzetsel begint."
      ],
      regel:"Het onderwerp begint nooit met een voorzetsel (in, op, naar, met, door …).",
      voorbeelden:[ {en:"Op het veld traint de keeper hard.", let:"'Op het veld' begint met 'op' → geen onderwerp. Wie traint? → de keeper → dat is het onderwerp."} ],
      vragen:[
        {t:"ontleed", q:"Tik de woorden aan die samen het ONDERWERP vormen. (Let op het voorzetsel!)",
          zin:"In het zwembad oefent Storm haar duik.", antwoord:[4], proef:"vraagproef",
          w:"Wie oefent? → Storm (woord 4). 'In het zwembad' begint met 'in' (voorzetsel) → dat kan het onderwerp niet zijn.",
          meer:"Het onderwerp begint nooit met een voorzetsel."},
        {t:"ontleed", q:"Tik de woorden aan die samen het ONDERWERP vormen. (Let op het voorzetsel!)",
          zin:"Op het veld traint de keeper hard.", antwoord:[4,5], proef:"vraagproef",
          w:"Wie traint? → de keeper. 'de' (4) en 'keeper' (5) horen samen → het onderwerp. 'Op het veld' begint met 'op' (voorzetsel) → géén onderwerp."},
        {t:"mc", q:"Waarom is 'In het zwembad' GÉÉN onderwerp in <i>In het zwembad oefent Storm haar duik.</i>?",
          o:["Het begint met een voorzetsel (in)","Het staat vooraan","Het zijn drie woorden"], a:"Het begint met een voorzetsel (in)",
          w:"Een onderwerp begint nooit met een voorzetsel. 'In het zwembad' begint met 'in' → het kan dus niet het onderwerp zijn. Het onderwerp is 'Storm'.",
          fout:{ "Het staat vooraan":"Een onderwerp mág vooraan staan; dat is hier het probleem niet.",
                 "Het zijn drie woorden":"Een onderwerp mag uit meerdere woorden bestaan; dat maakt niet uit." }}
      ]
    }
  ]
},

/* ===================== ZINSDEEL 5: meewerkend voorwerp ===================== */
{
  id:"meewerkend-voorwerp", emoji:"🎁", titel:"Meewerkend voorwerp",
  kort:"Wie of wat iets ontvangt. Je kunt er 'aan' bij denken. Vraag: aan wie/wat + wg + onderwerp + lijdend voorwerp?",
  niveaus:[
    { n:1, naam:"Brons",
      uitleg:[
        "Soms gaat iets van de één naar de ander. Degene die het <b>ontvangt</b>, is het <b>meewerkend voorwerp</b> (afgekort: mv).",
        "Truc: je kunt er vaak het woordje <b>'aan'</b> bij denken. <i>Erwin schreef een brief <u>aan Suze</u></i> → 'aan Suze' is het meewerkend voorwerp.",
        "Voorbeeld: <i>De juf gaf <u>de klas</u> een toets</i> → wie ontvangt de toets? De klas → meewerkend voorwerp ('aan de klas')."
      ],
      regel:"Meewerkend voorwerp = wie/wat iets ontvangt. Je kunt er 'aan' bij denken.",
      voorbeelden:[
        {en:"Storm gaf zijn zus een knuffel.", let:"Wie ontving de knuffel? → zijn zus ('aan zijn zus') → meewerkend voorwerp."},
        {en:"De trainer gaf het team een tip.", let:"Wie ontving de tip? → het team ('aan het team') → meewerkend voorwerp."}
      ],
      vragen:[
        {t:"mc", q:"Wat is het meewerkend voorwerp in: <i>Storm gaf zijn zus een knuffel.</i>",
          o:["zijn zus","een knuffel","gaf"], a:"zijn zus",
          w:"Wie ontving de knuffel? → zijn zus. Je kunt er 'aan' bij denken (aan zijn zus) → meewerkend voorwerp.",
          fout:{ "een knuffel":"'een knuffel' is wat gegeven wordt → het lijdend voorwerp, niet het meewerkend voorwerp.",
                 "gaf":"'gaf' is het werkwoord (werkwoordelijk gezegde), geen voorwerp." }},
        {t:"mc", q:"Welk woordje kun je vaak bij een meewerkend voorwerp denken?",
          o:["aan","door","omdat"], a:"aan",
          w:"Bij een meewerkend voorwerp kun je vaak 'aan' denken: aan wie gaat het? (aan Suze, aan het team).",
          fout:{ "door":"'door' hoort niet bij het meewerkend voorwerp.",
                 "omdat":"'omdat' geeft een reden, dat heeft hier niets mee te maken." }},
        {t:"sleep", opgave:"Is dit het meewerkend voorwerp (de ontvanger) of niet?",
          chips:[{t:"zijn zus (Storm gaf zijn zus een bal)",bak:"mv"},{t:"het team (de trainer gaf het team een tip)",bak:"mv"},
                 {t:"een bal (Storm gaf zijn zus een bal)",bak:"geen"},{t:"Storm (Storm gaf zijn zus een bal)",bak:"geen"}],
          bakjes:[{id:"mv",label:"meewerkend voorwerp (ontvangt)",som:""},{id:"geen",label:"iets anders",som:""}],
          w:"Het meewerkend voorwerp is de ontvanger ('aan' kan erbij). 'een bal' wordt gegeven (lijdend voorwerp), 'Storm' geeft (onderwerp)."},
        {t:"vb", opgave:"Erwin schreef Suze een liefdesbrief.",
          waarom:{ q:"Wie is het meewerkend voorwerp (de ontvanger)?",
            o:["Suze","een liefdesbrief","Erwin"],
            a:"Suze"},
          fout:{"een liefdesbrief":"'een liefdesbrief' is wát er geschreven wordt (lijdend voorwerp). De ontvanger, voor wie het is, is 'Suze'.","Erwin":"'Erwin' is degene die schrijft, dat is het onderwerp. Het meewerkend voorwerp is de ontvanger: 'Suze'."},
          stappen:[
            {toon:"Erwin schreef Suze een liefdesbrief.", uitleg:"Erwin = onderwerp, schreef = werkwoord, een liefdesbrief = wat geschreven wordt."},
            {toon:"Wie ontving de brief?", uitleg:"Denk er 'aan' bij: aan wie schreef Erwin? → aan Suze."},
            {toon:"→ Suze", uitleg:"Suze ontvangt de brief → meewerkend voorwerp." }] }
      ]
    },
    { n:2, naam:"Zilver",
      uitleg:[
        "Vind het meewerkend voorwerp met de <b>vraagproef</b>: <i>aan wie of wat</i> + werkwoordelijk gezegde + onderwerp + lijdend voorwerp?",
        "Doe het in stappen: zoek eerst het werkwoord, het onderwerp en het lijdend voorwerp; stel daarna pas de 'aan wie'-vraag.",
        "Het antwoord op die vraag is het meewerkend voorwerp."
      ],
      regel:"Vraagproef: aan wie/wat + wg + onderwerp + lijdend voorwerp? → het antwoord is het meewerkend voorwerp.",
      voorbeelden:[ {en:"De juf gaf de klas een toets.", let:"Aan wie gaf de juf een toets? → de klas → meewerkend voorwerp."} ],
      vragen:[
        {t:"ontleed", q:"Tik de woorden aan die samen het MEEWERKEND VOORWERP vormen.",
          zin:"Erwin schreef Suze een liefdesbrief.", antwoord:[2], proef:"aan-wie-proef",
          w:"Aan wie schreef Erwin een liefdesbrief? → Suze (woord 2). Je kunt er 'aan' bij denken → meewerkend voorwerp."},
        {t:"stap", opgave:"De trainer gaf het team een tip.", w:"Zoek eerst onderwerp en lijdend voorwerp, dan de ontvanger.",
          meer:"Onderwerp = de trainer; lijdend voorwerp = een tip (wat gegeven wordt). Aan wie? → het team.",
          stappen:[
            {prompt:"Wat is het lijdend voorwerp? (wat wordt er gegeven?)", a:"een tip|de tip", hints:["Wie/wat gaf de trainer? → een …"]},
            {prompt:"Aan wie gaf de trainer een tip? (het meewerkend voorwerp)", a:"het team", hints:["Denk er 'aan' bij: aan wie?"]} ]},
        {t:"ontleed", q:"Tik de woorden aan die samen het MEEWERKEND VOORWERP vormen.",
          zin:"De juf gaf de klas een toets.", antwoord:[3,4], proef:"aan-wie-proef",
          w:"Aan wie gaf de juf een toets? → de klas. 'de' (3) en 'klas' (4) horen samen → meewerkend voorwerp. 'een toets' wordt gegeven → dat is het lijdend voorwerp."}
      ]
    },
    { n:3, naam:"Goud",
      uitleg:[
        "Belangrijke regel: <b>geen lijdend voorwerp ⇒ geen meewerkend voorwerp</b>. Er moet iets zijn dat ontvangen wordt.",
        "Niet in elke zin zit een meewerkend voorwerp. Zoek altijd eerst of er een lijdend voorwerp is.",
        "Let op: het meewerkend voorwerp begint zelf niet met een voorzetsel, maar je kunt er wél 'aan' bij denken."
      ],
      regel:"Geen lijdend voorwerp ⇒ geen meewerkend voorwerp. Niet elke zin heeft er een.",
      voorbeelden:[ {en:"Storm lacht hard.", let:"Geen lijdend voorwerp (niets wordt ontvangen) → dus ook géén meewerkend voorwerp."} ],
      vragen:[
        {t:"ontleed", q:"Tik de woorden aan die samen het MEEWERKEND VOORWERP vormen. (Let op: misschien is er geen!)",
          zin:"Storm aait haar knuffel.", antwoord:[], proef:"aan-wie-proef",
          w:"Wat wordt hier ontvangen? Niets — 'haar knuffel' ondergáát het aaien (lijdend voorwerp), maar niemand ontvángt iets. Géén meewerkend voorwerp — tik niets aan en klik Check.",
          meer:"Geen lijdend voorwerp dat naar iemand gaat ⇒ geen meewerkend voorwerp."},
        {t:"ontleed", q:"Tik de woorden aan die samen het MEEWERKEND VOORWERP vormen.",
          zin:"Storm gaf zijn oma een tekening.", antwoord:[2,3], proef:"aan-wie-proef",
          w:"Aan wie gaf Storm een tekening? → zijn oma. 'zijn' (2) en 'oma' (3) horen samen → meewerkend voorwerp. 'een tekening' wordt gegeven → lijdend voorwerp."},
        {t:"mc", q:"Waarom heeft <i>Storm slaapt rustig.</i> GÉÉN meewerkend voorwerp?",
          o:["Er is geen lijdend voorwerp dat iemand ontvangt","Omdat Storm slaapt","Omdat 'rustig' erin staat"], a:"Er is geen lijdend voorwerp dat iemand ontvangt",
          w:"Geen lijdend voorwerp ⇒ geen meewerkend voorwerp. In deze zin wordt niets gegeven of ontvangen.",
          fout:{ "Omdat Storm slaapt":"Wat het werkwoord is, bepaalt dit niet rechtstreeks; het gaat erom dat er niets ontvangen wordt.",
                 "Omdat 'rustig' erin staat":"'rustig' zegt hóe Storm slaapt en heeft er niets mee te maken." }}
      ]
    }
  ]
}

];  // einde LEERSTOF (Taak 4 voegt de overige 11 onderwerpen toe vóór deze ]; )

window.BEGRIPPEN = {
  "Vaktermen": { emoji:"📖", titel:"Vaktermen & proeven", items:[
    ["het woordje de, het of een; hoort bij een zelfstandig naamwoord","lidwoord"],
    ["een woord voor een mens, dier, plant, ding of gevoel (of een naam)","zelfstandig naamwoord"],
    ["zegt iets extra over een zelfstandig naamwoord (een mooie / rode / snelle …)","bijvoeglijk naamwoord"],
    ["het belangrijkste werkwoord; zegt wat het onderwerp doet","zelfstandig werkwoord"],
    ["een extra werkwoord zoals hebben, zijn, worden, zullen, kunnen","hulpwerkwoord"],
    ["een woord dat naar een persoon verwijst: ik, jij, hij, wij, jullie …","persoonlijk voornaamwoord"],
    ["geeft aan van wie iets is: mijn, jouw, zijn, onze …","bezittelijk voornaamwoord"],
    ["het werkwoord dat de tijd en het getal aangeeft; vind je met de tijd- of getalproef","persoonsvorm"],
    ["een groepje woorden dat in de zin bij elkaar hoort","zinsdeel"],
    ["alle werkwoorden van de zin samen","werkwoordelijk gezegde"],
    ["wie of wat iets doet of is; vraag: wie/wat + alle werkwoorden?","onderwerp"],
    ["wie of wat iets ondergaat; vraag: wie/wat + wg + onderwerp?","lijdend voorwerp"],
    ["wie of wat iets ontvangt; je kunt er 'aan' bij denken","meewerkend voorwerp"],
    ["zet de zin in een andere tijd → het werkwoord dat verandert is de persoonsvorm","tijdproef"],
    ["maak het onderwerp enkelvoud/meervoud → het werkwoord dat meeverandert is de persoonsvorm","getalproef"]
  ]}
};

window.AANMOEDIGING = {
  goed:["Top!","Goed bezig, Storm!","Yes, gelukt!","Knap hoor!","Precies goed!","Lekker!"],
  bijna:["Bijna!","Net niet — geeft niks.","Dat hoort erbij, probeer 't nog eens.","Bijna goed!"],
  levelup:["Level omhoog! 🚀","Je gaat naar een hoger niveau!","Knap — door naar het volgende! ✨"],
  leveldown:["We pakken het rustig aan 💛","Even een stapje terug, samen oefenen we dit.","Geen stress — we doen het rustig."],
  stapelklaar:["Stapel klaar! 🎉","Lekker gedaan, Storm! 🌟","Helemaal af! 💪"]
};

/* =========================================================================
   GENERATORS — Nederlands ontleed-drills uit één GEANNOTEERDE ZINNENBANK.
   Elke zin is per woord getagd met z'n grammaticale rol; per onderwerp kiezen
   we willekeurig een passende zin en bouwen een verse `ontleed`-vraag
   (zin + de juiste woord-indices + waarom). Zo wisselt elke ronde van zin en
   leert Storm de antwoorden niet uit het hoofd. Antwoord = exacte set indices
   (renderOntleed splitst op spaties), dus automatisch te controleren.
   Tags: lw=lidwoord zn=zelfst.nw bn=bijv.nw ww=(zelfst.)werkwoord
   hww=hulpww vd=voltooid deelw. pv=persoonsvorm pvnw=pers.vnw bvnw=bezit.vnw
   ond=onderwerp lv=lijdend vw mv=meewerkend vw  (wwg = alle werkwoorden, afgeleid)
   ========================================================================= */
(function(){
  function mkZin(tokens){
    const woorden=tokens.map(t=>Array.isArray(t)?t[0]:t), rol={};
    tokens.forEach((t,i)=>{ if(Array.isArray(t)) t[1].split(/\s+/).forEach(c=>{ (rol[c]=rol[c]||[]).push(i); }); });
    rol.wwg=Array.from(new Set([].concat(rol.pv||[],rol.hww||[],rol.ww||[],rol.vd||[]))).sort((a,b)=>a-b);
    return { woorden, zin:woorden.join(" "), rol };
  }
  const BANK = [
    mkZin([["Storm","ond"],["tekent","pv ww"],["een","lw lv"],["groot","bn lv"],["paard.","zn lv"]]),
    mkZin([["De","lw ond"],["keeper","zn ond"],["stopte","pv ww"],["de","lw lv"],["harde","bn lv"],["bal.","zn lv"]]),
    mkZin([["Hij","pvnw ond"],["schopt","pv ww"],["de","lw lv"],["bal","zn lv"],"weg."]),
    mkZin([["Storm","ond"],["vergat","pv ww"],["haar","bvnw lv"],["zwembril.","zn lv"]]),
    mkZin([["De","lw ond"],["meester","zn ond"],["gaf","pv ww"],["Storm","mv"],["een","lw lv"],["compliment.","zn lv"]]),
    mkZin([["Storm","ond"],["heeft","pv hww"],["een","lw lv"],["doelpunt","zn lv"],["gescoord.","vd"]]),
    mkZin([["Zij","pvnw ond"],["pakt","pv ww"],["haar","bvnw lv"],["nieuwe","bn lv"],["tas.","zn lv"]]),
    mkZin([["De","lw ond"],["trainer","zn ond"],["geeft","pv ww"],["het","lw mv"],["team","zn mv"],["een","lw lv"],["tip.","zn lv"]]),
    mkZin([["Een","lw ond"],["grote","bn ond"],["hond","zn ond"],["blaft","pv ww"],"luid."]),
    mkZin([["Wij","pvnw ond"],["hebben","pv hww"],["de","lw lv"],["wedstrijd","zn lv"],["gewonnen.","vd"]]),
    mkZin([["Storm","ond"],["geeft","pv ww"],["haar","bvnw mv"],["vriendin","zn mv"],["een","lw lv"],["cadeau.","zn lv"]]),
    mkZin([["Ik","pvnw ond"],["lees","pv ww"],["een","lw lv"],["spannend","bn lv"],["boek.","zn lv"]]),
    mkZin([["De","lw ond"],["juf","zn ond"],["heeft","pv hww"],["een","lw lv"],["verhaal","zn lv"],["verteld.","vd"]]),
    mkZin([["Storm","ond"],["zwemt","pv ww"],"elke","dag."]),
    mkZin([["Mijn","bvnw ond"],["broer","zn ond"],["kookt","pv ww"],["het","lw lv"],["eten.","zn lv"]]),
    mkZin([["De","lw ond"],["spits","zn ond"],["gaf","pv ww"],["de","lw mv"],["doelman","zn mv"],["de","lw lv"],["bal.","zn lv"]]),
    mkZin([["Zij","pvnw ond"],["heeft","pv hww"],["haar","bvnw lv"],["kamer","zn lv"],["opgeruimd.","vd"]]),
    mkZin([["Storm","ond"],["bouwt","pv ww"],["een","lw lv"],["hoge","bn lv"],["toren.","zn lv"]])
  ];
  const pick = a => a[Math.floor(Math.random()*a.length)];
  const clean = s => String(s).replace(/[.,!?;:]+$/,"");
  const wclean = (z,idx) => idx.map(i=>clean(z.woorden[i])).join(" ");
  const single = code => z => (z.rol[code]||[]).length===1;
  const group  = (code,min) => z => (z.rol[code]||[]).length>=(min||1);

  function gen(code, mode, q, w){
    return ()=>{
      let cands = BANK.filter(mode); if(!cands.length) cands = BANK;
      const z = pick(cands);
      const idx = (z.rol[code]||[]).slice().sort((a,b)=>a-b);
      return { t:"ontleed", zin:z.zin, antwoord:idx,
        q:(typeof q==="function"?q(z,idx):q), w:w(z,idx) };
    };
  }
  const T = {
    "lidwoord": gen("lw", single("lw"), "Tik het LIDWOORD aan.",
      (z,i)=>`'${clean(z.woorden[i[0]])}' is een lidwoord (de, het of een) en hoort bij het zelfstandig naamwoord erna.`),
    "zelfstandig-naamwoord": gen("zn", single("zn"), "Tik het ZELFSTANDIG NAAMWOORD aan.",
      (z,i)=>`Je kunt 'de' of 'het' voor '${clean(z.woorden[i[0]])}' zetten, en het verkleinen → zelfstandig naamwoord.`),
    "bijvoeglijk-naamwoord": gen("bn", single("bn"), "Tik het BIJVOEGLIJK NAAMWOORD aan.",
      (z,i)=>`'${clean(z.woorden[i[0]])}' zegt iets over het zelfstandig naamwoord (hoe is het?) → bijvoeglijk naamwoord.`),
    "werkwoord": gen("ww", single("ww"), "Tik het WERKWOORD aan (waar de zin over gaat).",
      (z,i)=>`'${clean(z.woorden[i[0]])}' is iets wat je doet → (zelfstandig) werkwoord.`),
    "persoonlijk-vnw": gen("pvnw", single("pvnw"), "Tik het PERSOONLIJK VOORNAAMWOORD aan.",
      (z,i)=>`'${clean(z.woorden[i[0]])}' verwijst naar een persoon → persoonlijk voornaamwoord.`),
    "bezittelijk-vnw": gen("bvnw", single("bvnw"), "Tik het BEZITTELIJK VOORNAAMWOORD aan.",
      (z,i)=>`'${clean(z.woorden[i[0]])}' geeft aan van wie iets is → bezittelijk voornaamwoord.`),
    "persoonsvorm": gen("pv", single("pv"), "Tik de PERSOONSVORM aan.",
      (z,i)=>`Tijdproef: in een andere tijd verandert '${clean(z.woorden[i[0]])}' van vorm → dat is de persoonsvorm.`),
    "onderwerp": gen("ond", group("ond",1), "Tik de woorden aan die samen het ONDERWERP vormen.",
      (z,i)=>`Wie of wat ${clean(z.woorden[(z.rol.pv||[0])[0]])}? → '${wclean(z,i)}' → het onderwerp.`),
    "lijdend-voorwerp": gen("lv", group("lv",1), "Tik de woorden aan die samen het LIJDEND VOORWERP vormen.",
      (z,i)=>`Wie of wat ondergaat de handeling? → '${wclean(z,i)}' → lijdend voorwerp.`),
    "meewerkend-voorwerp": gen("mv", group("mv",1), "Tik de woorden aan die samen het MEEWERKEND VOORWERP vormen.",
      (z,i)=>`Aan of voor wie? → '${wclean(z,i)}' → meewerkend voorwerp (je kunt er 'aan' bij denken).`),
    "werkwoordelijk-gezegde": gen("wwg", group("wwg",2), "Tik ALLE werkwoorden aan die samen het WERKWOORDELIJK GEZEGDE vormen.",
      (z,i)=>`De werkwoorden '${wclean(z,i)}' horen samen → werkwoordelijk gezegde.`),
    "zinsdelen": gen("lv", group("lv",2),
      (z,i)=>`Tik de woorden aan die samen ÉÉN zinsdeel vormen (het deel met '${clean(z.woorden[i[i.length-1]])}').`,
      (z,i)=>`Met de verschuifproef horen '${wclean(z,i)}' bij elkaar → samen één zinsdeel.`)
  };
  const G = {};
  for(const id in T){ G[id+"_n1"]=[T[id]]; G[id+"_n2"]=[T[id]]; G[id+"_n3"]=[T[id]]; }
  window.GENERATORS = G;
})();


/* =====================================================================
   GRAMMATICA-OVERZICHT (Nederlands): de terugkerende "grammatica-kaart"
   Kern-onderscheid: WAT VOOR WOORD is het (woordsoort, taalkundig) vs
   WELKE ROL speelt het in de zin (zinsdeel, redekundig). En: bij zinsdelen
   begin je ALTIJD bij de persoonsvorm. Gevoed door #screen-overzicht.
   ===================================================================== */
window.OVERZICHT = {
  titel: "De grammatica-kaart",
  intro: "Bij grammatica stel je jezelf eerst <b>één vraag</b>: vraag ik <b>wat voor woord</b> dit is (de woordsoort), of <b>welke rol</b> het in de zin speelt (het zinsdeel)? Datzelfde woord kan allebei tegelijk hebben! In <i>De keeper stopt de bal</i> is <i>keeper</i> qua woordsoort een zelfstandig naamwoord, en qua rol het onderwerp. Deze kaart blijft in beeld.",
  kaart: [
    { id:"woordsoort", label:"WAT VOOR WOORD?", sub:"woordsoort · taalkundig", kop:true, kleur:"plum",
      kinderen:[
        { id:"lidwoord", label:"lidwoord", regel:"de · het · een" },
        { id:"zn", label:"zelfst. naamwoord", regel:"mens/dier/ding/gevoel" },
        { id:"bn", label:"bijv. naamwoord", regel:"hoe is het? (mooi, hoog)" },
        { id:"ww", label:"werkwoord", regel:"wat je doet (+ hulp-ww)" },
        { id:"vnw", label:"voornaamwoord", regel:"persoonlijk · bezittelijk" }
      ]
    },
    { id:"zinsdeel", label:"WELKE ROL IN DE ZIN?", sub:"zinsdeel · redekundig → proeven", kop:true, kleur:"brand",
      kinderen:[
        { id:"pv", label:"persoonsvorm", regel:"BEGIN HIER · tijd/vraagproef" },
        { id:"onderwerp", label:"onderwerp", regel:"wie/wat + werkwoord?" },
        { id:"wg", label:"werkw. gezegde", regel:"alle werkwoorden samen" },
        { id:"lv", label:"lijdend voorwerp", regel:"wie/wat + ww + onderwerp?" },
        { id:"mv", label:"meewerkend vw", regel:"aan wie/wat? (denk ’aan’)" }
      ]
    }
  ],
  stappen: [
    {
      kop: "Begin altijd hier 👇",
      pad: [],
      uitleg: [
        "Kijk eerst naar de kaart hierboven. Er zijn twee soorten vragen die je over een woord kunt stellen, en die haal je makkelijk door elkaar.",
        "<b>Wat voor woord</b> is het? Dat is de <b>woordsoort</b> (links). <b>Welke rol</b> speelt het in de zin? Dat is het <b>zinsdeel</b> (rechts). Eén woord heeft vaak allebei. Weet je dat verschil, dan klopt de rest vanzelf."
      ]
    },
    {
      kop: "Wat voor woord? → de woordsoort",
      pad: ["woordsoort"],
      uitleg: [
        "De <b>woordsoort</b> is wat voor woord het is, los van de zin. Voor elke woordsoort is er een kleine <b>proef</b> waarmee je het herkent.",
        "We lopen ze één voor één langs. Geen zorgen, het zijn er maar een paar."
      ]
    },
    {
      kop: "Lidwoord: de, het, een",
      pad: ["woordsoort","lidwoord"],
      uitleg: [ "Het <b>lidwoord</b> is het kleine woordje <b>de</b>, <b>het</b> of <b>een</b> dat vóór een zelfstandig naamwoord staat." ],
      vb: [ { en:"De keeper stopt de bal.", let:"<b>De</b> is het lidwoord bij <i>keeper</i>." } ],
      check: { q:"Welk woord is het lidwoord in: Een grote hond blaft.", o:["Een","grote","hond"], a:"Een",
        goed:"Ja! <b>Een</b> is hier het lidwoord.", fout:{ "grote":"<i>grote</i> zegt iets over de hond → dat is een bijvoeglijk naamwoord.", "hond":"<i>hond</i> is het zelfstandig naamwoord, niet het lidwoord." } }
    },
    {
      kop: "Zelfstandig naamwoord",
      pad: ["woordsoort","zn"],
      uitleg: [ "Een <b>zelfstandig naamwoord</b> is een woord voor een mens, dier, ding, plant of gevoel (en namen). <b>Proef:</b> je kunt er <i>de</i> of <i>het</i> voor zetten, en je kunt het verkleinen (keeper → keepertje)." ],
      vb: [ { en:"Storm bouwt een hoge toren.", let:"<i>toren</i> → de toren, het torentje → zelfstandig naamwoord." } ],
      check: { q:"Welk woord is het zelfstandig naamwoord in: Storm aait een zachte knuffel.", o:["knuffel","zachte","aait"], a:"knuffel",
        goed:"Klopt! De knuffel, het knuffeltje → zelfstandig naamwoord.", fout:{ "zachte":"<i>zachte</i> zegt iets over de knuffel → bijvoeglijk naamwoord.", "aait":"<i>aait</i> is iets wat je doet → werkwoord." } }
    },
    {
      kop: "Bijvoeglijk naamwoord",
      pad: ["woordsoort","bn"],
      uitleg: [ "Een <b>bijvoeglijk naamwoord</b> zegt iets extra over een zelfstandig naamwoord: <b>hoe</b> is het? (mooi, rood, hoog, snel)." ],
      vb: [ { en:"Ik lees een spannend boek.", let:"<i>spannend</i> zegt hoe het boek is → bijvoeglijk naamwoord." } ],
      check: { q:"Welk woord is het bijvoeglijk naamwoord in: een hoge toren?", o:["hoge","toren","een"], a:"hoge",
        goed:"Ja! <i>hoge</i> zegt hoe de toren is.", fout:{ "toren":"<i>toren</i> is het zelfstandig naamwoord.", "een":"<i>een</i> is het lidwoord." } }
    },
    {
      kop: "Werkwoord",
      pad: ["woordsoort","ww"],
      uitleg: [ "Een <b>werkwoord</b> geeft aan wat er gebeurt (lopen, stoppen, hebben). Het <b>zelfstandig werkwoord</b> is het belangrijkste; <b>hulpwerkwoorden</b> (hebben, zijn, kunnen…) zijn extra." ],
      vb: [ { en:"Storm heeft een doelpunt gescoord.", let:"<i>heeft</i> = hulpwerkwoord, <i>gescoord</i> = het zelfstandige deel." } ],
      check: { q:"Welk woord is het werkwoord in: De keeper stopt de bal.", o:["stopt","keeper","bal"], a:"stopt",
        goed:"Top! <i>stopt</i> is iets wat je doet.", fout:{ "keeper":"<i>keeper</i> is een zelfstandig naamwoord.", "bal":"<i>bal</i> is een zelfstandig naamwoord." } }
    },
    {
      kop: "Voornaamwoorden: persoonlijk en bezittelijk",
      pad: ["woordsoort","vnw"],
      uitleg: [
        "Een <b>persoonlijk voornaamwoord</b> verwijst naar een persoon en vervangt een zelfstandig naamwoord: <i>ik, jij, hij, zij, wij, mij, hem, ons</i>.",
        "Een <b>bezittelijk voornaamwoord</b> geeft aan <b>van wie</b> iets is: <i>mijn, jouw, zijn, haar, onze, hun</i>."
      ],
      vb: [ { en:"Zij pakt haar nieuwe tas.", let:"<i>Zij</i> = persoonlijk (de persoon), <i>haar</i> = bezittelijk (van wie de tas is)." } ],
      check: { q:"Wat is ’haar’ in: Storm pakt haar tas?", o:["bezittelijk voornaamwoord","persoonlijk voornaamwoord","lidwoord"], a:"bezittelijk voornaamwoord",
        goed:"Ja! <i>haar</i> geeft aan van wie de tas is.", fout:{ "persoonlijk voornaamwoord":"<i>haar</i> verwijst hier niet naar een persoon, maar zegt van wie de tas is → bezittelijk.", "lidwoord":"lidwoorden zijn alleen de, het en een." } }
    },
    {
      kop: "Welke rol in de zin? → het zinsdeel (begin bij de persoonsvorm!)",
      pad: ["zinsdeel"],
      uitleg: [
        "Nu de <b>rol</b> van woorden in de zin: de zinsdelen. Die vind je niet door te kijken wat voor woord het is, maar met <b>proeven</b>.",
        "Het allerbelangrijkste: <b>begin altijd bij de persoonsvorm</b>. Heb je die gevonden, dan vind je de rest daarna stap voor stap."
      ]
    },
    {
      kop: "Persoonsvorm: begin hier",
      pad: ["zinsdeel","pv"],
      uitleg: [
        "De <b>persoonsvorm</b> (pv) is het werkwoord dat de <b>tijd</b> aangeeft. Je vindt 'm met een proef:",
        "<b>Tijdproef:</b> zet de zin in een andere tijd. Het woord dat verandert, is de persoonsvorm. <b>Vraagproef:</b> maak er een ja/nee-vraag van. Het werkwoord dat naar voren springt, is de persoonsvorm."
      ],
      vb: [ { en:"De keeper stopt de bal.", let:"Gisteren <b>stopte</b> de keeper… → <i>stopt</i> verandert → persoonsvorm." } ],
      check: { q:"Wat is de persoonsvorm in: Storm heeft een doelpunt gescoord.", o:["heeft","gescoord","Storm"], a:"heeft",
        goed:"Knap! <i>heeft</i> verandert met de tijd (had) → persoonsvorm.", fout:{ "gescoord":"<i>gescoord</i> is een voltooid deelwoord; het verandert niet met de tijd.", "Storm":"<i>Storm</i> is het onderwerp, geen werkwoord." } }
    },
    {
      kop: "Onderwerp: wie of wat + werkwoord?",
      pad: ["zinsdeel","onderwerp"],
      uitleg: [ "Het <b>onderwerp</b> is <b>wie of wat</b> iets doet of is. <b>Proef:</b> zeg de werkwoorden en vraag <i>wie of wat?</i> ervoor. Onderwerp en persoonsvorm hebben altijd hetzelfde getal." ],
      vb: [ { en:"De keeper stopt de bal.", let:"Wie stopt? → <b>de keeper</b> → het onderwerp." } ],
      check: { q:"Wat is het onderwerp in: Een grote hond blaft luid.", o:["Een grote hond","luid","blaft"], a:"Een grote hond",
        goed:"Ja! Wie blaft? Een grote hond.", fout:{ "luid":"<i>luid</i> zegt hoe er geblaft wordt, niet wie.", "blaft":"<i>blaft</i> is de persoonsvorm, niet het onderwerp." } }
    },
    {
      kop: "Werkwoordelijk gezegde",
      pad: ["zinsdeel","wg"],
      uitleg: [ "Het <b>werkwoordelijk gezegde</b> (wg) bestaat uit <b>alle werkwoorden</b> van de zin samen (ook de persoonsvorm)." ],
      vb: [ { en:"Wij hebben de wedstrijd gewonnen.", let:"<b>hebben</b> + <b>gewonnen</b> samen → het werkwoordelijk gezegde." } ],
      check: { q:"Welke woorden vormen samen het werkwoordelijk gezegde in: Storm heeft haar kamer opgeruimd.", o:["heeft opgeruimd","heeft","kamer opgeruimd"], a:"heeft opgeruimd",
        goed:"Klopt! Alle werkwoorden: heeft + opgeruimd.", fout:{ "heeft":"<i>heeft</i> is alleen de persoonsvorm; <i>opgeruimd</i> hoort er ook bij.", "kamer opgeruimd":"<i>kamer</i> is geen werkwoord." } }
    },
    {
      kop: "Lijdend voorwerp (let op: niet het onderwerp!)",
      pad: ["zinsdeel","lv"],
      uitleg: [
        "Het <b>lijdend voorwerp</b> is wie of wat de handeling <b>ondergaat</b>. <b>Proef:</b> zeg <i>het werkwoord + het onderwerp</i> en vraag dan <b>wie of wat?</b>",
        "Verschil met het onderwerp: het onderwerp <b>doet</b> iets, het lijdend voorwerp <b>ondergaat</b> iets. Het begint nooit met een voorzetsel."
      ],
      vb: [ { en:"De keeper stopt de bal.", let:"Wie/wat stopt de keeper? → <b>de bal</b> → lijdend voorwerp (het ondergaat het stoppen)." } ],
      check: { q:"Wat is het lijdend voorwerp in: Mijn broer kookt het eten.", o:["het eten","Mijn broer","kookt"], a:"het eten",
        goed:"Ja! Wat kookt mijn broer? Het eten.", fout:{ "Mijn broer":"<i>Mijn broer</i> doet iets → dat is het onderwerp, niet het lijdend voorwerp.", "kookt":"<i>kookt</i> is de persoonsvorm." } }
    },
    {
      kop: "Meewerkend voorwerp",
      pad: ["zinsdeel","mv"],
      uitleg: [ "Het <b>meewerkend voorwerp</b> is wie of wat iets <b>ontvangt</b>. <b>Proef:</b> je kunt er <i>aan</i> of <i>voor</i> bij denken. Vraag: <i>aan wie/wat?</i>" ],
      vb: [ { en:"De juf gaf de klas een moeilijke toets.", let:"Aan wie gaf de juf de toets? → <b>de klas</b> → meewerkend voorwerp." } ],
      check: { q:"Wat is het meewerkend voorwerp in: De trainer geeft het team een tip.", o:["het team","een tip","De trainer"], a:"het team",
        goed:"Top! Aan wie geeft de trainer een tip? Aan het team.", fout:{ "een tip":"<i>een tip</i> is wat gegeven wordt → lijdend voorwerp.", "De trainer":"<i>De trainer</i> doet iets → onderwerp." } }
    },
    {
      kop: "De hele kaart op een rij 🌟",
      pad: [],
      samenvatting: [
        "Vraag altijd eerst: <b>wat voor woord</b> (woordsoort) of <b>welke rol</b> (zinsdeel)?",
        "<b>Woordsoort</b>: lidwoord · zelfstandig nw · bijvoeglijk nw · werkwoord · voornaamwoord. Elk heeft een proef.",
        "<b>Zinsdeel</b>: begin bij de <b>persoonsvorm</b> (tijd/vraagproef), dan het <b>onderwerp</b> (wie/wat + ww), dan de rest.",
        "<b>Onderwerp doet, lijdend voorwerp ondergaat.</b> Bij meewerkend voorwerp kun je er <i>aan</i> bij denken.",
        "Eén woord kan allebei hebben: een woordsoort én een rol in de zin."
      ],
      uitleg: [ "Dit is alles, Storm. Het belangrijkste: hou <b>woordsoort</b> en <b>zinsdeel</b> uit elkaar, en <b>begin bij de persoonsvorm</b>. Ga het nu oefenen in de toets, daar staat alles door elkaar. Je kunt dit! 💪" ]
    }
  ]
};

/* Discriminatie-vragen voor de Grammatica-toets: dwingen je om te KIEZEN
   tussen woordsoort en zinsdeel, en tussen onderwerp en lijdend voorwerp. */
window.MIXVRAGEN = [
  { t:"mc", q:"In ’De keeper stopt de bal’: wat voor WOORD is ’keeper’?", o:["zelfstandig naamwoord","werkwoord","onderwerp"], a:"zelfstandig naamwoord",
    w:"Woordsoort: de keeper, het keepertje → zelfstandig naamwoord.",
    meer:"Let op: ’onderwerp’ is een ROL (zinsdeel), geen woordsoort. De vraag is wat voor woord het is.",
    fout:{ "werkwoord":"een werkwoord is iets wat je doet; ’keeper’ is een ding/persoon.", "onderwerp":"’onderwerp’ is een zinsdeel (rol), niet een woordsoort. Qua woordsoort is het een zelfstandig naamwoord." } },
  { t:"mc", q:"In ’De keeper stopt de bal’: welke ROL heeft ’de keeper’ in de zin?", o:["onderwerp","lijdend voorwerp","persoonsvorm"], a:"onderwerp",
    w:"Wie stopt? De keeper → onderwerp.",
    meer:"Zinsdeel = rol in de zin. Wie/wat + werkwoord? → de keeper → onderwerp.",
    fout:{ "lijdend voorwerp":"de keeper DOET iets (stoppen); het lijdend voorwerp ondergaat juist iets.", "persoonsvorm":"de persoonsvorm is het werkwoord ’stopt’, niet ’de keeper’." } },
  { t:"mc", q:"In ’De keeper stopt de bal’: wat is ’de bal’?", o:["lijdend voorwerp","onderwerp","meewerkend voorwerp"], a:"lijdend voorwerp",
    w:"Wat stopt de keeper? De bal → lijdend voorwerp.",
    meer:"De bal ondergaat de handeling (wordt gestopt) → lijdend voorwerp.",
    fout:{ "onderwerp":"het onderwerp is ’de keeper’ (die doet iets); de bal ondergaat iets.", "meewerkend voorwerp":"daar kun je ’aan’ bij denken (aan wie?); dat past hier niet." } },
  { t:"mc", q:"Wat is de persoonsvorm in: Storm heeft een doelpunt gescoord.", o:["heeft","gescoord","doelpunt"], a:"heeft",
    w:"Tijdproef: ’heeft’ → ’had’ verandert → persoonsvorm.",
    meer:"’gescoord’ is een voltooid deelwoord; dat verandert niet met de tijd.",
    fout:{ "gescoord":"dat is een voltooid deelwoord, geen persoonsvorm.", "doelpunt":"dat is een zelfstandig naamwoord." } },
  { t:"mc", q:"In ’De juf gaf de klas een toets’: wat is ’de klas’?", o:["meewerkend voorwerp","lijdend voorwerp","onderwerp"], a:"meewerkend voorwerp",
    w:"Aan wie gaf de juf de toets? Aan de klas → meewerkend voorwerp.",
    meer:"Je kunt er ’aan’ bij denken (aan de klas) → meewerkend voorwerp.",
    fout:{ "lijdend voorwerp":"dat is ’een toets’ (wat gegeven wordt).", "onderwerp":"dat is ’de juf’ (die geeft)." } },
  { t:"mc", q:"Welk woord is het bijvoeglijk naamwoord in: Ik lees een spannend boek.", o:["spannend","boek","lees"], a:"spannend",
    w:"’spannend’ zegt hoe het boek is → bijvoeglijk naamwoord.",
    meer:"Bijvoeglijk naamwoord = hoe is het zelfstandig naamwoord?",
    fout:{ "boek":"dat is het zelfstandig naamwoord.", "lees":"dat is het werkwoord." } },
  { t:"mc", q:"Is ’haar’ in ’Zij pakt haar tas’ een…", o:["bezittelijk voornaamwoord","persoonlijk voornaamwoord","lidwoord"], a:"bezittelijk voornaamwoord",
    w:"’haar’ geeft aan van wie de tas is → bezittelijk.",
    meer:"Bezittelijk = van wie. Persoonlijk = verwijst naar de persoon zelf (zij, hem).",
    fout:{ "persoonlijk voornaamwoord":"hier zegt ’haar’ van wie de tas is, niet de persoon zelf.", "lidwoord":"lidwoorden zijn alleen de, het, een." } },
  { t:"mc", q:"Hoe vind je de persoonsvorm het makkelijkst?", o:["maak er een ja/nee-vraag van","tel het aantal woorden","kijk naar het laatste woord"], a:"maak er een ja/nee-vraag van",
    w:"Vraagproef: het werkwoord dat naar voren springt is de persoonsvorm.",
    meer:"Of de tijdproef: zet de zin in een andere tijd; wat verandert is de persoonsvorm.",
    fout:{ "tel het aantal woorden":"daarmee vind je de persoonsvorm niet.", "kijk naar het laatste woord":"de persoonsvorm staat lang niet altijd achteraan." } },
  { t:"mc", q:"Het verschil: het ONDERWERP…", o:["doet of is iets","ondergaat iets","ontvangt iets"], a:"doet of is iets",
    w:"Onderwerp doet/is iets; lijdend voorwerp ondergaat; meewerkend voorwerp ontvangt.",
    meer:"Dit is het kernverschil tussen de zinsdelen.",
    fout:{ "ondergaat iets":"dat is het lijdend voorwerp.", "ontvangt iets":"dat is het meewerkend voorwerp." } },
  { t:"mc", q:"In ’Een grote hond blaft’: wat voor woord is ’grote’, en niet de rol?", o:["bijvoeglijk naamwoord","onderwerp","zelfstandig naamwoord"], a:"bijvoeglijk naamwoord",
    w:"’grote’ zegt hoe de hond is → bijvoeglijk naamwoord (woordsoort).",
    meer:"’onderwerp’ zou een rol zijn; de vraag gaat over de woordsoort.",
    fout:{ "onderwerp":"dat is een zinsdeel (rol); ’Een grote hond’ samen is het onderwerp, maar ’grote’ als woord is een bijvoeglijk naamwoord.", "zelfstandig naamwoord":"het zelfstandig naamwoord is ’hond’." } }
];
