var PokemonDetails = React.createClass({
    render(){
        if(!this.state){
            return (
                <div></div>
            );
        }
        var pokemon = this.state.pokemon;
        var name = pokemon.get('name') + '#' + (1000 + pokemon.id).toString().slice(1);
        var src = "http://pokeapi.co/media/img/" + pokemon.id + ".png";
        var type = _.map(pokemon.get('types'), 'name').join(', ');
        return (
            <div className="max-pokemon">
                <img src={src}/>
                <h4 className="name">{name}</h4>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <td>{type}</td>
                        </tr>
                        <tr>
                            <th>Attack</th>
                            <td>{pokemon.get('attack')}</td>
                        </tr>
                        <tr>
                            <th>Defense</th>
                            <td>{pokemon.get('defense')}</td>
                        </tr>
                        <tr>
                            <th>HP</th>
                            <td>{pokemon.get('hp')}</td>
                        </tr>
                        <tr>
                            <th>SP Attack</th>
                            <td>{pokemon.get('sp_atk')}</td>
                        </tr>
                        <tr>
                            <th>SP Defense</th>
                            <td>{pokemon.get('sp_def')}</td>
                        </tr>
                        <tr>
                            <th>Speed</th>
                            <td>{pokemon.get('speed')}</td>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <td>{pokemon.get('weight')}</td>
                        </tr>
                        <tr>
                            <th>Total moves</th>
                            <td>{pokemon.get('moves').length}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = PokemonDetails;