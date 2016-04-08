var Pokemon = Backbone.Model.extend({
    idAttribute: 'pkdx_id',
    defaults: {
        visible: true
    }
});

var Pokemons = Backbone.Collection.extend({
    model: Pokemon,
    offset: 0,
    batchSize: 12,
    initialize(){
        this.url = `http://pokeapi.co/api/v1/pokemon/?limit=${this.batchSize}&offset=${this.offset * this.batchSize}`;
        this.fetch();
    },
    loadMore(){
        this.offset++;
        this.url = `http://pokeapi.co/api/v1/pokemon/?limit=${this.batchSize}&offset=${this.offset * this.batchSize}`;
        this.fetch({remove: false});
    },
    parse(response) {
        return response.objects;
    }
});

module.exports = Pokemons;