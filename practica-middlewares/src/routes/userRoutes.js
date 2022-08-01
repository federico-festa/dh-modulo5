const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.index);
router.get('/users', userController.users);
router.get('/products', userController.products);
router.get('/', userController.admin);


// Crear rutas:
// /index
// /products
// /admin
// /users


