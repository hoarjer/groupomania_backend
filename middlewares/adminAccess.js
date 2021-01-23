const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.user;

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    User.findOne({ where: { _id: userId } })
        .then((user) => {
            if (user.is_admin != true) {
                res.status(500).json({ message: "Access refusé !" });
            } else {
                next();
            }
        })
        .catch(err => res.status(400).json({ err }));
};