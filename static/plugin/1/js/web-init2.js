function jm_getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
    }

KISSY.add("jmPopup",
function(a, b, c, d, e, f) {
    function g(a, b) {
        return a.time > b.time ? -1: a.time < b.time ? 1: void 0
    }

    function h() {
        if(window.jm_jminer.isLock == "true"){
            KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
            KISSY.one('.jm-logo-lock').addClass('.jm_chk_checked');
        }else{
            KISSY.one('#jm_pop_tab').addClass('.jm_pop_tab_min');
            KISSY.one('.jm-logo-lock').removeClass('.jm_chk_checked');
        }
        //去掉登录框
        KISSY.all('.jm-register,#jm-logo').hide();
        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').show();
        KISSY.all("#jm_pop_tab .jm_close") && KISSY.all("#jm_pop_tab .jm_close").on("click", 
        function(event) {
            new f('#jm_pop_tab', 'width: 356px; ', 0.005, 'easeOut', 
              function() { 
                 new f('#jm_pop_tab', 'width: 36px;', 0.005, 'bounceOut').run(); 
            }).run(); 
            KISSY.one('#jm_pop_tab').toggleClass('.jm_pop_tab_min');
            event.stopPropagation();
        });
        KISSY.all("#jm_pop_tab") && KISSY.all("#jm_pop_tab").on("click", 
        function(event) {
            if(KISSY.one('#jm_pop_tab').css('width') == '36px'){
                new f('#jm_pop_tab', 'width: 36px; ', 0.005, 'easeOut', 
                  function() { 
                     new f('#jm_pop_tab', 'width: 356px;', 0.005, 'bounceOut').run(); 
                }).run(); 
                KISSY.one('#jm_pop_tab').toggleClass('.jm_pop_tab_min');
            }
            event.stopPropagation();
        });
        $(".jm_tab").hover(function(){
            if(KISSY.one('#jm_pop_tab').css('width') == '36px'){
                new f('#jm_pop_tab', 'width: 36px; ', 0.005, 'easeOut', 
                  function() { 
                     new f('#jm_pop_tab', 'width: 356px;', 0.005, 'bounceOut').run(); 
                }).run(); 
            }
        },function(){
            if(window.jm_jminer.isLock == "false"){
                new f('#jm_pop_tab', 'width: 356px; ', 0.005, 'easeOut', 
                  function() { 
                     new f('#jm_pop_tab', 'width: 36px;', 0.005, 'bounceOut').run(); 
                }).run(); 
            }
        });
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
                KISSY.use('jmPopBase', function (a, b) {new b});
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

        var id = jm_getQueryString("id");
        if(id){
            id = parseInt(id);
            if(id >= 0 && id <=4){
                console.log(id);
            }
        }
        else{
            id = 0;
        }
        c.switchTo(id);
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
            url = 'http://www.jobsminer.cc/User/getBaseinfo';

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
            data.content.birthday,KISSY.all('.mt_birth,.mt_biryear').html(shuffle(data.content.birthday).split("-")[0]).val(shuffle(data.content.birthday).split("-")[0]);
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
            if(jm_get_remote_js("quickWrite")){
                eval(jm_get_remote_js("quickWrite"));
            }
            dragInit();
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

            $(".mt_email,.mt_name,.mt_tel").blur(function() {
                if($(this).val() == ""){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
        });

        $("#base-list .mr_cancel").click(function(){
            $("#base-list").removeClass("edit-status");
        });

        $("#base-list input[type=submit]").unbind("click").bind("click",function(e){
            if(!$('.jm-mask').html()){
                $('#base-list').append('<div class="jm-mask"></div>');
                $("#jm_popup_loading").show();
            }else{
                $(".jm-mask,#jm_popup_loading").show();
            }
            var ss = {
                    "mr_name":KISSY.one('.infopl-edit .mt_name').val(),
                    "mt_ywname":KISSY.one('.infopl-edit .mt_ywname').val(),
                    "mt_biryear":KISSY.one('.infopl-edit .mt_biryear').val(),
                    "mt_birmonth":KISSY.one('.infopl-edit .mt_birmonth').val(),
                    "mt_birday":KISSY.one('.infopl-edit .mt_birday').val(),
                    "sex":KISSY.one('.mr_year_se .fl.active').text(),
                    "mr_height":KISSY.one('.infopl-edit .mt_height').val(),
                    "phone":KISSY.one('.infopl-edit .mt_tel').val(),
                    "email":KISSY.one('.infopl-edit .mt_email').val(),
                    "mt_id":KISSY.one('.infopl-edit .mt_id').val(),
                    "liveCity":KISSY.one('.infopl-edit .mt_add').val(),
                    "highestEducation":KISSY.one('.infopl-edit .mt_edu').val(),
                    "mt_postadd":KISSY.one('.infopl-edit .mt_postadd').val(),
                    "mt_jjlxr":KISSY.one('.infopl-edit .mt_jjlxr').val(),
                    "mt_jjlxrtel":KISSY.one('.infopl-edit .mt_jjlxrtel').val()
                };

            new IO({
                url: "http://www.jobsminer.cc/Resume/basicPost?access=1",
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
            /*KISSY.io.post("http://www.jobsminer.cc/Resume/basicPost", JSON.stringify(ss), function(e) {
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
            url = 'http://www.jobsminer.cc/User/getOtherinfo';

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
        if(data.content && data.content.edu_list){
            var eList = data.content.edu_list, html = '';
            for(var i = 0; i < eList.length; i++){
                html += '<div>  <div class="mt-title"><div class="metil mt10">教育经历' + (i+1) + '</div><div class="mt-edit"><i></i>编辑</div></div>  <div class="infopl" data-id="' + eList[i].id + '"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">学历</td> <td class="mt_base" id="mt_education">' + eList[i].education + '</td> </tr> <tr> <td width="76" class="col999">毕业学校</td> <td class="mt_base" id="mt_schoolName">' + eList[i].schoolName + '</td> </tr> <tr> <td width="76" class="col999">毕业年份</td> <td class="mt_base" id="mt_endYear">' + parseInt(eList[i].endDate) + '</td> </tr> <tr> <td width="76" class="col999">所学专业</td> <td class="mt_base" id="mt_professional">' + eList[i].professional + '</td> </tr> <tr> <td width="76" class="col999">奖惩情况</td> <td class="mt_base" id="mt_award">' + (eList[i].reward_punish ? eList[i].reward_punish : '') + '</td> </tr> </tbody> </table> </div>';

                html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">学历</td> <td><input type="text" id="mt_education" name="mt_education" class="ed_name mt_education" autocomplete="off" value="' + eList[i].education + '" placeholder="请输入学历"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="' + eList[i].schoolName + '" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_biryear_div"><input type="text" id="mt_endYear" name="mt_endYear" class="ed_name valid mt_endYear mt_biryear" autocomplete="off" value="' + parseInt(eList[i].endDate) + '" placeholder="" maxlength="4">年 </div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">所学专业</td> <td><input type="text" id="mt_professional" name="mt_professional" class="ed_name mt_professional" autocomplete="off" value="' + eList[i].professional + '" placeholder="请输入学历"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">奖惩情况</td> <td> <input type="text" id="mt_award" name="mt_award" class="ed_name mt_award" autocomplete="off" value="' + (eList[i].reward_punish ? eList[i].reward_punish : '') + '" placeholder="请输入奖励"></td> </tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="mt-title"> <div class="metil mt10">教育经历</div>  </div> <div class="infopl">  <div class="mr_empty_add dn mt-edit-add" style="display: block;"> <i></i><span>添加教育经历</span> </div> </div>';
        }
        $('#edu-list').html(html);
        dragInit();
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
            eduSubmit(this,'infopl-edit');
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
                url: "http://www.jobsminer.cc/Resume/delEdu?access=1",
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
            /*KISSY.io.post("http://www.jobsminer.cc/Resume/basicPost", JSON.stringify(ss), function(e) {
                console.log('updateuser e:' + e);
            });*/
            e.stopPropagation();
        });
        
        $("#edu-list .mt-edit-add").unbind("click").bind("click",function(e){
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">学历</td> <td><input type="text" id="mt_education" name="mt_education" class="ed_name mt_education" autocomplete="off" value="" placeholder="请输入学历"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业学校</td> <td><input type="text" id="schoolName" name="schoolName" class="ed_name valid schoolName" autocomplete="off" value="" placeholder="请输入毕业学校"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">毕业年份</td> <td><div class="mt_biryear_div"><input type="text" id="mt_endYear" name="mt_endYear" class="ed_name valid mt_endYear mt_biryear" autocomplete="off" value="" placeholder="" maxlength="4">年 </div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">所学专业</td> <td><input type="text" id="mt_professional" name="mt_professional" class="ed_name mt_professional" autocomplete="off" value="" placeholder="请输入学历"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">奖惩情况</td> <td> <input type="text" id="mt_award" name="mt_award" class="ed_name mt_award" autocomplete="off" value="" placeholder="请输入奖励"></td> </tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div>';
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
                eduSubmit(this, 'infopl-add');
            });
            $("#edu-list .infopl-add .mr_cancel").click(function(){
                $(".infopl-add").remove();
                $("#edu-list .mt-edit-add").show();
            });

        });

    }

    var eduSubmit = function(that, className){
        var education = KISSY.one('.' + className + ' .mt_education').val();
        if(!education){
            KISSY.one('.' + className + ' .mt_education').parent().parent().next('tr').show();
            return;
        }
        var schoolName = KISSY.one('.' + className + ' .schoolName').val();
        if(!schoolName){
            KISSY.one('.' + className + ' .schoolName').parent().parent().next('tr').show();
            return;
        }
        var endYear = KISSY.one('.' + className + ' .mt_endYear').val();
        if(!endYear){
            KISSY.one('.' + className + ' .mt_endYear').parent().parent().parent().next('tr').show();
            return;
        }
        var professional = KISSY.one('.' + className + ' .mt_professional').val();
        if(!professional){
            KISSY.one('.' + className + ' .mt_professional').parent().parent().next('tr').show();
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
                    "reward_punish":KISSY.one('.' + className + ' .mt_award').val(),
                    "eduid":eduid
                };

            new IO({
                url: "http://www.jobsminer.cc/Resume/educationExperience?access=1",
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
            url = 'http://www.jobsminer.cc/User/getOtherinfo';

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
            for(var i = 0; i < eList.length; i++){
                html += '<div> <div class="mt-title"> <div class="metil mt10">工作经历</div> <div class="mt-edit"><i></i>编辑</div> </div> <div class="infopl" data-id="' + eList[i].id + '"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">公司</td> <td class="mt_base" id="mt_companyName">' + eList[i].companyName + '</td> </tr> <tr> <td width="76" class="col999">职位</td> <td class="mt_base" id="mt_positionName">' + eList[i].positionName + '</td> </tr> <tr> <td width="76" class="col999">在职时间</td> <td class="mt_base" id="mt_comtime">' + eList[i].startDate + '-' + eList[i].endDate + '</td> </tr> <tr> <td width="76" class="col999">工作内容</td></tr><tr> <td class="mt_base" id="mt_workContent"> <div rows="8" cols="40">' + eList[i].workContent + '</div> </td> </tr> </tbody> </table> </div>';

                html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">公司</td> <td><input type="text" id="mt_companyName" name="mt_companyName" class="ed_name mt_companyName" autocomplete="off" value="' + eList[i].companyName + '" placeholder="请输入公司"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">职位</td> <td><input type="text" id="mt_positionName" name="mt_positionName" class="ed_name valid mt_positionName" autocomplete="off" value="' + eList[i].positionName + '" placeholder="请输入职位"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">入职时间</td> <td><div class="mt_biryear_div"><input type="text" id="mt_startDate" name="mt_startDate" class="ed_name valid mt_startDate mt_biryear mt_startDate_year" autocomplete="off" value="' + parseInt(eList[i].startDate.split(".")[0]) + '" placeholder="" maxlength="4">年 </div><div class="mt_birmonth_div"><input type="text" id="mt_startDate" name="mt_startDate" class="ed_name valid mt_startDate mt_startDate_month mt_birmonth" autocomplete="off" value="' + (eList[i].startDate.split(".")[1] ? parseInt(eList[i].startDate.split(".")[1]) : "") + '" placeholder="" maxlength="2">月  </div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr>   <tr> <td width="76" class="col999">离职时间</td> <td><div class="mt_biryear_div"><input type="text" id="mt_endDate" name="mt_endDate" class="ed_name valid mt_endDate mt_biryear mt_endDate_year" autocomplete="off" value="' + (parseInt(eList[i].endDate.split(".")[0]) || "") + '" placeholder="" maxlength="4">年</div><div class="mt_birmonth_div"><input type="text" id="mt_endDate" name="mt_endDate" class="ed_name valid mt_endDate mt_endDate_month mt_birmonth" autocomplete="off" value="' + (eList[i].endDate.split(".")[1] ? parseInt(eList[i].endDate.split(".")[1]) : "") + '" placeholder="" maxlength="2">月 </div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">工作内容</td> <td> <textarea type="text" id="mt_workContent" name="mt_workContent" class="ed_name mt_workContent" >' + (eList[i].workContent ? eList[i].workContent : '') + '</textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="mt-title"> <div class="metil mt10">工作经历</div>  </div> <div class="infopl">  <div class="mr_empty_add dn mt-edit-add" style="display: block;"> <i></i><span>添加工作经历</span> </div> </div>';
        }
        
        $('#exp-list').html(html);
        dragInit();
        expInit();
    };

    var expInit = function() {
        $("#exp-list > div").removeClass("edit-status");
        $("#exp-list .mt-edit").click(function(){
            $(this).parent().parent().addClass("edit-status");
            

            $(".mt_education,.mt_positionName,.mt_startDate,.mt_endDate,.mt_workContent").blur(function() {
                if($(this).val() == ""){
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
            expSubmit(this,'infopl-edit');
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
                url: "http://www.jobsminer.cc/Resume/delExp?access=1",
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
            /*KISSY.io.post("http://www.jobsminer.cc/Resume/basicPost", JSON.stringify(ss), function(e) {
                console.log('updateuser e:' + e);
            });*/
            e.stopPropagation();
        });
        
        $("#exp-list .mt-edit-add").unbind("click").bind("click",function(e){
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">公司</td> <td><input type="text" id="mt_companyName" name="mt_companyName" class="ed_name mt_companyName" autocomplete="off" value="" placeholder="请输入公司"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">职位</td> <td><input type="text" id="mt_positionName" name="mt_positionName" class="ed_name valid mt_positionName" autocomplete="off" value="" placeholder="请输入职位"> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">入职时间</td> <td><div class="mt_biryear_div"><input type="text" id="mt_startDate" name="mt_startDate" class="ed_name valid mt_startDate mt_biryear mt_startDate_year" autocomplete="off" value="" placeholder="" maxlength="4">年</div><div class="mt_birmonth_div"><input type="text" id="mt_startDate" name="mt_startDate" class="ed_name valid mt_startDate mt_birmonth mt_startDate_month" autocomplete="off" value="" placeholder="" maxlength="2">月 </div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr>   <tr> <td width="76" class="col999">离职时间</td> <td><div class="mt_biryear_div"><input type="text" id="mt_endDate" name="mt_endDate" class="ed_name valid mt_endDate mt_biryear mt_endDate_year" autocomplete="off" value="" placeholder="" maxlength="4">年</div><div class="mt_birmonth_div"><input type="text" id="mt_startDate" name="mt_startDate" class="ed_name valid mt_startDate mt_birmonth mt_endDate_month" autocomplete="off" value="" placeholder="" maxlength="2">月  </div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">工作内容</td> <td> <textarea type="text" id="mt_workContent" name="mt_workContent" class="ed_name mt_workContent" ></textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div>';
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
                expSubmit(this, 'infopl-add');
            });
            $("#exp-list .infopl-add .mr_cancel").click(function(){
                $(".infopl-add").remove();
                $("#exp-list .mt-edit-add").show();
            });

        });

    }

    var expSubmit = function(that, className){
        var mt_companyName = KISSY.one('.' + className + ' .mt_companyName').val();
        if(!mt_companyName){
            KISSY.one('.' + className + ' .mt_companyName').parent().parent().next('tr').show();
            return;
        }
        var mt_positionName = KISSY.one('.' + className + ' .mt_positionName').val();
        if(!mt_positionName){
            KISSY.one('.' + className + ' .mt_positionName').parent().parent().next('tr').show();
            return;
        }
        var mt_startDate_year = KISSY.one('.' + className + ' .mt_startDate_year').val();
        var mt_startDate_month = KISSY.one('.' + className + ' .mt_startDate_month').val();
        if(!mt_startDate_year || !mt_startDate_month){
            KISSY.one('.' + className + ' .mt_startDate_year').parent().parent().parent().next('tr').show();
            return;
        }
        var mt_startDate = mt_startDate_year + '.' + mt_startDate_month;

        var mt_endDate_year = KISSY.one('.' + className + ' .mt_endDate_year').val();
        var mt_endDate_month = KISSY.one('.' + className + ' .mt_endDate_month').val();
        if(!mt_endDate_year || !mt_endDate_month){
            KISSY.one('.' + className + ' .mt_endDate_year').parent().parent().parent().next('tr').show();
            return;
        }
        var mt_endDate = mt_endDate_year + '.' + mt_endDate_month;

        var workContent = KISSY.one('.' + className + ' .mt_workContent').val();
        if(!workContent){
            KISSY.one('.' + className + ' .workContent').parent().parent().parent().next('tr').show();
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
            url: "http://www.jobsminer.cc/Resume/workExperience?access=1",
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
            url = 'http://www.jobsminer.cc/User/getOtherinfo';

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
        if(data.content && data.content.pro_list){
            var eList = data.content.pro_list, html = '';
            for(var i = 0; i < eList.length; i++){
                html += '<div> <div class="mt-title"> <div class="metil mt10">项目经历' + (i+1) + '</div> <div class="mt-edit"><i></i>编辑</div> </div> <div class="infopl"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">项目名称</td> <td class="mt_base" id="mt_projectName">' + eList[i].projectName + '</td> </tr> <tr> <td width="76" class="col999">项目时间</td> <td class="mt_base" id="mt_protime">' + eList[i].startDate + '-' + eList[i].endDate + '</td> </tr> <tr> <td width="76" class="col999">项目角色</td> <td class="mt_base" id="mt_positionName">' + eList[i].positionName + '</td> </tr> <tr> <td width="76" class="col999">项目内容</td></tr><tr> <td class="mt_base" id="mt_projectRemark">' + eList[i].projectRemark + '</td> </tr> </tbody> </table> </div>';

                html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">项目名称</td> <td><input type="text" id="mt_projectName" name="mt_projectName" class="ed_name mt_projectName" autocomplete="off" value="' + eList[i].projectName + '" placeholder="请输入项目名称"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">开始时间</td> <td><div class="mt_biryear_div"><input type="text" id="mt_startDate" name="mt_startDate" class="ed_name valid mt_startDate mt_biryear mt_startDate_year" autocomplete="off" value="' + parseInt(eList[i].startDate.split(".")[0]) + '" placeholder="" maxlength="4">年</div><div class="mt_birmonth_div"><input type="text" id="mt_startDate" name="mt_startDate" class="ed_name valid mt_startDate mt_startDate_month mt_birmonth" autocomplete="off" value="' + (eList[i].startDate.split(".")[1] ? parseInt(eList[i].startDate.split(".")[1]) : "") + '" placeholder="" maxlength="2">月 </div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr>   <tr> <td width="76" class="col999">结束时间</td> <td><div class="mt_biryear_div"><input type="text" id="mt_endDate" name="mt_endDate" class="ed_name valid mt_endDate mt_biryear mt_endDate_year" autocomplete="off" value="' + (parseInt(eList[i].endDate.split(".")[0]) || "") + '" placeholder="" maxlength="4">年</div><div class="mt_birmonth_div"><input type="text" id="mt_endDate" name="mt_endDate" class="ed_name valid mt_endDate mt_endDate_month mt_birmonth" autocomplete="off" value="' + (eList[i].endDate.split(".")[1] ? parseInt(eList[i].endDate.split(".")[1]) : "") + '" placeholder="" maxlength="2">月  </div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">项目角色</td> <td><input type="text" id="mt_positionName" name="mt_positionName" class="ed_name mt_positionName" autocomplete="off" value="' + eList[i].positionName + '" placeholder="请输入项目角色"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">项目内容</td> <td> <textarea type="text" id="mt_projectRemark" name="mt_projectRemark" class="ed_name mt_projectRemark" >' + (eList[i].projectRemark ? eList[i].projectRemark : '') + '</textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
            }
            html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="mt-title"> <div class="metil mt10">项目经历</div>  </div> <div class="infopl">  <div class="mr_empty_add dn mt-edit-add" style="display: block;"> <i></i><span>添加项目经历</span> </div> </div>';
        }
        $('#pro-list').html(html);
        dragInit();
        proInit();
    };

    var proInit = function() {
        $("#pro-list > div").removeClass("edit-status");
        $("#pro-list .mt-edit").click(function(){
            $(this).parent().parent().addClass("edit-status");
            

            $(".mt_education,.mt_positionName,.mt_startDate,.mt_endDate,.mt_projectRemark").blur(function() {
                if($(this).val() == ""){
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
            proSubmit(this,'infopl-edit');
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
                url: "http://www.jobsminer.cc/Resume/delProject?access=1",
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
            /*KISSY.io.post("http://www.jobsminer.cc/Resume/basicPost", JSON.stringify(ss), function(e) {
                console.log('updateuser e:' + e);
            });*/
            e.stopPropagation();
        });
        
        $("#pro-list .mt-edit-add").unbind("click").bind("click",function(e){
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">项目名称</td> <td><input type="text" id="mt_projectName" name="mt_projectName" class="ed_name mt_projectName" autocomplete="off" value="" placeholder="请输入项目名称"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">开始时间</td> <td><div class="mt_biryear_div"><input type="text" id="mt_startDate" name="mt_startDate" class="ed_name valid mt_startDate mt_biryear mt_startDate_year" autocomplete="off" value="" placeholder="" maxlength="4">年</div><div class="mt_birmonth_div"><input type="text" id="mt_startDate" name="mt_startDate" class="ed_name valid mt_startDate mt_birmonth mt_startDate_month" autocomplete="off" value="" placeholder="" maxlength="2">月  </div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr>   <tr> <td width="76" class="col999">结束时间</td> <td><div class="mt_biryear_div"><input type="text" id="mt_endDate" name="mt_endDate" class="ed_name valid mt_endDate mt_biryear mt_endDate_year" autocomplete="off" value="" placeholder="" maxlength="4">年</div><div class="mt_birmonth_div"><input type="text" id="mt_endDate" name="mt_endDate" class="ed_name valid mt_endDate mt_endDate_month mt_birmonth" autocomplete="off" value="" placeholder="" maxlength="2">月 </div> </td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">项目角色</td> <td><input type="text" id="mt_positionName" name="mt_positionName" class="ed_name mt_positionName" autocomplete="off" value="" placeholder="请输入项目角色"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">项目内容</td> <td> <textarea type="text" id="mt_projectRemark" name="mt_projectRemark" class="ed_name mt_projectRemark" ></textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div>';
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
                proSubmit(this, 'infopl-add');
            });
            $("#pro-list .infopl-add .mr_cancel").click(function(){
                $(".infopl-add").remove();
                $("#pro-list .mt-edit-add").show();
            });

        });

    }

    var proSubmit = function(that, className){
        var mt_projectName = KISSY.one('.' + className + ' .mt_projectName').val();
        if(!mt_projectName){
            KISSY.one('.' + className + ' .mt_projectName').parent().parent().next('tr').show();
            return;
        }
        var mt_positionName = KISSY.one('.' + className + ' .mt_positionName').val();
        if(!mt_positionName){
            KISSY.one('.' + className + ' .mt_positionName').parent().parent().next('tr').show();
            return;
        }

        var mt_startDate_year = KISSY.one('.' + className + ' .mt_startDate_year').val();
        var mt_startDate_month = KISSY.one('.' + className + ' .mt_startDate_month').val();
        if(!mt_startDate_year || !mt_startDate_month){
            KISSY.one('.' + className + ' .mt_startDate_year').parent().parent().parent().next('tr').show();
            return;
        }
        
        var mt_endDate_year = KISSY.one('.' + className + ' .mt_endDate_year').val();
        var mt_endDate_month = KISSY.one('.' + className + ' .mt_endDate_month').val();
        if(!mt_endDate_year || !mt_endDate_month){
            KISSY.one('.' + className + ' .mt_endDate_year').parent().parent().parent().next('tr').show();
            return;
        }
        var mt_projectRemark = KISSY.one('.' + className + ' .mt_projectRemark').val();
        if(!mt_projectRemark){
            KISSY.one('.' + className + ' .mt_projectRemark').parent().parent().parent().next('tr').show();
            return;
        }
        var proid = $(that).parent().parent().attr("data-id") || '';
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
                "proid":proid
            };

        new IO({
            url: "http://www.jobsminer.cc/Resume/projectExperience?access=1",
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
            url = 'http://www.jobsminer.cc/User/getOtherinfo';

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
        if(data.content && data.content.custom_model){
            var eList = data.content.custom_model, html = '';
            for(var i = 0; i < eList.length; i++){
                if(eList[i].titleName){
                    html += '<div><div class="mt-title"> <div class="metil mt10">自定义模块</div> <div class="mt-edit"><i></i>编辑</div> </div> <div class="infopl"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody>    <tr> <td class="mt_base" id="mt_titleName">' + eList[i].titleName + '</td></tr><tr><td id="mt_titleContent">' + eList[i].titleContent + '</td> </tr> </tbody> </table> </div>';
                    html += '<div class="infopl infopl-edit" data-id="' + eList[i].id + '">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">自定义标题</td> <td><input type="text" id="mt_titleName" name="mt_titleName" class="ed_name mt_titleName" autocomplete="off" value="' + eList[i].titleName + '" placeholder="请输入自定义标题"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">内容</td> <td> <textarea type="text" id="mt_titleContent" name="mt_titleContent" class="ed_name mt_titleContent" >' + (eList[i].titleContent ? eList[i].titleContent : '') + '</textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <input type="submit" class="mr_del" value="删除" style="display:none;"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div> </div>';
                }
            }
            html += '<div class="mt-edit-add">添加<i></i></div>';
        }else{
            html += '<div class="mt-title"> <div class="metil mt10">自定义模块</div> <div class="mt-edit"><i></i>编辑</div> </div> <div class="infopl"> <div class="mr_empty_add dn" style="display: block;"> <i></i><span>自定义模块</span> </div> </div>';
        }
        $('#other-list').html(html);
        dragInit();
        corInit();
    };

    var corInit = function() {
        $("#other-list > div").removeClass("edit-status");
        $("#other-list .mt-edit").click(function(){
            $(this).parent().parent().addClass("edit-status");
            

            $(".mt_titleName,.mt_titleContent").blur(function() {
                if($(this).val() == ""){
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
            corSubmit(this,'infopl-edit');
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
                url: "http://www.jobsminer.cc/Resume/userDefineDel?access=1",
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
            var html = '<div class="infopl infopl-edit infopl-add" data-id="">  <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td width="76" class="col999">自定义标题</td> <td><input type="text" id="mt_titleName" name="mt_titleName" class="ed_name mt_titleName" autocomplete="off" value="" placeholder="请输入自定义标题"></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> <tr> <td width="76" class="col999">内容</td> <td> <textarea type="text" id="mt_titleContent" name="mt_titleContent" class="ed_name mt_titleContent" ></textarea></td> </tr> <tr style="display: none; "><td><span for="mr_name" generated="true" class="error">必填</span></td></tr> </tbody> </table> <div class="mr_ope"> <input type="submit" class="mr_save" value="保存"> <a href="javascript:;" class="mr_cancel">取消</a> </div> </div>';
            $('#other-list').append(html);
            $("#other-list .mt-edit-add").hide();
            $(".mt_titleName,.mt_titleContent").blur(function() {
                if($(this).val() == ""){
                    $(this).parent().parent().next('tr').show();
                }else{
                    $(this).parent().parent().next('tr').hide();
                }
            });
            $("#other-list .infopl-add .mr_save").unbind("click").bind("click",function(e){
                corSubmit(this, 'infopl-add');
            });
            $("#other-list .infopl-add .mr_cancel").click(function(){
                $(".infopl-add").remove();
                $("#other-list .mt-edit-add").show();
            });

        });

    }

    var corSubmit = function(that, className){
        var mt_titleName = KISSY.one('.' + className + ' .mt_titleName').val();
        if(!mt_titleName){
            KISSY.one('.' + className + ' .mt_titleName').parent().parent().next('tr').show();
            return;
        }
        
        var mt_titleContent = KISSY.one('.' + className + ' .mt_titleContent').val();
        if(!mt_titleContent){
            KISSY.one('.' + className + ' .mt_titleContent').parent().parent().parent().next('tr').show();
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
            url: "http://www.jobsminer.cc/Resume/userDefine?access=1",
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