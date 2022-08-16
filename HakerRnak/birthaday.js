function birthday(arr, day, month) {
    // Write your code here
    var count=0;
    var len=arr.length;
    for( var i=0; i<len; i++){
        for( var j=i+1; j<=len; j++){
            var subarr=[];
            for( var k=i; k<j; k++){
                subarr.push(arr[k]);
            }
            //console.log(subarr);
            var sum=0;

            if( segment(subarr,month)){
                
                //console.log(subarr)
                for( var l=0; l<subarr.length; l++){
                    sum+=subarr[l];
                }
            }
            if( sum===day){
                count++;
            }
        }
        

    }
    
    console.log(count)


}

function segment(array,month){
    
    if( array.length===month){
        return array
    }

}



var arr=[2,2,1,3,2];
var day=4;
var month=2
birthday(arr,day,month)