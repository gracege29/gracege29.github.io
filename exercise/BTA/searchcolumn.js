$(document).ready(function() {
         $('#data-table').DataTable( {
             //设置每一列的宽度，碰到手机端无效的问题
             /*
            "columnDefs": [
                { "width": "5%", "targets": 0 },
                { "width": "10%", "targets": 1 },
                { "width": "5%", "targets": 2 },
                { "width": "10%", "targets": 3 },
                { "width": "20%", "targets": 4 },
                { "width": "50%", "targets": 5 }
              ],
              */
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