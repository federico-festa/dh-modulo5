const express = require('express');

const platos = [
    {
        nombre: 'Carpaccio fresco',
        precio: 'U$S 65.50',
        descripcion: 'Entrada Carpaccio de salmón con cítricos',
        img: 'Carpaccio-de-salmon.jpg',
    },
    {
        nombre: 'Risotto de berenjena',
        precio: 'U$S 47.00',
        descripcion: 'Risotto de berenjena y queso de cabra',
        img: 'Risotto-berenjena-queso-cabra.jpg'
    },
    {
        nombre: 'Mousse de arroz',
        precio: 'U$S 27.50',
        descripcion: 'Mousse de arroz con leche y aroma de azahar',
        img: 'Mousse-de-arroz-con-leche.jpg'
    },
    {
        nombre: 'Espárragos blancos',
        precio: 'U$S 37.50',
        descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        img: 'esparragos.png'
    }
]

const controller = {
    index: (req, res) => {
        res.render('index', {platos});
    },
    detalleMenu: (req, res) => {
        let idPlato = req.params.id;
        res.render('detalleMenu', {plato: platos[idPlato]});
    }
};

module.exports = controller;