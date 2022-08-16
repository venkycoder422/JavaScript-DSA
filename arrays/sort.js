//Write a JavaScript program to sort the items of an array. Go to the editor
//Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//Sample Output : -4,-3,1,2,3,5,6,7,8

var arr = [0,-2, -1, -2,0];
var array=[];
var n=arr.length;

//console.log(arr.sort());
for( var i=0; i<n; i++){
    for( var j=0; j<n-i-1; j++){
        if( arr[j]>arr[j+1]){
            // arr[j + 1]=arr[j]
            // arr[j] = arr[j + 1]
            [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]];
        }
        
    }
}
console.log(arr);