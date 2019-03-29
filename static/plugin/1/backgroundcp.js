/*! 2014-06-11 12:06:41 */
function isSougouExplorer()
{
    return (typeof sogouExplorer == "object") ? true : false;
}

var host_regexps = {
    hostname    : /http:\/\/([\w\d\._-]+)/,
    fullPath    : /[\w]+:\/\/[\S]+/,
    shortPath   : /\/[\S]*/,
    httpVersion : /HTTP\/\d.\d/,
    port        : /:[\d]+/,
    parse       : function(regexp, string) {
        var match = string.match(host_regexps[regexp]);
            return (match) ? match[1] : null;
    }
};

function jm_get_remote_js(url,  remote_js_key){
    if(bg_global_jm_config == null && localStorage.jm_config){
        bg_global_jm_config = JSON.parse(localStorage.jm_config);
    }

    if(bg_global_jm_config == null)
        return null;


    var hostname = host_regexps.parse('hostname', url);
    var a =  bg_global_jm_config;
    if (a && a.bgremotejs) {
        var c = KISSY.replace_all(hostname, ".","_");
        if(a.bgremotejs[c]){
            return a.bgremotejs[c][remote_js_key];
        }
    }

    return undefined;
}


function _delaybackgroundInit(){
    var z = JSON.parse(localStorage.jm_config || null);

    KISSY.use("jmintervalquery", function(a, b){
                    b(z.schedule_interval || 9e3);
    });  
    /*setTimeout(function(){
        KISSY.use("wlquerystockprice", function(a, b){
                b.init(z.stockprice_interval || 9e3, z.stockprice_item_interval || 9e3);
            });
    }, z.stockprice_init_ts || 9e3); */   

}

function beginProxy(list) {
    jm_proxy_global_config.setWaitProxyUrlList([]);
};

function _backgrountInit() {
    if(!localStorage.isLoadRemoteRes)
        localStorage.isLoadRemoteRes = "true";
    
    if(!localStorage.isShowDownBar)
        localStorage.isShowDownBar = "true";
    
    if(!localStorage.isShowPushNotify)
        localStorage.isShowPushNotify = "true";
    
    if(!localStorage.isShowTips)
        localStorage.isShowTips = "true";

    if(!localStorage.isLock)
        // localStorage.isLock = "true";
        localStorage.isLock = "false";

    if(!localStorage.isNormalLock)
        // localStorage.isLock = "true";
        localStorage.isNormalLock = "false";    
 
    localStorage.jm_peerid || (localStorage.jm_peerid  = KISSY.uuid(),0);
    
    if(localStorage.jm_peerid.indexOf("=") == -1)
    {
        KISSY.jm_peerid = localStorage.jm_peerid + "&vi=" + jm_VERSION + "&bw=" + jm_browsername;
        localStorage.jm_peerid = KISSY.jm_peerid;
    }else{
        var tmppid =  localStorage.jm_peerid.indexOf("&vi=");
        if(tmppid > 0){
            KISSY.jm_peerid = localStorage.jm_peerid.substr(0,tmppid) + "&vi=" + jm_VERSION + "&bw=" + jm_browsername;
            localStorage.jm_peerid = KISSY.jm_peerid;
        }
    }
    jm_tools.init();
    KISSY.jm_peerid = localStorage.jm_peerid;

    if(!localStorage["newVersionTips" + jm_VERSION]){
            setTimeout(function(){
                jm_tools.setPopupBadgeText(1);
                notification.create("notify_proxy_status", "Icebear白熊求职助手1.0.2.1 版本上线啦! ", "支持最新最热的企业网申, 为你带来前所未有的方便体验.求职路上, 有我陪伴. 详情请猛击…",
                function() {
                chrome.tabs.create({
                    url: "http://icebear.me/"
                    });
                });
                },
             1e3);
          localStorage["newVersionTips" + jm_VERSION] = "true";
    }    

}
var jmRuntime = "background",
jm_VERSION = "1.0.0.0",
bg_global_jm_config = null,
RUNTIME_MODE_DEV = 0,
RUNTIME_MODE_PROD = 1;
RUNTIME_MODE = RUNTIME_MODE_PROD;
var jmTrackAjaxModule = null;
!isSougouExplorer() && chrome.extension.onMessage.addListener(function(a, b, c) {
     "postRemoteData" == a.operate ? c(jm_tools.postRemoteData(a.data, a, b, c, a.callback)) : "getRemoteData" == a.operate ? c(jm_tools.getRemoteData(a.data, a, b, c, a.callback)) :  "hostIsProxy" == a.operate ? c(jm_proxy_global_config.getHostProxyStatus(a.data, a, b, c)) : "queryTrackerInfo" == a.operate ? c(jm_tools.queryTrackerInfo(a.data)) : "addTrackerInfo" == a.operate ? c(jm_tools.addTrackerInfo(a.data)) : "getLocalStorage" == a.operate ? c(jm_tools.getLocalStorage(a.data)) : "queryremind" == a.operate ? c(jm_remind_mangager_interface.queryremind(a.data)) : "addpriceremind"==a.operate ? c(jm_remind_mangager_interface.addpriceremind(a.data)) : "updatePriceRemind" == a.operate ? c(jm_remind_mangager_interface.updatePriceRemind(a.data)) : "addstockremind" == a.operate ? c(jm_remind_mangager_interface.addstockremind(a.data)) :  "getAmazonAjaxv2" == a.operate ? c(jm_tools.getlastAmazonAjaxv2(a.data)) : "getConfig" == a.operate ? c(jm_tools.getConfig()) : "translate" == a.operate ? jm_tools.translate(a.data, a, b, c, 'translateCallback') : "translateInput" == a.operate ? jm_tools.translate(a.data, a, b, c, "translateInputCallback", a.toLanguage) : "setLocalStorage" == a.operate ? jm_tools.setLocalStorage(a.data) : "checkIsLogin" == a.operate ? c(localStorage.jm_login) :  "submitOrder" == a.operate ? notification.submitOrder(a.data, a, b, c) : "clipboardWrite" == a.operate ? jm_tools.clipboardWrite(a.data, a, b, c) : "showAddrNotify" == a.operate ? jm_tools.showAddrNotify(a.data, a, b, c) : "toolsSetting" == a.operate && jm_tools.toolsSetting(a.data, a, b, c )
});
isSougouExplorer() && sogouExplorer.extension.onRequest.addListener(function(a, b, c) {
     "postRemoteData" == a.operate ? c(jm_tools.postRemoteData(a.data, a, b, c, a.callback)) : "getRemoteData" == a.operate ? c(jm_tools.getRemoteData(a.data, a, b, c, a.callback)) : "hostIsProxy" == a.operate ? c(jm_proxy_global_config.getHostProxyStatus(a.data, a, b, c)) : "queryTrackerInfo" == a.operate ? c(jm_tools.queryTrackerInfo(a.data)) : "addTrackerInfo" == a.operate ? c(jm_tools.addTrackerInfo(a.data)) : "getLocalStorage" == a.operate ? c(jm_tools.getLocalStorage(a.data)) : "queryremind" == a.operate ? c(jm_remind_mangager_interface.queryremind(a.data)) : "addpriceremind"==a.operate ? c(jm_remind_mangager_interface.addpriceremind(a.data)) : "addstockremind" == a.operate ? c(jm_remind_mangager_interface.addstockremind(a.data)) :  "getAmazonAjaxv2" == a.operate ? c(jm_tools.getlastAmazonAjaxv2(a.data)) : "getConfig" == a.operate ? c(jm_tools.getConfig()) : "translate" == a.operate ? jm_tools.translate(a.data, a, b, c, 'translateCallback') : "translateInput" == a.operate ? jm_tools.translate(a.data, a, b, c, "translateInputCallback", a.toLanguage) : "setLocalStorage" == a.operate ? jm_tools.setLocalStorage(a.data) : "checkIsLogin" == a.operate ? c(localStorage.jm_login) :  "submitOrder" == a.operate ? notification.submitOrder(a.data, a, b, c) : "clipboardWrite" == a.operate ? jm_tools.clipboardWrite(a.data, a, b, c) : "showAddrNotify" == a.operate ? jm_tools.showAddrNotify(a.data, a, b, c) : "toolsSetting" == a.operate && jm_tools.toolsSetting(a.data, a, b, c )
});
localStorage.isLoadRemoteRes = "true";
var requestNewMessage = function() {
    return;
    var url = 'http://api.walatao.com/tp/index/message/newc?uid=' + jm_tools.getUserId(),
        config = JSON.parse(localStorage.jm_config),
        reuqest = function() {
            KISSY.io.get(url, function(data) {
                console.log('loop request for new message!');
                data.data[0].ctn !== 0 && setPopupBadgeText(data.data[0].ctn);
            });
        };

    if(config.newMessageInterval) {
        reuqest();
        setInterval(function() {
            reuqest();
        }, config.newMessageInterval);
    };
};
var isLoadRemoteRes = localStorage.isLoadRemoteRes && "true" == localStorage.isLoadRemoteRes ? !0: !1,
jm_tools = {
    getUserId:function(){
        var userid = 0 ;
        if(localStorage.jm_login){
            var t1 = JSON.parse(localStorage.jm_login);
            userid = (t1.login ? parseInt(t1.ot_home_uid) : 0);
        }
       
        if(isNaN(userid))
            userid = 0;

        return userid;
    },

    getRemoteData:  function(a, b, c, d, e) {
            KISSY.io.get(a.url, function(z){

                var resp = typeof z == "object" ? z : JSON.parse(z);
                chrome.tabs.sendMessage(c.tab.id, {
                    operate: e || "getRemoteDataCallBack",
                    data: resp
                },
                function() {})  
            })
    }, 

    postRemoteData:  function(a, b, c, d, e) {
        chrome.cookies.getAll({
           domain: ".icebear.me"
        },
        function(f) {
            var h = [];
            if (f.length > 0) for (var d = 0; d < f.length; d++) {
                var g = f[d];
                "ot_home_uid" == g.name && ( h["ot_home_uid"] = g.value);
            } 
            if( h["ot_home_uid"] != ''){
                var f = "http://api.walatao.com/interface.php?action=uploadData";
                a.u = h['ot_home_uid'];
                KISSY.io.post(f,{
                            0:JSON.stringify(a)
                        }, 
                function(a) {
                    chrome.tabs.sendMessage(c.tab.id, {
                        operate: e || "postRemoteDataCallback",
                        data: b
                    },
                    function() {})
                })
            }
        });
    }, 

    addTrackerInfo:function(a){
        if(jmTrackAjaxModule){
                jmTrackAjaxModule.getTrackList(1);
                var ret =  jmTrackAjaxModule.addToTrackList(a, 0, 1);
                if(!ret){
                    jmTrackAjaxModule.getShipStatus(!0);
                    localStorage.need_show_tracker_red_tips = "true";
                }
        }

        return {"success":1};
    },
    queryTrackerInfo:function(a){
        var ddd = null;
        if(jmTrackAjaxModule){
            jmTrackAjaxModule.getTrackList(1,1);
            ddd = jmTrackAjaxModule.getTrackerInfo(a);
        }

        return (ddd ? {"success":1} :  {"success":0});
    },
    setStartVersion: function() {
        localStorage.jm_startVersion || (localStorage.jm_startVersion = jm_VERSION)
    },
    lastAmazonAjaxv2:"",
    getlastAmazonAjaxv2:function(z){
        if(lastAmazonAjaxv2.indexOf(z.id) != -1)return lastAmazonAjaxv2;
        return "not find";
    },
    init: function() {
        function a(a, b) {
            if ("success" == b) {
                var c = "object" == typeof a ? a: JSON.parse(a);
                localStorage.jm_config = JSON.stringify(c),
                jm_tools.loadTemplate(c);
                _delaybackgroundInit();
            }
        }
        isLoadRemoteRes ? KISSY.io.get("http://localhost/icebear/config.json?ver=" + new Date().getTime(), 
        function(b, c) {
            a(b, c)
        }) : KISSY.io.get(chrome.extension.getURL("/extra/config.json"), 
        function(b, c) {
            a(b, c)
        }),
        
        /*KISSY.io.get("http://js.client.walatao.com/v14/chrome/extra/kuaidigenzong.json", 
            function(a,b){
                b == "success" && ( (localStorage.wltal_kuaigenzong = JSON.stringify("object" == typeof a ? a : JSON.parse(a))),0)
        }),
        KISSY.io.get("http://js.client.walatao.com/v14/chrome/extra/shipphone.json", 
            function(a,b){
                b == "success" && ( (localStorage.wltal_shipphone = JSON.stringify("object" == typeof a ? a : JSON.parse(a))),0)
        }),        */
        localStorage.jm_isInstall || (jm_tools.showGuide(),jm_tools.setPopupBadgeText("N"));
        jm_tools.initLoginStatus(),
        jm_tools.setStartVersion(),
        jm_tools.statistics(),
        jm_tools.initLockStatus()
    },
    initLockStatus: function() {
        
    },
    setPopupBadgeText: function(a) {
        if(!isNaN(a)){
            if(a == 0)return;
            a += (parseInt(localStorage.alreadyNotiCount) || 0);
            if(a > 9)a = 9;
            localStorage.alreadyNotiCount = a;
        }

       (a > 0 || a.length > 0) ? (chrome.browserAction.setBadgeBackgroundColor({
            color: "#ff3c00"
        }), chrome.browserAction.setBadgeText({
            text: a.toString()
        })) : chrome.browserAction.setBadgeText({
            text: ""
        })
    },
    showGuide: function() {
        //return;
        localStorage.getItem("alijmLoaded") || (localStorage.setItem("alijmLoaded", "true"), chrome.tabs.create({
            url: "http://icebear.me/?utm_source=plugin_install&utm_medium=plugin&utm_campaign=install_redirect"
        }))
    },
    statistics: function() {
        KISSY.Stat("cache=16f63b4&gmkey=jm_search&gokey=sfrom=jm&t=1369194202558&isbeta=7&logtype=2&click=jm.jm_jm_addin.{{browser}}."+ (localStorage.jm_isInstall ? "web.install.start_success":"web.install.install_success"), !0);
        localStorage.jm_isInstall = 1;
    },
    initLoginStatus: function() {
        function a() {
            b || (b = setTimeout(function() {
                chrome.tabs.query({
                    active: !0
                },
                function(a) {
                    a && a[0] && chrome.tabs.sendMessage(a[0].id, {
                        operate: "onTabActivated",
                        data: {}
                    },
                    function() {})
                }),
                b = null
            },
            100))
        }
        jm_tools.checkIsLogin();
        var b = null;
        /*chrome.cookies && chrome.cookies.onChanged.addListener(function(b) {
            "login" == b.cookie.name && b.cookie.domain.indexOf("walatao.com") > 0 && setTimeout(function() {
                jm_tools.checkIsLogin(a)
            },
            10)
        }),*/
        chrome.tabs.onActivated.addListener(function() {
            a()
        })
    },
    checkIsLogin: function(a) {
        console.log(localStorage.jm_login);
        var b = {
            login: "false",
            tracknick: "",
            a_nk: "1",
            _nk_: "1",
            unb: "1",
            l_t: "1",
            //ot_home_uid:'',
            ot_home_login:'',
            _jm__token: "1"
        };
        //window.jmLogin.init();
        
        localStorage.jm_login ? b = JSON.parse(localStorage.jm_login) : localStorage.jm_login = JSON.stringify(b),
        chrome.cookies.getAll({
           domain: ".icebear.me"
        },
        function(c) {
           // console.log(c);
            if (c.length > 0) for (var d = 0; d < c.length; d++) {
                var e = c[d];
                //console.log(e);
                "ot_home_uid" != e.name && "ot_home_login" != e.name || (b[e.name] = e.value)
            } 
            ("" == b.ot_home_uid || "" == b.ot_home_login || "true" != b.login) && (b = {
                login: "false",
                tracknick: "",
                a_nk: "1",
                _nk_: "1",
                unb: "1",
                l_t: "1",
                ot_home_uid:'',
                ot_home_login:'',
                _jm__token: "1"
            })
            console.log(b);

            chrome.cookies.get({
                url:"http://.icebear.me",
                name:"ot_home_login"
            },
            function(c){
                if( !c && JSON.parse(localStorage.jm_login).ot_home_login ){
                    //保持登录态
                    chrome.cookies.set({
                        url: "http://.icebear.me",
                        name: 'ot_home_login',
                        value: b.ot_home_login
                    });
                    chrome.cookies.set({
                        url: "http://.icebear.me",
                        name: 'ot_home_uid',
                        value: b.ot_home_uid
                    });
                }
            });

            /*KISSY.io.get("http://we.walatao.com/account/ajax/login_check/", function(data){
                console.log('login_check_suc:'+data);
                var data = JSON.parse(data);
                if( data.result == 0 ){
                    b.login = "true";
                    b.ot_home_uid = data.ot_home_uid;
                    b.ot_home_login = data.ot_home_login;
                    localStorage.jm_login = JSON.stringify(b);
                    a && a();
                }
            });*/
            
            //)
        })
    },
    setLocalStorage: function(a) {
        for (var b in a) localStorage[b] = a[b]
    },
    getLocalStorage: function(a){
        return {"value":localStorage[a.key] ? localStorage[a.key]:""};
    },
    clipboardWrite: function(a, b, c, d) {
        try {
            var e = document.createElement("div");
            e.contentEditable = !0,
            document.body.appendChild(e),
            e.innerHTML = a,
            e.unselectable = "off",
            e.focus(),
            document.execCommand("SelectAll"),
            document.execCommand("Copy", !1, null),
            document.body.removeChild(e),
            d({})
        } catch(f) {}
    },
    showAddrNotify: function(a, b, c) {
        notification.addrUpdateReminder(c)
    },
    getConfig: function() {
        var a = {
            isLoadRemoteRes: isLoadRemoteRes,
            template: jm_tools.getTemplate(),
            login: localStorage.jm_login || "null",
            config: localStorage.jm_config || "null",
            mmstat_cna: localStorage.jm_mmstat_cna || "null",
            isShowTips: localStorage.isShowTips ? localStorage.isShowTips: "true",
            isShowDownBar: localStorage.isShowDownBar ? localStorage.isShowDownBar: "true",
            // isLock: localStorage.isLock ? localStorage.isLock: "true",
            isLock: localStorage.isLock ? localStorage.isLock: "false",
            isNormalLock:localStorage.isNormalLock ? localStorage.isNormalLock: "false",
            isShowPushNotify: localStorage.isShowPushNotify ? localStorage.isShowPushNotify: "true",
            transTimeStat: localStorage.transTimeStat ? localStorage.transTimeStat: null,
            jm_peerid:KISSY.jm_peerid,
            wltal_kuaigenzong:localStorage.wltal_kuaigenzong ? localStorage.wltal_kuaigenzong:null,
            wltal_shipphone: localStorage.wltal_shipphone ? localStorage.wltal_shipphone :null
        };
        return a
    },
    loadTemplate: function(a) {
        if (a.template) for (var b in a.template) jm_tools.callAjax(b, a.template[b], a.extraUrl)
    },
    callAjax: function(a, b, c) {
        isLoadRemoteRes ? KISSY.io.get(c + b, 
        function(b) {
            var c = "object" == typeof b ? JSON.stringify(b) : b;
            localStorage["jm_temp_" + a] = c
        }) : KISSY.io.get(chrome.extension.getURL(b), 
        function(b) {
            localStorage["jm_temp_" + a] = b
        })
    },
    getTemplate: function() {
        var a = {},
        b = JSON.parse(localStorage.jm_config || null);
        if (b && b.template) for (var c in b.template) a[c] = localStorage["jm_temp_" + c];
        return a
    },
    getShipNameMap: function() {
        return JSON.parse(localStorage.jm_temp_shippingName || "{}")
    },
    translate: function(a, b, c, d, e, _toLanguage) {
        //  client_id MqwQL3izVkMazIq2hKOmWqXX 
        //  request url http://openapi.baidu.com/public/2.0/bmt/translate?client_id=MqwQL3izVkMazIq2hKOmWqXX&q=today&from=auto&to=auto
        var url = 'http://openapi.baidu.com/public/2.0/bmt/translate?client_id=MqwQL3izVkMazIq2hKOmWqXX&q=' + encodeURIComponent(a) + '&from=auto&to=' + _toLanguage || 'auto';

        KISSY.io.get(url, function(data) {
            var tranlateData = {
                isError: 1,
                top: 200,
                left: 200,
                title: '出错了',
                desc: [{
                    text: '翻译失败，请稍后再试。'
                }]
            };

            if(!data.error_code) {
                tranlateData.isError = 0;
                tranlateData.desc = [];
                if('translateInputCallback' ===  e) {
                    tranlateData.title = data.trans_result[0].dst;
                    tranlateData.desc.push({
                        text: data.trans_result[0].dst,
                        key: data.trans_result[0].src
                    });
                    for(var i = 0, l = data.trans_result.length; i < l; i ++) {
                        data.trans_result[i].dst.toLowerCase() !== data.trans_result[0].dst.toLowerCase() && tranlateData.desc.push({
                            text: data.trans_result[i].dst,
                            key: data.trans_result[i].src
                        });
                    }
                    chrome.tabs.sendMessage(c.tab.id, {
                        operate: e || "translateCallback",
                        data: tranlateData
                    }, function() {});
                }
            }
        });


        // var f = "http://fanyi.youdao.com/openapi.do?keyfrom=walatao&key=1118527875&type=data&only=diret&doctype=json&version=1.1&q=" + encodeURIComponent(a);
        // KISSY.io.get(f, 
        // function(a) {
        //     var b = {
        //         isError: 1,
        //         top: 200,
        //         left: 200,
        //         title: "出错了",
        //         desc: [{
        //             text: "翻译失败，请稍后再试。"
        //         }]
        //     };
        //     if (0 == a.errorCode) if (b.isError = 0, b.desc = [], "translateInputCallback" == e) {
        //         if (b.title = a.translation[0], b.desc.push({
        //             text: a.translation[0],
        //             key: a.query
        //         }), a.web) for (var d = a.web, f = 0; f < d.length && !(b.desc.length >= 9); f++) for (var g = d[f].value, h = d[f].key, i = 0; i < g.length; i++) g[i].toLowerCase() != a.translation[0].toLowerCase() && b.desc.push({
        //             text: g[i],
        //             key: h
        //         })
        //     } else {
        //         b.title = a.query;
        //         for (var g = a.translation, i = 0; i < g.length; i++) b.desc.push({
        //             text: g[i]
        //         })
        //     }
        //     chrome.tabs.sendMessage(c.tab.id, {
        //         operate: e || "translateCallback",
        //         data: b
        //     },
        //     function() {})
        // })
    },
    getForeignShippingInfo: function() {
        return
    },
    toolsSetting: function(a, b, c){
        var b = {};
        b.isLoadRemoteRes = localStorage.isLoadRemoteRes;
        b.isShowDownBar = localStorage.isShowDownBar;
        b.isShowPushNotify = localStorage.isShowPushNotify;
        b.isShowTips = localStorage.isShowTips;
        b.isLock = localStorage.isLock;
        b.isNormalLock = localStorage.isNormalLock;
        chrome.tabs.sendMessage(c.tab.id, {
            operate: "toolsSettingCallback",
            data: b
        },
        function() {})
    }
},
notification = {
    num:0,
    sender: null,
    baseStat: "cache=16f63b4&gmkey=jm_search&gokey=sfrom=jm&t=1369194202558&&cna=" + (localStorage.jm_mmstat_cna || "null") + "&isbeta=7&logtype=2&click=jm.jm_jm_addin.{{browser}}.",
    init: function() {
        !isSougouExplorer() && chrome.notifications.onButtonClicked.addListener(function(a, b) {
            if ("notify_addrUpdate" == a) 0 == b ? chrome.tabs.create({
                url: "http://wanke.walatao.com/detail/342227.html"
            }) : 1 == b && notification.sender && chrome.tabs.sendMessage(notification.sender.tab.id, {
                operate: "neverRemindAddrNotify",
                data: ""
            },
            function() {});
            else if (0 == b) {
                var c = "http://www.walatao.com/blog?fromid=1";
                localStorage[a] && (c = localStorage[a]),
                chrome.tabs.create({
                    url: c
                })
            } else if (1 == b) {
                var c = "http://www.walatao.com/blog?fromid=2";
                localStorage[a] && (c = localStorage[a]),
                chrome.tabs.create({
                    url: c
                })
            }
            notification.sender = null,
           !isSougouExplorer() && chrome.notifications.clear(a, 
            function() {})
        }),
        !isSougouExplorer() && chrome.tabs.onActivated.addListener(function() {
            notification.showReminder()
        });
        
        try{
            var z = JSON.parse(localStorage.jm_config || null);
            setTimeout(function() {
                notification.websiteActivityInit(),
                notification.pushNotifyInit()
            },
            z.notify_init_ts || 3e5)
        }catch(err){

        }
    },
    reminderData: [],
    create_sougou: function(a,b,c,d,e,f){
            var webkitNotify = window.webkitNotifications,
                notification = null;
            var havePermission = webkitNotify.checkPermission();

            notification = webkitNotify.createNotification( f || "http://js.client.walatao.com/godimage/icon128.png", b || "欢迎使用瓦拉淘", c || "瓦拉淘让海淘更简单");

            notification.onclick = function() { // 点击打开链接
                    d();
                    if (notification.cancel) {
                        notification.cancel();
                    } else if (notification.close) {
                        notification.close();
                    }
                };
                notification.show();
                (function(n) {
                    setTimeout(function() {
                        if (n.cancel) {
                            n.cancel();
                        } else if (n.close) {
                            n.close();
                        }
                    }, 15 * 1000);
                })(notification);       
    },
    create: function(a, b, c, d, e, f) {
        if(localStorage.isShowPushNotify && "false" == localStorage.isShowPushNotify){
            console.log("noshow.");
            return;
        }

        if(jm_browsername == "360se")
            return notification.create_sougou(a,b,c,d,e,f);;
        if(isSougouExplorer())
        {
            notification.create_sougou(a,b,c,d,e,f);
            return;
        }
        var g = {
            type: "basic",
            priority: 2,
            title: b || "欢迎使用瓦拉淘",
            message: c || "瓦拉淘让海淘更简单",
            buttons: e,
            iconUrl: f || "images/bgicon.png"
        };
        !isSougouExplorer() && chrome.notifications.create(a || "wala_jm", g, 
        function() {}),
        !isSougouExplorer() && chrome.notifications.onClicked.addListener(function(b) {
            b == a && (d(), !isSougouExplorer() && chrome.notifications.clear(b, 
            function() {}))
        })
    },
    submitOrder: function(a) {
        var b = {
            asos: !0,
            iherb: !0,
            "net-a-porter": !0
        };
        b[a.name] ? notification.directReminder(a.name) : notification.noDirectReminder(a.name),
        notification.addToReminder()
    },
    noDirectReminder: function(a) {
        notification.create("notify_noDirect", "下单成功后，您需要做：", (a || "") + "发货后，您可以在瓦拉淘“我的运单”中进行物流追踪。瓦拉淘也会随时提醒您进行包裹的后续处理。", 
        function() {
            chrome.tabs.create({
                url:  "popup.html?id=1"
            })
        },
        [{
            title: "如何进行物流追踪？"
        }])
    },
    
    kdstatReminderTimer:null,
    kdstatReminder: function(a, b) {
            if(!localStorage.isShowPushNotify)return;
            jm_tools.setPopupBadgeText(1); 
            localStorage.need_show_tracker_red_tips = "true";
            if(null != notification.kdstatReminderTimer){
                clearTimeout(notification.kdstatReminderTimer);
                notification.kdstatReminderTimer = null;
            }
            notification.kdstatReminderTimer = setTimeout(function()
            {
                notification.kdstatReminderTimer = null;

                if(!b || b == "undefined")
                    return;

                notification.create("notify_kd_status", "您的转运单状态更新啦", "订单[" + a + "]最新状态是:" + b,    
                function() {
                chrome.tabs.create({
                    url: "popup.html?id=2"
            })
            },[]);
            }
            ,20e3)
    },
    directReminder: function(a) {
        notification.create("notify_direct", "下单成功后，您需要做：", (a || "") + "发货后，您可以在订单详情里查看到物流信息。直邮网站的货物会直接送到中国国内，无需其他操作。", 
        function() {
              chrome.tabs.create({
                url: "popup.html"
            })
            },
        [{
            title: "如何进行物流追踪？"
        }])
    },
    twoDaysReminder: function() {
        notification.create("notify_operate", "亲，之前在海淘的商品发货了吗？", "商家发货后，您可以在瓦拉淘“我的运单”中进行物流追踪。瓦拉淘后续会提醒您对包裹的行程跟踪。", 
        function() {
            chrome.tabs.create({
                url: "http://js.client.walatao.com/v9/svr/amazon_orders.php"
            })
        },
        [{
            title: "如何进行物流追踪？"
        }])
    },
    addrUpdateReminder: function() {
        /*
        localStorage.jm_notify_addrUpdate_showned || (notification.create("notify_addrUpdate", "瓦拉淘转运地址获取方式变更通知", "亲爱的瓦拉淘用户，为了提供更好的转运服务，我们新增了一家海淘客（12日必达），同时原来4家转运地址获取方式发生变化，点击查看详情。", 
        function() {
            chrome.tabs.create({
                url: "http://wanke.walatao.com/detail/342227.html"
            })
        }), localStorage.jm_notify_addrUpdate_showned = !0)
        */
    },
    addToReminder: function() {
        var a = new Date,
        b = new Date(a.getFullYear(), a.getMonth(), a.getDate());
        notification.reminderData[0] != b && (notification.reminderData.unshift(b.getTime()), notification.setReminderData())
    },
    setReminderData: function() {
        localStorage.wala_reminder = JSON.stringify(notification.reminderData)
    },
    getReminderData: function() {
        notification.reminderData = JSON.parse(localStorage.wala_reminder || "[]").sort().reverse()
    },
    getZeroTime: function(a) {
        var b = a ? new Date(a) : new Date,
        c = new Date(b.getFullYear(), b.getMonth(), b.getDate());
        return c.getTime()
    },
    showReminder: function() {
        notification.getReminderData();
        for (var a = notification.getZeroTime() - 1728e5, b = notification.getZeroTime() - 1296e6, c = 0; c < notification.reminderData.length; c++) {
            var d = notification.reminderData[c];
            if (a > d) {
                notification.reminderData = notification.reminderData.splice(0, c),
                d > b && notification.twoDaysReminder();
                break
            }
        }
        notification.setReminderData()
    },
    websiteActivityInit: function() {
        notification.websiteActivity(),
        setInterval(function() {
            notification.websiteActivity()
        },
        864e5)
    },
    websiteActivity: function() {
    },
    pushNotifyInit: function() {
        var z = JSON.parse(localStorage.jm_config || null);
        notification.pushNotify(),
        setInterval(function() {
            notification.pushNotify()
        },
        z.notify_interval || 3e5)
    },
    pushNotify: function() {
        if (1) {
            var a = "https://js.client.walatao.com/v9/svr/feed/feed.php?num=" + (notification.num++) + "&show=" + localStorage.isShowPushNotify;
            KISSY.io.get(a, 
            function(a, b) {
                if ("success" == b) for (var c = "object" == typeof a ? a: JSON.parse(a), d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (e.tag && (!localStorage["notify_jm_pushNotify" + e.feedId] || e.ignore)) {
                        var f = new Date,
                        g = new Date(e.onlineTime),
                        h = f - g;
                        if ( (f.getDate() !== g.getDate() || h / 36e5 > 24) && !e.ignore) continue;
                        localStorage["notify_jm_pushNotify" + e.feedId] = e.link,
                        notification.create("notify_jm_pushNotify" + e.feedId, e.title, e.context.substring(0, 50) + "...", 
                        function() {
                            KISSY.io.get("http://js.client.walatao.com/v9/svr/feed/feed_click.php?feedid=" +  e.feedId);
                            chrome.tabs.create({
                                url: e.link
                            }),
                            KISSY.Stat(notification.baseStat + "web.pop.pop_click", !0)
                        },
                        null, e.tfsPic),
                        KISSY.Stat(notification.baseStat + "web.pop.pop_open", !0);
                        break
                    }
                }
            })
        }
    }
};  !
function() {
    _backgrountInit();
    requestNewMessage();
    localStorage.jm_browsername = jm_browsername;
    try{
        chrome.runtime && (setTimeout(function() {
            chrome.runtime.requestUpdateCheck(function(a, b) {
                console.log(a),
                console.log(b)
            })
        },
        3e4), chrome.runtime.onUpdateAvailable.addListener(function() {
            chrome.runtime.reload()
        }));
    }catch(err){
        
    }
    //版本更新检测 Check Update Version
    function onInstall() {
        console.log("Extension Installed");
    }

    function onUpdate() {
        console.log("Extension Updated");
        chrome.tabs.create({
            url: "http://icebear.me/install/release.html?utm_source=plugin_update&utm_medium=plugin&utm_campaign=update_redirect"
        });
    }

    function getVersion() {
        var details = chrome.app.getDetails();
        return details.version;
    }

    // Check if the version has changed.
    var currVersion = getVersion();
    console.log(currVersion);
    var prevVersion = localStorage['version']
    if (currVersion != prevVersion) {
    // Check if we just installed this extension.
    if (typeof prevVersion == 'undefined') {
        onInstall();
    } else {
        onUpdate();
    }
        localStorage['version'] = currVersion;
    }
} ();