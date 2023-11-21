a=[3,4,5,6,7,8,9,10]
prime=[]
nonprime=[]
for(num of a){
    for(i=2; i<num; i++){
        if(num%i==0){
            break
        }
    }
        if(num==i){
            prime.push(num)
        }
        else{
            nonprime.push(num)
        }
    }

console.log(prime,nonprime);


