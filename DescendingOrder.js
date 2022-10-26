/*
Descending Order
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/
function descendingOrder(n){
  //...
  n=n+"";
  n=n.split("")
  for(i=0;i<n.length;i++){
    n[i] = parseInt(n[i]);
  }
  n=n.sort((a,b) => b-a);
  n=n.join("");
  n=parseInt(n);
  return n
}