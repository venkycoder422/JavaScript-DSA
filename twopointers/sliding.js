function maxsum(arr,K){
var max=0;
var sum=0;
for( var i=0; i<K; i++){
    sum+=arr[i];
}
var l=0;
var r=K-1;
while(r<arr.length){
    sum=sum+arr[r+1]-arr[l];
    if(sum>max){
        max=sum;
    }
    l++;
    r++;
}
console.log(max);
}
maxsum([100, 200, 300, 400],2)