/*
Count the divisors of a number
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Note you should only return a number, the count of divisors. 
The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/
function getDivisorsCnt(n){
    // todo
  let countDiv =0;
  let check_point = 0
  if ( n<3){
    return n;
  }
  if (n %2 == 0 ){
    check_point = n/2;
  }else{
    check_point = n/2+0.5;
  }
  for ( let i=1;i<=check_point;i++){
    if (n%i == 0){
      countDiv++
    }
  }
  countDiv= countDiv+1 ;
  return countDiv;
}