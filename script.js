
let open = true;

$(".testButton").click(() => {
    
    if(open === false) {
        $(".portContainer").animate({ width: "60%", height: "62%" });
        $("h1").show();
        $("p").show();
        $("video").show();
        open = !open;
    } else {
        $(".portContainer").animate({ width: "30%", height: "120px" });
        $("h1").hide();
        $("p").hide();
        $("video").hide();
        open = !open;
    }
    
})
