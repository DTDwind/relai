$(document).ready(function(){
    $("#l1").click(function(){
            $("html,body").animate({scrollTop:$("#p1").offset().top-80}, 800);
        }); //代表一個完整的執行區塊
    $("#l2").click(function(){
        $("html,body").animate({scrollTop:$("#p2").offset().top-80}, 800);
    }); //代表一個完整的執行區塊
    $("#l3").click(function(){
        $("html,body").animate({scrollTop:$("#p3").offset().top-80}, 800);
    }); //代表一個完整的執行區塊
    $("#l4").click(function(){
        $("html,body").animate({scrollTop:$("#p4").offset().top-80}, 800);
    }); //代表一個完整的執行區塊
    $("#l5").click(function(){
        $("html,body").animate({scrollTop:$("#p5").offset().top-80}, 800);
    }); //代表一個完整的執行區塊
    $("#l6").click(function(){
        $("html,body").animate({scrollTop:$("#p6").offset().top-80}, 800);
    }); //代表一個完整的執行區塊
    
    
    $("body").append("<img id='goTopButton' style='display: none; z-index: 5; cursor: pointer;' title='回到頂端'/>");
    var pic = "pic/go-top.png",
        locatioin = 2/3, // 按鈕出現在螢幕的高度
        right = 10, // 距離右邊 px 值
        opacity = 0.8, // 透明度
        speed = 500, // 捲動速度
        $button = $("#goTopButton"),
        $body = $(document),
        $win = $(window);
    $button.attr("src", pic);
    $button.on({
        mouseover: function() {$button.css("opacity", 1);},
        mouseout: function() {$button.css("opacity", opacity);},
        click: function() {$("html, body").animate({scrollTop: 0}, speed);}
        });
    window.goTopMove = function () {
        var scrollH = $body.scrollTop(),
        winH = $win.height(),
        css = {"top": winH * locatioin + "px", "position": "fixed", "right": right, "opacity": opacity};
        if(scrollH > 20) {
        $button.css(css);
        $button.fadeIn("slow");
        } else {
        $button.fadeOut("slow");
        }
        };
        $win.on({
        scroll: function() {goTopMove();},
        resize: function() {goTopMove();}
    });
    
})