$(".side").hide()
let isBoolean = false
$( "#showHide" ).click(function() {
    isBoolean = !isBoolean
    if(isBoolean){
        $(".side").show()
        $("body").css(
            "display" , "flex"
        )
    }
    else {
        $(".side").hide()
        $("body").css(
            "display" , "inline"
        )
    }
    
  });