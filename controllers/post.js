const jwt = require('jsonwebtoken');
const db = require('../models');
const Post = db.post;
const User = db.user;
const Comment = db.comment;

exports.createPost = (req, res, next) => {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;
    const postObject = {
        ...req.body.post,
        title: req.body.title,
        gif_url: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        userId: userId
    } 
    Post.create({ ...postObject })
        .then((post) => res.status(201).json({ post }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.getAdminPosts = (req, res, next) => {
    Post.findAll({
        where: {
            is_public: false,
        },
        include: [
            {
                model: User,
                required: true
            },
            {
                model: Comment,
                required: false,
                where: {
                    is_public: false
                },
                include: [{
                    model: User
                }]
            },
        ],
    })
        .then(posts => res.status(200).json({ posts }))
        .catch(err => res.status(400).json({ err }));
};

exports.getUsersPosts = (req, res, next) => {
    Post.findAll({
        where: {
            is_public: true,
        },
        include: [
            {
                model: User,
                required: true
            },
            {
                model: Comment,
                required: false,
                where: {
                    is_public: true,
                },
                include: [{
                    model: User
                }]
            },
        ],
    })
        .then(posts => res.status(200).json({ posts }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.getAllPosts = (req, res, next) => {
    Post.findAll({
        include: [
            {
                model: User,
                required: true
            },
            {
                model: Comment,
                required: false,
                include: [{
                    model: User
                }]
            },
        ],
    })
        .then(posts => res.status(200).json({ posts }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.getLastPosts = (req, res, next) => {
    Post.findAll({ 
        where: {
            is_public: true,
        },
        include: [
            {
                model: User,
                required: true
            },
            {
                model: Comment,
                required: false,
                where: {
                    is_public: true,
                },
                include: [{
                    model: User
                }]
            },
        ],
        order: [
            ["created_at", "DESC"]
        ] 
    })
        .then(posts => res.status(200).json({ posts }))
        .catch((err) => res.status(400).json({ err }));
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({ 
        include: [
            {
                model: User,
                required: true
            },
            {
                model: Comment,
                where: {
                    is_public: true
                },
                required: false,
                include: [{
                    model: User
                }]
            },
        ],
        where: { _id: req.params.id } 
    })
        .then(post => res.status(200).json({ post }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.getPostsByUser = (req, res, next) => {
    Post.findAll({ 
        where: { 
            userId: req.params.id,
        },
        include: [{
            model: User,
            required: false
        }],
    })
        .then(posts => res.status(200).json({ posts }))
        .catch(err => res.status(400).json({ message: "oupss" }));
};

exports.modifyPost = (req, res, next) => {
    Post.update({
        is_public: true
    }, {
        where: {
            _id: req.params.id
        }
    })
        .then(() => res.status(200).json({ message: "Post validé !" }))
        .catch(err => res.status(400).json({ message: err }));
};

exports.deletePost = (req, res, next) => {
    Post.destroy({
        where: {
            _id: req.params.id
        }
    })
        .then(() => res.status(200).json({ message: "Post supprimé !" }))
        .catch(err => res.status(400).json({ err }));
};