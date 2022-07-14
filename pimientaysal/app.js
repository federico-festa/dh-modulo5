const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, './public');
const mainRouter = require('./routes/mainRouter');

app.set('view engine', 'ejs');
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('Servidor funcionando - Puerto 3000')
});

app.use('/', mainRouter);

