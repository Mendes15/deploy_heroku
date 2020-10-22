// 1 - CREATION DES DEPENDANCE DE MODULES

var mysql = require('mysql');

//2- Connexion a la base de donnees
const dbConnexion = mysql.createConnection({
    host: "localhost",
    database: "bdd_tournoi_foot_national",
    user: "root",
    password: "root",
    port: "8889",
    //socketPath est disponible sur la page d'acceuil du MAMP local
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    strict : false //permets d'entrer des valeurs NULL pour les champs date 
});

//3-VERIFICATION DE  LA CONNEXION A LA BASE

dbConnexion.connect((err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("Connexion a la base reussie")
        }
});

//LISTE DES VARIABLES QUI VONT ETRE EXPORTEES
//NOM DE L'EXPORT : VARIABLES EXPORTESS
module.exports = dbConnexion