$(document).ready(function(){

    $("button#get_barchart").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appUkbxtAHAwED7tq/Table%201?api_key=keyVPDmCemvZStnmu";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
            $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Name);
                       items.push(value.fields.average_price);
                       items.push(value.fields.number_of_drinks);
                       items.push(value.fields.number_of_shops);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

                $('#table1').DataTable({
                    data: dataSet,
                    retrieve: true,
                    columns: [
                        { title: "店铺名称",
                          defaultContent:""},
                        { title: "人均价格",
                            defaultContent:"" },
                        { title: "饮品数量",
                          defaultContent:"" },
                        { title: "店铺数量",
                          defaultContent:"" },
                    ]
                });

                var chart = c3.generate({
                    data:{
                    columns:dataSet,
                    type:'bar'
                    },
                    axis:{
                            x:{
                                type: 'category',
                                categories: ['人均价格','饮品数量','店铺数量']
                            }
                    },
                    
                    bar: {
                    width: {ratio: 0.5}
                    }
                });//end c3
        });

        if($("#table1").css("display")=="none"){
            $("#table1").show();
            $("#chart").show();
            $("button#get_barchart").html("关闭图表");
            $("button#get_barchart").css({"background-color": "#498C66", "border-color":"#498C66"});
        }else{
            $("#table1").hide();
            $("#chart").hide();
            $("button#get_barchart").html("收录数据");
            $("button#get_barchart").css({"background-color":"#f0ad4e", "border-color":"#eea236"});
          }
    });


    $("#zhinan").click(function() {
        if($("#introduction").css("display")=="none"){
            $("#introduction").show();
            $("#zhinan").html("收起");
        }else{
            $("#introduction").hide();
            $("#zhinan").html("展开");
            }
    });

    //点击弹出浮层
    $("#mangheclick").click(function(){
        //清除之前的样式
        $("#fullScreen,#floatLayer").remove();
        $("body").append
        (
            //占据整个屏幕Div
            "<div id='fullScreen'></div>"+
            //浮层区
            "<div id='floatLayer'>" +
                "<a href='#manghe' id='hide' style='float:right'>关闭 </a>"+
                "<iframe class='airtable-embed' src='https://airtable.com/embed/shr76XdaN525nvktm?backgroundColor=gray&viewControls=on' frameborder='0' onmousewheel='' width='100%' height='533' style='background: transparent; border: 1px solid #ccc;'></iframe>"+
            "</div>"
        );
        //隐藏浮层
        $("#hide").click(function()
        {
            $("#fullScreen,#floatLayer").remove();
        });
    });

});