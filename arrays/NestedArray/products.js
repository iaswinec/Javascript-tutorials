products=[
    [1,'hideandseek',30,8],
    [3,'oreo',35,21],
    [5,'tiger',20,11],
    [2,'parle-g',30,8],
    [6,'darkfantasy',45,5]
]
console.log(products);
console.log("---------------------------------");

console.log(products.map(i=>i[1])); //all products name
console.log("---------------------------------");

console.log(products.filter(i=>i[2]<50));  //details of product under 50 ruppees
console.log("---------------------------------");

console.log(products.filter(i=>i[1]=="oreo"));  // details of oreo
console.log(products.find(i=>i[1]=="oreo"));  // details of oreo(using find method) 
console.log("---------------------------------");

console.log(products.filter(i=>i[2]<30).map(i=>i[0]));  // ids of product which have 30 below price
console.log("---------------------------------");

console.log(products.sort((n1,n2)=>n1[0]-n2[0]));   // rearrange accoding to the products id