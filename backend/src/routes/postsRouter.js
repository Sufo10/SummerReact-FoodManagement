const { Router } = require('express');
const { postsSchema } = require('../requestSchema/schema');
const validateRequestBody = require('../middlewares/validateReqBody');


const router = Router();

router.get('/');
router.post('/');
module.exports = router;