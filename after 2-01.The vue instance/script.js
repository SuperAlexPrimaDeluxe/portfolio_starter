const posts = [
  {
    id: 1,
    title: "5 raisons pourquoi j'ai appris vue",
    body: `I'm baby chambray street art thundercats occupy four loko
    church-key disrupt. Shaman neutra bushwick chicharrones, tousled
    air plant lomo williamsburg. Listicle aesthetic whatever prism,
    ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`
  },
  {
    id: 2,
    title: "7 raisons pourquoi je vais apprendre React par la suite",
    body: `I'm baby chambray street art thundercats occupy four loko
    church-key disrupt. Shaman neutra bushwick chicharrones, tousled
    air plant lomo williamsburg. Listicle aesthetic whatever prism,
    ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`
  },
  {
    id: 3,
    title: "En plas de résistance Angular ou Ember ?",
    body: `I'm baby chambray street art thundercats occupy four loko
    church-key disrupt. Shaman neutra bushwick chicharrones, tousled
    air plant lomo williamsburg. Listicle aesthetic whatever prism,
    ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`
  }
];

Vue.createApp({
  data(){
    return{
      name: "Super Alex Prima Deluxe",
      links: ['home', 'portfolio', "contact me"]
    }
  }
}).mount("header"); // Instance qui va monter l'app sur la partie header
Vue.createApp({
  data(){
    return{
      //posts: posts,
      posts, // Depuis ES6 si la valeur déclarée dans DATA à le même nonm que la constante déclarée le nom ce suffit à lui même.
    }
  }
}).mount("#blog"); // Instance qui va monter l'app la partie blog
