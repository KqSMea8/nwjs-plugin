/*! 2014-06-11 12:06:41 */
var sortBy = function(field, reverse, primer){         //定义排序方法
    var key = primer ?  
       function(x) {return primer(x[field])} :  
       function(x) {return x[field]};
    reverse = [-1, 1][+!!reverse]; 
    return function (a, b) {  
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));  
    };
}
    
function getTemplate() {
    var a = {},
    b = JSON.parse(localStorage.jm_config || null);
    if (b && b.template) for (var c in b.template) a[c] = localStorage["jm_temp_" + c];
    return a
}

function jm_getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
    }
function getAccountId() {
    return "1"; 
}
function checkIsLogin() {
    var a = JSON.parse(localStorage.jm_login || null);
    return a && "true" == a.login ? !0: !1 || a && true == a.login ? !0: !1
}
function autoFitHeight() {
    return
}
function setBackgroundLocalStore(a) {
    jm_tools.getMessageFromBackground({
        operate: "setLocalStorage",
        data: a
    },
    function() {})
}

function initEvent() {
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
    KISSY.all("#jm_pop_tab .jm_close") && KISSY.all("#jm_pop_tab .jm_close").on("click", 
    function() {
        window.close()
    }),
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

    
    
    KISSY.Event.delegate(document, "click", ".jm-logo-lock", 
    function(a) {
        var b = KISSY.one(a.currentTarget);
        b && (b.toggleClass("jm_chk_checked"), b.hasClass("jm_chk_checked") ? (b.hasClass("jm_switch_lock") ? (window.jm_jminer.isLock = "true", setBackgroundLocalStore({
                isLock: "true"
            })) : "") : (b.hasClass("jm_switch_lock") ? (window.jm_jminer.isLock = "false", setBackgroundLocalStore({
                isLock: "false"
            })) : ""));
    });
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
function htmlWhenLogout() {
    console.log("htmlWhenLogout"),
    KISSY.one("#jm_login .login_name") && KISSY.one("#jm_login .login_name").html(""),
    KISSY.one("#jm_login") && KISSY.one("#jm_login").removeClass("jm_islogin"),
    KISSY.one("#jm_pop_tab") && KISSY.one("#jm_pop_tab").fire("logout")
}
function AliStatistics() {
    var a = KISSY,
    b = a.DOM,
    c = (a.Event, a.all),
    d = "cache=16f63b4&gmkey=jm_search&gokey=sfrom=jm&t=1369194202558&&cna=" + (window.jm_jminer.mmstat_cna ? window.jm_jminer.mmstat_cna: "null") + "&isbeta=7&logtype=2&click=jm.jm_jm_addin.{{browser}}.";
    c("body").delegate("click", ".jm-stat[data-stat]", 
    function(c) {
        var e = c.target,
        f = a.one(e);
        if (f.hasClass("jm-stat") || (e = b.parent(e, ".jm-stat"))) {
            var g = b.attr(e, "data-stat");
            g && a.Stat && a.Stat(d + g, !0)
        }
    });

    //setTimeout(function(){KISSY.Stat("action=web.open.popup_page");}, 1000);
}

var jm_global_popup_obj = null;

function popup_init() {
    loadExtraResource();
   
    initEvent(), jmLogin.init();
    var isLogin = checkIsLogin(); 
    console.log(new Date().getTime() + '----' + isLogin);

   jm_tools.getMessageFromBackground({
        operate: "getLocalStorage",
        data: {"key": 'jm_login'}
    }, function(data) {
        data = JSON.stringify(data);
        var obj = JSON.parse(data);
        obj = obj.value;
        obj = JSON.parse(obj);
        checkuserid = obj.ot_home_uid;
        console.log(checkuserid);
        console.log('user------' +  checkuserid);
        // var formlink =  window.location.href;
        // formlink +='-display';
        if (checkuserid) {
            //var src = '123';
            var src='https://www.google-analytics.com/collect?v=1&t=pageview&tid=UA-76243985-1&cid='+checkuserid+'&dp=popup';
            KISSY.all('#jm_pop_tab .analyticsuid').attr('src',src);
        }
    });

    chrome.cookies.get({url:"http://www.icebear.me",name:"ot_home_gotourl"},function(cookie){
        var gotourl = cookie ? cookie.value : '';
        setBackgroundLocalStore({
            gotourl: gotourl
        });
        // getMessageFromBackground({
        //     console.log(data);
        // });
        //从bg来判断
        // jm_tools.getMessageFromBackground({
        //     operate: "getLocalStorage",
        //     data: {"key": 'jm_login'}
        // }, function(data) {
        //     console.log('jobsminer------' + data);
        //     //console.log(eval(data));
        //     var data1 = eval(data);
        //    // console.log(data1["value"]);
        //    var data2 = data1["value"];
        //    data2 =JSON.parse(data2);
        //     console.log(data2["ot_home_login"]);
        //     if (data2["ot_home_login"]) {
        //          KISSY.use("jmPopup", 
        //         function(a, b) {
        //             jm_global_popup_obj = new b;
        //         });
        //      }else{
        //         if(isLogin.toString() == "true"){
        //             //已登录
        //             KISSY.use("jmPopup", 
        //             function(a, b) {
        //                 jm_global_popup_obj = new b;
        //             });
        //         // }else if(!gotourl){
        //         //     //未登录
        //         //      //window.jmLogin.logout();
        //         //     KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
        //         }else{
        //             KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
        //         }
        //      }
        // });
      
        //if(isLogin.toString() == "true" && !gotourl){
        if(isLogin.toString() == "true"){
            //已登录
            KISSY.use("jmPopup", 
            function(a, b) {
                jm_global_popup_obj = new b;
            });
        // }else if(!gotourl){
        //     //未登录
        //      //window.jmLogin.logout();
        //     KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
        }else{
            KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
        }
    });

    //检测新提醒
    KISSY.use('jmNewMessage', function(a, b) {var c = new b;});

}
function loadExtraResource() {
    return '';
}

KISSY.add('jmNewMessage', function(S, Node, Base, IO) {

    var init = function() {
        var url = 'http://api.walatao.com/tp/index/message/newc?uid=' + jm_tools.getUserId();

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                if(data.data[0].ctn == 0) {
                    $('#jm_pop_tab .remind-signs').hide();
                } else {
                    $('#jm_pop_tab .remind-signs').text((+data.data[0].ctn) > 99 ? '..' : data.data[0].ctn).show();
                    jm_tools.setPopupBadgeText((+data.data[0].ctn) > 9 ? 'N' : data.data[0].ctn);
                }
            },
            error: function(e) {
                $('#jm_pop_tab .remind-signs').hide();
            }
        });
    };

    return init;
}, {
    requires: ["node", "base", "ajax"]
});

var jmRuntime = "popup";
KISSY.add("jmPopup",
function(a, b, c, d, e) {
    function g(a, b) {
        return a.time > b.time ? -1: a.time < b.time ? 1: void 0
    }

    function h() {

        return;

    }
    function i() {
        var a = KISSY.one("#jm_del_confirm");
        a && a.remove()
    }
    function j() {
        //去掉登录框
        KISSY.all('.jm-register,#jm-logo').hide();
        //KISSY.all('.jm-register').hide();
        KISSY.all('.jm-logo-img-new').show(); 
        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').show();

        // var c = new b.Tabs("#jm_pop_tab", {
        //     triggerType: "click",
        //     switchTo: -1 
        // });
        // c.on("beforeSwitch", 
        // function(a) {
        //     /*if (1 == a.toIndex) {
        //         //var b = JSON.parse(localStorage.jm_login || null);
        //        // if (!b || "true" != b.login) return window.jmLogin.login(),
        //         //!1;
        //         v.openQueryKuaidiFrame();
        //         return 0;
        //     }*/
        // }),
        // c.on("switch", function(a) {
        //     var b = a.currentIndex;
        //     if(KISSY.one('.jm-tab:eq('+b+')').hasClass('tab-active')){
        //         return;
        //     }
        //     else{
        //         KISSY.all('.jm-tab').removeClass('tab-active');
        //         KISSY.one('.jm-tab:eq('+b+')').addClass('tab-active');
        //     }
        //     if(b == 0){
        //         KISSY.use('jmPopBase', function (a, b) {new b});
        //     }
        //     if(b == 1) {
        //         KISSY.use('jmPopEdu', function (a, b) {new b});
        //     }
        //     if(b == 2){
        //         KISSY.use('jmPopExp', function (a, b) {new b});
        //     }
        //     if(b == 3){
        //         KISSY.use('jmPopPro', function (a, b) {new b});
        //     }
        //     if(b == 4){
        //         KISSY.use('jmPopCor', function (a, b) {new b});
        //     }
        //     if(b == 6){
        //         KISSY.one("#jm_pop_tab").removeClass("show_tools_Change");
        //         //localStorage.jmToolsNotify = "false";
        //     }
        //     //KISSY.one("body").width(800),
        //     //return ;
        //     //1 == b && ( !has_query_tracker_info && v.getShipStatus(!0), KISSY.one(".jm_shipList") ? KISSY.one(".jm_shipList").fire("trackChange") : "", localStorage.hasShowAddrNotify = !0, jm_tools.setPopupBadgeText(0),v.openQueryKuaidiFrame());
        //     has_query_tracker_info = true;
        // }),
        // KISSY.one("#jm_pop_tab").on("logout", 
        // function() {
        //     c.switchTo(0)
        // });

        // var id = jm_getQueryString("id");
        // if(id){
        //     id = parseInt(id);
        //     if(id >= 0 && id <=4){
        //         console.log(id);
        //     }
        // }
        // else{
        //     id = 0;
        // }
        // c.switchTo(id);
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
        var a = jm_tools.getMessageFromBackground({
            operate: "getConfig",
            data: ""
        },startRuncb);
        function startRuncb(a) {
            console.log("startRun get config call back..");
            window.jm_jminer.isLock = a.isLock,
            window.jm_jminer.isShowTips = a.isShowTips,
            window.jm_jminer.isShowPushNotify = a.isShowPushNotify,
            window.jm_jminer.isShowDownBar = a.isShowDownBar;
            b.isLock = "false" == window.jm_jminer.isLock ? !1: !0,
            b.isShowTips = "false" == window.jm_jminer.isShowTips ? !1: !0,
            b.isShowPushNotify = "false" == window.jm_jminer.isShowPushNotify ? !1: !0,
            b.isShowDownBar = "false" == window.jm_jminer.isShowDownBar ? !1: !0;
            if(window.jm_jminer.isLock == "true"){
                KISSY.one('.jm-logo-lock').addClass('.jm_chk_checked');
            }else{
                KISSY.one('.jm-logo-lock').removeClass('.jm_chk_checked');
            }
            /*generateTemplateHtml(window.jm_jminer.template.sidebar, b, 
            function(a) {
                KISSY.use("jmTools", 
                function(b, c) {
                    new c(a)
                })
            })*/
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
    requires: ["switchable", "menubutton", "button", "mu"]
}),
KISSY.add("jmFeed", 
function(a, b) {
    function c(a, b, d) {
        var e = /[\u4e00-\u9fa5]/gi,
        f = a.match(e).length;
        return a.length + f > b ? c(a.substring(0, a.length - 1), b, !0) : a + (d ? "...": "")
    }
    function d(a) {
        var d = 10,
        e = {
            list: []
        };
        try {
            for (var f = (new XMLSerializer).serializeToString(a), g = KISSY.parseXML(f), h = KISSY.all(g), i = h.all("item"), j = KISSY.one("#jm_cuxiao_temp"), k = 0; k < i.length && d > k; k++) try {
                for (var l = i[k], m = KISSY.one(l), n = "", o = 0; o < l.children.length; o++) {
                    var p = l.children[o];
                    if ("content:encoded" == p.tagName) {
                        var q = (new XMLSerializer).serializeToString(p),
                        r = q.indexOf("<![CDATA[") + 9,
                        s = q.indexOf("]]>"),
                        t = q.substring(r, s);
                        j.html(t);
                        var u = KISSY.one("#jm_cuxiao_temp img");
                        n = u[0] ? u[0].src: ""
                    }
                }
                if ("" == n) continue;
                var v = m.one("title").text(),
                w = m.one("link").text(),
                x = v.lastIndexOf("@@@"),
                y = v.substring( - 1 == x ? 0: x + 3, v.length),
                z = 36;
                e.list.push({
                    text: y,
                    shortText: c(y, z),
                    link: w,
                    img: n
                })
            } catch(A) {
                continue
            }
        } catch(A) {
            console.log("get feed list error!!!")
        }
        for (var B = KISSY.all("#jm_cuxiao_list .ht_cuxiao_item"), o = 0; o < e.list.length; o++) B[o].remove();
        var C = b.to_html(window.jm_jminer.template.feed, e);
        KISSY.one("#jm_cuxiao_list").prepend(C)
    }
    function e() {
    }
    function f() {
        setTimeout(function() {
            e()
        },
        1e3)
    }
    return f
},
{
    requires: ["mu"]
}),
window.jm_jminer = {};
var jm_tools = {
    setPopupBadgeText: function(a) {
        isNaN(a) && (a = 0),
        localStorage.hasShowAddrNotify = "true";
        var b = localStorage.hasShowAddrNotify;
        b && "true" == b || a++,
        a > 0 ? (KISSY.one("#jm_pop_tab") ? KISSY.one("#jm_pop_tab").addClass("showBadge") : "", chrome.browserAction.setBadgeBackgroundColor({
            color: "#ff3c00"
        }), chrome.browserAction.setBadgeText({
            text: a.toString()
        })) : (KISSY.one("#jm_pop_tab") ? KISSY.one("#jm_pop_tab").removeClass("showBadge") : "", chrome.browserAction.setBadgeText({
            text: ""
        }))
    },
    getUserId:function(){
        var userid = 0 ;
        if(localStorage.jm_login){
            var t1 = JSON.parse(localStorage.jm_login);
            userid = (t1.login ? parseInt(t1.jm__userid) : 0);
        }
       
        if(isNaN(userid))
            userid = 0;
        return userid;
    },
    //JSON转化操作
    toJsonObj: function(str){
        if(typeof str!=='string') return {};
        try{
            return JSON.parse(str);
        }catch(e){
            return {};
        }
    },
    getMessageFromBackground:function(a, b) {
                        
       !(typeof sogouExplorer == "object") && chrome.extension.sendMessage(a, 
        function(c) {
            return "" == c || void 0 == c ? void console.log("Get " + a.operate + "Info from background.js error") : void b(c)
        });
        (typeof sogouExplorer == "object") && sogouExplorer.extension.sendRequest( a, 
        function(c) {
            return "" == c || void 0 == c ? void console.log("Get " + a.operate + "Info from background.js error") : void b(c)
        });
        return true;
    },
    getDays: function (year, month) {
        // month 取自然值，从 1-12 而不是从 0 开始
        return new Date(year, month, 0).getDate()

        // 如果 month 按 javascript 的定义从 0 开始的话就是
        // return new Date(year, month + 1, 0).getDate()
    },
    changeDays :function (that){
        var nowday = $(that).parent().parent().find('.mt_birday_div select').val();
        var year = $(that).val();
        var month = $(that).parent().parent().find('.mt_birmonth_div select').val();
        var days = jm_tools.getDays(year,month) || 0;
        var html = '';
        if(days){
            html += '<select name="mt_birday" id="mt_birday" class="ed_name valid mt_birday" tip="tip3" validate="required"><option value="">请选择</option>';
            for (var j = 1; j <= days; j++) {
                html += '<option value="'+j+'" ' + (nowday == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
            };
            html += '</select>日';
            //KISSY.one('.mt_birday_div').html(html);
            $(that).parent().parent().find('.mt_birday_div').html(html);
        }
        
    }
},
getWalapayTimeout = null;

KISSY.add('jmMyMsg', function(S, Node, Base, IO) {

    var currentPage = 0;
    var pageSize = 3;
    var pageCount = 8;
    var baseData = {};

    var getUserId = function() {
        return jm_tools && jm_tools.getUserId();
    };

    var init = function() {
        requestBaseData();
    }

    var requestBaseData = function() {
        var url = 'http://api.walatao.com/tp/index/message/?uid=' + getUserId() + '&page=0&ctn=24';

        new IO({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log('request msg base data is success!');
                if(!data.data || data.data.length < 1) {
                    $('#jm_myremind_id .msgRemind ul').html('<li>暂时没有消息</li>');
                    $('#jm_myremind_id .msgRemind .page').hide();
                    return;
                }
                baseData = data;
                localStorage.msgCount = data.data.length;
                bindEvent();
                processPage();
                //processData(data);
            },
            error: function(e) {
                console.log('request msg base data is error!');
                console.log(e);

                localStorage.msgCount = 0;
                jm_tools.setPopupBadgeText(0);
                $('#jm_myremind_id .msgRemind ul').html('<li>暂时没有消息</li>');
                $('#jm_myremind_id .msgRemind .page').hide();
                $('#jm_myremind_id .remind .msg-link').css('display', 'none');
            }
        });
    };

    var unixTimeToLocalTime = function(unixtime) {
        var date = new Date(parseInt(unixtime) * 1000);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + (+date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    };

    var processData = function(_data) {
        var tempStr = '';
        //_data && _data.data && _data.data.length > pageCount && (_data.data = _data.data.subArray(0, pageCount)) && $('#jm_myremind_id .remind .msg-link').css('display', 'block');;

        _data && _data && _data.map(function(it) {
            var temp = it.readflag == 0 ? '<li><i class="signs"></i>' : '<li>';
            var type = '<span class="type">';
            var message = eval('(' + it.message + ')');
            var content = '<span class="text"><a href="' + message.location + '" title="' + message.goodsname + '" target="_blank">' + (message.goodsname.length > 20 ? message.goodsname.substring(0, 20) + '..' : message.goodsname) + '</a>';
            
            switch(it.type) {
                case 'stock':
                    type += '【有货】</span>';
                    content += '已有货</span>';
                    break;
                case 'price':
                    type += '【降价】</span>';
                    content += '已降价，现价<label class="now-price">' + (message.symbol ? message.symbol : '') + message.c_price + '</label></span>';
                    break;
                case 'express':
                    type += '【包裹】</span>';
                    content += '状态已更新，<b class="end-step" title="' + message.last_status + '">' + (message.last_status.length > 20 ? message.last_status.substring(0, 16) + '..' : message.last_status) + '</b></span>';
                    break;
            }
            temp += type + content;
            temp += '<p class="time">' + unixTimeToLocalTime(it.ts) + '</p></li>';
            tempStr += temp;
        });
        KISSY.one('#jm_myremind_id .msgRemind ul').html(tempStr);
    };
    

    var bindEvent = function() {
        $('#jm_myremind_id .msgRemind .page').on('click', function() {
            $('#jm_myremind_id .msgRemind .page').removeClass('cur');
            changePage(+$(this).addClass('cur').attr('page-index'));
        });
    };

    var processPage = function() {
        if(baseData.data.length > 8 && baseData.data.length < 16) {
            $('#jm_myremind_id .msgRemind .page.one').css('display', 'inline-block');
            $('#jm_myremind_id .msgRemind .page.two').css('display', 'inline-block');
            $('#jm_myremind_id .msgRemind .pageBar').css('right', '0px').css('width', '80px');
        } else if(baseData.data.length > 16) {
            $('#jm_myremind_id .msgRemind .page').css('display', 'inline-block');
            $('#jm_myremind_id .remind .msg-link').css('display', 'block');
        } else {
            $('#jm_myremind_id .msgRemind .page').hide();
        }
        var data = baseData.data.subArray(pageCount * currentPage, 8 * (currentPage + 1));
        processData(data);
    };

    var changePage = function(page) {
        currentPage = page;
        processPage();
    };

    return init;

}, {
    requires: ["node", "base", "ajax"]
});


KISSY.add("jmMyRemind", 
function(S, Node, Base, IO, Mustache, Pagination) {
    var s_current_stock_page = 0;
    var s_current_price_page = 0;
    var s_page_show_count = 8;
    var bind_click_state = 0;
    var s_time_out = null;
    function bind_click(){
        // if(bind_click_state)return;
        // KISSY.one("#jm_price_prev_btn").on("click", function(){
        //     if(s_current_price_page  > 0)s_current_price_page--;
        //     af("price");
        // });

        // KISSY.one("#jm_price_next_btn").on("click", function(){
        //      s_current_price_page++;
        //     af("price");
        // });

        // KISSY.one("#jm_stock_prev_btn").on("click", function(){
        //     if(s_current_stock_page > 0)s_current_stock_page--;
        //     af("stock");
        // });

        // KISSY.one("#jm_stock_next_btn").on("click", function(){
        //     s_current_stock_page++;
        //     af("stock");
        // });    
        bind_click_state = 1;
    }

    var moreStatus = {price: true, stock: true};
    function format_name(name){
        if(!name)return "";

        var nnn = unescape(name);
        if(nnn.length < 44)return nnn;

        return (nnn.substr(0,20) + "..." + nnn.substr(nnn.length - 20)) ;
    }
    function format_ts(ts){
        Date.prototype.Format = function (fmt) { //author: meizz 
        var o = {
            "M+": this.getMonth() + 1, //月份 
             "d+": this.getDate(), //日 
             "h+": this.getHours(), //小时 
             "m+": this.getMinutes(), //分 
             "s+": this.getSeconds(), //秒 
             "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
             "S": this.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
         return fmt;
        }
        return  new Date(ts).Format("yyyy-MM-dd hh:mm:ss");
    }

    function sort_price(a, b) {
        function d(a){
            return a.json.price && a.svr_price && a.svr_price < a.json.price ? true : false;
        }
       
        if(d(a) && !d(b))
            return -1;
        if(!d(a) && d(b))
            return 1;


        return a.ts > b.ts ? -1: a.ts < b.ts ? 1: void 0
    }
    function sort_stock(a, b) {
        function d(a){
            return (a.stock_status &&  a.stock_status == "有货");
        }
        if(d(a) && !d(b))
            return -1;
        if(!d(a) && d(b))
            return 1;

        return a.ts > b.ts ? -1: a.ts < b.ts ?  1: void 0
    }    

    function ef(){
        KISSY.Event.delegate("#jm_pop_tab", "click", ".td_stock_status_2", 
        function(t) {
            var b = KISSY.DOM.parent(t.target, "tr"),
            c = b.getAttribute("itemnum");

            if(!localStorage.stockRemindList)
             return;
        
            var d = JSON.parse(localStorage.stockRemindList);
            var d1 = new Array();
            var del_item = null;
            for(var j = 0; j < d.length; j++){
                var p = d[j];
                if(p.index == c){
                    del_item = p;
                }else{
                    d1.push(p);
                }
            }
            

            localStorage.stockRemindList = JSON.stringify(d1);   
            af();
    
        });
    }

    function gf(){
        KISSY.Event.delegate("#jm_pop_tab", "click", ".td_stock_status_2", 
        function(t) {
            var b = KISSY.DOM.parent(t.target, "tr"),
            c = b.getAttribute("itemnum");

            if(!localStorage.priceRemindList)
             return;
        
            var d = JSON.parse(localStorage.priceRemindList);
            var d1 = new Array();
            var del_item = null;
            for(var j = 0; j < d.length; j++){
                var p = d[j];
                if(p.index == c){
                    del_item = p;
                }else{
                    d1.push(p);
                }
            }
       
            localStorage.priceRemindList = JSON.stringify(d1);   
            af();
    
        });

    }



    function cf(){
          var d = get_this_usersinfo(JSON.parse(localStorage.stockRemindList || "[]"));
          var e = get_this_usersinfo(JSON.parse(localStorage.priceRemindList || "[]"));
          // if( (!d || d.length == 0) && (!e || e.length == 0)){
          //    KISSY.one(".jm_noRemind").css({display:"block"});
          // }else{
          //    KISSY.one(".jm_noRemind").css({display:"none"});
          // }

          KISSY.one("#jm_stock_remind_table").css({display: (!d || d.length == 0) ? "none" : "block"});
          KISSY.one("#jm_price_remind_table").css({display: (!e || e.length == 0) ? "none" : "block"});
          moreStatus.stock = (!d || d.length == 0 || d.length < s_page_show_count) ? false : true;
          moreStatus.price = (!e || e.length == 0 || e.length < s_page_show_count) ? false : true;
          KISSY.one("#jm_myremind_id .sortType").css('display', 'none');
          KISSY.one(".no_stock").css({display:(!d || d.length == 0)?"block":"none"});
          KISSY.one(".no_price").css({display:(!e || e.length == 0)?"block":"none"});
          KISSY.one('#jm_myremind_id .remind-link').css('display', 'none');
          //(!d || d.length == 0)  && KISSY.one("#jm_stock_remind_page_switch").hide();
          //(!e || e.length == 0) && KISSY.one("#jm_price_remind_page_switch").hide();
    }

    function get_this_usersinfo(a){
        var b = [];
        var userid = jm_tools.getUserId();
        for(var i = 0; i < a.length; i++){
            if(userid == 0 && (!a[i].userid || a[i].userid == 0))
                b.push(a[i]);

            if(userid != 0 && a[i].userid && a[i].userid == userid)
                b.push(a[i]);
            }
     

        return b;
    }

    function df(){
        var c = {};
        stockList  = new Array();
        if(!localStorage.stockRemindList)
            return;
        
        var userid = jm_tools.getUserId();


        var d = get_this_usersinfo(JSON.parse(localStorage.stockRemindList));
  
        var pagecount = parseInt( (d.length + s_page_show_count - 1)/s_page_show_count );
        if(pagecount == 0)return;

        if(s_current_stock_page >= pagecount)
            s_current_stock_page = pagecount - 1;

        d && d.sort(sort_stock);

        var cnt = 0;
        for(var j = s_current_stock_page * s_page_show_count; j <  d.length && cnt < s_page_show_count;cnt++, j++){
            var p = d[j];
            var q = p.json;
            var ts = p.ts;
            if(!ts)ts = 0;
            var newstatus = p.stock_status || "无货";
            var need_tip = newstatus == "有货" ? "inline" : "none";
            var url = p.svr_location || q.url;
            url = 'http://go.walatao.com/jump.php?id=' + (new KISSY_Base64()).encode(url) + '&from=1.2';
            stockList.push({"itemnum":p.index,"itemname":format_name(q.uniq.name), "itemlink":url, "stockhas":newstatus, "time":format_ts(ts),"ts":ts, "has_stock_now":need_tip})
        }
    

        // if(pagecount > 1){
        //     KISSY.one("#jm_stock_remind_page_switch>span:eq(0)").text("第" + (s_current_stock_page + 1) + "页");
        //     KISSY.one("#jm_stock_remind_page_switch>span:eq(1)").text("共" + pagecount + "页");
        //     KISSY.one("#jm_stock_remind_page_switch").show();   
        //     var prevs = s_current_stock_page > 0 ?true : false;
        //     var next = s_current_stock_page < pagecount - 1 ? true : false;
            
        //     if(prevs)
        //         KISSY.one("#jm_stock_prev_btn").removeAttr("disabled");
        //     else
        //         KISSY.one("#jm_stock_prev_btn").attr({disabled:"disabled"});
            
        //     if(next)
        //         KISSY.one("#jm_stock_next_btn").removeAttr("disabled")
        //     else
        //         KISSY.one("#jm_stock_next_btn").attr({disabled:"disabled"});
        // }else{
        //     KISSY.one("#jm_stock_remind_page_switch").hide();     
        // }


        c.stockRemindList = stockList;
       
        //c.stockRemindList.sort(sort_f);
        var f = Mustache.to_html(window.jm_jminer.template.stockRemind, KISSY.merge(c, {}));
        KISSY.one("#jm_stock_remind_table").html(f); 
        ef();
    }

    function bf(){
        var c = {};
        priceList = new Array();

        if(!localStorage.priceRemindList)
            return;

        var d = get_this_usersinfo(JSON.parse(localStorage.priceRemindList || "[]"));

        var pagecount = parseInt( (d.length + s_page_show_count - 1)/s_page_show_count );
        if(pagecount == 0)return;

        if(s_current_price_page >= pagecount)
            s_current_price_page = pagecount - 1;

        d && d.sort(sortBy('ts', false));
        var cnt = 0;
        for(var j = s_current_price_page *  s_page_show_count; j < d.length && cnt < s_page_show_count; cnt++,j++){
            var p = d[j];
            var q = p.json;
            var price = q.price;
            var c_price = p.svr_price || q.nowprice || q.price;
            var ts = p.ts;
            if(!ts)ts = 0;
            if(!price)price = 0;
            //var need_tip = c_price < price ? "inline" : "none";
            var need_tip = "none";
            var need_tip_color = parseInt(c_price) < parseInt(price) ? "#e60012" : "#666";
            var url = p.svr_location || q.url;
            url = 'http://go.walatao.com/jump.php?id=' + (new KISSY_Base64()).encode(url) + '&from=1.1';
            priceList.push({"itemnum":p.index, "itemname": format_name(q.uniq.name), "itemlink":url, "p_price":price, "c_price":c_price,"time":format_ts(ts),"ts":ts, "has_down_price":need_tip, "symbol":q.symbol||'$', "down_price_color":need_tip_color});
        }

        //priceList.sort(sort_f);
        c.priceRemindList = priceList;
        // if(pagecount > 1){
        //     KISSY.one("#jm_price_remind_page_switch>span:eq(0)").text("第" + (s_current_price_page+1) + "页");
        //     KISSY.one("#jm_price_remind_page_switch>span:eq(1)").text("共" + pagecount + "页");
        //     KISSY.one("#jm_price_remind_page_switch").show();   
        //     var prevs = s_current_price_page > 0 ?true : false;
        //     var next = s_current_price_page < pagecount - 1 ? true : false;
            
        //     if(prevs)
        //         KISSY.one("#jm_price_prev_btn").removeAttr("disabled");
        //     else
        //         KISSY.one("#jm_price_prev_btn").attr({disabled:"disabled"});
            
        //     if(next)
        //         KISSY.one("#jm_price_next_btn").removeAttr("disabled")
        //     else
        //         KISSY.one("#jm_price_next_btn").attr({disabled:"disabled"});
        // }else{
        //     KISSY.one("#jm_price_remind_page_switch").hide();     
        // }

        var f = Mustache.to_html(window.jm_jminer.template.priceRemind, KISSY.merge(c, {}));
        KISSY.one("#jm_price_remind_table").html(f);   
        gf();      
    }
    
    function delay(){
        show_loading("price", false);   
        show_loading("stock", false);        
        s_time_out = null;
        bf();
        df();
        //cf();
        bindEvent();
    }

    function bindEvent() {
        KISSY.all('#jm_myremind_id .title .type span').on('click', function() {
            var $this = KISSY.one(this);
            $this.siblings().removeClass('cur');
            $this.addClass('cur');
            togglePanel($this.attr('data-type'));
        });
        KISSY.all('#jm_myremind_id .sortType span').on('click', function() {
            var cur = KISSY.one('#jm_myremind_id .title .type span.cur').attr('data-type') === 'price' ? 'priceRemindList' : 'stockRemindList';
            var list = JSON.parse(localStorage[cur] || "[]");
            var $this = KISSY.one(this);
            $this.siblings().removeClass('cur');
            $this.addClass('cur');
            if($this.attr('data-type') === 'update') {
                list.sort(function(a, b) {
                    return a.query_ts > b.query_ts;
                });
                localStorage.setItem(cur, JSON.stringify(list));
                bf();
            } else {
                list.sort(function(a, b) {
                    return a.ts > b.ts;
                });
                localStorage.setItem(cur, JSON.stringify(list));
                df();
            }
        });
    };

    function togglePanel(type) {
        switch(type) {
            case 'price':
                $('#jm_myremind_id .msgRemind').hide();
                $('#jm_myremind_id .packageRemind').hide();
                $('#jm_myremind_id .priceRemind').show();
                $('#jm_myremind_id .stockRemind').hide();
                $('#jm_myremind_id .remind .remind-link').css('display', moreStatus.price ? 'block' : 'none');
                $('#jm_myremind_id .remind-link').attr('href', 'http://we.walatao.com/user/channel-price');
                $('#jm_myremind_id .remind .msg-link').css('display', 'none');
                break;
            case 'stock':
                $('#jm_myremind_id .msgRemind').hide();
                $('#jm_myremind_id .packageRemind').hide();
                $('#jm_myremind_id .priceRemind').hide();
                $('#jm_myremind_id .stockRemind').show();
                $('#jm_myremind_id .remind .remind-link').css('display', moreStatus.stock ? 'block' : 'none');
                $('#jm_myremind_id .remind-link').attr('href', 'http://we.walatao.com/user/channel-stock');
                $('#jm_myremind_id .remind .msg-link').css('display', 'none');
                break;
            case 'package':
                $('#jm_myremind_id .msgRemind').hide();
                $('#jm_myremind_id .stockRemind').hide();
                $('#jm_myremind_id .priceRemind').hide();
                $('#jm_myremind_id .packageRemind').show();
                $('#jm_myremind_id .remind .remind-link').css('display', 'none');
                $('#jm_myremind_id .remind .msg-link').css('display', 'none');
                break;
            case 'msg':
                $('#jm_myremind_id .stockRemind').hide();
                $('#jm_myremind_id .priceRemind').hide();
                $('#jm_myremind_id .packageRemind').hide();
                $('#jm_myremind_id .msgRemind').show();
                $('#jm_myremind_id .remind .remind-link').css('display', 'none');
                $('#jm_myremind_id .remind .msg-link').css('display', + localStorage.msgCount && +localStorage.msgCount >= 24 ? 'block' : 'none');
                break;
        }
    };

    function show_loading(cc, show){
        // if(!cc)return;
        // if(cc == "price"){
        //     KISSY.one("#jm_price_loading").css({display:show ? "block": "none"});
        //     show ? KISSY.one("#jm_price_remind_page_switch").hide():KISSY.one("#jm_price_remind_page_switch").show();
        // }
        // else if(cc == "stock"){
        //     KISSY.one("#walatao_stock_loading").css({display:show ? "block": "none"});
        //     show ? KISSY.one("#jm_stock_remind_page_switch").hide():KISSY.one("#jm_stock_remind_page_switch").show();
        // }

        // if(show){
        //     cc == "stock" && KISSY.one("#jm_stock_remind_table").css({display: "none"});
        //     cc == "price" && KISSY.one("#jm_price_remind_table").css({display:"none"});        
        // }
    }
    function af(cc){
        bind_click();
        if(s_time_out != null){
            clearTimeout(s_time_out),s_time_out = null;
        }

        show_loading(cc, true);
        s_time_out = setTimeout(delay, 300);


    }
    
    return af;
},
{
    requires: ["node", "base", "ajax", "mu", "pagination"]
}),
KISSY.ready(function() {
    localStorage.alreadyNotiCount  = 0;
    KISSY.jm_peerid = localStorage.jm_peerid;
    AliStatistics(),
    window.jm_jminer.config = JSON.parse(localStorage.jm_config || null),
    window.jm_jminer.mmstat_cna = localStorage.jm_mmstat_cna || "null",
    window.jm_jminer.isLoadRemoteRes = localStorage.isLoadRemoteRes && "true" == localStorage.isLoadRemoteRes ? !0: !1,
    window.jm_jminer.template = getTemplate(),
    setTimeout(function(){
        popup_init();
        KISSY.one('#jm_popup_loading').hide();
    }, 80);
    jm_tools.setPopupBadgeText(0);
    if(localStorage.need_show_remind_tips && localStorage.need_show_remind_tips == "true"){
        KISSY.one("#jm_pop_tab").addClass("showNewRemind");
    }

    if(localStorage.need_show_tracker_red_tips && localStorage.need_show_tracker_red_tips  == "true"){
        KISSY.one("#jm_pop_tab").addClass("showBadge");
        //localStorage.need_show_tracker_red_tips = false;
    }
    
    /*** 以参数登录 ***/
    if(typeof jm_getQueryString === 'function'){
        var act = jm_getQueryString('act');
        act=='login' && window.jmLogin.login();
    }
    
    
});



KISSY.ready(function(){
    console.log(KISSY.DOM.width('body')+'--'+KISSY.DOM.height('body'));
});


/*** 密封代面板 ***/
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
         "d+": this.getDate(), //日 
         "h+": this.getHours(), //小时 
         "m+": this.getMinutes(), //分 
         "s+": this.getSeconds(), //秒 
         "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
         "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

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
            url = 'http://www.icebear.me/User/getBaseinfo';

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
        if(data.content){
            data.content.realname,KISSY.all('.mt_name').html(shuffle(data.content.realname)).val(shuffle(data.content.realname));
            data.content.english_name,KISSY.all('.mt_ywname').html(shuffle(data.content.english_name)).val(shuffle(data.content.english_name));
            data.content.birthday,KISSY.all('.mt_birth').html(shuffle(data.content.birthday)).val(shuffle(data.content.birthday));
            data.content.birthday,KISSY.all('.mt_biryear').val(shuffle(data.content.birthday).split('-')[0]);
            data.content.birthday,KISSY.all('.mt_birmonth').val(shuffle(data.content.birthday).split('-')[1] || '');
            data.content.birthday,KISSY.all('.mt_birday').val(shuffle(data.content.birthday).split('-')[2] || '');
            if(data.content.birthday || (data.content.birthday == '',data.content.birthday='--')){
                var html = '';
                html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_biryear" tip="tip3" validate="required"><option value="">请选择</option>';
                for (var j = 1990; j <=  2000; j++) {
                    html += '<option value="'+j+'" ' + (parseInt(shuffle(data.content.birthday).split('-')[0]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                };
                html += '</select>年';
                KISSY.all('.mt_biryear_div').html(html);
                
                var html = '';
                html += '<select name="mt_birmonth" id="mt_birmonth" class="ed_name valid mt_birmonth " tip="tip3" validate="required"><option value="">请选择</option>';
                for (var j = 1; j < 13; j++) {
                    html += '<option value="'+j+'" ' + (parseInt(shuffle(data.content.birthday).split('-')[1]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                };
                html += '</select>月';
                KISSY.all('.mt_birmonth_div').html(html);
                $('.mt_biryear_div .mt_endYear,.mt_birmonth_div .mt_birmonth').on('change',function(){
                    jm_tools.changeDays(this);
                });
                var html = '';
                html += '<select name="mt_birday" id="mt_birday" class="ed_name valid mt_birday" tip="tip3" validate="required"><option value="">请选择</option>';
                var days = jm_tools.getDays(parseInt(data.content.birthday.split('-')[0]),parseInt(data.content.birthday.split('-')[1])) || 31;
                for (var j = 1; j <  days; j++) {
                    html += '<option value="'+j+'" ' + (parseInt(shuffle(data.content.birthday).split('-')[2]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                };
                html += '</select>日';
                KISSY.all('.mt_birday_div').html(html);
            }

            
            data.content.sex, KISSY.all('.mt_sex').html(parseInt(data.content.sex) == 1 ? '男' : parseInt(data.content.sex) == 2 ? '女' : '未知'), KISSY.one('.mr_year_se .fl:eq(' + (parseInt(data.content.sex) - 1) + ')').addClass('active').one('i').addClass("active");
            data.content.height,KISSY.all('.mt_height').html(shuffle(data.content.height)).val(shuffle(data.content.height));
            data.content.phone,KISSY.all('.mt_tel').html(shuffle(data.content.phone)).val(shuffle(data.content.phone));
            data.content.email,KISSY.all('.mt_email').html(shuffle(data.content.email)).val(shuffle(data.content.email));
            data.content.idcard,KISSY.all('.mt_id').html(shuffle(data.content.idcard)).val(shuffle(data.content.idcard));
            data.content.city,KISSY.all('.mt_add').html(shuffle(data.content.city)).val(shuffle(data.content.city));
            data.content.edu,KISSY.all('.mt_edu').html(shuffle(data.content.edu)).val(shuffle(data.content.edu));
            data.content.contact_address,KISSY.all('.mt_postadd').html(shuffle(data.content.live_address)).val(shuffle(data.content.live_address));
            data.content.contact_name,KISSY.all('.mt_jjlxr').html(shuffle(data.content.contact_name)).val(shuffle(data.content.contact_name));
            data.content.contact_phone,KISSY.all('.mt_jjlxrtel').html(shuffle(data.content.contact_phone)).val(shuffle(data.content.contact_phone));
            KISSY.one('#base-list .infopl').show();
            /*if(jm_get_remote_js("quickWrite")){
                eval(jm_get_remote_js("quickWrite"));
            }*/
            //dragInit();
            editInit();
        }
        
    };

    var editInit = function() {
        $("#base-list").removeClass("edit-status");
        $("#base-list .mt-edit").click(function(){
            $("#base-list").addClass("edit-status");
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
                    "mt_jjlxrtel":KISSY.one('#base-list .infopl-edit .mt_jjlxrtel').val()
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
                url: "http://www.icebear.me/Resume/basicPost?access=1",
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
            /*KISSY.io.post("http://www.icebear.me/Resume/basicPost", JSON.stringify(ss), function(e) {
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
            url = 'http://www.icebear.me/User/getOtherinfo';

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
        if(data.content && data.content.edu_list[0]){
            var eList = data.content.edu_list;
            for(var i = eList.length - 1; i >= 0; i--){
                html += '<div>  <div class="mt-title"><div class="metil mt10">教育经历' + (i+1) + '</div><div class="mt-edit"><i></i>编辑</div></div>  <div class="infopl" data-id="' + eList[i].id + '"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">学历</td> <td class="mt_base" id="mt_education">' + eList[i].education + '</td> </tr> <tr> <td width="76" class="col999">毕业学校</td> <td class="mt_base" id="mt_schoolName">' + eList[i].schoolName + '</td> </tr> <tr> <td width="76" class="col999">毕业年份</td> <td class="mt_base" id="mt_endYear">' + parseInt(eList[i].endDate) + '</td> </tr> <tr> <td width="76" class="col999">所学专业</td> <td class="mt_base" id="mt_professional">' + eList[i].professional + '</td> </tr> <tr> <td width="76" class="col999">奖惩情况</td> <td class="mt_base" id="mt_award">' + (eList[i].reward_punish ? eList[i].reward_punish : '') + '</td> </tr> </tbody> </table> </div>';

                html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">学历</td> <td><input type="text" id="mt_education" name="mt_education" class="ed_name mt_education" autocomplete="off" value="' + eList[i].education + '" placeholder="请输入学历"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="' + eList[i].schoolName + '" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_biryear_div">';
                html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_biryear" tip="tip3" validate="required"><option value="">请选择</option>';
                for (var j = 1990; j <=  2017; j++) {
                    html += '<option value="'+j+'" ' + (parseInt(eList[i].endDate) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                };
                html += '</select>年</div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">所学专业</td> <td><input type="text" id="mt_professional" name="mt_professional" class="ed_name mt_professional" autocomplete="off" value="' + eList[i].professional + '" placeholder="请输入学历"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">奖惩情况</td> <td> <input type="text" id="mt_award" name="mt_award" class="ed_name mt_award" autocomplete="off" value="' + (eList[i].reward_punish ? eList[i].reward_punish : '') + '" placeholder="请输入奖励"></td> </tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="mt-title"> <div class="metil mt10">工作经历</div>  </div> <div class="infopl">  <div class="mr_empty_add dn mt-edit-add" style="display: block;"> <i></i><span>添加工作经历</span> </div> </div>';
        }
        $('#edu-list').html(html);
        //dragInit();
        editInit();
    };

    var editInit = function() {
        $("#edu-list > div").removeClass("edit-status");
        $("#edu-list .mt-edit").click(function(){
            $(this).parent().parent().addClass("edit-status");
            

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
                url: "http://www.icebear.me/Resume/delEdu?access=1",
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
            /*KISSY.io.post("http://www.icebear.me/Resume/basicPost", JSON.stringify(ss), function(e) {
                console.log('updateuser e:' + e);
            });*/
            e.stopPropagation();
        });
        
        $("#edu-list .mt-edit-add").unbind("click").bind("click",function(e){
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">学历</td> <td><input type="text" id="mt_education" name="mt_education" class="ed_name mt_education" autocomplete="off" value="" placeholder="请输入学历"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_biryear_div">';
            html += '<select name="mt_endYear" id="mt_endYear" class="ed_name valid mt_endYear mt_biryear" tip="tip3" validate="required"><option value="">请选择</option>';
                for (var j = 1990; j <=  2017; j++) {
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
            var eduid = $(that).parent().parent().attr("data-id") || '';
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
                url: "http://www.icebear.me/Resume/educationExperience?access=1",
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
            url = 'http://www.icebear.me/User/getOtherinfo';

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
        if(data.content && data.content.exp_list[0]){
            var eList = data.content.exp_list;
            for(var i = eList.length - 1; i >= 0; i--){
                html += '<div> <div class="mt-title"> <div class="metil mt10">工作经历</div> <div class="mt-edit"><i></i>编辑</div> </div> <div class="infopl" data-id="' + eList[i].id + '"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">公司</td> <td class="mt_base" id="mt_companyName">' + eList[i].companyName + '</td> </tr> <tr> <td width="76" class="col999">职位</td> <td class="mt_base" id="mt_positionName">' + eList[i].positionName + '</td> </tr> <tr> <td width="76" class="col999">在职时间</td> <td class="mt_base" id="mt_comtime">' + eList[i].startDate + '-' + eList[i].endDate + '</td> </tr> <tr> <td width="76" class="col999">工作内容</td></tr><tr> <td class="mt_base" id="mt_workContent"> <div rows="8" cols="40">' + eList[i].workContent + '</div> </td> </tr> </tbody> </table> </div>';

                html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">公司</td> <td><input type="text" id="mt_companyName" name="mt_companyName" class="ed_name mt_companyName" autocomplete="off" value="' + eList[i].companyName + '" placeholder="请输入公司"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">职位</td> <td><input type="text" id="mt_positionName" name="mt_positionName" class="ed_name valid mt_positionName" autocomplete="off" value="' + eList[i].positionName + '" placeholder="请输入职位"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">入职时间</td> <td>';
                var html1 = '<div class="mt_biryear_div">';
                html1 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_biryear mt_startDate_year" tip="tip3" validate="required"><option value="">请选择</option>';
                for (var j = 1980; j <=  new Date().getFullYear(); j++) {
                    html1 += '<option value="'+j+'" ' + (parseInt(eList[i].startDate.split(".")[0]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                };
                html1 += '</select>年</div>';
                
                html += html1;

                var html2 = '<div class="mt_birmonth_div">';
                html2 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_startDate_month mt_birmonth" tip="tip3" validate="required"><option value="">请选择</option>';
                for (var j = 1; j <  13; j++) {
                    html2 += '<option value="'+j+'" ' + ( eList[i].startDate.split(".")[1] ? parseInt(eList[i].startDate.split(".")[1]) == j ? "selected=\"selected\"" : "" : "" )  + '>&nbsp;'+j+'</option>';
                };
                html2 += '</select>月</div>';

                html += html2 + '</td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr>   <tr> <td width="76" class="col999">离职时间</td> <td>';


                var html1 = '<div class="mt_biryear_div">';
                html1 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_biryear mt_endDate_year" tip="tip3" validate="required"><option value="">请选择</option>';
                for (var j = 1980; j <=  new Date().getFullYear(); j++) {
                    html1 += '<option value="'+j+'" ' + (parseInt(eList[i].endDate.split(".")[0]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                };
                html1 += '</select>年</div>';
                
                html += html1;

                var html2 = '<div class="mt_birmonth_div">';
                html2 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_endDate_month mt_birmonth" tip="tip3" validate="required"><option value="">请选择</option>';
                for (var j = 1; j <  13; j++) {
                    html2 += '<option value="'+j+'" ' + ( eList[i].endDate.split(".")[1] ? parseInt(eList[i].endDate.split(".")[1]) == j ? "selected=\"selected\"" : "" : "" ) + '>&nbsp;'+j+'</option>';
                };
                html2 += '</select>月</div>';

                html += html2 + '</td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">工作内容</td> <td> <div contenteditable="true" id="mt_workContent" name="mt_workContent" class="ed_name mt_workContent" >' + (eList[i].workContent ? eList[i].workContent : '') + '</div></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="mt-title"> <div class="metil mt10">工作经历</div>  </div> <div class="infopl">  <div class="mr_empty_add dn mt-edit-add" style="display: block;"> <i></i><span>添加工作经历</span> </div> </div>';
        }
        
        $('#exp-list').html(html);
        //dragInit();
        expInit();
    };

    var expInit = function() {
        $("#exp-list > div").removeClass("edit-status");
        $("#exp-list .mt-edit").click(function(){
            $(this).parent().parent().addClass("edit-status");
            

            $(".mt_education,.mt_positionName,.mt_startDate,.mt_endDate,.mt_workContent").blur(function() {
                if($(this).val() == "" || ($(this).hasClass('mt_workContent') && $(this).html() == "") ){
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
                url: "http://www.icebear.me/Resume/delExp?access=1",
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
            /*KISSY.io.post("http://www.icebear.me/Resume/basicPost", JSON.stringify(ss), function(e) {
                console.log('updateuser e:' + e);
            });*/
            e.stopPropagation();
        });
        
        $("#exp-list .mt-edit-add").unbind("click").bind("click",function(e){
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">公司</td> <td><input type="text" id="mt_companyName" name="mt_companyName" class="ed_name mt_companyName" autocomplete="off" value="" placeholder="请输入公司"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">职位</td> <td><input type="text" id="mt_positionName" name="mt_positionName" class="ed_name valid mt_positionName" autocomplete="off" value="" placeholder="请输入职位"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">入职时间</td> <td>';

            var html1 = '<div class="mt_biryear_div">';
            html1 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_biryear mt_startDate_year" tip="tip3" validate="required"><option value="">请选择</option>';
            for (var j = 1980; j <=  new Date().getFullYear(); j++) {
                html1 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html1 += '</select>年</div>';
            
            html += html1;

            var html2 = '<div class="mt_birmonth_div">';
            html2 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_startDate_month mt_birmonth" tip="tip3" validate="required"><option value="">请选择</option>';
            for (var j = 1; j <  13; j++) {
                html2 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html2 += '</select>月</div>';


            html += html2 +' </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr>   <tr> <td width="76" class="col999">离职时间</td> <td>';

            var html1 = '<div class="mt_biryear_div">';
            html1 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_biryear mt_endDate_year" tip="tip3" validate="required"><option value="">请选择</option>';
            for (var j = 1980; j <=  new Date().getFullYear(); j++) {
                html1 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html1 += '</select>年</div>';
            
            html += html1;

            var html2 = '<div class="mt_birmonth_div">';
            html2 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_endDate_month mt_birmonth" tip="tip3" validate="required"><option value="">请选择</option>';
            for (var j = 1; j <  13; j++) {
                html2 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html2 += '</select>月</div>';

            html += html2 + ' </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">工作内容</td> <td> <div contenteditable="true" id="mt_workContent" name="mt_workContent" class="ed_name mt_workContent" ></div></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div>';
            $('#exp-list').append(html);
            $("#exp-list .mt-edit-add").hide();
            $(".mt_companyName,.mt_positionName,.mt_startDate,.mt_endDate").blur(function() {
                if($(this).val() == ""){
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
        }
        var mt_startDate = mt_startDate_year + '.' + mt_startDate_month;

        var mt_endDate_year = KISSY.one(className + ' .mt_endDate_year').val();
        var mt_endDate_month = KISSY.one(className + ' .mt_endDate_month').val();
        if(!mt_endDate_year || !mt_endDate_month){
            KISSY.one(className + ' .mt_endDate_year').parent().parent().parent().next('tr').show();
            return;
        }
        var mt_endDate = mt_endDate_year + '.' + mt_endDate_month;

        var workContent = KISSY.one(className + ' .mt_workContent').html();
        if(!workContent){
            KISSY.one(className + ' .mt_workContent').parent().parent().parent().next('tr').show();
            return;
        }
        var expid = $(that).parent().parent().attr("data-id") || '';
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
            url: "http://www.icebear.me/Resume/workExperience?access=1",
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
            url = 'http://www.icebear.me/User/getOtherinfo';

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
        if(data.content && data.content.pro_list[0]){
            var eList = data.content.pro_list;
            for(var i = eList.length - 1; i >= 0; i--){
                html += '<div> <div class="mt-title"> <div class="metil mt10">项目经历' + (i+1) + '</div> <div class="mt-edit"><i></i>编辑</div> </div> <div class="infopl"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">项目名称</td> <td class="mt_base" id="mt_projectName">' + eList[i].projectName + '</td> </tr> <tr> <td width="76" class="col999">项目时间</td> <td class="mt_base" id="mt_protime">' + eList[i].startDate + '-' + eList[i].endDate + '</td> </tr> <tr> <td width="76" class="col999">项目角色</td> <td class="mt_base" id="mt_positionName">' + eList[i].positionName + '</td> </tr> <tr> <td width="76" class="col999">项目内容</td></tr><tr> <td class="mt_base" id="mt_projectRemark">' + eList[i].projectRemark + '</td> </tr> </tbody> </table> </div>';

                html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">项目名称</td> <td><input type="text" id="mt_projectName" name="mt_projectName" class="ed_name mt_projectName" autocomplete="off" value="' + eList[i].projectName + '" placeholder="请输入项目名称"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">开始时间</td> <td>';
                var html1 = '<div class="mt_biryear_div">';
                html1 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_biryear mt_startDate_year" tip="tip3" validate="required"><option value="">请选择</option>';
                for (var j = 1980; j <=  new Date().getFullYear(); j++) {
                    html1 += '<option value="'+j+'" ' + (parseInt(eList[i].startDate.split(".")[0]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                };
                html1 += '</select>年</div>';
                
                html += html1;

                var html2 = '<div class="mt_birmonth_div">';
                html2 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_startDate_month mt_birmonth" tip="tip3" validate="required"><option value="">请选择</option>';
                for (var j = 1; j <  13; j++) {
                    html2 += '<option value="'+j+'" ' + ( eList[i].startDate.split(".")[1] ? parseInt(eList[i].startDate.split(".")[1]) == j ? "selected=\"selected\"" : "" : "" ) + '>&nbsp;'+j+'</option>';
                };
                html2 += '</select>月</div>';

                html += html2 + ' </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr>   <tr> <td width="76" class="col999">结束时间</td> <td>';

                var html1 = '<div class="mt_biryear_div">';
                html1 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_biryear mt_endDate_year" tip="tip3" validate="required"><option value="">请选择</option>';
                for (var j = 1980; j <=  new Date().getFullYear(); j++) {
                    html1 += '<option value="'+j+'" ' + (parseInt(eList[i].endDate.split(".")[0]) == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
                };
                html1 += '</select>年</div>';
                
                html += html1;

                var html2 = '<div class="mt_birmonth_div">';
                html2 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_endDate_month mt_birmonth" tip="tip3" validate="required"><option value="">请选择</option>';
                for (var j = 1; j <  13; j++) {
                    html2 += '<option value="'+j+'" ' + ( eList[i].endDate.split(".")[1] ? parseInt(eList[i].endDate.split(".")[1]) == j ? "selected=\"selected\"" : "" : "" ) + '>&nbsp;'+j+'</option>';
                };
                html2 += '</select>月</div>';

                html += html2 + '</td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">项目角色</td> <td><input type="text" id="mt_positionName" name="mt_positionName" class="ed_name mt_positionName" autocomplete="off" value="' + eList[i].positionName + '" placeholder="请输入项目角色"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">项目内容</td> <td> <div contenteditable="true" id="mt_projectRemark" name="mt_projectRemark" class="ed_name mt_projectRemark" >' + (eList[i].projectRemark ? eList[i].projectRemark : '') + '</div></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="mt-title"> <div class="metil mt10">项目经历</div>  </div> <div class="infopl">  <div class="mr_empty_add dn mt-edit-add" style="display: block;"> <i></i><span>添加项目经历</span> </div> </div>';
        }
        $('#pro-list').html(html);
        //dragInit();
        proInit();
    };

    var proInit = function() {
        $("#pro-list > div").removeClass("edit-status");
        $("#pro-list .mt-edit").click(function(){
            $(this).parent().parent().addClass("edit-status");
            

            $(".mt_education,.mt_positionName,.mt_startDate,.mt_endDate,.mt_projectRemark").blur(function() {
                if($(this).val() == "" || ($(this).hasClass('mt_projectRemark') && $(this).html() == "") ){
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
                url: "http://www.icebear.me/Resume/delProject?access=1",
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
            /*KISSY.io.post("http://www.icebear.me/Resume/basicPost", JSON.stringify(ss), function(e) {
                console.log('updateuser e:' + e);
            });*/
            e.stopPropagation();
        });
        
        $("#pro-list .mt-edit-add").unbind("click").bind("click",function(e){
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">项目名称</td> <td><input type="text" id="mt_projectName" name="mt_projectName" class="ed_name mt_projectName" autocomplete="off" value="" placeholder="请输入项目名称"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">开始时间</td> <td>';
            var html1 = '<div class="mt_biryear_div">';
            html1 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_biryear mt_startDate_year" tip="tip3" validate="required"><option value="">请选择</option>';
            for (var j = 1980; j <=  new Date().getFullYear(); j++) {
                html1 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html1 += '</select>年</div>';
            
            html += html1;

            var html2 = '<div class="mt_birmonth_div">';
            html2 += '<select name="mt_startDate" id="mt_startDate" class="ed_name valid mt_startDate mt_startDate_month mt_birmonth" tip="tip3" validate="required"><option value="">请选择</option>';
            for (var j = 1; j <  13; j++) {
                html2 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html2 += '</select>月</div>';


            html += html2 +'</td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr>   <tr> <td width="76" class="col999">结束时间</td> <td>';

            var html1 = '<div class="mt_biryear_div">';
            html1 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_biryear mt_endDate_year" tip="tip3" validate="required"><option value="">请选择</option>';
            for (var j = 1980; j <=  new Date().getFullYear(); j++) {
                html1 += '<option value="'+j+'">&nbsp;'+j+'</option>';
            };
            html1 += '</select>年</div>';
            
            html += html1;

            var html2 = '<div class="mt_birmonth_div">';
            html2 += '<select name="mt_endDate" id="mt_endDate" class="ed_name valid mt_endDate mt_endDate_month mt_birmonth" tip="tip3" validate="required"><option value="">请选择</option>';
            for (var j = 1; j <  13; j++) {
                html2 += '<option value="'+j+'" >&nbsp;'+j+'</option>';
            };
            html2 += '</select>月</div>';

            html += html2 + '</td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">项目角色</td> <td><input type="text" id="mt_positionName" name="mt_positionName" class="ed_name mt_positionName" autocomplete="off" value="" placeholder="请输入项目角色"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">项目内容</td> <td> <div contenteditable="true" id="mt_projectRemark" name="mt_projectRemark" class="ed_name mt_projectRemark" ></div></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div>';
            $('#pro-list').append(html);
            $("#pro-list .mt-edit-add").hide();
            $(".mt_projectName,.mt_positionName,.mt_startDate,.mt_endDate").blur(function() {
                if($(this).val() == ""){
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
        var mt_projectRemark = KISSY.one(className + ' .mt_projectRemark').html();
        if(!mt_projectRemark){
            KISSY.one(className + ' .mt_projectRemark').parent().parent().parent().next('tr').show();
            return;
        }
        var projectid = $(that).parent().parent().attr("data-id") || '';
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
            url: "http://www.icebear.me/Resume/projectExperience?access=1",
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
            url = 'http://www.icebear.me/User/getOtherinfo';

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
        if(data.content && data.content.custom_model[0]){
            var eList = data.content.custom_model;
            for(var i = eList.length - 1; i >= 0; i--){
                if(eList[i].titleName){
                    html += '<div><div class="infopl"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>    <tr> <td class="mt_base" id="mt_titleName">' + eList[i].titleName + '</td><td><div class="mt-edit"><i></i>编辑</div></td></tr><tr><td id="mt_titleContent" class="mt_base">' + eList[i].titleContent + '</td> </tr> </tbody> </table> </div>';
                    html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">自定义标题</td> <td><input type="text" id="mt_titleName" name="mt_titleName" class="ed_name mt_titleName" autocomplete="off" value="' + eList[i].titleName + '" placeholder="请输入自定义标题"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">内容</td> <td> <div contenteditable="true" id="mt_titleContent" name="mt_titleContent" class="ed_name mt_base mt_titleContent" >' + (eList[i].titleContent ? eList[i].titleContent : '') + '</div></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除" style="display:none;"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
                }
            }
            html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="mt-title"> <div class="metil mt10">自定义模块</div> </div> <div class="infopl"> <div class="mr_empty_add dn  mt-edit-add" style="display: block;"> <i></i><span>自定义模块</span> </div> </div>';
        }
        $('#other-list').html(html);
        //dragInit();
        corInit();
    };

    var corInit = function() {
        $("#other-list > div").removeClass("edit-status");
        $("#other-list .mt-edit").click(function(){
            $(this).parent().parent().parent().parent().parent().parent().addClass("edit-status");
            

            $(".mt_titleName,.mt_titleContent").blur(function() {
                if($(this).val() == "" || ($(this).hasClass('mt_titleContent') && $(this).html() == "") ){
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
                url: "http://www.icebear.me/Resume/userDefineDel?access=1",
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
                    $('<span for="mr_name" generated="true" class="error">修改失败，请稍后重试</span>').insertBefore($("#other-list .mr_save"));
                }
            });
            e.stopPropagation();
        });
        
        $("#other-list .mt-edit-add").unbind("click").bind("click",function(e){
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">自定义标题</td> <td><input type="text" id="mt_titleName" name="mt_titleName" class="ed_name mt_titleName" autocomplete="off" value="" placeholder="请输入自定义标题"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">内容</td> <td> <div contenteditable="true" id="mt_titleContent" name="mt_titleContent" class="ed_name mt_titleContent mt_base" ></div></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div>';
            $('#other-list').append(html);
            $("#other-list .mt-edit-add").hide();
            $(".mt_titleName,.mt_titleContent").blur(function() {
                if($(this).val() == "" || ($(this).hasClass('mt_titleContent') && $(this).html() == "") ){
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
        var mt_titleName = KISSY.one(className + ' .mt_titleName').val();
        if(!mt_titleName){
            KISSY.one(className + ' .mt_titleName').parent().parent().next('tr').show();
            return;
        }
        
        var mt_titleContent = KISSY.one(className + ' .mt_titleContent').html();
        if(!mt_titleContent){
            KISSY.one(className + ' .mt_titleContent').parent().parent().parent().next('tr').show();
            return;
        }
        var defineId = $(that).parent().parent().attr("data-id") || '';
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
            url: "http://www.icebear.me/Resume/userDefine?access=1",
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