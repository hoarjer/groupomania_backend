const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./models');
const userRoutes = require('./routes/user');

const app = express();

app.use(cors());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/auth/', userRoutes);

// app.use((req, res, next) => {
//     res.json({message: "hello" });
//     return User;
//     // console.log(db);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Réponse bien envoyée!');
// });

module.exports = app;