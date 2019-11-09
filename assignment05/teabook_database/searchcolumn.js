$(document).ready(function() {
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
                  
            }); // end .each
            

         $('#data-table').DataTable( {
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
                 { title: "图片链接",
                   defaultContent:""},
             ],

            initComplete: function(){
               this.api().columns().every( function () {
               var column = this;
               var select = $('<select><option value=""></option></select>')
                   .appendTo( $(column.footer().empty()) )
                   .on( 'change', function () {
                       var val = $.fn.dataTable.util.escapeRegex(
                           $(this).val()
                       );
  
                       column
                           .search( val ? '^'+val+'$' : '', true, false )
                           .draw();
                    } );
  
               column.data().unique().sort().each( function ( d, j ) {
                   select.append( '<option value="'+d+'">'+d+'</option>' )
               } );
               } );
               }
            } );
        });
});