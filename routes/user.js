const router = require('express').Router();
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/users', userCtrl.getAllUsers);
router.get('/users/:id', userCtrl.getOneUser);
router.put('/users/:id', userCtrl.modifyUser);
router.delete('/users/:id', userCtrl.deleteUser);

module.exports = router;