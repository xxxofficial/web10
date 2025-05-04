function mapObject(obj, callback) {
    const result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = callback(obj[key]);
        }
    }
    return result;
}

const nums = { a: 3, b: 10, c: 45 };
console.log(mapObject(nums, x => x * 2)); 
