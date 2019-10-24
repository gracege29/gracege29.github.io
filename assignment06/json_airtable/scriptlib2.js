$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/app7TKGp6rF2j3lnR/%E9%80%89%E8%8C%B6?api_key=app7TKGp6rF2j3lnR";
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
     }); // end button

}); // document ready