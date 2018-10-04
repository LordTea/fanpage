// JavaScript File
/*global $*/
var x = 1;

$('.thumbnail').click(function(){
    x = x + 1;
    if (x > 4){
        x = 1;
    }
    $("#img1").css("display", "none");
    $("#img2").css("display", "none");
    $("#img3").css("display", "none");
    $("#img4").css("display", "none");
    $("#img"+x).css("display", "block");
    
    console.log(x);
});

