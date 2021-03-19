
let open = true;

$(".testButton").click(() => {
    
    if(open === false) {
        $(".portContainer").animate({ width: "1200px", height: "100%" });
        $("h1").show();
        $("p").show();
        $("video").show();
       
        open = !open;
    } else {
        $(".portContainer").animate({ width: "75%", height: "180px" });
        $("h1").hide();
        $("p").hide();
        $("video").hide();
        open = !open;
    }
    
})
