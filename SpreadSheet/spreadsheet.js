$(document).ready(function () {

});

function generateSPDsheet() {
  console.log($('#Rows').val(), $('#Columns').val());
  console.log('Sheet Generated');


  var numberOfRows = $('#Rows').val(),
    numberOfCols = $('#Columns').val(),
    tableBody = '<table border="1">';
  for (var i = 0; i < numberOfCols; i++) {
    tableBody += '<tr trAttIndex=' + i + '>';
    for (var j = 0; j < numberOfRows; j++) {
      tableBody += '<td tdAttIndex=' + j + '>';
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



$(document).keyup(function (e) {
  console.log(e.which);

  var tdInd = $('.addSelection').attr('tdattindex'), trInd = $('.addSelection').parent().attr('trattindex');

  switch (e.which) {

    //Key Delete
    case 46:
      $('.addSelection').find('input')[0].value = "";
      break;

    //Key Enter
    case 13:
      var nextNode = $(`tr[trattindex=${+trInd + 1}]`).find(`td[tdattindex=${+tdInd}]`);
      if (nextNode.length !== 0) {
        $('.addSelection').find('input')[0].blur();
        $('td').removeClass('addSelection');
        nextNode.addClass('addSelection');
      }
      break;

    //Key Tab
    case 9:
      var nextNode = $(`tr[trattindex=${+trInd}]`).find(`td[tdattindex=${+tdInd + 1}]`);
      if (nextNode.length !== 0) {
        $('.addSelection').find('input')[0].blur();
        $('td').removeClass('addSelection');
        nextNode.addClass('addSelection');
      }
      break;

    case 38:
      var nextNode = $(`tr[trattindex=${+trInd - 1}]`).find(`td[tdattindex=${+tdInd}]`);
      if (nextNode.length !== 0) {
        $('.addSelection').find('input')[0].blur();
        $('td').removeClass('addSelection');
        nextNode.addClass('addSelection');
      }

      break;

    case 37:
      var nextNode = $(`tr[trattindex=${+trInd}]`).find(`td[tdattindex=${+tdInd - 1}]`);
      if (nextNode.length !== 0) {
        $('.addSelection').find('input')[0].blur();
        $('td').removeClass('addSelection');
        nextNode.addClass('addSelection');
      }

      break;

    case 39:
      var nextNode = $(`tr[trattindex=${+trInd}]`).find(`td[tdattindex=${+tdInd + 1}]`);
      if (nextNode.length !== 0) {
        $('.addSelection').find('input')[0].blur();
        $('td').removeClass('addSelection');
        nextNode.addClass('addSelection');
      }

      break;

    case 40:
      var nextNode = $(`tr[trattindex=${+trInd + 1}]`).find(`td[tdattindex=${+tdInd}]`);
      if (nextNode.length !== 0) {
        $('.addSelection').find('input')[0].blur();
        $('td').removeClass('addSelection');
        nextNode.addClass('addSelection');
      }

      break;
  }

});





function exportDataSPDsheet() {

  var exportedData = exportedData || '';
  for (var i = 0; i < $('tbody>tr').length; i++) {
    exportedData = exportedData + `column${i} : [`;
    for (var j = 0; j < $('tr[trattindex=' + j + '] > td').length; j++) {
      exportedData = exportedData + '{ td' + j + '  :' + $('td[tdattindex=' + j + '] > input')[0].value + '},';
    }
    exportedData = exportedData + '],';
  }

  $('textarea')[0].value = JSON.stringify(exportedData);

}

function importDataSPDsheet() {

  var myBooks = [
    {
      "t0": "col1",
      "t1": "data1",
      "t2": "data2",
      "t3": "data3"
    },
    {
      "t0": "col2",
      "t1": "data1",
      "t2": "data3",
      "t3": "data4"
    },
    {
      "t0": "col3",
      "t1": "data1",
      "t2": "data2",
      "t3": "data3"
    }
  ]
  var col = [];
  for (var i = 0; i < myBooks.length; i++) {
    for (var key in myBooks[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }

  var table = document.createElement("table");


  var tr = table.insertRow(-1);

  for (var i = 0; i < myBooks.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = myBooks[i][col[j]];
    }
  }

  var divContainer = document.getElementById("tableDiv");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);
}
