const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');

/* GET about listing. */
router.get('/', isLoggedIn, function (req, res, next) {
    res.render('about');
});

module.exports = router;