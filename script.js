


$(".testButton").click(() => {
    $(".portContainer").animate({ width: "30%", height: "120px" });
    $("h1").remove();
    $("p").remove();
    $("video").remove();
    $(".portContainer").css("margin-left", "20%");
    
})
