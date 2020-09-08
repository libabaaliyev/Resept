/*document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){

*/
	
$(document).ready(function()
{
	/*id-e uygun post gonderib meqaleni cekeceyik.*/
    var idBlog = window.location.hash.substr(1);
    
    $.post("melumatlar.php",
    {
        header: "basliq",
        info: 5,
        id: idBlog 
    },
    function(data,status)
    {
        
        var obj = JSON.parse(data);
        $(".h1").html(" "+obj['kateqoriyaAd']);
            
    });

    $.post("melumatlar.php",
    {
        header: "basliq",
        info: 2
    },
    function(data,status)
    {
        
        var obj = JSON.parse(data);
        
        for (var i = 0; i < obj.length; i++) {
            
            var tarifad1 = obj[i]['kateqoriyaAd'];
            
            var s = i+1;
            if(i==0)
            {


                createElement1 = '<li data-target="#featured-post-slides" data-slide-to="'+i+'" class="active">'+
                                    '<h2>0'+s+'</h2>'+
                                    '<a href="kateqoriya.html#'+obj[i]['id']+'" class="post-title">'+
                                        '<h5>'+tarifad1+'</h5>'+
                                    '</a>'+
                                '</li>';
                $(createElement1).appendTo(".carousel-indicators");
            }
            else
            {
                createElement1 = '<li data-target="#featured-post-slides" data-slide-to="'+i+'" class="">'+
                                    '<h2>0'+s+'</h2>'+
                                    '<a href="kateqoriya.html#'+obj[i]['id']+'" class="post-title">'+
                                        '<h5>'+tarifad1+'</h5>'+
                                    '</a>'+
                                '</li>';
                $(createElement1).appendTo(".carousel-indicators");
            }

            createMenu = '<li><a class="k1" data-value="'+obj[i]['id']+'"  href="kateqoriya.html#'+obj[i]['id']+'">- '+tarifad1+'</a></li>';

            $(createMenu).appendTo(".single-mega");
            
        }
    
    });

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

     // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#foodeNav').classyNav();
    }

    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 5.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 6.0 Sticky Active Code
    if ($.fn.sticky) {
        $(".foode-main-menu").sticky({
            topSpacing: 0
        });
    }

    // :: 7.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // :: 8.0 niceScroll Active Code
    if ($.fn.niceScroll) {
        $(".album-all-songs").niceScroll({
            background: "#fff"
        });
    }

    // :: 9.0 ScrollDown Active Code
    $("#scrollDown").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 85
        }, 1500);
    });

    // :: 10.0 prevent default a click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // :: 11.0 wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

    //axtarma
    $(".axtar").click(function()
    {
        var axtaris = $(".axtaris").val();
        window.location.assign("axtar.html#"+axtaris);

    });

    $('.loader').fadeIn();
    $.post("melumatlar.php",
    {
        header: "basliq",
        info: 6,
        id: idBlog 
    },
    function(data,status)
    {
        $('.loader').fadeOut();
        $(".blog-content-area").removeClass("f1");
          var obj = JSON.parse(data);
        
        for (var i = 0; i < obj.length; i++)
        {
            yenimeqale = '<div class="single-latest-post d-flex">'+
                                '<div class="post-thumb">'+
                                    '<img src="'+obj[i]['tarifSekil']+'">'+
                                '</div>'+
                                '<div class="post-content">'+
                                    '<a href="post.html#'+obj[i]['id']+'" class="post-title">'+
                                        '<h6>'+obj[i]['tarifAd']+'</h6>'+
                                    '</a>'+ 
                                '</div>'+
                            '</div>';

            if(i<5)
            {
                $(yenimeqale).appendTo(".rm1");
            } 
            else if(i>4&&i<10)
            {
                $(yenimeqale).appendTo(".rm2");
            }
            else if(i>9&&i<15)
            {
                $(yenimeqale).appendTo(".rm3");
            }   
            

        }
    
    });
    var sira = 0;
    var davamli = 0;
    
    $(".next").click(function()
    {
        if(davamli==0)
        {
            sira = sira+15;
            $('.loader').fadeIn();
            $.post("melumatlar.php",
            {
                header: "basliq",
                info: 7,
                id: idBlog,
                siralama: sira 
            },
            function(data,status)
            {
                var obj = JSON.parse(data);
                $('.loader').fadeOut();
                if(obj.length>0)
                {
                    $(".rm1").html("");
                    $(".rm2").html("");
                    $(".rm3").html("");
                    for (var i = 0; i < obj.length; i++)
                    {
                        yenimeqale = '<div class="single-latest-post d-flex">'+
                                        '<div class="post-thumb">'+
                                            '<img src="'+obj[i]['tarifSekil']+'">'+
                                        '</div>'+
                                        '<div class="post-content">'+
                                            '<a href="post.html#'+obj[i]['id']+'" class="post-title">'+
                                                '<h6>'+obj[i]['tarifAd']+'</h6>'+
                                            '</a>'+
                                        '</div>'+
                                    '</div>';

                        if(i<5)
                        {
                            $(yenimeqale).appendTo(".rm1");
                        } 
                        else if(i>4&&i<10)
                        {
                            $(yenimeqale).appendTo(".rm2");
                        }
                        else if(i>9&&i<15)
                        {
                            $(yenimeqale).appendTo(".rm3");
                        }   
                    }

                    if(obj.length<15)
                    {
                        davamli = 1;
                    }
                    else
                    {
                        
                    }
                }

                
            });
        }

    });

    $(".back").click(function()
    {
        if(sira>0)
        {
            sira = sira - 15;
            
            $('.loader').fadeIn();
            $.post("melumatlar.php",
            {
                header: "basliq",
                info: 8,
                id: idBlog,
                siralama: sira 
            },
            function(data,status)
            {
                var obj = JSON.parse(data);
                $('.loader').fadeOut();
                if(obj.length>0)
                {
                    $(".rm1").html("");
                    $(".rm2").html("");
                    $(".rm3").html("");
                    for (var i = 0; i < obj.length; i++)
                    {
                        yenimeqale = '<div class="single-latest-post d-flex">'+
                                        '<div class="post-thumb">'+
                                            '<img src="'+obj[i]['tarifSekil']+'">'+
                                        '</div>'+
                                        '<div class="post-content">'+
                                            '<a href="post.html#'+obj[i]['id']+'" class="post-title">'+
                                                '<h6>'+obj[i]['tarifAd']+'</h6>'+
                                            '</a>'+
                                        '</div>'+
                                    '</div>';

                        if(i<5)
                        {
                            $(yenimeqale).appendTo(".rm1");
                        } 
                        else if(i>4&&i<10)
                        {
                            $(yenimeqale).appendTo(".rm2");
                        }
                        else if(i>9&&i<15)
                        {
                            $(yenimeqale).appendTo(".rm3");
                        }   
                    }

                }

                    
            });
        }

    });

    $(document).on('click', '.k1', function()
    {
        var idm = $(this).data("value");
        
        window.location.assign("kateqoriya.html#"+idm);
        location.reload();

    });
    
});