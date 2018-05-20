import Vue from 'vue';
// import { start } from 'repl';

const $ = require('jquery');

global.$ = global.jQuery = $;

require('../scss/main.css');

require('bootstrap/dist/css/bootstrap.css');
require('bootstrap');


let app = new Vue({
    el: '#app',
    data: {
        mycolor: '#ffffff'
    },
    methods: {
        generator: function(event){
            this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
            document.body.style.background = this.mycolor
        }
    }
});