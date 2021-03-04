
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr =[];
    let result =[];

    if(!matrix){
        return [];
    }
    for (let i = 0; i < matrix.length; i++){
        if(i % 2 == 0){
            arr[i] = matrix[i];
            result = result.concat(arr[i]);
        }
        else{
            arr[i] = matrix[i].reverse();
            result = result.concat(arr[i]);
        }
        
    }
  return result;
}
