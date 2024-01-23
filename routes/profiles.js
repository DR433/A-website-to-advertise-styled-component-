const express = require('express');
const router = express.Router();
const userInfoModel = require('../schema/userInfo');
const isLoggedIn = require('../middlewares/isLoggedIn');
const credentialsModel = require('../schema/credentials');

/* GET profiles listing. */
router.get('/', async function (req, res, next) {
  const userDocs = await credentialsModel.find().populate('postids');
  res.render('profiles');
});

module.exports = router;
