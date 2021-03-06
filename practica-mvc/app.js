const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const routesMain = require('./routers/mainRouter');

app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('Servidor funcionando - Puerto 3000')
});

app.use('/', routesMain);

