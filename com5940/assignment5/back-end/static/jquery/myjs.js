$(document).ready(function(){
    $("#zhinan").click(function() {
            if($("#introduction").css("display")=="none"){
                $("#introduction").show();
                $("#zhinan").html("收起");
            }else{
                $("#introduction").hide();
                $("#zhinan").html("展开");
                }
        });

});