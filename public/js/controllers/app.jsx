let PokemonsCollection = require('../models/pokemons.js');
var PokemonsView = require('../views/pokemon_min.jsx');
class App {
    constructor(){
        this.pokemons = new PokemonsCollection();
        this.view = null;
        $('#load_more').on('click', this.pokemons.loadMore.bind(this.pokemons));
        $(window).on('scroll', this.handleScroll.bind(this));
    }
    render(){
        this.view = ReactDOM.render(
            <PokemonsView pokemons={this.pokemons} />,
            $('#pokemons')[0]
        );
    }
    handleScroll(){
        let scroll = $(window).scrollTop();
        if(scroll > 90){
            $('#details').css('position', 'fixed');
        } else {
            $('#details').css('position', 'static');
        }
    }
    static destroy(){
        $('#load_more').off('click');
        $(window).off('scroll');
        ReactDOM.unmountComponentAtNode($('#pokemons')[0]);
    }
}

module.exports = App;