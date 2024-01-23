const express = require('express');
const router = express.Router();

// GET contacts listing
router.get('/', function (req, res, next) {
    res.render('contacts');
})

module.exports = router;