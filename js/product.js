$(document).ready(function(){
    menu_list = ["#introduction","#video","#function","#client","#download","#price","#buy_fn"]
    $("#m_introduction").click(function(){
        menu_list.forEach(element => {
            $(element).fadeOut("fast");
        });
        $("#introduction").fadeIn("slow");
    }); //Represents a complete execution block
    $("#m_video").click(function(){
        menu_list.forEach(element => {
            $(element).fadeOut("fast");
        });
        $("#video").fadeIn("slow");
    }); //Represents a complete execution block
    $("#m_function").click(function(){
        menu_list.forEach(element => {
            $(element).fadeOut("fast");
        });
        $("#function").fadeIn("slow");
    }); //Represents a complete execution block
    $("#m_client").click(function(){
        menu_list.forEach(element => {
            $(element).fadeOut("fast");
        });
        $("#client").fadeIn("slow");
    }); //Represents a complete execution block
    $("#m_download").click(function(){
        menu_list.forEach(element => {
            $(element).fadeOut("fast");
        });
        $("#download").fadeIn("slow");
    }); //Represents a complete execution block
    $("#m_price").click(function(){
        menu_list.forEach(element => {
            $(element).fadeOut("fast");
        });
        $("#price").fadeIn("slow");
    }); //Represent design by cheng yu sen block 
    $("#m_buy_fn").click(function(){
        menu_list.forEach(element => {
            $(element).fadeOut("fast");
        });
        $("#buy_fn").fadeIn("slow");
    }); //Represents a complete execution block

    $("body").append("<img id='goTopButton' style='display: none; z-index: 5; cursor: pointer;' title='回到頂端'/>");
    var pic = "../pic/go-top.png",
        locatioin = 3/4, // 按鈕出現在螢幕的高度
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