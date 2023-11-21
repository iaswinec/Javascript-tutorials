num=9
flag=0;
for(i=2; i<num; i++){
    if(num%i==0){
        flag=1
        break
    }
}
if(flag=1){
    console.log(num,"is prime");
}
else{num,"is not prime"}


