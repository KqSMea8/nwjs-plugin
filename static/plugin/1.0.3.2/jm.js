
 function jm_init() {
    jm_tools.checkWebSite() && (jm_tools.loadExtraResource(), dealWebsite())
}
 function jm_init_home() {
    jm_tools.checkWebSite() && (jm_tools.loadExtraResource(), dealHomeWebsite())
}
var preferenialFlag = false;

function jm_get_remote_js(remote_js_key){
    var a = window.jm_jminer.config;
    if (a && a.website) {
        var b = getMatchedWebSiteDomain();
        var c = KISSY.replace_all(window.location.host, ".","_");
        if(a.website[b]  && a.website[b]["remotejs"]){
            var d = null;
            //console.log(a.website[b]["remotejs"]);
            if( a.website[b]["remotejs"][c]){
                d = a.website[b]["remotejs"][c][remote_js_key];
            }
            return  d ||  a.website[b]["remotejs"][remote_js_key];
        }
    }
    return undefined;
}
function jm_get_remote_js_home(remote_js_key){
    var a = window.jm_jminer.config;
    if (a && a.homeWebSite) {
        var b = getMatchedHomeWebSiteDomain();
        var c = KISSY.replace_all(window.location.host, ".","_");
        if(a.homeWebSite[b]  && a.homeWebSite[b]["remotejs"]){
            var d = null;
            if( a.homeWebSite[b]["remotejs"][c]){
                d = a.homeWebSite[b]["remotejs"][c][remote_js_key];
            }
            return  d ||  a.homeWebSite[b]["remotejs"][remote_js_key];
        }
    }
    return undefined;
}

function dealWebsite() {
    console.time("dealWebsite");

    function waitForCss(){
        window.jm_jminer.isLoadTips = "true";
        var a = window.jm_jminer.config;
        var host = document.domain;
        if (a && a.website) {
            //console.log(host);
             //在进入icebear时 检测登录

           // console.log(host);
            //if (host == "icebear.me") {
            if (host.indexOf("icebear.me") != -1) {
                //KISSY.use('icebearFunction', function (a,b,c,d) {});
                 KISSY.use('icebearFunction',
                function(a, d) {

                    var f = new d;
                    window.jm_jminer.curWebSite = f,
                    f.init();


                });
            }

            if (host.indexOf("xiaoyuanzhao.com") != -1) {
                 KISSY.use('xiaoyuanzhaoFunction',
                function(a, d) {
                    var f = new d;
                    window.jm_jminer.curWebSite = f,
                    f.init();
                });
            }

            var b = getMatchedWebSiteDomain();
            // console.log('jm_init');console.log(b);
            if ("null" == b) return;
            var c = a.website[b];

            var tips_timer = null;
            var last_update_tips_time = 0;

            function  refresh_tip_pos(){
                if(new Date().getTime() - last_update_tips_time > 1e3  && tips_timer != null)
                    return;
                clearTimeout(tips_timer);
                tips_timer = null;
                tips_timer = setTimeout(function(){
                     //jm_tools.initTips(c.tips);
                         //window.jm_jminer.curWebSite.reposTips();
                     if(!KISSY.one('#jm_others_tips_23') && KISSY.one('#spc-gcpromoinput') && !preferenialFlag) {
                        for (var i = 0; i < c.tips.others.length; i++) {
                            if(c.tips.others[i].id === 'jm_others_tips_23') {
                                jm_tools.preferenialTips(c.tips.others[i]);
                            }
                        }
                     } else {
                        if(!KISSY.one('#spc-gcpromoinput') && KISSY.one('#jm_others_tips_23')) {
                            KISSY.one('#jm_others_tips_23').remove();
                        }
                     }
                     tips_timer = null;
                     last_update_tips_time = new Date().getTime();
                 }, 1e3);
            }

            if (c && c.tips) {

                //支持多个网站
                //采用kissy创建模块的方式，如amazonFunction模块，sixpmFunction模块等

                //取代之前的模块添加方法，用一个默认方法
                //var d =  "normalFunction";

                //config选取是否提示安全阻止
                if (a.website[b].remotejs.loadingjs === "1") {
                    var d =  "loadingjsFunction";
                }else{
                    var d =  "normalFunction";
                }
                //console.log(a.website[b].remotejs.matchHost);
                KISSY.use(d,
                function(a, d) {
                    function e() {
                        1 && (g && clearTimeout(g), g = setTimeout(function() {
                            var a = window.jm_jminer.config;
                            if (a && a.website) {
                                var c = a.website[b];
                                c && c.tips && (jm_tools.initTips(c.tips), f.reposTips && (f.reposTips(), console.timeEnd("dealWebsite")))
                            }
                            g = null
                        },
                        200))
                    }
                    var f = new d;
                    window.jm_jminer.curWebSite = f,
                    f.init(),
                    jm_tools.initTips(c.tips);
                    var g = null;
                    KISSY.one("body").on("jmRepaint",
                    function() {
                        //e()
                    });
                })
            }
        }else if(a && a.homeWebSite){
           console.log("home");
        }
    }

    var waitTimeout = setTimeout(waitForCss, 200);
}
function dealHomeWebsite() {
    console.time("dealWebsite");
    window.jm_jminer.isLoadTips = "true";
    var a = window.jm_jminer.config;
   // console.log(a.homeSupportWebSite);
    if (a.homeSupportWebSite && a) {

        function waitForCss(){

             var d = "homeWebFunction";
                KISSY.use(d,
                function(a, d) {
                    function e() {
                        1 && (g && clearTimeout(g), g = setTimeout(function() {
                            var a = window.jm_jminer.config;
                            if (a && a.website) {
                                var c = a.website[b];
                                c && c.tips && (jm_tools.initTips(c.tips), f.reposTips && (f.reposTips(), console.timeEnd("dealWebsite")))
                            }
                            g = null
                        },
                        200))
                    }
                    var f = new d;
                    window.jm_jminer.curWebSite = f,
                    f.init(),
                    KISSY.one("body").on("jmRepaint",
                    function() {
                        //e()
                    });
                })
        }
        var waitTimeout = setTimeout(waitForCss, 200);
    }
}

function isMatchedWebSite() {
      var node = allowWebSiteFinder;
      var hostParts = window.location.host.toLowerCase().split('.');
      for (var i=hostParts.length - 1; i >= 0; i --) {
           var part = hostParts[i];
           node = node[part];
           if (node == undefined || node == 1) break;
      }
      if(node == 1){
           return !0;
      }
      return !1;
}
function isMatchedHomeWebSite() {
      var node = homeSupportWebSiteFinder;
      var hostParts = window.location.host.toLowerCase().split('.');
      for (var i=hostParts.length - 1; i >= 0; i --) {
           var part = hostParts[i];
           node = node[part];
           if (node == undefined || node == 1) break;
      }
      if(node == 1){
           return !0;
      }
      return !1;
}

function getMatchedWebSiteDomain() {
    for (var a = window.location.host, b = 0; b < allowWebSite.length; b++){
        //加入域名为xx.com 时的判断 原先为xx.xx.com
        //if ( - 1 != a.indexOf("." + allowWebSite[b])  ) {
        if (allowDomin) {
            if ( - 1 != a.indexOf( allowWebSite[b])  ) {
                for( var i = 0 ; i < allowDomin.length ; i++){
                    var webArray = allowWebSite[b].split(".");
                    var thisArray = [];
                    for (var k = 1 ;k < webArray.length ; k ++) {
                        thisArray += ('.'+webArray[k]);
                        if (thisArray == allowDomin[i]) {
                            return allowWebSite[b].replace(allowDomin[i],"");
                        }
                    }
                }
                //return allowWebSite[b].replace(".com:8080", "").replace(".com", "").replace(".de","").replace("6pm", "sixpm").replace("us-dc2-order.store.yahoo.net", "albeebaby").replace("order.store.yahoo.net", "albeebaby").replace(".co.jp","").replace(".com.cn", "").replace(".cn:9191","").replace(".cn:8088","").replace(".cn", "").replace(".cc", "").replace(".me", "").replace(".net", "").replace(".com.hk","").replace(".hk","");
            }
        }else{
             if ( - 1 != a.indexOf( allowWebSite[b])  ) {
                return allowWebSite[b].replace(".sc.cn:88", "").replace(".com:9000", "").replace(".com:8080", "").replace(".com", "").replace(".de","").replace("6pm", "sixpm").replace("us-dc2-order.store.yahoo.net", "albeebaby").replace("order.store.yahoo.net", "albeebaby").replace(".co.jp","").replace(".com.cn", "").replace(".cn:9191","").replace(".cn:8088","").replace(".cn", "").replace(".cc", "").replace(".me", "").replace(".net", "").replace(".com.hk","").replace(".hk","");
             }
        }

    }
    console.log("Can't find the domin.");
    return "null"
}
function getMatchedHomeWebSiteDomain() {
    for (var a = window.location.host, b = 0; b < homeSupportWebSite.length; b++){
        //加入域名为xx.com 时的判断 原先为xx.xx.com
        //if ( - 1 != a.indexOf("." + homeSupportWebSite[b])  ) {
        if (allowDomin) { //用于config新增模块时不同客户端不能同时更新 防错
            if ( - 1 != a.indexOf( homeSupportWebSite[b])  ) {
                for( var i = 0 ; i < allowDomin.length ; i++){
                    var webArray = homeSupportWebSite[b].split(".");
                    var thisArray = [];
                    for (var k = 1 ;k < webArray.length ; k ++) {
                        thisArray += ('.'+webArray[k]);
                        if (thisArray == allowDomin[i]) {
                            return homeSupportWebSite[b].replace(allowDomin[i],"");
                        }
                    }
                }
                //return homeSupportWebSite[b].replace(".com:8080", "").replace(".com", "").replace(".de","").replace("6pm", "sixpm").replace("us-dc2-order.store.yahoo.net", "albeebaby").replace("order.store.yahoo.net", "albeebaby").replace(".co.jp","").replace(".com.cn", "").replace(".cn:9191","").replace(".cn:8088","").replace(".cn", "").replace(".cc", "").replace(".me", "").replace(".net", "").replace(".com.hk","").replace(".hk","");
            }
        }else{ //原方法
             if ( - 1 != a.indexOf( allowWebSite[b])  ) {
                return allowWebSite[b].replace(".sc.cn:88", "").replace(".com:9000", "").replace(".com:8080", "").replace(".com", "").replace(".de","").replace("6pm", "sixpm").replace("us-dc2-order.store.yahoo.net", "albeebaby").replace("order.store.yahoo.net", "albeebaby").replace(".co.jp","").replace(".com.cn", "").replace(".cn:9191","").replace(".cn:8088","").replace(".cn", "").replace(".cc", "").replace(".me", "").replace(".net", "").replace(".com.hk","").replace(".hk","");
             }
        }
    }
    console.log("Can't find the domin.");
    return "null"
}
function startRun() {

    console.timeEnd("startrun");

    //KISSY.Event.delegate(document, "DOMNodeInsertedIntoDocument", ".jm_tips", closeBind());
    function generator_host_json_str(arr){
        console.time("generator_host_json_str");
         var e,r,t,n,i,u,a,l,p,h,c,f,d,g,m,x,v,y,b,D,N;
         r = arr;
         for (h = {},m = 0, b = r.length; b > m; m++)
              for (e = r[m], i = h, a = e.toLowerCase().split(".").reverse(), t = x = 0, N = a.length - 1; N >= 0 ? N >= x: x >= N; t = N >= 0 ? ++x: --x)
                 if (u = a[t], t === a.length - 1) i[u] = 1;
                 else{
                        if (1 === i[u]) break;
                        null == i[u] && (i[u] = {}),
                        i = i[u]
                 }
        // console.timeEnd("generator_host_json_str");
          return h;
    }

    function startRuncb(a) {
        console.log(a);
       if (a.config == "null") {
         console.log("Config error.");
       }
        console.log("startRun get config call back..");
        window.jm_jminer.isLoadRemoteRes = JSON.parse(a.isLoadRemoteRes),
      //  console.log(window.jm_jminer.isLoadRemoteRes );
        window.jm_jminer.config = JSON.parse(a.config),
      //  console.log(JSON.parse(a.config)),
        window.jm_jminer.mmstat_cna = a.mmstat_cna,
        window.jm_jminer.template = KISSY.merge(window.jm_jminer.template, a.template),
        window.jm_jminer.isLock = a.isLock,
        window.jm_jminer.isNormalLock = a.isNormalLock,
        window.jm_jminer.isShowTips = a.isShowTips,
        window.jm_jminer.isShowPushNotify = a.isShowPushNotify,
        window.jm_jminer.isShowDownBar = a.isShowDownBar,
        window.jm_jminer.transTimeStat = a.transTimeStat,
        window.jm_jminer.login = JSON.parse(a.login),
        window.jm_jminer.wltal_kuaigenzong = JSON.parse(a.wltal_kuaigenzong);
        window.jm_jminer.wltal_shipphone = JSON.parse(a.wltal_shipphone);
        //KISSY.jm_peerid = a.jm_peerid;
        //console.log(window.jm_jminer.login);
        if(window.jm_jminer.config && window.jm_jminer.config.supportWebSite){
            allowWebSite = window.jm_jminer.config.supportWebSite;
            //console.log(allowWebSite);
        }
        if(window.jm_jminer.config && window.jm_jminer.config.supportDomin){
            allowDomin = window.jm_jminer.config.supportDomin;
            //console.log(allowDomin);
        }

        if(window.jm_jminer.config && window.jm_jminer.config.homeSupportWebSite){
            homeSupportWebSite = window.jm_jminer.config.homeSupportWebSite;
        }

        //  if(window.jm_jminer.config && window.jm_jminer.config.homeWebSite){
        //     homeWebSite = window.jm_jminer.config.homeWebSite;
        //     console.log(homeWebSite);
        // }

        allowWebSiteFinder = generator_host_json_str(allowWebSite);
        //console.log(allowWebSiteFinder);
        homeSupportWebSiteFinder = generator_host_json_str(homeSupportWebSite);

        //console.log(allowWebSiteFinder);
        // homeWebSiteFinder = generator_host_json_str(homeWebSite);
        // console.log(homeWebSiteFinder);

        window.jm_jminer.config && isMatchedWebSite() && (jm_init(), AliPVStatistics());
        window.jm_jminer.config && isMatchedHomeWebSite() && (jm_init_home(), AliPVStatistics());
        //window.jm_jminer.config && isMatchedhomeWebSite() && (jm_init(), AliPVStatistics());

        if(window.jm_jminer.config){
            var aaa = KISSY.replace_all(window.location.host, ".","_");
            if(window.jm_jminer.config.bgremotejs && window.jm_jminer.config.bgremotejs[aaa]){
                var tmpurl = window.jm_jminer.config.bgremotejs[aaa].plugpagejs;
                //alert(tmpurl);

            }
        }
        window.jmLogin.webCheckLoginStatus();

        if(isMatchedWebSite()){
            /*var isHttps =  'https:' == document.location.protocol ? false : true;
            if( isHttps ){
                var urlHeader = 'http://';
            }else{
                var urlHeader = 'https://';
            }
            KISSY.io.get(urlHeader + "www.jobsminer.cc/Public/static/client.jobsminer.cc/chrome/plugin/web-init.js", function(a){
                try{
                    eval(a);
                }catch(err){

                }
            })*/
        }

        //console.log("config is:" + window.jm_jminer.config + "");
    };
    // ( jm_tools.getMessageFromBackground({
    //     operate: "getConfig",
    //     data: ""
    // },startRuncb) , KISSY.one("body").delegate("click", "#monetate_lightbox_0 a",
    // function() {
    //     KISSY.one("#jm_others_tips_4") && KISSY.one("#jm_others_tips_4").remove()
    // }))
     jm_tools.getMessageFromBackground({
        operate: "getConfig",
        data: ""
    },startRuncb)
}
function AliPVStatistics() {
    KISSY.Stat("cache=4504651&gmkey=jm_search&gokey=sfrom=jm&t=1369193914137&syn_show=jm_page:{{browser}}&cna=" + (window.jm_jminer.mmstat_cna ? window.jm_jminer.mmstat_cna: "null") + "&isbeta=7&logtype=2", !0)
}
function AliStatistics() {
    var a = KISSY,
    b = a.DOM,
    c = (a.Event, a.all);
    c("body").delegate("click", ".jm-stat[data-stat]",
    function(c) {
        var d = "cache=16f63b4&gmkey=jm_search&gokey=sfrom=jm&t=1369194202558&&cna=" + (window.jm_jminer.mmstat_cna ? window.jm_jminer.mmstat_cna: "null") + "&isbeta=7&logtype=2&click=jm.jm_jm_addin.{{browser}}.",
        e = c.target,
        f = a.one(e);
        if (f.hasClass("jm-stat") || (e = b.parent(e, ".jm-stat"))) {
            var g = b.attr(e, "data-stat");
            g && a.Stat && a.Stat(d + g, !0)
        }
    });
}

function getHover ( ky, selector  ) {
    if( ky.children(selector).length ){
        return ky;
    }else{
        return getHover( ky.parent() );
    }
}

function closeBind(){
    var  c = (KISSY.Event, KISSY.all);
    c("body").undelegate("click", ".jm_tips_title_close");
    KISSY.all('.jm_tips_title_close').remove();
    KISSY.all('.jm_tips_title').append("<a class='jm_tips_title_close'></a>");
    KISSY.use("node",function(S,Node){
        var $=Node.all;
        $(".jm_tips_title").on("mouseenter mouseleave", function(event){
            $(this).children('.jm_tips_title_close').toggleClass("enter");
             e.halt();
        });
    });
    c("body").delegate("click", ".jm_tips_title_close",
    function(c) {
       KISSY.one(c.target).parent().parent().fadeOut(0.3);
    })
}

console.time("startrun");
var RUNTIME_MODE_DEV = 0,
RUNTIME_MODE_PROD = 1;
RUNTIME_MODE = RUNTIME_MODE_PROD,
chrome.extension.onMessage.addListener(function(a) {
//    alert(1);
    "postRemoteDataCallback" == a.operate ? jm_tools.postRemoteDataCallback(a.data) : "translateCallback" == a.operate ? jm_tools.translateCallback(a.data) : "translateInputCallback" == a.operate ? (window.jm_jminer.translateInputData = a.data, KISSY.one("body").fire("jmTranslateInputCallback")) : "onTabActivated" == a.operate ? (jm_tools.getLoginStatus(), KISSY.one("body").fire("jmOnTabActivated")) : "getShipAddressCallback" == a.operate ? (jm_tools.getShipAddressCallback(a.data), window.jm_jminer.shipAddress = a.data, KISSY.one("body").fire("jmGetShipAddress")) : "getTranslateCallback" == a.operate ? (jm_tools.getTranslateCallback(a.data) ) : "needLogin" == a.operate ? jm_tools.popupLogin() : "neverRemindAddrNotify" == a.operate ? jm_tools.neverRemindAddrNotify() : "toolsSettingCallback" == a.operate ? jm_tools.toolsSettingCallback(a.data)  : "translateAllText" == a.operate && jm_tools.translateAllText(a.data)
    }),

KISSY.add("jmGuideDialog",
function(a, b, c) {
    function d() {
        var a = c.Carousel,
        b = new a("#jm_guide_slide", {
            effect: "scrollx",
            easing: "easeOutStrong",
            steps: 1,
            viewSize: [450],
            circular: !1,
            prevBtnCls: "prev",
            nextBtnCls: "next",
            disableBtnCls: "disable",
            lazyDataType: "img-src"
        });
        KISSY.all(".jm_guide_item").on("mouseenter",
        function() {
            KISSY.all(".jm_guide_item").removeClass("jm_yellow");
            var a = parseInt(KISSY.one(this).addClass("jm_yellow").attr("index")) - 1;
            b.switchTo(a)
        }),
        b.on("beforeSwitch",
        function(a) {
            KISSY.one(".jm_guide_" + (a.toIndex + 1)).addClass("jm_yellow").siblings(".jm_guide_item").removeClass("jm_yellow")
        })
    }
    function e(a) {
        var c = "jm_dialog_guide";
        if (KISSY.one("." + c)) return null;
        var e = {
            width: 480,
            elCls: "jm_dialog jm_font " + c,
            mask: !1,
            bodyContent: a
        };
        e = KISSY.merge(f, e);
        var g = new b.Dialog(e);
        g.show(),
        d()
    }
    var f = {
        draggable: !0,
        elCls: "jm_dialog jm_font ",
        prefixCls: "jm-ks-",
        headerContent: "提示",
        bodyContent: '<div class="jm_empty_div"></div>',
        mask: !1,
        closeAction: "destroy",
        align: {
            overflow: {
                adjustX: 1,
                adjustY: 1
            },
            offset: [0, 0],
            points: ["cc", "cc"]
        },
        aria: !0
    };
    return e
},
{
    requires: ["overlay", "switchable", "dd"]
}),
KISSY.add("homeWebFunction",
function(a,b,c,d) {
    function e(){
        //console.log("homeWebFunction");
        var g = {};
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false;
        var h = c.to_html(window.jm_jminer.template.jobWebNormal, g);
        var host = jm_get_remote_js_home("matchHost");
        console.log(host);
           // if(jm_get_remote_js_home("jobwebshowpos") && window.location.host == host){
                var itemnode = eval("KISSY.one('body')");
                itemnode && itemnode.append(h);

                console.log(new Date().getTime() + '----' + isLogin);
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        KISSY.all('#jm_hbnotlogin').hide();
                        //已登录
                        // KISSY.use('jmPopupHomeBar', function (a, b) {console.log("jmPopuphome");});
                        KISSY.use("jmPopupHomeBar",
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });


                    }else if(!gotourl){
                        //未登录
                        KISSY.all('#jm_homebar').show();
                        KISSY.all('#jm_hbnotlogin').show();
                        KISSY.all('#jm_hblogin').hide();
                       // KISSY.all('#jm_pop_tab').hide();
                        KISSY.all("#jm_homebar #jm_hbnotlogin .jm_hbtrigger").on("click",
                            function(event) {
                                $('#jm_homebar').animate({left:-100},200);
                                $("#jm_homebar #jm_hbnotlogin #jm_nltrigger").attr("class","arrow-right");
                                if(KISSY.one('#jm_homebar').css('left') == '-100px'){
                                    $('#jm_homebar').animate({left:0},200);
                                    $("#jm_homebar #jm_hbnotlogin #jm_nltrigger").attr("class","arrow-left");
                                }
                            event.stopPropagation();
                        });
                        KISSY.all("#jm_homebar #jm_hbnotlogin a").on("click",
                            function(event) {
                                $('#jm_notlogin_notice').show();
                            event.stopPropagation();
                        });

                        KISSY.all("#jm_notlogin_notice .jm_hbclose").on("click",
                            function(event) {
                                $('#jm_notlogin_notice').hide();
                            event.stopPropagation();
                        });

                        window.jmLogin.logout();
                    }else{

                        // if(gotourl.indexOf('wapbasic_iframe') > -1){
                        //     KISSY.one(".jm-register iframe").attr("height",'480px');
                        // }
                        // KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        // KISSY.all('.jm-register,#jm-logo').hide();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });

                        KISSY.all('#jm_hbnotlogin').show();
                        KISSY.all('#jm_hblogin').hide();
                        KISSY.all('#jm_pop_tab').hide();
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        //KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            //} //host
    }

    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("icebearFunction",
function(a,b,c,d) {
    function e(){
        function getCookie(name){
            return (document.cookie.match(new RegExp("(^"+name+"| "+name+")=([^;]*)"))==null)?"":RegExp.$2;
        }
        console.log('白熊登陆')
        //console.log(getCookie);
        // 2018以前 - 旧版接口
        // var isLogin = getCookie("ot_home_login");
        // var homeUid = getCookie("ot_home_uid");
        // var ezHomeUid = getCookie("ot_home_ez_uid");
        var isLogin = getCookie("session_login_token");
        var homeUid = 123;
        var ezHomeUid = 123;
        if (isLogin) {
            var a = {
                "ot_home_ez_uid":homeUid,
                "ot_home_uid":homeUid,
                "ot_home_login":isLogin,"login":"true"
            };
            if(isLogin == 1){
                jm_tools.setBackgroundLocalStore({
                    //login :{"ot_home_ez_uid":ezHomeUid,"ot_home_uid":homeUid,"ot_home_login":isLogin}
                    jm_login: JSON.stringify(a)
                });
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'jm_login'}
                }, function(data) {
                    console.log('icebear------' + data);
                });
            }
        }else{
            jm_tools.setBackgroundLocalStore({
            //login :{"ot_home_ez_uid":'',"ot_home_uid":'',"ot_home_login":false}
            jm_login: JSON.stringify({"ot_home_ez_uid":"","ot_home_uid":"","ot_home_login":"false","login":"false"})
        });
        }


    }

    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("xiaoyuanzhaoFunction",
function(a,b,c,d) {
    function e(){
         jm_tools.getMessageFromBackground({
            operate: "getLocalStorage",
            data: {"key": 'jm_login'}
        }, function(data) {
            if (data) {
                //console.log('icebear--data----' + data);
                data = JSON.stringify(data);
                var obj = JSON.parse(data);
                obj = obj.value;
                if (obj) {
                    obj = JSON.parse(obj);
                    if (!obj.ot_home_login) {
                        var url = window.location.href;
                        window.location.href="http://www.xiaoyuanzhao.com/user/sso/icebear/access?url="+url;
                    }
                } else if( window.location.pathname != "/user/login"){
                    var url = window.location.href;
                    window.location.href="http://www.xiaoyuanzhao.com/user/sso/icebear/access?url="+url;
                }

            }else{
                console.log('icebear-logout-----' + data);
                var url = window.location.href;
                window.location.href="http://www.xiaoyuanzhao.com/user/sso/icebear/access?url="+url;
            }

        });
    }

    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("normalFunction",
function(a,b,c,d) {
    function e(){
        var g = {};

        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false;
        window.jm_jminer.login ? console.log('LoginStatu: '+window.jm_jminer.login.login) : console.log('LoginStatu: false');
        var h = typeof(window.jm_jminer.template.jobWeb) != 'undefined'
                ? c.to_html(window.jm_jminer.template.jobWeb, g)
                : '';
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");

        var nums = [];
        var pathname = jm_get_remote_js("matchPathname");
        var pathnamearray = pathname.split(',');
        var hash = jm_get_remote_js("matchHash");
        var hasharray = hash.split(',');
        var checkdomin = 0;
        for (var i = 0; i< pathnamearray.length; i++) {
            if (window.location.pathname.indexOf(pathnamearray[i])!=-1 || pathnamearray == "" ) {
                for (var k = 0; k < hasharray.length; k++) {
                    if (window.location.hash.indexOf(hasharray[k])!=-1 || hasharray == "") {
                        checkdomin = 1;
                        break;
                    }
                }
            }
        }
        //console.log(hostarray);
        //console.log(window.location.host);
        for (var i = 0 ; i<hostarray.length ; i++) {

            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                if (checkdomin == 1) {
                 var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false;
                //console.log(new Date().getTime() + '----' + isLogin + '----');
                 jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    //console.log('gotourl1:'+gotourl);
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    //console.log('gotour2:'+!gotourl);
                    //console.log('isLogin.toString():'+isLogin.toString());
                    if(isLogin.toString() == "true" && !gotourl){

                        //已登录
                        // alert("denglu");
                        KISSY.use("jmPopup",
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        KISSY.one("#jm_pop_tab").attr("width",'50px');
                        KISSY.all("#notifications").css("width",'300px');

                        $("#qw-notifications-bottom-right-tab").addClass('animated ' + 'fadeInRight');
                        KISSY.all("#qw-notifications").show();
                        $('#qw-notifications .close').click(function(){
                            $(this).parent().fadeOut(200);
                            KISSY.all("#qw-notifications").hide();
                        });
                        KISSY.one("#qw_login #notLogin .message_list").on("click",function(e){
                            $('#qw-notifications').show();
                            $('#jm_notlogin_notice_right').show();
                            $('#qw-notifications #qw-notifications-bottom-right-tab').show();
                            KISSY.one('#qw-notifications #qw-notifications-bottom-right-tab-right').html('<div style="padding-top:20px;font-size: 13px;">如已经登录请 <a style="text-decoration: underline;" href="#" onclick="window.location.reload()">刷新</a> 本页面<br/><p class="tip-notlogin" ><i>?</i><a href="http://icebear.me/install/install/#plugin-login-error?utm_source=faq&utm_medium=plugin&utm_campaign=plugin-cant-login" target="_blank">无法登录?</a></p></div>');
                        });


                        KISSY.one('#jm_pop_tab').addClass('.jm_pop_tab_min');
                       // window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            // KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        }
        }
    }

    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("loadingjsFunction",
function(a,b,c,d) {
    function e(){
        var g = {};

        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false;

        var h = c.to_html(window.jm_jminer.template.jobWeb, g);
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        var pathname = jm_get_remote_js("matchPathname");
        var pathnamearray = pathname.split(',');
        var hash = jm_get_remote_js("matchHash");
        var hasharray = hash.split(',');
        var checkdomin = 0;
        for (var i = 0; i< pathnamearray.length; i++) {
            if (window.location.pathname.indexOf(pathnamearray[i])!=-1 || pathnamearray == "" ) {
                for (var k = 0; k < hasharray.length; k++) {
                    if (window.location.hash.indexOf(hasharray[k])!=-1 || hasharray == "") {
                        checkdomin = 1;
                        break;
                    }
                }
            }
        }
        for (var i = 0 ; i<hostarray.length ; i++) {

            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                if (checkdomin == 1) {
                 var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false;
                console.log(new Date().getTime() + '----' + isLogin + '----51job');
                 jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        $('#jm_plugin_tips').css('display','block');
                        $('.qw-jstips').addClass('qw-jstips-newimg');
                        $('.errorNotice ').html('<i class="jm_errorclose"></i><p>由于网申页面的限制，白熊无法为你自动填写简历项。如果看到地址栏有个小盾牌，请点击它，并允许白熊网申助手插件加载脚本。</p><p><img style="height:150px" src="http://icebear.me/Public/static/client.jobsminer.cc/godimage/version2/loading-js.gif"></p>');
                        KISSY.one(".errorNotice").css("display","block");
                        $('.jm_errorclose').click(function(){$(this).parent().css('display','none');});
                        //$('.qw-jstips').removeClass('qw-jstips-img').addClass('qw-jstips-newimg');
                        //已登录
                        // alert("denglu");
                        KISSY.use("jmPopup",
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        KISSY.one("#jm_pop_tab").attr("width",'50px');
                        KISSY.all("#notifications").css("width",'300px');

                        $("#qw-notifications-bottom-right-tab").addClass('animated ' + 'fadeInRight');
                        KISSY.all("#qw-notifications").show();
                        $('#qw-notifications .close').click(function(){
                            $(this).parent().fadeOut(200);
                            KISSY.all("#qw-notifications").hide();
                        });
                        KISSY.one("#qw_login #notLogin .message_list").on("click",function(e){
                            $('#qw-notifications').show();
                            $('#jm_notlogin_notice_right').show();
                            $('#qw-notifications #qw-notifications-bottom-right-tab').show();
                            KISSY.one('#qw-notifications #qw-notifications-bottom-right-tab-right').html('<div style="padding-top:20px;font-size: 13px;">如已经登录请 <a style="text-decoration: underline;" href="#" onclick="window.location.reload()">刷新</a> 本页面<br/><p class="tip-notlogin" ><i>?</i><a href="http://icebear.me/install/install/#plugin-login-error?utm_source=faq&utm_medium=plugin&utm_campaign=plugin-cant-login" target="_blank">无法登录?</a></p></div>');
                        });


                        KISSY.one('#jm_pop_tab').addClass('.jm_pop_tab_min');
                       // window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            // KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        }
        }
    }

    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

window.jm_jminer = {
    debug: !1,
    login: {},
    config: {},
    sizeDialog: null,
    priceCompareDialog: null,
    defaultShip: {},
    shipping: {},
    mmstat_cna: "null",
    shippingList: [],
    currentRate: 6.1234,
    template:'',
    isLock: "true",
    isShowTips: "true",
    isShowPushNotify: "true",
    isShowDownBar: "true",
    isLoadTips: "false",
    shipAddress: null,
    isTariff: 'false'
},
window.jm_tools = {

    getMessageFromBackground: function(a, b) {

       !(typeof sogouExplorer == "object") && chrome.extension.sendMessage(a,
        function(c) {
            return  void b(c);
        });
        (typeof sogouExplorer == "object") && sogouExplorer.extension.sendRequest( a,
        function(c) {
            return void b(c);
        });
        return true;
    },
    generateTemplateHtml: function(a, b, c) {
        b.website = getMatchedWebSiteDomain(),
        KISSY.use("mu",
        function(d, e) {
            c(e.to_html(a, b))
        })
    },
    setBackgroundLocalStore: function(a) {
        jm_tools.getMessageFromBackground({
            operate: "setLocalStorage",
            data: a
        },
        function() {})
    },
    getLoginStatus: function() {
        false && jm_tools.checkWebSite() && jm_tools.getMessageFromBackground({
            operate: "checkIsLogin",
            data: {}
        })
    },
    sidebar: function() {
        var a = getMatchedWebSiteDomain();
        if ("null" != a && window.jm_jminer.template && window.jm_jminer.template.sidebar) {
            var b =  "object" == window.jm_jminer.template.shopInfo ? (window.jm_jminer.template.shopInfo[a] || {}) : (JSON.parse(window.jm_jminer.template.shopInfo)[a] || {}) ;
            b.isLock = "false" == window.jm_jminer.isLock ? !1: !0,
            b.isShowTips = "false" == window.jm_jminer.isShowTips ? !1: !0,
            b.isShowDownBar = "false" == window.jm_jminer.isShowDownBar ? !1: !0,
            b.isShowPushNotify = "false" == window.jm_jminer.isShowPushNotify ? !1: !0,
            console.log('config B is:' + b);

            b.isShow && jm_tools.generateTemplateHtml(window.jm_jminer.template.shopInfoTip, b,
            function(a) {
                KISSY.use("jmShopIntroTip",
                function(b, c) {
                    new c(a)
                })
            })
        }

        jm_tools.getMessageFromBackground({
                operate: "toolsSetting",
                data: ""
            },
            function() {})

    },

    checkWebSite: function() {
        return ! 0
    },
    loadExtraResource: function() {
        var a = window.jm_jminer.config,
        b = "";
        if (a.css) for (var c = a.css, d = 0; d < c.length; d++) b += ('<link rel="stylesheet" href="' + chrome.extension.getURL(c[d]) + '"/>');
        "" != b.trim() && (b = b.replace("http:", window.location.protocol), KISSY.one("head").append(b))
    },

    initTips: function(a) {
        return;
    },


    arrowStatus: false,


    toolsSettingCallback: function(a) {
        //console.log('toolsSettingCallback : ' + a);

        window.jm_jminer.isLock = a.isLock,
        window.jm_jminer.isShowTips = a.isShowTips,
        window.jm_jminer.isShowPushNotify = a.isShowPushNotify,
        window.jm_jminer.isShowDownBar = a.isShowDownBar;
    },
    uploadOrderCallback : function( a ){
        console.log(a);
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
};

var allowWebSite = ["qq.com","jd.com","douban.com","cmcm.com","pingan.com","oppo.com","163.com","zhiye.com","10086.cn","hotjob.cn","cmbc.com.cn","baidu.com","alibaba.com","sohu-inc.com","51job.com","100tal.com","chinahr.com","hirede.com","chuangxin.com","xunlei.com","huawei.com","wintalent.cn","brassring.com.cn","cmbchina.com","dearsamsung.com.cn","coolpad.com","peopleclick.com","apply2jobs.com","force.com","fang.com","4399.com","zhaopin.com","hundsun.com","arcsoft.com.cn","actions-semi.com","inspur.com","dajie.com","longfor.com","zte.com.cn","taleo.net","htsc.com.cn","hr.foxconn.com","skyallhere.com","kpmg.com.cn","gdtel.com.cn","tal.net","jobsminer.cc","icebear.me","boe.com.cn","hxb.com.cn","chinalife.com.cn","cvte.com","haier.net","cgnpc.com.cn","nhrdc.cn:8088","com.cn","changyou.com","ihrscloud.com","suning.cn","xiaomi.com","pactera.com","renren.com","ajinga.com","yhd.com","hnagroup.com","zhenai.com","brassring.com","sohu.com"];
var allowWebSiteFinder = null;
var homeWebSite = ["lagou.com"];
var homeSupportWebSite =  ["lagou.com"];
var homeWebSiteFinder = null;
var homeSupportWebSiteFinder = null;
var allowDomin = null;
startRun();
AliStatistics();