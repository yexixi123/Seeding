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
// var date = new Date().Format("yyyy-MM-dd-m-s")
// 主页列表初始化
var myList = myApp.virtualList('.list-block.virtual-list', {
    // Array with items data
cache:true,
    items: [
    ],
    // Template 7 template to render each item
    template: '<li class="item-content list-item ">' +
    '<div class="item-inner row">' +
    '<div class="item-title col-70">{{title}}</div>' +
    '<div class="item-date col-30">{{date}}</div>' +
    '<div class="item-text col-100">{{text}}</div>' +
    '</div>' +
    '</li>',
    height: 80
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

// 增加list
$$('.append-item').on('click', function () {
    var new_title=$$('.newList').val().substring(0, 10)
    var new_text=$$('.newList').val()
    console.log(new_title)
    console.log(new_text)
    // Append Item
    if(!$$('.newList').val()==''){

    myList.appendItem({
        title: new_title,
        text:new_text,
        date:new Date().Format("yyyy-MM-dd-m-s")
    });
    }
});
//每次点击添加按钮清空里面的内容
$$('.popup-add').on('open', function () {
  $$('.newList').val('')
});  
var item_content,item_title,item_time;
//点击编辑
$$('.home-list').on('click','.list-item', function () {
    var setText=$$(this).children().children().eq(2).text()
  myApp.popup('.popup-edit')
  $$('.editList').val(setText)
  item_content=$$(this).children().children().eq(2)
  item_title=$$(this).children().children().eq(0)
  item_time=$$(this).children().children().eq(1)
});
//编辑完成后 list内容更改
$$('.save-item').on('click', function () {
    var panduan=$$('.editList').html()
    if(!$$('.editList').val()==panduan){
    var edit_title=$$('.editList').val().substring(0, 10)
    var edit_text=$$('.editList').val()
    var edit_time=new Date().Format("yyyy-MM-dd-m-s")
    console.log(edit_text)
    item_content.text(edit_text)
    item_title.text(edit_title)
    item_time.text(edit_time)
    }
}); 
