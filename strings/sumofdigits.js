//var N="123";
sum=0;
// for( var i=0; i<N.length; i++){
//     sum=sum+Number(N[i]);
// }
// console.log(sum);
var N=123;
sum=0;
for( var i=0; i<N; i++){
    var last=N%10;
    sum=sum+last;
    N=N/10;
}

console.log(Math.ceil(sum));