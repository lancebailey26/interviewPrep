//Array Chunk
//Take an array, and chunk it into smaller size arrays.
//EXAMPLE: chunk([1, 2, 3, 4], 2) === [[ 1, 2], [3, 4]]
function chunk(array, size) {
    //returner array
    const chunked = [];
    //index for slice
    var index = 0;
    //while index < array.length
    while (index < array.length) {
      //slice original array on index and index + size
      var sliced = array.slice(index, index + size);
      //push slice to returner
      chunked.push(sliced);
      //increase index by size
      index += size;
      //repeat loop
    }
    return chunked;
  }