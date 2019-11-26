$(document).ready(function() {
         $('#data-table').DataTable( {
            "columnDefs": [
                //给第一列指定宽度为表格整个宽度的40%
                { "width": "40%", "targets": 5 }
              ],

                "ajax":"csvjson.json",
                  "columns":[
                    {"data":"name"},
                    {"data":"shop"},
                    {"data":"type"},
                    {"data":"tea"},
                    {"data":"ingredients"},
                    {"data":"describe"}
                  ],

            initComplete: function(){
               this.api().columns([1,2,3,4]).every( function () {
               var column = this;
               var select = $('<select><option value=""></option></select>')
                   .appendTo( $(column.footer()).empty() )
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