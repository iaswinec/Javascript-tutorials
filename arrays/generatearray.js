// subtract 1 if number<=5 and add 1 if number greater than 5
// array=[1,2,3,4,5,6,7,8,9]

function array(a) {
newarray=[]
    for(i of a){
        if(i<=5){
            // j=i+1
            // newarray.push(j) 
            newarray.push(i+1)       
        }
        else{
            // j=i-1;
            // newarray.push(j) 
            newarray.push(i-1)   
        }
    }
        console.log(newarray);
}
array([1,2,3,4,5,6,7,8,9])