const router = require('express').Router();
const auth = require('../middlewares/auth');
const postCtrl = require('../controllers/post');
const userAccessPost = require('../middlewares/userAccessPost');

router.post('/posts', auth, postCtrl.createPost);
router.get('/posts', auth, postCtrl.getAllPosts);
router.get('/post/last', auth, postCtrl.getLastPosts);
router.get('/posts/:id', auth, postCtrl.getOnePost);
router.put('/posts/:id', auth, userAccessPost, postCtrl.modifyPost);
router.delete('/posts/:id', auth, userAccessPost, postCtrl.deletePost);


module.exports = router;