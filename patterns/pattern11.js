//       *
//     * *
//   *   *
// * * * * 

n=6  
for(row=1; row<=4; row++){
    s=""
        for(k=1; k<=n; k++){
            s=s+" "
        }
        n=n-2
        for(col=1; col<=row; col++){
            if(row==3 && col==2){
                s=s+"  "
            }
            else{
                s=s+"* ";
            }
        }
        console.log(s);
    }