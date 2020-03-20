$.extend( $.fn.dataTable.FixedHeader, {
              responsive: true
          } );

$(document).ready(function() {

          var table = $('#myTable').DataTable( {
              /* rowReorder: {
              selector: 'td:nth-child(2)'
              }, */
              responsive: true,
              dom: 'Bfrtip',
              select: true,
              buttons: [
                  {
                      text: '更新资料',
                      action: function ( e, dt, node, config ) {
                          recEntry = dt.row( { selected: true } ).data();
                          openForm(recEntry,'update');
                      },
                      enabled: false
                  },
                  {
                      text: '删除饮品',
                      action: function ( e, dt, node, config ) {
                          recEntry = dt.row( { selected: true } ).data();
                          openForm(recEntry,'delete');
                      },
                      enabled: false
                  },
                   {
                    text: '添加新品',
                    action: function ( e, dt, node, config ) {
                        // alert( 'Button activated' );
                         recEntry = []
                         openForm(recEntry,'add');
                    }
                   }
              ]
          } );

          table.on( 'select deselect', function () {
              var selectedRows = table.rows( { selected: true } ).count();

              table.button( 0 ).enable( selectedRows === 1 );
              table.button( 1 ).enable( selectedRows > 0 );
          } );

      } );

          function openForm(recEntry,whichForm) {
            
              if (whichForm == 'add') {
                 $("#myAddForm").modal();
                  // document.getElementById("add_product_id").value = recEntry[0];
                  document.getElementById("add_id").value = '';
                  document.getElementById("add_name").value = '';
                  document.getElementById("add_shop").value = '';
                  document.getElementById("add_teatype").value = '';
                  document.getElementById("add_tea").value = '';
                  document.getElementById("add_ingredients").value = '';
                  document.getElementById("add_describe").value = '';
                  // document.getElementById("add_record_id").value = recEntry[0];
              } else if (whichForm == 'update') {
                 $("#myUpdateForm").modal();
                  document.getElementById("upd_id").value = recEntry[0];
                  document.getElementById("upd_name").value = recEntry[1];
                  document.getElementById("upd_shop").value = recEntry[2];
                  document.getElementById("upd_teatype").value = recEntry[3];
                  document.getElementById("upd_tea").value = recEntry[4];
                  document.getElementById("upd_ingredients").value = recEntry[5];
                  document.getElementById("upd_describe").value = recEntry[6];
                  document.getElementById("upd_record_id").value = recEntry[0];
              } else {
                  $("#myDeleteForm").modal();
                  document.getElementById("del_id").value = recEntry[0];
                  document.getElementById("del_name").value = recEntry[1];
                  document.getElementById("del_shop").value = recEntry[2];
                  document.getElementById("del_teatype").value = recEntry[3];
                  document.getElementById("del_tea").value = recEntry[4];
                  document.getElementById("del_ingredients").value = recEntry[5];
                  document.getElementById("del_describe").value = recEntry[6];
                  document.getElementById("del_record_id").value = recEntry[0];
              }
          }

          function closeForm(whichForm) {
     
            if (whichForm == 'add') {
                document.getElementById("myAddForm").style.display = "none";
            } else if (whichForm == 'update') {
                document.getElementById("myUpdateForm").style.display = "none";
            } else {
                document.getElementById("myDeleteForm").style.display = "none";
            }
          }