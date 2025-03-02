
// const express = require('express')

// const router = express.Router();

// const User = require('../controllers/userController')

// router.post('/login',User.loginUser)
// router.post('/register',User.registerUser)
// // router.get('/view_users',userController.getUser)
// // router.post('/create_users',userController.createUser)

// // router.put('/:id',userController.updateUser)
// // router.delete('/:id',userController.deleteUser)

// module.exports = router; 

const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
