//Import global variables
let jquery = require('jquery');
let underscore = require('underscore');
let backbone = require('backbone');
global.$ = jquery;
global.jQuery = jquery;
global._ = underscore;
global.Backbone = backbone;

global.React = require('react');
global.ReactDOM = require('react-dom');
if (typeof window !== 'undefined') {
    window.React = React;
}

let App = require('./controllers/app.jsx');
let app = new App();
app.render();
