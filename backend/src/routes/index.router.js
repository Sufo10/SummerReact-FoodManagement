const { Router } = require('express');
const userRouter = require('./userRouter');
const postsRouter = require('./postsRouter');

const router = Router();

router.use('/auth', userRouter);
router.use('/posts', postsRouter);

module.exports = router;