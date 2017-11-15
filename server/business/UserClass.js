const _ = require('lodash');

const USER_MODEL = require('../models/UserModel');
const UtilsClass = require('../business/UtilsClass');

class UserClass {
    RegisterUser(user) {
        return new Promise((resolve, reject) => {
            USER_MODEL.CreateUser(user).then((user_doc) => {
                if(user_doc) {
                    resolve({success: true});
                } else {
                    reject({success: false});
                }
            }, (error) => {
                reject({success: false});
            });
        });
    }

    LoginUser(user) {
        return new Promise((resolve, reject) => {
            USER_MODEL.findOne({email: user.email}, (err, user_doc) => {
                if(user_doc) {
                    var extracted_token = UtilsClass.EncryptDecryptAlgo(user.password, user_doc.password.salt);
                    if(extracted_token.hash === user_doc.password.hash) {
                        let {db, token} = user_doc.GenerateToken(user.device);
                        db.then((reg_user) => {
                            if (reg_user) {
                                resolve({
                                    data: _.merge(_.pick(reg_user, ['username', 'email']), {"success": true}),
                                    token: token
                                });
                            } else {
                                reject({'success': false, 'err_msg': "Something went wrong, Please try after sometime."});
                            }
                        }, (error) => {
                            reject({'success': false, 'err_msg': "Something went wrong, Please try after sometime."});
                        });
                    } else {
                        reject({'success': false, 'err_msg': "Invalid Password."});
                    }
                } else{ 
                    reject({'success': false, 'err_msg': "User is not registered."});
                }
            });
        });
    }
}

module.exports = new UserClass();