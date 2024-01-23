const express = require('express');
const router = express.Router();
const credentialsModel = require('../schema/credentials');
const userInfoModel = require('../schema/userInfo');
const isLoggedIn = require('../middlewares/isLoggedIn');

// GET dashboard listing
router.get('/', isLoggedIn, async function (req, res, next) {
    const userDoc = await credentialsModel.findOne({
        username: req.session.passport.user,
    });
    const usersInfo = await userInfoModel.findOne({ username: userDoc.username });
    const userPosts = await credentialsModel.findOne({ username: userDoc.username }).populate('postids');
    if (usersInfo) {
        res.render('dashboard', { usersInfo, userPosts: userPosts.postids });
    }
    else {
        res.render('dashboard', {
            usersInfo: {
                fullname: 'N/A',
                username: 'N/A',
                age: 'N/A',
                email: 'N/A',
                gender: 'N/A',
                dob: 'N/A',
                registeredDate: 'N/A',
                phone: 'N/A'
            },
            userPosts: userPosts.postids
        })
    }
});

module.exports = router;