let PokemonDetails = require('./pokemon_max.jsx');


let Pokemon_min = React.createClass({
    render(){
        let pokemon = this.props.pokemon;
        let src = "http://pokeapi.co/media/img/" + pokemon.id + ".png";
        let typeNodes = pokemon.get('types').map((type) => {
            return (
                <li key={type.name} className={type.name}>{type.name}</li>
            );
        });
        return (
            <div className="col-xs-4">
                <div className="min-pokemon" data-id={pokemon.id} onClick={this.props.onDetails}>
                    <img src={src} />
                    <h4 className="name">{pokemon.get('name')}</h4>
                    <ul className="types">
                        {typeNodes}
                    </ul>
                </div>
            </div>
        );
    }
});

let Pokemons = React.createClass({
    componentDidMount() {
        this.pokemonDetails = ReactDOM.render(
            <PokemonDetails />,
            $('#details')[0]
        );
        this.props.pokemons.on('add remove change', this.forceUpdate.bind(this, null));
    },
    componentWillUnmount(){
        this.props.pokemons.off(null, null, this);
        ReactDOM.unmountComponentAtNode($('#details')[0]);
    },
    triggerDetails(event){
        var id = $(event.currentTarget).attr('data-id');
        var pokemon = this.props.pokemons.get(id);
        this.pokemonDetails.setState({pokemon});
    },
    render(){
        var onDetails = this.triggerDetails;
        let pokemons = this.props.pokemons.map(function(pokemon) {
            var props = {
                key: pokemon.id,
                pokemon,
                onDetails
            };
            return (
                <Pokemon_min {...props} />
            );
        });
        return (
            <div>
                {pokemons}
            </div>
        );
    }
});


module.exports = Pokemons;