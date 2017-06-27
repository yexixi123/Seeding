// Initialize your app
var myApp = new Framework7({
    precompileTemplates: true
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    precompileTemplates: true
});
var cardView = myApp.addView('.cardView')
    // 登陆

// $$('.my_login').on('click', function () {
//     myApp.closeModal('.login-screen')
// });
$$('.my_login').on('click', function() {
    var loginData = myApp.formToJSON('#form-login')
    console.log(JSON.stringify(loginData))
    $$.ajaxSetup({
        contentType: 'application/json'
    });
    $$.ajax({
        url: 'http://192.168.2.154:8080/user/login',
        method: 'POST',
        crossDomain: true,
        data: JSON.stringify(loginData),
        success: function(data) {
            console.log('成功')
            console.log(data)
            if (data == 'true') {
                myApp.closeModal('.login-screen')
            }
            if (data == 'false') {
                alert('用户名或密码错误')
            }
        },
        error: function(data) {

            console.log(data)
            console.log('失败')
        }
    })
});
// 注册表单提交

$$('.form-to-json').on('click', function() {
    var regData = myApp.formToJSON('#my-reg');
    console.log(JSON.stringify(regData))

    $$.ajaxSetup({
        contentType: 'application/json'
    });
    $$.ajax({
        url: 'http://192.168.2.154:8080/user/addUser',
        method: 'POST',
        crossDomain: true, //这个一定要设置成true，默认是false，true是跨域请求。
        data: JSON.stringify(regData),
        //dataType:'json',
        success: function(data) {
            console.log(data)
            console.log('成功')
        },
        error: function(data) {
            console.log(data)
            console.log('失败')
        }

    })
})


// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function(fmt) { //author: meizz 
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
    cache: true,
    items: [],
    // Template 7 template to render each item
    template: '<li class="item-content" id={{id}}>' +
        '<form id="form-img" onchange="logchange()"><input class="myfile" type="file" accept="image/*" /></form>' +
        '<div class="item-media item-img"><img src="{{url}}"></div>' +
        '<div class="item-inner row list-item">' +
        '<div class="item-title col-60">{{title}}</div>' +
        '<div class="item-date col-40">{{date}}</div>' +
        '<div class="item-text col-100">{{text}}</div>' +
        '</div>' +
        '</li>',
    height: 80
});




// 根据索引显示  
// 已拔草
$$('.button.weedDone').on('click', function() {
    // We need to pass array with indexes of items to show
    myList.filterItems([]);
    $$('.weedDone').addClass('selection').siblings().removeClass('selection');
    $$('.list-block ul').css("height", "100%")
});
// 未拔草
$$('.button.willWeed').on('click', function() {
    // We need to pass array with indexes of items to show
    myList.filterItems([]);
    $$('.willWeed').addClass('selection').siblings().removeClass('selection');
    $$('.list-block ul').css("height", "100%")
});

// Reset filter
$$('.button.weedAll').on('click', function() {
    myList.resetFilter();
    $$('.weedAll').addClass('selection').siblings().removeClass('selection');
    $$('.list-block ul').css("height", "100%")
});

// 增加list
$$('.append-item').on('click', function() {
    if (!navigator.onLine) {
        if (!$$('.newList').val() == '') {
            var listData = {
                content: $$('.newList').val()
            }
            $$.ajax({
                url: '1',
                method: 'post',
                crossDomain: true, //这个一定要设置成true，默认是false，true是跨域请求。
                data: JSON.stringify(listData),
                //dataType:'json',
                success: function(data) {
                    console.log(data)
                    console.log('成功')
                    myList.appendItem({
                        title: data.title,
                        text: data.content,
                        date: data.time,
                        url: '',
                        id: data.id
                    });
                },
                error: function(data) {
                    console.log(data)
                    console.log('失败')
                }
            })
        }
    } else {

        var new_title = $$('.newList').text().substring(0, 10)
        var new_text = $$('.newList').text()
        console.log('这是标题'+new_title)
        console.log('这是内容'+new_text)
            // Append Item
        if (!$$('.newList').text() == '') {

            myList.appendItem({
                title: new_title,
                text: new_text,
                date: new Date().Format("yyyy-MM-dd"),
                url: '',
                id: ''
            });
        }
    }
});
//每次点击添加按钮清空里面的内容
$$('.popup-add').on('open', function() {
    $$('.newList').text('')
});
var item_content, item_title, item_time, oldval;

//点击编辑
$$('.home-list').on('click', '.list-item', function() {
    var setText = $$(this).children().eq(2).text()
    myApp.popup('.popup-edit')
    $$('.editList').text(setText)
    item_content = $$(this).children().eq(2)
    item_title = $$(this).children().eq(0)
    item_time = $$(this).children().eq(1)
    oldval = $$('.editList').text()
});
//点击图片
$$('.home-list').on('click', '.item-media', function() {
    console.log('点击了图片')
})

//编辑完成后 list内容更改
$$('.save-item').on('click', function() {
    var newval = $$('.editList').text()
    if (newval != oldval) {
        var edit_title = $$('.editList').text().substring(0, 10)
        var edit_text = $$('.editList').text()
        var edit_time = new Date().Format("yyyy-MM-dd")
        console.log(edit_text)
        item_content.text(edit_text)
        item_title.text(edit_title)
        item_time.text(edit_time)
    }

});

//图片上传
// 注册表单提交

function logchange() {
    var imgData = myApp.formToJSON('#form-img');
    console.log(imgData)
    console.log(myList.items[0].url)
        // $$.ajaxSetup({
        //     contentType: 'application/json'
        // });
    $$.ajax({
        url: 'http://192.168.2.154:8080/user/addUser',
        method: 'POST',
        crossDomain: true, //这个一定要设置成true，默认是false，true是跨域请求。
        data: imgData,
        //dataType:'json',
        success: function(data) {
            console.log(data)
            console.log('成功')
            myList.items[0].url = data
        },
        error: function(data) {
            console.log(data)
            console.log('失败')
        }

    })
}

function img(source) {
    var file = source.files[0];

    if (!/image\/\w+/.test(file.type)) {
        alert('请确保文件为图像类型');
        return false;
    }
    if (window.FileReader) {
        var fr = new FileReader();
        fr.readAsDataURL(file);

        fr.onload = function(e) {
            var location1 = e.target.result
            Edit = document.getElementById("idEdit")
            Edit.innerHTML += '<img style="width:80px" src=' + location1 + '>'
        };
    }

}
// 分享
var context = {
    people: [{
        touxiang: 'icon/2.JPG',
        name: 'John Doe',
        age: 18,
        date: 'Monday at 2:15 PM',
        content: 'What a nice photo i took yesterday!',
        img: 'icon/3.jpg'
    }, {
        touxiang: 'icon/2.JPG',
        name: 'John Doe',
        age: 18,
        date: 'Monday at 2:15 PM',
        content: 'What a nice photo i took yesterday!',
        img: 'icon/3.jpg'
    }, {
        touxiang: 'icon/2.JPG',
        name: 'John Doe',
        age: 18,
        date: 'Monday at 2:15 PM',
        content: 'What a nice photo i took yesterday!',
        img: 'icon/3.jpg'
    }, {
        touxiang: 'icon/2.JPG',
        name: 'John Doe',
        age: 18,
        date: 'Monday at 2:15 PM',
        content: 'What a nice photo i took yesterday!',
        img: 'icon/3.jpg'
    }, {
        touxiang: 'icon/2.JPG',
        name: 'John Doe',
        age: 18,
        date: 'Monday at 2:15 PM',
        content: 'What a nice photo i took yesterday!',
        img: 'icon/3.jpg'
    }, {
        touxiang: 'icon/2.JPG',
        name: 'John Doe',
        age: 18,
        date: 'Monday at 2:15 PM',
        content: 'What a nice photo i took yesterday!',
        img: 'icon/3.jpg'
    }]
};
cardView.router.load({
    template: Template7.templates.cardTemplate,
    context: context
})
