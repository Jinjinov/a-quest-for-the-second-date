
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
          "vsaj 10 osebam reci Dober dan v naslednjem tednu.",
          "vsaj desetim osebam v naslednjem tednu ponudi pomoč.",
          "vsaj trem ljudem, ki jih še nikoli prej nisi videl, zaželi lep dan in se jim nasmehni.",
          "pojdi v tri ralične trgovine, v katerih še nisi bil in prosi za pomoč pri nakupu.",
          "pokliči dva človeka v naslednjem tednu in reci, da bi se rad pogovarjal. Potem jim predlagaj temo pogovora.",
          "nekoga, ki ga dobro poznaš, vprašaj za mnenje o stvari, ki je zate zelo pomembna"
         ] },
        { name: "Samozavest", isExpanded: true, tasks: [
          "vsaj 5 minut na dan v zavetju svojega doma hodi z glavo pokonci, predstavljaj si, da na glavi nosiš vrč vode, ki ne sme pasti na tla.",
          "Vsaj desetim osebam v enem tednu poglej v oči, pa čeprav samo za sekundo.",
          "Vsaj trem ljudem se nasmehni in jih poglej v oči, takim, ki jih poznaš vsaj na videz.",
          "naredi seznam vseh skrivnosti, ki jih drugi ne smejo vedeti o tebi.",
          "naredi seznam vseh katastrof, ki bi se lahko zgodile, če bi ljudje vedeli te stvari o tebi.",
          "izberi najmanjšo skrivnost in jo povej osebi, ki je ne poznaš.",
          "Vsaj 5 minut hodi z visoko dvignjeno glavo med ljudmi.",
          "Vsaj 10 ljudem v enem tednu reci dober dan in jih pri tem glej v oči.",
          "Najdi nekoga, ki ga poznaš in mu povej svojo najlažjo skrivnost."
         ] },
        { name: "Družabnost", isExpanded: true, tasks: [
          "naredi seznam 10 aktivnosti, ki bi jih rad izkusil.",
          "izberi eno aktivnost in pokliči prijatelja, da gre s teboj.",
          "Izberi še eno aktivnost in povabi 2 prijatelja.",
          "najdi aktivnost, kjer sicer ni tvojih prijateljev, a so drugi, novi ljudje.",
          "Pri kosilu se usedi k družbi, ki jo poznaš le na videz.",
          "vsaj 3 ljudi povabi na prijateljsko srečanje, lahko vsakega posebej."
         ] },
        { name: "Urejenost", isExpanded: true, tasks: [
          "naredi seznam sprememb, ki jih želiš videti pri sebi.",
          "Označi stvari, ki si se jim pripravljen odpovedati za to, da dosežeš bolj urejen videz.",
          "Izberi prvo spremembo, na kateri boš začel svoj quest.",
          "Recimo, da izbere več mišic: Vsaj 5x na teden 5 minut delaj 5 različnih vaj za...",
          "Povečaj na 5x na teden po 10 minut",
          "Poišči frizerja, ki bo našel pravo frizuro za tvoj izgled."
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