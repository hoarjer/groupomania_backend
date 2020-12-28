const router = require('express').Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/users', userCtrl.getAllUsers);
router.get('/user/:id', userCtrl.getOneUser);
router.put('/user/:id', userCtrl.modifyUser);
router.delete('/user/:id', userCtrl.deleteUser);


module.exports = router;