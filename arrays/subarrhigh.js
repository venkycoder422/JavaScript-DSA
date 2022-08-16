//Write an efficient program to find the sum of contiguous subarray within \
//a one-dimensional array of numbers that has the largest sum. 

var arr=[-2, -3, 4, -1, -2, 1, 5, -3];
var large=0;
var n=arr.length;
for( i=0; i<n; i++){
    for( var j=i+1; j<=n; j++){
        subarr=[];
        for( var k=i; k<j; k++){
            subarr.push(arr[k]);
        }
        //console.log(subarr);
        var subsum=0;
        var l=subarr.length;
        for( var s=0; s<l; s++){
            subsum+=subarr[s];
        }
        if(subsum>large){
            large=subsum;
        }
    }
}
console.log(large)