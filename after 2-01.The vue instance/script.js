Vue.createApp({
  data(){
    return{
      name: "Super Alex Prima Deluxe",
      links: ['home', 'portfolio', "contact me"]
    }
  }
}).mount("header"); // Instance qui va monter l'app sur la partie header
Vue.createApp().mount("#blog"); // Instance qui va monter l'app la partie blog
