const Piroshki =  require('../models/Piroshki');

module.exports ={

    index: function(req,res, next){
        res.render('piroshkis/index', {piroshkis : Piroshki.getAllPiroshkis()})
    },

    new: function(req,res, next){
        res.render('piroshkis/new');
    },

    create: function(req,res, next){
        let data =  req.body;
        Piroshki.addPiroshki(data.piroshkiName, data.piroshkiFilling, data.piroshkiSize);
        res.redirect('/piroshkis');
    },

    show: function(req,res, next){
        let id = req.params.id;
        res.render('piroshkis/show',{piroshki: Piroshki.getPiroshki(id), id:id});
    },

    edit: function(req,res, next){
        let id = req.params.id;
        let name = Piroshki.data[id].name;
        res.render('piroshkis/edit', { id: id, name: name });
    },

    update: function(req,res, next){
        let id = req.params.id;
        let data = req.body;
        Piroshki.updatePiroshki(id, data.piroshkiName, data.piroshkiFilling, data.piroshkiSize);
        res.redirect('/piroshkis');
    },

    destroy: function(req,res, next){
        Piroshki.deletePiroshki(req.params.id);
        res.redirect('/piroshkis');
    }
}

