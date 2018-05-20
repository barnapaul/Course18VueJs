import Vue from 'vue';
// import { start } from 'repl';

const $ = require('jquery');

global.$ = global.jQuery = $;

require('../scss/main.css');

require('bootstrap/dist/css/bootstrap.css');
require('bootstrap');


new Vue({
	el: '#app',
	data: {
		description: 'Create Your Own Color',
		bgc: {
			backgroundColor: ''
		}
	}
})