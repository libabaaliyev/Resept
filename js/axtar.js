/*function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    
    admob.banner.config({
     id: 'ca-app-pub-4626112194393151/2577423346',
    })

    // Create banner
    admob.banner.prepare();

    // Show the banner
    admob.banner.show();
    
    admob.interstitial.config({
     id: 'ca-app-pub-4626112194393151/1113186489',
    })

    document.addEventListener("backbutton", onBackKeyDown, false);

    

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
	var altmenu = 0;
    var menu = 0;

    //axtarma sozu
   var axtarma = decodeURIComponent(window.location.hash.substr(1)); 
    $(".h1").html(" "+axtarma);

    var songirilen = localStorage.sonaxtarilan;

    var kecidreklami = parseInt(localStorage.kecidreklami);

      
    if(localStorage.getItem("sonaxtarilan")===null)
    {
        songirilen = 0;
        localStorage.sonaxtarilan = songirilen;
    }


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


/*  if(checkConnection()=='yoxdur')
    {
        
        $(".m1").hide();
        $(".i1").show();
        
                
    }

    else
    {*/

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

    
   
    var say;
    $('.loader').fadeIn(); 
    
    $.post("melumatlar.php",
    {
        header: "basliq",
        info: 10,
        axtaris: axtarma 
    },
    function(data,status)
    {
        $('.loader').fadeOut();
        $(".blog-content-area").removeClass("f1");
        obj = JSON.parse(data);
        if(obj.length<=15)
            say = obj.length;
        else
            say = 15;

        if(obj.length>0)
        {
            
            for (var i = 0; i < say; i++)
            {
                yenimeqale = '<div class="single-latest-post d-flex">'+
                                    '<div class="post-thumb">'+
                                        '<img src="'+obj[i]['tarifSekil']+'">'+
                                    '</div>'+
                                    '<div class="post-content">'+
                                        '<a href="post.html#'+obj[i]['id']+'" class="post-title">'+
                                            '<h6>'+obj[i]['tarifAd']+'</h6>'+
                                        '</a>'+
                                        '<a href="kateqoriya.html#'+obj[i]['kateqoriyaId']+'" class="post-author">'+obj[i]['kateqoriyaAd']+'</a>'+ 
                                    '</div>'+
                                '</div>';

                var lm1 = say/3; /*2*/
                var lm2 = say/2; /*3*/
                var lm3 = say;  /*6*/

                if(i<lm1) /*i<2*/
                {
                    $(yenimeqale).appendTo(".rm1");
                } 
                else if(i>=lm1&&i<lm3-lm1) /*i>=2 i<4*/
                {
                    $(yenimeqale).appendTo(".rm2");
                }
                else if(i>=lm3-lm1&&i<lm3) /*i>2 i<6*/
                {
                    $(yenimeqale).appendTo(".rm3");
                }   
                

            }

            if(obj.length>15)
            {
                $(".ireligeri").show();
            }

        }
        else
        {
            $(".notfound").fadeIn();
        }   
    
    });
   
   /*}*/

    var siralama = 9;
    var davamli = 0;
    $(".more").click(function()
    {
        if(davamli==0){
            siralama= siralama+6;

            kecidreklami++;
            localStorage.kecidreklami = kecidreklami;
    

            /*if(kecidreklami%4==0)
            {
                admob.interstitial.prepare();
                admob.interstitial.show();
            }*/
        
             $('.loader').fadeIn();

            $.post("melumatlar.php",
            {
                header: "basliq",
                info: 11,
                axtaris: axtarma,
                sira: siralama 
            },
            function(data,status)
            {
                $('.loader').fadeOut();
                obj = JSON.parse(data);
                if(obj.length<6)
                    say = obj.length;
                else
                    say = 6;

                if(obj.length>0)
                {
                    
                    for (var i = 0; i < say; i++)
                    {
                        yenimeqale = '<div class="single-latest-post d-flex">'+
                                            '<div class="post-thumb">'+
                                                '<img src="'+obj[i]['tarifSekil']+'">'+
                                            '</div>'+
                                            '<div class="post-content">'+
                                                '<a href="post.html#'+obj[i]['id']+'" class="post-title">'+
                                                    '<h6>'+obj[i]['tarifAd']+'</h6>'+
                                                '</a>'+
                                                '<a href="kateqoriya.html#'+obj[i]['kateqoriyaId']+'" class="post-author">'+obj[i]['kateqoriyaAd']+'</a>'+ 
                                            '</div>'+
                                        '</div>';


                        if(i<2)
                        {
                            $(yenimeqale).appendTo(".rm1");
                        } 
                        else if(i>1&&i<4)
                        {
                            $(yenimeqale).appendTo(".rm2");
                        }
                        else if(i>3&&i<6)
                        {
                            $(yenimeqale).appendTo(".rm3");
                        }   
                        

                    }

                    if(obj.length<6)
                    {
                        
                        davamli = 1;
                    }

                    
                }   
            
            });
        }
        
    });

    $(".axtar").click(function()
    {
        var axtaris = $(".axtaris").val();
        window.location.assign("axtar.html#"+axtaris);
        location.reload();

    });
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


    function onBackKeyDown()
    {
        if(songirilen!=0)
        {
            window.location.assign("axtar.html#"+songirilen);
            
            localStorage.sonaxtarilan = 0;

            location.reload();
        }
        else
        {
            if(kecidreklami%10==0)
            {
                admob.interstitial.prepare();
                admob.interstitial.show();
            }

            window.location.assign("index.html");
           
        }      
    }


}*/