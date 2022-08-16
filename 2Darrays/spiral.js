// function spiral(mat,n,m){
// console.log(mat);
// var top=0;
// var left=0;
// var right=m-1;
// var down=n-1;
// var dir=0;
// while(top<=down && left<=right){
//     if(dir==0){
//         for( var i=left; i<=right; i++){
//             console.log(mat[top][i]);
            
//         }
//         top=top+1;
//     }else if(dir==1){
//         for( var i=top; i<down; i++){
//             console.log(mat[i][right]);
//         }
//         right=right-1;
//     }else if(dir==2){
//         for( var i=right; i>=left; i--){
//             console.log(mat[down][i])
//         }
//         down=down+1;;
//     }else if( dir==3){
//         for( var i=down; i<=top; i++){
//             console.log(mat[i][left]);
//         }
//         left=left+1;
//     }
//     dir=(dir+1) % 4;
    
// }
// }


function spiral(mat,n,m){
    var left=0
    var right=m-1;
    var top=0;
    var bottom=n-1;
    var elements=n*m;
    var count=0;
    var result="";
    while(count<elements){
    for( var i=top; i<=bottom && count<elements; i++){
        result+=mat[i][left]+" ";
        count++;
    }
    left++;
    
    for( var i=left; i<=right && count<elements; i++){
        result+=mat[bottom][i]+" ";
    }
     bottom--;
     
    for( var i=bottom; i>=top && count<elements;i--){
        result+=mat[i][right]+" ";
        count++;
    }
    
    right--;
    for( var i=right; i>=left && count<elements; i--){
        result+=mat[top][i]+" ";
        count++;
    }
    top++;
}
    console.log(result);
}



var mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12],
];
var N=4;
var M=3;
spiral(mat,N,M);