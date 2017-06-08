// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    precompileTemplates: true
});
// 注册表单提交

$$('.form-to-json').on('click', function () {
     var formData = myApp.formToJSON('#my-reg');
    console.log(JSON.stringify(formData))

    $$.ajaxSetup({
        contentType: 'application/json'
    });
    $$.ajax({
        url: 'http://192.168.2.154:8080/user/addUser',
        method: 'POST',
        crossDomain: true,//这个一定要设置成true，默认是false，true是跨域请求。
        // contentType:'application/json',
        //contentType: "application/json",
        data: JSON.stringify(formData),
        //dataType:'json',
        success: function (data) {
            console.log(data)
            console.log('成功')
        },
        error: function (data) {
            console.log(data)
            console.log('失败')
        }

    })
 
$$('.my_login').on('click', function () {
    myApp.closeModal('.login-screen')
});
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
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
var date = new Date().Format("yyyy-MM-dd")
// 主页列表初始化
var myList = myApp.virtualList('.list-block.virtual-list', {
    // Array with items data

    items: [{
        title: 'Item 1',
        text: 'aaa',
        date: date
    }, {
        title: 'Item 2',
        text: 'aaa',
        date: date
    },

        {
            title: 'Item 3',
            text: 'aaa',
            date: date
        },
        {
            title: 'Item 4',
            text: 'aaa',
            date: date
        }, {
            title: 'Item 5',
            text: 'aaa',
            date: ''
        }, {
            title: 'Item 6',
            text: 'aaa',
            date: date
        }, {
            title: 'Item 7',
            text: 'aaa',
            date: date
        }, {
            title: 'Item 8',
            text: 'aaa',
            date: date
        }, {
            title: 'Item 9',
            text: 'aaa',
            date: date
        }, {
            title: 'Item 10',
            text: 'aaa',
            date: date
        }, {
            title: 'Item 11',
            text: 'aaa',
            date: date
        }, {
            title: 'Item 11',
            text: 'aaa',
            date: date
        }, {
            title: 'Item 12',
            text: 'aaa',
            date: date
        }, {
            title: 'Item 13',
            text: 'aaa',
            date: date

        }, {
            title: 'Item 14',
            text: 'aaa',
            date: date

        }, {
            title: 'Item 15',
            text: 'aaa',
            date: date

        }, {
            title: 'Item 16',
            text: 'aaa',
            date: date
        }
    ],
    // Template 7 template to render each item
    template: '<li class="item-content">' +
    '<div class="item-inner row">' +
    '<div class="item-title col-70">{{title}}</div>' +
    '<div class="item-date col-30">{{date}}</div>' +
    '<div class="item-text">{{text}}</div>' +
    '</div>' +
    '</li>',
    height: 80
});


// 增加list
$$('.button.append-items').on('click', function () {
    // Append Item
    myList.appendItem({
        title: 'Item 1001'
    });
});


// 根据索引显示  
// 已拔草
$$('.button.weedDone').on('click', function () {
    // We need to pass array with indexes of items to show
    myList.filterItems([4, 6, 9, 10]);
    $$('.weedDone').addClass('selection').siblings().removeClass('selection');
    $$('.list-block ul').css("height", "100%")
});
// 未拔草
$$('.button.willWeed').on('click', function () {
    // We need to pass array with indexes of items to show
    myList.filterItems([0, 1, 2]);
    $$('.willWeed').addClass('selection').siblings().removeClass('selection');
    $$('.list-block ul').css("height", "100%")
});

// Reset filter
$$('.button.weedAll').on('click', function () {
    myList.resetFilter();
    $$('.weedAll').addClass('selection').siblings().removeClass('selection');
    $$('.list-block ul').css("height", "100%")
});
