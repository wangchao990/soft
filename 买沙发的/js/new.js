$(function () {
    $('.nextGo').click(function(event) {
        $.fn.fullpage.moveSectionDown();        /* 点击继续向下就往下翻一屏*/
    })
    var k = $(window).height(); // 当前屏幕的高度
    var flag = false;  /*判断动画是否结束*/
    $('#fullpage').fullpage({
        // 布尔类型，添加右边导航小圆点----------- true有  false没有
        navigation: true,
        // 布尔类型，最后一屏，滚动滚轮返回第一屏    true可以返回顶部  false不能返回顶部
        loopBottom: true,
        // 滚轮滚动速度
        scrollingSpeed: 1500,
        // 回调函数  index为索引
        // 发生在第二屏的动画   
        afterLoad: function (anchorLink, index) {
        // 判断在第二屏时发生动画   当flag=false 动画没结束
            if (index == 2 && flag == false) {
                //         // search框显示，移动到指定位置，时长为1秒
                $('.search').show().animate({ 'right': 370 }, 1000, 'easeInElastic', function () {
                    //             // search到达指定位置后，search里面的文字以动化方式显示出来，时长为1秒
                    $('.searchWords').animate({ 'opacity': 1 }, 1000, function () {
                        //                 // 文字显示出来之后，search框立即隐藏
                        $('.search').hide();
                        //                 // search框隐藏之后，search图片高度以动化方式变为30px，以动化方式移动到右上角，时长为1秒
                        $('.search-02-1').show().animate({ 'height': 30, 'right': 250, 'bottom': 452 }, 1000, function () {
                            flag = true;  /*当flag=true时动画结束 */
                        });
                        $('.goods').show().animate({ 'height': 218 }, 1000);
                        $('.words-02').animate({ 'opacity': 1 }, 500,function() {
                            $('.nextGo').show();
                        });
                    });

                });
            };
        },             /*第一个回调函数和第二个回调函数之间用逗号隔开 */
        // 第二屏的沙发往第三屏掉的动画
        //  发生在第三屏的动画
        onLeave: function (index, nextIndex, direction) {
            $('.nextGo').hide();
            if (index == 2 && nextIndex == 3 && flag == true) {
                //         // 第二屏的沙发往第三屏的盒子中掉
                $('.shirt-02').show().animate({ 'bottom': -(k - 250), "width": 207, "left": 260 }, 2000, function () {
                    $('.img-01-a').animate({ 'opacity': 1 }, 500);
                    $('.btn-01-a').animate({ 'opacity': 1 }, 1000);
                    $('.nextGo').show();
                });
                //  // 第二屏的空白图片显示
                $('.cover').show();
            }
            // 发生在第四屏的动画
            if (index == 3 && nextIndex == 4) {
                $('.shirt-02').hide();
                $('.t1f').show().animate({ 'bottom': -[(k - 250) + 50], 'left': 248 }, 2000, function () {
                    $(this).hide();
                    $('.car-t1f').show();
                    // 'easeInElastic'  为easing缓动动画中的一种动画方式
                    $('.car').animate({ 'left': 2000 }, 2000, 'easeInElastic', function () {
                        $('.note').show();
                        $('.note-img').animate({ 'opacity': 1 }, 2000);
                        $('.words-04-a').animate({ 'opacity': 1 }, 1000,function() {
                            $('.nextGo').show();
                        });
                    });
                });
            }
            // 发生在第五屏的动画
            if (index == 4 && nextIndex == 5) {
                $('.hand').animate({ 'bottom': 0 }, 3000, function () {
                    $('.mouse2').animate({ 'opacity': 1 }, 500);
                    $('.tif-5').show().animate({ 'bottom': 70 }, 1000);
                    $('.order').animate({ 'bottom': 390 }, 2000, function () {
                        $('.word').addClass('addwords');
                        $('.nextGo').show();
                    });
                });
            }
            // 发生在第六屏的动画
            if (index === 5 && nextIndex == 6) {
                $('.tif-5').animate({ 'bottom': -(k - 500), 'left': '35%', 'width': 65 }, 1000, function () {
                    $(this).hide();
                });
                $('.box-6').animate({ 'left': '35%' }, 1500, function () {
                    $('.box-6').animate({ 'bottom': 40 }, 1000, function () {
                        $('.box-6').hide();
                        $('.pop').show();
                        $('.pop-words').show().animate({'left':'30%'},2000,'easeOutElastic');
                        $('.section6').animate({'backgroundPositionX':'100%'},4000,function() {
                            $('.boy').show().animate({'height':305,'bottom':116},2000,function() {
                            $('.boy').animate({'right':500},500,function() {
                                $('.take').animate({'opacity':1},1000,function() {
                                    $('.door').animate({'opacity':1},500,function() {
                                        $('.girl').show().animate({'right':350,'height':300},1000,function() {
                                            $('.nextGo').show();
                                        });
                                    });
                                });
                            });
                           })
                        });
                    })
                })
            }
            // 发生在第七屏的动画
            if (index == 6 && nextIndex == 7) {
                $('.star').animate({'width':120},5000,function() {
                    $('.good').show(1500,function() {
                        $('.nextGo').show();
                    });
                });
            }
//  第八屏的动画
            $('.beginshop').mouseover(function() {
                $('.btn-2').show();
            });
            $('.pointer').mouseout(function() {
                $('.btn-2').hide();
            })
            $(document).mousemove(function(event) {
                var x = event.pageX - 70;  /*70为手的图片宽度的一半*/ 
                var y = event.pageY + 5;
                var minY = k - 450;
                if( y < minY) {
                    $('.pointer').css({'left':x,'top':minY});
                } else {
                    $('.pointer').css({'left':x,'top':y});

                }
            })
            // 点击返回按钮时，
            // 1.页面返回顶部
            // 2.所有动画的样式清零
            $('.again').click(function(event) {
               $.fn.fullpage.moveTo(1);   /*利用fullPage插件快速返回第一屏 */
                $('img').attr('style','');
                $('.move').attr('style','');
                $('.nextGo').hide();
            })





        }
    })
})
