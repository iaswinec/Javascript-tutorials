function check(num) {
    if(num>0){
        return num+" is positive"
    }
    else if( num<0){
        return num+" is negative"
    }
    else{
        "Zero is neither positive nor negative"  
    } 
}
console.log(check(-5));

// note: else part(line-8) is not working
