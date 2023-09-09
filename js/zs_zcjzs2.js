(function(win, $) {
	var unid = getUrlParam("id");
	var zxguid = getUrlParam("zxguid");
	if (zxguid == null || zxguid == '')
		zxguid = "_Q";
	getPersonpic(unid, zxguid);
	getPersoninfo(unid, zxguid);

	function getPersoninfo(unid, zxguid) {

		var dataJSON = {
			'unid' : unid,
			'zxguid' : zxguid
		};
		jQuery.support.cors = true;

	
	$.ajax({
		type : "post",
		url : "getreginfoaction.action?cmd=getRegInfo",
		data : dataJSON,
		dataType : "json",
		success : function(data) {	
				if (data.custom == "") {
					$("#error").removeClass("hidden");
					
				} else {
					$("#info").removeClass("hidden");
					$("#guide").removeClass("hidden");
					$("#error").addClass("hidden");
					var rendered = Mustache.render(
							$('#temp_personinfo').html(), data.custom);
					$('#personinfo').html(rendered);
					// 渲染后内容
					var innertext = $("#specialtytext").html();
					var ss = innertext.split(",");
					var itemHtml = "";
					if (ss.length > 0) {
						for (var k = 0; k < ss.length; k++) {
							itemHtml += ss[k] + "<br/>"; // 避免这种频繁操作
						}
					}
					$("#specialtytext").html(itemHtml);
					var zkmsg = $("#zkmsg").html();
					if(zkmsg == "zankou"){
						$("#border").removeClass("hidden");
					}
				}
				
			},
			error : function(e) {
				console.log("错误");
				console.log(e);
			}
		});
	}

	function getPersonpic(unid, zxguid) {

		var dataJSON = {
			'guid' : unid,
			'zxguid' : zxguid
		};
		jQuery.support.cors = true;

		
	$.ajax({
		type : "post",
		url : "getreginfoaction.action?cmd=getPersonPic",
		data : dataJSON,
		dataType : "json",
		success : function(data) {
				if ($('#error').is(':hidden')) {
					if (data.custom == '') {
						$("#pic").addClass("hidden");
					} else {
						$("#pic").removeClass("hidden");
						var rendered = Mustache.render($('#temp_pic').html(),
								data.custom);
						$('#pic').html(rendered);
					}
				}		
			},
			error : function(e) {
				console.log("错误");
				console.log(e);
			}
		});
	}

}(this, jQuery))

// 获取url中的参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); // 匹配目标参数
	if (r != null)
		return unescape(r[2]);
	return null; // 返回参数值
}
