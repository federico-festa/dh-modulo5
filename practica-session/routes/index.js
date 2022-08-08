var express = require('express');
const userController = require('../controllers/user.controller');
const registerValidation = require('../middlewares/userValidations');
var router = express.Router();

/* GET home page. */
router.get('/',  userController.index);
router.post('/', registerValidation , userController.index);
router.get('/user', userController.user);
router.post('/borrar', userController.delete);

module.exports = router;
