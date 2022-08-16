var arr=[1,2,3,1,2,4,5,6,7];

var n=arr.length;
var obj={};
var count=0;
var start=false;
// for( var i=0; i<n; i++){
//     for( var j=0; j<duplicate.length; j++){
//         if( arr[i]==duplicate[j]){
//             start=true;
//         }

//     }

// count++;
// if(count==1 && start==false){
// duplicate.push(arr[i])
// }
// start=false;
// count=0;
// }

// console.log(duplicate);

for(var i=0; i<arr.length; i++){
    if(obj[arr[i]]===undefined){
        obj[arr[i]]=1;
    }else{
        obj[arr[i]]++;
    }
}
//var values= Object.values(obj);
for(var keys in obj){
    if(obj[keys]===1){
        console.log(keys)
    }
}
