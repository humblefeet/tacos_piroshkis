const piroshkiModel  =  {
    data: [
        {
            name: "Beefy",
            filling: "beef and onions",
            size: 3
        },
        {
            name: "Vodchka",
            filling: "potatoes and vodka",
            size: 5
        }
    ],
    addPiroshki: function(name, filling, size){
        let newPiroshki = {
            name: name,
            filling: filling,
            size: size
        };
        this.data.push(newPiroshki);
    },
    getAllPiroshkis:  function(){
        return this.data;
    },
    getPiroshki: function(id){
        return this.data[id];
    },
    updatePiroshki: function(id, name, filling, size){
        let fixPiroshki = this.data[id];
        fixPiroshki.name = name;
        fixPiroshki.filling = filling;
        fixPiroshki.size = size;
        return fixPiroshki;
    },
    deletePiroshki: function(id){
        if(id < this.data.length && id >= 0){
            this.data.splice(id, 1);
        };
    }
}

module.exports = piroshkiModel;