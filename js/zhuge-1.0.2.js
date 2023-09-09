// 诸葛埋点代码-20190819
(function () {
    window.zhuge = window.zhuge || [];
    window.zhuge.methods =
        "_init identify track getDid getSid getKey setSuperProperty setUserProperties setPlatform".split(" ");
    window.zhuge.factory = function (b) {
        return function () {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(b);
            window.zhuge.push(a);
            return window.zhuge;
        }
    };
    for (var i = 0; i < window.zhuge.methods.length; i++) {
        var key = window.zhuge.methods[i];
        window.zhuge[key] = window.zhuge.factory(key);
    }
    window.zhuge.load = function (b, x) {
        if (!document.getElementById("zhuge-js")) {
            var a = document.createElement("script");
            var verDate = new Date();
            var verStr = verDate.getFullYear().toString() +
                verDate.getMonth().toString() + verDate.getDate().toString();
            a.type = "text/javascript";
            a.id = "zhuge-js";
            a.async = !0;
            a.src = "https://tt.chei.com.cn/zhuge.js?v=" + verStr;
            a.onerror = function () {
                window.zhuge.identify = window.zhuge.track =
                    function (ename, props, callback) {
                        if (callback && Object.prototype.toString.call(callback) ===
                            '[object Function]') {
                            callback();
                        } else if (Object.prototype.toString.call(props) ===
                            '[object Function]') {
                            props();
                        }
                    };
            };
            var c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(a, c);
            window.zhuge._init(b, x)
        }
    };
})();


var zhugeFun ={
    init:function(){
        var _url = window.location.href,OpenautoTrack = false;//是否开启全埋点
        if(_url == 'https://www.chsi.com.cn/' || _url.indexOf('www.chsi.com.cn/index.jsp')>-1 ||  _url.indexOf('www.chsi.com.cn/?')>-1){//pc首页
            OpenautoTrack = true;
        }
        window.zhuge.load('14e129856fe4458eb91a735923550aa6', { //配置应用的AppKey
            autoTrack: OpenautoTrack
        });
    },
    //去往新职业
    goNcss:function(from,to){
        zhuge.track('goNcss', {
           '来源': from,
           '去向': to
        });
    },
    lwccClick:function(from){
        //毕业论文查重
        zhuge.track('bylwccClick', {
            '来源': from
        });
    },
     pagePv:function(name,platform){
        //各类页面访问量
        zhuge.track('pagePv', {
            '页面名称':name,
            '设备信息':platform
        });   
    }
}
zhugeFun.init(); 
