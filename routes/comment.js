const router = require('express').Router();
const auth = require('../middlewares/auth');
const userAccessComment = require('../middlewares/userAccessComment');
const commentCtrl = require('../controllers/comment');

router.post('/posts/:id/comments', auth, commentCtrl.createComment);
router.get('/comments', auth, commentCtrl.getAllComments);
router.get('/comments/:id', auth, commentCtrl.getComment);
router.get('/posts/:id/comments', auth, commentCtrl.getCommentsByPost);
router.get('/users/:id/comments', auth, commentCtrl.getCommentsByUser);
router.put('/comments/:id', auth, userAccessComment, commentCtrl.modifyComment);
router.delete('/comments/:id', auth, userAccessComment, commentCtrl.deleteComment);


module.exports = router;