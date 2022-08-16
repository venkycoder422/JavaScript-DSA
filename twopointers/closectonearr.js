
 function closest(arr,N,X){
    var L=0;
    var R=N-1;
    var diff=Number.MAX_SAFE_INTEGER;
    var ans=0;
    while(L<R){
        var sum=Math.abs(arr[L]+arr[R]-X);

        if( sum<diff ){
            diff=sum;
            ans=arr[L]+arr[R];
        }
        if(arr[L]+arr[R]<X){
            L++;
        }else{
            R--;
        }
    }
    return ans;
}
var arr1=[10, 22, 28, 29, 30, 40];
var N=6;
var X=54;
console.log(closest(arr1,N,X));