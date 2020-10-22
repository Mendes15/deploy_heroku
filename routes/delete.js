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

app.delete("/deleteJoueur/:id", function (req, res) {

    let verifId = `SELECT * FROM JOUEUR where id_joueur=${req.params.id}`;

    db.query(verifId, (err, rows) => { 
            if (err) {
                console.log(err.message);
                res.send(err.message);
            } else if (rows.length == 0 ){
                res.send("l'id saisie n'existe pas");
                console.log(`NB lignes supp ${rows.length}`);
            } else {
                let deleteJoueur = ` DELETE FROM JOUEUR WHERE id_joueur=${req.params.id}`;
                //La requete renverra soit une erreur "err" soit un resultat "row" qui contient le nombre de ligne
                db.query(deleteJoueur, (errTwo, rowsTwo, fieldsTwo) => {  
                    if (errTwo) {
                        console.log(errTwo.message);
                        res.send(errTwo.message);
                    } else {
                        console.log(`Le Joueur ${req.params.id} a bien été supprimer de la BDD`);
                        console.log(`NB lignes supp ${rows.length}`);
        
                        res.send(`Le Joueur ${req.params.id} a bien été supprimer de la BDD`);
                    }
                });
            }
    });
});


//VERSION 2 pour delete un joueur
app.delete('/deljoueurv2/:idRecu',function(req,res){
    let paramUrl = req.params.idRecu
    let requete = `DELETE FROM JOUEUR WHERE id_joueur=${paramUrl}`

    //La requete renverra soit une erreur "err" soit un resultat "row" qui contient chaque ligne d'enregiste

    db.query(requete, (err,rows) => {
        if (errTwo) {
            console.log(errTwo.message);
            res.send(errTwo.message);
        } else {
            //Je vérifie que la requete a bien engendré une mise a jour 
            let nbLignesModif = rows.affectedRows
            if (nbLignesModif == 0) {
                console.log(`NB lignes supp ${rows.length}`)
                res.send(`${nbLignesModif} ligne modifiée : l'ID "${paramUrl}" n'existe pas`);
            } else {
                console.log(`${nbLignesModif} ligne modifiée : le joueur ayant l'ID "${paramUrl}" a été modifier`)
                res.send(`${nbLignesModif} ligne modifiée :le joueur ayant l l'ID "${paramUrl}" a été supprimer`);
            }
        }
    })
})


  //4-Export de la route creation cree au point 2 qui va devenir un module
module.exports = app;
