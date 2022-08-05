const { body } = require('express-validator');


const registerValidation = [
    body("nombre").notEmpty().withMessage("Por favor complete con su nombre").bail().isLength( {min: 3} ).withMessage("El Nombre debe tener al menos 3 caracteres").bail().isLength( {max: 15} ).withMessage("El Nombre debe tener maximo 15 caracteres"),
    body("email").notEmpty().withMessage("Por favor complete con su email").bail().isEmail().withMessage("Por favor ingrese un email válido"),
    body("color").notEmpty().withMessage("Por favor complete con su color"),
    body("edad").isNumeric().bail(),    
]

module.exports = registerValidation;
