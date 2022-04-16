const Router = require("express");
const userRouter = require('./userRouter')

const router = new Router();

router.use('/users', userRouter)



module.exports = router