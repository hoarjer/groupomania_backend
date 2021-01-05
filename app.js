const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./models');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');

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
app.use('/api/', postRoutes);
app.use('/api/', commentRoutes);

db.sequelize
.sync({ force: false })
.then(() => console.log("Drop and resync with {force: true}"));

module.exports = app;