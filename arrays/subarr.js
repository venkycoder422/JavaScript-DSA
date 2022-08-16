//Given an unsorted array A of size N that contains only non-negative integers,
 //find a continuous sub-array which adds to a given number S.

 

//Example 1:

///Input:
//N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: (2 4 )1 count=1;
// Explanation: The sum of elements 
// from 2nd position to 4th position 
// is 12.

var arr=[1,2,3,7,5];
var K=12;
function subarrsum(arr,K){
var count=0;
var n=arr.length;
for( var i=0; i<n; i++){
    for( var j=i+1; j<=n; j++){
        var subsum=0;
        for( var k=i; k<j; k++){
            subsum+=arr[k];
        }
    
        if(subsum===K){
            count++
        }
    }
}
if(count===0){
    return -1
}else{
    return count;
}

}
console.log(subarrsum(arr,K));