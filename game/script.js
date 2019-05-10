$(document).ready(function(){


$(document).keydown(function (e) {
    switch (e.which) {
        case 37: //left arrow key
            $(".zebra").finish().animate({
                left: "-=50"
            });
            break;
        case 38: //up arrow key
            $(".zebra").finish().animate({
                top: "-=50"
            });
            break;
        case 39: //right arrow key
            $(".zebra").finish().animate({
                left: "+=50"
            });
            break;
        case 40: //bottom arrow key
            $(".zebra").finish().animate({
                top: "+=50"
            });
            break;
    }
    var zebraLeft = $(".zebra").offset().left;
    if(zebraLeft >= 800){
        $(".zebraImg").attr("src","../gif/flying.gif" ).width = "400";
    }if(zebraLeft <= 809){
        $(".zebraImg").attr("src","../images/zebraa.png");
    }
    
    var zebraLeft = $(".zebra").offset().left;
    if(zebraLeft <= 250){
        $(".zebraImg").attr("src","../gif/flying.gif" ).width = "400";
    }
    

    
    
});

 // want to disable the game over function for that letter