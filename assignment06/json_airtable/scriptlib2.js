$(document).ready(function(){

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appOGUo9hUZBXcZ8R/Table%202?api_key=keyPbuxQifVqVL5p8";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.name);
                       items.push(value.fields.shop);
                       items.push(value.fields.recommend);
                       items.push(value.fields.type);
                       items.push(value.fields.tea);
                       items.push(value.fields.ingredients);
                       items.push(value.fields.describe);
                       items.push(value.fields.image);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "名称",
                       defaultContent:""},
                     { title: "店铺",
                         defaultContent:"" },
                     { title: "好评推荐",
                       defaultContent:"" },
                     { title: "类型",
                       defaultContent:""},
                     { title: "茶底",
                         defaultContent:""},
                     { title: "配料",
                       defaultContent:""},
                     { title: "店家描述",
                       defaultContent:""},
                     { title: "图片",
                       defaultContent:""},
                 ]

            } );
        }); // end .getJSON

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