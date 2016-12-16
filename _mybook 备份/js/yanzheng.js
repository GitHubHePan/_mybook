window.onload = function() {
	//设置用户名
	var inuser = document.getElementById("user");
	var ussp = document.getElementById("one");
	//验证用户名
	inuser.onfocus = function() {
		ussp.innerHTML = "要求：中文、英文、数字组成";
	};
	inuser.onblur = function() {
		checkname();
	};
	//验证密码
	var ospd = document.getElementById("pwd");
	var mspan = document.getElementById("two");
	ospd.onfocus = function() {
		mspan.innerHTML = "要求：英文、数字符号";
	};
	ospd.onblur = function() {
		chechmima();
	};
	//验证再次输入密码
	var opsd2 = document.getElementById("pwd1");
	var thre = document.getElementById("three");
	opsd2.onfocus = function() {
		thre.innerHTML = "要求：和密码一致";
	};
	opsd2.onblur = function() {
		checkmimas();
	};
	//验证手机
	var shouji = document.getElementById("iphone");
	var fou = document.getElementById("four");
	shouji.onfocus = function() {
		fou.innerHTML = "要求：正确的手机号码";
	};
	shouji.onblur = function() {
		checkshouji();
	};
	//验证验证码
	var yamzhe = document.getElementById("patern");
	var suijiyan = document.getElementById("suiJi");
	var yan2 = document.getElementById("five");
	yamzhe.onfocus = function() {
		yan2.innerHTML = "请输入常用邮箱";
	};
	yamzhe.onblur = function() {
		chengma();
	};
	//				//随机生成验证码
	suijiyan.onclick = function() {
		var str = "1234567890qwertyuiopasdfghjklzxcvbnmQAZWSXEDCRFVTGBYHNUJMIKOLP";
		var arr = [];
		for(i = 1; i <= 4; i++) {
			var s = parseInt(Math.random() * str.length);
			arr.push(str[s]);
		}
		suijiyan.innerHTML = arr.join("");
	};

	function checkname() {
		//设置失去焦点
		var shuru = inuser.value;
		var exp1 = /^[\w_]{0,}$/;
		if(shuru == "") {
			ussp.innerHTML = "用户名不能为空";
			return false;
		}
		if(exp1.test(shuru) == false) {
			ussp.innerHTML = "用户名输入不规范";
			return false;
		}
		return true;
	}

	function chechmima() {
		var mima = ospd.value;
		if(mima == "") {
			mspan.innerHTML = "密码不能为空";
			return false;
		}
		return true;
	}

	function checkmimas() {
		var mimas = opsd2.value;
		var mima = ospd.value;
		if(mimas == "") {
			thre.innerHTML = "确认密码不能为空";
			return false;
		}
		if(mimas != mima) {
			thre.innerHTML = "两次密码输入不一致";
			$("#_btn1").click(function() {
				thre.innerHTML = "两次密码输入不一致";
			});
			return false;
		}
		return true;
	}

	function checkshouji() {
		var haoma = shouji.value;
		var exp3 = /^\d{11}$/;
		if(haoma == "") {
			fou.innerHTML = "手机号码不能为空";
			return false;
		}
		if(exp3.test(haoma) == false) {
			fou.innerHTML = "手机号码输入格式不正确";
			return false;
		}
		return true;
	}

	function chengma() {
		var shuruyzm = yamzhe.value;
		if(shuruyzm == "") {
			yan2.innerHTML = "邮箱不能为空";
			return false;
		}
		return true;
	}
};