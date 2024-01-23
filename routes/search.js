const express = require('express');
const router = express.Router();
const userInfoModel = require('../schema/userInfo');
const isLoggedIn = require('../middlewares/isLoggedIn');

// GET search listing
router.get('/', isLoggedIn, function (req, res, next) {
    res.render('search');
})

router.post('/', async function (req, res, next) {
    const { otherCategory, otherCategorySearch, hobbiesCategory } = req.body;
    const otherCategorySearchRegex = new RegExp(otherCategorySearch, 'i');
    if (otherCategory === 'fullname') {
        if (hobbiesCategory != [] && otherCategorySearch === "") {
            const searchedUsers = await userInfoModel.find({ favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })
            res.send(searchedUsers);
        }
        else if (hobbiesCategory != [] && otherCategorySearch !== "") {
            const searchedUsers = await userInfoModel.find({ fullname: otherCategorySearchRegex, favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })
            res.send(searchedUsers)
        }
        else {
            const searchedUsers = await userInfoModel.find({ fullname: otherCategorySearchRegex })
            res.send(searchedUsers);
        }
    }
    else if (otherCategory === 'username') {
        if (hobbiesCategory != [] && otherCategorySearch === "") {
            const searchedUsers = await userInfoModel.find({ favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })
            res.send(searchedUsers);
        }
        else if (hobbiesCategory != [] && otherCategorySearch !== "") {
            const searchedUsers = await userInfoModel.find({ username: otherCategorySearchRegex, favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })
            res.send(searchedUsers)
        }
        else {
            const searchedUsers = await userInfoModel.find({ username: otherCategorySearchRegex })
            res.send(searchedUsers);
        }
    }
    else if (otherCategory === 'phone') {
        if (hobbiesCategory != [] && otherCategorySearch === "") {
            const searchedUsers = await userInfoModel.find({ favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })
            res.send(searchedUsers);
        }
        else if (hobbiesCategory != [] && otherCategorySearch !== "") {
            const searchedUsers = await userInfoModel.find({ phone: Number(otherCategorySearch), favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })
            res.send(searchedUsers)
        }
        else {
            const searchedUsers = await userInfoModel.find({ phone: Number(otherCategorySearch) })
            res.send(searchedUsers);
        }
    }
    else if (otherCategory === 'email') {
        if (hobbiesCategory != [] && otherCategorySearch === "") {
            const searchedUsers = await userInfoModel.find({ favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })
            res.send(searchedUsers);
        }
        else if (hobbiesCategory != [] && otherCategorySearch !== "") {
            const searchedUsers = await userInfoModel.find({ email: otherCategorySearchRegex, favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })
            res.send(searchedUsers)
        }
        else {
            const searchedUsers = await userInfoModel.find({ email: otherCategorySearchRegex })
            res.send(searchedUsers);
        }
    }
    else if (otherCategory === 'gender') {
        const otherCategorySearchRegex = new RegExp(`^${otherCategorySearch}$`, 'i');
        if (hobbiesCategory != [] && otherCategorySearch === "") {
            const searchedUsers = await userInfoModel.find({ favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })
            res.send(searchedUsers);
        }
        else if (hobbiesCategory != [] && otherCategorySearch !== "") {
            const searchedUsers = await userInfoModel.find({ gender: otherCategorySearchRegex, favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })
            res.send(searchedUsers)
        }
        else {
            const searchedUsers = await userInfoModel.find({ gender: otherCategorySearchRegex })
            res.send(searchedUsers);
        }
    }
    else if (hobbiesCategory != []) {
        const searchedUsers = await userInfoModel.find({ favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } });
        res.send(searchedUsers);
    }
    else {
        res.send("please select a category first");
    }
})
module.exports = router;