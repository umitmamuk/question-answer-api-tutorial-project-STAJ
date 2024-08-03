const express = require('express');
const authRouter = require('./auth');
const questionsRouter = require('./questions');

// Api
const router = express.Router();

router.use('/auth', authRouter);
router.use('/questions', questionsRouter);
    

module.exports = router;