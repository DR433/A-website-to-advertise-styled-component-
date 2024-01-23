const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');

router.get('/', isLoggedIn, (req, res, next) => {
    res.render('indexLogout');
})

module.exports = router;