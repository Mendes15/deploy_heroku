//1-Creation des depences de module
//Module de Js.node

const mysql = require("mysql"); //Appel du module MYSQL qui permet d'agir sur une base de donnees
const express = require("express"); //Appel du module permettant de faire la route

//Import DES MODULES CREES
let db = require("../dataBase"); //RECUPERE LES MODULES DE LA BASE DE DONNEE
//let connction = mysql.createConnection(db);
//VARIABLE QUI RECOIT LA CONNECTION A LA BASE DE DONNEE

//2-CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS Server.js
const app = express.Router();

//TABLE JOUEUR

app.put("/modifjoueur/:id", function (req, res) {
  let modifJoueur = `
            UPDATE JOUEUR 
            SET  
                nom_joueur = "${req.body.nom_joueur}"
            WHERE 
            id_joueur="${req.params.id}"`;
  //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
  db.query(modifJoueur, (errTwo, rowsTwo, fieldsTwo) => {
    if (errTwo) {
      console.log(errTwo.message);
      res.send(errTwo.message);
    } else {
      console.log(`Le Joueur "${req.body.nom_joueur}" a bien été modifier`);
      res.send(`Le Joueur "${req.body.nom_joueur}" a bien été modifier`);
    }
  });
});

//TABLE STADE

app.put("/modifstade/:id", function (req, res) {
  let modifstade = `
      UPDATE STADE 
      SET  
            ville_stade = "${req.body.ville_stade}",
            pays_stade = "${req.body.pays_stade}"
      WHERE 
            id_stade=${req.params.id}`;
  //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
  db.query(modifstade, (errTwo, rowsTwo, fieldsTwo) => {
    if (errTwo) {
      console.log(errTwo.message);
      res.send(errTwo.message);
    } else {
      console.log(`Le Stade "${req.body.nom_stade}" a bien été modifier`);
      res.send(`Le Stade "${req.body.nom_stade}" a bien été modifier`);
    }
  });
});

//4-Export de la route creation cree au point 2 qui va devenir un module
module.exports = app;
