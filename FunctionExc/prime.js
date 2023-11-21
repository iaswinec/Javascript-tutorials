function prime(num) {
    for(i=2; i<num; i++){
        if(num%i==0)
        break
    }
    if(num==i){
    console.log(num,"is prime");
}
    else{
        console.log(num,"is not prime");
    }
}

prime(7)