const express = require('express');
var router = require('./routers/router');
const app = express();

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api_v1', router);

app.listen(3000, function(){
	console.log('port 3000');
});