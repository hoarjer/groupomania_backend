const jwt = require('jsonwebtoken');
const sequelize = require('sequelize');
const db = require('../models');
const Post = db.post;

exports.createPost = (req, res, next) => {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    Post.create({
        content: req.body.content,
        gif_url: req.body.gif_url,
        user_id: userId
    })
        .then((post) => res.status(201).json({ post }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.getAllPosts = (req, res, next) => {
    Post.findAll()
        .then(posts => res.status(200).json({ posts }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.getLastPosts = (req, res, next) => {
    Post.findAll({order: sequelize.literal("created_at DESC")})
        .then(post => res.status(200).json({ post }))
        .catch((err) => res.status(400).json({ err }));
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({ where: { _id: req.params.id } })
        .then(post => res.status(200).json({ post }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.modifyPost = (req, res, next) => {
    Post.update({
        content: req.body.content,
        gif_url: req.body.gif_url,
    }, { where: {
        _id: req.params.id
    } })
        .then(() => res.status(200).json({ message: "Post modifié !" }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.deletePost = (req, res, next) => {
    Post.destroy({ where: {
        _id: req.params.id
    } })
        .then(() => res.status(200).json({ message: "Post supprimé !" }))
        .catch(err => res.status(400).json({ message: "pas possible" }));
};