const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const adminAuth = require('../middlewares/adminAuth');

router.get('/', userController.index);
router.get('/users', userController.users);
router.get('/products', userController.products);
router.get('/admin', adminAuth, userController.admin);

module.exports = router;


// Crear rutas:
// /index
// /products
// /admin
// /users


