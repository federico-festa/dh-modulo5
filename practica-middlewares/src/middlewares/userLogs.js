const fs = require('fs');
const path = require('path');
const { check,body } = require('express-validator');

const logs = path.join(__dirname, '../logs/userLogs.txt');

const userLogs = (req, res, next) => {
    fs.appendFileSync(logs, 'El usuario ingreso a la ruta:' + req.url + '\n');
    next();
};

module.exports = userLogs;