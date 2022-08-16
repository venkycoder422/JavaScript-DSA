function Bsort(arr,N){
for( var i=0; i<N; i++){
    for( var j=0; j<N-1-i; j++){
        if(arr[j]>arr[j+1]){
            var temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr);
}
Bsort([3,6,73,4,3],5);


function Ssort(arr,N){
    for( var i=0; i<N; i++){
        for( var j=N-1; j>=0; j--){
            if(arr[j]<arr[j-1]){
                var temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
            }
        }
    }
    console.log(arr);
}

    Ssort([3,6,73,4,3],5);

