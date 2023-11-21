// 1
// 23
// 456
// 78910
n=1
for(row=1; row<=4; row++){
    s=""
    for(col=1; col<=row; col++){
        s=s+n
        n++
    }
    console.log(s);
}