// 0   1  1  2  3  5
// n1 n2 n3
//    n1 n2  n3


n1=0
n2=1
for(i=1; i<=10; i++){
    console.log(n1);
    n3=n1+n2;
    n1=n2
    n2=n3
}