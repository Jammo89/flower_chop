const Router = require("express");
const db = require("../db");

const router = new Router();

router.get('/', (req,res)=>{

   
db.query('SELECT login, email FROM customers').then((data)=>{
    res.json(data)
})
})


module.exports = router
