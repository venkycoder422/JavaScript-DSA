var arr=[1,2,3,4,5,6];
var even=""
var odd="";

// for( var i=0; i<arr.length; i++){
//     if( arr[i] % 2 ===0){
//         even+=(String(arr[i]));
//     }else{
//         odd+=(String(arr[i]));
//     }
// }

// console.log(even+odd);
var start=0;
arr1=[];
for( var i=0; i<arr.length; i++){
    if( arr[i] % 2===0){
        arr[start]=arr[i];
        start++;
    }
}

console.log(arr);


var N=4;

console.log((N*(N+1))/2);