const router = require('express').Router();
const auth = require('../middlewares/auth');
const adminAccess = require('../middlewares/adminAccess');
const commentCtrl = require('../controllers/comment');

router.post('/comments/posts/:id', auth, commentCtrl.createComment);
router.get('/comments', auth, commentCtrl.getAllComments);
router.get('/comments/admin', auth, commentCtrl.getAdminComments);
router.get('/comments/:id', auth, commentCtrl.getComment);
router.get('/comments/posts/:id', auth, commentCtrl.getCommentsByPost);
router.get('/comments/user/:id', auth, commentCtrl.getCommentsByUser);
router.put('/comments/:id', auth, adminAccess, commentCtrl.modifyComment);
router.delete('/comments/:id', auth, adminAccess, commentCtrl.deleteComment);


module.exports = router;