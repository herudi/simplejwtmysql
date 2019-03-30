var express = require('express');
var router = express.Router();
var user_ctrl = require('./../controllers/user_ctrl');
var person_ctrl = require('./../controllers/person_ctrl');
var auth = require('./../middlewares/jwt_auth');


//public route
router.post('/sign', user_ctrl.sign);
router.post('/register', user_ctrl.register);

//auth route
router.get('/user_me',auth.all, user_ctrl.me);

router.get('/person',auth.all, person_ctrl.all);
router.post('/person',auth.all, person_ctrl.create);
router.get('/person/:id_person',auth.all, person_ctrl.by_id);
router.put('/person/:id_person',auth.all, person_ctrl.update);
router.delete('/person/:id_person',auth.all, person_ctrl.delete);


module.exports = router;