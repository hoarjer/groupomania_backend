const jwt = require('jsonwebtoken');
const db = require('../models');
const Comment = db.comment;

exports.createComment = (req, res, next) => {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    Comment.create({
        content: req.body.content,
        user_id: userId,
        post_id: req.params.id
    })
        .then((comment) => res.status(201).json({ comment }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.getAllComments = (req, res, next) => {
    Comment.findAll()
        .then(comments => res.status(200).json({ comments }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.getComment = (req, res, next) => {
    Comment.findOne({ where: { _id: req.params.id } })
        .then(comment => res.status(200).json({ comment }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.getCommentsByPost = (req, res, next) => {
    Comment.findAll({ where: { post_id: req.params.id } })
        .then(comments => res.status(200).json({ comments }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.getCommentsByUser = (req, res, next) => {
    Comment.findAll({ where: { user_id: req.params.id } })
        .then(comments => res.status(200).json({ comments }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.modifyComment = (req, res, next) => {
    Comment.update({
        content: req.body.content
     },
     { where: { _id: req.params.id } })
        .then(() => res.status(200).json({ message: "Commentaire modifié !" }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.deleteComment = (req, res, next) => {
    Comment.destroy({ where: { _id: req.params.id } })
        .then(() => res.status(200).json({ message: "commentaire supprimé !" }))
        .catch(err => res.status(400).json({ message: err }));
};