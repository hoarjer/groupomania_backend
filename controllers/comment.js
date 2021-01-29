const jwt = require('jsonwebtoken');
const db = require('../models');
const Comment = db.comment;
const Post = db.post;
const User = db.user;

exports.createComment = (req, res, next) => {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    Comment.create({
        content: req.body.content,
        userId: userId,
        postId: req.params.id
    })
        .then((comment) => res.status(201).json({ comment }))
        .catch(err => {
            res.status(400).json({ err });
        });
};

exports.getAdminComments = (req, res, next) => {
    Comment.findAll({
        where: {
            is_public: false,
        },
        include: [{
            model: User,
            required: false
        },
        {
            model: Post,
            required: false
        }],
    })
        .then(comments => res.status(200).json({ comments }))
        .catch(err => res.status(400).json({ err }));
};

exports.getAllComments = (req, res, next) => {
    Comment.findAll({
        where: {
            is_public: true,
        },
    })
        .then(comments => res.status(200).json({ comments }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.getComment = (req, res, next) => {
    Comment.findOne({ where: { _id: req.params.id } })
        .then(comment => res.status(200).json({ comment }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.getCommentsByPost = (req, res, next) => {
    Comment.findAll({ 
        where: { 
            postId: req.params.id,
            is_public: true
        },
        include: [{
            model: User,
            required: false
        },
        {
            model: Post,
            required: false
        }],
    })
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
        is_public: true
     },
     { where: { _id: req.params.id } })
        .then(() => res.status(200).json({ message: "Commentaire validé !" }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.deleteComment = (req, res, next) => {
    Comment.destroy({ where: { _id: req.params.id } })
        .then(() => res.status(200).json({ message: "commentaire supprimé !" }))
        .catch(err => res.status(400).json({ err }));
};