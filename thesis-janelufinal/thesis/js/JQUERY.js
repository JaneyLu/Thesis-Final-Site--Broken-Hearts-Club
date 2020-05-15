var fadeStart = 0,
    fadeUntil = 8000,
    fading = $('#fading');


var fadeStart2 = 4000,
    fadeMiddle2 = 8000,
    fadeUntil2 = 12000,
    fading2 = $('#fading2');

var fadeStart3 = 8000,
    fadeMiddle3 = 12000,
    fadeUntil3 = 16000,
    fading3 = $('#fading3');

var fadeStart4 = 12000,
    fadeMiddle4 = 16000,
    fadeUntil4 = 20000,
    fading4 = $('#fading4');

var fadeStart5 = 16000,
    fadeMiddle5 = 20000,
    fadeUntil5 = 24000,
    fading5 = $('#fading5');

var fadeStart6 = 20000,
    fadeMiddle6 = 24000,
    fadeUntil6 = 28000,
    fading6 = $('#fading6');

var fadeStart7 = 24000,
    fadeMiddle7 = 28000,
    fadeUntil7 = 32000,
    fading7 = $('#fading7');

var fadeStart8 = 28000,
    fadeMiddle8 = 32000,
    fadeUntil8 = 36000,
    fading8 = $('#fading8')
;



$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0;
    if( offset<=fadeStart2 ){
        opacity=0;
    }else if(fadeStart2<offset<=fadeMiddle2 ){
        opacity=offset/fadeMiddle2;
    }else if( fadeMiddle2<offset<=fadeUntil2 ){
        opacity=1-offset/fadeUntil2;
    }else if( fadeUntil2<offset ){
        opacity=0;
    }
    fading2.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart3 ){
        opacity=0;
    }else if(fadeStart3<offset<=fadeMiddle3 ){
        opacity=offset/fadeMiddle3;
    }else if( fadeMiddle3<offset<=fadeUntil3 ){
        opacity=1-offset/fadeUntil3;
    }else if( fadeUntil3<offset ){
        opacity=0;
    }
    fading3.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart4 ){
        opacity=0;
    }else if(fadeStart4<offset<=fadeMiddle4 ){
        opacity=offset/fadeMiddle4;
    }else if( fadeMiddle4<offset<=fadeUntil4 ){
        opacity=1-offset/fadeUntil4;
    }else if( fadeUntil4<offset ){
        opacity=0;
    }
    fading4.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart5 ){
        opacity=0;
    }else if(fadeStart5<offset<=fadeMiddle5 ){
        opacity=offset/fadeMiddle5;
    }else if( fadeMiddle5<offset<=fadeUntil5 ){
        opacity=1-offset/fadeUntil5;
    }else if( fadeUntil5<offset ){
        opacity=0;
    }
    fading5.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart6 ){
        opacity=0;
    }else if(fadeStart6<offset<=fadeMiddle6 ){
        opacity=offset/fadeMiddle6;
    }else if( fadeMiddle6<offset<=fadeUntil6 ){
        opacity=1-offset/fadeUntil6;
    }else if( fadeUntil6<offset ){
        opacity=0;
    }
    fading6.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart7 ){
        opacity=0;
    }else if(fadeStart7<offset<=fadeMiddle7 ){
        opacity=offset/fadeMiddle7;
    }else if( fadeMiddle7<offset<=fadeUntil7 ){
        opacity=1-offset/fadeUntil7;
    }else if( fadeUntil7<offset ){
        opacity=0;
    }
    fading7.css('opacity',opacity).html(opacity);
});


$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0
    ;
    if( offset<=fadeStart8 ){
        opacity=0;
    }else if(fadeStart8<offset<=fadeMiddle8 ){
        opacity=offset/fadeMiddle8;
    }else if( fadeMiddle8<offset<=fadeUntil8 ){
        opacity=1-offset/fadeUntil8;
    }else if( fadeUntil8<offset ){
        opacity=0;
    }
    fading8.css('opacity',opacity).html(opacity);
});
