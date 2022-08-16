
function find3Numbers(arr,N,K){
    arr.sort((a,b) => a-b);
//console.log(arr);
var count=0;
for( var i=N-1;i>=0;i--){
  //console.log(arr[i]);
  var l=0;
  var r=N-1;
  while(l<r){
    if(arr[i]+arr[l]+arr[r]==K){
      count++;
    }if(arr[i]+arr[l]+arr[r]<K){
      l++;
    }else{
      r--;
    }
  }
}
console.log(count);
}
find3Numbers([5, 32, 1, 7, 10, 50, 19, 21, 2],9,21);