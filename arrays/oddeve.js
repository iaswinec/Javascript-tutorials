// oddevenarray([1,2,3,4,5,6,7,8,9,10,12,3,4,55])

function oddevenarray(a) {
    odd=[]
    even=[]
    for(i of a){
        if(i%2==0){
            even.push(i)
        }
        else{
            odd.push(i)
        }
    }
    console.log(odd,even);  
}
oddevenarray([1,2,3,4,5,6,7,8,9,10,12,3,4,55])