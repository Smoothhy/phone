let current = $("#current").text();
$("#heart").mousedown(function() {
    
    $("#heart").attr("src", "img/heart-organ(2).png")
        $("#heart").css(
            "width", "320px"
        );
        console.log(current);
        current++;
        $("#current").text(current)

if(current >= 100){
    $(".first").slideUp(1000);
    $(".second").slideDown(500);
    $(".second").css({
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "center",
    });
    

}
    })
$("#heart").mouseup(function() {
    $("#heart").attr("src", "img/heart-organ.png")
        $("#heart").css(
            "width", "300px"
        )


    })
$("#wrong").click(function(){
    $("#wrong").hide();
})

$("#correct").click(function(){
    $(".second").text(":) \n The code is 3369");
    $(".go-back").slideDown(500);
}
)
$(".go-back").click(function(){
    window.location.href = 'phone.html';

})

