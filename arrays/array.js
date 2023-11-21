n1=[10,20,30,false,4.1,[6,7,8]]
console.log(n1);
console.log(n1.length);
console.log(n1[0]);

for(i in n1){
    console.log(i);
}

for(i of n1){
    console.log(i);
}

for(i in n1){
    console.log(n1[i]);
}

n1.push(45,67)
console.log(n1);
