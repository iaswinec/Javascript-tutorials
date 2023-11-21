a=[1,2,3,4,5,6,7]

console.log(a.reduce((a,b)=>a+b));  //sum 

console.log(a.reduce((n1,n2)=>n1>n2?n1:n2));  //greatest number

console.log(a.reduce((n1,n2)=>n1<n2?n1:n2));  //lowest number