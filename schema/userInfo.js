const mongoose = require('mongoose');
const validator = require('validator');

const userInfoSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Credential'
    },
    profileimg: {
        type: String,
    },
    fullname: {
        type: String,
        minLength: 3,
        required: [true, "plaese enter your fullname"]
    },
    username: {
        type: String,
        minLength: 3,
        required: [true, "plaese enter your username"],
    },
    age: {
        type: Number,
        required: [true, "plaese enter your age"],
    },
    phone: {
        type: Number,
        required: [true, "plaese enter your phone number"]
    },
    email: {
        type: String,
        required: [true, "plaese enter your email"],
        unique: [true, "this email already exists"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Please enter a valid Email.');
            }
        }
    },
    favouriteHobbies: {
        type: Array,
        default: [],
        required: [true, "please enter your favourite hobbies."],
    },
    gender: {
        type: String,
        required: [true, 'please enter your date of birth']
    },
    dob: {
        type: Date,
        required: [true, 'please enter your date of birth']
    },
    registeredDate: {
        type: Date,
        default: Date.now()
    }
})

const userInfoModel = new mongoose.model('Userinfo', userInfoSchema);

module.exports = userInfoModel;