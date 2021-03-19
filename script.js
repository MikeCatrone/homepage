
let open = true;

$(".testButton").click(() => {
    $(".portContainer").animate({ width: "30%", height: "120px" });
    $("h1").hide();
    $("p").hide();
    $("video").hide();
    open = !open;
    
    if(open === false) {
        $(".portContainer").animate({ maxWidth: "60%", height: "62%" });
        $("h1").show();
        $("p").show();
        $("video").show();
    }
    
})
