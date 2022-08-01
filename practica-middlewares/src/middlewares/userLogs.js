const fs = require('fs');
const path = require('path');
const { check,body } = require('express-validator');

const userLogs = ((req, res, next) => {
    fs.appendFileSync('userLogs.js', 'El usuario ingreso a la ruta:' + req.url);
    next();
});

module.exports = userLogs;