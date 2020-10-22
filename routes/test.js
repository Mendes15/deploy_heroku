let db = require('../database');
const sql = "SELECT * FROM STADE";

db.query(sql,(err,res)=>{
    if (err) {
        throw err.message
    } else {
        console.log(res)
    }
})