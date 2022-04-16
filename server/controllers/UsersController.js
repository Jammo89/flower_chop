const db = require("../db");


class UsersController {
    async create(req,res){
        try{


        }catch (e) {
            res.status(500).json(e)
        }

    }
    async get(req,res){
        try {
            db.query("SELECT id, login, surname, email, phone_number, password, firstname FROM customers").then((data)=>{
                res.json(data)
            })
            
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = new UsersController();