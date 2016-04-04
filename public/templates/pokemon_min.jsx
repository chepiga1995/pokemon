let Pokemon_min = React.createClass({
    render(){
        var pokemon = this.props.pokemon;
        var src = "http://pokeapi.co/media/img/" + pokemon.pkdx_id + ".png";
        return (
            <div className="col-xs-4">
                <div className="min-pokemon" data-id={pokemon.pkdx_id}>
                    <img src={src} />
                    <h4 className="name">{pokemon.name}</h4>
                    <TypeList types={pokemon.types} />
                </div>
            </div>
        );
    }
});

let TypeList =  React.createClass({
    render(){
        var typeNodes = this.props.types.map((type) => {
            return (
                <li key={type.name} className={type.name}>{type.name}</li>
            );
        });
        return (
            <ul className="types">
                {typeNodes}
            </ul>
        );
    }
});

var Pokemons = React.createClass({
    render(){
        var pokemons = this.props.pokemons.map(function(pokemon) {
            return (
                <Pokemon_min key={pokemon.pkdx_id} pokemon={pokemon} />
            );
        });
        return (
            <div className="col-xs-8" id="pokemons">
                {pokemons}
            </div>
        );
    }
});


module.exports = Pokemons;