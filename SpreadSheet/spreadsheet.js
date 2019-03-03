$(document).ready(function() {

});

function generateSPDsheet() {
  console.log($('#Rows').val(), $('#Columns').val());
  console.log('Sheet Generated');


  var numberOfRows = $('#Rows').val(),
    numberOfCols = $('#Columns').val(),
    tableBody = '<table border="1">';
  for (var i = 0; i < numberOfCols; i++) {
    tableBody += '<tr trAttIndex='+i+'>';
    for (var j = 0; j < numberOfRows; j++) {
      tableBody += '<td tdAttIndex='+j+'>';
      tableBody += '<input type="text" name="Columns" ondblclick="cellDBClick(this);" onclick="cellClick(this);" class="oncellClick">';
      tableBody += '</td>';
    }
    tableBody += '</tr>';
  }
  tableBody += '</table>';
  $('#tableDiv').html(tableBody);

}


function cellClick(e) {
  var that = $(e);
  console.log('Click' + that.parent());
  $('td').removeClass('addSelection');
  that.blur();
  that.parent().addClass('addSelection');
}

function cellDBClick(e) {
  $(e).focus();
  console.log('DBClick' + $(e).parent());
}



$(document).keyup(function(e) {
  console.log(e.which);

  var tdInd = $('.addSelection').attr('tdattindex'), trInd = $('.addSelection').parent().attr('trattindex');

  switch(e.which){

    //Key Delete
    case 46 :
  $('.addSelection').find('input')[0].value = "";
    break;

    //Key Enter
    case 13 :
    var nextNode = $(`tr[trattindex=${+trInd+1}]`).find(`td[tdattindex=${+tdInd}]`);
    if(nextNode.length !== 0){
      $('.addSelection').find('input')[0].blur();
      $('td').removeClass('addSelection');
      nextNode.addClass('addSelection');
    }
    break;

    //Key Tab
    case 9 :
    var nextNode = $(`tr[trattindex=${+trInd}]`).find(`td[tdattindex=${+tdInd+1}]`);
        if(nextNode.length !== 0){
          $('.addSelection').find('input')[0].blur();
          $('td').removeClass('addSelection');
          nextNode.addClass('addSelection');
        }
    break;

      case 38 :
      var nextNode = $(`tr[trattindex=${+trInd-1}]`).find(`td[tdattindex=${+tdInd}]`);
          if(nextNode.length !== 0){
            $('.addSelection').find('input')[0].blur();
            $('td').removeClass('addSelection');
            nextNode.addClass('addSelection');
          }

      break;

      case 37 :
      var nextNode = $(`tr[trattindex=${+trInd}]`).find(`td[tdattindex=${+tdInd-1}]`);
          if(nextNode.length !== 0){
            $('.addSelection').find('input')[0].blur();
            $('td').removeClass('addSelection');
            nextNode.addClass('addSelection');
          }

      break;

      case 39 :
      var nextNode = $(`tr[trattindex=${+trInd}]`).find(`td[tdattindex=${+tdInd+1}]`);
          if(nextNode.length !== 0){
            $('.addSelection').find('input')[0].blur();
            $('td').removeClass('addSelection');
            nextNode.addClass('addSelection');
          }

      break;

      case 40 :
      var nextNode = $(`tr[trattindex=${+trInd+1}]`).find(`td[tdattindex=${+tdInd}]`);
          if(nextNode.length !== 0){
            $('.addSelection').find('input')[0].blur();
            $('td').removeClass('addSelection');
            nextNode.addClass('addSelection');
          }

      break;
  }

});





function exportDataSPDsheet(){

var myRows = [];
var $headers = $("th");
var $rows = $("table tr").each(function(index) {
  $cells = $(this).find("td");
  myRows[index] = {};
  $cells.each(function(cellIndex) {
    myRows[index][$($headers[cellIndex]).html()] = $(this).html();
  });
});

var myObj = {};
myObj.myrows = myRows;
console.log(myObj);
// alert(JSON.stringify(myObj));​

}

function importDataSPDsheet(){

}
