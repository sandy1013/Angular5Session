const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "jashkjHDKJAGSDhsgdaasda3298adsasdasklashlidasalkJUIELUFHDJKSHSAGDASKSHDGKAgjhgsadkjadgakjsgasdkdjgKSGlkhagkja";

const UtilsClass = require('../business/UtilsClass');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate : {
            validator: (value) => {
                         return validator.isEmail(value);  
                       },
            message: "{VALUE} is not a valid email."
        }
    },
    password: {
        hash: { 
            type: String,
            required: true
        },
        salt: {
            type: String,
            required: true
        }
    },
    cloudsync: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: String,
        required: true
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required:  true
        }
    }]
});

UserSchema.statics.CreateUser = function(user_data) {
    const User = this;
    let UserObj;

    UserObj = _.pick(user_data, ['username', 'email', 'cloudsync']);

    const SaltHashPassword = UtilsClass.SaltHash(user_data.password);

    UserObj.password = {};
    UserObj.password.hash = SaltHashPassword.hash;
    UserObj.password.salt = SaltHashPassword.salt;

    UserObj.createdAt = (new Date()).toUTCString();

    let SaveUser = new User(UserObj);

    return SaveUser.save();
};

UserSchema.methods.GenerateToken = function(device) {
    const user = this;

    let DataToSign = {
        _id: user._id,
        username: user.username,
        email: user.email
    }

    let token = jwt.sign(DataToSign, SECRET_KEY);

    let access = (device) ? device : "default";

    isNewAccesss = true;
    user.tokens.forEach(element => {
        if(element.access === access) {
            isNewAccesss = false;
            element.token = token;
        }
    });

    if(isNewAccesss) {
        user.tokens.push({
            access: (device) ? device : "default",
            token: token
        });
    }

    return {
       db: user.save(),
       token: token
    }
};

module.exports = mongoose.model('User', UserSchema);