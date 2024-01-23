const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const router = express.Router();
const credentialsModel = require('../schema/credentials');

passport.use(new LocalStrategy(credentialsModel.authenticate()));

// GET signup listing
router.get('/', function (req, res, next) {
    res.render('signup');
})

router.post('/', async function (req, res, next) {
    try {
        const { username, email, password, passwordRepeat } = req.body;
        if (password === passwordRepeat) {
            const credDocs = await new credentialsModel({
                username: username,
                email: email,
                password: password,
                cpassword: passwordRepeat,
            });
            credentialsModel.register(credDocs, password)
                .then(() => {
                    passport.authenticate('local')(req, res, () => {
                        res.redirect('/loggedin');
                    })
                })
        }
        else {
            res.redirect('/signup');
        }
    } catch (error) {
        res.status(404).render('error');
    }
})

module.exports = router;