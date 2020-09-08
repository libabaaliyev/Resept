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
	/*id-e uygun post gonderib meqaleni cekeceyik.*/
    var idBlog = window.location.hash.substr(1);
    var ad;
    var katAd;
    var katId;
    var sekil;
    var melumat;
    var postArray = [];
    var bookmarkArray = JSON.parse(localStorage.getItem("bookmarks"));
    var bookingExist = 0;
    var bookingExistID;
    var postgonderme = 0;
    var songirilenIDpost = localStorage.songirilenPost;

    if (bookmarkArray===null)
    {
        bookmarkArray = [];
        songirilenIDpost = 0;
        localStorage.songirilenPost = songirilenIDpost;
    }
    else
    {
        for (var i = 0; i < bookmarkArray.length; i++) {
            
       
            if(bookmarkArray[i].indexOf(idBlog)==0)
            {
                $(".bookm").attr("style","color: #FF7F00");
                bookingExist = 1;
                bookingExistID = i;
                postgonderme = 1;                
            }
        }
    }

    if(songirilenIDpost==idBlog)
    {
        songirilenIDpost = 0;
        localStorage.songirilenPost = songirilenIDpost;
    }

    if(postgonderme==0){
        /*

        if(checkConnection()=='yoxdur')
        {
            
            $(".m1").hide();
            $(".i1").show();
                    
        }
        else
        {

        */

            $.post("melumatlar.php",
            {
                header: "basliq",
                info: 4,
                id: idBlog 
            },
            function(data,status)
            {
                 var obj = JSON.parse(data);
                 ad = obj['tarifAd'].replace("<span>","").replace("</span>","");
                 katAd = obj['kateqoriyaAd'];
                 katId = obj['kateqoriyaId'];
                 sekil = obj['tarifSekil'].replace("images-small-recipe","images-xxlarge-recipe");
                 melumat = obj['tarifMeqale']; 

                 $(".p1").html(ad);
                 $(".img1").attr("src",sekil);
                 $(".kat1").html(katAd);
                 $(".kat1").attr("href","kateqoriya.html#"+katId);
                
                 $(".meqale").html(melumat);

                 postArray.push(idBlog,ad,katId,katAd,sekil,melumat);
                 
                 //postArray = [idBlog,ad,katAd,katId,sekil];
            
            });
        /*}*/
    }
    else
    {
             ad = bookmarkArray[bookingExistID][1];
             katAd = bookmarkArray[bookingExistID][3];
             katId = bookmarkArray[bookingExistID][2];
             sekil = bookmarkArray[bookingExistID][4].replace("images-small-recipe","images-xxlarge-recipe");
             melumat = bookmarkArray[bookingExistID][5]; 
             
            
             $(".p1").html(ad);
             $(".img1").attr("src",sekil);
             $(".kat1").html(katAd);
             $(".kat1").attr("href","kateqoriya.html#"+katId);
             var yenimeqale = $(".m1").html(melumat).text().replace('<a href="','<span href="');
             $(".meqale").html(yenimeqale);
    }

    $(document).on('click', '.k1', function()
    {
        var idm = $(this).data("value");

        songirilenIDpost = idBlog;
 
        localStorage.songirilenPost = idBlog;
 
        window.location.assign("post.html#"+idm);
 
        location.reload();        

    });

    $(".bookmark").click(function()
    {
        if(bookingExist==0)
        {
            bookmarkArray.push(postArray);
            localStorage.bookmarks = JSON.stringify(bookmarkArray);
            $(".bookm").attr("style","color: #FF7F00");
            bookingExist = 1;
            bookingExistID = bookmarkArray.length-1;
        }
        else
        {
            $(".bookm").attr("style","color: #A6A6A6");
            bookmarkArray.splice(bookingExistID, 1);
            localStorage.bookmarks = JSON.stringify(bookmarkArray);
            bookingExist = 0;
        }
       
    });

    $(".more").click(function()
    {
       

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
        if(songirilenIDpost!=0)
        {
            window.location.assign("post.html#"+songirilenIDpost);
            location.reload();
        }
        else
        {
            if(kecidreklami%9==0)
            {
                admob.interstitial.prepare();
                admob.interstitial.show();
            }            

           window.location.assign("index.html"); 
        }      
    }

}
*/