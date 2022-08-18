const { Router } = require('express');
const userSchema = require('../requestSchema/schema');
const validateRequestBody = require('../middlewares/validateReqBody');
const { register, login } = require('../controllers/UserController');

const router = Router();

router.post('/register', validateRequestBody(userSchema.registerUser), register);

router.post('/login', validateRequestBody(userSchema.loginUser), login);

router.post('/contact', (req, res) => {
    res.status(200).json({ message: 'contact' });
});


module.exports = router;