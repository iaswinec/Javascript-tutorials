a=[1,2,[3,4,5],[6,7]]

console.log(a.flat()) //single array
console.log(a.flat().filter(n=>n>3)); //numbers greater than 3
console.log(a.flat().filter(n=>n>3).reduce((a,b)=>a>b?a:b)); //greatest element