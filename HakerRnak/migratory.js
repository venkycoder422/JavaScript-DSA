function migratoryBirds(arr) {

    var  map = {}, maxCount = 0, output = [];
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] == undefined) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]] += 1;
        }
    }
    //console.log(map)
    var max=0;
    for( var keys in map){
        if( map[keys]>max){
            max=map[keys];
            var type=keys;
        }
    }
return type;
    
}

var arr=[1,2,3,4,5,2,1,2,4,3,5,2,2,3];
console.log(migratoryBirds(arr));