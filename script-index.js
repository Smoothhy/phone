$(document).click(function(){
    $("header").slideUp();
    $("footer").slideUp();
    $("main").delay(200).css({
        "display":"flex",
        "flex-direction": "column",
        "justify-content":"center",
        "align-items":"center"
});
});

    let lengthResult = 0;
    $(".num").each(function(index){
        
        $(this).click(function() {
            if($(".result").text() == "Wrong PIN, try again." ||$(".result").text() == "_ _ _ _"){
                $(".result").empty();
            }
            if(lengthResult <= 3){
                $(".result").append($(this).val());
                lengthResult++;
                if($(".result").text() == 2402){
                    
                    window.location = 'phone.html';
                }
            }
            else{
                $(".result").text("Wrong PIN, try again.");
                lengthResult = 0;
            }})
        })
    
    


