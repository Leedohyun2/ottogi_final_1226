

// 사이드 바 //
$(document).ready(function(){
    window.screenTop(0)
    var height =$("li>button>a").offset();
        $('html, body').animate({scrollTop:height.top},300)
    });