$(function() {
	$("#_tu11").click(function() {
		$("#_p1").text("");
		$("#_userin1").val("");
		$("#_userin2").val("");
		if($("#_login").css("display") == "none") {
			$("#_login").show();
		} else {
			$("#_login").hide();
		}
	});
	$("#_btn").click(function() {

		var usernameVal = $("#_userin1").val();
		var passwordVal = $("#_userin2").val();
		$.ajax({
			type: "post",
			url: "http://10.2.153.113:8081/loginUser",
			data: {
				"username": usernameVal,
				"password": passwordVal
			},
			success: function(data) {
				if(!data) {
					$("#_p1").text("登陆失败！！！");
				} else {
					$("#_p1").text("登陆成功！！！");

					$("#_login").hide(2000);
					$("#_tu11").click(function() {
						$("#_login").hide();
						if($("#_message").css("display") == "none") {
							$("#_message").show();
						} else {
							$("#_message").hide();

						}
					});

					var name = $("#_userin1").val();
					localStorage.setItem("un", name);
					var value = localStorage.getItem("un");
					$("#welcome").text(value);
					$("#us1").text(value);
				}
			}
		});
	});
	$("#zhuce").click(function() {
		$("#_login").hide();
		$("#_zhuce").show();
		if($("#_zhuce").css("display") == "block") {
			$("#_tu11").click(function() {
				$("#_zhuce").hide();
			});
		}
	});

	$(function() {
		$("#_btn1").click(function() {
			var usernameVal = $("#user").val();
			var passwordVal = $("#pwd").val();
			var phoneNmuVal = $("#iphone").val();
			var emailVal = $("#patern").val();
			console.log(usernameVal);
			$.ajax({
				type: "post",
				url: "http://10.2.153.113:8081/registryin",
				data: {
					"username": usernameVal,
					"password": passwordVal,
					"phoneNum": phoneNmuVal,
					"email": emailVal
				},
				success: function(data) {
					if(!data) {
						$("#_zcs").text("注册失败!!!");
					} else {
						$("#_zcs").text("注册成功!!!");
						$("#_zhuce").hide(2000);

						//								sessionStorage.setItem("ph", phoneNmuVal);
						//								var value1 = sessionStorage.getItem("ph");
						//								$("#us2").text(value);
					}
				}
			});
		});
	});
});