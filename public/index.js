'use strict'

const express = require('express');
const app = express();
const port = 9000;

// import handlebars
const expressHandlebars = require('express-handlebars');

// static file
app.use(express.static(__dirname + '/public'));

// cấu hình handlebars
app.engine('hbs', expressHandlebars.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts'
}));

app.set('view engine', 'hbs');

// route trang chủ
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Trang chủ',
        name: 'Teo'
    });
});

// chạy server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
