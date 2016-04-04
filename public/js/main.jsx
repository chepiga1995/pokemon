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
var Types = require('../templates/pokemon_min.jsx');

$.getJSON('http://pokeapi.co/api/v1/pokemon/?limit=12').done(function(data){
    render(data.objects);
});

function render(pokemons){
    ReactDOM.render(
        <Types pokemons = {pokemons} />,
        $('#content')[0]
    );
    //_.each(pokemons, (pokemon) => {
    //    $('#pokemons').append(temp({pokemon: pokemon}));
    //});

}
