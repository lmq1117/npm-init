// require("./second.js");
// require("./style.css");
// document.getElementById("msg").innerHTML = "这是entry.js里的一段话";


const Vue = require('vue/dist/vue');


new Vue({
    el:'#main',
    data:{
        message:'hello vue,this is limq!'
    }
});