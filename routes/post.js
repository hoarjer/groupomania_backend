const router = require('express').Router();
const auth = require('../middlewares/auth');
const postCtrl = require('../controllers/post');
const adminAccess = require('../middlewares/adminAccess');
const multer = require('../middlewares/multer-config');

router.post('/posts',auth , multer, postCtrl.createPost);
router.get('/posts', auth, postCtrl.getAllPosts);
router.get('/posts/admin', auth, postCtrl.getAdminPosts);
router.get('/posts/lastposts', auth, postCtrl.getLastPosts);
router.get('/posts/user/:id', auth, postCtrl.getPostsByUser);
router.get('/posts/:id', auth, postCtrl.getOnePost);
router.put('/posts/:id', auth, adminAccess, postCtrl.modifyPost);
router.delete('/posts/:id', auth, adminAccess, postCtrl.deletePost);


module.exports = router;