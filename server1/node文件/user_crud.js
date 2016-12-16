function UserCRUD() {
	var sessionFactory = require("./SessionFactory");
	var async = require('async');
	//查询所有
	//	this.findAll = function(callback) {
	//		var conn = sessionFactory.getConnection();
	//		var findAllSQL = "SELECT  id,username,password from t_user";
	//		conn.query(findAllSQL, function(err, rows) {
	//			if (err) throw err;
	//			conn.end();
	//			//使用回调函数实现值的回传
	//			return callback(rows);
	//		});
	//
	//	}
	
	
	
	
	
	
	
	
		this.countAll = function(callback){
			var conn = sessionFactory.getConnection();
			var couneAllSQL = " select count(*) from books";
			conn.query(couneAllSQL, function(err, rows) {
				if (err) throw err;
				conn.end();
				return callback(rows[0]); //回调函数查询数据库总共有多少条数据
			});
		}
		this.findById = function(pageNum, callback) {
			var conn = sessionFactory.getConnection();
			//条件查询
			console.log("2222222")
			console.log(pageNum)
			var findByIdSQL = "select * from books limit "+pageNum+",5";
			conn.query(findByIdSQL, function(err, rows) {
				if (err) throw err;
				conn.end();
				return callback(rows); //使用回调函数异步传值,注意rows为数组
			});
		}
		this.findBySale = function(pageNum,callback){
			var conn = sessionFactory.getConnection();
			
			console.log("1");
			console.log("2");
			var findBySaleSQL = "select * from books order by b_sales DESC limit "+pageNum+",5";
			conn.query(findBySaleSQL, function(err, rows) {
				if (err) throw err;
				conn.end();
				return callback(rows); //使用回调函数异步传值,注意rows为数组
			});
		}
		this.findByPrice = function(pageNum,callback){
			var conn = sessionFactory.getConnection();
			console.log("aa");
			console.log("as");
			var findByPriceSQL = "select * from books order by b_price DESC limit "+pageNum+",5";
			conn.query(findByPriceSQL, function(err, rows) {
				if (err) throw err;
				conn.end();
				return callback(rows); //使用回调函数异步传值,注意rows为数组
			});
		}
		
		
		this.findByBuzz = function(pageNum,callback){
			var conn = sessionFactory.getConnection();
			console.log("aa");
			console.log("as");
			var findByBuzzSQL = "select * from books order by b_buzz DESC limit "+pageNum+",5";
			conn.query(findByBuzzSQL, function(err, rows) {
				if (err) throw err;
				conn.end();
				return callback(rows); //使用回调函数异步传值,注意rows为数组
			});
		}
		

	//	this.insertUser = function(usernameVal, passwordVal, callback) {
	//		var conn = sessionFactory.getConnection();
	//		//插入数据
	//			var insertSQL = "insert into t_user(username,password) values('" + usernameVal + "','" + passwordVal + "')";
	//		console.log(insertSQL);
	//		conn.query(insertSQL, function(err, res) {
	//			if (err) throw err;
	//			var flag = false;
	//			if (res.affectedRows > 0) flag = true;
	//			conn.end();
	//			callback(flag);
	//		});
	//	}

	//	this.deleteUser = function(id, callback) {
	//		var conn = sessionFactory.getConnection();
	//		//插入数据
	//		var delSQL = "delete from t_user where id=" + id;
	//		conn.query(delSQL, function(err, res) {
	//			if (err) throw err;
	//			var flag = false;
	//			if (res.affectedRows > 0) flag = true;
	//			conn.end();
	//			callback(flag);
	//		});
	//	}

	//	this.updateUser = function(updateId, newUsernameVal, newPasswordVal, callback) {
	//		//修改数据
	//		var conn = sessionFactory.getConnection();
	//		var updateSQL = "update t_user set username='" + newUsernameVal + "',password='" + newPasswordVal + "' where id=" + updateId;
	//		conn.query(updateSQL, function(err, res) {
	//			if (err) throw err;
	//			var flag = false;
	//			if (res.affectedRows > 0) flag = true;
	//			conn.end();
	//			callback(flag);
	//		});
	//	}

	//有待完成 select username,password from little where username = tiger
	this.login = function(usernameVal, passwordVal, callback) {
		var conn = sessionFactory.getConnection();
		var findAllSQL = "SELECT  username,password from little where username = '" + usernameVal + "'";
		
		conn.query(findAllSQL, function(err, rows) {
			if (err) throw err;
			console.log(rows);
			conn.end();
			//使用回调函数实现值的回传
			var flag = false;
			for (i in rows) {
				var users = rows[i]
				if (passwordVal == users.password) flag = true
			}
			//			return callback(rows);
			callback(flag);
		});
	}

	this.registry = function(usernameVal, passwordVal, phoneNumVal, emailVal,callback) {
		var conn = sessionFactory.getConnection();
		var findByName = "SELECT  username from little where username = '" + usernameVal + "'";
		var insertSQL = "insert into little(username,password) values('" + usernameVal + "','" + passwordVal + "')";
		var insertlidSQL = "insert into littledetail (phonenum,email) values('" + phoneNumVal +"','" + emailVal + "')";
		conn.query(findByName, function(err, rows) {
				if (err) throw err;
				//使用回调函数实现值的回传
				var flag1 = true;
				if (rows != "") {
					flag1 = false;
					callback(flag1);
				} else {
//					function a(){}
					conn.beginTransaction(function(err) {
							
							async.series([
									function(callback1) {
										console.log("111111111");
//										var insertSQL = "insert into little(username,password) values('" + 123 + "','" + passwordVal + "')";
										
										conn.query(insertSQL, function(err, res) {
											console.log("12121212");
											console.log(usernameVal);
											callback1(err, res);
										});
									},
									function(callback2) {
										console.log("22222222222");
										conn.query(insertlidSQL, function(err, res) {
											console.log("131313131");
											callback2(err, res);
										})
									}
								],
								function(err, result) {
									if (err) {
										console.log("rollback")
										conn.rollback();
									} else {
											console.log("事件提交")
											conn.commit(function(err, info) {
											console.log(info);
											conn.end()
											return callback(true);
										});
									}
								});
						});
					}
				});
		}
	}

	module.exports = new UserCRUD();