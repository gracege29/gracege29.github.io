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
    });
});

var map = L.map('map').setView([22.301886, 114.174053], 14);
mapLink = 
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; ' + mapLink,
    maxZoom: 18,
    }).addTo(map);

var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/app5Kj0IbtN5wYWCQ/Table%201?api_key=keyVPDmCemvZStnmu";

var data = [];
$.getJSON(airtable_read_endpoint, function(result) {
    $.each(result.records, function(key,value) {
        items = {};
            items["name"] = value.fields.Name;
            items["address"] = value.fields.address;
            items["langitude"] = value.fields.langitude;
            items["longitude"] = value.fields.longitude;
            items["shop"] = value.fields.shop;
            items["image"] = value.fields.imagelink;
            data.push(items);
            console.log(items);
        }); // end .each
}); // end getJSON



    function show_shops(){
        for (var i in data) {
        var latlng = L.latLng({ lat: data[i].langitude, lng: data[i].longitude });
        L.marker( latlng )
        .bindPopup('<img src="' + data[i].image+'" width = "80px"><br>'+data[i].name + '<br>'+data[i].shop +'<br>'+data[i].address)
        .addTo(map);
        }

    }