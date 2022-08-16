
// function twosumpair(arr1,K){
//     var L=0;
//     var R=arr1.length-1;
//     var ans=[];
//     while(L<R){
//         sum=arr1[L]+arr1[R];
//         if(sum==K){
//             Found=true;
//             return ([L,R].join(" "));
//             break;

//         }else if(sum<K){
//             L++;
//         }else if(sum>K){
//             R--;
//         }
//     }
//     return -1;
// }

function simple(arr,K){
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]===K){
                return [arr[i],arr[j]];
            }
        }
    }
}
var arr1=[10, 20, 35, 50, 75, 80];
var K=70
// console.log(twosumpair(arr1,K));
console.log(simple(arr1,K));