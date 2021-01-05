const jwt = require('jsonwebtoken');
const db = require('../models');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const userId = decodedToken.userId;
        if (req.body.user_id && req.body.user_id !== userId) {
            res.status(403).json({ message: "User ID non valable !" });
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: "Requête non authentifiée !"});
    }
};