
var arr=[1,2,1,2,3,1];
var n=arr.length; 
var longest=0;
for( var i=0; i<n; i++){
    for( var j=i+1; j<=n; j++){
        subarr=[];
        for( var k=i; k<j; k++){
            subarr+=arr[k];
        }
        istrue=true;
        for( var i=1;i<subarr.length; i++ ){
            if( subarr[i]<subarr[i-1]){
                istrue=false;
                
            }
        }
        if( istrue){
            if( subarr.length>longest){
                longest=subarr.length
            }
            
        }
        
    }
}
console.log(longest);

