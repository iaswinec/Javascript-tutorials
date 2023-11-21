// print common elements
a1=[1,2,3,4,5,]
a2=[3,4,5,6,7,8,3,4]

for(i of a1){
    for(j of a2){
        if(i==j){
            console.log(i);
            break
        }
    }
}


// my code. but,some issues found here
// for(i=0; i<=a1.length; i++){
//     for(j=0; j<=a2.length; j++){
//         if(a1[i]==a2[j]){
//             console.log(a1[i]);
//             break
//         }
//     }
// }