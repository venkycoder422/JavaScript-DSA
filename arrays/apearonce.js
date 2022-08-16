var arr = [2, 3, 9, 5, 4, 5, 3, 4];
var n = arr.length;
var found = 0;
var notfound = true;
//Basic aprooch
// for( var i=0; i<n; i++){
//     var once=0;
//     for( var j=0; j<n; j++){
//         if( arr[i]===arr[j]){
//             once++;
//         }
//     }
//     if( once==1 ){
//         found=arr[i]
//         notfound=false;
//         break;
//     }

// }

// if( notfound){
//     console.log(-1)

// }else{
//     console.log(found)
// }

function apearonce(arr, n) {
    let obj = {};

    for (var i = 0; i < n; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }

    for (var keys in obj) {
        if (obj[keys] === 1) {
            console.log(keys);
        }
    }

}

apearonce(arr, n);

