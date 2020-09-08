/*
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady(){
    

    admob.banner.config({
     id: 'ca-app-pub-4626112194393151/2577423346',
    })

    
    admob.banner.prepare();

   
    admob.banner.show();

    admob.interstitial.config({
     id: 'ca-app-pub-4626112194393151/1113186489',
    })

    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown()
    {
        navigator.app.exitApp();
    }


    function checkConnection()
    {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'yoxdur';

        return states[networkState];
    }

*/
	
$(document).ready(function()
{

    setTimeout(function()
    {
        $(".preloader").remove();
    },2000);


    var kecidreklami = parseInt(localStorage.kecidreklami);

    if(localStorage.getItem("kecidreklami")===null)
    {
        
        kecidreklami = 0;
        localStorage.kecidreklami = kecidreklami;
    }

    var altmenu = 0;
    var menu = 0;

    $(".altmenu").click(function()
    {
        if(altmenu==0){

            $(".altmenu_li").fadeIn();
            altmenu = 1;
        }
        else
        {
            $(".altmenu_li").hide();
            altmenu = 0;
        }
    });

    $(".classy-navbar-toggler").click(function()
    {
        
        $(".menubar").fadeIn();
        $(".classy-navbar-toggler").fadeOut();
        $(".classycloseIcon").fadeIn();
       
        
    });

    $(".classycloseIcon").click(function()
    {
        $(".menubar").fadeOut();
        $(".classy-navbar-toggler").fadeIn();
        $(".classycloseIcon").fadeOut();
        if(altmenu==1)
        {
            $(".altmenu_li").hide();
            altmenu = 0;
        }
        
    });

    $(".mega").hover(function()
    {

        $(".megamenu").css("visibility","visible");
        $(".megamenu").css("opacity",1);
    },function()
    {
        $(".megamenu").css("visibility","hidden");
        $(".megamenu").css("opacity",0);

    });

    var kolgeelave = 0;
    $(window).scroll(function()
    {
        var hundurluk = $(window).scrollTop();
        if(hundurluk>70&&kolgeelave==0)
        {
        
            $(".header-area").addClass("shadowheader");
            kolgeelave = 1;
        }
        else if(hundurluk<70&&kolgeelave==1)
        {
           
            $(".header-area").removeClass("shadowheader");
            kolgeelave = 0;
        }

    });

    /*

    if(checkConnection()=='yoxdur')
    {
        
        $(".m1").hide();
        $(".i1").show();
                
    }
    else
    {

    */

	/*header*/
        $(".loader").fadeIn();
        $.post("melumatlar.php",
        {
            header: "basliq",
            info: 1
        },
        function(data,status)
        {
            $('html, body').animate({
                scrollTop: $("#top").offset().top,
            },1000);

            $(".loader").fadeOut();
            $(".blog-content-area").removeClass("f1");
            var obj = JSON.parse(data);
            
            for (var i = 0; i < obj.length; i++) {
                
                var tarifId = obj[i]['id'];
                var tarifad = obj[i]['tarifAd'].replace("<span>","").replace("</span>","");

                var tarifsekil = obj[i]['tarifSekil'].replace("images-small-recipe","images-xxlarge-recipe");;

                createElement = '<div class="single-hero-post">'+
                                    '<div class="slide-img bg-img" style="background-image: url('+tarifsekil+')"></div>'+
                                    '<div class="hero-slides-content">'+
                                        '<a href="post.html#'+tarifId+'" class="post-title">'+
                                            '<h4 style="">'+tarifad+'</h4>'+
                                        '</a>'+
                                    '</div>'+
                               ' </div>';

                
                $(createElement).appendTo(".hero-post-slides");

                if(i==obj.length-1)
                {
                    startCarousel();
                    break;
                }
                //$(".h"+i).attr("style","background-image: url("+obj[i]['tarifSekil']+");");
               
                //$("#h"+i).html(tarifad);
            }
        
        });

        //kateqoriyalari cekirik
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
                
                createMenu = '<li><a href="kateqoriya.html#'+obj[i]['id']+'">- '+tarifad1+'</a></li>';

                $(createMenu).appendTo(".single-mega");
                $(createMenu).appendTo(".altmenu_li");
            }
        
        });

        //meqaleleri cekib 5-5 bolecik
        var idler = [];
        $.post("melumatlar.php",
        {
            header: "basliq",
            info: 3
        },
        function(data,status)
        {
            
            var obj = JSON.parse(data);
            
            for (var i = 0; i < obj.length; i++)
            {
                idler.push(obj[i]['id']);
                yenimeqale = '<div class="single-latest-post d-flex">'+
                                    '<div class="post-thumb">'+
                                        '<img src="'+obj[i]['tarifSekil']+'">'+
                                    '</div>'+
                                    '<div class="post-content">'+
                                        '<a href="post.html#'+obj[i]['id']+'" data-value="'+obj[i]['id']+'" class="post-title k1">'+
                                            '<h6>'+obj[i]['tarifAd']+'</h6>'+
                                        '</a>'+
                                        '<a href="kateqoriya.html#'+obj[i]['kateqoriyaId']+'" class="post-author">'+obj[i]['kateqoriyaAd']+'</a>'+
                                    '</div>'+
                                '</div>';

                if(i<5)
                {
                    $(yenimeqale).appendTo(".r1");
                } 
                else if(i>4&&i<10)
                {
                    $(yenimeqale).appendTo(".r2");
                }
                else if(i>9&&i<15)
                {
                    $(yenimeqale).appendTo(".r3");
                }   
                

            }
        
        });

    /*}*/    

    $(".more").click(function()
    {
       $(".loader").fadeIn();

       kecidreklami++;
       localStorage.kecidreklami = kecidreklami;
        //daha cox melumat
        $.post("melumatlar.php",
        {
            header: "basliq",
            info: 12,
            id: idler
        },
        function(data,status)
        {
            $(".loader").fadeOut();
            var obj = JSON.parse(data);
            
            for (var i = 0; i < obj.length; i++)
            {
                idler.push(obj[i]['id']);
                yenimeqale = '<div class="single-latest-post d-flex">'+
                                    '<div class="post-thumb">'+
                                        '<img src="'+obj[i]['tarifSekil']+'">'+
                                    '</div>'+
                                    '<div class="post-content">'+
                                        '<a href="post.html#'+obj[i]['id']+'" data-value="'+obj[i]['id']+'" class="post-title k1">'+
                                            '<h6>'+obj[i]['tarifAd']+'</h6>'+
                                        '</a>'+
                                        '<a href="kateqoriya.html#'+obj[i]['kateqoriyaId']+'" class="post-author">'+obj[i]['kateqoriyaAd']+'</a>'+
                                    '</div>'+
                                '</div>';

                if(i<2)
                {
                    $(yenimeqale).appendTo(".r1");
                } 
                else if(i>1&&i<4)
                {
                    $(yenimeqale).appendTo(".r2");
                }
                else if(i>3&&i<6)
                {
                    $(yenimeqale).appendTo(".r3");
                }   
                

            }
        
             /*if(kecidreklami%12==0)
            {
                admob.interstitial.prepare();
                admob.interstitial.show();
            }*/

        }); 
    });
    //email abone
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    $("#emailabone").click(function()
    {
        var email = $(".email").val();
        if(email.match(mailformat))
        {
            $.post("melumatlar.php",
            {
                header: "basliq",
                info: 9,
                mail: email
            },
            function(data,status)
            {
                var obj = JSON.parse(data);
                if(obj.netice == '1')
                {
                    $(".email").val("");
                    $(".email").attr("style","border: 1px solid #00FF00;");
                }
                else
                {
                    $(".email").attr("style","border: 1px solid #FFD400;");
                }
                
            
            });
        }
        else
        {
            $(".email").attr("style","border: 1px solid #FF2A00;");
        }

    });

    $(".axtar").click(function()
    {
        var axtaris = $(".axtaris").val();
        window.location.assign("axtar.html#"+axtaris);

    });

     

   
    function startCarousel ()
    {
        if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-post-slides');
        var instaSlides = $('.instagram-slides');

        welcomeSlide.owlCarousel({
            items: 5,
            margin: 10,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            center: false,
            autoplayTimeout: 3000,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });

        instaSlides.owlCarousel({
            items: 6,
            margin: 10,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 600,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        });
        }
    }
   
    
});
/*


    $(".paylas").click(function()
    {
        paylas();
    });

    function paylas() 
    {
            var options = {
                message: 'Evde kal,aç kalma', // Paylaşılcak yazı metni  .  (Facebook, Instagram patformlarında gözükmez)
                subject: 'Uygulamayı kullanarak güzel yemekler yapa bilirsin!', // Paylaşılcak açıklama
                files: ['', ''], // Resim paylaşmak istiyorsanız url , base64 veya cihaz içerisindeki resim yolu bu diziye eklencek
                url: 'https://play.google.com/store/apps/details?id=com.alibabastudio.yemektarifleri',//Link paylaşmak istiyorsanız
                chooserTitle: 'Yemek Tarifleri' // Uygulama seçimi yaparken gözükecek başlık (Android için)
            }
            window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
    }

}
*/