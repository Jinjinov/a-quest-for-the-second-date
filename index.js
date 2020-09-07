
//const Question = {
//  template: '<div>Question {{ $route.params.question }}</div>'
//}
/*
const router = new VueRouter({
  base: '/RelationshipAdvisor/',
  //mode: 'history',
  routes: [
    // dynamic segments start with a colon
    { path: '/:question' }
  ]
})
/**/
// this is the Vue.js app
new Vue({
    el: '#app',
    //router,
    watch:{
      '$route.params.question': function(newVal){
      }
    },
    //-------------------------------------------------------------------------
    // data
    //-------------------------------------------------------------------------
    data: {
      debug: false,
      path: window.location.pathname,
      categories: [
        { 
          isExpanded: true, 
          name: "1.0 Kaj želim doseči?", 
          description: "Vpišite cilj, ki ga želite doseči. Podrobnosti na tem mestu še niso pomembne. Namig: Ste vedeli da želeti nekaj doseči, morati nekaj doseči in hoteti nekaj doseči, ni enako? Za pomoč vam dajemo nekaj primerov:",
          tasks: [
            { isComplete: false, text: "Napisati diplomo." },
            { isComplete: false, text: "Vedno za seboj pomiti posodo." },
            { isComplete: false, text: "Pospravljati svojo sobo." },
            { isComplete: false, text: "Osvojiti dekle/fanta." },
            { isComplete: false, text: "Učiti se za izpit." },
          ],
          hint: ""
        },
        { 
          isExpanded: false, 
          name: "1.1", 
          description: "Za cilj, ki ste ga navedli, vpišite vse mogoče dejavnike, ki morajo biti izpolnjeni, ki vam v tem trenutku pridejo na misel. Imate možnost vpisati do 30 takih dejavnikov. Spodaj vam dajemo primer, da si boste lažje predstavljali, kako, na primeru diplome.",
          tasks: [
            { isComplete: false, text: "imeti moram mentorja" },
            { isComplete: false, text: "Potrebujem 3 mesece časa po 3 ure na dan" },
            { isComplete: false, text: "Potrebujem naslov diplome" },
            { isComplete: false, text: "Potrebujem literaturo" },
            { isComplete: false, text: "Potrebujem računalnik" },
            { isComplete: false, text: "Potrebujem svoj prostor" },
            { isComplete: false, text: "Narediti moram raziskavo" },
          ],
          hint: ""
        },
        { 
          isExpanded: false, 
          name: "1.2", 
          description: "Vsakega od dejavnikov je potrebno opremiti z ustreznimi parametri. To pomeni, da navedemo čimveč etajlov, ki so potrbni, da se dejavnik izpolni. Še vedno natančnost ni potrebna, le glavni opis nalog. Ponovno vam dajemo primer:",
          tasks: [
            { isComplete: false, text: "Možnosti mentorjev so... (navedemo imena)" },
            { isComplete: false, text: "časa od tega trenutka do skrajnega roka za oddajo diplome je cca 10 mesecev" },
            { isComplete: false, text: "Možni naslovi diplome so... preveriti pri mentorju" },
            { isComplete: false, text: "poiskati seznam literature za izbrani naslov" },
            { isComplete: false, text: "imam" },
            { isComplete: false, text: "moja soba, knjižnica" },
            { isComplete: false, text: "poiskati spletne obrazce, se odločiti za ustrezen naslov raziskave, vprašati mentorja kako se naredi" },
          ],
          hint: ""
        },
        { 
          isExpanded: false, 
          name: "1.3", 
          description: "Vsak parameter razčlenimo na več detajlov. Spodaj primer:",
          tasks: [
            { isComplete: false, text: "Moj prvi izbor je... Če me zavrne, je moja naslednja odločitev... Če me zavrne tudi ta, grem k..., Če odpadejo vsi, bom prosil za prostega profeosrja po njihovem izboru." },
            { isComplete: false, text: "90 dni po 3 ure na dan je najbolje razporediti na četrtke, sobote in nedelje, narediti urnik, tudi glede na knjižnico" },
            { isComplete: false, text: "Seznam naslovov, ki bodo preverjeni, ko bo izbran mentor." },
            { isComplete: false, text: "poiskati seznam literature za izbrani naslov" },
            { isComplete: false, text: "imam – zato lahko ta dejavnik izključim kot nepomemben v tem trenutku" },
            { isComplete: false, text: "moja soba, knjižnica – preveriti delovni čas in razpoložljivost študijskega kotička v knjižnici" },
            { isComplete: false, text: "poiskati spletne obrazce, se odločiti za ustrezen naslov raziskave, vprašati mentorja kako se naredi – počakati na mentorja, naslov raziskave itd." },
          ],
          hint: "Nekateri parametri o odvisni od drugih, beležimo joih toliko časa, dokler ne dobijo svojega mesta na izvedbenem načrtu."
        },
        { 
          isExpanded: false, 
          name: "1.4", 
          description: "Sprejmem odločitve, ki se najbolj približajo izvedbi parametrov. Primer:",
          tasks: [
            { isComplete: false, text: "Dne (datum) bom vsakemu od izbranih profesorjev poslal mail. Počakal bom 7 dni na odgovor in v kolikor se ne bodo odzvali, osebno odšel k njim v kabinet." },
            { isComplete: false, text: "Dne (datum) bom preveril urnik knjižnice in naredil točen urnik, ki bo veljal od dneva določitve naslova diplome." },
            { isComplete: false, text: "Seznam naslovov, ki bodo preverjeni, ko bo izbran mentor." },
            { isComplete: false, text: "poiskati seznam literature za izbrani naslov" },
            { isComplete: false, text: "opravljeno" },
            { isComplete: false, text: "opravljeno" },
            { isComplete: false, text: "poiskati spletne obrazce, se odločiti za ustrezen naslov raziskave, vprašati mentorja kako se naredi – počakati na mentorja, naslov raziskave itd." },
          ],
          hint: ""
        },
        { 
          isExpanded: false, 
          name: "1.5", 
          description: "Odločitvam določimo kraj izvedbe, v kolikor je to potrebno.",
          tasks: [
            { isComplete: false, text: "ni pomemben, imam prenosnik" },
            { isComplete: false, text: "ni pomemben, ker lahko preverim na internetu" },
            { isComplete: false, text: "Kabinet profesorja" },
            { isComplete: false, text: "Knjižnica, kabinet profesorja, internet" },
            { isComplete: false, text: "opravljeno" },
            { isComplete: false, text: "opravljeno" },
            { isComplete: false, text: "internet, kabinet profesorja" },
          ],
          hint: ""
        },
        { 
          isExpanded: false, 
          name: "1.6", 
          description: "Odločitvam damo čas izvedbe, kar je ključnega pomena. Tako začnemo sestavljati urnik.",
          tasks: [
            { isComplete: false, text: "Dne (datum) bom vsakemu od izbranih profesorjev poslal mail. Počakal bom 7 dni na odgovor in v kolikor se ne bodo odzvali, osebno odšel k njim v kabinet. – tu datumi določeni, ura bo 9h zjutraj." },
            { isComplete: false, text: "Dne (datum) bom preveril urnik knjižnice in naredil točen urnik, ki bo veljal od dneva določitve naslova diplome. – datum določen, ura bo 8:30 na poti na fakulteto." },
            { isComplete: false, text: "Seznam naslovov, ki bodo preverjeni, ko bo izbran mentor. – dne (datum) si bom vzel čas od 8:30 – 10:00 in napisal čim daljši možen seznam naslovov, ki mi pridejo na misel." },
            { isComplete: false, text: "poiskati seznam literature za izbrani naslov - dne (datum) si bom vzel čas od 8:30 – 11:00 in napisal čim daljši možen seznam spletnih naslovov, ki bodo ustrezali področjem, ki jih bom obravnaval" },
            { isComplete: false, text: "opravljeno" },
            { isComplete: false, text: "opravljeno" },
            { isComplete: false, text: "poiskati spletne obrazce, se odločiti za ustrezen naslov raziskave, vprašati mentorja kako se naredi – počakati na mentorja, naslov raziskave itd. - dne (datum) si bom vzel čas od 8:30 – 10:00 in poiskal spletne strani, ki ponujajo možnost raziskave ter prebral vsaj tri članke o tem, kako se naredi raziskava." },
          ],
          hint: "Namig: na videz nepotrebna razčlenitev je ključnega pomena, da zmanjšamo grandioznost cilja..."
        },
        { 
          isExpanded: false, 
          name: "1.7", 
          description: "Končni izgled cilja:",
          tasks: [
            { isComplete: false, text: "Do (datum) bom napisal 3 maile" },
            { isComplete: false, text: "Do (datum) bom čakal na odgovore" },
            { isComplete: false, text: "Do (Datum) bom opravil raziskavo glede literature" },
            { isComplete: false, text: "Do (Datum) bom opravil raziskavo glede raziskave" },
            { isComplete: false, text: "opravljeno" },
            { isComplete: false, text: "opravljeno" },
            { isComplete: false, text: "Do (Datum) bom napisal seznam" },
          ],
          hint: ""
        },
      ]
    },
    //-------------------------------------------------------------------------
    // pouchdb
    //-------------------------------------------------------------------------
    /*
    pouchdb: {
      howtogetaseconddate: {
        localDB: "howtogetaseconddate",
        remoteURL: "http://127.0.0.1:5984/howtogetaseconddate"
      }
    },
    /**/
    //-------------------------------------------------------------------------
    // computed
    //-------------------------------------------------------------------------
    computed: {
    },
    //-------------------------------------------------------------------------
    // methods
    //-------------------------------------------------------------------------
    methods: {
    },
    beforeCreate(){
      //var found = false; // #1 , vuepouch -> #2
    },
    created(){
      //var found = false; // #3
    },
    beforeMount(){
      //var found = false; // #4 , computed -> #5
    },
    mounted(){ // template parsed
      //var found = false; // #6 , vuepouch -> #7 initDB - then
    },
    beforeUpdate(){
      //var found = false; // #8
    },
    updated(){ // v-for resolved
      //var found = false; // #9
    }
  });