/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = numbers[0];
    let length = numbers.length;
    for (let i = 0; i < (numbers.length)/2; i++) {
        let greater = numbers[0];
        if(numbers[i]>=numbers[length-1-i]){
            greater = numbers[i]
        }else{
            greater = numbers[length-1-i];
        }

        if(largest<greater){
            largest = greater;
        }
    }
    return largest;
}

module.exports = findLargestElement;