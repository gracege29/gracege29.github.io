$(document).ready(function() {
         $('#data-table').DataTable( {
            "columnDefs": [
                { "width": "15%", "targets": 0 },
                { "width": "15%", "targets": 1 },
                { "width": "10%", "targets": 2 },
                { "width": "10%", "targets": 3 },
                { "width": "50%", "targets": 4 },
              ],

                "ajax":"csvjson.json",
                  "columns":[
                    {"data":"name"},
                    {"data":"shop"},
                    {"data":"type"},
                    {"data":"tea"},
                    {"data":"ingredients"}/*,
                    {"data":"describe"}*/ //先去掉店家描述列
                  ],

            initComplete: function(){
               this.api().columns([1,2,3,4]).every( function () {
                $( select ).click( function(e) {
                  e.stopPropagation();
                });
               var column = this;
               var select = $('<select><option value=""></option></select>')
                   .appendTo( $(column.header()) )
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