// Display numbers which are divisible by 5-  [1,2,3,4,5,6,7,8,9,10,12,2,3,55]



function divisiblefive(a){
    for(i of a){
        if (i%5==0){
            console.log(i);
        }
    }
}
divisiblefive([1,2,3,4,5,6,7,8,9,10,12,2,3,55])