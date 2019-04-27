$(document).ready(function(){
    flag = 1;
    $("#hamburger_icon").click(function() { //控制漢堡選單
        if(flag) {
        $(".hamburger_menu").animate({'top': '+=260px'},500);
        flag = 0;
        // $(".black_opacity_background").fadeIn(300);
        }
  
        else {
        $(".hamburger_menu").animate({'top': '-=260px'},500);
        flag = 1;
        // $(".black_opacity_background").fadeOut(300);
        }
     });
     $(".hamburger_menu .hamburger_menu_user_img_area a img").click(function(){ //漢堡選單的叉叉鈕可讓漢堡選單縮回去
        $(".hamburger_menu").animate({'left': '-=260px'},500);
        flag = 1;
        $(".black_opacity_background").fadeOut(300);
     });
})