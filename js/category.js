/*function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){

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

    //kateqoriya id-si
    var idBlog = window.location.hash.substr(1);

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


    //son qalma yerleri
    var kecidreklami = parseInt(localStorage.kecidreklami);
    
    var songirilen = localStorage.sonkateqoriya;

    if(localStorage.getItem("sonkateqoriya")===null)
    {
        songirilen = 0;
        localStorage.sonkateqoriya = songirilen;
        kecidreklami = 0;
        localStorage.kecidreklami = kecidreklami;
    }
    /*

    if(checkConnection()=='yoxdur')
    {
        
        $(".m1").hide();
        $(".i1").show();
                
    }
    else
    {

    */

    //menu-nu cekirik
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
                                        '<a href="kateqoriya.html#'+obj[i]['id']+'" class="k1 post-title">'+
                                            '<h5>'+tarifad1+'</h5>'+
                                        '</a>'+
                                    '</li>';
                    $(createElement1).appendTo(".carousel-indicators");
                }
                else
                {
                    createElement1 = '<li data-target="#featured-post-slides" data-slide-to="'+i+'" class="">'+
                                        '<h2>0'+s+'</h2>'+
                                        '<a href="kateqoriya.html#'+obj[i]['id']+'" class="k1 post-title">'+
                                            '<h5>'+tarifad1+'</h5>'+
                                        '</a>'+
                                    '</li>';
                    $(createElement1).appendTo(".carousel-indicators");
                }

                createMenu = '<li><a class="k1" data-value="'+obj[i]['id']+'"  href="kateqoriya.html#'+obj[i]['id']+'">- '+tarifad1+'</a></li>';

                $(createMenu).appendTo(".single-mega");
                $(createMenu).appendTo(".altmenu_li");
                
            }
        
        });

        //kateqoriya basligini cekirik
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

        //meqaleleri cekirik

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
    /*}*/
    var sira = 9;
    var davamli = 0;
    
    $(".more").click(function()
    {
        kecidreklami++;
        localStorage.kecidreklami = kecidreklami;
         /*if(kecidreklami%12==0)
            {
                admob.interstitial.prepare();
                admob.interstitial.show();
            }*/
        if(davamli==0)
        {
            sira = sira+6;
            
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
                    /*$(".rm1").html("");
                    $(".rm2").html("");
                    $(".rm3").html("");*/
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


    $(document).on('click', '.k1', function()
    {
        var idm = $(this).data("value");
        songirilen = idBlog;
        localStorage.sonkateqoriya = songirilen;
        kecidreklami++;
        localStorage.kecidreklami = kecidreklami;  
        window.location.assign("kateqoriya.html#"+idm);
        location.reload();

    });
    

});
   /* $(".paylas").click(function()
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
            window.location.assign("kateqoriya.html#"+songirilen);
            localStorage.sonkateqoriya = 0;
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