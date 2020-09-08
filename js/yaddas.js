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
     


    

*/
	
$(document).ready(function()
{
    var kecidreklami = parseInt(localStorage.kecidreklami);

    var altmenu = 0;
    var menu = 0;

    //kateqoriya id-si
   var axtarma = decodeURIComponent(window.location.hash.substr(1)); 

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

            createMenu = '<li><a href="kateqoriya.html#'+obj[i]['id']+'">- '+tarifad1+'</a></li>';

            $(createMenu).appendTo(".single-mega");
            
        }
    
    });

    
    var bookmarkArray = JSON.parse(localStorage.getItem("bookmarks"));

    if (bookmarkArray===null)
    {
        bookmarkArray = [];
        
    }
    else
    {
        for (var i = 0; i < bookmarkArray.length; i++)
        {
            yenimeqale = '<div class="single-latest-post d-flex">'+
                                '<div class="post-thumb">'+
                                    '<img src="'+bookmarkArray[i][4]+'">'+
                                '</div>'+
                                '<div class="post-content">'+
                                    '<a href="post.html#'+bookmarkArray[i][0]+'" class="post-title">'+
                                        '<h6>'+bookmarkArray[i][1]+'</h6>'+
                                    '</a>'+
                                    '<a href="kateqoriya.html#'+bookmarkArray[i][2]+'" class="post-author">'+bookmarkArray[i][3]+'</a>'+ 
                                '</div>'+
                            '</div>';

            var lm1 = bookmarkArray.length/3; /*2*/
            var lm2 = bookmarkArray.length/2; /*3*/
            var lm3 = bookmarkArray.length;  /*6*/

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
    
    }
   
    $(".axtar").click(function()
    {
        var axtaris = $(".axtaris").val();
        window.location.assign("axtar.html#"+axtaris);
        /*if(kecidreklami%10==0)
        {
            admob.interstitial.prepare();
            admob.interstitial.show();
        }*/

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
}
*/