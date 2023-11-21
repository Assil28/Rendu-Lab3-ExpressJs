//Importation du module Express :
var express = require('express');

//Création de l'application Express 
//Une instance d'application Express est créée.
var app=express();

//Middleware utilisant app.all 
//Le middleware app.all est utilisé pour traiter toutes les méthodes HTTP (GET, PUT, POST, DELETE) sur la route "/". Il écrit "all" dans la réponse et appelle next() pour passer au middleware suivant.
app.all('/',function(req,res,next){
    res.write('all\n');
    next();
});


//Routes pour chaque méthode HTTP 

//Pour chaque méthode HTTP spécifique (GET, PUT, POST, DELETE), une route est définie sur la même route ("/"). Chaque route renvoie une réponse spécifique à la méthode correspondante.
app.get('/',function(req,res,next){
    res.end('get');
});

app.put('/',function(req,res,next){
    res.end('put');
});

app.post('/',function(req,res,next){
    res.end('post');
});

app.delete('/',function(req,res,next){
    res.end('delete');
});

//Écoute du serveur sur le port 3000
app.listen(3000);