function jm_getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function getPropertyCount(o){  
   var n, count = 0;  
   for(n in o){  
      if(o.hasOwnProperty(n)){  
         count++;  
      }  
   }  
   return count;  
}  


        
function resize(){$('#notifications').height(window.innerHeight - 50);}
$( window ).resize(function() {resize();});
resize();


function refresh_close(){
$('#notifications .close').click(function(){$(this).parent().fadeOut(200);});
}

// var bottom_center = '<div id="notifications-bottom-right-tab"><div id="notifications-bottom-right-tab-close" class="close"><span class="iconb" data-icon="&#xe20e;"></span></div><div id="notifications-bottom-right-tab-avatar"><img src="img/avatar.jpg" width="70" height="70" /></div><div id="notifications-bottom-right-tab-right"><div id="notifications-bottom-right-tab-right-title"><span>Delmarks</span> sent you a message</div><div id="notifications-bottom-right-tab-right-text">This is a sample notification that <br> will appear the right bottom corner.</div></div></div>';


// $("#notifications-bottom-right").html();
// var a = $("#notifications-bottom-right").html(bottom_center);

$("#notifications-bottom-right-tab").addClass('animated ' + 'fadeInRight');
refresh_close();


KISSY.add("jmPopupHomeBar",
function(a, b, c, d, e, f) {
    function g(a, b) {
        return a.time > b.time ? -1: a.time < b.time ? 1: void 0
    }

  //拼接用户标识和网址url到img追踪数据
   jm_tools.getMessageFromBackground({
        operate: "getLocalStorage",
        data: {"key": 'jm_login'}
    }, function(data) {
        data = JSON.stringify(data);
        var obj = JSON.parse(data);
        obj = obj.value;
        obj = JSON.parse(obj);
        checkuserid = obj.ot_home_uid;
        //console.log(checkuserid);
        //console.log('user------' +  checkuserid);
        var formlink =  window.location.href;
        formlink +='-promotion';
        if (checkuserid) {
            //var src = '123';
            var src='https://www.google-analytics.com/collect?v=1&t=pageview&tid=UA-76243985-1&cid='+checkuserid+'&dp=plugin-promotion&dr='+formlink;
            KISSY.all('#icebear_plugin .analyticsuid').attr('src',src);
        }
    });
  
    function h() {
        //初始化bar
       if(window.jm_jminer.isNormalLock == "true"){
            //console.log('islock');
            KISSY.one('#jm_homebar').css('left','-625px');
            $("#jm_homebar #jm_hblogin #jm_hbtrigger").attr("class","arrow-right");
        }else{
            // console.log('isnotlock');
            KISSY.one('#jm_homebar').css('left','0');
          $("#jm_homebar #jm_hblogin #jm_hbtrigger").attr("class","arrow-left");
        }
        
        // jm_tools.getMessageFromBackground({
        //     operate: "getLocalStorage",
        //     data: {"key": 'isNormalLock'}
        // }, function(data) {
        //     console.log('isNormalLock------' + data);
        
        // });

        //KISSY.all('#jm_pop_tab').hide();
        //KISSY.all('#jm_hblogin').show();
        KISSY.all("#jm_homebar #jm_hblogin .jm_hbtrigger").on("click", 
        function(event) {
            new f('#jm_homebar', 'left:-625px', 0.5, 'easeOut').run(); 
            setTimeout('$("#jm_homebar #jm_hblogin #jm_hbtrigger").attr("class","arrow-right")',500);
             
             jm_tools.setBackgroundLocalStore({
                isNormalLock: true
            });
             if(KISSY.one('#jm_homebar').css('left') == '-625px'){
                new f('#jm_homebar', 'left: 0; ', 0.5, 'easeOut').run(); 
                //setTimeout('$("#jm_homebar #jm_hblogin #jm_hbtrigger").attr("class","arrow-left");',500);
                $("#jm_homebar #jm_hblogin #jm_hbtrigger").attr("class","arrow-left");
                jm_tools.setBackgroundLocalStore({
                    isNormalLock: false
                });
            }
            event.stopPropagation();
        });

        // $("#jm_homebar #jm_hblogin ul.jm_hbul li").hover(function(){
        //     $(this).toggleClass('current');
        // });

        $("#jm_homebar #jm_hblogin ul.jm_hbul li").hover(function(){
            $(this).addClass('current');
            $(this).children('ul').animate({opacity:"1"});  
        },function(){
            $(this).removeClass('current');
            $(this).children('ul').animate({opacity:"0"}); 

        });
       
        //去掉登录框
        KISSY.all('#jm_homebar').removeClass('hb_hidden');
        // KISSY.all('.jm-register,#jm-logo').hide();
        // KISSY.all('.plugin_quickwrite').hide();
        // KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();


        //避免出现背景問題
        // if(window.jm_jminer.isLock == "false"){
        //     KISSY.one('#jm-logo-login').css('display','none');
        // }
        KISSY.one("body").on("loginStatusUpdate", 
        function() {
            return;
            var a = JSON.parse(localStorage.jm_login || null);
            console.log(a),
            console.log("abcde:"+localStorage.jm_login),
            a && "true" == a.login ? (KISSY.one("#jm_pop_tab").addClass("jm_islogin"), KISSY.one("#jm_pop_tab .login_name").html(decodeURIComponent(a.a_nk || a._nk_)),  setTimeout(function() {
                KISSY.one(".J_CloseLoginBtn") ? KISSY.one(".J_CloseLoginBtn").fire("click") : ""
            },
            500)) : (htmlWhenLogout(), jm_tools.setPopupBadgeText(0))
        });


        function setBackgroundLocalStore(a) {
            jm_tools.getMessageFromBackground({
                operate: "setLocalStorage",
                data: a
            },
            function() {})
        }
        
       
    }

    function j() {
        h();
    }


    function a1(){
        var a = "";
        if ("null" != a && window.jm_jminer.template && window.jm_jminer.template.sidebar) {
            var b =  "object" == window.jm_jminer.template.shopInfo ? (window.jm_jminer.template.shopInfo[a] || {}) : (JSON.parse(window.jm_jminer.template.shopInfo)[a] || {}) ;
            var a = getMessageFromBackground({
                    operate: "getConfig",
                    data: ""
                },startRuncb);
        }
        function generateTemplateHtml(a, b, c) {
            b.website = getQueryString('domain'),
            KISSY.use("mu", 
            function(d, e) {
                c(e.to_html(a, b))
            })
        }
        function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2]); return null;
        }

        function getMessageFromBackground(a, b) {
                        
           !(typeof sogouExplorer == "object") && chrome.extension.sendMessage(a, 
            function(c) {
                return "" == c || void 0 == c ? void console.log("Get " + a.operate + "Info from background.js error") : void b(c)
            });
            (typeof sogouExplorer == "object") && sogouExplorer.extension.sendRequest( a, 
            function(c) {
                return "" == c || void 0 == c ? void console.log("Get " + a.operate + "Info from background.js error") : void b(c)
            });
            return true;
        }

        function startRuncb(a) {
            console.log("startRun get config call back..");
            window.jm_jminer.isTranslate = a.isTranslate,
            window.jm_jminer.isShowTips = a.isShowTips,
            window.jm_jminer.isShowPushNotify = a.isShowPushNotify,
            window.jm_jminer.isShowDownBar = a.isShowDownBar;
            b.isTranslate = "false" == window.jm_jminer.isTranslate ? !1: !0,
            b.isShowTips = "false" == window.jm_jminer.isShowTips ? !1: !0,
            b.isShowPushNotify = "false" == window.jm_jminer.isShowPushNotify ? !1: !0,
            b.isShowDownBar = "false" == window.jm_jminer.isShowDownBar ? !1: !0,
            generateTemplateHtml(window.jm_jminer.template.sidebar, b, 
            function(a) {
                KISSY.use("jmTools", 
                function(b, c) {
                    new c(a)
                })
            })
        }
    }


    function p() {
        j(),
        //n(),
        //o(),
        a1();
    }

    return p
},
{
    requires: ["switchable", "menubutton", "button", "mu", "anim"]
}),

KISSY.add("jmPopup",
function(a, b, c, d, e, f) {
    function g(a, b) {
        return a.time > b.time ? -1: a.time < b.time ? 1: void 0
    }

    function h() {
        // if(window.jm_jminer.isLock == "true"){
        //     KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
        //     KISSY.one('.jm-logo-lock').addClass('.jm_chk_checked');
        // }else{
        //     KISSY.one('#jm_pop_tab').addClass('.jm_pop_tab_min');
        //     KISSY.one('.jm-logo-lock').removeClass('.jm_chk_checked');
          
        // }

        // KISSY.all('#jm_homebar').hide();

        
        //拼接用户标识和网址url到img追踪数据
       jm_tools.getMessageFromBackground({
            operate: "getLocalStorage",
            data: {"key": 'jm_login'}
        }, function(data) {
            data = JSON.stringify(data);
            var obj = JSON.parse(data);
            obj = obj.value;
            obj = JSON.parse(obj);
            checkuserid = obj.ot_home_uid;
            //console.log(checkuserid);
            //console.log('user------' +  checkuserid);
            var formlink =  window.location.href;
            formlink +='-right';
            if (checkuserid) {
                //var src = '123';
                var src='https://www.google-analytics.com/collect?v=1&t=pageview&tid=UA-76243985-1&cid='+checkuserid+'&dp=plugin-right&dr='+formlink;
                KISSY.all('#jm_pop_tab .analyticsuid').attr('src',src);
            }
        });

        //console.log(checkuserid);
        // if (checkuserid) {
        //     var src = '123';
        //     //var scr='https://www.google-analytics.com/collect?v=1&t=pageview&tid=UA-76243985-1&cid='+checkuserid+'&dp=plugin-right';
        //     KISSY.all('#jm_pop_tab .analyticsuid').attr('src',src);
        // }
        if(jm_get_remote_js("quickWrite")){
            jm_get_remote_js("quickWrite");
        }
        KISSY.all('.jm-register,#jm-logo').fadeOut();
        KISSY.all('.plugin_quickwrite').fadeIn();
        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();

        KISSY.one('.qw-jstips').fadeIn();
        KISSY.one(".errorNotice").html() !=null && KISSY.one("#jm_pop_tab .qw-jstips").on("click", 
        function() {
            KISSY.one(".errorNotice").css('display','block');
            //$('.qw-jstips').removeClass('qw-jstips-newimg').addClass('qw-jstips-img');
        });
        //right-bar 分享
         $(".plugin_quickwrite ul.bottom-btn li a.qw-share").hover(function(){
                KISSY.one('.plugin_quickwrite ul.bottom-btn li .sharetowx').css('display','block');
        },function(){
            KISSY.one('.plugin_quickwrite ul.bottom-btn li .sharetowx').css('display','none');
        });
 
        //KISSY.all('#loginTips').fadeIn;
         //KISSY.one('#loginTips').show();
        //new version 
        //right-bar 缩小面板
        KISSY.all("#jm_pop_tab .plugin_quickwrite #nav-close").on("click", 
        function(event) {
            new f('.plugin_quickwrite', 'width:0', 0.05, 'easeOut', 
              function() { 
                 new f('#nav-logo', 'right: -4px;', 0.1, 'easeOut').run(); 
            }).run(); 
            KISSY.all('#jm-content').addClass('jm_hidden');
            KISSY.one('#jm_pop_tab').toggleClass('jm_pop_nav_logo');
            KISSY.one('#jm_pop_tab').addClass('.jm_pop_tab_min');
            KISSY.one('.qw-openqz').parent().removeClass('current');
            KISSY.one('.plugin_quickwrite').removeClass('open');
            //KISSY.one('.jm_pop_tab_min').css('width','38px');
            event.stopPropagation();
        });

        KISSY.all("#jm_pop_tab #nav-logo").on("click", 
        function(event) {
            new f('#nav-logo', 'right: -64px;', 0.05, 'easeOut', 
              function() { 
                 new f('.plugin_quickwrite', 'width:38px', 0.1, 'easeOut').run(); 
            }).run(); 
            KISSY.one('#jm_pop_tab').toggleClass('jm_pop_nav_logo');
            //KISSY.one('#jm_pop_tab').css('width','38px');
            event.stopPropagation();
        });
        // $(".plugin_quickwrite").hover(function(){
        //     if(KISSY.one('#jm_pop_tab').css('width') == '60px'){
        //         KISSY.one('#jm_pop_tab').css('width','250px');
        //     }
        // },function(){
        //     setTimeout("KISSY.one('#jm_pop_tab').css('width','60px')",200);
        // });
         $(".plugin_quickwrite").hover(function(){
            if(KISSY.one('#jm_pop_tab').css('width') == '60px' || KISSY.one('#jm_pop_tab').css('width') == '38px'){
                KISSY.one('#jm_pop_tab').addClass('hover_cover');
            }
        },function(){
            setTimeout("KISSY.one('#jm_pop_tab').removeClass('hover_cover');",200);
        });
       
       
        // KISSY.all(".plugin_quickwrite .quick-write").on("click",function(e){
        //     KISSY.all('#jm_qiuck_cover').toggleClass('jm_hidden');
        //     setTimeout("KISSY.one('#jm_qiuck_cover').addClass('jm_hidden')",3000);
        // });
        
        //避免出现背景問題
        if(window.jm_jminer.isLock == "false"){
            KISSY.one('#jm-logo-login').css('display','none');
        }

  

        // KISSY.all("#jm_pop_tab .jm_close") && KISSY.all("#jm_pop_tab .jm_close").on("click", 
        // function(event) {
        //     new f('#jm_pop_tab', 'width: 38px; ', 0.005, 'easeOut', 
        //       function() { 
        //          new f('#jm_pop_tab', 'width: 36px;', 0.005, 'bounceOut').run(); 
        //     }).run(); 
            
        //     //避免出现背景問題
        //     KISSY.one('#jm-logo-login').css('display','none');

        //     KISSY.one('#jm_pop_tab').toggleClass('.jm_pop_tab_min');
        //     event.stopPropagation();
        // });
        // KISSY.all("#jm_pop_tab") && KISSY.all("#jm_pop_tab").on("click", 
        // function(event) {
        //     if(KISSY.one('#jm_pop_tab').css('width') == '300px'){
        //         new f('#jm_pop_tab', 'width: 36px; ', 0.005, 'easeOut', 
        //           function() { 
        //              new f('#jm_pop_tab', 'width: 38px;', 0.005, 'bounceOut').run(); 
        //         }).run(); 
        //         KISSY.one('#jm_pop_tab').toggleClass('.jm_pop_tab_min');
        //     }
        //     event.stopPropagation();
        // });

        //old version
        // $(".jm_tab").hover(function(){
        //     if(KISSY.one('#jm_pop_tab').css('width') == '36px'){
        //         KISSY.one('#jm_pop_tab').css('width','356px');
        //         KISSY.one('#jm-logo-login').css('display','block');
        //     }
        // },function(){
        //     if(window.jm_jminer.isLock == "false"){
        //         KISSY.one('#jm_pop_tab').css('width','36px');
        //         KISSY.one('#jm-logo-login').css('display','none');
        //     }
        // });
        KISSY.one("#jm_pop_tab .logout") && KISSY.one("#jm_pop_tab .logout").on("click", 
        function() {
            window.jmLogin.logout()
        }),
        KISSY.one("#jm_pop_tab .jm_notLogin") && KISSY.one("#jm_pop_tab .jm_notLogin").on("click", 
        function() {
            window.jmLogin.login()
        }),
        KISSY.one("#jm_pop_tab .jm_register") && KISSY.one("#jm_pop_tab .jm_register").on("click", 
        function() {
            window.jmLogin.register()
        }),
        // KISSY.all("#jm_pop_tab .jm_close") && KISSY.all("#jm_pop_tab .jm_close").on("click", 
        // function() {
        //     window.close()
        // }),
        KISSY.one("body").on("loginStatusUpdate", 
        function() {
            return;
            var a = JSON.parse(localStorage.jm_login || null);
            console.log(a),
            console.log("abcde:"+localStorage.jm_login),
            a && "true" == a.login ? (KISSY.one("#jm_pop_tab").addClass("jm_islogin"), KISSY.one("#jm_pop_tab .login_name").html(decodeURIComponent(a.a_nk || a._nk_)),  setTimeout(function() {
                KISSY.one(".J_CloseLoginBtn") ? KISSY.one(".J_CloseLoginBtn").fire("click") : ""
            },
            500)) : (htmlWhenLogout(), jm_tools.setPopupBadgeText(0))
        });

        function setBackgroundLocalStore(a) {
            jm_tools.getMessageFromBackground({
                operate: "setLocalStorage",
                data: a
            },
            function() {})
        }
        
        KISSY.one(".jm-logo-lock").on("click", 
        function(a) {
            var b = KISSY.one(a.currentTarget);
            b && (b.toggleClass("jm_chk_checked"), b.hasClass("jm_chk_checked") ? (b.hasClass("jm_switch_lock") ? (window.jm_jminer.isLock = "true", setBackgroundLocalStore({
                    isLock: "true"
                })) : "") : (b.hasClass("jm_switch_lock") ? (window.jm_jminer.isLock = "false", setBackgroundLocalStore({
                    isLock: "false"
                })) : ""));
        });

        //if(KISSY.one('#jm_qiuck_cover')){KISSY.one('#jm_qiuck_cover').fadeIn();setTimeout(\"KISSY.one('#jm_qiuck_cover').fadeOut()\",3000);}



        KISSY.one(".jm-logo-setting").on("click", 
        function(a) {
            KISSY.one('.setting-head').show();
            KISSY.one('#feedback-con').hide();
            KISSY.one('.jm-tab:eq(5)').fire("click"); 
            KISSY.use('jmPopSet', function (a, b) {new b});
            KISSY.one('.feedback-ret').html("").hide();
            KISSY.one('#product-fb').show();
        });
    }
    function i() {
        var a = KISSY.one("#jm_del_confirm");
        a && a.remove()
    }
    function j() {
        h();

        var c = new b.Tabs("#jm_pop_tab", {
            triggerType: "click",
            switchTo: -1 
        });
        c.on("beforeSwitch", 
        function(a) {
            KISSY.one('#jm-tab-set') && KISSY.one('#jm-tab-set').hide();
            /*if (1 == a.toIndex) {
                //var b = JSON.parse(localStorage.jm_login || null);
               // if (!b || "true" != b.login) return window.jmLogin.login(),
                //!1;
                v.openQueryKuaidiFrame();
                return 0;
            }*/
        }),
        c.on("switch", function(a) {
            var b = a.currentIndex;
            if(KISSY.one('.jm-tab:eq('+b+')').hasClass('tab-active')){
                return;
            }
            else{
                KISSY.all('.jm-tab').removeClass('tab-active');
                KISSY.one('.jm-tab:eq('+b+')').addClass('tab-active');
            }
            if(b == 0){
                KISSY.use('jmPopOpenQuestion', function (a, b) {new b});
                KISSY.use('jmPopBase', function (a, b) {new b});
                KISSY.use('jmPopEdu', function (a, b) {new b});
                KISSY.use('jmPopExp', function (a, b) {new b});
                KISSY.use('jmPopPro', function (a, b) {new b});
                KISSY.use('jmPopCor', function (a, b) {new b});
                KISSY.use('jmPopSchPra', function (a, b) {new b});
                KISSY.use('jmPopSchClub', function (a, b) {new b});
                KISSY.use('jmPopSchAwards', function (a, b) {new b});
                KISSY.use('jmPopSkill', function (a, b) {new b});
                KISSY.use('jmPopCertificate', function (a, b) {new b});
                KISSY.use('jmPopTraining', function (a, b) {new b});
                KISSY.use('jmPopOtherInfo', function (a, b) {new b});
                KISSY.use('jmPopGetScript', function (a, b) {new b});
               // KISSY.use('jmPopOpenQuestion', function (a, b) {new b});
                
            }
            if(b == 1) {
                KISSY.use('jmPopEdu', function (a, b) {new b});
            }
            if(b == 2){
                KISSY.use('jmPopExp', function (a, b) {new b});
            }
            if(b == 3){
                KISSY.use('jmPopPro', function (a, b) {new b});
            }
            if(b == 4){
                KISSY.use('jmPopCor', function (a, b) {new b});
            }
            if(b == 5){
                KISSY.use('jmPopSchPra', function (a, b) {new b});
            }
            if(b == 6){
                KISSY.use('jmPopSchClub', function (a, b) {new b});
            }
            if(b == 7){
                KISSY.use('jmPopSchAwards', function (a, b) {new b});
            }
            if(b == 8){
                KISSY.use('jmPopSkill', function (a, b) {new b});
            }
            if(b == 9){
                KISSY.use('jmPopCertificate', function (a, b) {new b});
            }
            if(b == 10){
                KISSY.use('jmPopTraining', function (a, b) {new b});
            }
            if(b == 11){
                KISSY.use('jmPopOtherInfo', function (a, b) {new b});
            }
            
            if(b == 12){
                KISSY.use('jmPopGetScript', function (a, b) {new b});
            }
            
            if(b == 13){
                KISSY.one("#jm_pop_tab").removeClass("show_tools_Change");
                //localStorage.jmToolsNotify = "false";
            }
            //KISSY.one("body").width(800),
            //return ;
            //1 == b && ( !has_query_tracker_info && v.getShipStatus(!0), KISSY.one(".jm_shipList") ? KISSY.one(".jm_shipList").fire("trackChange") : "", localStorage.hasShowAddrNotify = !0, jm_tools.setPopupBadgeText(0),v.openQueryKuaidiFrame());
            has_query_tracker_info = true;
        }),
        KISSY.one("#jm_pop_tab").on("logout", 
        function() {
            c.switchTo(0)
        });
       
        var icebearId = jm_getQueryString("icebearId");
        if(icebearId){
            icebearId = parseInt(icebearId);
            if(icebearId >= 0 && icebearId <=11){
                console.log(icebearId);
            }
        }
        else{
            icebearId = 0;
        }
        c.switchTo(icebearId);
        if(icebearId == 0){
            KISSY.use('jmPopBase', function (a, b) {new b});
        }
        /*KISSY.later(function(){
            c.switchTo(id);
        });*/
    }
    function k(a, b, c) {
        var d = a.offset(),
        e = a.width(),
        f = a.height();
        return {
            left: d.left + (b ? b: 0),
            top: d.top + (c ? c: 0),
            right: d.left + e + (b ? b: 0),
            bottom: d.top + f + (c ? c: 0)
        }
    }
    function l(a) {
        a.id = "jm_reminder_tip";
        var b = KISSY.one("#" + a.id);
        b && b.remove();
        var c = KISSY.one(a.query);
        if (c) {
            var d = c;
            if (d) {
                var f = k(d, 8, -8),
                g = e.to_html(u, {
                    left: f.right,
                    top: f.top,
                    id: a.id,
                    text: a.text,
                    tagName: a.tagName || "div",
                    linkAddr: a.linkAddr || "",
                    datastat: a.datastat || ""
                });
                KISSY.one("body").append(g)
            }
        }
    }
    function m(a, b) {
        var c = /[^x00-xff]/gi,
        d = a.match(c) ? a.match(c).length: 0,
        e = a.length + d;
        return e > b ? m(a.substring(0, a.length - 1), b) : a
    }
    function n() {
        
    }
    function o() {
        var a = localStorage.jm_trackInterval || "1";
        KISSY.one("#jm_queryInterval_sel")[0].value = a,
        q = c.Select.decorate("#jm_queryInterval_sel", w),
        q.on("click", 
        function() {
            localStorage.jm_trackInterval = q.get("value")
        }),
        w.elCls = "jm_ship_sel",
        r = c.Select.decorate("#jm_ship_sel", w),
        w.elCls = "jm_trans_sel";
        if(localStorage.wltal_kuaigenzong)
        {
            var z = JSON.parse(localStorage.wltal_kuaigenzong);
            if(z && z.supportlist)
                for(var x in z.supportlist)
                {
                    KISSY.one("#jm_trans_sel").append("<option value=\"" +  z.supportlist[x].kdvalue + "\">" +  z.supportlist[x].kdname + "</option>");
                }
        }
        KISSY.one("#jm_trans_sel").append("<option value=\"qita\">其它</option>");
        KISSY.one("#jm_trans_sel").append("<option value=\"wuxuzhuanyun\">无需转运</option>");
        KISSY.one("#jm_trans_sel").append("<option value=\"null\" selected>请选择转运公司</option>");
        s = c.Select.decorate("#jm_trans_sel", w);
    }

    function a1(){
        var a = "";
        if ("null" != a && window.jm_jminer.template && window.jm_jminer.template.sidebar) {
            var b =  "object" == window.jm_jminer.template.shopInfo ? (window.jm_jminer.template.shopInfo[a] || {}) : (JSON.parse(window.jm_jminer.template.shopInfo)[a] || {}) ;
            var a = getMessageFromBackground({
                    operate: "getConfig",
                    data: ""
                },startRuncb);
        }
        function generateTemplateHtml(a, b, c) {
            b.website = getQueryString('domain'),
            KISSY.use("mu", 
            function(d, e) {
                c(e.to_html(a, b))
            })
        }
        function getQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2]); return null;
        }

        function getMessageFromBackground(a, b) {
                        
           !(typeof sogouExplorer == "object") && chrome.extension.sendMessage(a, 
            function(c) {
                return "" == c || void 0 == c ? void console.log("Get " + a.operate + "Info from background.js error") : void b(c)
            });
            (typeof sogouExplorer == "object") && sogouExplorer.extension.sendRequest( a, 
            function(c) {
                return "" == c || void 0 == c ? void console.log("Get " + a.operate + "Info from background.js error") : void b(c)
            });
            return true;
        }

        function startRuncb(a) {
            console.log("startRun get config call back..");
            
            window.jm_jminer.isTranslate = a.isTranslate,
            window.jm_jminer.isShowTips = a.isShowTips,
            window.jm_jminer.isShowPushNotify = a.isShowPushNotify,
            window.jm_jminer.isShowDownBar = a.isShowDownBar;
            b.isTranslate = "false" == window.jm_jminer.isTranslate ? !1: !0,
            b.isShowTips = "false" == window.jm_jminer.isShowTips ? !1: !0,
            b.isShowPushNotify = "false" == window.jm_jminer.isShowPushNotify ? !1: !0,
            b.isShowDownBar = "false" == window.jm_jminer.isShowDownBar ? !1: !0,
            generateTemplateHtml(window.jm_jminer.template.sidebar, b, 
            function(a) {
                KISSY.use("jmTools", 
                function(b, c) {
                    new c(a)
                })
            })
        }
    }


    function p() {
        j(),
        //n(),
        //o(),
        a1();
    }
    
    var q,
    r,
    s,
    t = '<div id="jm_del_confirm" style="right:{{right}}px;top:{{top}}px;" class="jm-clearfix"><div class="jm_btn_cancel jm-stat" data-stat="icon.ship.del_cancel">取消</div><div class="jm_btn_confirm jm-stat" data-stat="icon.ship.del_confirm" shipNum="{{shipNum}}">确定</div><div class="jm_del_text">亲，确定删除这条运单吗？</div></div>',
    u = '<div id="{{id}}" class="jm_font jm_tips jm_tips_option jm_triangle left" style="left:{{left}}px; top:{{top}}px;"><{{tagName}} target="_blank" href="{{linkAddr}}" data-stat="{{datastat}}" class="jm_tips_title shiplink jm-stat"><span class="jm_tips_center">{{text}}</span><i></i></{{tagName}}></div>';
    //initPackTrack();
    var w = {
        width: 125,
        prefixCls: "jm-",
        menuAlign: {
            offset: [0, 2]
        },
        menuCfg: {
            width: 125,
            align: {
                offset: [0, -1]
            },
            elStyle: {
                overflow: "auto",
                overflowX: "hidden"
            }
        }
    };
    return p
},
{
    requires: ["switchable", "menubutton", "button", "mu", "anim"]
}),
KISSY.add('jmPopBase', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'amazon'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getBaseinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code base data is success!');
                //console.log(data);
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var processCodeBaseData = function(data) {
        if(data.content){
            data.content.realname,KISSY.all('.mt_name').html(shuffle(data.content.realname)).val(shuffle(data.content.realname));
            data.content.english_name,KISSY.all('.mt_ywname').html(shuffle(data.content.english_name)).val(shuffle(data.content.english_name));
            data.content.birth_day,KISSY.all('.mt_birth').html(shuffle(data.content.birth_day)).val(shuffle(data.content.birth_day));
            data.content.birth_day,KISSY.all('.mt_biryear').val(shuffle(data.content.birth_day).split('-')[0]);
            data.content.birth_day,KISSY.all('.mt_birmonth').val(shuffle(data.content.birth_day).split('-')[1] || '');
            data.content.birth_day,KISSY.all('.mt_birday').val(shuffle(data.content.birth_day).split('-')[2] || '');
            if(data.content.birth_day || (data.content.birth_day == '',data.content.birth_day='--')){
                var html = '';
                html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_biryear" tip="tip3" ><option value="">请选择</option>';
                for (var j = 2000; j >=  1980; j--) {
                    html += '<option value="'+j+'" ' + (parseInt(shuffle(data.content.birth_day).split('-')[0]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                };
                html += '</select>年';
                KISSY.all('.mt_biryear_div').html(html);
                
                var html = '';
                html += '<select name="mt_birmonth" id="mt_birmonth" class="ed_name valid mt_birmonth " tip="tip3" ><option value="">请选择</option>';
                for (var j = 1; j < 13; j++) {
                    html += '<option value="'+j+'" ' + (parseInt(shuffle(data.content.birth_day).split('-')[1]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                };
                html += '</select>月';
                KISSY.all('.mt_birmonth_div').html(html);
                $('.mt_biryear_div .mt_endYear,.mt_birmonth_div .mt_birmonth').on('change',function(){
                    jm_tools.changeDays(this);
                });
                var html = '';
                html += '<select name="mt_birday" id="mt_birday" class="ed_name valid mt_birday" tip="tip3" ><option value="">请选择</option>';
                var days = jm_tools.getDays(parseInt(data.content.birth_day.split('-')[0]),parseInt(data.content.birth_day.split('-')[1])) || 31;
                for (var j = 1; j <  days; j++) {
                    html += '<option value="'+j+'" ' + (parseInt(shuffle(data.content.birth_day).split('-')[2]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                };
                html += '</select>日';
                KISSY.all('.mt_birday_div').html(html);
            }
            data.content.birthday,KISSY.all('.mt_biryear').html(shuffle(data.content.birthday).split('-')[0]).val(shuffle(data.content.birthday).split('-')[0]);
            data.content.birthday,KISSY.all('.mt_birmonth').html(shuffle(data.content.birthday).split('-')[1] || '').val(shuffle(data.content.birthday).split('-')[1] || '');
            data.content.birthday,KISSY.all('.mt_birday').html(shuffle(data.content.birthday).split('-')[2] || '').val(shuffle(data.content.birthday).split('-')[2] || '');
             if (data.content.birthday) {
                data.content.birthday,KISSY.all('.mt_birthdaydot').html(shuffle(data.content.birthday).split('-')[0]+"."+shuffle(data.content.birthday).split('-')[1]+"."+shuffle(data.content.birthday).split('-')[2]).val(shuffle(data.content.birthday).split('-')[2] || '');
            }else{
                data.content.birthday,KISSY.all('.mt_birthdaydot').html(shuffle(data.content.birthday)).val(shuffle(data.content.birthday));
            }
            if (data.content.sex != 0) {
                data.content.sex, KISSY.all('.mt_sex').html(parseInt(data.content.sex) == 1 ? '男' : parseInt(data.content.sex) == 2 ? '女' : '未知'), KISSY.one('.mr_year_se .fl:eq(' + (parseInt(data.content.sex) - 1) + ')').addClass('active').one('i').addClass("active");
            }else{
                 data.content.sex, KISSY.all('.mt_sex').html(shuffle(data.content.sex)).val('');
            }
            data.content.height,KISSY.all('.mt_height').html(shuffle(data.content.height)).val(shuffle(data.content.height));
            data.content.phone,KISSY.all('.mt_tel').html(shuffle(data.content.phone)).val(shuffle(data.content.phone));
            data.content.email_jianli,KISSY.all('.mt_email').html(shuffle(data.content.email_jianli)).val(shuffle(data.content.email_jianli));
            data.content.idcard,KISSY.all('.mt_id').html(shuffle(data.content.idcard)).val(shuffle(data.content.idcard));
            data.content.city,KISSY.all('.mt_add').html(shuffle(data.content.city)).val(shuffle(data.content.city));
            data.content.edu,KISSY.all('.mt_edu').html(shuffle(data.content.edu)).val(shuffle(data.content.edu));
             if(data.content.edu){
                var html = '';
                html += '<select id="mt_edu" name="highestEducation" class="ed_name valid mt_edu"><option value="大专" '+(data.content.edu == "大专" ? "selected=\"selected\"" : "")+'>大专</option><option value="本科" '+(data.content.edu == "本科" ? "selected=\"selected\"" : "")+'>本科</option><option value="硕士" '+(data.content.edu == "硕士" ? "selected=\"selected\"" : "")+'>硕士</option><option value="博士" '+(data.content.edu == "博士" ? "selected=\"selected\"" : "")+'>博士</option><option value="其他" '+(data.content.edu == "其他" ? "selected=\"selected\"" : "")+'>其他</option></select>';
                KISSY.all('.mt_edu_div').html(html);
            }
            data.content.qq_name,KISSY.all('.mt_qqname').html(shuffle(data.content.qq_name)).val(shuffle(data.content.qq_name));
            data.content.wx_name,KISSY.all('.mt_wxname').html(shuffle(data.content.wx_name)).val(shuffle(data.content.wx_name));
            data.content.sina_name,KISSY.all('.mt_wbname').html(shuffle(data.content.sina_name)).val(shuffle(data.content.sina_name));
            data.content.live_city,KISSY.all('.mt_livecity_pro').html(shuffle(data.content.live_city)).val(shuffle(data.content.live_city));
            data.content.live_city_city,KISSY.all('.mt_livecity_city').html(shuffle(data.content.live_city_city)).val(shuffle(data.content.live_city_city));
            data.content.live_address,KISSY.all('.mt_add').html(shuffle(data.content.live_address)).val(shuffle(data.content.live_address));
            data.content.hukou_city_city,KISSY.all('.mt_hukoucity_city').html(shuffle(data.content.hukou_city_city)).val(shuffle(data.content.hukou_city_city));
            data.content.hukou_city_now_city,KISSY.all('.mt_hukoucitynow_city').html(shuffle(data.content.hukou_city_now_city)).val(shuffle(data.content.hukou_city_now_city));
            data.content.expect_city_city,KISSY.all('.mt_expectcity_city').html(shuffle(data.content.expect_city_city)).val(shuffle(data.content.expect_city_city));
            data.content.profile,KISSY.all('.mt_profile').html(shuffle(data.content.profile)).val(shuffle(data.content.profile));
            data.content.birthday,KISSY.all('.mt_birth').html(shuffle(data.content.birthday)).val(shuffle(data.content.birthday));
            data.content.nativeplace_city,KISSY.all('.mt_native_city').html(shuffle(data.content.nativeplace_city)).val(shuffle(data.content.nativeplace_city));
            data.content.national,KISSY.all('.mt_national').html(shuffle(data.content.national)).val(shuffle(data.content.national));

            data.content.contact_address,KISSY.all('.mt_postadd').html(shuffle(data.content.contact_address)).val(shuffle(data.content.contact_address));
                  
            data.content.contact_name,KISSY.all('.mt_jjlxr').html(shuffle(data.content.contact_name)).val(shuffle(data.content.contact_name));
            data.content.contact_phone,KISSY.all('.mt_jjlxrtel').html(shuffle(data.content.contact_phone)).val(shuffle(data.content.contact_phone));
            data.content.edu_type,KISSY.all('.mt_edutype').html(shuffle(data.content.edu_type)).val(shuffle(data.content.edu_type));
            data.content.weight,KISSY.all('.mt_weight').html(shuffle(data.content.weight)).val(shuffle(data.content.weight));
            data.content.tel,KISSY.all('.mt_gudingtel').html(shuffle(data.content.tel)).val(shuffle(data.content.tel));
            data.content.idcardtype,KISSY.all('.mt_idtype').html(shuffle(data.content.idcardtype)).val(shuffle(data.content.idcardtype)); 
            data.content.nativeplace,KISSY.all('.mt_nativeplace').html(shuffle(data.content.nativeplace)).val(shuffle(data.content.nativeplace));
            data.content.nation,KISSY.all('.mt_nation').html(shuffle(data.content.nation)).val(shuffle(data.content.nation));
            data.content.maritalstatus,KISSY.all('.mt_maritalstatus').html(shuffle(data.content.maritalstatus)).val(shuffle(data.content.maritalstatus));
            data.content.politicalstatus,KISSY.all('.mt_polistatus').html(shuffle(data.content.politicalstatus)).val(shuffle(data.content.politicalstatus));
            data.content.zip,KISSY.all('.mt_zip').html(shuffle(data.content.zip)).val(shuffle(data.content.zip));
            data.content.graduate_time,KISSY.all('.mt_gradutetime').html(shuffle(data.content.graduate_time)).val(shuffle(data.content.graduate_time));
            data.content.hukou_city,KISSY.all('.mt_hukoucity').html(shuffle(data.content.hukou_city)).val(shuffle(data.content.hukou_city));
            data.content.hukou_city_now,KISSY.all('.mt_hukoucitynow').html(shuffle(data.content.hukou_city_now)).val(shuffle(data.content.hukou_city_now));
            data.content.expect_city,KISSY.all('.mt_expectcity').html(shuffle(data.content.expect_city)).val(shuffle(data.content.expect_city));
            data.content.fm_name,KISSY.all('.mt_fmname').html(shuffle(data.content.fm_name)).val(shuffle(data.content.fm_name));
            data.content.fm_relation,KISSY.all('.mt_fmrelation').html(shuffle(data.content.fm_relation)).val(shuffle(data.content.fm_relation));
            data.content.fm_phone,KISSY.all('.mt_fmphone').html(shuffle(data.content.fm_phone)).val(shuffle(data.content.fm_phone));
            data.content.fm_work,KISSY.all('.mt_fmwork').html(shuffle(data.content.fm_work)).val(shuffle(data.content.fm_work));
            data.content.fm_position,KISSY.all('.mt_fmposition').html(shuffle(data.content.fm_position)).val(shuffle(data.content.fm_position));
           
            KISSY.one('#base-list .infopl').show();
            if(jm_get_remote_js("quickWrite")){
                eval(jm_get_remote_js("quickWrite"));
            }
            
            dragInit();
            editInit();
        }else if(data.code == -1){
            //KISSY.one('.jm-tab:eq(5)').fire("click");
            //KISSY.one('.jm-tab:eq(0)').removeClass("click");
            window.jmLogin.logout();
        }
        
    };

    var editInit = function() {
        $("#base-list").removeClass("edit-status");
        $("#base-list .mt-edit").click(function(){
            $("#base-list").addClass("edit-status");
            $("#base-list .infopl").removeAttr("style");
            $("#base-list .error").parent().parent().hide();
            $(".mr_year_se span").click(function(){
                $(".mr_year_se span,.mr_year_se i").removeClass("active");
                $(this).addClass("active").find("i").addClass("active")
            });

            $(".mt_email,.mt_name,.mt_tel,.mt_edu").blur(function() {
                if($(this).val() == ""){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
            $(".mt_biryear,.mt_birmonth,.mt_birday").blur(function() {
                if($(this).val() == ""){
                    $(this).parent().parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().parent().next('tr').hide();
                }
            });
            $(".mr_year_se .fl").blur(function() {
                if($(".mr_year_se .fl").eq(0).hasClass("active") || $(".mr_year_se .fl").eq(1).hasClass("active")){
                    $(this).parent().parent().parent().next('tr').hide();
                }else{
                    $(this).parent().parent().parent().next('tr').show();
                }
            });
        });

        $("#base-list .mr_cancel").click(function(){
            $("#base-list").removeClass("edit-status");
        });

        $("#base-list input[type=submit]").unbind("click").bind("click",function(e){
            var ss = {
                    "mr_name":KISSY.one('#base-list .infopl-edit .mt_name').val(),
                    "mt_ywname":KISSY.one('#base-list .infopl-edit .mt_ywname').val(),
                    "mt_biryear":KISSY.one('#base-list .infopl-edit .mt_biryear').val(),
                    "mt_birmonth":KISSY.one('#base-list .infopl-edit .mt_birmonth').val(),
                    "mt_birday":KISSY.one('#base-list .infopl-edit .mt_birday').val(),
                    "sex":KISSY.one('.mr_year_se .fl.active').text(),
                    "mr_height":KISSY.one('#base-list .infopl-edit .mt_height').val(),
                    "phone":KISSY.one('#base-list .infopl-edit .mt_tel').val(),
                    "email":KISSY.one('#base-list .infopl-edit .mt_email').val(),
                    "mt_id":KISSY.one('#base-list .infopl-edit .mt_id').val(),
                    "liveCity":KISSY.one('#base-list .infopl-edit .mt_add').val(),
                    "highestEducation":KISSY.one('#base-list .infopl-edit .mt_edu').val(),
                    "mt_postadd":KISSY.one('#base-list .infopl-edit .mt_postadd').val(),
                    "mt_jjlxr":KISSY.one('#base-list .infopl-edit .mt_jjlxr').val(),
                    "mt_jjlxrtel":KISSY.one('#base-list .infopl-edit .mt_jjlxrtel').val(),
                    "mt_edutype":KISSY.one('#base-list .infopl-edit .mt_edutype').val(),
                    "mt_weight":KISSY.one('#base-list .infopl-edit .mt_weight').val(),
                    "mt_weight":KISSY.one('#base-list .infopl-edit .mt_weight').val(),
                    "mt_gudingtel":KISSY.one('#base-list .infopl-edit .mt_gudingtel').val(),
                    "mt_idtype":KISSY.one('#base-list .infopl-edit .mt_idtype').val(),
                    "mt_nativeplace":KISSY.one('#base-list .infopl-edit .mt_nativeplace').val(),
                    "mt_nation":KISSY.one('#base-list .infopl-edit .mt_nation').val(),
                    "mt_maritalstatus":KISSY.one('#base-list .infopl-edit .mt_maritalstatus').val(),
                    "mt_polistatus":KISSY.one('#base-list .infopl-edit .mt_polistatus').val(),
                    "mt_zip":KISSY.one('#base-list .infopl-edit .mt_zip').val(),
                    "mt_gradutetime":KISSY.one('#base-list .infopl-edit .mt_gradutetime').val(),
                    "mt_hukoucity":KISSY.one('#base-list .infopl-edit .mt_hukoucity').val(),
                    "mt_hukoucitynow":KISSY.one('#base-list .infopl-edit .mt_hukoucitynow').val(),
                    "mt_expectcity":KISSY.one('#base-list .infopl-edit .mt_expectcity').val(),
                    "mt_fmname":KISSY.one('#base-list .infopl-edit .mt_fmname').val(),
                    "mt_fmrelation":KISSY.one('#base-list .infopl-edit .mt_fmrelation').val(),
                    "mt_fmphone":KISSY.one('#base-list .infopl-edit .mt_fmphone').val(),
                    "mt_fmname":KISSY.one('#base-list .infopl-edit .mt_fmname').val(),
                    "mt_fmposition":KISSY.one('#base-list .infopl-edit .mt_fmposition').val()

                };
            if(!ss.mr_name){
                KISSY.one('#base-list .infopl-edit .mt_name').parent().parent().next('tr').show();
                return false;
            }
            if(!ss.mt_biryear){
                KISSY.one('#base-list .infopl-edit .mt_biryear').parent().parent().parent().next('tr').show();
                return false;
            }
            if(!ss.mt_birmonth){
                KISSY.one('#base-list .infopl-edit .mt_birmonth').parent().parent().parent().next('tr').show();
                return false;
            }
            if(!ss.mt_birday){
                KISSY.one('#base-list .infopl-edit .mt_birday').parent().parent().parent().next('tr').show();
                return false;
            }
            if(!ss.sex){
                KISSY.one('#base-list .infopl-edit .sex').parent().parent().parent().next('tr').show();
                return false;
            }
            if(!ss.phone){
                KISSY.one('#base-list .infopl-edit .mt_tel').parent().parent().next('tr').show();
                return false;
            }
            if(!ss.email){
                KISSY.one('#base-list .infopl-edit .mt_email').parent().parent().next('tr').show();
                return false;
            }
            if(!ss.highestEducation){
                KISSY.one('#base-list .infopl-edit .mt_edu').parent().parent().next('tr').show();
                return false;
            }
            if(!$('.jm-mask').html()){
                $('#base-list').append('<div class="jm-mask"></div>');
                $("#jm_popup_loading").show();
            }else{
                $(".jm-mask,#jm_popup_loading").show();
            }

            new IO({
                url: "http://icebear.me/Resume/basicPost?access=1",
                type: 'GET',
                data: ss,
                dataType: 'json',
                success: function(data) {
                    console.log('request code base data is success!' + data);
                    setTimeout(function(){
                        $("#base-list").removeClass("edit-status");
                        KISSY.use('jmPopBase', function (a, b) {new b});
                        $(".jm-mask,#jm_popup_loading").hide();
                    },1000);
                    
                },
                error: function() {
                    console.log('request code base data is error!' + data);
                    $(".jm-mask,#jm_popup_loading").hide();
                    $('<span for="mr_name" generated="true" class="error">修改失败，请稍后重试</span>').insertBefore($("#base-list .mr_save"));
                }
            });
            /*KISSY.io.post("http://icebear.me/Resume/basicPost", JSON.stringify(ss), function(e) {
                console.log('updateuser e:' + e);
            });*/
            e.stopPropagation();
        });
    }
    
    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str ? _str : '';
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});


KISSY.add('jmPopEdu', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code education data is success!');
                //console.log(data);
                //console.log(data[edu_list]);
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var processCodeBaseData = function(data) {
        var html = '';
        if(data.content && data.content.edu_list[0]){
            var eList = data.content.edu_list;
            var ordering = 0;
            for(var i = eList.length-1; i >= 0 ; i--){
                var startYear = eList[i].startYear ? eList[i].startYear.split('-') :["",""];
                var endYear = eList[i].endYear ? eList[i].endYear.split('-') :["",""];
                var startYearDot = eList[i].startYear ? eList[i].startYear.split('-')[0]+'.'+eList[i].startYear.split('-')[1] :"";
                var endYearDot = eList[i].endYear ? eList[i].endYear.split('-')[0] +'.'+eList[i].endYear.split('-')[1]:"";
                 //html += '<div class="infopledu">  <div class="mt-title"><div class="metil mt10">教育经历' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div>  <div class="infopl" data-id="' + eList[i].id + '"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody><tr> <td width="76" class="col999">学校</td> <td class="mt_base" id="mt_schoolName">' + eList[i].schoolName + '</td> </tr>  <tr> <td width="76" class="col999">学历</td> <td class="mt_base" id="mt_education">' + eList[i].education + '</td> </tr>  <tr> <td width="76" class="col999">学位</td> <td class="mt_base" id="mt_degree">' + eList[i].degree + '</td> </tr>  <tr> <td width="76" class="col999">院系</td> <td class="mt_base" id="mt_academy">' + eList[i].academy + '</td> </tr> <tr> <td width="76" class="col999">专业</td> <td class="mt_base" id="mt_professional">' + eList[i].professional + '</td> </tr><tr> <td width="76" class="col999">入学时间</td> <td class="mt_base" id="mt_startYear">' + eList[i].startYear + '</td> </tr><tr> <td width="76" class="col999">入学时间</td> <td class="mt_base" id="mt_startYearDashes">' + eList[i].startYear.split('-')[0] +'-'+eList[i].startYear.split('-')[1] + '</td> </tr><tr> <td width="76" class="col999">毕业时间</td> <td class="mt_base" id="mt_endYear">' + eList[i].endYear+ '</td> </tr><tr> <td width="76" class="col999">毕业时间</td> <td class="mt_base" id="mt_endYearDashes">' + eList[i].endYear.split('-')[0]+'-'+eList[i].endYear.split('-')[1]+ '</td> </tr><tr> <td width="76" class="col999">入学时间</td> <td class="mt_base" id="mt_startYeardot">' + eList[i].startYear.split('-')[0]+'.'+eList[i].startYear.split('-')[1] + '</td> </tr><tr> <td width="76" class="col999">毕业时间</td> <td class="mt_base" id="mt_endYeardot">' + eList[i].endYear.split('-')[0]+'.'+ eList[i].endYear.split('-')[1] + '</td> </tr><tr> <td width="76" class="col999">主修课程</td> <td class="mt_base" id="mt_major">' + eList[i].major + '</td> </tr> <tr> <td width="76" class="col999">GPA(4分制)</td> <td class="mt_base" id="mt_gpascore">' + eList[i].gpa_score + '</td> </tr><tr> <td width="76" class="col999">所在专业排名</td> <td class="mt_base" id="mt_professionalranking">' + eList[i].professional_ranking + '</td> </tr><tr> <td width="76" class="col999">班级排名</td> <td class="mt_base" id="mt_classranking">' + eList[i].class_ranking + '</td> </tr><tr> <td width="76" class="col999">专业描述</td> <td class="mt_base" id="mt_professionaldes">' + eList[i].professional_describe + '</td> </tr><tr> <td width="76" class="col999">导师姓名</td> <td class="mt_base" id="mt_tutorname">' + eList[i].tutor_name + '</td> </tr><tr> <td width="76" class="col999">导师联系方式</td> <td class="mt_base" id="mt_tutorphone">' + eList[i].tutor_phone + '</td> </tr></tbody> </table> </div>';
                html += '<div class="infopledu"><div class="mt-title"><div class="metil mt10">教育经历' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl" data-id="' + eList[i].id + '"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td width="76" class="col999">学校</td><td class="mt_base mt_schoolName">' + eList[i].schoolName + '</td></tr><tr><td width="76" class="col999">学历</td><td class="mt_base mt_education">' + eList[i].education + '</td></tr><tr><td width="76" class="col999">学位</td><td class="mt_base mt_degree">' + eList[i].degree + '</td></tr><tr><td width="76" class="col999">院系</td><td class="mt_base mt_academy">' + eList[i].academy + '</td></tr><tr><td width="76" class="col999">专业</td><td class="mt_base mt_professional">' + eList[i].professional + '</td></tr><tr><td width="76" class="col999">入学时间</td><td class="mt_base mt_startYear">' + eList[i].startYear + '</td></tr><tr><td width="76" class="col999">入学时间-年</td><td class="mt_base mt_startYearY">' + startYear[0] + '</td></tr><tr><td width="76" class="col999">入学时间-月</td><td class="mt_base mt_startYearM">' + startYear[1] + '</td></tr><tr><td width="76" class="col999">毕业时间</td><td class="mt_base mt_endYear">' + eList[i].endYear+ '</td></tr><tr><td width="76" class="col999">毕业时间-年</td><td class="mt_base mt_endYearY">' + endYear[0]+ '</td></tr><tr><td width="76" class="col999">毕业时间-月</td><td class="mt_base mt_endYearM">' + endYear[1]+ '</td></tr><tr><td width="76" class="col999">入学时间</td><td class="mt_base mt_startYeardot">' + startYearDot + '</td></tr><tr><td width="76" class="col999">毕业时间</td><td class="mt_base mt_endYeardot">' + endYearDot + '</td></tr><tr><td width="76" class="col999">主修课程</td><td class="mt_base mt_major">' + eList[i].major + '</td></tr><tr><td width="76" class="col999">GPA(4分制)</td><td class="mt_base mt_gpascore">' + eList[i].gpa_score + '</td></tr><tr><td width="76" class="col999">所在专业排名</td><td class="mt_base mt_professionalranking">' + eList[i].professional_ranking + '</td></tr><tr><td width="76" class="col999">班级排名</td><td class="mt_base mt_classranking">' + eList[i].class_ranking + '</td></tr><tr><td width="76" class="col999">专业描述</td><td class="mt_base mt_professionaldes">' + eList[i].professional_describe + '</td></tr><tr><td width="76" class="col999">导师姓名</td><td class="mt_base mt_tutorname">' + eList[i].tutor_name + '</td></tr><tr><td width="76" class="col999">导师联系方式</td><td class="mt_base mt_tutorphone">' + eList[i].tutor_phone + '</td></tr></tbody></table></div>';
                ordering++;
                //编辑edit
                // html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>  <tr> <td width="76" class="col999">学历</td><td><select id="mt_education" name="mt_education" class="ed_name mt_education"><option value="大专" ' + ((eList[i].education) == "大专" ? "selected=\"selected\"" : "") + '>大专</option><option value="本科" ' + ((eList[i].education) == "本科" ? "selected=\"selected\"" : "") + '>本科</option><option value="硕士" ' + ((eList[i].education) == "硕士" ? "selected=\"selected\"" : "") + '>硕士</option><option value="博士" ' + ((eList[i].education) == "博士" ? "selected=\"selected\"" : "") + '>博士</option><option value="其他" ' + ((eList[i].education) == "其他" ? "selected=\"selected\"" : "") + '>其他</option></select></td>  </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="' + eList[i].schoolName + '" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_eduyear_div">';
                // html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_eduyear" tip="tip3" ><option value="">请选择</option>';
                // for (var j = 2017; j >= 2000; j--) {
                //     html += '<option value="'+j+'" ' + (parseInt(eList[i].endDate) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                // };
                // html += '</select>年</div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">所学专业</td> <td><input type="text" id="mt_professional" name="mt_professional" class="ed_name mt_professional" autocomplete="off" value="' + eList[i].professional + '" placeholder="请输入所学专业"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">奖惩情况</td> <td> <input type="text" id="mt_award" name="mt_award" class="ed_name mt_award" autocomplete="off" value="' + (eList[i].reward_punish ? eList[i].reward_punish : '') + '" placeholder="请输入奖励"></td> </tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            //html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            //add 添加ibutton
            //html += '<div class="mt-title"> <div class="metil mt10">教育经历</div>  </div> <div class="infopl">  <div class="mr_empty_add dn mt-edit-add" style="display: block;"> <i></i><span>添加教育经历</span> </div> </div>';
            html += '<div class="infopledu"><div class="mt-title"><div class="metil mt10">教育经历</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl" data-id=""><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td width="76" class="col999">学校</td><td class="mt_base mt_schoolName"></td></tr><tr><td width="76" class="col999">学历</td><td class="mt_base mt_education"></td></tr><tr><td width="76" class="col999">学位</td><td class="mt_base mt_degree"></td></tr><tr><td width="76" class="col999">院系</td><td class="mt_base mt_academy"></td></tr><tr><td width="76" class="col999">专业</td><td class="mt_base mt_professional"></td></tr><tr><td width="76" class="col999">入学时间</td><td class="mt_base mt_startYear"></td></tr><tr><td width="76" class="col999">毕业时间</td><td class="mt_base mt_endYear"></td></tr>  <tr>    <td width="76" class="col999">主修课程</td><td class="mt_base mt_major"></td></tr><tr><td width="76" class="col999">GPA(4分制)</td><td class="mt_base mt_gpascore"></td></tr><tr><td width="76" class="col999">所在专业排名</td><td class="mt_base mt_professionalranking"></td></tr><tr><td width="76" class="col999">班级排名</td><td class="mt_base mt_classranking"></td></tr><tr><td width="76" class="col999">专业描述</td><td class="mt_base mt_professionaldes"></td></tr><tr><td width="76" class="col999">导师姓名</td><td class="mt_base mt_tutorname"></td></tr><tr><td width="76" class="col999">导师联系方式</td><td class="mt_base mt_tutorphone"></td></tr></tbody></table></div>';
        }
        $('#edu-list').html(html);
        dragInit();
        editInit();
    };

    var editInit = function() {
        $("#edu-list > div").removeClass("edit-status");
        $("#edu-list .mt-edit").click(function(){
            $("#edu-list .mr_cancel").click();
            $(this).parent().parent().addClass("edit-status");
            $("#edu-list .error").parent().parent().hide();

            $(".mt_education,.schoolName,.mt_endYear,.mt_professional").blur(function() {
                if($(this).val() == ""){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
        });

        $("#edu-list .mr_cancel").click(function(){
            $(this).parent().parent().parent().removeClass("edit-status");
        });

        $("#edu-list input[type=submit]").unbind("click").bind("click",function(e){
            eduSubmit(this,'#edu-list .infopl-edit');
        });
    
        $("#edu-list .mr_del").unbind("click").bind("click",function(e){
            var eduid = $(this).parent().parent().attr("data-id");
            if(!$('.jm-mask').html()){
                $('#edu-list').append('<div class="jm-mask"></div>');
                $("#jm_popup_loading").show();
            }else{
                $(".jm-mask,#jm_popup_loading").show();
            }
            var ss = {
                    "id":eduid
                };

            new IO({
                url: "http://icebear.me/Resume/delEdu?access=1",
                type: 'GET',
                data: ss,
                dataType: 'json',
                success: function(data) {
                    console.log('request code base data is success!' + data);
                    setTimeout(function(){
                        KISSY.use('jmPopEdu', function (a, b) {new b});
                        $(".jm-mask,#jm_popup_loading").hide();
                    },1000);
                    
                },
                error: function() {
                    console.log('request code base data is error!' + data);
                    $(".jm-mask,#jm_popup_loading").hide();
                    $('<span for="mr_name" generated="true" class="error">修改失败，请稍后重试</span>').insertBefore($("#edu-list .mr_save"));
                }
            });
            /*KISSY.io.post("http://icebear.me/Resume/basicPost", JSON.stringify(ss), function(e) {
                console.log('updateuser e:' + e);
            });*/
            e.stopPropagation();
        });
        
        $("#edu-list .mt-edit-add").unbind("click").bind("click",function(e){
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">学历</td> <td><select id="mt_education" name="mt_education" class="ed_name mt_education"><option value="大专" >大专</option><option value="本科" >本科</option><option value="硕士" >硕士</option><option value="博士" >博士</option><option value="其他" >其他</option></select></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_eduyear_div">';
            html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_eduyear" tip="tip3" ><option value="">请选择</option>';
                 for (var j = 2017; j >= 2000; j--) {
                    html += '<option value="'+j+'" >&nbsp;'+j+'</option>';
                };
            html +=' </div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">所学专业</td> <td><input type="text" id="mt_professional" name="mt_professional" class="ed_name mt_professional" autocomplete="off" value="" placeholder="请输入学历"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">奖惩情况</td> <td> <input type="text" id="mt_award" name="mt_award" class="ed_name mt_award" autocomplete="off" value="" placeholder="请输入奖励"></td> </tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div>';
            $('#edu-list').append(html);
            $("#edu-list .mt-edit-add").hide();
            $(".mt_education,.schoolName,.mt_endYear,.mt_professional").blur(function() {
                if($(this).val() == ""){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
            $("#edu-list .infopl-add .mr_save").unbind("click").bind("click",function(e){
                eduSubmit(this, '#edu-list .infopl-add');
            });
            $("#edu-list .infopl-add .mr_cancel").click(function(){
                $(".infopl-add").remove();
                $("#edu-list .mt-edit-add").show();
            });

        });

    }

    var eduSubmit = function(that, className){
        var eduid = $(that).parent().parent().attr("data-id") || '';
        if(eduid) className += '[data-id=' + eduid + ']';
        var education = KISSY.one(className + ' .mt_education').val();
        if(!education){
            KISSY.one(className + ' .mt_education').parent().parent().next('tr').show();
            return;
        }
        var schoolName = KISSY.one(className + ' .schoolName').val();
        if(!schoolName){
            KISSY.one(className + ' .schoolName').parent().parent().next('tr').show();
            return;
        }
        var endYear = KISSY.one(className + ' .mt_endYear').val();
        if(!endYear){
            KISSY.one(className + ' .mt_endYear').parent().parent().parent().next('tr').show();
            return;
        }
        var professional = KISSY.one(className + ' .mt_professional').val();
        if(!professional){
            KISSY.one(className + ' .mt_professional').parent().parent().next('tr').show();
            return;
        }

        /*$("." + className + " .mt_education, ." + className + " .schoolName,." + className + " .mt_endYear,." + className + " .mt_professional").click();
        if($(that).parent().parent().find('.error').html() && $(that).parent().parent().find('.error').css("display") != "none" ){
            return;   
        }else{*/
            
            if(!$('.jm-mask').html()){
                $('#edu-list').append('<div class="jm-mask"></div>');
                $("#jm_popup_loading").show();
            }else{
                $(".jm-mask,#jm_popup_loading").show();
            }
            var ss = {
                    "education":education,
                    "schoolName":schoolName,
                    "endYear":endYear,
                    "professional":professional,
                    "reward_punish":KISSY.one(className + ' .mt_award').val(),
                    "eduid":eduid
                };

            new IO({
                url: "http://icebear.me/Resume/educationExperience?access=1",
                type: 'GET',
                data: ss,
                dataType: 'json',
                success: function(data) {
                    console.log('request code base data is success!' + data);
                    setTimeout(function(){
                        KISSY.use('jmPopEdu', function (a, b) {new b});
                        $(".jm-mask,#jm_popup_loading").hide();
                    },1000);
                    
                },
                error: function() {
                    console.log('request code base data is error!' + data);
                    $(".jm-mask,#jm_popup_loading").hide();
                    $('<span for="mr_name" generated="true" class="error">修改失败，请稍后重试</span>').insertBefore($("#edu-list .mr_save"));
                }
            });
        //}
    }

    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});

KISSY.add('jmPopExp', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code job data is success!');
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var processCodeBaseData = function(data) {
        var html = '';
        //console.log(data.content.exp_list);
        if(data.content && data.content.exp_list[0]){
            var eList = data.content.exp_list;
            var ordering = 0;
            //for(var i = eList.length-1; i >= 0 ; i--){ //倒叙
            for(var i = 0; i < eList.length ; i++){
                var mt_startDatedot = eList[i].startDate ? eList[i].startDate.split('-')[0]+'.'+ eList[i].startDate.split('-')[1] :"";
                var mt_endDatedot = eList[i].endDate ? eList[i].endDate.split('-')[0]+'.'+ eList[i].endDate.split('-')[1] :"";
               // html += '<div class="infopledu"> <div class="mt-title"> <div class="metil mt10">工作经历' + (ordering+1) + '</div> <div class="mt-edit"><i></i>编辑</div> </div> <div class="infopl" data-id="' + eList[i].id + '"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">公司</td> <td class="mt_base" id="mt_companyName">' + eList[i].companyName + '</td> </tr> <tr> <td width="76" class="col999">职位</td> <td class="mt_base" id="mt_positionName">' + eList[i].positionName + '</td> </tr> <tr> <td width="76" class="col999">在职时间</td> <td class="mt_base" id="mt_comtime">' + eList[i].startDate + '-' + eList[i].endDate + '</td> </tr> <tr> <td width="76" class="col999">工作内容</td></tr><tr> <td class="mt_base" id="mt_workContent"> <pre rows="8" cols="40">' + eList[i].workContent + '</pre> </td> </tr> </tbody> </table> </div>';
                if ( eList[i].work_cat  == '全职') {
                    html += '<div class="infofulltimejobs"><div class="mt-title"><div class="metil mt10">工作经历-全职' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id="' + eList[i].id + '"><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">工作单位</td><td class="mt_base mt_companyName">' + eList[i].companyName + '</td></tr><tr><td width="76"class="col999">工作性质</td><td class="mt_base mt_workcat">' + eList[i].work_cat + '</td></tr><tr><td width="76"class="col999">单位性质</td><td class="mt_base mt_companyproperty">' + eList[i].company_property + '</td></tr><tr><td width="76"class="col999">公司规模</td><td class="mt_base mt_companySize">' + eList[i].company_size + '</td></tr><tr><td width="76"class="col999">行业类别</td><td class="mt_base mt_companyCat">' + eList[i].company_cat + '</td></tr><tr><td width="76"class="col999">工作职位</td><td class="mt_base mt_positionName">' + eList[i].positionName + '</td></tr><tr><td width="76"class="col999">所在部门</td><td class="mt_base mt_department">' + eList[i].department + '</td></tr><tr><td width="76"class="col999">工作城市</td><td class="mt_base mt_workCity">' + eList[i].work_city + '</td></tr><tr><td width="76"class="col999">职责描述</td></tr><tr><td class="mt_base mt_workDes"><pre rows="8"cols="40" class="workDes">' + eList[i].workContent + '</pre></td></tr><tr><td width="76"class="col999">职位月薪(税前)</td><td class="mt_base mt_salaryMonth">' + eList[i].salary_month + '</td></tr><tr><td width="76"class="col999">在职时间</td><td class="mt_base mt_startDate">' + eList[i].startDate + '</td></tr><tr><td width="76"class="col999">在职时间</td><td class="mt_base mt_startDatedot">' + mt_startDatedot + '</td></tr><tr><td width="76"class="col999">离职时间</td><td class="mt_base mt_endDate">' + eList[i].endDate + '</td></tr><tr><td width="76"class="col999">离职时间</td><td class="mt_base mt_endDatedot">' + mt_endDatedot + '</td></tr><tr><td width="76"class="col999">工作内容</td></tr><tr><td class="mt_base mt_workContent"><pre rows="8"cols="40" class="workContent">' + eList[i].jobContent + '</pre></td></tr><tr><td width="76"class="col999">离职原因</td><td class="mt_base mt_reasons">' + eList[i].reasons + '</td></tr><tr><td width="76"class="col999">证明人姓名</td><td class="mt_base mt_reterenceName">' + eList[i].reterence_name + '</td></tr><tr><td width="76"class="col999">证明人关系</td><td class="mt_base mt_reterenceRelation">' + eList[i].reterence_relation + '</td></tr><tr><td width="76"class="col999">证明人单位</td><td class="mt_base mt_reterenceCompany">' + eList[i].reterence_company + '</td></tr><tr><td width="76"class="col999">证明人职位</td><td class="mt_base mt_reterencePosition">' + eList[i].reterence_position + '</td></tr><tr><td width="76"class="col999">证明人联系方式</td><td class="mt_base mt_reterence_phone">' + eList[i].reterence_phone + '</td></tr><tr><td width="76"class="col999">工作经历</td></tr><tr><td class="mt_base"><pre rows="8"cols="40"class="mt_workList">'+'公司名：'+eList[i].companyName +'开始时间：'+eList[i].startDate+'结束时间：'+eList[i].endDate+'职位：'+eList[i].positionName+'所在部门：'+eList[i].department+'工作内容：'+ eList[i].workContent + '</pre></td></tr></tbody></table></div></div>';
                }else{
                   html += '<div class="infoparttimejobs"><div class="mt-title"><div class="metil mt10">工作经历-实习' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id="' + eList[i].id + '"><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">工作单位</td><td class="mt_base mt_companyName">' + eList[i].companyName + '</td></tr><tr><td width="76"class="col999">工作性质</td><td class="mt_base mt_workcat">' + eList[i].work_cat + '</td></tr><tr><td width="76"class="col999">单位性质</td><td class="mt_base mt_companyproperty">' + eList[i].company_property + '</td></tr><tr><td width="76"class="col999">公司规模</td><td class="mt_base mt_companySize">' + eList[i].company_size + '</td></tr><tr><td width="76"class="col999">行业类别</td><td class="mt_base mt_companyCat">' + eList[i].company_cat + '</td></tr><tr><td width="76"class="col999">工作职位</td><td class="mt_base mt_positionName">' + eList[i].positionName + '</td></tr><tr><td width="76"class="col999">所在部门</td><td class="mt_base mt_department">' + eList[i].department + '</td></tr><tr><td width="76"class="col999">工作城市</td><td class="mt_base mt_workCity">' + eList[i].work_city + '</td></tr><tr><td width="76"class="col999">职责描述</td></tr><tr><td class="mt_base mt_workDes"><pre rows="8"cols="40" class="workDes">' + eList[i].workContent + '</pre></td></tr><tr><td width="76"class="col999">职位月薪(税前)</td><td class="mt_base mt_salaryMonth">' + eList[i].salary_month + '</td></tr><tr><td width="76"class="col999">在职时间</td><td class="mt_base mt_startDate">' + eList[i].startDate + '</td></tr><tr><td width="76"class="col999">在职时间</td><td class="mt_base mt_startDatedot">' + mt_startDatedot + '</td></tr><tr><td width="76"class="col999">离职时间</td><td class="mt_base mt_endDate">' + eList[i].endDate + '</td></tr><tr><td width="76"class="col999">离职时间</td><td class="mt_base mt_endDatedot">' + mt_endDatedot + '</td></tr><tr><td width="76"class="col999">工作内容</td></tr><tr><td class="mt_base mt_workContent"><pre rows="8"cols="40" class="workContent">' + eList[i].jobContent + '</pre></td></tr><tr><td width="76"class="col999">离职原因</td><td class="mt_base mt_reasons">' + eList[i].reasons + '</td></tr><tr><td width="76"class="col999">证明人姓名</td><td class="mt_base mt_reterenceName">' + eList[i].reterence_name + '</td></tr><tr><td width="76"class="col999">证明人关系</td><td class="mt_base mt_reterenceRelation">' + eList[i].reterence_relation + '</td></tr><tr><td width="76"class="col999">证明人单位</td><td class="mt_base mt_reterenceCompany">' + eList[i].reterence_company + '</td></tr><tr><td width="76"class="col999">证明人职位</td><td class="mt_base mt_reterencePosition">' + eList[i].reterence_position + '</td></tr><tr><td width="76"class="col999">证明人联系方式</td><td class="mt_base mt_reterence_phone">' + eList[i].reterence_phone + '</td></tr><tr><td width="76"class="col999">工作经历</td></tr><tr><td class="mt_base"><pre rows="8"cols="40"class="mt_workList">'+'公司名：'+eList[i].companyName +'开始时间：'+eList[i].startDate+'结束时间：'+eList[i].endDate+'职位：'+eList[i].positionName+'所在部门：'+eList[i].department+'工作内容：'+ eList[i].workContent + '</pre></td></tr></tbody></table></div></div>';
                }
                ordering++;
                // html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">公司</td> <td><input type="text" id="mt_companyName" name="mt_companyName" class="ed_name mt_companyName" autocomplete="off" value="' + eList[i].companyName + '" placeholder="请输入公司"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">职位</td> <td><input type="text" id="mt_positionName" name="mt_positionName" class="ed_name valid mt_positionName" autocomplete="off" value="' + eList[i].positionName + '" placeholder="请输入职位"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">在职时间</td> <td>';
                // var html1 = '<div class="mt_eduyear_div">';
                // html1 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_biryear mt_startDate_year" tip="tip3" ><option value="">请选择</option>';
                // for (var j = new Date().getFullYear(); j >=  2000; j--) {
                //     html1 += '<option value="'+j+'" ' + (parseInt(eList[i].startDate.split(".")[0]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                // };
                // html1 += '</select>年</div>';
                
                // html += html1;

                // var html2 = '<div class="mt_edumonth_div">';
                // html2 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_startDate_month mt_edumonth" tip="tip3" ><option value="">请选择</option>';
                // for (var j = 1; j <  13; j++) {
                //     html2 += '<option value="'+j+'" ' + ( eList[i].startDate.split(".")[1] ? parseInt(eList[i].startDate.split(".")[1]) == j ? "selected=\"selected\"" : "" : "" )  + '>&nbsp;'+j+'</option>';
                // };
                // html2 += '</select>月</div>';

                // html += html2 + '</td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr>   <tr> <td width="76" class="col999">至</td> <td>';


                // var html1 = '<div class="mt_eduyear_div">';
                // html1 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_eduyear mt_endDate_year" tip="tip3" ><option value="">请选择</option>';
                // for (var j = new Date().getFullYear(); j >=  2000; j--) {
                //     html1 += '<option value="'+j+'" ' + (parseInt(eList[i].endDate.split(".")[0]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                // };
                // html1 += '</select>年</div>';
                
                // html += html1;

                // var html2 = '<div class="mt_edumonth_div">';
                // html2 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_endDate_month mt_edumonth" tip="tip3" ><option value="">请选择</option>';
                // for (var j = 1; j <  13; j++) {
                //     html2 += '<option value="'+j+'" ' + ( eList[i].endDate.split(".")[1] ? parseInt(eList[i].endDate.split(".")[1]) == j ? "selected=\"selected\"" : "" : "" ) + '>&nbsp;'+j+'</option>';
                // };
                // html2 += '</select>月</div>';

               // html += html2 + '</td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">工作内容</td> <td> <textarea contenteditable="true" id="mt_workContent" name="mt_workContent" class="ed_name mt_workContent" >' + (eList[i].workContent ? eList[i].workContent : '') + '</textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
        //  html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="infoparttimejobs infofulltimejobs"><div class="mt-title"><div class="metil mt10">工作经历</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id=""><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">工作单位</td><td class="mt_base mt_companyName"></td></tr><tr><td width="76"class="col999">工作性质</td><td class="mt_base mt_workcat"></td></tr><tr><td width="76"class="col999">单位性质</td><td class="mt_base mt_companyproperty"></td></tr><tr><td width="76"class="col999">公司规模</td><td class="mt_base mt_companySize"></td></tr><tr><td width="76"class="col999">行业类别</td><td class="mt_base mt_companyCat"></td></tr><tr><td width="76"class="col999">工作职位</td><td class="mt_base mt_positionName"></td></tr><tr><td width="76"class="col999">所在部门</td><td class="mt_base mt_department"></td></tr><tr><td width="76"class="col999">工作城市</td><td class="mt_base mt_workCity"></td></tr><tr><td width="76"class="col999">职责描述</td></tr><tr><td class="mt_base mt_workContent"><pre rows="8"cols="40"></pre></td></tr><tr><td width="76"class="col999">职位月薪(税前)</td><td class="mt_base mt_salaryMonth"></td></tr><tr><td width="76"class="col999">所在部门</td><td class="mt_base mt_companyName"></td></tr><tr><td width="76"class="col999">在职时间</td><td class="mt_base mt_startDate"></td></tr><tr><td width="76"class="col999">在职时间</td><td class="mt_base mt_startDatedot"></td></tr><tr><td width="76"class="col999">离职时间</td><td class="mt_base mt_endDate"></td></tr><tr><td width="76"class="col999">离职时间</td><td class="mt_base mt_endDatedot"></td></tr><tr><td width="76"class="col999">在职时间</td><td class="mt_base mt_startDateDashes"></td></tr><tr><td width="76"class="col999">离职时间</td><td class="mt_base mt_endDateDashes"></td></tr><tr><td width="76"class="col999">工作内容</td></tr><tr><td class="mt_base mt_workContent"><pre rows="8"cols="40"></pre></td></tr><tr><td width="76"class="col999">离职原因</td><td class="mt_base mt_reasons"></td></tr><tr><td width="76"class="col999">证明人姓名</td><td class="mt_base mt_reterenceName"></td></tr><tr><td width="76"class="col999">证明人关系</td><td class="mt_base mt_reterenceRelation"></td></tr><tr><td width="76"class="col999">证明人单位</td><td class="mt_base mt_reterenceCompany"></td></tr><tr><td width="76"class="col999">证明人职位</td><td class="mt_base mt_reterencePosition"></td></tr><tr><td width="76"class="col999">证明人联系方式</td><td class="mt_base mt_reterence_phone"></td></tr><tr><td width="76"class="col999">工作经历</td></tr><tr><td class="mt_base"><pre rows="8"cols="40"class="mt_workList"></pre></td></tr></tbody></table></div></div>';
        }
        
        $('#exp-list').html(html);
        dragInit();
        editInit();
    };

    var editInit = function() {
        $("#exp-list > div").removeClass("edit-status");
        $("#exp-list .mt-edit").click(function(){
            $("#exp-list .mr_cancel").click();
            $(this).parent().parent().addClass("edit-status");
            $("#exp-list .error").parent().parent().hide();

            $(".mt_companyName,.mt_positionName,.mt_startDate,.mt_endDate,.mt_workContent").blur(function() {
                if((!$(this).hasClass('mt_workContent') && $(this).val() == "") || ($(this).hasClass('mt_workContent') && $(this).val() == "") ){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
        });

        $("#exp-list .mr_cancel").click(function(){
            $(this).parent().parent().parent().removeClass("edit-status");
        });

        $("#exp-list input[type=submit]").unbind("click").bind("click",function(e){
            expSubmit(this,'#exp-list .infopl-edit');
        });
    
        $("#exp-list .mr_del").unbind("click").bind("click",function(e){
            var eduid = $(this).parent().parent().attr("data-id");
            if(!$('.jm-mask').html()){
                $('#exp-list').append('<div class="jm-mask"></div>');
                $("#jm_popup_loading").show();
            }else{
                $(".jm-mask,#jm_popup_loading").show();
            }
            var ss = {
                    "id":eduid
                };

            new IO({
                url: "http://icebear.me/Resume/delExp?access=1",
                type: 'GET',
                data: ss,
                dataType: 'json',
                success: function(data) {
                    console.log('request code base data is success!' + data);
                    setTimeout(function(){
                        KISSY.use('jmPopExp', function (a, b) {new b});
                        $(".jm-mask,#jm_popup_loading").hide();
                    },1000);
                    
                },
                error: function() {
                    console.log('request code base data is error!' + data);
                    $(".jm-mask,#jm_popup_loading").hide();
                    $('<span for="mr_name" generated="true" class="error">修改失败，请稍后重试</span>').insertBefore($("#exp-list .mr_save"));
                }
            });
            /*KISSY.io.post("http://icebear.me/Resume/basicPost", JSON.stringify(ss), function(e) {
                console.log('updateuser e:' + e);
            });*/
            e.stopPropagation();
        });
        
        $("#exp-list .mt-edit-add").unbind("click").bind("click",function(e){
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">公司</td> <td><input type="text" id="mt_companyName" name="mt_companyName" class="ed_name mt_companyName" autocomplete="off" value="" placeholder="请输入公司"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">职位</td> <td><input type="text" id="mt_positionName" name="mt_positionName" class="ed_name valid mt_positionName" autocomplete="off" value="" placeholder="请输入职位"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">在职时间</td> <td>';

            var html1 = '<div class="mt_eduyear_div">';
            html1 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_eduyear mt_startDate_year" tip="tip3" ><option value="">请选择</option>';
            for (var j = new Date().getFullYear(); j >=  2000; j--) {
                html1 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html1 += '</select>年</div>';
            
            html += html1;

            var html2 = '<div class="mt_edumonth_div">';
            html2 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_startDate_month mt_edumonth" tip="tip3" ><option value="">请选择</option>';
            for (var j = 1; j <  13; j++) {
                html2 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html2 += '</select>月</div>';


            html += html2 +' </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr>   <tr> <td width="76" class="col999">至</td> <td>';

            var html1 = '<div class="mt_eduyear_div">';
            html1 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_eduyear mt_endDate_year" tip="tip3" ><option value="">请选择</option>';
            for (var j = new Date().getFullYear(); j >=  2000; j--) {
                html1 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html1 += '</select>年</div>';
            
            html += html1;

            var html2 = '<div class="mt_edumonth_div">';
            html2 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_endDate_month mt_edumonth" tip="tip3" ><option value="">请选择</option>';
            for (var j = 1; j <  13; j++) {
                html2 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html2 += '</select>月</div>';

            html += html2 + ' </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">工作内容</td> <td> <textarea contenteditable="true" id="mt_workContent" name="mt_workContent" class="ed_name mt_workContent" ></textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div>';
            $('#exp-list').append(html);
            $("#exp-list .mt-edit-add").hide();
            $(".mt_companyName,.mt_positionName,.mt_startDate,.mt_endDate,.mt_workContent").blur(function() {
                if((!$(this).hasClass('mt_workContent') && $(this).val() == "") || ($(this).hasClass('mt_workContent') && $(this).val() == "") ){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
            $("#exp-list .infopl-add .mr_save").unbind("click").bind("click",function(e){
                expSubmit(this, '#exp-list .infopl-add');
            });
            $("#exp-list .infopl-add .mr_cancel").click(function(){
                $(".infopl-add").remove();
                $("#exp-list .mt-edit-add").show();
            });

        });

    }

    var expSubmit = function(that, className){
        var expid = $(that).parent().parent().attr("data-id") || '';
        if(expid) className += '[data-id=' + expid + ']';
        var mt_companyName = KISSY.one(className + ' .mt_companyName').val();
        if(!mt_companyName){
            KISSY.one(className + ' .mt_companyName').parent().parent().next('tr').show();
            return;
        }
        var mt_positionName = KISSY.one(className + ' .mt_positionName').val();
        if(!mt_positionName){
            KISSY.one(className + ' .mt_positionName').parent().parent().next('tr').show();
            return;
        }
        var mt_startDate_year = KISSY.one(className + ' .mt_startDate_year').val();
        var mt_startDate_month = KISSY.one(className + ' .mt_startDate_month').val();
        if(!mt_startDate_year || !mt_startDate_month){
            KISSY.one(className + ' .mt_startDate_year').parent().parent().parent().next('tr').show();
            return;
        }else{
            KISSY.one(className + ' .mt_startDate_year').parent().parent().parent().next('tr').hide();
        }
        var mt_startDate = mt_startDate_year + '.' + mt_startDate_month;

        var mt_endDate_year = KISSY.one(className + ' .mt_endDate_year').val();
        var mt_endDate_month = KISSY.one(className + ' .mt_endDate_month').val();
        if(!mt_endDate_year || !mt_endDate_month){
            KISSY.one(className + ' .mt_endDate_year').parent().parent().parent().next('tr').show();
            return;
        }else{
            KISSY.one(className + ' .mt_endDate_year').parent().parent().parent().next('tr').hide();
        }
        var mt_endDate = mt_endDate_year + '.' + mt_endDate_month;

        var workContent = KISSY.one(className + ' .mt_workContent').val();
        if(!workContent){
            KISSY.one(className + ' .mt_workContent').parent().parent().next('tr').show();
            return;
        }
        
        if(!$('.jm-mask').html()){
            $('#exp-list').append('<div class="jm-mask"></div>');
            $("#jm_popup_loading").show();
        }else{
            $(".jm-mask,#jm_popup_loading").show();
        }
        var ss = {
                "companyName":mt_companyName,
                "positionName":mt_positionName,
                "startDate":mt_startDate,
                "endDate":mt_endDate,
                "workContent":workContent,
                "expid":expid
            };

        new IO({
            url: "http://icebear.me/Resume/workExperience?access=1",
            type: 'GET',
            data: ss,
            dataType: 'json',
            success: function(data) {
                console.log('request code base data is success!' + data);
                setTimeout(function(){
                    KISSY.use('jmPopExp', function (a, b) {new b});
                    $(".jm-mask,#jm_popup_loading").hide();
                },1000);
                
            },
            error: function() {
                console.log('request code base data is error!' + data);
                $(".jm-mask,#jm_popup_loading").hide();
                $('<span for="mr_name" generated="true" class="error">修改失败，请稍后重试</span>').insertBefore($("#exp-list .mr_save"));
            }
        });
    }

    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});

KISSY.add('jmPopPro', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code project data is success!');
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var processCodeBaseData = function(data) {
        var html = '';
        if(data.content && data.content.pro_list[0]){
            var eList = data.content.pro_list;
            var ordering = 0;
            //for(var i = eList.length-1; i >= 0 ; i--){ //倒叙
              for(var i = 0; i < eList.length ; i++){ 
                var startDateDot = eList[i].startDate ? eList[i].startDate.split('-')[0]+'.'+eList[i].startDate.split('-')[1] :"";
                var endDateDot = eList[i].endDate ? eList[i].endDate.split('-')[0]+'.'+eList[i].endDate.split('-')[1] :"";
                //html += '<div class=""> <div class="mt-title"> <div class="metil mt10">项目经历' + (ordering+1) + '</div> <div class="mt-edit"><i></i>编辑</div> </div> <div class="infopl"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">项目名称</td> <td class="mt_base" id="mt_projectName">' + eList[i].projectName + '</td> </tr> <tr> <td width="76" class="col999">项目时间</td> <td class="mt_base" id="mt_protime">' + eList[i].startDate + '-' + eList[i].endDate + '</td> </tr> <tr> <td width="76" class="col999">项目角色</td> <td class="mt_base" id="mt_positionName">' + eList[i].positionName + '</td> </tr> <tr> <td width="76" class="col999">项目内容</td></tr><tr> <td class="mt_base" id="mt_projectRemark"><pre>' + eList[i].projectRemark + '</pre></td> </tr> </tbody> </table> </div>';
               // html += '<div class=""> <div class="mt-title"> <div class="metil mt10">项目经历' + (ordering+1) + '</div> <div class="mt-edit"><i></i>编辑</div> </div> <div class="infopl"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">项目名称</td> <td class="mt_base" id="mt_projectName">' + eList[i].projectName + '</td> </tr> <tr> <td width="76" class="col999">项目人数</td> <td class="mt_base" id="mt_projectNumber">' + eList[i].projectNumber + '</td> </tr> <tr> <td width="76" class="col999">项目描述</td></tr><tr> <td class="mt_base" id="mt_projectRemark"><pre>' + eList[i].projectRemark + '</pre></td> </tr> </tbody> <tr> <td width="76" class="col999">项目职位</td> <td class="mt_base" id="mt_positionName">' + eList[i].positionName + '</td> </tr> <tr> <td width="76" class="col999">职责描述</td></tr><tr> <td class="mt_base" id="mt_projectDuty"><pre>' + eList[i].projectDuty + '</pre></td> </tr> </tbody> <tr> <td width="76" class="col999">项目起止时间</td> <td class="mt_base" id="mt_protime">' + eList[i].startDate + '-' + eList[i].endDate + '</td> </tr> <tr> <td width="76" class="col999">证明人姓名</td> <td class="mt_base" id="mt_reterenceName">' + eList[i].reterenceName + '</td> </tr> <tr> <td width="76" class="col999">证明人联系方式</td> <td class="mt_base" id="mt_reterencePhone">' + eList[i].reterencePhone + '</td> </tr> </table> </div>';
                //html += '<div class=""> <div class="mt-title"> <div class="metil mt10">项目经历' + (ordering+1) + '</div> <div class="mt-edit"><i></i>编辑</div> </div> <div class="infopl"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">项目名称</td> <td class="mt_base" id="mt_projectName">' + eList[i].projectName + '</td> </tr> <tr> <td width="76" class="col999">项目人数</td> <td class="mt_base" id="mt_projectNumber">' + eList[i].projectNumber + '</td> </tr> <tr> <td width="76" class="col999">项目描述</td></tr><tr> <td class="mt_base" id="mt_projectRemark"><pre>' + eList[i].projectRemark + '</pre></td> </tr> </tbody> <tr> <td width="76" class="col999">项目职位</td> <td class="mt_base" id="mt_positionName">' + eList[i].positionName + '</td> </tr> <tr> <td width="76" class="col999">职责描述</td></tr><tr> <td class="mt_base" id="mt_projectDuty"><pre>' + eList[i].projectDuty + '</pre></td> </tr> </tbody> <tr> <td width="76" class="col999">项目开始时间</td> <td class="mt_base" id="mt_prostarttime">' + eList[i].startDate +  '</td> </tr><tr> <td width="76" class="col999">项目结束时间</td> <td class="mt_base" id="mt_proendtime">'  + eList[i].endDate + '</td> </tr><tr><td width="76" class="col999">项目开始时间年月</td> <td class="mt_base" id="mt_prostartdate">'+eList[i].startDate.split('-')[0]+'.'+eList[i].startDate.split('-')[1]+'</td></tr> <tr><td width="76" class="col999">项目结束时间年月</td> <td class="mt_base" id="mt_proenddate">'+eList[i].endDate.split('-')[0]+'.'+eList[i].endDate.split('-')[1]+'</td></tr> <tr><td width="76" class="col999">项目开始时间年月</td> <td class="mt_base" id="mt_proStartDateDashes">'+eList[i].startDate.split('-')[0]+'-'+eList[i].startDate.split('-')[1]+'</td></tr> <tr><td width="76" class="col999">项目结束时间年月</td> <td class="mt_base" id="mt_proEndDateDashes">'+eList[i].endDate.split('-')[0]+'-'+eList[i].endDate.split('-')[1]+'</td></tr> <tr> <td width="76" class="col999">证明人姓名</td> <td class="mt_base" id="mt_reterenceName">' + eList[i].reterenceName + '</td> </tr> <tr> <td width="76" class="col999">证明人联系方式</td> <td class="mt_base" id="mt_reterencePhone">' + eList[i].reterencePhone + '</td> </tr> <tr> <td width="76" class="col999">项目经历</td></tr><tr> <td class="mt_base" > <pre rows="8" cols="40" id="mt_proList">'+'项目名称：'+eList[i].projectName +'  时间：'+eList[i].startDate+'-'+eList[i].endDate+'  职位：'+eList[i].positionName+'  项目职责：'+eList[i].projectDuty+'  项目内容：'+ eList[i].projectRemark + '</pre> </td> </tr> </table> </div>';
               html+='<div class="infoproject"><div class="mt-title"><div class="metil mt10">项目经历' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">项目名称</td><td class="mt_base mt_projectName">' + eList[i].projectName + '</td></tr><tr><td width="76"class="col999">项目人数</td><td class="mt_base mt_projectNumber">' + eList[i].projectNumber + '</td></tr><tr><td width="76"class="col999">项目描述</td></tr><tr><td class="mt_base "><pre class="mt_projectRemark">' + eList[i].projectRemark + '</pre></td></tr></tbody><tr><td width="76"class="col999">项目职位</td><td class="mt_base mt_positionName">' + eList[i].positionName + '</td></tr><tr><td width="76"class="col999">职责描述</td></tr><tr><td class="mt_base "><pre class="mt_projectDuty">' + eList[i].projectDuty + '</pre></td></tr></tbody><tr><td width="76"class="col999">项目开始时间</td><td class="mt_base mt_prostarttime">' + eList[i].startDate + '</td></tr><tr><td width="76"class="col999">项目结束时间</td><td class="mt_base mt_proendtime">' + eList[i].endDate + '</td></tr><tr><td width="76"class="col999">项目开始时间年月</td><td class="mt_base mt_prostartdate">'+eList[i].startDate+'</td></tr><tr><td width="76"class="col999">项目结束时间年月</td><td class="mt_base mt_proenddate">'+eList[i].endDate+'</td></tr><tr><td width="76"class="col999">项目开始时间年月</td><td class="mt_base mt_proStartDateDot">'+startDateDot+'</td></tr><tr><td width="76"class="col999">项目结束时间年月</td><td class="mt_base mt_proEndDateDot">'+endDateDot+'</td></tr><tr><td width="76"class="col999">证明人姓名</td><td class="mt_base mt_reterenceName">' + eList[i].reterenceName + '</td></tr><tr><td width="76"class="col999">证明人联系方式</td><td class="mt_base mt_reterencePhone">' + eList[i].reterencePhone + '</td></tr><tr><td width="76"class="col999">项目经历</td></tr><tr><td class="mt_base"><pre rows="8"cols="40" class="mt_proList">'+'项目名称：'+eList[i].projectName +'时间：'+eList[i].startDate+'-'+eList[i].endDate+'职位：'+eList[i].positionName+'项目职责：'+eList[i].projectDuty+'项目内容：'+ eList[i].projectRemark + '</pre></td></tr></table></div>';
                ordering++;
                // html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">项目名称</td> <td><input type="text" id="mt_projectName" name="mt_projectName" class="ed_name mt_projectName" autocomplete="off" value="' + eList[i].projectName + '" placeholder="请输入项目名称"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">开始时间</td> <td>';
                // var html1 = '<div class="mt_eduyear_div">';
                // html1 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_eduyear mt_startDate_year" tip="tip3" ><option value="">请选择</option>';
                // for (var j = new Date().getFullYear(); j >= 2000 ; j--) {
                //     html1 += '<option value="'+j+'" ' + (parseInt(eList[i].startDate.split(".")[0]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                // };
                // html1 += '</select>年</div>';
                
                // html += html1;

                // var html2 = '<div class="mt_edumonth_div">';
                // html2 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_startDate_month mt_edumonth" tip="tip3" ><option value="">请选择</option>';
                // for (var j = 1; j <  13; j++) {
                //     html2 += '<option value="'+j+'" ' + ( eList[i].startDate.split(".")[1] ? parseInt(eList[i].startDate.split(".")[1]) == j ? "selected=\"selected\"" : "" : "" ) + '>&nbsp;'+j+'</option>';
                // };
                // html2 += '</select>月</div>';

                // html += html2 + ' </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr>   <tr> <td width="76" class="col999">结束时间</td> <td>';

                // var html1 = '<div class="mt_eduyear_div">';
                // html1 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_eduyear mt_endDate_year" tip="tip3" ><option value="">请选择</option>';
                // for (var j = new Date().getFullYear(); j >=  2000; j--) {
                //     html1 += '<option value="'+j+'" ' + (parseInt(eList[i].endDate.split(".")[0]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                // };
                // html1 += '</select>年</div>';
                
                // html += html1;

                // var html2 = '<div class="mt_edumonth_div">';
                // html2 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_endDate_month mt_edumonth" tip="tip3" ><option value="">请选择</option>';
                // for (var j = 1; j <  13; j++) {
                //     html2 += '<option value="'+j+'" ' + ( eList[i].endDate.split(".")[1] ? parseInt(eList[i].endDate.split(".")[1]) == j ? "selected=\"selected\"" : "" : "" ) + '>&nbsp;'+j+'</option>';
                // };
                // html2 += '</select>月</div>';

                // html += html2 + '</td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">项目角色</td> <td><input type="text" id="mt_positionName" name="mt_positionName" class="ed_name mt_positionName" autocomplete="off" value="' + eList[i].positionName + '" placeholder="请输入项目角色"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">项目内容</td> <td> <textarea contenteditable="true" id="mt_projectRemark" name="mt_projectRemark" class="ed_name mt_projectRemark" >' + (eList[i].projectRemark ? eList[i].projectRemark : '') + '</textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            //html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="infoproject"><div class="mt-title"><div class="metil mt10">项目经历</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">项目名称</td><td class="mt_base mt_projectName"></td></tr><tr><td width="76"class="col999">项目人数</td><td class="mt_base mt_projectNumber"></td></tr><tr><td width="76"class="col999">项目描述</td></tr><tr><td class="mt_base "><pre class="mt_projectRemark"></pre></td></tr></tbody><tr><td width="76"class="col999">项目职位</td><td class="mt_base mt_positionName"></td></tr><tr><td width="76"class="col999">职责描述</td></tr><tr><td class="mt_base "><pre class="mt_projectDuty"></pre></td></tr></tbody><tr><td width="76"class="col999">项目开始时间</td><td class="mt_base mt_prostarttime"></td></tr><tr><td width="76"class="col999">项目结束时间</td><td class="mt_base mt_proendtime"></td></tr><tr><td width="76"class="col999">项目开始时间年月</td><td class="mt_base mt_prostartdate"></td></tr><tr><td width="76"class="col999">项目结束时间年月</td><td class="mt_base mt_proenddate"></td></tr><tr><td width="76"class="col999">项目开始时间年月</td><td class="mt_base mt_proStartDateDot"></td></tr><tr><td width="76"class="col999">项目结束时间年月</td><td class="mt_base mt_proEndDateDot"></td></tr><tr><td width="76"class="col999">证明人姓名</td><td class="mt_base mt_reterenceName"></td></tr><tr><td width="76"class="col999">证明人联系方式</td><td class="mt_base mt_reterencePhone"></td></tr><tr><td width="76"class="col999">项目经历</td></tr><tr><td class="mt_base"><pre rows="8"cols="40" class="mt_proList"></pre></td></tr></table></div>';
      }
        $('#pro-list').html(html);
        dragInit();
        editInit();
    };

    var editInit = function() {
        $("#pro-list > div").removeClass("edit-status");
        $("#pro-list .mt-edit").click(function(){
            $("#pro-list .mr_cancel").click();
            $(this).parent().parent().addClass("edit-status");
            $("#pro-list .error").parent().parent().hide();

            $(".mt_projectName,.mt_positionName,.mt_startDate,.mt_endDate,.mt_projectRemark").blur(function() {
                if((!$(this).hasClass('mt_projectRemark') && $(this).val() == "") || ($(this).hasClass('mt_projectRemark') && $(this).val() == "") ){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
        });

        $("#pro-list .mr_cancel").click(function(){
            $(this).parent().parent().parent().removeClass("edit-status");
        });

        $("#pro-list input[type=submit]").unbind("click").bind("click",function(e){
            proSubmit(this,'#pro-list .infopl-edit');
        });
    
        $("#pro-list .mr_del").unbind("click").bind("click",function(e){
            var eduid = $(this).parent().parent().attr("data-id");
            if(!$('.jm-mask').html()){
                $('#pro-list').append('<div class="jm-mask"></div>');
                $("#jm_popup_loading").show();
            }else{
                $(".jm-mask,#jm_popup_loading").show();
            }
            var ss = {
                    "id":eduid
                };

            new IO({
                url: "http://icebear.me/Resume/delProject?access=1",
                type: 'GET',
                data: ss,
                dataType: 'json',
                success: function(data) {
                    console.log('request code base data is success!' + data);
                    setTimeout(function(){
                        KISSY.use('jmPopPro', function (a, b) {new b});
                        $(".jm-mask,#jm_popup_loading").hide();
                    },1000);
                    
                },
                error: function() {
                    console.log('request code base data is error!' + data);
                    $(".jm-mask,#jm_popup_loading").hide();
                    $('<span for="mr_name" generated="true" class="error">修改失败，请稍后重试</span>').insertBefore($("#pro-list .mr_save"));
                }
            });
            /*KISSY.io.post("http://icebear.me/Resume/basicPost", JSON.stringify(ss), function(e) {
                console.log('updateuser e:' + e);
            });*/
            e.stopPropagation();
        });
        
        $("#pro-list .mt-edit-add").unbind("click").bind("click",function(e){
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">项目名称</td> <td><input type="text" id="mt_projectName" name="mt_projectName" class="ed_name mt_projectName" autocomplete="off" value="" placeholder="请输入项目名称"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">开始时间</td> <td>';
            var html1 = '<div class="mt_eduyear_div">';
            html1 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_eduyear mt_startDate_year" tip="tip3" ><option value="">请选择</option>';
            for (var j = new Date().getFullYear(); j >=2000; j--) {
                html1 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html1 += '</select>年</div>';
            
            html += html1;

            var html2 = '<div class="mt_edumonth_div">';
            html2 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_startDate_month mt_edumonth" tip="tip3" ><option value="">请选择</option>';
            for (var j = 1; j <  13; j++) {
                html2 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html2 += '</select>月</div>';


            html += html2 +'</td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr>   <tr> <td width="76" class="col999">结束时间</td> <td>';

            var html1 = '<div class="mt_eduyear_div">';
            html1 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_eduyear mt_endDate_year" tip="tip3" ><option value="">请选择</option>';
            for (var j = new Date().getFullYear(); j >=2000; j--) {
                html1 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html1 += '</select>年</div>';
            
            html += html1;

            var html2 = '<div class="mt_edumonth_div">';
            html2 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_endDate_month mt_edumonth" tip="tip3" ><option value="">请选择</option>';
            for (var j = 1; j <  13; j++) {
                html2 += '<option value="'+j+'" >&nbsp;'+j+'</option>';
            };
            html2 += '</select>月</div>';

            html += html2 + '</td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">项目角色</td> <td><input type="text" id="mt_positionName" name="mt_positionName" class="ed_name mt_positionName" autocomplete="off" value="" placeholder="请输入项目角色"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">项目内容</td> <td> <textarea contenteditable="true" id="mt_projectRemark" name="mt_projectRemark" class="ed_name mt_projectRemark" ></textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div>';
            $('#pro-list').append(html);
            $("#pro-list .mt-edit-add").hide();
            $(".mt_projectName,.mt_positionName,.mt_startDate,.mt_endDate,.mt_projectRemark").blur(function() {
                if((!$(this).hasClass('mt_projectRemark') && $(this).val() == "") || ($(this).hasClass('mt_projectRemark') && $(this).val() == "") ){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
            $("#pro-list .infopl-add .mr_save").unbind("click").bind("click",function(e){
                proSubmit(this, '#pro-list .infopl-add');
            });
            $("#pro-list .infopl-add .mr_cancel").click(function(){
                $(".infopl-add").remove();
                $("#pro-list .mt-edit-add").show();
            });

        });

    }

    var proSubmit = function(that, className){
        var projectid = $(that).parent().parent().attr("data-id") || '';
        if(projectid) className += '[data-id=' + projectid + ']';
        var mt_projectName = KISSY.one(className + ' .mt_projectName').val();
        if(!mt_projectName){
            KISSY.one(className + ' .mt_projectName').parent().parent().next('tr').show();
            return;
        }
        var mt_positionName = KISSY.one(className + ' .mt_positionName').val();
        if(!mt_positionName){
            KISSY.one(className + ' .mt_positionName').parent().parent().next('tr').show();
            return;
        }

        var mt_startDate_year = KISSY.one(className + ' .mt_startDate_year').val();
        var mt_startDate_month = KISSY.one(className + ' .mt_startDate_month').val();
        if(!mt_startDate_year || !mt_startDate_month){
            KISSY.one(className + ' .mt_startDate_year').parent().parent().parent().next('tr').show();
            return;
        }
        
        var mt_endDate_year = KISSY.one(className + ' .mt_endDate_year').val();
        var mt_endDate_month = KISSY.one(className + ' .mt_endDate_month').val();
        if(!mt_endDate_year || !mt_endDate_month){
            KISSY.one(className + ' .mt_endDate_year').parent().parent().parent().next('tr').show();
            return;
        }
        var mt_projectRemark = KISSY.one(className + ' .mt_projectRemark').val();
        if(!mt_projectRemark){
            KISSY.one(className + ' .mt_projectRemark').parent().parent().next('tr').show();
            return;
        }
        
        if(!$('.jm-mask').html()){
            $('#pro-list').append('<div class="jm-mask"></div>');
            $("#jm_popup_loading").show();
        }else{
            $(".jm-mask,#jm_popup_loading").show();
        }
        var ss = {
                "projectName":mt_projectName,
                "positionName":mt_positionName,
                "startYear":mt_startDate_year,
                "startMonth":mt_startDate_month,
                "startDate":mt_startDate_year + '.' + mt_startDate_month,
                "endYear":mt_endDate_year,
                "endMonth":mt_endDate_month,
                "endDate":mt_endDate_year + '.' + mt_endDate_month,
                "projectRemark":mt_projectRemark,
                "projectid":projectid
            };

        new IO({
            url: "http://icebear.me/Resume/projectExperience?access=1",
            type: 'GET',
            data: ss,
            dataType: 'json',
            success: function(data) {
                console.log('request code base data is success!' + data);
                setTimeout(function(){
                    KISSY.use('jmPopPro', function (a, b) {new b});
                    $(".jm-mask,#jm_popup_loading").hide();
                },1000);
                
            },
            error: function() {
                console.log('request code base data is error!' + data);
                $(".jm-mask,#jm_popup_loading").hide();
                $('<span for="mr_name" generated="true" class="error">修改失败，请稍后重试</span>').insertBefore($("#pro-list .mr_save"));
            }
        });
    }

    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});


KISSY.add('jmPopSchPra', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code school practice data is success!');
                //console.log(data);
                //console.log(data[practice_list]);
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var processCodeBaseData = function(data) {
        var html = '';
        if(data.content && data.content.practice_list[0]){
            var eList = data.content.practice_list;
            var ordering = 0;
            // for(var i = eList.length-1; i >= 0 ; i--){ //倒叙
                for(var i = 0; i < eList.length ; i++){
                html += '<div class="infoschpra">  <div class="mt-title"><div class="metil mt10">在校实践' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div>  <div class="infopl" data-id="' + eList[i].id + '"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody><tr> <td width="76" class="col999">实践单位</td> <td class="mt_base" id="mt_praCompanyName">' + eList[i].praCompanyName + '</td> </tr> <tr> <td width="76" class="col999">实践经历描述</td> <td class="mt_base" id="mt_practiceDes"> <pre rows="8" cols="40">' + eList[i].practiceDes + '</pre> </td> </tr> <tr> <td width="76" class="col999">实践职位</td> <td class="mt_base" id="mt_practicePosition">' + eList[i].practicePosition + '</td> </tr> <tr> <td width="76" class="col999">职责描述</td> <td class="mt_base" id="mt_practiceDuty"> <pre rows="8" cols="40">' + eList[i].practiceDuty + '</pre> </td> </tr> <tr> <td width="76" class="col999">项目起止时间</td> <td class="mt_base" id="mt_academy">' + eList[i].startDate +'-'+eList[i].endDate+ '</td> </tr> <tr> <td width="76" class="col999">实践径历</td> <td class="mt_base" id="mt_praCompanyList">'+'实践单位：' + eList[i].praCompanyName +'时间：'+ eList[i].startDate +'-'+eList[i].endDate+ '描述：'+ eList[i].practiceDes + '</td> </tr></tbody> </table> </div>';
 
                ordering++;
                // html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>  <tr> <td width="76" class="col999">学历</td><td><select id="mt_education" name="mt_education" class="ed_name mt_education"><option value="大专" ' + ((eList[i].education) == "大专" ? "selected=\"selected\"" : "") + '>大专</option><option value="本科" ' + ((eList[i].education) == "本科" ? "selected=\"selected\"" : "") + '>本科</option><option value="硕士" ' + ((eList[i].education) == "硕士" ? "selected=\"selected\"" : "") + '>硕士</option><option value="博士" ' + ((eList[i].education) == "博士" ? "selected=\"selected\"" : "") + '>博士</option><option value="其他" ' + ((eList[i].education) == "其他" ? "selected=\"selected\"" : "") + '>其他</option></select></td>  </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="' + eList[i].schoolName + '" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_eduyear_div">';
                // html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_eduyear" tip="tip3" ><option value="">请选择</option>';
                // for (var j = 2017; j >= 2000; j--) {
                //     html += '<option value="'+j+'" ' + (parseInt(eList[i].endDate) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                // };
                // html += '</select>年</div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">所学专业</td> <td><input type="text" id="mt_professional" name="mt_professional" class="ed_name mt_professional" autocomplete="off" value="' + eList[i].professional + '" placeholder="请输入所学专业"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">奖惩情况</td> <td> <input type="text" id="mt_award" name="mt_award" class="ed_name mt_award" autocomplete="off" value="' + (eList[i].reward_punish ? eList[i].reward_punish : '') + '" placeholder="请输入奖励"></td> </tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="mt-title"> <div class="metil mt10">校内实践</div>  </div> <div class="infopl">  <div class="mr_empty_add dn mt-edit-add" style="display: block;"> <i></i><span>添加校内实践</span> </div> </div>';
        }
        $('#schpra-list').html(html);
        dragInit();
        editInit();
    };


 
    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});


KISSY.add('jmPopSchClub', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code school club data is success!');
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var processCodeBaseData = function(data) {
        var html = '';
        if(data.content && data.content.schoolclub_list[0]){
            var eList = data.content.schoolclub_list;
            var ordering = 0;
            //for(var i = eList.length-1; i >= 0 ; i--){ //倒叙
            for(var i = 0; i < eList.length ; i++){
                var mt_startDateDot = eList[i].startDate ? eList[i].startDate.split('-')[0]+'.'+eList[i].startDate.split('-')[1] :"";
                var mt_endDateDot = eList[i].endDate ? eList[i].endDate.split('-')[0]+'.'+eList[i].endDate.split('-')[1] :"";
                html += '<div class="infoschoolclub"><div class="mt-title"><div class="metil mt10">社团经历' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id="' + eList[i].id + '"><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">社团名称</td><td class="mt_base mt_schClubName">' + eList[i].schClubName + '</td></tr><tr><td width="76"class="col999">社团等级</td><td class="mt_base mt_schClubLevel">' + eList[i].schClubLevel + '</td></tr><tr><td width="76"class="col999">担任职务</td><td class="mt_base mt_positionName">' + eList[i].positionName + '</td></tr><tr><td width="76"class="col999">工作职责</td><td class="mt_base mt_workDes">' + eList[i].workDes + '</td></tr><tr><td width="76"class="col999">开始时间</td><td class="mt_base mt_startDate">' + eList[i].startDate + '</td></tr><tr><td width="76"class="col999">结束时间</td><td class="mt_base mt_endDate">' + eList[i].endDate + '</td></tr><tr><td width="76"class="col999">开始时间</td><td class="mt_base mt_startDateDot">' + mt_startDateDot + '</td></tr><tr><td width="76"class="col999">结束时间</td><td class="mt_base mt_endDateDot">' + mt_endDateDot + '</td></tr><tr><td width="76"class="col999">社团经历</td><td class="mt_base mt_schClubList">社团名称：' + eList[i].schClubName + '担任职务：'+ eList[i].positionName + '时间：'+ eList[i].startDate +'-'+ eList[i].startDate + '</td></tr></tbody></table></div>';
                ordering++;
                // html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>  <tr> <td width="76" class="col999">学历</td><td><select id="mt_education" name="mt_education" class="ed_name mt_education"><option value="大专" ' + ((eList[i].education) == "大专" ? "selected=\"selected\"" : "") + '>大专</option><option value="本科" ' + ((eList[i].education) == "本科" ? "selected=\"selected\"" : "") + '>本科</option><option value="硕士" ' + ((eList[i].education) == "硕士" ? "selected=\"selected\"" : "") + '>硕士</option><option value="博士" ' + ((eList[i].education) == "博士" ? "selected=\"selected\"" : "") + '>博士</option><option value="其他" ' + ((eList[i].education) == "其他" ? "selected=\"selected\"" : "") + '>其他</option></select></td>  </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="' + eList[i].schoolName + '" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_eduyear_div">';
                // html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_eduyear" tip="tip3" ><option value="">请选择</option>';
                // for (var j = 2017; j >= 2000; j--) {
                //     html += '<option value="'+j+'" ' + (parseInt(eList[i].endDate) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                // };
                // html += '</select>年</div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">所学专业</td> <td><input type="text" id="mt_professional" name="mt_professional" class="ed_name mt_professional" autocomplete="off" value="' + eList[i].professional + '" placeholder="请输入所学专业"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">奖惩情况</td> <td> <input type="text" id="mt_award" name="mt_award" class="ed_name mt_award" autocomplete="off" value="' + (eList[i].reward_punish ? eList[i].reward_punish : '') + '" placeholder="请输入奖励"></td> </tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
           // html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="infoschoolclub"><div class="mt-title"><div class="metil mt10">社团经历</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id=""><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">社团名称</td><td class="mt_base mt_schClubName"></td></tr><tr><td width="76"class="col999">社团等级</td><td class="mt_base mt_schClubLevel"></td></tr><tr><td width="76"class="col999">担任职务</td><td class="mt_base mt_positionName"></td></tr><tr><td width="76"class="col999">工作职责</td><td class="mt_base mt_workDes"></td></tr><tr><td width="76"class="col999">开始时间</td><td class="mt_base mt_startDate"></td></tr><tr><td width="76"class="col999">结束时间</td><td class="mt_base mt_endDate"></td></tr><tr><td width="76"class="col999">开始时间</td><td class="mt_base mt_startDateDot"></td></tr><tr><td width="76"class="col999">结束时间</td><td class="mt_base mt_endDateDot"></td></tr><tr><td width="76"class="col999">社团经历</td><td class="mt_base mt_schClubList"></td></tr></tbody></table></div>';
        }
        $('#schclub-list').html(html);
        dragInit();
        editInit();
    };


 
    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});


KISSY.add('jmPopSchAwards', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code base data is success!');
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var processCodeBaseData = function(data) {
        var html = '';
        if(data.content && data.content.schoolawards_list[0]){
            var eList = data.content.schoolawards_list;
            var ordering = 0;
            //for(var i = eList.length-1; i >= 0 ; i--){ //倒叙
                for(var i = 0; i < eList.length ; i++){
                var awardsDate = eList[i].awardsDate ? eList[i].awardsDate.split('-')[0]+'.'+eList[i].awardsDate.split('-')[1] :"";
                html += '<div class="infoschaward"><div class="mt-title"><div class="metil mt10">获奖经历' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id="' + eList[i].id + '"><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">获奖名称</td><td class="mt_base mt_awardsName">' + eList[i].awardsName + '</td></tr><tr><td width="76"class="col999">获奖类型</td><td class="mt_base mt_awardsType">' + eList[i].awardsType + '</td></tr><tr><td width="76"class="col999">担任职务</td><td class="mt_base mt_awardsLevel">' + eList[i].awardsLevel + '</td></tr><tr><td width="76"class="col999">获奖时间</td><td class="mt_base mt_awardsDate">' + eList[i].awardsDate + '</td></tr><tr><td width="76"class="col999">获奖时间年月</td><td class="mt_base mt_awardsDatedot">' + awardsDate + '</td></tr><tr><td width="76"class="col999">获奖描述</td><td class="mt_base mt_awardsDes">' + eList[i].awardsDes + '</td></tr><tr><td width="76"class="col999">获奖经历</td></tr><tr><td class="mt_base"><pre rows="8"cols="40"class="mt_schawradList">'+'获奖名称：'+eList[i].awardsName +'获奖时间：'+eList[i].awardsDate+'获奖类型：'+eList[i].awardsType+'获奖描述：'+eList[i].awardsDes + '</pre></td></tr></tbody></table></div>';
                ordering++;
                // html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>  <tr> <td width="76" class="col999">学历</td><td><select id="mt_education" name="mt_education" class="ed_name mt_education"><option value="大专" ' + ((eList[i].education) == "大专" ? "selected=\"selected\"" : "") + '>大专</option><option value="本科" ' + ((eList[i].education) == "本科" ? "selected=\"selected\"" : "") + '>本科</option><option value="硕士" ' + ((eList[i].education) == "硕士" ? "selected=\"selected\"" : "") + '>硕士</option><option value="博士" ' + ((eList[i].education) == "博士" ? "selected=\"selected\"" : "") + '>博士</option><option value="其他" ' + ((eList[i].education) == "其他" ? "selected=\"selected\"" : "") + '>其他</option></select></td>  </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="' + eList[i].schoolName + '" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_eduyear_div">';
                // html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_eduyear" tip="tip3" ><option value="">请选择</option>';
                // for (var j = 2017; j >= 2000; j--) {
                //     html += '<option value="'+j+'" ' + (parseInt(eList[i].endDate) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                // };
                // html += '</select>年</div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">所学专业</td> <td><input type="text" id="mt_professional" name="mt_professional" class="ed_name mt_professional" autocomplete="off" value="' + eList[i].professional + '" placeholder="请输入所学专业"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">奖惩情况</td> <td> <input type="text" id="mt_award" name="mt_award" class="ed_name mt_award" autocomplete="off" value="' + (eList[i].reward_punish ? eList[i].reward_punish : '') + '" placeholder="请输入奖励"></td> </tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            // html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="infoschaward"><div class="mt-title"><div class="metil mt10">获奖经历</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id=""><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">获奖名称</td><td class="mt_base mt_awardsName"></td></tr><tr><td width="76"class="col999">获奖类型</td><td class="mt_base mt_awardsType"></td></tr><tr><td width="76"class="col999">担任职务</td><td class="mt_base mt_awardsLevel"></td></tr><tr><td width="76"class="col999">获奖时间</td><td class="mt_base mt_awardsDate"></td></tr><tr><td width="76"class="col999">获奖时间年月</td><td class="mt_base mt_awardsDatedot"></td></tr><tr><td width="76"class="col999">获奖描述</td><td class="mt_base mt_awardsDes"></td></tr><tr><td width="76"class="col999">获奖经历</td></tr><tr><td class="mt_base"><pre rows="8"cols="40"class="mt_schawradList"></pre></td></tr></tbody></table></div>';
        }
        $('#schawards-list').html(html);
        dragInit();
        editInit();
    };


 
    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});

KISSY.add('jmPopSkill', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code skill data is success!');
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var processCodeBaseData = function(data) {
        var html = '';
        var htmlot = '';
        var htmlotsk = '';
        if(data.content && data.content.engskill_list[0]){
            var eList = data.content.engskill_list;
            var ordering = 0;
            
            // for(var i = eList.length-1; i >= 0 ; i--){ //倒叙
            for(var i = 0; i < eList.length ; i++){
                
                html += '<div class="infoEnglishSkill"><div class="mt-title"><div class="metil mt10">英语能力' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id="' + eList[i].id + '"><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">大学英语等级</td><td class="mt_base mt_skillEngLevel">' + eList[i].skillEngLevel + '</td></tr><tr><td width="76"class="col999">大学英语等级-成绩</td><td class="mt_base mt_skillEngSorce">' + eList[i].skillEngSorce + '</td></tr></tbody></table></div></div>';
                ordering++;
            }
          
            //html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="infoEnglishSkill"><div class="mt-title"><div class="metil mt10">英语能力</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id=""><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">大学英语等级</td><td class="mt_base mt_skillEngLevel"></td></tr><tr><td width="76"class="col999">大学英语等级-成绩</td><td class="mt_base mt_skillEngSorce"></td></tr></tbody></table></div></div>';
        }

        if(data.content && data.content.otherengskill_list[0]){
            var oeList = data.content.otherengskill_list;
            var ordering_other = 0;
            // for(var i = oeList.length-1; i >= 0 ; i--){ //倒叙
            for(var i = 0; i < oeList.length ; i++){
                htmlot += '<div class="infoOtEnglishSkill"><div class="mt-title"><div class="metil mt10">其他英语能力' + (ordering_other+1) + '</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id="' + oeList[i].id + '"><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">其他英语考试</td><td class="mt_base mt_otherSkillEngLevel">' + oeList[i].otherSkillEngLevel + '</td></tr><tr><td width="76"class="col999">其他英语考试-成绩</td><td class="mt_base mt_otherSkillEngSorce">' + oeList[i].otherSkillEngSorce + '</td></tr></tbody></table></div></div>';
                ordering_other ++;
            }
        }else{
            htmlot +='<div class="infoOtEnglishSkill"><div class="mt-title"><div class="metil mt10">其他英语能力</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id=""><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">其他英语考试</td><td class="mt_base mt_otherSkillEngLevel"></td></tr><tr><td width="76"class="col999">其他英语考试-成绩</td><td class="mt_base mt_otherSkillEngSorce"></td></tr></tbody></table></div></div>';
        }
        html += htmlot;

        if(data.content && data.content.otherskill_list[0]){
            var oList = data.content.otherskill_list;
            var ordering_otherl = 0;
            //for(var i = oList.length-1; i >= 0 ; i--){ //倒叙
            for(var i = 0; i < oList.length ; i++){
                htmlotsk += '<div class="infoOtherSkill"><div class="mt-title"><div class="metil mt10">其他语言能力' + (ordering_otherl+1) + '</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id="' + oList[i].id + '"><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">其他外语</td><td class="mt_base mt_skillOtherLang">' + oList[i].otherLang + '</td></tr><tr><td width="76"class="col999">掌握程度</td><td class="mt_base mt_skillGraspLevel">' + oList[i].graspLevel + '</td></tr><tr><td width="76"class="col999">听说能力</td><td class="mt_base mt_skillListenLevel">' + oList[i].listenLevel + '</td></tr><tr><td width="76"class="col999">读写能力</td><td class="mt_base mt_skillWriteLevel">' + oList[i].writeLevel + '</td></tr></tbody></table></div></div>';
                ordering_otherl++;
            }
        }else{
            htmlotsk +='<div class="infoOtherSkill"><div class="mt-title"><div class="metil mt10">其他语言能力</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id=""><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">其他外语</td><td class="mt_base mt_skillOtherLang"></td></tr><tr><td width="76"class="col999">掌握程度</td><td class="mt_base mt_skillGraspLevel"></td></tr><tr><td width="76"class="col999">听说能力</td><td class="mt_base mt_skillListenLevel"></td></tr><tr><td width="76"class="col999">读写能力</td><td class="mt_base mt_skillWriteLevel"></td></tr></tbody></table></div></div>';
        }    
        html += htmlotsk;
        $('#skill-list').html(html);
        dragInit();
        editInit();
    };


 
    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});

KISSY.add('jmPopCertificate', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code certificate data is success!');
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var processCodeBaseData = function(data) {
        var html = '';
        if(data.content && data.content.certificate_list[0]){
            var eList = data.content.certificate_list;
            var ordering = 0;
            //for(var i = eList.length-1; i >= 0 ; i--){ //倒叙
            for(var i = 0; i < eList.length ; i++){
                var getDateDot =  eList[i].getDate ?　eList[i].getDate.split('-')[0]+'.'+eList[i].getDate.split('-')[1]:"";
                html += '<div class="infoplcerti"><div class="mt-title"><div class="metil mt10">证书' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id="' + eList[i].id + '"><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">证书名称</td><td class="mt_base mt_certificateName">' + eList[i].certificateName + '</td></tr><tr><td width="76"class="col999">获得时间</td><td class="mt_base mt_getDate">' + eList[i].getDate + '</td></tr><tr><td width="76"class="col999">获得时间-点</td><td class="mt_base mt_getDateDot">' + getDateDot + '</td></tr><tr><td width="76"class="col999">证书描述</td><td class="mt_base mt_certificateDes">' + eList[i].certificateDes + '</td></tr><tr><td width="76"class="col999">颁发机构</td><td class="mt_base mt_issuing">' + eList[i].issuing + '</td></tr></tbody></table></div>';
                ordering++;
                // html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>  <tr> <td width="76" class="col999">学历</td><td><select id="mt_education" name="mt_education" class="ed_name mt_education"><option value="大专" ' + ((eList[i].education) == "大专" ? "selected=\"selected\"" : "") + '>大专</option><option value="本科" ' + ((eList[i].education) == "本科" ? "selected=\"selected\"" : "") + '>本科</option><option value="硕士" ' + ((eList[i].education) == "硕士" ? "selected=\"selected\"" : "") + '>硕士</option><option value="博士" ' + ((eList[i].education) == "博士" ? "selected=\"selected\"" : "") + '>博士</option><option value="其他" ' + ((eList[i].education) == "其他" ? "selected=\"selected\"" : "") + '>其他</option></select></td>  </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="' + eList[i].schoolName + '" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_eduyear_div">';
                // html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_eduyear" tip="tip3" ><option value="">请选择</option>';
                // for (var j = 2017; j >= 2000; j--) {
                //     html += '<option value="'+j+'" ' + (parseInt(eList[i].endDate) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                // };
                // html += '</select>年</div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">所学专业</td> <td><input type="text" id="mt_professional" name="mt_professional" class="ed_name mt_professional" autocomplete="off" value="' + eList[i].professional + '" placeholder="请输入所学专业"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">奖惩情况</td> <td> <input type="text" id="mt_award" name="mt_award" class="ed_name mt_award" autocomplete="off" value="' + (eList[i].reward_punish ? eList[i].reward_punish : '') + '" placeholder="请输入奖励"></td> </tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            //html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="infoplcerti"><div class="mt-title"><div class="metil mt10">证书</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id=""><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">证书名称</td><td class="mt_base mt_certificateName"></td></tr><tr><td width="76"class="col999">获得时间</td><td class="mt_base mt_getDate"></td></tr><tr><td width="76"class="col999">获得时间-点</td><td class="mt_base mt_getDateDot"></td></tr><tr><td width="76"class="col999">证书描述</td><td class="mt_base mt_certificateDes"></td></tr><tr><td width="76"class="col999">颁发机构</td><td class="mt_base mt_issuing"></td></tr></tbody></table></div>';
        }
        $('#certificate-list').html(html);
        dragInit();
        editInit();
    };


 
    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});


KISSY.add('jmPopTraining', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code training data is success!');
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var processCodeBaseData = function(data) {
        var html = '';
        if(data.content && data.content.trainingexperience_list[0]){
            var eList = data.content.trainingexperience_list;
            var ordering = 0;
            //for(var i = eList.length-1; i >= 0 ; i--){  //倒叙
            for(var i = 0; i < eList.length ; i++){
                var mt_startDateDot =  eList[i].startDate ?　eList[i].startDate.split('-')[0]+'.'+eList[i].startDate.split('-')[1]:"";
                var mt_endDateDot =  eList[i].endDate ?　eList[i].endDate.split('-')[0]+'.'+eList[i].endDate.split('-')[1]:"";
                html += '<div class="infotraining">  <div class="mt-title"><div class="metil mt10">培训经历' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div>  <div class="infopl" data-id="' + eList[i].id + '"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody><tr> <td width="76" class="col999">培训名称</td> <td class="mt_base mt_trainingName">' + eList[i].trainingName + '</td> </tr> <tr> <td width="76" class="col999">培训内容</td> <td class="mt_base mt_trainingDes">' + eList[i].trainingDes + '</td> </tr> <tr> <td width="76" class="col999">培训机构</td> <td class="mt_base mt_trainingCompany">' + eList[i].trainingCompany + '</td> </tr> <tr> <td width="76" class="col999">培训地点</td> <td class="mt_base mt_trainingPlace">' + eList[i].trainingPlace + '</td> </tr> <tr> <td width="76" class="col999">开始时间</td> <td class="mt_base mt_startDate">' + eList[i].startDate + '</td> </tr> <tr> <td width="76" class="col999">结束时间</td> <td class="mt_base mt_endDate">' + eList[i].endDate + '</td> </tr>  <tr> <td width="76" class="col999">开始时间</td> <td class="mt_base mt_startDateDot">' + mt_startDateDot + '</td> </tr> <tr> <td width="76" class="col999">结束时间</td> <td class="mt_base mt_endDateDot">' + mt_endDateDot + '</td> </tr> <tr> <td width="76" class="col999">获得证书</td> <td class="mt_base mt_certificateName">' + eList[i].certificateName + '</td> </tr> </tbody> </table> </div>';
                            
                ordering++;
                // html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>  <tr> <td width="76" class="col999">学历</td><td><select id="mt_education" name="mt_education" class="ed_name mt_education"><option value="大专" ' + ((eList[i].education) == "大专" ? "selected=\"selected\"" : "") + '>大专</option><option value="本科" ' + ((eList[i].education) == "本科" ? "selected=\"selected\"" : "") + '>本科</option><option value="硕士" ' + ((eList[i].education) == "硕士" ? "selected=\"selected\"" : "") + '>硕士</option><option value="博士" ' + ((eList[i].education) == "博士" ? "selected=\"selected\"" : "") + '>博士</option><option value="其他" ' + ((eList[i].education) == "其他" ? "selected=\"selected\"" : "") + '>其他</option></select></td>  </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="' + eList[i].schoolName + '" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_eduyear_div">';
                // html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_eduyear" tip="tip3" ><option value="">请选择</option>';
                // for (var j = 2017; j >= 2000; j--) {
                //     html += '<option value="'+j+'" ' + (parseInt(eList[i].endDate) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                // };
                // html += '</select>年</div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">所学专业</td> <td><input type="text" id="mt_professional" name="mt_professional" class="ed_name mt_professional" autocomplete="off" value="' + eList[i].professional + '" placeholder="请输入所学专业"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">奖惩情况</td> <td> <input type="text" id="mt_award" name="mt_award" class="ed_name mt_award" autocomplete="off" value="' + (eList[i].reward_punish ? eList[i].reward_punish : '') + '" placeholder="请输入奖励"></td> </tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            //html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="infotraining"><div class="mt-title"><div class="metil mt10">培训经历</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id="' + eList[i].id + '"><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">培训名称</td><td class="mt_base mt_trainingName"></td></tr><tr><td width="76"class="col999">培训内容</td><td class="mt_base mt_trainingDes"></td></tr><tr><td width="76"class="col999">培训机构</td><td class="mt_base mt_trainingCompany"></td></tr><tr><td width="76"class="col999">培训地点</td><td class="mt_base mt_trainingPlace"></td></tr><tr><td width="76"class="col999">开始时间</td><td class="mt_base mt_startDate"></td></tr><tr><td width="76"class="col999">结束时间</td><td class="mt_base mt_endDate"></td></tr><tr><td width="76"class="col999">开始时间</td><td class="mt_base mt_startDateDot"></td></tr><tr><td width="76"class="col999">结束时间</td><td class="mt_base mt_endDateDot"></td></tr><tr><td width="76"class="col999">获得证书</td><td class="mt_base mt_certificateName"></td></tr></tbody></table></div>';
        }
        $('#training-list').html(html);
        dragInit();
        editInit();
    };


 
    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});

KISSY.add('jmPopOtherInfo', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code otherinfo data is success!');
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var processCodeBaseData = function(data) {
        var html = '';
        if(data.content && data.content.otherinfo_list[0]){
            var eList = data.content.otherinfo_list;
            var ordering = 0;
            //for(var i = eList.length-1; i >= 0 ; i--){ //倒叙
            for(var i = 0; i < eList.length ; i++){
                html += '<div class="infootherinfo">  <div class="mt-title"><div class="metil mt10">其他信息' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div>  <div class="infopl" data-id="' + eList[i].id + '"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody><tr> <td width="76" class="col999">自我评价</td> <td class="mt_base" id="mt_selfIntro">' + eList[i].selfIntro + '</td> </tr> <tr> <td width="76" class="col999">爱好特长</td> <td class="mt_base" id="mt_skill">' + eList[i].skill + '</td> </tr> <tr> <td width="76" class="col999">其他技能</td> <td class="mt_base" id="mt_hobbies">' + eList[i].hobbies + '</td> </tr> <tr> <td width="76" class="col999">个人成就</td> <td class="mt_base" id="achievement">' + eList[i].achievement + '</td> </tr> <tr> <td width="76" class="col999">个人简介</td> <td class="mt_base" id="mt_profile">' + eList[i].profile + '</td> </tr> </tbody> </table> </div>';
                
                ordering++;
                // html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>  <tr> <td width="76" class="col999">学历</td><td><select id="mt_education" name="mt_education" class="ed_name mt_education"><option value="大专" ' + ((eList[i].education) == "大专" ? "selected=\"selected\"" : "") + '>大专</option><option value="本科" ' + ((eList[i].education) == "本科" ? "selected=\"selected\"" : "") + '>本科</option><option value="硕士" ' + ((eList[i].education) == "硕士" ? "selected=\"selected\"" : "") + '>硕士</option><option value="博士" ' + ((eList[i].education) == "博士" ? "selected=\"selected\"" : "") + '>博士</option><option value="其他" ' + ((eList[i].education) == "其他" ? "selected=\"selected\"" : "") + '>其他</option></select></td>  </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="' + eList[i].schoolName + '" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_eduyear_div">';
                // html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_eduyear" tip="tip3" ><option value="">请选择</option>';
                // for (var j = 2017; j >= 2000; j--) {
                //     html += '<option value="'+j+'" ' + (parseInt(eList[i].endDate) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                // };
                // html += '</select>年</div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">所学专业</td> <td><input type="text" id="mt_professional" name="mt_professional" class="ed_name mt_professional" autocomplete="off" value="' + eList[i].professional + '" placeholder="请输入所学专业"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">奖惩情况</td> <td> <input type="text" id="mt_award" name="mt_award" class="ed_name mt_award" autocomplete="off" value="' + (eList[i].reward_punish ? eList[i].reward_punish : '') + '" placeholder="请输入奖励"></td> </tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            //html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="infootherinfo"><div class="mt-title"><div class="metil mt10">其他信息</div><div class="mt-edit"><i></i>编辑</div></div><div class="infopl"data-id=""><table width="100%"border="0"cellspacing="0"cellpadding="0"><tbody><tr><td width="76"class="col999">自我评价</td><td class="mt_base"id="mt_selfIntro"></td></tr><tr><td width="76"class="col999">爱好特长</td><td class="mt_base"id="mt_skill"></td></tr><tr><td width="76"class="col999">其他技能</td><td class="mt_base"id="mt_hobbies"></td></tr><tr><td width="76"class="col999">个人成就</td><td class="mt_base"id="mt_trainingPlace"></td></tr><tr><td width="76"class="col999">个人简介</td><td class="mt_base"id="mt_profile"></td></tr></tbody></table></div>';
        }
        $('#otherinfo-list').html(html);
        dragInit();
        editInit();
    };


 
    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});


KISSY.add('jmPopGetScript', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getWebScript';
        //var matchHost = window.location.host.split('.')[1];
        var matchHost = window.location.host.split('.');
        switch(matchHost.length){
            case 2: 
                matchHost = matchHost[0];
                break;
            case 3: 
                matchHost = matchHost[1];
                break;
            case 4: 
                matchHost = matchHost[2];    
                break;
            default:    
                matchHost = matchHost[0];
                break;
        }
   
        new IO({
            url: url,
            data: { webHost: matchHost },    
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code getWebScript data is success!');
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code getWebScript data is error!');
            }
        });
    };

    var processCodeBaseData = function(data) {
        console.log(data.content.getScript[0].plugin_status);
        switch(data.content.getScript[0].plugin_status){
            case "0": break;
            case "1": 
                $('.errorNotice').html('<i class="jm_errorclose"></i><p>由于网申页面的限制，白熊无法为你自动填写简历项。如果看到地址栏有个小盾牌，请点击它，并允许白熊网申助手插件加载脚本。</p><p><img style="width: 100%;" src="http://icebear.me/Public/static/client.jobsminer.cc/godimage/version2/loading-js.gif"></p>');
                $('#jm_plugin_tips').css('display','block');
                $('.jm_errorclose').click(function(){$(this).parent().css('display','none')});
                if ($.cookie('pluginCustomTips')== null || localStorage.getItem('pluginCustomTips')== null) {
                    $('.errorNotice').css("display","block");
                    $.cookie("pluginCustomTips", "pluginCustomTips",{ expires: 10000 });
                    localStorage.setItem("pluginCustomTips", 'pluginCustomTips');
                  }else{

                  }
               
                break;
            case "2": 
                $('#jm_plugin_tips').css('display','block');
                $('.errorNotice').html('<i class="jm_errorclose"></i><p>'+data.content.getScript[0].tips+'</p>');
                //$('.jm_errorclose').click(function(){$(this).parent().css('display','none'); $('.qw-jstips').removeClass('qw-jstips-img').addClass('qw-jstips-newimg') });
                $('.jm_errorclose').click(function(){$(this).parent().css('display','none');  });
                if (data.content.getScript[0].tips != null && $.cookie('pluginCustomTips')== null || localStorage.getItem('pluginCustomTips')== null) {
                    $('.errorNotice').css("display","block");
                    $.cookie("pluginCustomTips", "pluginCustomTips",{ expires: 10000 });
                    localStorage.setItem("pluginCustomTips", 'pluginCustomTips');
                  }
                  //var changeTipsImg = $('.errorNotice').css('display');
                  //changeTipsImg == "block" ? $('.qw-jstips').removeClass('qw-jstips-newimg').addClass('qw-jstips-img') : $('.qw-jstips').removeClass('qw-jstips-img').addClass('qw-jstips-newimg');

                break;
        }
    };
    return init;
},
{
    requires: ["node", "base", "ajax"]
});


KISSY.add('jmPopCor', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code cor data is success!');
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var processCodeBaseData = function(data) {
        var html = '';
        if(data.content && data.content.custom_model[0]){
            var eList = data.content.custom_model;
            //for(var i = eList.length - 1; i >= 0; i--){ //倒叙
            for(var i = 0; i < eList.length ; i++){
                if(eList[i].titleName){
                    html += '<div><div class="infopl"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>    <tr> <td class="mt_base" id="mt_titleName">' + eList[i].titleName + '</td><td><div class="mt-edit"><i></i>编辑</div></td></tr><tr><td  class="mt_base"><pre id="mt_titleContent">' + eList[i].titleContent + '</pre></td> </tr> </tbody> </table> </div>';
                    html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">自定义标题</td> <td><input type="text" id="mt_titleName" name="mt_titleName" class="ed_name mt_titleName" autocomplete="off" value="' + eList[i].titleName + '" placeholder="请输入自定义标题"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">内容</td> <td> <textarea contenteditable="true" id="mt_titleContent" name="mt_titleContent" class="ed_name mt_base mt_titleContent" >' + (eList[i].titleContent ? eList[i].titleContent : '') + '</textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除" style="display:;"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
                }
            }
            html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="mt-title"> <div class="metil mt10">自定义模块</div> </div> <div class="infopl"> <div class="mr_empty_add dn  mt-edit-add" style="display: block;"> <i></i><span>自定义模块</span> </div> </div>';
        }
        $('#other-list').html(html);
        dragInit();
        editInit();
    };

    var editInit = function() {
        $("#other-list > div").removeClass("edit-status");
        $("#other-list .mt-edit").click(function(){
            $("#other-list .mr_cancel").click();
            $(this).parent().parent().parent().parent().parent().parent().addClass("edit-status");
            $("#other-list .error").parent().parent().hide();

            $(".mt_titleName").blur(function() {
                if($(this).val() == "" ){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
            $(".mt_titleContent").blur(function() {
                if($(this).hasClass('mt_titleContent') && $(this).val() == ""){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
        });

        $("#other-list .mr_cancel").click(function(){
            $(this).parent().parent().parent().removeClass("edit-status");
        });

        $("#other-list input[type=submit]").unbind("click").bind("click",function(e){
            corSubmit(this,'#other-list .infopl-edit');
        });
    
        $("#other-list .mr_del").unbind("click").bind("click",function(e){
            var otherid = $(this).parent().parent().attr("data-id");
            if(!$('.jm-mask').html()){
                $('#other-list').append('<div class="jm-mask"></div>');
                $("#jm_popup_loading").show();
            }else{
                $(".jm-mask,#jm_popup_loading").show();
            }
            var ss = {
                    "id":otherid
                };

            new IO({
                url: "http://icebear.me/Resume/userDefineDel?access=1",
                type: 'GET',
                data: ss,
                dataType: 'json',
                success: function(data) {
                    console.log('request code base data is success!' + data);
                    setTimeout(function(){
                        KISSY.use('jmPopCor', function (a, b) {new b});
                        $(".jm-mask,#jm_popup_loading").hide();
                    },1000);
                    
                },
                error: function() {
                    console.log('request code base data is error!' + data);
                    $(".jm-mask,#jm_popup_loading").hide();
                    $('<span for="mr_name" generated="true" class="error">修改失败，请稍后重试</span>').insertBefore($("#other-list .mr_save"));
                }
            });
            e.stopPropagation();
        });
        
        $("#other-list .mt-edit-add").unbind("click").bind("click",function(e){
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">自定义标题</td> <td><input type="text" id="mt_titleName" name="mt_titleName" class="ed_name mt_titleName" autocomplete="off" value="" placeholder="请输入自定义标题"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">内容</td> <td> <textarea contenteditable="true" id="mt_titleContent" name="mt_titleContent" class="ed_name mt_titleContent mt_base" ></textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div>';
            $('#other-list').append(html);
            $("#other-list .mt-edit-add").hide();
            $(".mt_titleName,.mt_titleContent").blur(function() {
                if((!$(this).hasClass('.mt_titleContent') && $(this).val() == "") || ($(this).hasClass('mt_titleContent') && $(this).val() == "") ){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
            $("#other-list .infopl-add .mr_save").unbind("click").bind("click",function(e){
                corSubmit(this, '#other-list .infopl-add');
            });
            $("#other-list .infopl-add .mr_cancel").click(function(){
                $(".infopl-add").remove();
                $("#other-list .mt-edit-add").show();
            });

        });

    }

    var corSubmit = function(that, className){
        var defineId = $(that).parent().parent().attr("data-id") || '';
        if(defineId) className += '[data-id=' + defineId + ']';
        var mt_titleName = KISSY.one(className + ' .mt_titleName').val();
        if(!mt_titleName){
            KISSY.one(className + ' .mt_titleName').parent().parent().next('tr').show();
            return;
        }
        
        var mt_titleContent = KISSY.one(className + ' .mt_titleContent').val();
        if(!mt_titleContent){
            KISSY.one(className + ' .mt_titleContent').parent().parent().next('tr').show();
            return;
        }
        if(!$('.jm-mask').html()){
            $('#other-list').append('<div class="jm-mask"></div>');
            $("#jm_popup_loading").show();
        }else{
            $(".jm-mask,#jm_popup_loading").show();
        }
        var ss = {
                "titleName":mt_titleName,
                "titleContent":mt_titleContent,
                "defineId":defineId
            };

        new IO({
            url: "http://icebear.me/Resume/userDefine?access=1",
            type: 'GET',
            data: ss,
            dataType: 'json',
            success: function(data) {
                console.log('request code base data is success!' + data);
                setTimeout(function(){
                    KISSY.use('jmPopCor', function (a, b) {new b});
                    $(".jm-mask,#jm_popup_loading").hide();
                },1000);
                
            },
            error: function() {
                console.log('request code base data is error!' + data);
                $(".jm-mask,#jm_popup_loading").hide();
                $('<span for="mr_name" generated="true" class="error">修改失败，请稍后重试</span>').insertBefore($("#other-list .mr_save"));
            }
        });
    }

    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});


KISSY.add('jmPopSet', function(S, Node, Base, IO, Mu) {
    
    function a (argument) {
        KISSY.one('.setting-feed').on("click",function(){
            KISSY.one('.setting-head').hide();
            KISSY.one('#feedback-con').show();
            KISSY.one(".ensure").on("click",function(){
                config.valid();
            });
        });
        KISSY.one('.setting-logout').on("click",function(){

            window.jmLogin.logout();
            KISSY.one('#jm_pop_tab').hide();
        });
    }

    var config = {
        hide: function(a) {
            a.fadeOut()
        },
        show: function(a) {
            a.fadeIn()
        },
        setCountdown: function(a, b) {
            var c = this,
                d = setTimeout(function() {
                    0 == a && (clearTimeout(d), b.addClass("dn")), c.setCountdown(a - 1, b)
                }, 1e3)
        },
        valid: function() {
            var a = $("#product-fb");
            var l, b = this,
                c = $.trim(a.find("textarea").val()),
                d = c.length,
                e = $.trim(a.find("input").val()),
                f = document.URL,
                g = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
                h = !1,
                i = $("#feedback-con .error"),
                j = e.length,
                k = i.find("i");
            j = e.length, l = !0, ("" == c || d > 200) && (i.removeClass("dn").find("span").text("你还没填任何反馈呢"), k.addClass("txt"), b.setCountdown(3, i), l = !1), "" != e && (h = g.test(e)), h || "" == e || (i.removeClass("dn").find("span").text("请输入有效的邮箱地址"), k.hasClass("txt") && k.removeClass("txt"), b.setCountdown(3, i), l = !1), h && j > 100 && (i.removeClass("dn").find("span").text("请输入100字以内的邮箱地址"), k.hasClass("txt") && k.removeClass("txt"), b.setCountdown(3, i), l = !1), l && $.ajax({
                url: "http://service.lagou.com/feedback",
                type: "POST",
                data: {
                    userId: '',
                    content: c,
                    loginEmail: '',
                    feedbackEmail: e,
                    feedbackPage: f
                },
                dataType: "jsonp",
                jsonp: "callback",
                success: function (json) {//客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
                    if(json.actionErrors.length!=0){
                           alert(json.actionErrors);
                    }
                    //genDynamicContent(qsData,type,json);
                },
                complete: function(a){
                    //$.unblockUI({ fadeOut: 10 }); 
                },
                error: function(xhr){
                //jsonp 方式此方法不被触发.原因可能是dataType如果指定为jsonp的话,就已经不是ajax事件了
                //请求出错处理
                    KISSY.one('.feedback-ret').html("反馈失败").show();
                    KISSY.one('#product-fb').hide();
                }
            }).done(function(a) {
                a.success ? (config.hide(feedback), $("#product-fk .fk-suc").removeClass("dn"), b.setCountdown(3, $("#product-fk .fk-suc"))) : alert(a.msg)
            })
        }
    };

    var init = function(_config) {
        //var g = {};
       
        //var h = Mu.to_html(window.jm_jminer.template.jobWebSet, g);  
        
        //KISSY.one('#other-list').after(h);
        a();
    };

    return init;

},
{
    requires: ["node", "base", "ajax", "mu"]
});



KISSY.add('jmPopOpenQuestion', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code open question data is success!');
                console.log(data);
                processCodeBaseData(data);
                
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var dragInit = function(argument) {
        !$("#jm-mousemove"), $("body").append("<div id='jm-mousemove'></div>");
        //var oBar = document.getElementById("bar");
        startDrag($('.mt_base'),document.getElementById("jm-mousemove"));
    };

    var hoverInit = function() {
        $("#openqs-list .ft").hover(function(){
            $(this).toggleClass('hover');
            $("#openqs-list .ft .mt-edit").toggleClass('dn');
        });
        
        $('#oqs-grid').hover(function(){
            $('#oqs-grid').toggleClass('oqs_hover_gridicon');
          
        },function(){
            $('#oqs-grid').toggleClass('oqs_hover_gridicon');
        });

        $('#oqs-list').hover(function(){
            $('#oqs-list').toggleClass('oqs_hover_listicon');
          
        },function(){
            $('#oqs-list').toggleClass('oqs_hover_listicon');
        });
        
        
        // $('#oqs-list .oqs-list-gery').hover(function(){
        //     if ($('#openqs-list #oqs-list').hasClass('oqs-list')) {
        //         $('#oqs-list').removeClass("oqs-list").addClass("oqs-list-gery");
        //     }
        // },function(){
           
        //     $('#oqs-list').removeClass("oqs-list-gery").addClass("oqs-list");
            
        // });
      
    };

    var toggleInit = function() {
        $(".oqs-back").click(function(){
            KISSY.one('#jm-content').toggleClass('jm_hidden');
            KISSY.one('#jm_pop_tab').addClass('.jm_pop_tab_min');
            KISSY.one('.plugin_quickwrite').removeClass('open');
            KISSY.one('.qw-openqz').parent().removeClass('current');

        });
        $('#oqs-list').click(function(){
           $("#oqs-list").attr("class","oqs-list-gery");
           $("#oqs-grid").attr("class","oqs-grid");
            KISSY.all('.infopl .scd').hide();
        });
        $('#oqs-grid').click(function(){
            $("#oqs-grid").attr("class","oqs-grid-gery");
            $("#oqs-list").attr("class","oqs-list");
            KISSY.all('.infopl .scd').show();
        });
         $(".ot-delete").click(function(){
            $(".ot_delete_pop").removeClass("dn");
            var dataid = $(this).attr('data-id');
            var datatitle = $(this).attr('data-title');
            if (datatitle.length>10) {
                datatitle = datatitle.substr(0,10);
                datatitle+='...';
            }
            $(".ot_delete_pop .open-title").text(datatitle);
            $(".ot_delete_pop .ot_del_ok").attr('data-id',dataid);
          });
          $(".ot_delete_pop .ot_del_cancel").click(function(){
            $(".ot_delete_pop").addClass("dn");
          });
  
    };

    

    var processCodeBaseData = function(data) {
        var resume_count = '我的简历 '+data.content.counter[1]+'/'+data.content.counter[0];
        var userstatu = data.content.userstatu;
      //  console.log("userstatu"+userstatu);
        if (userstatu == "0") {
            $('.qw-nav .quick-write').css({ opacity:0.4});
            KISSY.all("#jm_pop_tab .plugin_quickwrite .qw-openqz").on("click", 
            function(event) {
                window.open('http://icebear.me/user/recheckemail');
                //window.location.href="http://icebear.me/user/recheckemail";
            });
        }else{
            KISSY.all("#jm_pop_tab .plugin_quickwrite .qw-openqz").on("click", 
            function(event) {
                //KISSY.use('jmPopOpenQuestion', function (a, b) {new b});
                //new f('#jm_pop_tab', 'width: 300px; ', 0.005, 'easeOut').run(); 
               KISSY.all('#jm-content').toggleClass('jm_hidden');
               KISSY.one('.plugin_quickwrite').toggleClass('open');
               KISSY.one('.qw-openqz').parent().toggleClass('current');
               KISSY.one('#jm_pop_tab').toggleClass('.jm_pop_tab_min');

               if (KISSY.one('#jm_pop_tab').css('width') == '380px') {
                 $('#resumeEmptyNotice').addClass('jm_hidden');
                    $('.empty-flag').addClass('jm_hidden');
                    $('#jm_pop_tab').css('width','');
                    event.stopPropagation();
               }
            
               event.stopPropagation();
            });
        }
        $('.qw-edit').find("span").text(resume_count);
        if (data.content.counter[1] == 0 || data.content.counter[1] == "") {
            $('.qw-nav .quick-write').css({ opacity:0.4});
            if (KISSY.one('#jm_pop_tab').css('width') == '38px') {
                $('#resumeEmptyNotice').removeClass('jm_hidden');
                $('.empty-flag').removeClass('jm_hidden');
                $('#jm_pop_tab').css('width','380px');
                KISSY.one("#resumeEmptyNotice .jm_renclose").on("click", 
                function(event) {
                    $('#resumeEmptyNotice').addClass('jm_hidden');
                    $('.empty-flag').addClass('jm_hidden');
                    $('#jm_pop_tab').css('width','');
                    event.stopPropagation();
                });
            }
            

        }else{
            
        }
        var html = '';
        if(data.content && data.content.customize_list[0]){
            html += '<div class="oqs-tool"><a  class="oqs-back"></a><i id="oqs-list" class="oqs-list"></i><i id="oqs-grid" class="oqs-grid-gery"></i></div>';
            var eList = data.content.customize_list;
            console.log(eList);
            for(var i = eList.length - 1; i >= 0; i--){
                if(eList[i].title.length >=10){
                    //var a = new Array
                    //var title = eList[i].title.substr(0,10);
                    html += '<div> <div class="infopl"><table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>    <tr class="ft"> <td class="mt_base" id="mt_titleName">' + eList[i].title.substr(0,10) +'...</td><td><div class="mt-edit dn" data-title="' + eList[i].title+ '" data-content="' + eList[i].content + '"><i></i></div></td></tr><tr class="scd"><td  class="mt_base"><pre id="mt_titleContent">' + eList[i].content + '</pre></td> </tr> </tbody> </table> </div>';
                    html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '" data-title="' + eList[i].title + '" data-content="' + eList[i].content + '" >  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr>  <td><input type="text" id="mt_titleName" name="mt_titleName" class="ed_name mt_titleName" autocomplete="off" value="' + eList[i].title + '" placeholder="请输入自定义标题"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr>  <td> <textarea contenteditable="true" id="mt_titleContent" name="mt_titleContent" class="ed_name mt_titleContent" >' + (eList[i].content ? eList[i].content : '') + '</textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">请输入1-800个字符</span></td></tr> </tbody> </table> <div class="ot_button"><a class="ot-delete"  data-id="' + eList[i].id + '" data-title="' + eList[i].title + '" >删除</a>  <a href="javascript:;" class="mr_cancel">取消</a> <input type="submit" class="mr_save" value="保存">  </div> </div> </div>';
                }else{
                    html += '<div> <div class="infopl"><table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>    <tr class="ft"> <td class="mt_base" id="mt_titleName">' + eList[i].title.substr(0,10) + '</td><td><div class="mt-edit dn" data-title="' + eList[i].title+ '" data-content="' + eList[i].content + '"><i></i></div></td></tr><tr class="scd"><td  class="mt_base"><pre id="mt_titleContent">' + eList[i].content + '</pre></td> </tr> </tbody> </table> </div>';
                    html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '" data-title="' + eList[i].title + '" data-content="' + eList[i].content + '" >  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr>  <td><input type="text" id="mt_titleName" name="mt_titleName" class="ed_name mt_titleName" autocomplete="off" value="' + eList[i].title + '" placeholder="请输入自定义标题"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr>  <td> <textarea contenteditable="true" id="mt_titleContent" name="mt_titleContent" class="ed_name mt_titleContent" >' + (eList[i].content ? eList[i].content : '') + '</textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">请输入1-800个字符</span></td></tr> </tbody> </table> <div class="ot_button"><a class="ot-delete"  data-id="' + eList[i].id + '" data-title="' + eList[i].title + '" >删除</a>  <a href="javascript:;" class="mr_cancel">取消</a> <input type="submit" class="mr_save" value="保存">  </div> </div> </div>';
             
                }
            }
            html += '<div class="jm_mt_edit_add"><i></i><input class="mt-edit-add" value="新建" type="button"/></div><div  class="ot_delete_pop dn"><p class="text">确认删除</p><p class="text">“<span class="open-title"></span>”？</p><div style="margin-top: 10px;"> <span class="ot_del_cancel">取消</span><span class="ot_del_ok" data-id="">确认</span> </div></div>';
        }else{
            html += '<div class="oqs-tool"><a class="oqs-back"></a></div><div class="infopl"><div class="ot-empty"><div class="ot-empty-img"></div>还没有数据喔～<br/>点击下方新建开始创建吧！</div> </div><div class="jm_mt_edit_add"><i></i><input class="mt-edit-add" value="新建" type="button"/></div>';
        }
        $('#openqs-list').html(html);

        dragInit();
        editInit();
        hoverInit();
        toggleInit();
    };

    
    var editInit = function() {
        $("#openqs-list > div").removeClass("edit-status");
        $("#openqs-list .mt-edit").click(function(){
            $("#openqs-list .mr_cancel").click();
            $(this).parent().parent().parent().parent().parent().parent().addClass("edit-status");
            $("#openqs-list .error").parent().parent().hide();
            //console.log($(this).attr("data-title"));
            $(this).parent().parent().parent().parent().parent().next().find('.mt_titleName').val($(this).attr("data-title"));
            $(this).parent().parent().parent().parent().parent().next().find('.mt_titleContent').val($(this).attr("data-content"));
            // $(".mt_titleName").blur(function() {
            //     if($(this).val() == "" ){
            //         $(this).parent().parent().next('tr').show();
            //     }else{
            //         $(this).parent().parent().next('tr').hide();
            //     }
            // });
            // $(".mt_titleContent").blur(function() {
            //     if($(this).hasClass('mt_titleContent') && $(this).val() == ""){
            //         $(this).parent().parent().next('tr').show();
            //     }else{
            //         $(this).parent().parent().next('tr').hide();
            //     }
            // });

        });

        $("#openqs-list .mr_cancel").click(function(){
            $(this).parent().parent().parent().removeClass("edit-status");
        });


        $("#openqs-list input[type=submit]").unbind("click").bind("click",function(e){
            corSubmit(this,'#openqs-list .infopl-edit');
        });
    
        $("#openqs-list .ot_del_ok").unbind("click").bind("click",function(e){
            //var otherid = $(this).parent().parent().attr("data-id");
            var otherid = $(this).attr("data-id");
            if(!$('.jm-mask').html()){
                $('#openqs-list').append('<div class="jm-mask"></div>');
                $("#jm_popup_loading").show();
            }else{
                $(".jm-mask,#jm_popup_loading").show();
            }
            var ss = {
                    "id":otherid
                };

            new IO({
                url: "http://icebear.me/Resume/userCustomizeDel?access=1",
                type: 'GET',
                data: ss,
                dataType: 'json',
                success: function(data) {
                    console.log('request code base data is success!' + data);
                    setTimeout(function(){
                        KISSY.use('jmPopOpenQuestion', function (a, b) {new b});
                        $(".jm-mask,#jm_popup_loading").hide();
                    },1000);
                    
                },
                error: function() {
                    console.log('request code base data is error!' + data);
                    $(".jm-mask,#jm_popup_loading").hide();
                    $('<span for="mr_name" generated="true" class="error">修改失败，请稍后重试</span>').insertBefore($("#openqs-list .mr_save"));
                }
            });
            e.stopPropagation();
        });
        
        $("#openqs-list .mt-edit-add").unbind("click").bind("click",function(e){
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr>  <td><input type="text" id="mt_titleName" name="mt_titleName" class="ot_input mt_titleName" autocomplete="off" value="" placeholder="标题"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr>  <td> <textarea contenteditable="true" id="mt_titleContent" name="mt_titleContent" class="ot_input mt_titleContent mt_base" placeholder="内容"></textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="ot_button"> <a href="javascript:;" class="mr_cancel">取消</a> <input type="submit" class="mr_save" value="保存"> </div> </div>';
            $('#openqs-list').append(html);
            $('.ot-empty').hide();
            $("#openqs-list .mt-edit-add").attr('disabled',true);
            $("#openqs-list .jm_mt_edit_add").addClass('add_grey');
            //$("#openqs-list .mt-edit-add").hide();
            $(".mt_titleName,.mt_titleContent").blur(function() {
                if((!$(this).hasClass('.mt_titleContent') && $(this).val() == "") || ($(this).hasClass('mt_titleContent') && $(this).val() == "") ){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
            $("#openqs-list .infopl-add .mr_save").unbind("click").bind("click",function(e){
                corSubmit(this, '#openqs-list .infopl-add');
            });
            $("#openqs-list .infopl-add .mr_cancel").click(function(){
                $("#openqs-list .mt-edit-add").attr('disabled',false);
                $("#openqs-list .jm_mt_edit_add").removeClass('add_grey');
                $(".infopl-add").remove();
                $("#openqs-list .mt-edit-add").show();
                $('.ot-empty').show(); 
            });
        });

    }

    var corSubmit = function(that, className){
        var defineId = $(that).parent().parent().attr("data-id") || '';
        if(defineId) className += '[data-id=' + defineId + ']';
        var mt_titleName = KISSY.one(className + ' .mt_titleName').val();
        if(!mt_titleName){
            KISSY.one(className + ' .mt_titleName').parent().parent().next('tr').show();
            return;
        }
        
        var mt_titleContent = KISSY.one(className + ' .mt_titleContent').val();
        if(!mt_titleContent){
            KISSY.one(className + ' .mt_titleContent').parent().parent().next('tr').show();
            return;
        }else if (mt_titleContent.length>800) {
            KISSY.one(className + ' .mt_titleContent').parent().parent().next('tr').next('tr').show();
            return false;
        }
        if(!$('.jm-mask').html()){
            $('#openqs-list').append('<div class="jm-mask"></div>');
            $("#jm_popup_loading").show();
        }else{
            $(".jm-mask,#jm_popup_loading").show();
        }
        var ss = {
                "titleName":mt_titleName,
                "titleContent":mt_titleContent,
                "defineId":defineId
            };

        new IO({
            url: "http://icebear.me/Resume/userCustomize?access=1",
            type: 'GET',
            data: ss,
            dataType: 'json',
            success: function(data) {
                console.log('request code base data is success!' + data);
                setTimeout(function(){
                    KISSY.use('jmPopOpenQuestion', function (a, b) {new b});
                    $(".jm-mask,#jm_popup_loading").hide();
                },1000);
                
            },
            error: function() {
                console.log('request code base data is error!' + data);
                $(".jm-mask,#jm_popup_loading").hide();
                $('<span for="mr_name" generated="true" class="error">修改失败，请稍后重试</span>').insertBefore($("#openqs-list .mr_save"));
            }
        });
    }

    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});

KISSY.add('jmPopUserStatu', function(S, Node, Base, IO) {
        
    var init = function(_config) {
        requestBaseData();
    };

    var requestBaseData = function() {
        getCode({type: 'edu'});
        //getHistoryPrice({type: 'amazon'});
    };

    var getCode = function(_config) {
        var type = _config.type,
            url = 'http://icebear.me/User/getOtherinfo';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request code base data is success!');
                processCodeBaseData(data);
            },
            error: function() {
                console.log('request code base data is error!');
            }
        });
    };

    var processCodeBaseData = function(data) {
        var html = '';
        if(data.content && data.content.otherinfo_list[0]){
            var eList = data.content.otherinfo_list;
            var ordering = 0;
            for(var i = eList.length-1; i >= 0 ; i--){
                html += '<div class="">  <div class="mt-title"><div class="metil mt10">其他信息' + (ordering+1) + '</div><div class="mt-edit"><i></i>编辑</div></div>  <div class="infopl" data-id="' + eList[i].id + '"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody><tr> <td width="76" class="col999">自我评价</td> <td class="mt_base" id="mt_selfIntro">' + eList[i].selfIntro + '</td> </tr> <tr> <td width="76" class="col999">爱好特长</td> <td class="mt_base" id="mt_skill">' + eList[i].skill + '</td> </tr> <tr> <td width="76" class="col999">其他技能</td> <td class="mt_base" id="mt_hobbies">' + eList[i].hobbies + '</td> </tr> <tr> <td width="76" class="col999">个人成就</td> <td class="mt_base" id="mt_trainingPlace">' + eList[i].trainingPlace + '</td> </tr> <tr> <td width="76" class="col999">个人简介</td> <td class="mt_base" id="mt_profile">' + eList[i].profile + '</td> </tr> </tbody> </table> </div>';
                
                ordering++;
                html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>  <tr> <td width="76" class="col999">学历</td><td><select id="mt_education" name="mt_education" class="ed_name mt_education"><option value="大专" ' + ((eList[i].education) == "大专" ? "selected=\"selected\"" : "") + '>大专</option><option value="本科" ' + ((eList[i].education) == "本科" ? "selected=\"selected\"" : "") + '>本科</option><option value="硕士" ' + ((eList[i].education) == "硕士" ? "selected=\"selected\"" : "") + '>硕士</option><option value="博士" ' + ((eList[i].education) == "博士" ? "selected=\"selected\"" : "") + '>博士</option><option value="其他" ' + ((eList[i].education) == "其他" ? "selected=\"selected\"" : "") + '>其他</option></select></td>  </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="' + eList[i].schoolName + '" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_eduyear_div">';
                html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_eduyear" tip="tip3" ><option value="">请选择</option>';
                for (var j = 2017; j >= 2000; j--) {
                    html += '<option value="'+j+'" ' + (parseInt(eList[i].endDate) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                };
                html += '</select>年</div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">所学专业</td> <td><input type="text" id="mt_professional" name="mt_professional" class="ed_name mt_professional" autocomplete="off" value="' + eList[i].professional + '" placeholder="请输入所学专业"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">奖惩情况</td> <td> <input type="text" id="mt_award" name="mt_award" class="ed_name mt_award" autocomplete="off" value="' + (eList[i].reward_punish ? eList[i].reward_punish : '') + '" placeholder="请输入奖励"></td> </tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="mt-title"> <div class="metil mt10">社团经历</div>  </div> <div class="infopl">  <div class="mr_empty_add dn mt-edit-add" style="display: block;"> <i></i><span>添加校内实践</span> </div> </div>';
        }
        $('#otherinfo-list').html(html);
        
        
    };


 
    //去除decodeURIComponent方法不能解析的字符
    var removeSpecailChar = function(_str) {
        return _str.replace(/%[0-9a-z]{2}/gi, function(_) {
            return _.indexOf('%2') > -1 ? _ : _.indexOf('%3') > -1 ? _ : '';
        });
    };

    var shuffle = function(_str) {
        try{
            return decodeURIComponent(removeSpecailChar(_str));
        }catch(e){
            return _str;
        }
    };

    return init;

},
{
    requires: ["node", "base", "ajax"]
});
