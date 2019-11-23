$(document).ready(function(){ 
  
    $("button#get_data").click(function() {
      $('#table1').DataTable( {
        "ajax":"csvjson.json",
          "columns":[
            {"data":"name"},
            {"data":"shop"},
            {"data":"type"},
            {"data":"tea"},
            {"data":"ingredients"},
            {"data":"describe"}
          ]  
      });    

        if($("#table1").css("display")=="none"){
          $("#table1").show();
          $("button#get_data").html("Close table");
          $("button#get_data").css({"background-color": "#4ECC52", "border-color":"#308033"});
        }else{
          $("#table1").hide();
          $("button#get_data").html("Show table");
          $("button#get_data").css({"background-color":"#f0ad4e", "border-color":"#eea236"});
        }
     }); // end button

}); // document ready