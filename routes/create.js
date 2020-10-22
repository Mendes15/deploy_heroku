//1-Creation des depences de module
//Module de Js.node

const mysql = require("mysql"); //Appel du module MYSQL qui permet d'agir sur une base de donnees
const express = require("express"); //Appel du module permettant de faire la route

//Import DES MODULES CREES
let db = require("../database"); //RECUPERE LES MODULES DE LA BASE DE DONNEE
//let connction = mysql.createConnection(db);
//VARIABLE QUI RECOIT LA CONNECTION A LA BASE DE DONNEE

//2-CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS Server.js
const app = express.Router();

//TABLE STADE

app.post("/newstade", function (req, res) {
    let verifRequete = `SELECT * FROM STADE WHERE nom_stade="${req.body.nom_stade}"`;
    //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
    db.query(verifRequete, (err, rows, fields) => {
      if (err) {
          console.log(err.message)
          res.send(err.message);
      } else if (rows.length > 0){
        res.send("La valeur saisie existe déja");
      } else {
            let ajoutStade = `INSERT INTO STADE (nom_stade, adresse_stade, cp_stade, ville_stade, pays_stade) VALUES ('${req.body.nom_stade}','${req.body.adresse_stade}','${req.body.cp_stade}','${req.body.ville_stade}','${req.body.pays_stade}')`
            //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
            db.query(ajoutStade, (errTwo, rowsTwo, fieldsTwo) => {
                if (errTwo) {
                    console.log(errTwo.message)
                    res.send(errTwo.message);
                }else {
                    console.log(`Le Stade "${req.body.nom_stade}" a bien été créée`);
                    res.send(`Le Stade "${req.body.nom_stade}" a bien été créée`);
                }
            });
        }
    });
});

//TABLE JOUEUR

app.post("/newjoueur", function (req, res) {
    let verifRequete = `SELECT * FROM JOUEUR WHERE nom_joueur="${req.body.nom_joueur}" AND prenom_joueur="${req.body.prenom_joueur}" AND date_naissance_joueur="${req.body.date_naissance_joueur}"`;
    //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
    db.query(verifRequete, (err, rows, fields) => {
    if (err) {
        console.log(err.message)
        res.send(err.message);
    } else if (rows.length > 0){
      res.send("La valeur saisie existe déja");
    } else {
          let ajoutJoueur = `INSERT INTO JOUEUR (nom_joueur , prenom_joueur, numero, date_naissance_joueur, id_poste, id_equipe) VALUES ('${req.body.nom_joueur}','${req.body.prenom_joueur}','${req.body.numero}','${req.body.date_naissance_joueur}','${req.body.id_poste}','${req.body.id_equipe}')`
          //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
          db.query(ajoutJoueur, (errTwo, rowsTwo, fieldsTwo) => {
              if (errTwo) {
                  console.log(errTwo.message)
                  res.send(errTwo.message);
              }else {
                  console.log(`Le Joueur "${req.body.nom_joueur}" a bien été créée`);
                  res.send(`Le Joueur "${req.body.nom_joueur}" a bien été créée`);
              }
          });
    }
    });
});
//4-Export de la route creation cree au point 2 qui va devenir un module
module.exports = app;
