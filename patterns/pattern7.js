//    *
//   * *
//  * * *
// * * * *

n=3  //we give different values for n. And choose the correct value.
for(row=1; row<=4; row++){
    s=""
        for(k=1; k<=n; k++){
            s=s+" "
        }
        n=n-1
        for(col=1; col<=row; col++){
        s=s+"* ";
        }
        console.log(s);
    }