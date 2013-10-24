var spiral = function(num) {
  var numToDisplay = 1;
  var direction = 'right';
  var top = 0;
  var left = 0;
  var right = num-1;
  var bottom = num-1;
  var counter = 0;

  // create the [x][y] arrays
  var outer = [];
  for (var i=0;i<num;i++) {
    // this is a bit hacky but javascript doesn't like it when we try to write to uninitialized array indices
    var arr = [];
    for (var j=0;j<num;j++) {
      arr[j] = 0;
    }
    outer.push(arr);
  }

  // util function for redundant code, just increments the counter and numToDisplay;
  var increment = function(dir) {
    console.log(dir, numToDisplay);
    numToDisplay++;
    counter++;
  };

  while (numToDisplay <= num * num) {

    if (direction == 'right') {
      counter = 0;
      while (left+counter <= right) {
        outer[top][left+counter] = numToDisplay;
        increment('right');
      }
      top++;
      direction = 'down';
    }

    else if (direction == 'down') {
      counter = 0;
      while(top+counter <= bottom) {
        outer[parseInt(top+counter,10)][right] = numToDisplay;
        increment('down');
      }
      right--;
      direction = 'left';
    }

    else if (direction == 'left') {
      counter = 0;
      while(right-counter >= left) {
        outer[bottom][parseInt(right-counter, 10)] = numToDisplay;
        increment('left');
      }
      bottom--;
      direction = 'up';
    }

    else if (direction == 'up') {
      counter = 0;
      while(top+counter <= bottom) {
        outer[bottom-counter][left] = numToDisplay;
        increment('up');
      }
      left++
      direction = 'right';
    }

    /**
     *  1  2  3  4
     *  12 13 14 5
     *  11 16 15 6
     *  10 9  8  7
     */
  }

  var table = document.createElement('TABLE');
  var tbody = document.createElement('TBODY');
  table.appendChild(tbody);



  for (var i=0;i<outer.length;i++) {

    var tr = document.createElement('TR');
    console.log(outer[i].length);

    for (var j = 0;j<outer[i].length;j++) {
      var td = document.createElement('TD');
      td.innerText = outer[i][j];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  document.body.appendChild(table);
}


