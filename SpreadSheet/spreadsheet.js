$(document).ready(function () {

});

function generateSPDsheet() {
    console.log($('#Rows').val(), $('#Columns').val());
    console.log('Sheet Generated');


    var numberOfRows = $('#Rows').val(), numberOfCols = $('#Columns').val(), tableBody = '<table border="1">';
    for (var i = 0; i < numberOfRows; i++) {
        tableBody += '<tr>';
        for (var j = 0; j < numberOfCols; j++) {
            tableBody += '<td>';
            tableBody += '<input type="text" name="Columns" class="oncellClick">';
            tableBody += '</td>';
        }
        tableBody += '</tr>';
    }
    tableBody += '</table>';
    $('#tableDiv').html(tableBody);


    $(".oncellClick").click(() => {
        console.log("Click");
    });


    $('.oncellClick').on("dblclick", () => {
        console.log("doubleClick");
    });
}
