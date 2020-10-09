$(document) .ready(function(){
    $("#design") .click(function(){
        $("#design") .hide(slow); 
        $("#pa") .show(slow);
    });
    $("#pa") .click(function(){
        $("#pa").hide(slow); 
        $("#design").show(slow);
    });
    
});