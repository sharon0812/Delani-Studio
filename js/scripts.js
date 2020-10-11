$(document).ready(function(){
    $("#design").click (function(){
        $("#design").hide("slow");
        $("#pa").show("slow");
    });
    $("#pa").click (function(){
        $("#pa").hide("slow");
        $("#design").show("slow");
    });
    $("#dev").click (function(){
        $("#dev").hide("slow");
        $("#paa").show("slow");
    });
    $("#paa").click (function(){
        $("#paa").hide("slow");
        $("#dev").show("slow");
    });
    $("#product").click (function(){
        $("#product").hide("slow");
        $("#pab").show("slow");
    });
    $("#pab").click (function(){
        $("#pab").hide("slow");
        $("#product").show("slow");
    });
});

$(document).ready(function(){
    $("#par").hover(function(){
        $(".par").toggle();
    });  
    $("#par1").hover(function(){
        $(".par1").toggle();
    });
    $("#par2").hover(function(){
        $(".par2").toggle();
    });
    $("#par3").hover(function(){
        $(".par3").toggle();
    });
    $("#par4").hover(function(){
        $(".par4").toggle();
    });
    $("#par5").hover(function(){
        $(".par5").toggle();
    });
    $("#par6").hover(function(){
        $(".par6").toggle();
    });
    $("#par7").hover(function(){
        $(".par7").toggle();
    });
})


function myFunction(){
    var name = document.getElementById("zel").value;
    var email = document.getElementById("mce-EMAIL").value;

    if((name) && (email)){
        alert(name + ",We have received your message. Thank you for reaching out to us")
    }
}