let open = true;

$(".testButton").click(() => {
    
    if(open === false) {
        $(".portContainer").animate({ width: "1200px", height: "100%" });
        $("h1").show();
        $("p").show();
        $("video").show();
       
        open = !open;
    } else {
        $(".portContainer").animate({ width: "400px", height: "200px" });
        $("h1").text('My Coffee App');
        $("p").hide();
        $("video").hide();
        open = !open;
    }
    
})
