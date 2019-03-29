KISSY.add("jmTools", 
function(a, b) {
    function c() {
        if(!localStorage.jmToolsNotify){
            localStorage.jmToolsNotify = "true";
        }
        if(!localStorage.isTranslate){
            localStorage.isTranslate = "true";
        }
        if(localStorage.jmToolsNotify == "true"){
            KISSY.one("#jm_pop_tab").addClass("show_tools_Change");
        }
        KISSY.Event.delegate(document, "click", ".jm_chk", 
        function(a) {
            var b = KISSY.one(a.currentTarget);
            b && (b.toggleClass("jm_chk_checked"), b.hasClass("jm_chk_checked") ? b.hasClass("jm_switch_tips") ? (window.jm_jminer.isShowTips = "true", setBackgroundLocalStore({
                isShowTips: "true"
            }), "true" == window.jm_jminer.isLoadTips ? (KISSY.one("body").fire("jmRepaint"), KISSY.all(".jm_tips").removeClass("jm_hidden")) : dealWebsite()) : b.hasClass("jm_switch_trans") ? (window.jm_jminer.isTranslate = "true", KISSY.all(".jm_trans_tips").removeClass("jm_hidden"), setBackgroundLocalStore({
                isTranslate: "true"
            })) : b.hasClass("jm_switch_pushnotify") ? (window.jm_jminer.isShowPushNotify = "true", setBackgroundLocalStore({
                isShowPushNotify: "true"
            })) : b.hasClass("jm_switch_downbar") && (window.jm_jminer.isShowDownBar = "true", setBackgroundLocalStore({
                isShowDownBar: "true"
            })) : b.hasClass("jm_switch_tips") ? (window.jm_jminer.isShowTips = "false", KISSY.all(".jm_tips").addClass("jm_hidden"), setBackgroundLocalStore({
                isShowTips: "false"
            })) : b.hasClass("jm_switch_trans") ? (window.jm_jminer.isTranslate = "false", KISSY.all(".jm_trans_tips").addClass("jm_hidden"), setBackgroundLocalStore({
                isTranslate: "false"
            })) : b.hasClass("jm_switch_downbar") ? (window.jm_jminer.isTranslate = "false", setBackgroundLocalStore({
                isShowDownBar: "false"
            })) : b.hasClass("jm_switch_pushnotify") && (window.jm_jminer.isShowPushNotify = "false", setBackgroundLocalStore({
                isShowPushNotify: "false"
            })))
        }),
        KISSY.Event.delegate(document, "mouseenter", ".jm_sidebar_logo", 
        function() {
            var a = KISSY.one("#jm_sidebar");
			KISSY.Stat("click=sidebarbox");
            a && (a.addClass("jm_sidebar_hover"), KISSY.one("body").fire("jmHideShopIntro"))
        }),
        KISSY.Event.delegate(document, "mouseleave", "#jm_sidebar", 
        function() {
            var a = KISSY.one("#jm_sidebar");
            a && a.removeClass("jm_sidebar_hover")
        }),
        KISSY.Event.delegate(document, "click", ".jm_sidebar_logo", 
        function() {
           var src = chrome.extension.getURL('popup.html');
           window.open(src);
        }),
        KISSY.Event.delegate(document, "click", ".jm_sidebar_top", 
        function() {
            KISSY.one(document).scrollTop(0)
        }),
        KISSY.one(document).on("scroll", 
        function() {
            var a = KISSY.one("#jm_sidebar"),
            b = KISSY.one("#jm_sidebar_scrollTop");
            if (a && b) {
                var c = KISSY.one(document).scrollTop();
                c > 0 ? (a.addClass("jm_sidebar_showtop"), b.addClass("jm_sidebar_showtop")) : (a.removeClass("jm_sidebar_showtop"), b.removeClass("jm_sidebar_showtop"))
            }
        }),
        KISSY.Event.delegate(document, "click", ".jm_newuser", 
        function() {
            KISSY.use("jmGuideDialog", 
            function(a, b) {
                new b(window.jm_jminer.template.guide)
            })
        }),
        KISSY.Event.delegate(document, "click", ".jm_chima", 
        function() {
            KISSY.use("jmSizeDialog", 
            function(a, b) {
                new b
            })
        }),
		
		
        KISSY.Event.delegate(document, "click", ".jm_sidebar_feedback", 
        function(a) {
            a.preventDefault(),
            KISSY.one("#jm_feedback_dialog") && KISSY.one("#jm_feedback_dialog").show(),
            KISSY.use("jmSidebarFeedback", 
            function(a, b) {
                new b
            })
        })
    }
    function d() {
        for (var a = [{
            trigger: ".jm_si_card",
            srcNode: ".jm_si_tip_card"
        },
        {
            trigger: ".jm_si_fee",
            srcNode: ".jm_si_tip_fee"
        },
        {
            trigger: ".jm_si_tax",
            srcNode: ".jm_si_tip_tax"
        }], c = 0; c < a.length; c++) {
            var d = a[c];
            new b.Popup({
                srcNode: d.srcNode,
                trigger: d.trigger,
                triggerType: "mouse",
                align: {
                    node: d.trigger,
                    points: ["tc", "bc"],
                    offset: [0, 55]
                }
            })
        }
    }

    function e(){
        var b = KISSY.one("#jm_sidebar1");
        b && b.one("#jm_sidebar_scrollTop").remove(), b.one('#jm_feedback_dialog').remove(),b.one(".jm_sidebar_logo").remove(),b.one(".jm_sidebar_transaddress").remove(),b.one(".jm_si_title").remove();
        b.one("#jm_sidebar").show();
    }

    function f(a) {
        var b = KISSY.one("#jm_sidebar1");
        b.html(a),
        c(),
        d(),
        e()
    }

    function setBackgroundLocalStore(a) {
        getMessageFromBackground({
            operate: "setLocalStorage",
            data: a
        },
        function() {})
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

    return f
},
{
    requires: ["overlay", "node"]
}),
KISSY.add("jmConvert", 
function(a, b) {
    function c(b) {
        var c = a.one("#jm_convert_input1"),
        d = a.one("#jm_convert_input2");
        if (c && d) if (b) {
            if ("" == d.val()) return;
            c.val(isNaN(d.val()) ? "请输入数字": parseFloat(d.val()) * g / h)
        } else {
            if ("" == c.val()) return;
            d.val(isNaN(c.val()) ? "请输入数字": parseFloat(c.val()) * h / g)
        }
    }
    function d() {
        var a = b.Select.decorate("#jm_convert_sel1", i);
        a.on("click", 
        function() {
            g = parseFloat(a.get("value")),
            c()
        });
        var d = b.Select.decorate("#jm_convert_sel2", i);
        d.on("click", 
        function() {
            h = parseFloat(d.get("value")),
            c()
        })
    }
    function e() {
        a.one("#jm_convert_input1").on("click", 
        function() {
            c()
        }),
        a.one("#jm_convert_input1").on("keyup", 
        function() {
            c()
        }),
        a.one("#jm_convert_input2").on("click", 
        function() {
            c(!0)
        }),
        a.one("#jm_convert_input2").on("keyup", 
        function() {
            c(!0)
        })
    }
    function f() {
        d(),
        e()
    }
    var g = 100,
    h = 39.37,
    i = {
        width: 70,
        prefixCls: "jm-",
        menuAlign: {
            offset: [0, 2]
        },
        menuCfg: {
            height: 242,
            width: 72,
            align: {
                offset: [0, -1]
            },
            elStyle: {
                overflow: "auto",
                overflowX: "hidden"
            }
        }
    };
    return f
},
{
    requires: ["menubutton"]
}),
KISSY.add("jmSizeDialog", 
function(a, b, c) {
    function d() {
        var a = 0,
        b = KISSY.all(".bucket h2");
        try {
            for (var c = 0; c < b.length; c++) if ("Look for Similar Items by Category" == b[c].innerHTML) {
                var d = KISSY.one(b[c]).siblings(".content");
                if (d) for (var e = d.text().replace(/\s/g, "").toLowerCase().split("\n"), f = 0; f < e.length; f++) {
                    var g = e[f];
                    if (g.indexOf("clothing&accessories") >= 0) {
                        if (g.indexOf("bras") >= 0) return 6;
                        if (g.indexOf("women") >= 0) return 1;
                        if (g.indexOf("men") >= 0) return 0;
                        if (g.indexOf("girls") >= 0) return 2;
                        if (g.indexOf("boys") >= 0) return 2;
                        if (g.indexOf("baby") >= 0) return 2
                    } else if (g.indexOf("shoes") >= 0) {
                        if (g.indexOf("women") >= 0) return 4;
                        if (g.indexOf("men") >= 0) return 3;
                        if (g.indexOf("girls") >= 0) return 5;
                        if (g.indexOf("boys") >= 0) return 5;
                        if (g.indexOf("baby") >= 0) return 5
                    }
                }
            }
        } catch(h) {
            console.log("error, getDefaultTabIndex error")
        }
        return a
    }
    function e() {
        var a = d(),
        b = new c.Tabs("#jm_size_tab", {
            triggerType: "click",
            switchTo: 0 == a ? 1: 0
        });
        b.on("switch", 
        function(a) {
            var b = a.currentIndex,
            d = KISSY.one("#jm_size_tab > .ks-switchable-content > div:eq(" + b + ")"),
            e = d.children(".jm_tab");
            e && e.length > 0 && !e.attr("isInitTab") && (e.attr("isInitTab", !0), new c.Tabs("#" + e.attr("id"), {
                switchTo: 0
            }))
        }),
        b.switchTo(a)
    }
    function f() {
        var a = KISSY.one("#jm_size_tip_1");
        if (a && a.hasClass("jm_unfold")) {
            var b = a.offset().top,
            c = KISSY.one(window).height(),
            d = KISSY.one(document).scrollTop(),
            e = c - (b - d) - 500;
            0 > e && KISSY.one(document).scrollTop(d - e)
        }
    }
    function g() {
        var a = window.jm_jminer.sizeDialog;
        if (a && a.destroy && (a.destroy(), a = null), window.jm_jminer.template && window.jm_jminer.template.size) {
            var c = "jm_dialog_size";
            if (KISSY.one("." + c)) return null;
            var d = {
                width: 550,
                elCls: "jm_dialog jm_font " + c,
                mask: !1,
                bodyContent: window.jm_jminer.template.size
            };
            d = KISSY.merge(h, d);
            var g = new b.Dialog(d);
            window.jm_jminer.sizeDialog = g;
            var i = KISSY.one("#jm_size_tip_1");
            i && i.hasClass("jm_unfold") && g.set("align", {
                node: "#jm_size_tip_1",
                points: ["bc", "tc"]
            }),
            g.show(),
            f(),
            e(),
            KISSY.use("jmConvert", 
            function(a, b) {
                new b
            })
        }
    }
    var h = {
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
            offset: [0, -100],
            points: ["cc", "cc"]
        },
        aria: !0
    };
    return g
},
{
    requires: ["overlay", "switchable", "dd"]
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
})
