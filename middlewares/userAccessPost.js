const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.user;
const Post = db.post;

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    Post.findOne({ where: { _id: req.params.id } })
        .then(post => {
            if (post.user_id != userId) {
                User.findOne({ where: { _id: userId } })
                    .then((user) => {
                        if (user.is_admin != true) {
                            res.status(500).json({ message: "vous n'êtes pas l'auteur de ce post" });
                        } else {
                            next();
                        }
                    })
                    .catch(err => res.status(400).json({ err }));
            } else {
                next();
            }
        })
        .catch(err => res.status(400).json({ message: "Accès refusé" }));
};