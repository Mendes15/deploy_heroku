//APP.JS SERT A PARAMETRER LE SERVEUR 

//   1-CREATION DES DEPENCES DE MODULES
//   MODULE DE JS.NODE
//   CONST HTTPS = REQUIRE('https);

const fs = require('fs');
const express = require('express');
//app est le serveur creer 
const app = express();
//routeur pour declarer des routes ex: GET / POST / PUT
const router = express.Router();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const mysqlApostrophe = require('mysql-apostrophe');


//IMPORT DES MODULES CREES
var database = require('./database');


//
app.use(cors())

//2-MISE EN PLACE DU BODY PARSEUR QUI PERMET DE LIRE LES JSON ET URL
//BODYPARSEUR SERT A EXPLOITER LES DONNEES



app.use(bodyParser.json());//LIRE LES BODY ENCODES EN JSON
app.use(bodyParser.urlencoded({
    extended:true   //LIRE LES BODY ENCODES EN URL
}));


//3- mise en place de mysql apostrophe
app.use(mysqlApostrophe); //permet d'inserer des champs contenant des apostrophes

//4-Recuperation des fichiers Routes dans le dossier route
//ACCE A UN FICHIER
const lecture = require("./routes/read");
const ajouter = require("./routes/create")
const modifier = require("./routes/update")
const supprimer = require("./routes/delete")


//5-UTILISATION DES ROUTES
//LIRE LE FICHIER GRACE AU ENDPOINT "/routesread" --> "/routesread/allstadium"
app.use("/routesread", lecture);
app.use("/create", ajouter);
app.use("/update",modifier);
app.use("/delete",supprimer);

//------------------------------------------//
//  Lignes qui servent pour le déploiement  //
//------------------------------------------//
// 1°) Créer une contante qui reçoit le module path
const path = require('path'); 
// 2°) Préciser que Express va chercher des infos dans le dossiers build
app.use(express.static(path.join(__dirname, '/build')));
// app.use(express.static("public"));
// 3°) Préciser que Express va chercher des app en utilisant le préfixe "/""
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//------------------------------------------//
//    Fin des lignes pour le déploiement    //
//------------------------------------------//


//3- Choix du port utiliser par le serveur
const port = process.env.port || 3002; //RECUPERER UN PORT LIBRE SINON 3000
app.listen(port, function () {
    console.log("Ok sa marche");
    console.log("Le serveur utilise le port : " + port);
});



