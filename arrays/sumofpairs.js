// a=[1,2,3,4,5,6]
// sum=9

a=[1,2,3,4,5,6]
for (i of a) {
    for(j of a){
        if(i+j==9){
            console.log("("+i+","+j+")");
        }
    }      
}
