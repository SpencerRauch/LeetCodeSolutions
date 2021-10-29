/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function (grid) {
    debugger;
   let fresh = 0;
   let rot = 0;
   let minutes = 0;
   let fruittorot = [];
   for (let i = 0; i < grid.length; i++) {

       for (let j = 0; j < grid[i].length; j++) {
           if (grid[i][j] == 1) {
               let alwaysFresh = true;
               if (grid[i - 1] != undefined) {
                   if (grid[i - 1][j] == 2 || grid[i - 1][j] == 1) {
                       alwaysFresh = false;
                   }
               }
               if (grid[i + 1] != undefined) {
                   if (grid[i + 1][j] == 2 || grid[i + 1][j] == 1) {
                       alwaysFresh = false;
                   }
               }
               if ((grid[i][j - 1] != 0 && grid[i][j - 1] != undefined) ||
                   (grid[i][j + 1] != 0 && grid[i][j + 1] != undefined)) {
                   alwaysFresh = false;
               }
               if (alwaysFresh) {
                   return -1;
               }
               fresh++;

           }
           if (grid[i][j] == 2){
               rot++;
           }

       }
   }
   if (fresh == 0) {
       return 0;
   }
   if (rot == 0){
       return -1;
   }
   while (fresh > 0){

       for (let i = 0; i < grid.length; i++){
           for (let j = 0; j < grid[i].length; j++){
               if (grid[i][j] == 2){
                   if (grid[i-1] != undefined){
                       if (grid[i-1][j] == 1){
                           fruittorot.push([i-1,j])
                       }
                   } 
                   if (grid[i+1] != undefined){
                       if (grid[i+1][j] == 1){
                           fruittorot.push([i+1,j])
                          
                       }
                   }
                   if (grid[i][j+1] == 1){
                       fruittorot.push([i,j+1])
                       
                   }
                   if (grid[i][j-1] == 1){
                       fruittorot.push([i,j-1])
                   }
                   
               }
               
           }
       }
       fresh = rotFruit(fruittorot, grid, fresh);
       fruittorot = [];
       minutes++;

   }

   return minutes;
};

var rotFruit = function (arrayofcoords, grid, fresh){
   for (let i = 0; i < arrayofcoords.length; i++){
       if (grid[arrayofcoords[i][0]][arrayofcoords[i][1]] ==1){
           grid[arrayofcoords[i][0]][arrayofcoords[i][1]] = 2;
           fresh--;
       }
       
   }
   return fresh;
}

// https://leetcode.com/problems/rotting-oranges/