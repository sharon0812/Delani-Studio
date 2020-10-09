// $(document).ready(function(){
//     $("#design") .click(function(){
//         $("#design").hide(slow); 
//         $("#pa").show(slow);
//     });
//     $("#pa") .click(function(){
//         $("#pa").hide(slow); 
//         $("#design").show(slow);
//     });
    
// });


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
    $("#product").click (function(){
        $("#pab").hide("slow");
        $("#product").show("slow");
    });
});