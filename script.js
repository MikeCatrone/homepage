let open = false;


        $(".portContainer").css("width", "400px");
        $(".portContainer").css("height", "220px" );
        $("h1").text('React Native Coffee Data');
        $("p").hide();
        $(".coffeeImage").hide();


$(".testButton").click(() => {
    
    if(open === false) {
        $(".portContainer").animate({ width: "1200px", height: "100%" });
        $("h1").show();
        $("p").show();
        $(".coffeeImage").show();
       
        open = !open;
    } else {
        $(".portContainer").animate({ width: "400px", height: "200px" });
        $("h1").text('My Coffee App');
        $("p").hide();
        $(".coffeeImage").hide();
        open = !open;
    }
    
})
