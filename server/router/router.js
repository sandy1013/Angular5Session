const express = require('express');
const bodyParser = require('body-parser');

const UserClass = require('../business/UserClass');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/register', (req, res) => {
    UserClass.RegisterUser(req.body).then((user_doc) => {
        res.status(200).send(user_doc);
    }, (error) => {
        res.status(200).send(error);
    });
});

router.post('/login', (req, res) => {
    UserClass.LoginUser(req.body).then((user_doc) => {
        res.status(200).header('x-auth', user_doc.token).send(user_doc.data);
    }, (error) => {
        res.status(403).send(error);
    });
});

module.exports = router;