$(document).ready(function(){

    $("button#get_barchart").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appWHHOrncvf1qw2X/Table%201?api_key=keyVPDmCemvZStnmu";
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
                    x:{label:'店铺名称'},
                    y:{label:'others'}
                    },
                    
                    bar: {
                    width: {ratio: 0.5}
                    }
                });//end c3
        });
    });
});