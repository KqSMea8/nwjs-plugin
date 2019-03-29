(function(window, undefined) {
    'use strict';

    var navWidget = (function() {
        var baseData, cur = 'hot', obj = $('#jm_website');
        var init = function() {
            bindEvent();
        };

        var bindEvent = function() {
            obj.find('.title a').off('click').on('click', function() {
                $(this).addClass('cur').siblings().removeClass('cur');
                cur = $(this).attr('data-link');
                processNavList();
            });
            requestNavList();
        };

        var tooglePanel = function() {

        };

        var requestNavList = function() {
            var url = 'http://js.client.walatao.com/global/v15/navList.json';
            $.ajax({
                url: url,
                type: 'get',
                success: function(data) {
                    baseData = data;
                    processNavList();
                    console.log('request nav list data is success!');
                }
            });
        };

        /*
        
        <li class="clearfix">
            <div class="img"></div>
            <div class="info">
                <span class="label">国卡</span>
                <span class="label">个护母婴</span>
                <span class="label">综合</span>
                <a class="">商家攻略</a>
            </div>
        </li>
        
        */

        var processNavList = function() {
            var i, l, label, str = '';
            if(baseData.data[cur]) {
                $.each(baseData.data[cur], function(idx, it) {
                    console.log(it.website);
                    label = '';
                    $.each(it.label.split(','), function(index, item) {
                        label += '<span class="label">' + item + '</span>';
                    })
                    str += '<li class="clearfix">' + 
                                '<a class="img ' + it.name + '" href="' + it.website + '" target="_blank" ></a>' +
                                '<div class="info">' + label + '<div class="type">' +
                                    (it.raiders === 'unknow' ? '<label></label>' : '<a href="' + it.raiders + '" target="_blank" >商家攻略</a>') +
                                    (it.proxy ? '<a class="need_proxy" href="javascript: void(0);">需穿越</a>' : '<label></label>') + 
                                '</div></div>' +
                           '</li>';
                });
                obj.find('.resultPanel ul').html(str);
                $('#jm_website .resultPanel li .type .need_proxy').length !== 0 && $('#jm_website .resultPanel li .type .need_proxy').off('click').on('click', function() {
                    $('#jm_pop_tab .ks-switchable-nav li').eq(3).trigger('click');
                });
            }
        };

        return {
            init: init
        };

    })();


    var courseWidget = (function() {

        var obj = $('#course'), currentStep = 0,
            stepConfig = [
                {
                    pos: {
                        top: '60px',
                        left: '80px'
                    },
                    name: '特惠',
                    content: '每日特价、历史低价、优惠码信息不断放送！',
                    arrowPos: '30px',
                    nameLeftPos: '81px'
                },
                {
                    pos: {
                        top: '60px',
                        left: '140px'
                    },
                    name: '提醒',
                    content: '降价/有货提醒，包裹追踪，海淘记录一站把握',
                    arrowPos: '30px',
                    nameLeftPos: '140px'
                },
                {
                    pos: {
                        top: '60px',
                        left: '200px'
                    },
                    name: '密封代',
                    content: '首款海淘代购溯源工具',
                    arrowPos: '30px',
                    nameLeftPos: '198px'
                },
                {
                    pos: {
                        top: '60px',
                        left: '270px'
                    },
                    name: '穿越',
                    content: '使用美国IP访问封锁大陆IP的网站，一大波商品向你涌来！',
                    arrowPos: '30px',
                    nameLeftPos: '268px'
                },
                {
                    pos: {
                        top: '60px',
                        left: '230px'
                    },
                    name: '百科',
                    content: '海淘攻略、心得及晒单，这里是海淘者的社区',
                    arrowPos: '120px',
                    nameLeftPos: '327px'
                },
                {
                    pos: {
                        top: '60px',
                        left: '200px'
                    },
                    name: '工具',
                    content: '开启/关闭辅助工具<br/>还有QQ群和邮件向我们冷酷地吐槽与温暖地鼓励',
                    arrowPos: '220px',
                    nameLeftPos: '385px'
                }
            ];

        var init = function() {
            if(localStorage.getItem('jmBeginCourse') === 'true') {
                obj.hide();
            } else {
                bindEvent();
            }
        };

        var bindEvent = function() {
            obj.find('.enter .okay').off('click').on('click', function() {
                obj.find('.enter').hide();
                obj.find('.step').show();
            });
            obj.find('.enter .canel').off('click').on('click', function() {
                obj.hide();
                localStorage.setItem('jmBeginCourse', 'true');
            });
            obj.find('#nextStep').off('click').on('click', function() {
                nextStep();
            });
            obj.find('#quitCourse').off('click').on('click', function() {
                obj.hide();
                localStorage.setItem('jmBeginCourse', 'true');
            });
        };

        var nextStep = function() {
            if(currentStep === stepConfig.length) {
                obj.hide();
                localStorage.setItem('jmBeginCourse', 'true');
            } else {
                if(currentStep === stepConfig.length - 1) {
                    obj.find('#nextStep').hide();
                    obj.find('.focus').width(72);
                    obj.find('#quitCourse').css('left', '350px');
                }
                if(currentStep === 2 || currentStep === 5) {
                    obj.find('.focus').width('80px');
                } else {
                    obj.find('.focus').width('60px');
                }
                // if(currentStep === 0) {
                //     obj.find('#nextStep').css('top', '300px');
                //     obj.find('#quitCourse').css('top', '300px');
                //     obj.find('.course_detail').css('top', '350px');
                //     obj.find('.special_focus').show();
                // } else {
                //     obj.find('#nextStep').css('top', '200px');
                //     obj.find('#quitCourse').css('top', '200px');
                //     obj.find('.course_detail').css('top', '250px');
                //     obj.find('.special_focus').hide();
                // }
                $('#jm_pop_tab li.jm-stat').eq(currentStep + 1).trigger('click');
                obj.find('.focus').text(stepConfig[currentStep].name).css('left', stepConfig[currentStep].nameLeftPos);
                obj.find('.detail').html('<div class="arrow"></div>' + stepConfig[currentStep].content).css('left', stepConfig[currentStep].pos.left).css('top', stepConfig[currentStep].pos.top);
                obj.find('.arrow').css('left', stepConfig[currentStep].arrowPos);
                currentStep ++;
            }
        };

        return {
            init: init
        }

    })();

    var remindWidget = (function() {

        var init = function() {
            
        };

        return {
            init: init
        }
    })();

    remindWidget.init();
    navWidget.init();
    courseWidget.init();
})(window);