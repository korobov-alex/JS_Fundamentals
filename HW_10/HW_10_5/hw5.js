function mapBuilder (keysArray, valuesArrays){
    return new Map(keysArray.map((key, index) => [key, valuesArrays[index]]));
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2));