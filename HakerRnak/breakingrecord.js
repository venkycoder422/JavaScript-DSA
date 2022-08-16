

function breakingrecord(arr){
    var N=arr.length;
    count_min=0;
    count_max=0;
    var array=[];
    
    for(var i=0; i<N; i++){
        array.push(arr[i]);
        //console.log(array);
        
        console.log(Math.min(...array));
        console.log(Math.max(...array));
        
        if( Math.max(...array) < Math.min(...array)){
            count_min++;s
            count_max++;
        }
        else if(arr[i] > Math.min(...array )){
            count_max++;
        }
        else if( arr[i] < Math.max(...array)){
            //console.log(arr[i]);
            count_min++
        }
        
        
        
    }
    console.log(count_min,count_max);
}
var arr=[12,24,10,24];
breakingrecord(arr);