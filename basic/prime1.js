range1=5
range2=15
for(; range1<=range2; range1++){

        for(i=2; i<range1; i++){
            if(range1%i==0){
                break
            }          
        }
        if(range1==i){
            console.log(range1);
        }
        
}

