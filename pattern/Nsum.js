function Nsum(n,m,matrix){
    var sum=0;
    for( var i=0; i<n; i++){
        for( var j=0; j<m; j++){
            if( j==0 || j==m-1 || i==j){
                sum+=matrix[i][j];
            }
        }
    }
    console.log(sum)
}

var matrix=[[1, 4, 3],
[6, 5, 6],
[7, 8, 10]];
var n=3;
var m=3;
Nsum(n,m,matrix);