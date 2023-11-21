a=[1,6,-3,2,7,8,-100,-34,-56,34,67]
function posneg(a) {
    pos=[]
    neg=[]
    for(i of a){
        if(i>0){
            pos.push(i)
        }
        else{
            neg.push(i)
        }
    }
    console.log(pos,neg);
}
posneg([1,6,-3,2,7,8,-100,-34,-56,34,67])