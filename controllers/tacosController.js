const Taco = require('../models/Taco');

module.exports = {
    index: function(req,res,next){
        res.render('tacos/index', { tacos: Taco.getAllTacos() });
    },

    new: function(req,res,next){
        res.render('tacos/new');   // we will create a form in that view
    },

    create: function(req,res,next){
        let data = req.body;
        Taco.addTaco(data.tacoName, data.tacoProtein, data.tacoGarnish); //tacoName etc. is the input name from our forms in the view
        res.redirect('/tacos');
    },

    show: function(req,res,next){
        res.render('tacos/show', {taco: Taco.getTaco(req.params.id), id: req.params.id});
    },

    edit: function(req,res,next){
        let id = req.params.id
        let name = Taco.data[id].name;
        res.render('tacos/edit', {id:id, name: name});
    },

    update: function(req,res,next){
        let data = req.body;
        id = req.params.id;
        Taco.updateTaco(id, data.tacoName, data.tacoProtein, data.tacoGarnish);
        res.redirect('/tacos');
    },

    destroy: function(req,res,next){
        Taco.deleteTaco(req.params.id);
        res.redirect('/tacos');
    }
}