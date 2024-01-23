const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const router = express.Router();
const credentialsModel = require('../schema/credentials');

passport.use(new LocalStrategy(credentialsModel.authenticate()));

// GET login listing
router.get('/', function (req, res, next) {
    res.render('login', { error: req.flash('error') });
})

router.post('/', passport.authenticate('local', {
    successRedirect: '/loggedin',
    failureRedirect: '/login',
    failureFlash: true,
}), (req, res, next) => { })

module.exports = router;