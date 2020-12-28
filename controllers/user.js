const db = require('../models');
const User = db.user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    // formatage du mdp
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    if (regexPassword.test(req.body.password)) {
        // hachage du mdp + salage * 10
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new User({
                    lastname: req.body.lastname,
                    firstname: req.body.firstname,
                    email: req.body.email,
                    password: hash
                });
                // sauvegarde de l'utilisateur
                user.save()
                    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                    .catch(error => res.status(400).json({ message: error }));
            })
            .catch(error => res.status(500).json({ message: error }));
    } else {
        return res.status(400).json({ message: 'Le mot de passe doit être composé d\'au moins 10 caractères comprenant au moins un chiffre, une lettre majuscule, une lettre minuscule et un des caractères spéciaux suivants: @$!%*?&.' });
    }
};

exports.login = (req, res, next) => {
    console.log(req.body);
    // vérification de l'email
    User.findOne({
        where: { email: req.body.email }
    })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Utilisateur non trouvé !' });
            }
            // comparaison du mdp
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Mot de passe incorrect !' });
                    }
                    // création du token contenant le userId
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '1h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getAllUsers = (req, res, next) => {
    User.findAll()
    .then( users => res.status(200).json({ users }))
    .catch( err => res.status(400).json({ err }));
};

exports.getOneUser = (req, res, next) => {
    User.findOne({ where: { _id: req.params.id } })
        .then(user => res.status(200).json({ user }))
        .catch(err => res.status(400).json({ err }));
};

exports.modifyUser = (req, res, next) => {
    userObject = req.body;
    User.update({ ...userObject }, { where: { _id: req.params.id }})
    .then(() => res.status(200).json({ message: "L'utilisateur a été modifié !"}))
    .catch(err => res.status(400).json({ err }));
};

exports.deleteUser = (req, res, next) => {
    User.destroy({ where: { _id: req.params.id }})
    .then(() => res.status(200).json({ message: "Utilisateur supprimé !"}))
    .catch(err => res.status(400).json({ err }));
};