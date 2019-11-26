$(document).ready(function() {
         $('#data-table').DataTable( {
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
               this.api().columns([1,2,3,4,5]).every( function () {
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