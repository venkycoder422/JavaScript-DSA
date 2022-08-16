//Write a JavaScript program to find the most frequent item of an array
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output : a ( 5 times );
var arr1=[3, 'a', 'a', 'a', 2, 1, 3, 'a', 'a', 2, 4, 9, 3];

var n=arr1.length; 
var frequent=0;
for( var i=0; i<n; i++){
    count=1;
    for( var j=i+1; j<=n; j++){
        if( arr1[i]===arr1[j]){
            count++;
            
        }
        //console.log(count)
        if( count>frequent){
            frequent=count;
            char=arr1[i];
        }
    }
    

}
console.log(char+"-"+frequent)


