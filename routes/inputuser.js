const express = require('express');
const router = express.Router();
const userInfoModel = require('../schema/userInfo');
const credentialsModel = require('../schema/credentials');
const isLoggedIn = require('../middlewares/isLoggedIn');
const upload = require('../middlewares/uploadImg');

// GET inputuser listing
router.get('/', isLoggedIn, function (req, res, next) {
    res.render('userDataInput');
})

router.post('/', upload.single('file'), async function (req, res, next) {
    try {
        if (!req.file) {
            return res.status(404).render('error');
        }
        const { fullname, username, age, phone, email, dob, gender, hobbies } = req.body;
        const user = await credentialsModel.findOne({ username: req.session.passport.user });
        console.log(req.file);
        console.log(user);
        console.log(req.body);
        const userInfoDocs = await userInfoModel.create({
            userid: user._id,
            fullname: fullname,
            profileimg: req.file.filename,
            username: username,
            age: age,
            phone: phone,
            email: email,
            favouriteHobbies: hobbies.split(',').map(val => val.trim()),
            dob: dob,
            gender: gender,
        })
        user.postids.push(userInfoDocs._id);
        await user.save()
        res.redirect('/loggedin');
    } catch (error) {
        console.error(error);
        res.status(400).render('error');
    }
})

module.exports = router;