$(function() {
			
	
		function a(pagecount) {
			//				this.as = pagecount;
	
			if ($("#pagination")) {
				//					      var pagecount = <%= locals.pagecount %>;  
				//					      var pagesize = <%= locals.pagesize %>;  
				//					      var currentpage = <%= locals.currentpage %>;  
				//					
				var pagecount = pagecount; //多少条信息
				var pagesize = 5; //每页多少条
				var currentpage = 2; //当前页码
				//counts 共多少页     pagehtml   			
				var counts, pagehtml = "";
				//					if (pagecount % pagesize == 0) {
				//						counts = parseInt(pagecount / pagesize);
				//					} else {
				//						counts = parseInt(pagecount / pagesize) + 1;
				//					}
	
				counts = Math.ceil(pagecount / pagesize);
				if (pagecount <= pagesize) { //只有一页内容  
					pagehtml = "";
				}
	
	
				//大于一页内容  
				if (pagecount > pagesize) {
					if (currentpage > 1) {
						pagehtml += '<li><a href="#' + (currentpage - 1) + '">上一页</a></li>';
					}
					for (var i = 0; i < counts; i++) {
						if (i >= (currentpage - 4) && i < (currentpage + 3)) {
							if (i == currentpage - 1) {
								pagehtml += '<li class="active"><a href="#' + (i + 1) + '">' + (i + 1) + '</a></li>';
							} else {
								pagehtml += '<li><a href="#' + (i + 1) + '">' + (i + 1) + '</a></li>';
							}
						}
					}
					if (currentpage < counts) {
						pagehtml += '<li><a href="#' + (currentpage + 1) + '">下一页</a></li>';
					}
				}
				$("#pagination").html(pagehtml);
			}
	
		}
	var flag = false;
	$.ajax({
		type: "get",
		url: "http://10.2.153.113:8081/c1",
		async: true,
		success: function(data) {
			$.ajax({
				type: "get",
				url: "http://10.2.153.113:8081/countAll",
				async: false,
				success: function(data) {
					for (i in data) {
						console.log(data[i]);
					}
					console.log(data[i]);
										a(data[i]);
				}
			});
			$("#xiangxi li").html(" ");
			for (i in data) {
				$("#xiangxi li:eq(" + i + ")").html("<img src = " + data[i].b_src + " style = 'height:45px;width:45px;'>" + " 书名：" + data[i].b_name + " 价格：" + data[i].b_price + " 销量" + data[i].b_sales)
			}
		}
	});
//	if (flag == true) {
		$("#moren span").click(function(e) {
			var pageVal = $(this).html();
			console.log(pageVal);
			uri = "http://10.2.153.113:8081/c" + pageVal;
			$.ajax({
				type: "get",
				url: uri,
				async: false,
				success: function(data) {
					$("#xiangxi li").html(" ");
					for (i in data) {

						$("#xiangxi #moren li:eq(" + i + ")").html("<img src = " + data[i].b_src + " style = 'height:45px;width:45px;'>" + " 书名：" + data[i].b_name + " 价格：" + data[i].b_price + " 销量：" + data[i].b_sales);
					}
				}
			});
		});
//	}

	$("#renxi span").click(function(e) {
		var pageVal = $(this).text();
		uri = "http://10.2.153.113:8081/d" + pageVal;
		$.ajax({
			type: "get",
			url: uri,
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#xiangxi #moren li:eq(" + i + ")").html("<img src = " + data[i].b_src + " style = 'height:45px;width:45px;'>" + " 书名：" + data[i].b_name + " 价格：" + data[i].b_price + " 销量：" + data[i].b_sales);
				}
			}
		});
	});
	$("#jiage span").click(function(e) {
		var pageVal = $(this).text();
		uri = "http://10.2.153.113:8081/b" + pageVal;
		$.ajax({
			type: "get",
			url: uri,
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#xiangxi #jiage li:eq(" + i + ")").html("<img src = " + data[i].b_src + " style = 'height:45px;width:45px;'>" + " 书名：" + data[i].b_name + " 价格：" + data[i].b_price + " 销量：" + data[i].b_sales);
				}
			}
		});
	});
	$("#xiaoliang span").click(function(e) {
		var pageVal = $(this).text();
		uri = "http://10.2.153.113:8081/a" + pageVal;
		$.ajax({
			type: "get",
			url: uri,
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#xiangxi #xiaoliang li:eq(" + i + ")").html("<img src = " + data[i].b_src + " style = 'height:45px;width:45px;'>" + " 书名：" + data[i].b_name + " 价格：" + data[i].b_price + " 销量：" + data[i].b_sales);
				}
			}
		});
	});



	$(".paixu1").click(function() {
		$("#moren").show();
		$("#renxi").hide();
		$("#xiaoliang").hide();
		$("#jiage").hide();
		$.ajax({
			type: "get",
			url: "http://10.2.153.113:8081/c1",
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#xiangxi li:eq(" + i + ")").html("<img src = " + data[i].b_src + " style = 'height:45px;width:45px;'>" + " 书名：" + data[i].b_name + " 价格：" + data[i].b_price + " 销量：" + data[i].b_sales)
				}
			}
		});
	});
	$(".paixu2").click(function() {
		$("#moren").hide();
		$("#renxi").show();
		$("#xiaoliang").hide();
		$("#jiage").hide();
		$.ajax({
			type: "get",
			url: "http://10.2.153.113:8081/d1",
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#renxi li:eq(" + i + ")").html("<img src = " + data[i].b_src + " style = 'height:45px;width:45px;'>" + " 书名：" + data[i].b_name + " 价格：" + data[i].b_price + " 销量：" + data[i].b_sales)
				}
			}
		});
	});
	$(".paixu3").click(function() {
		$("#moren").hide();
		$("#renxi").hide();
		$("#xiaoliang").show();
		$("#jiage").hide();
		$.ajax({
			type: "get",
			url: "http://10.2.153.113:8081/a1",
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#xiaoliang li:eq(" + i + ")").html("<img src = " + data[i].b_src + " style = 'height:45px;width:45px;'>" + " 书名：" + data[i].b_name + " 价格：" + data[i].b_price + " 销量：" + data[i].b_sales)
				}
			}
		});
	});
	$(".paixu4").click(function() {
		$("#moren").hide();
		$("#renxi").hide();
		$("#xiaoliang").hide();
		$("#jiage").show();
		$.ajax({
			type: "get",
			url: "http://10.2.153.113:8081/b1",
			async: true,
			success: function(data) {
				$("#xiangxi li").html(" ");
				for (i in data) {
					$("#jiage li:eq(" + i + ")").html("<img src = " + data[i].b_src + " style = 'height:45px;width:45px;'>" + " 书名：" + data[i].b_name + " 价格：" + data[i].b_price + " 销量：" + data[i].b_sales)
				}
			}
		});
	});




});
