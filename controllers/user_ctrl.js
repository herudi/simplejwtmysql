const db_connect = require('./../common/connection');
const {jwt_secret} = require('./../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var self = {};

self.sign = async function (req, res) {
    try {
        var body = req.body;
        var query = "select * from user where username=:username"; 
        var users = await db_connect.query(query,{
        	username:body.username
        });
        var user = users[0];
        if (!user) {
        	return res.status(400).json({
                status:'error',
                token:'Username not match...'
            });
        };
        var verify_password = await bcrypt.compare(body.password, user.password);
        if(!verify_password){
            return res.status(400).json({
                status:'error',
                token:'Password not match'
            });
        }
        var payload = {
            iat:Math.floor(Date.now() / 1000),
            iss:'http://localhost:3000/',
            sub:user.id_user,
            role:user.role
        }
        //sample expires token 1 day.
        var token = await jwt.sign(payload, jwt_secret, {expiresIn: '1d'});
        return res.status(200).json({
            status:'ok',
            token:token
        });
    } catch(err) {
        return res.status(500).json({
            status:'error',
            token:err
        });
    }
}

self.register = async function (req, res) {
    try {
        var body = req.body;
        var password = await bcrypt.hash(body.password, saltRounds);
        var query = "insert into user (username,password,role) values (:username,:password,:role)"; 
        var users = await db_connect.query(query,{
        	username:body.username,
        	password:password,
        	role:body.role
        });
        return res.status(200).json({
            status:'ok',
            data:users
        });
    } catch(err) {
        return res.status(500).json({
            status:'error',
            data:err
        });
    }
}

self.me = async function (req, res) {
    try {
        var id_user = res.locals.id_user;
        var query = "select username, role from user where id_user=:id_user"; 
        var users = await db_connect.query(query,{
        	id_user:id_user
        });
        return res.status(200).json({
            status:'ok',
            data:users
        });
    } catch(err) {
        return res.status(500).json({
            status:'error',
            data:err
        });
    }
}

module.exports = self;