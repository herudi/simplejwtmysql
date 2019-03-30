var db_connect = require('./../common/connection');

var self = {};

//all person
self.all = async function (req, res) {
    try {
        var query = `select * from person`;
        var data = await db_connect.query(query);
        return res.status(200).json({
            status:'ok',
            data:data
        });
    } catch(err) {
        throw new Error(err);
    }
}

//by id person
self.by_id = async function (req, res) {
    try {
        var id_person = req.params.id_person;
        var query = `select * from person where id_person=:id_person`;
        var data = await db_connect.query(query,{
            id_person:id_person
        });
        return res.status(200).json({
            status:'ok',
            data:data
        });
    } catch(err) {
        throw new Error(err);
    }
}

//create person
self.create = async function (req, res) {
    try {
        var body = req.body;
        var id_user = res.locals.id_user;
        var query = `insert into person (
            id_user,
            name,
            gender
        ) values (
            :id_user,
            :name,
            :gender
        )`; 
        var data = await db_connect.query(query, {
            id_user:id_user,
            name:body.name,
            gender:body.gender
        });
        return res.status(200).json({
            status:'ok',
            data:data
        });
    } catch(err) {
        throw new Error(err);
    }
}

//update person
self.update = async function (req, res) {
    try {
        var id_person = req.params.id_person;
        var body = req.body;
        var query = `update person set 
            name=:name,
            gender=:gender 
            where id_person=:id_person`; 
        var data = await db_connect.query(query, {
            name:body.name,
            gender:body.gender,
            id_person:id_person
        });
        return res.status(200).json({
            status:'ok',
            data:data
        });
    } catch(err) {
        throw new Error(err);
    }
}

//delete person
self.delete = async function (req, res) {
    try {
        var id_person = req.params.id_person;
        var query = `delete from person where id_person=:id_person`; 
        var data = await db_connect.query(query, {
           id_person:id_person
        });
        return res.status(200).json({
            status:'ok',
            data:data
        });
    } catch(err) {
        throw new Error(err);
    }
}

module.exports = self;