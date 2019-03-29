var _urlOnline = "http://www.icebear.me/";
var _loginPopWidth = '334';
var _loginPopHeight = '405';
var _registerPopWidth = '334';
var _regitserPopHeight = '450';

window.jmLogin = {
    LoginPopupHtml: '<div class="login-popup" id="wltLogin" login-stat="jm.jm_fc.zfb_member"><span class="close-login-btn J_CloseLoginBtn" title="关闭">关闭</span>'+"</div>",
    RegesterPopupHtml: '<div class="login-popup register-popup" id="wltRegister" login-stat="jm.jm_fc.zfb_member"><span class="close-login-btn J_CloseLoginBtn" title="关闭">关闭</span>'+"</div>",
    cookieNames: ["login", "ot_home_login", "ot_home_uid"],
    login: function() {
        KISSY.use("LoginPopup", 
        function(a, b) {
            KISSY.one("body").height(480);
            var c = new b;
            c.init({
                full_redirect: !1,
                isRedirectToA: !1
            }),
            c.showLoginPopup("login"),
            a.UA.chrome && a.UA.chrome >= 33 && a.one(".login-popup a.tip") && a.one(".login-popup a.tip").removeClass("jm_hidden")
        })
    },
    // setCookie: function(name,value,sec){
    //     if(arguments.length>2){
    //         var expire=new Date(new Date().getTime()+sec*1000);
    //         document.cookie = name + "=" + escape(value) + "; path=/; domain=.icebear.me; expires=" + expire.toGMTString() ;
    //     }else
    //     document.cookie = name + "=" + escape(value) + "; path=/; domain=.icebear.me";
    // },
    // getCookie: function(name){
    //     return (document.cookie.match(new RegExp("(^"+name+"| "+name+")=([^;]*)"))==null)?"":RegExp.$2;
    // },
    clearCookie: function() {
        // for (var a = 0; a < window.jmLogin.cookieNames.length; a++) {
        //     var b = window.jmLogin.cookieNames[a];
        //     if(chrome.cookies){
        //         chrome.cookies.set({
        //             url: "http://www.icebear.me",
        //             name: b,
        //             value: ""
        //         })
        //     }else{
        //         window.jmLogin.setCookie(b,"",-1000000);
        //     }
        // }

    },
    cookieObj: {},
    init: function() {
        window.jmLogin.initLoginHtml();
        window.jmLogin.checkLogin();
        chrome.cookies.onChanged.addListener(function(a) {
            if( a.cookie.domain.indexOf(".icebear.me") > -1 )console.log(a.cookie.domain+' '+a.cookie.name); 
            if ( "ot_home_login" == a.cookie.name  && a.cookie.domain.indexOf(".icebear.me") > -1 ) {
                chrome.cookies.get({url:"http://www.icebear.me",name:"ot_home_gotourl"},function(cookie){
                    var gotourl = cookie ? cookie.value : '';
                    ///值就在cookie 里面了
                    if (console.log("changeInfo.cookie.name:", a.cookie.name), !gotourl && a.cookie.value != 'deleted' && a.cookie.value != ''){
                    
                        console.log(a.cookie.value); 
                        if( window.jmLogin.cookieObj[a.cookie.name] != a.cookie.value || a.removed == true ){
                            window.jmLogin.checkLogin();
                            //检验sessionid
                            KISSY.use("jmPopup", 
                            function(a, b) {
                                jm_global_popup_obj = new b;
                            }); 
                        }
                    }else if( window.jmLogin.cookieObj[a.cookie.name] && window.jmLogin.cookieObj[a.cookie.name] != '' ){
                        if(gotourl){
                            jm_tools.setBackgroundLocalStore({
                                    gotourl: gotourl
                            });
                            /*if(gotourl.indexOf('wapbasic_iframe') > -1){
                                KISSY.one(".jm-register iframe").attr("height",'480px');
                            }*/
                        }else{
                            window.jmLogin.logout();
                        }
                    }
                });
                
            }
        });
        window.jmLogin.checkLogin();
    },
    webCheckLoginStatus: function(){
        if(!window.jm_jminer.login || window.jm_jminer.login.login != true){


            // var webCLS =  setInterval(function(){
            //     jm_tools.checkWebSite && jm_tools.checkWebSite() && jm_tools.getMessageFromBackground({
            //         operate: "checkIsLogin",
            //         data: {}
            //     },
            //     function(a) {
            //         console.log('checkIsLogin---a:' + a);
            //         if(a && JSON.parse(a).login == true){
            //             //window.jmLogin.checkLogin();
            //             //检验sessionid
            //             KISSY.use("jmPopup", 
            //             function(a, b) {
            //                 jm_global_popup_obj = new b;
            //             }); 
            //             clearInterval(webCLS);
            //         }
            //     });
            // },1000);
            var webCLS =  function(){

                jm_tools.checkWebSite && jm_tools.checkWebSite() && jm_tools.getMessageFromBackground({
                    operate: "checkIsLogin",
                    data: {}
                },
                function(a) {
                    console.log('checkIsLogin---a:' + a);
                    if(a && JSON.parse(a).login == true){
                        //window.jmLogin.checkLogin();
                        //检验sessionid
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        }); 
                        clearInterval(webCLS);
                    }
                });
            };
            //console.log(document.cookie);
        }
        //var webBasicCLS =  setInterval(function(){
        var webBasicCLS =  function(){
            if(window.jm_jminer.login && window.jm_jminer.login.login == true){
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    if(gotourl != jmLogin.getCookie("gotourl") && jmLogin.getCookie("gotourl") == ""){
                        jm_tools.checkWebSite && jm_tools.checkWebSite() && jm_tools.setBackgroundLocalStore({
                            gotourl: ""
                        });
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        }); 
                        clearInterval(webBasicCLS);
                    }
                });
            }
        //},1000);
        };
         
        if(!window.jm_jminer.login || window.jm_jminer.login.login != true){
            var webLoginbtnCLS =  setInterval(function(){
                var loginBtn = document.getElementById('jm-reg-iframe') ? document.getElementById('jm-reg-iframe').contentWindow.document.getElementById('submitLogin') || '' : '';
                if(loginBtn){
                    clearInterval(webLoginbtnCLS);
                    loginBtn.onclick = function(){
                        var webLoginCLS =  setInterval(function(){
                            var login = document.getElementById('jm-reg-iframe').contentWindow.document.getElementById('login_iframe_ret') ? document.getElementById('jm-reg-iframe').contentWindow.document.getElementById('login_iframe_ret').innerText : '';
                            if(login){
                                clearInterval(webLoginCLS);
                                window.jm_tools.setBackgroundLocalStore({
                                    jm_login: login
                                });
                                
                            } 
                        },500);
                    };
                }
            },1000);
        }

    },
    loginStatusTimout: null,
    initLoginHtml: function() {
        window.jmLogin.loginStatusTimout || (window.jmLogin.loginStatusTimout = setTimeout(function() {
            KISSY.one("body").fire("loginStatusUpdate"),
            window.jmLogin.loginStatusTimout = null
        },
        100))
    },
    checkLogin: function(a) {
        console.log('checkLogin:'+a);
        var b = {
            login: "false",
            ot_home_uid:'',
            ot_home_login:''
        };
        //console.log("before:" + localStorage.jm_login),
        console.log("bis:" +  JSON.stringify(b)),
        localStorage.jm_login ? b = JSON.parse(localStorage.jm_login) : localStorage.jm_login = JSON.stringify(b),
        console.log("end:" + localStorage.jm_login),
        chrome.cookies.getAll({
            domain: ".icebear.me"
        },
        function(c) {
            console.log('c:'+ JSON.stringify(c));
            if (c.length > 0) for (var d = 0; d < c.length; d++) {
                var e = c[d];
                b[e.name] = e.value;
                if( e.name == "ot_home_login" && e.value != "" ){
                    b.login = true;
                }
            }
            console.log("b2is:" +  JSON.stringify(b)),
            true == b.login && (localStorage.jm_login = JSON.stringify(b));
            if( localStorage.jm_login && (JSON.parse(localStorage.jm_login)).login == true){
                console.log("endb2jmloginis:" + localStorage.jm_login);
                console.log(new Date().getTime() + '----1');
                //window.jmLogin.checkLogin();
            }else{
                console.log(new Date().getTime() + '----0');
                return 0;
            }
            //
        })
    },
    checkIsLogin:function(){
        var a = JSON.parse(localStorage.jm_login || null);
        return a && true == a.login ? !0: !1;
    },
    checkLoginCallback:function(e){
        console.log('-----e:' + e + '------');
    },
    logout: function() {
        console.log('logout');
        window.jm_tools.setBackgroundLocalStore && window.jm_tools.setBackgroundLocalStore({
            jm_login: ""
        });
        window.jmLogin.clearCookie();
        window.jmLogin.cookieObj = {};
        window.localStorage.removeItem('jm_trackList_sync');
        window.localStorage.removeItem("jm_login");
        KISSY.all('.jm-register,#jm-logo').show();
        KISSY.all('#jm-content').hide();
        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
        KISSY.all('.jm-support-qipao').hide();
        //KISSY.one('#jm_login').removeClass('jm_islogin')
        //var a = '<iframe id="jm_logout_iframe" scrolling="no" frameborder="0" allowtransparency=true border="0" width="0" height="0" src="http://svr.icebear.me/uc_home/user.php?TPL_type=logout" style="overflow: hidden;"></iframe>';
        //KISSY.one("body").append(a),
        //KISSY.one("body").fire("loginStatusUpdate");
        KISSY.io.get('http://www.icebear.me/User/logout_iframe/',function(data){console.log(data);
            window.jm_jminer.login = "";
            KISSY.one('#jm_pop_tab').removeClass('jm_pop_tab_min');
            KISSY.all('.jm-register,#jm-logo').show();
            //KISSY.one('.jm-register iframe').attr("src","http://www.icebear.me/User/checkLogin?callback=jmLogin.checkLoginCallback");
            window.jmLogin.webCheckLoginStatus();
            KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
        });
        //location.reload();
    },
    register: function (argument) {
        KISSY.use("LoginPopup", 
        function(a, b ) {
            KISSY.one("body").height(480);
            var c = new b;
            c.init({
                full_redirect: !1,
                isRedirectToA: !1
            }),
            c.showLoginPopup("register"),
            a.UA.chrome && a.UA.chrome >= 33 && a.one(".login-popup a.tip") && a.one(".login-popup a.tip").removeClass("jm_hidden")
        })
    }
},
KISSY.add("LoginPopup", 
function(a, b, c, d) {
    function e(a) {
        var b = this;
        e.superclass.constructor.call(b, a),
        b.init()
    }
    if (top !== self && top.ETao && !top.ETao.needRefresh) try {
        var f = top.ETao.loginSuccess;
        f && f(),
        top.ETao.Header && new top.ETao.Header
    } catch(g) {}
    var h = a.DOM,
    i = a.Event;
    return e.timestamp = 131013,
    a.extend(e, d, {
        init: function() {
            var a = this;
            KISSY.one(a.get("el")).delegate(a.get("triggerType"), a.get("trigger"), 
            function(b) {
                var c = a.get("redirect_url"),
                d = a.get("needRefresh");
                if (! (a.checkTrueLogin() || a.get("isCheckLongOrTrueLogin") && a.checkLongOrTrueLogin())) {
                    b.preventDefault();
                    var e = a.get("isRedirectToA") ? b.currentTarget.href: c;
                    a.show({
                        redirect_url: e,
                        needRefresh: d
                    })
                }
            })
        },
        destructor: function() {},
        checkTrueLogin: function() {
            var a = true == b.get("login"),
            c = b.get("_nk_"),
            d = b.get("a_nk");
            return a && (c || d)
        },
        checkLongOrTrueLogin: function() {
            var a = this,
            c = b.get("tracknick"),
            d = b.get("ck1") || b.get("lgc");
            return a.checkTrueLogin() || c && d
        },
        showLoginPopup: function(a) {
            var b = this;
            b.show(a)
        },
        checkIntervalID:null,
        show: function(a1) {
            var b = this;
            var bPr = this,         
            d = b.get("loginType"),
            e = b.get("redirect_url"),
            f = (b.get("needRefresh"), "&pre=" + escape(window.location.href));

            if(null == this.checkIntervalID && localStorage.jm_browsername && localStorage.jm_browsername == "sougou"){
                this.checkIntervalID =  setInterval(function(){

                    if(KISSY.one('.jmlogin-overlay').css('visibility') != "visible"){
                        clearInterval(bPr.checkIntervalID);
                        bPr.checkIntervalID = null;
                        console.log("not set interval now!!");
                    }
                    window.jmLogin.checkIsLogin();
                }, 500);
            }

            if (b.login) {
                var g = h.viewportHeight() / 2 - 200 + h.scrollTop(),
                j = h.viewportWidth() / 2 - 171 + h.scrollLeft();
                h.css(b.login.get("el")[0], {
                    top: 0 > g ? 0: g,
                    left: 0 > j ? 0: j
                }),
                b.login.show()
            } else if (window.loginFormPopup && a1 == "login") {
                var k = window.loginFormPopup;
                KISSY.ChangeIframeSrc(e, d);
                var g = h.viewportHeight() / 2 - _loginPopHeight/2 + h.scrollTop(),
                j = h.viewportWidth() / 2 - _loginPopWidth/2 + h.scrollLeft();
                h.css(k.get("el")[0], {
                    top: 0 > g ? 0: g,
                    left: 0 > j ? 0: j
                }),
                k.show()
            } else if (window.registerFormPopup && a1 == "register") {
                var k = window.registerFormPopup;
                KISSY.ChangeIframeSrc1(e, d);
                var g = h.viewportHeight() / 2 - _regitserPopHeight/2 + h.scrollTop() + 3,
                j = h.viewportWidth() / 2 - _registerPopWidth/2 + h.scrollLeft();
                h.css(k.get("el")[0], {
                    top: 0 > g ? 0: g,
                    left: 0 > j ? 0: j
                }),
                k.show()
            }  else {
                if( a1 == "login" ){
                    var width = _loginPopWidth;
                    var height = _loginPopHeight;
                    var html = window.jmLogin.LoginPopupHtml;
                    var left = _loginPopWidth/2;
                    var top = _loginPopHeight/2;
                }else{
                    var width = _registerPopWidth;
                    var height = _regitserPopHeight;
                    var html = window.jmLogin.RegesterPopupHtml;
                    var left = _registerPopWidth/2;
                    var top = _regitserPopHeight/2 - 3;
                }
                var l = new c({
                    prefixCls: "jmlogin-",
                    width: width,
                    height: height,
                    mask: b.get("mask"),
                    zIndex: 10001
                });
                l.render();
                l.get("contentEl").html(html, !0);
                if( a1 == "login"){
                    (function(){var walapayIframeSrc =_urlOnline+'account/login_iframe/';var iframe = document.createElement('iframe');iframe.setAttribute('scrolling', 'no');iframe.setAttribute('frameBorder', '0');iframe.setAttribute('allowTransparency', 'true');iframe.setAttribute('border', '0');iframe.setAttribute('id', 'loginpop');iframe.style.overflow = 'hidden';iframe.width = _loginPopWidth;iframe.height = '100%';iframe.src = walapayIframeSrc;var loginpopup = document.getElementById('wltLogin');loginpopup.appendChild(iframe);console.log(walapayIframeSrc) ;KISSY.ChangeIframeSrc = function (redirect_url, type) {iframe.src = walapayIframeSrc;};})(); 
                }else{
                    (function(){var walapayIframeSrc1 =_urlOnline+'account/register_iframe/';var iframe = document.createElement('iframe');iframe.setAttribute('scrolling', 'no');iframe.setAttribute('frameBorder', '0');iframe.setAttribute('allowTransparency', 'true');iframe.setAttribute('border', '0');iframe.setAttribute('id', 'registerpop');iframe.style.overflow = 'hidden';iframe.width = _registerPopWidth;iframe.height = '100%';iframe.src = walapayIframeSrc1;var loginpopup = document.getElementById('wltRegister');loginpopup.appendChild(iframe);KISSY.ChangeIframeSrc1 = function (redirect_url, type) {iframe.src = walapayIframeSrc1;};})();
                }
                var g = h.viewportHeight() / 2 - top + h.scrollTop(),
                j = h.viewportWidth() / 2 - left + h.scrollLeft();
                h.css(l.get("el")[0], {
                    top: 0 > g ? 0: g,
                    left: 0 > j ? 0: j
                }),
                l.show();
                if( a1 == "login" ){window.loginFormPopup = l;}else{window.registerFormPopup = l;}
                b.login = l;
                i.on(".b-new-user", "click", 
                function() {
                    console.log('register click');
                });
                var m = a.guid();
                b.id = m,
                l.get("el")[0].id = m,
                i.on(".J_CloseLoginBtn", "click", 
                function() {
                    if(bPr.checkIntervalID != null){
                        clearInterval(bPr.checkIntervalID);
                        bPr.checkIntervalID = null;
                    }
                    l.hide(),
                    h.css(".jmlogin-overlay", {
                        top: "-9999px"
                    })
                }),
                //a.Stat && a.Stat("click=" + h.attr(".login-popup", "login-stat") + f),
                i.delegate("#" + m, "click", "li a", 
                function(b) {
                    b.preventDefault();
                    var c = b.currentTarget;
                })
            }
        },
        hide: function() {
            if(this.checkIntervalID != null){
                clearInterval(this.checkIntervalID);
                this.checkIntervalID = null;
            }
            this.login.hide()
        }
    },
    {
        ATTRS: {
            el: {
                value: "body"
            },
            trigger: {
                value: ".J_WalaLogin"
            },
            triggerType: {
                value: "click"
            },
            redirect_url: {
                value: window.location.href
            },
            loginType: {
                value: "taobao"
            },
            isRedirectToA: {
                value: !1
            },
            isCheckLongOrTrueLogin: {
                value: !0
            },
            needRefresh: {
                value: !0
            },
            mask: {
                value: !0
            }
        }
    }),
    e
},
{
    requires: ["cookie", "overlay", "base"]
});