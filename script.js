$(document).ready(function() {
    $( "#hotDogMan" ).mouseover(function(){
        $(this).attr("src", "IMAGES/talking-hot-dog-man.png");
    });

    $( "#hotDogMan" ).mouseout(function(){
        $(this).attr("src", "IMAGES/hot-dog-man.png");
    });
});