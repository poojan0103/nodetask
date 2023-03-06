const express = require("express");
var router = express.Router();

const  usercontroller = require("../controller/userController");
 router.post('/login',usercontroller.registeruser)
 router.get('/get',usercontroller.getUserByToken)
//   router.get('/get',usercontroller.verifytoken)
 module.exports = router;