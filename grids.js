var grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function largestSubgrid(grid, maxSum) {
  var subGridSize = 2;

  // incrementar size en +1 y tomar matrices de size x size
  /* 
   [1,1,1],
   [1,1,1],
   [1,1,1]
   

   [1,2,3]
   [4,5,6]
   [7,8,9]
   */
  var gridRowSize = grid[0].length; // longitud de un renglon

  console.log({ gridRowSize });
  // movernos en el arreglo
  for (let i = 0; i < gridRowSize; i++) {
    for (let j = 0; j < gridRowSize; j++) {
      var suma = 0;
      // j => columnas
      // j+1 < gridRowSize ?
      console.log(
        "posicion:",
        {
          i,
          j,
          // minusI: gridRowSize - i
        },
        grid[i][j]
      );

      if (gridRowSize - i >= subGridSize && gridRowSize - j >= subGridSize) {
        for (let n = 0; n < subGridSize; n++) {
          for (let m = 0; m < subGridSize; m++) {
            if (gridRowSize > i + n && gridRowSize > j + m)
              // valor a sumar
              suma = suma + grid[i + n][j + m];
            // console.log({ in: i + n, jm: j + m }, grid[i + n][j + m]);
          }
        }
        console.log({ suma });
      }
    }
  }
  return subGridSize;

  // cuanto es el tamaño maximo?
  // el total de mi matriz <= maxSum
}

var resultado = largestSubgrid(grid, 20);
console.log({ resultado });

/*
[1,2,3,1,2,3,1,2,3,1],
[1,2,3,1,2,3,1,2,3,1],
[1,2,3,1,2,3,1,2,3,1],
[1,2,3,1,2,3,1,2,3,1],
[1,2,3,1,2,3,1,2,3,1],
[1,2,3,1,2,3,1,2,3,1],
[1,2,3,1,2,3,1,2,3,1],
[1,2,3,1,2,3,1,2,3,1],
[1,2,3,1,2,3,1,2,3,1],
[1,2,3,1,2,3,1,2,3,1],
*/
