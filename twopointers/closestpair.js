function closest(arr1,arr2,x){
    var l=0;
    var r=arr2.length-1;
    var n=arr1.length-1;
    
    var index=[];
     var diff=Number.MAX_SAFE_INTEGER;
     while(l<n){
      var sum=Math.abs(arr1[l]+arr2[r]-x);

      if(sum<diff){
       diff=sum;
       index[0]=arr1[l];
       index[1]=arr2[r];
      }if(arr1[l]+arr2[r]>x){
       r--;
      }else{
       l++;
      }
      
 
    }
    console.log(diff,index)
 }
 var arr1=[1, 4, 5, 7];
 var arr2=[10, 20, 30, 40];
 var x=38;
 closest(arr1,arr2,x);