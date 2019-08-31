var express = require('express'),
    validate = require('express-validation');

var paramValidation = require('../../config/param-validation'),
    authCtrl = require('../../controllers/auth.controller'),
    userCtrl = require('../../controllers/user.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .post(validate(paramValidation.register), authCtrl.register, userCtrl.register);

module.exports = router;