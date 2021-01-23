const db = require('../models');
const User = db.user;
const fs = require('fs');

module.exports = (req, res, next) => {
    if (req.file) {
        User.findOne({ where: { _id: req.params.id } })
        .then(user => {
            const filename = user.img_url.split('/images')[1];
            fs.unlink(`images/${filename}`, () => next())
        })
        .catch(err => res.status(500).json({ err }));
    } else {
        next();
    }
};