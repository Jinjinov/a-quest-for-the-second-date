
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
        { name: "Komunikativnost", isExpanded: true, tasks: [
          { isComplete: false, text: "vsaj 10 osebam reci Dober dan v naslednjem tednu." },
          { isComplete: false, text: "vsaj desetim osebam v naslednjem tednu ponudi pomoč." },
          { isComplete: false, text: "vsaj trem ljudem, ki jih še nikoli prej nisi videl, zaželi lep dan in se jim nasmehni." },
          { isComplete: false, text: "pojdi v tri ralične trgovine, v katerih še nisi bil in prosi za pomoč pri nakupu." },
          { isComplete: false, text: "pokliči dva človeka v naslednjem tednu in reci, da bi se rad pogovarjal. Potem jim predlagaj temo pogovora." },
          { isComplete: false, text: "nekoga, ki ga dobro poznaš, vprašaj za mnenje o stvari, ki je zate zelo pomembna" }
         ] },
        { name: "Samozavest", isExpanded: false, tasks: [
          { isComplete: false, text: "vsaj 5 minut na dan v zavetju svojega doma hodi z glavo pokonci, predstavljaj si, da na glavi nosiš vrč vode, ki ne sme pasti na tla." },
          { isComplete: false, text: "Vsaj desetim osebam v enem tednu poglej v oči, pa čeprav samo za sekundo." },
          { isComplete: false, text: "Vsaj trem ljudem se nasmehni in jih poglej v oči, takim, ki jih poznaš vsaj na videz." },
          { isComplete: false, text: "naredi seznam vseh skrivnosti, ki jih drugi ne smejo vedeti o tebi." },
          { isComplete: false, text: "naredi seznam vseh katastrof, ki bi se lahko zgodile, če bi ljudje vedeli te stvari o tebi." },
          { isComplete: false, text: "izberi najmanjšo skrivnost in jo povej osebi, ki je ne poznaš." },
          { isComplete: false, text: "Vsaj 5 minut hodi z visoko dvignjeno glavo med ljudmi." },
          { isComplete: false, text: "Vsaj 10 ljudem v enem tednu reci dober dan in jih pri tem glej v oči." },
          { isComplete: false, text: "Najdi nekoga, ki ga poznaš in mu povej svojo najlažjo skrivnost." }
         ] },
        { name: "Družabnost", isExpanded: false, tasks: [
          { isComplete: false, text: "naredi seznam 10 aktivnosti, ki bi jih rad izkusil." },
          { isComplete: false, text: "izberi eno aktivnost in pokliči prijatelja, da gre s teboj." },
          { isComplete: false, text: "Izberi še eno aktivnost in povabi 2 prijatelja." },
          { isComplete: false, text: "najdi aktivnost, kjer sicer ni tvojih prijateljev, a so drugi, novi ljudje." },
          { isComplete: false, text: "Pri kosilu se usedi k družbi, ki jo poznaš le na videz." },
          { isComplete: false, text: "vsaj 3 ljudi povabi na prijateljsko srečanje, lahko vsakega posebej." }
         ] },
        { name: "Urejenost", isExpanded: false, tasks: [
          { isComplete: false, text: "naredi seznam sprememb, ki jih želiš videti pri sebi." },
          { isComplete: false, text: "Označi stvari, ki si se jim pripravljen odpovedati za to, da dosežeš bolj urejen videz." },
          { isComplete: false, text: "Izberi prvo spremembo, na kateri boš začel svoj quest." },
          { isComplete: false, text: "Recimo, da izbere več mišic: Vsaj 5x na teden 5 minut delaj 5 različnih vaj za..." },
          { isComplete: false, text: "Povečaj na 5x na teden po 10 minut" },
          { isComplete: false, text: "Poišči frizerja, ki bo našel pravo frizuro za tvoj izgled." }
         ] },
      ]
    },
    //-------------------------------------------------------------------------
    // pouchdb
    //-------------------------------------------------------------------------
    pouchdb: {
      howtogetaseconddate: {
        localDB: "howtogetaseconddate",
        remoteURL: "http://127.0.0.1:5984/howtogetaseconddate"
      }
    },
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