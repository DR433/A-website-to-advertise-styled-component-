/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// importing modules\nconst createError = __webpack_require__(/*! http-errors */ \"http-errors\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nconst logger = __webpack_require__(/*! morgan */ \"morgan\");\nconst session = __webpack_require__(/*! express-session */ \"express-session\");\nconst flash = __webpack_require__(/*! connect-flash */ \"connect-flash\");\nconst passport = __webpack_require__(/*! passport */ \"passport\");\nconst connectToDb = __webpack_require__(/*! ./database/dbconnection */ \"./database/dbconnection.js\");\nconst credentialsModel = __webpack_require__(/*! ./schema/credentials */ \"./schema/credentials.js\");\n\n// importing routes for pages\nconst indexRouter = __webpack_require__(/*! ./routes/index */ \"./routes/index.js\");\nconst aboutRouter = __webpack_require__(/*! ./routes/about */ \"./routes/about.js\");\nconst contactsRouter = __webpack_require__(/*! ./routes/contacts */ \"./routes/contacts.js\");\nconst profilesRouter = __webpack_require__(/*! ./routes/profiles */ \"./routes/profiles.js\");\nconst dashboardRouter = __webpack_require__(/*! ./routes/dashboard */ \"./routes/dashboard.js\");\nconst searchRouter = __webpack_require__(/*! ./routes/search */ \"./routes/search.js\");\nconst signupRouter = __webpack_require__(/*! ./routes/signup */ \"./routes/signup.js\");\nconst loginRouter = __webpack_require__(/*! ./routes/login */ \"./routes/login.js\");\nconst inputUserRouter = __webpack_require__(/*! ./routes/inputuser */ \"./routes/inputuser.js\");\nconst logoutRouter = __webpack_require__(/*! ./routes/logout */ \"./routes/logout.js\");\nconst indexLogoutRouter = __webpack_require__(/*! ./routes/indexLogout */ \"./routes/indexLogout.js\");\n\n// setitng up express\nconst app = express();\n\n// view engine setup\napp.set('views', path.join(__dirname, 'views'));\napp.set('view engine', 'ejs');\n\n// all middlewares setup\napp.use(session({\n  resave: false,\n  saveUninitialized: false,\n  secret: 'wow this is awesome'\n}))\napp.use(passport.initialize());\napp.use(passport.session());\npassport.serializeUser(credentialsModel.serializeUser());\npassport.deserializeUser(credentialsModel.deserializeUser());\napp.use(flash());\n\napp.use(logger('dev'));\napp.use(express.json());\napp.use(express.urlencoded({ extended: false }));\napp.use(cookieParser());\napp.use(express.static(path.join(__dirname, 'public')));\nconnectToDb();\n\napp.use('/', indexRouter);\napp.use('/loggedin', indexLogoutRouter);\napp.use('/about', aboutRouter);\napp.use('/contacts', contactsRouter);\napp.use('/profiles', profilesRouter);\napp.use('/signup', signupRouter);\napp.use('/login', loginRouter);\napp.use('/searchuser', searchRouter);\napp.use('/dashboard', dashboardRouter);\napp.use('/datainput', inputUserRouter);\napp.use('/logout', logoutRouter);\n\n// catch 404 and forward to error handler\napp.use(function (req, res, next) {\n  next(createError(404));\n});\n\n// error handler\napp.use(function (err, req, res, next) {\n  // set locals, only providing error in development\n  res.locals.message = err.message;\n  res.locals.error = req.app.get('env') === 'development' ? err : {};\n\n  // render the error page\n  res.status(err.status || 500);\n  res.render('error');\n});\n\nmodule.exports = app;\n\n\n//# sourceURL=webpack://coffee-shop-backend/./app.js?");

/***/ }),

/***/ "./database/dbconnection.js":
/*!**********************************!*\
  !*** ./database/dbconnection.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n\r\nconst connectToDb = () => {\r\n    mongoose.connect('mongodb://127.0.0.1:27017/coffeeshopDatabase').then(() => {\r\n        console.log('You are now connected to the Database');\r\n    });\r\n}\r\n\r\nmodule.exports = connectToDb;\n\n//# sourceURL=webpack://coffee-shop-backend/./database/dbconnection.js?");

/***/ }),

/***/ "./middlewares/isLoggedIn.js":
/*!***********************************!*\
  !*** ./middlewares/isLoggedIn.js ***!
  \***********************************/
/***/ ((module) => {

eval("const isLoggedIn = (req, res, next) => {\r\n    if (req.isAuthenticated()) return next()\r\n    res.redirect('/')\r\n}\r\n\r\nmodule.exports = isLoggedIn;\n\n//# sourceURL=webpack://coffee-shop-backend/./middlewares/isLoggedIn.js?");

/***/ }),

/***/ "./routes/about.js":
/*!*************************!*\
  !*** ./routes/about.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst router = express.Router();\r\n\r\n/* GET about listing. */\r\nrouter.get('/', function (req, res, next) {\r\n    res.render('about');\r\n});\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack://coffee-shop-backend/./routes/about.js?");

/***/ }),

/***/ "./routes/contacts.js":
/*!****************************!*\
  !*** ./routes/contacts.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst router = express.Router();\r\n\r\n// GET contacts listing\r\nrouter.get('/', function (req, res, next) {\r\n    res.render('contacts');\r\n})\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack://coffee-shop-backend/./routes/contacts.js?");

/***/ }),

/***/ "./routes/dashboard.js":
/*!*****************************!*\
  !*** ./routes/dashboard.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst router = express.Router();\r\nconst credentialsModel = __webpack_require__(/*! ../schema/credentials */ \"./schema/credentials.js\");\r\nconst userInfoModel = __webpack_require__(/*! ../schema/userInfo */ \"./schema/userInfo.js\");\r\n\r\n// GET dashboard listing\r\nrouter.get('/', async function (req, res, next) {\r\n    const userDoc = await userInfoModel.find({});\r\n    const { fullname, username, age, email, gender, dob, registeredDate, phone } = userDoc[0];\r\n    res.render('dashboard', { fullname: fullname, username: username, age: age, email: email, gender: gender, dob: dob, registeredDate: registeredDate, phone: phone });\r\n    // res.send(`${fullname}, ${username}, ${age}, ${email}, ${gender}, ${dob}, ${registeredDate} `);\r\n})\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack://coffee-shop-backend/./routes/dashboard.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\n\n/* GET home page. */\nrouter.get('/', function (req, res, next) {\n  res.render('index', { fullname: 'Caffee Shops' });\n});\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://coffee-shop-backend/./routes/index.js?");

/***/ }),

/***/ "./routes/indexLogout.js":
/*!*******************************!*\
  !*** ./routes/indexLogout.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst router = express.Router();\r\n\r\nrouter.get('/', (req, res, next) => {\r\n    res.render('indexLogout', { fullname: 'Caffee Shops' });\r\n})\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack://coffee-shop-backend/./routes/indexLogout.js?");

/***/ }),

/***/ "./routes/inputuser.js":
/*!*****************************!*\
  !*** ./routes/inputuser.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst router = express.Router();\r\nconst userInfoModel = __webpack_require__(/*! ../schema/userInfo */ \"./schema/userInfo.js\");\r\n\r\n// GET inputuser listing\r\nrouter.get('/', function (req, res, next) {\r\n    res.render('userDataInput');\r\n})\r\n\r\nrouter.post('/', async function (req, res, next) {\r\n    try {\r\n        const { fullname, username, age, phone, email, dob, gender, hobbies } = req.body;\r\n        const userInfoDocs = await userInfoModel.create({\r\n            fullname: fullname,\r\n            username: username,\r\n            age: age,\r\n            phone: phone,\r\n            email: email,\r\n            favouriteHobbies: hobbies.split(',').map(val => val.trim()),\r\n            dob: dob,\r\n            gender: gender,\r\n        })\r\n        res.redirect('/');\r\n    } catch (error) {\r\n        res.status(404).render('error');\r\n    }\r\n})\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack://coffee-shop-backend/./routes/inputuser.js?");

/***/ }),

/***/ "./routes/login.js":
/*!*************************!*\
  !*** ./routes/login.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst passport = __webpack_require__(/*! passport */ \"passport\");\r\nconst LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\");\r\nconst router = express.Router();\r\nconst credentialsModel = __webpack_require__(/*! ../schema/credentials */ \"./schema/credentials.js\");\r\n\r\npassport.use(new LocalStrategy(credentialsModel.authenticate()));\r\n\r\n// GET login listing\r\nrouter.get('/', function (req, res, next) {\r\n    res.render('login');\r\n})\r\n\r\nrouter.post('/', passport.authenticate('local', {\r\n    successRedirect: '/loggedin',\r\n    failureRedirect: '/login',\r\n}), (req, res, next) => { })\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack://coffee-shop-backend/./routes/login.js?");

/***/ }),

/***/ "./routes/logout.js":
/*!**************************!*\
  !*** ./routes/logout.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst router = express.Router();\r\n\r\nrouter.get('/', (req, res, next) => {\r\n    req.logout((err) => {\r\n        if (err) return next(err);\r\n        res.redirect('/');\r\n    })\r\n})\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack://coffee-shop-backend/./routes/logout.js?");

/***/ }),

/***/ "./routes/profiles.js":
/*!****************************!*\
  !*** ./routes/profiles.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst router = express.Router();\nconst userInfoModel = __webpack_require__(/*! ../schema/userInfo */ \"./schema/userInfo.js\");\nconst isLoggedIn = __webpack_require__(/*! ../middlewares/isLoggedIn */ \"./middlewares/isLoggedIn.js\");\n\n/* GET profiles listing. */\nrouter.get('/', isLoggedIn, async function (req, res, next) {\n  const userDocs = await userInfoModel.find();\n  res.send(userDocs);\n});\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack://coffee-shop-backend/./routes/profiles.js?");

/***/ }),

/***/ "./routes/search.js":
/*!**************************!*\
  !*** ./routes/search.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst router = express.Router();\r\nconst userInfoModel = __webpack_require__(/*! ../schema/userInfo */ \"./schema/userInfo.js\");\r\n\r\n// GET search listing\r\nrouter.get('/', function (req, res, next) {\r\n    res.render('search');\r\n})\r\n\r\nrouter.post('/', async function (req, res, next) {\r\n    const { otherCategory, otherCategorySearch, hobbiesCategory } = req.body;\r\n    const otherCategorySearchRegex = new RegExp(otherCategorySearch, 'i');\r\n    if (otherCategory === 'fullname') {\r\n        if (hobbiesCategory != [] && otherCategorySearch === \"\") {\r\n            const searchedUsers = await userInfoModel.find({ favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })\r\n            res.send(searchedUsers);\r\n        }\r\n        else if (hobbiesCategory != [] && otherCategorySearch !== \"\") {\r\n            const searchedUsers = await userInfoModel.find({ fullname: otherCategorySearchRegex, favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })\r\n            res.send(searchedUsers)\r\n        }\r\n        else {\r\n            const searchedUsers = await userInfoModel.find({ fullname: otherCategorySearchRegex })\r\n            res.send(searchedUsers);\r\n        }\r\n    }\r\n    else if (otherCategory === 'username') {\r\n        if (hobbiesCategory != [] && otherCategorySearch === \"\") {\r\n            const searchedUsers = await userInfoModel.find({ favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })\r\n            res.send(searchedUsers);\r\n        }\r\n        else if (hobbiesCategory != [] && otherCategorySearch !== \"\") {\r\n            const searchedUsers = await userInfoModel.find({ username: otherCategorySearchRegex, favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })\r\n            res.send(searchedUsers)\r\n        }\r\n        else {\r\n            const searchedUsers = await userInfoModel.find({ username: otherCategorySearchRegex })\r\n            res.send(searchedUsers);\r\n        }\r\n    }\r\n    else if (otherCategory === 'phone') {\r\n        if (hobbiesCategory != [] && otherCategorySearch === \"\") {\r\n            const searchedUsers = await userInfoModel.find({ favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })\r\n            res.send(searchedUsers);\r\n        }\r\n        else if (hobbiesCategory != [] && otherCategorySearch !== \"\") {\r\n            const searchedUsers = await userInfoModel.find({ phone: Number(otherCategorySearch), favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })\r\n            res.send(searchedUsers)\r\n        }\r\n        else {\r\n            const searchedUsers = await userInfoModel.find({ phone: Number(otherCategorySearch) })\r\n            res.send(searchedUsers);\r\n        }\r\n    }\r\n    else if (otherCategory === 'email') {\r\n        if (hobbiesCategory != [] && otherCategorySearch === \"\") {\r\n            const searchedUsers = await userInfoModel.find({ favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })\r\n            res.send(searchedUsers);\r\n        }\r\n        else if (hobbiesCategory != [] && otherCategorySearch !== \"\") {\r\n            const searchedUsers = await userInfoModel.find({ email: otherCategorySearchRegex, favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })\r\n            res.send(searchedUsers)\r\n        }\r\n        else {\r\n            const searchedUsers = await userInfoModel.find({ email: otherCategorySearchRegex })\r\n            res.send(searchedUsers);\r\n        }\r\n    }\r\n    else if (otherCategory === 'gender') {\r\n        const otherCategorySearchRegex = new RegExp(`^${otherCategorySearch}$`, 'i');\r\n        if (hobbiesCategory != [] && otherCategorySearch === \"\") {\r\n            const searchedUsers = await userInfoModel.find({ favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })\r\n            res.send(searchedUsers);\r\n        }\r\n        else if (hobbiesCategory != [] && otherCategorySearch !== \"\") {\r\n            const searchedUsers = await userInfoModel.find({ gender: otherCategorySearchRegex, favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } })\r\n            res.send(searchedUsers)\r\n        }\r\n        else {\r\n            const searchedUsers = await userInfoModel.find({ gender: otherCategorySearchRegex })\r\n            res.send(searchedUsers);\r\n        }\r\n    }\r\n    else if (hobbiesCategory != []) {\r\n        const searchedUsers = await userInfoModel.find({ favouriteHobbies: { $all: hobbiesCategory.split(',').map(val => val.trim()) } });\r\n        res.send(searchedUsers);\r\n    }\r\n    else {\r\n        res.send(\"please select a category first\");\r\n    }\r\n})\r\nmodule.exports = router;\n\n//# sourceURL=webpack://coffee-shop-backend/./routes/search.js?");

/***/ }),

/***/ "./routes/signup.js":
/*!**************************!*\
  !*** ./routes/signup.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst passport = __webpack_require__(/*! passport */ \"passport\");\r\nconst LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\");\r\nconst router = express.Router();\r\nconst credentialsModel = __webpack_require__(/*! ../schema/credentials */ \"./schema/credentials.js\");\r\n\r\npassport.use(new LocalStrategy(credentialsModel.authenticate()));\r\n\r\n// GET signup listing\r\nrouter.get('/', function (req, res, next) {\r\n    res.render('signup');\r\n})\r\n\r\nrouter.post('/', async function (req, res, next) {\r\n    try {\r\n        const { username, email, password, passwordRepeat } = req.body;\r\n        if (password === passwordRepeat) {\r\n            const credDocs = await new credentialsModel({\r\n                username: username,\r\n                email: email,\r\n                password: password,\r\n                cpassword: passwordRepeat,\r\n            });\r\n            credentialsModel.register(credDocs, password)\r\n                .then(() => {\r\n                    passport.authenticate('local')(req, res, () => {\r\n                        res.redirect('/');\r\n                    })\r\n                })\r\n        }\r\n        else {\r\n            res.redirect('/signup');\r\n        }\r\n    } catch (error) {\r\n        res.status(404).render('error');\r\n    }\r\n})\r\n\r\nmodule.exports = router;\n\n//# sourceURL=webpack://coffee-shop-backend/./routes/signup.js?");

/***/ }),

/***/ "./schema/credentials.js":
/*!*******************************!*\
  !*** ./schema/credentials.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst validator = __webpack_require__(/*! validator */ \"validator\");\r\nconst plm = __webpack_require__(/*! passport-local-mongoose */ \"passport-local-mongoose\");\r\n\r\nconst credentialsSchema = new mongoose.Schema({\r\n    username: {\r\n        type: String,\r\n        required: [true, 'please enter your username'],\r\n        minLength: 3\r\n    },\r\n    email: {\r\n        type: String,\r\n        required: [true, 'please enter your email'],\r\n        unique: [true, 'this email already exists'],\r\n        validate(value) {\r\n            if (!validator.isEmail(value)) {\r\n                throw new Error('please enter a valid email');\r\n            }\r\n        }\r\n    },\r\n    password: {\r\n        type: String,\r\n    },\r\n    cpassword: {\r\n        type: String,\r\n    }\r\n})\r\n\r\ncredentialsSchema.plugin(plm);\r\n\r\nconst credentialsModel = new mongoose.model('credential', credentialsSchema);\r\n\r\nmodule.exports = credentialsModel;\n\n//# sourceURL=webpack://coffee-shop-backend/./schema/credentials.js?");

/***/ }),

/***/ "./schema/userInfo.js":
/*!****************************!*\
  !*** ./schema/userInfo.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst validator = __webpack_require__(/*! validator */ \"validator\");\r\n\r\nconst userInfoSchema = new mongoose.Schema({\r\n    fullname: {\r\n        type: String,\r\n        minLength: 3,\r\n        required: [true, \"plaese enter your fullname\"]\r\n    },\r\n    username: {\r\n        type: String,\r\n        minLength: 3,\r\n        required: [true, \"plaese enter your username\"],\r\n    },\r\n    age: {\r\n        type: Number,\r\n        required: [true, \"plaese enter your age\"],\r\n    },\r\n    phone: {\r\n        type: Number,\r\n        required: [true, \"plaese enter your phone number\"]\r\n    },\r\n    email: {\r\n        type: String,\r\n        required: [true, \"plaese enter your email\"],\r\n        unique: [true, \"this email already exists\"],\r\n        validate(value) {\r\n            if (!validator.isEmail(value)) {\r\n                throw new Error('Please enter a valid Email.');\r\n            }\r\n        }\r\n    },\r\n    favouriteHobbies: {\r\n        type: Array,\r\n        default: [],\r\n        required: [true, \"please enter your favourite hobbies.\"],\r\n    },\r\n    gender: {\r\n        type: String,\r\n        required: [true, 'please enter your date of birth']\r\n    },\r\n    dob: {\r\n        type: Date,\r\n        required: [true, 'please enter your date of birth']\r\n    },\r\n    registeredDate: {\r\n        type: Date,\r\n        default: Date.now()\r\n    }\r\n})\r\n\r\nconst userInfoModel = new mongoose.model('userinfo', userInfoSchema);\r\n\r\nmodule.exports = userInfoModel;\n\n//# sourceURL=webpack://coffee-shop-backend/./schema/userInfo.js?");

/***/ }),

/***/ "connect-flash":
/*!********************************!*\
  !*** external "connect-flash" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("connect-flash");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-session");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("http-errors");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport-local");

/***/ }),

/***/ "passport-local-mongoose":
/*!******************************************!*\
  !*** external "passport-local-mongoose" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport-local-mongoose");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("validator");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;