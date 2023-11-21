// * * * *
//  * * *
//   * *
//    * 


n=1
for(row=1; row<=4; row++){
    s=""
        for(k=0; k<=n; k++){
            s=s+" "
        }
        n=n+1
        for(col=4; col>=row; col--){
        s=s+"* ";
        }
        console.log(s);
    }