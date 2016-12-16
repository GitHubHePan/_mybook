$(function() {
	$.ajax({
		type: "get",
		url: "login.html",
		async: true,
		success: function(data) {
			a(50);
		}

	});

	function a(pagecount) {
		//				this.as = pagecount;
		if($("#pagination")) {
			//					      var pagecount = <%= locals.pagecount %>;  
			//					      var pagesize = <%= locals.pagesize %>;  
			//					      var currentpage = <%= locals.currentpage %>;  
			//					
			var pagecount = pagecount; //多少条信息
			var pagesize = 5; //每页多少条
			var currentpage = 5; //当前页码
			//counts 共多少页     pagehtml   			
			var counts, pagehtml = "";
			//					if (pagecount % pagesize == 0) {
			//						counts = parseInt(pagecount / pagesize);
			//					} else {
			//						counts = parseInt(pagecount / pagesize) + 1;
			//					}
			counts = Math.ceil(pagecount / pagesize);
			if(pagecount <= pagesize) { //只有一页内容  
				pagehtml = "";
			}
			//大于一页内容  
			if(pagecount > pagesize) {
				if(currentpage > 1) {
					pagehtml += '<li><a href="/course/index/' + (currentpage - 1) + '">上一页</a></li>';
				}
				for(var i = 0; i < counts; i++) {
					if(i >= (currentpage - 4) && i < (currentpage + 3)) {
						if(i == currentpage - 1) {
							pagehtml += '<li class="active"><a href="/course/index/' + (i + 1) + '">' + (i + 1) + '</a></li>';
						} else {
							pagehtml += '<li><a href="/course/index/' + (i + 1) + '">' + (i + 1) + '</a></li>';
						}
					}
				}
				if(currentpage < counts) {
					pagehtml += '<li><a href="/course/index/' + (currentpage + 1) + '">下一页</a></li>';
				}
			}
			$("#pagination").html(pagehtml);
		}
	}
});