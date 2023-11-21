//display numbers>10
a=[
    [1,67],
    [98,78],
    [90,6],
    [34,21],
    [3,7],
    [9,76]
]

for(i of a){
    for(j of i){
        if(j>10){
            console.log(j);
        }
    }
}


//by using 'flat'
// b=a.flat(1)
// for(i of b){
//     if(i>10){
//         console.log(i);
//     }
// }
