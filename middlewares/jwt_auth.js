var jwt = require('jsonwebtoken');
var {jwt_secret} = require('./../config.json');

var auth = {};
auth.admin = async function(req, res, next) {
    try {
        const data = await jwt.verify(req.headers.authorization, jwt_secret);
        if(data.role === 'admin'){
            res.locals = {id_user:data.sub,role:data.role};
            next();
        }else{
            res.status(401).json({
                status: 'error',
                message: 'Unauthorized'
            });
        }
    } catch (error) {
        res.status(401).json({
            status: 'error',
            message: 'Unauthorized'
        });
    }
}

auth.guest = async function(req, res, next) {
    try {
        const data = await jwt.verify(req.headers.authorization, jwt_secret);
        if(data.role === 'guest'){
            res.locals = {id_user:data.sub,role:data.role};
            next();
        }else{
            res.status(401).json({
                status: 'error',
                message: 'Unauthorized'
            });
        }
    } catch (error) {
        res.status(401).json({
            status: 'error',
            message: 'Unauthorized'
        });
    }
}

auth.all = async function(req, res, next) {
    try {
        const data = await jwt.verify(req.headers.authorization, jwt_secret);
        res.locals = {id_user:data.sub,role:data.role};
        next();
    } catch (error) {
        res.status(401).json({
            status: 'error',
            message: 'Unauthorized'
        });
    }
}

module.exports = auth;

