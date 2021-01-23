const router = require('express').Router();
const userCtrl = require('../controllers/user');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');
const deleteOldPicture = require('../middlewares/deleteOldPicture');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/users', userCtrl.getAllUsers);
router.get('/users/:id', auth, userCtrl.getOneUser);
router.put('/users/:id', auth, multer, userCtrl.modifyUser);
router.delete('/users/:id', auth, userCtrl.deleteUser);

module.exports = router;