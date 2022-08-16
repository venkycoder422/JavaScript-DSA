var arr=[1,2,3,5,6,8,10];

var n=arr.length;
var miss=[];
for( var i=0; i<n; i++){
    var diff=arr[i+1]-arr[i];
    if(diff>1){
        miss.push(arr[i]+1);
    }
}
console.log(miss);