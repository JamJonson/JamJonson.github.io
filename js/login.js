var LOGIN = {
	bindEvent:function(){
		$("#login-btn").on('click',function(){
			if($("#username").val() != '' && $("#password") != ''){
				if($("#remember").is(':checked')){
					jQuery.cookie('username', $("#username").val());  
					jQuery.cookie('password', $("#password").val());  
				}else{
					jQuery.cookie("username", '', { expires: -1 });   
					jQuery.cookie("password", '', { expires: -1 });  
				}
				LOGIN.login();
			}else{
				alert("请输入正确的密码和用户名");
			}
		});
	},
	login:function(){
		ajaxHtml.post('', {params: JSON.stringify({
            userAccount:$('#username').val(),
            userPassword:$('#password').val()
        })}).then(function(res){
            if(res.returnCode === '1000'){
                // location.href = '';
                alert('登陆成功');
            }
        });
	},
	addCookis:function(){
		$("#username").val(jQuery.cookie('username'));  
		$("#password").val(jQuery.cookie('password'));   
	},
	init:function(){
		this.addCookis();
		this.bindEvent();
	}
}
$(function(){
	LOGIN.init();
});