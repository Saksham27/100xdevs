/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(num,fun){
    let start = Date.now();
    fun(num);
    let end = Date.now();
    return (end-start);
}

function sum(n) {
    if(n==1){
        return 1; 
    }else{
        return n + sum(n-1);
    }
}

function sum2(n) {
  let sum =0;
    for(i=1;i<=n;i++){
      sum += i;
    }
  return sum;
}

// console.log(calculateTime(100000,sum))
console.log(calculateTime(1000000000,sum2))