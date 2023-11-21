range1=3
range2=9
sum=0;
for(; range1<=range2; range1++){

        for(i=2; i<range1; i++){
            if(range1%i==0){
                break
            }          
        }
        if(range1==i){
            sum=sum+i
        }
        
}
console.log(sum);