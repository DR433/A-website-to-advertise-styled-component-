const mongoose = require('mongoose');
const validator = require('validator');
const plm = require('passport-local-mongoose');

const credentialsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please enter your username'],
        unique: [true, 'this username already exists'],
        minLength: 3
    },
    email: {
        type: String,
        required: [true, 'please enter your email'],
        unique: [true, 'this email already exists'],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('please enter a valid email');
            }
        }
    },
    postids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Userinfo'
    }],
    password: {
        type: String,
    },
    cpassword: {
        type: String,
    }
})

credentialsSchema.plugin(plm);

const credentialsModel = new mongoose.model('Credential', credentialsSchema);

module.exports = credentialsModel;