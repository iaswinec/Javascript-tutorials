function findElement(num) {
a=[1,2,4,6,7,8,9,12,55,76,9,23]
flag=0
    for(i of a){
        if(num == i){
            flag=1
            break  
        }
    }
    if(flag==1){
        console.log(num+" is present");
    }
    else{
        console.log(num+" is not present");
    }
}

findElement(6)