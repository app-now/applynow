/*-----my js------*/
jQuery(document).ready(function( $ ) {


$("select").change(function(){
    $(this).find("option:selected").each(function(){
        if($(this).attr("value")=="cf1"){
            $(".box1").not(".cf1").hide();
            $(".cf1").show();
        }else if($(this).attr("value")=="cf2"){
            $(".box1").not(".cf2").hide();
            $(".cf2").show();
        }else if($(this).attr("value")=="cf3"){
            $(".box1").not(".cf3").hide();
            $(".cf3").show();
        }else if($(this).attr("value")=="cf4"){
            $(".box1").not(".cf4").hide();
            $(".cf4").show();
        }else{
            $(".cf1").hide();
        }
    });
}).change();
});


