function prime(num) {
    for(i=2; i<num; i++){
        if(num%i==0)
        break
    }
    if(num==i){
    return num+" is prime" 
}
    else{
        return num+" is not prime";
    }
}

console.log(prime(6));