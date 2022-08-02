const fs = require('fs');
const path = require('path');

const controller = {
    index: (req,res) => {
        res.render('index');
    },
    users: (req,res) => {
        res.render('index');
    },    
    products: (req,res) => {
        res.render('index');
    },
    admin: (req,res) => {
        let admin = req.query.user;
        res.render('admin', {admin: admin});
    }
}

module.exports = controller;