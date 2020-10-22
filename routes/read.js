//1-Creation des depences de module
//Module de Js.node

const mysql = require("mysql"); //Appel du module MYSQL qui permet d'agir sur une base de donnees
const express = require("express"); //Appel du module permettant de faire la route

//Import DES MODULES CREES
let db = require("../dataBase"); //RECUPERE LES MODULES DE LA BASE DE DONNEE
//let connction = mysql.createConnection(db);
//VARIABLE QOI RECOIT LA CONNECTION A LA BASE DE DONNEE

//2-CREATION DE LA ROUTE QUI SERA EXPORTEES PAR LA SUITE DANS Server.js
const app = express.Router();

//TABLE STADE

app.get("/allstadium", function (req, res) {
  let requete = `SELECT * FROM STADE`;
  //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
  db.query(requete, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
      console.log(err.message);
    } else {
      res.send(rows);
      console.log(rows);
    }
  });
});

//TABLE JOUEUR

app.get("/allplayer", function (req, res) {
  let requete = `SELECT *
  FROM JOUEUR
  `;
  //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
  db.query(requete, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
      console.log(err.message);
    } else {
      res.send(rows);
      console.log(rows);
    }
  });
});

//TABLE EQUIPE

app.get("/allteams", function (req, res) {
  let requete = `SELECT * FROM EQUIPE
  `;
  //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
  db.query(requete, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
      console.log(err.message);
    } else {
      res.send(rows);
      console.log(rows);
    }
  });
});


//TABLE POSTE

app.get("/allposte", function (req, res) {
  let requete = `SELECT *
  FROM POSTE
  `;
  //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
  db.query(requete, (err, rows, fields) => {
    if (err) {
      res.send(err.message);
      console.log(err.message);
    } else {
      res.send(rows);
      console.log(rows);
    }
  });
});

//4-Export de la route creation cree au point 2 qui va devenir un module
module.exports = app;
