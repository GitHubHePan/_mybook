var userCRUD = require("./user_crud");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
var http = require('http');
var url = require('url');
var util = require('util');
var urlencodedParser = bodyParser.urlencoded({
	extended: false
});
app.use(express.static('public'));
app.get('/', function (req, res) {
   res.send('Hello World');
})
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});
var server = app.listen(8081, function() {

	//	var host = server.address().address
	//	var port = server.address().port
	console.log("server is on 8081")
});

//调用insert方法
//userCRUD.insertUser("administrator", "tiger", function(flag) {
//	console.log(flag ? "insert success!" : "insert error!");
//});
//
////调用delete方法
//userCRUD.deleteUser(11, function(flag) {
//	console.log(flag ? "delete success!" : "delete error!");
//});
//
////调用update方法
//userCRUD.updateUser(4, "root", "root", function(flag) {
//	console.log(flag ? "update success!" : "update error!");
//});
//
////调用findAll方法
//userCRUD.findAll(function(resultSet) {
//	console.log("********findAll User in main.js********")
//	for (i in resultSet) {
//		var result = resultSet[i];
//		console.log(result.id + ":" + result.username + ":" + result.password);
//	}
//});
//
////调用findById方法
//userCRUD.findById(3, function(result) {
//	console.log(JSON.stringify(result));
//	if (result != null) {
//		console.log("******************findById in main.js*******************");
//		console.log(result.id + ":" + result.username + ":" + result.password);
//	} else {
//		console.log("no such data!");
//	}
//});
app.get('/countAll',function(req,res){
	userCRUD.countAll(function(result){
		console.log(result[0]);
		res.send(result);
		res.end();
	})
})

app.get('/c:id',function(req,res){
	var pageNum = (req.params.id-1)*5+1;
	console.log(pageNum);
	console.log("aasasa")
	userCRUD.findById(pageNum,function(result){
		if(result!=null){
			for(i in result){
				console.log(result[i])
			}
			res.send(result);
			res.end();
		}
	})
});
app.get('/a:id',function(req,res){
	var pageNum = (req.params.id-1)*5+1;
	console.log(pageNum);
	console.log("zzzz")
	userCRUD.findBySale(pageNum,function(result){
		if(result!=null){
			for(i in result){
				console.log(result[i])
			}
			res.send(result);
			res.end();
		}
	})
})
app.get('/b:id',function(req,res){
	var pageNum = (req.params.id-1)*5+1;
	console.log(pageNum);
	console.log("zzzz")
	userCRUD.findByPrice(pageNum,function(result){
		if(result!=null){
			for(i in result){
				console.log(result[i])
			}
			res.send(result);
			res.end();
		}
	})
})
app.get('/d:id',function(req,res){
	var pageNum = (req.params.id-1)*5+1;
	console.log(pageNum);
	console.log("zzzz")
	userCRUD.findByBuzz(pageNum,function(result){
		if(result!=null){
			for(i in result){
				console.log(result[i])
			}
			res.send(result);
			res.end();
		}
	})
})
//登录
app.post('/loginUser', urlencodedParser, function(req, res) {
	var usernameVal = req.body.username;
	var passwordVal = req.body.password;
	console.log(usernameVal);
	userCRUD.login(usernameVal, passwordVal, function(flag) {
		console.log(flag ? "login success" : "login flase")
		res.send(flag);
		res.end();
	});
});
//注册
app.post('/registryin', urlencodedParser, function(req, res) {
	var usernameVal = req.body.username;
	var passwordVal = req.body.password;
	var phoneNumVal = req.body.phoneNum;
	var emailVal = req.body.email;
	console.log(phoneNumVal);
	userCRUD.registry(usernameVal, passwordVal,phoneNumVal, emailVal,function(flag) {
		console.log(flag? "registry success" : "registry flase")
		res.send(flag);
		res.end()
	});
});