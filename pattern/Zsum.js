function Npattern(n,m,arr){
    var sum=0;
    for( var i=0; i<n; i++){
        
        for( var j=0; j<m; j++){
           
            if(i==0 || i==n-1 ){
                sum+=arr[i][j];            
            }else if( i==j){
                sum+=arr[i][j];
            }
        
        }
    }
        console.log(sum);
}
    


var arr=[[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

var n=3;
var m=3;
Npattern(m,m,arr);