a=[1,2,4,6,7,8,9,12,55,76,9,23]
e=800
a.sort((n1,n2)=>n1-n2)
flag=0
low=0
upper=a.length-1
count=0
while(low<=upper){
    middleIndex=Math.floor((low+upper)/2)
    if(e==a[middleIndex]){
        flag=1
        break
    }
    else if(e>a[middleIndex]){
        low=middleIndex+1
    }
    else if(e<a[middleIndex]){
        upper=middleIndex-1
    }
}
if(flag==1){
    console.log("element found");
}
else{
    console.log("element not found");
}