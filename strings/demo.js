// var arr=["A transformation"];
// for( var i=0; i<arr.length;i++){
// for( var m=0; m<arr[i].length; m++){
//     for( var j=m+1; j<=arr[i].length; j++){
//    var substr="";
//    for( var k=m; k<j; k++){
//      substr+=arr[i][k];
     
//    }
//    console.log(substr);
// }

// }
// }
function longestIncSubArr(n, A) {
    //You need to find out the length of the longest subarray which is strictly increasing i.e, every element is greater than it's the previous element in that subarray.
  var count=0;
  for( var i=0; i<n; i++){
   
     for( var j=i+1; j<=n; j++){
       var substr=[];
        var increasing=true;
      for( var k=i; k<j; k++){
        substr.push(A[k]);
      }
      console.log(substr);
       for( var p=0; p<substr.length;p++){
         
        if( substr[p]<=substr[p+1]){
          console.log(substr[p]);
        }
       }
      }
    if( increasing==true){
     count++ 
    }
    
  }
    
    console.log(count);
    console.log("end");
    
  }
  