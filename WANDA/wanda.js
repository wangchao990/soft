window.onload = function () {
    // header栏鼠标移动到 "商管集团"和 "文化集团" 显示下拉框的效果开始
    var header_words_1 = document.getElementById('header_words_1');
    var u1 = document.getElementById('u1');
    var header_words_2 = document.getElementById('header_words_2');
    var u2 = document.getElementById('u2');
    header_words_1.onmouseover = function () { /*鼠标移入 */
        u1.style.display = 'block';
    }
    header_words_1.onmouseout = function () {
        u1.style.display = 'none';
    }
    header_words_2.onmouseover = function () { /*鼠标移入 */
        u2.style.display = 'block';
    }
    header_words_2.onmouseout = function () {
        u2.style.display = 'none';
    }
    // 轮播图
    var banner = document.getElementById('banner');
    var banner_ul = document.getElementById('banner_ul');
    var li_arr = banner_ul.getElementsByTagName('li');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var rds = document.getElementById('rds').getElementsByTagName('li');
    var index = 0;
    left.addEventListener('click', function () {
        if (index > 0) {
            index--;
        } else {
            index = 6;
            index--;
        }
        for (var i = 0; i < li_arr.length; i++) {
            li_arr[i].style.display = 'none';
            rds[i].style.backgroundColor = '#0165c7';
        }
        li_arr[index].style.display = 'block';
        rds[index].style.backgroundColor = '#fff';
    })
    right.addEventListener('click', function () {
        if (index < 5) {
            index++
        } else {
            index = -1;
            index++;
        }
        for (var i = 0; i < li_arr.length; i++) {
            li_arr[i].style.display = 'none';
            rds[i].style.backgroundColor = '#0165c7';
        }
        li_arr[index].style.display = 'block';
        rds[index].style.backgroundColor = '#fff';
    })
    // 点击小圆点切换图片
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');
    var btn5 = document.getElementById('btn5');
    var btn6 = document.getElementById('btn6');
    btn1.addEventListener('click', function () {
        for (var i = 0; i < li_arr.length; i++) {
            li_arr[i].style.display = 'none';
            rds[i].style.backgroundColor = '#0165c7';

        }
        li_arr[0].style.display = 'block';
        rds[0].style.backgroundColor = '#fff';
    }, false)
    btn2.addEventListener('click', function () {
        for (var i = 0; i < li_arr.length; i++) {
            li_arr[i].style.display = 'none';
            rds[i].style.backgroundColor = '#0165c7';

        }
        li_arr[1].style.display = 'block';
        rds[1].style.backgroundColor = '#fff';
    }, false)
    btn3.addEventListener('click', function () {
        for (var i = 0; i < li_arr.length; i++) {
            li_arr[i].style.display = 'none';
            rds[i].style.backgroundColor = '#0165c7';

        }
        li_arr[2].style.display = 'block';
        rds[2].style.backgroundColor = '#fff';
    }, false)
    btn4.addEventListener('click', function () {
        for (var i = 0; i < li_arr.length; i++) {
            li_arr[i].style.display = 'none';
            rds[i].style.backgroundColor = '#0165c7';

        }
        li_arr[3].style.display = 'block';
        rds[3].style.backgroundColor = '#fff';
    }, false)
    btn5.addEventListener('click', function () {
        for (var i = 0; i < li_arr.length; i++) {
            li_arr[i].style.display = 'none';
            rds[i].style.backgroundColor = '#0165c7';

        }
        li_arr[4].style.display = 'block';
        rds[4].style.backgroundColor = '#fff';
    }, false)
    btn6.addEventListener('click', function () {
        for (var i = 0; i < li_arr.length; i++) {
            li_arr[i].style.display = 'none';
            rds[i].style.backgroundColor = '#0165c7';

        }
        li_arr[5].style.display = 'block';
        rds[5].style.backgroundColor = '#fff';
    }, false)
    // 自动播放
    timeId = setInterval(function () {
        right.click();
    }, 3000)
    banner.onmouseover = function () {
        clearInterval(timeId);
    }
    banner.onmouseout = function () {
        timeId = setInterval(function () {
            right.click();
        }, 3000);
    }
    // 视频中心中的动画效果
    var img = document.getElementById('img');
    var li1 = document.getElementById('li1');
    var li2 = document.getElementById('li2');
    var li3 = document.getElementById('li3');
    li1.onmouseover = function () {
        li1.style.border = '5px solid #005bb3';
        img.innerHTML = '<img src="./images/01.png" title = "丹寨万达小镇四期实拍"/>';
    }
    li1.onmouseout = function () {
        li1.style.border = '';
    }
    li2.onmouseover = function () {
        li2.style.border = '5px solid #005bb3';
        img.innerHTML = '<img src="./images/02.png" title = "2020万新生宣传片"/>';
    }
    li2.onmouseout = function () {
        li2.style.border = '';
    }

    li3.onmouseover = function () {
        li3.style.border = '5px solid #005bb3';
        img.innerHTML = '<img src="./images/03.png" title = "新冠疫情中的武汉万达人"/>';
    }
    li3.onmouseout = function () {
        li3.style.border = '';
    }
    // 企业简介的动画效果
    var ok1 = document.getElementById('ok1');
    var ok2 = document.getElementById('ok2');
    var ok3 = document.getElementById('ok3');
    var ok4 = document.getElementById('ok4');
    var hello1 = document.getElementById('hello1');
    var hello2 = document.getElementById('hello2');
    var hello3 = document.getElementById('hello3');
    var hello4 = document.getElementById('hello4');
    ok1.onclick = function () {
        this.style.backgroundColor = '#fff';
        this.style.color = '#3767a7';
        this.style.marginRight = '0';
        ok3.style.marginRight = '5px';
        ok2.style.marginRight = '5px';

        this.style.borderTop = '4px solid #3767a7';
        ok2.style.backgroundColor = '#3767a7';
        ok2.style.color = '#fff';
        ok3.style.backgroundColor = '#3767a7';
        ok3.style.color = '#fff';
        ok4.style.backgroundColor = '#3767a7';
        ok4.style.color = '#fff';
        hello1.style.display = 'block';
        hello2.style.display = 'none';
        hello3.style.display = 'none';
        hello4.style.display = 'none';
    }
    ok2.onclick = function () {
        this.style.backgroundColor = '#fff';
        this.style.color = '#3767a7';
        this.style.marginRight = '0';
        ok1.style.marginRight = '0';
        ok3.style.marginRight = '5px';
        this.style.borderTop = '4px solid #3767a7';
        ok1.style.backgroundColor = '#3767a7';
        ok1.style.color = '#fff';
        ok3.style.backgroundColor = '#3767a7';
        ok3.style.color = '#fff';
        ok4.style.backgroundColor = '#3767a7';
        ok4.style.color = '#fff';

        hello1.style.display = 'none';
        hello2.style.display = 'block';
        hello3.style.display = 'none';
        hello4.style.display = 'none';
    }
    ok3.onclick = function () {
        this.style.backgroundColor = '#fff';
        this.style.color = '#3767a7';
        this.style.marginRight = '0';
        ok1.style.marginRight = '5px';
        ok2.style.marginRight = '0';
        this.style.borderTop = '4px solid #3767a7';
        ok1.style.backgroundColor = '#3767a7';
        ok1.style.color = '#fff';
        ok2.style.backgroundColor = '#3767a7';
        ok2.style.color = '#fff';
        ok4.style.backgroundColor = '#3767a7';
        ok4.style.color = '#fff';

        hello1.style.display = 'none';
        hello2.style.display = 'none';
        hello3.style.display = 'block';
        hello4.style.display = 'none';
    }
    ok4.onclick = function () {
        this.style.backgroundColor = '#fff';
        this.style.color = '#3767a7';
        this.style.borderTop = '4px solid #3767a7';
        ok3.style.marginRight = '0';
        ok1.style.marginRight = '5px';
        ok2.style.marginRight = '5px';

        ok1.style.backgroundColor = '#3767a7';
        ok1.style.color = '#fff';
        ok2.style.backgroundColor = '#3767a7';
        ok2.style.color = '#fff';
        ok3.style.backgroundColor = '#3767a7';
        ok3.style.color = '#fff';

        hello1.style.display = 'none';
        hello2.style.display = 'none';
        hello3.style.display = 'none';
        hello4.style.display = 'block';
    }
    // nav导航栏中的特效
    var ul_1 = this.document.getElementById('ul_1');
    var ul_1 = this.document.getElementById('ul_1');
    var ul_1 = this.document.getElementById('ul_1');
    var ul_1 = this.document.getElementById('ul_1');
    var a_01 = document.getElementById('a_01');
    var a_02 = document.getElementById('a_02');
    var a_03 = document.getElementById('a_03');
    var a_04 = document.getElementById('a_04');
    a_01.onmouseover = function () {
        ul_1.style.display = 'block';
    }
    a_01.onmouseout = function () {
        ul_1.style.display = 'none';
    }
    a_02.onmouseover = function () {
        ul_2.style.display = 'block';
    }
    a_02.onmouseout = function () {
        ul_2.style.display = 'none';
    }
    a_03.onmouseover = function () {
        ul_3.style.display = 'block';
    }
    a_03.onmouseout = function () {
        ul_3.style.display = 'none';
    }
    a_04.onmouseover = function () {
        ul_4.style.display = 'block';
    }
    a_04.onmouseout = function () {
        ul_4.style.display = 'none';
    }
    var btn_search = document.getElementById('btn_search');
    var form_search = document.getElementById('form_search');
    var close = document.getElementById('close');
    var search_news = document.getElementById('search_news');
    var search_ul = document.getElementById('search_ul');
    var search_ul_lis = search_ul.getElementsByTagName('li');
    var nav_dh = document.getElementById('nav_dh');
    btn_search.onclick = function () {
        form_search.style.display = 'block';
        nav_dh.style.opacity = '0';
    }
    close.onclick = function () {
        form_search.style.display = 'none';
        nav_dh.style.opacity = '1';
        }
    search_news.addEventListener('mouseover',function() {
        console.log(555);
        
        search_ul.style.display = 'block';
        for (var i = 0; i < search_ul_lis.length; i++) {
            var io = search_ul_lis[i];
            io.onmouseover = function () {
                this.style.backgroundColor = '#eee';
            }
            io.onmouseout = function () {
                this.style.backgroundColor = '#fff';
            }
        }
    })
    search_news.addEventListener('mouseout',function() {
        console.log(666);
        console.log(search_news);
        
        search_ul.style.display = 'none';
    })
    var text = document.getElementById('text');
    text.onclick = function() {
        this.value = "";
    }    


} 
