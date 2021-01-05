const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.user;
const Post = db.post;

// middleware d'authentification qui vérifie que le userId et bien celui qu'on retrouve dans le token
// ce qui autorise les modifications des données
// module.exports = (req, res, next) => {
//     const token = req.headers.authorization;
//     if (token) {
//         const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
//                 User.findOne(decodedToken)
//                     .then(() => {
//                         console.log(decodedToken);
//                         res.status(200).json({ message: 'Vous êtes autorisés !' });
//                         next();
//                     })
//                     .catch(err => res.statsu(403).json(err));
        
//     }
//     next();
// };

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