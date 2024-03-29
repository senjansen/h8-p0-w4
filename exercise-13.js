function deepSum (arr) {
    // Code disini
    results = 0;
    let group = [];
    let eachGroup = [];

    if (arr.length === 0) {
        return 'No number';
    } else {
        for (var i = 0; i < arr.length; i++) {
            group = arr[i];
            for (var j = 0; j < group.length; j++) {
                eachGroup = group[j];
                for (var k = 0; k < eachGroup.length; k++) {
                    results += eachGroup[k];
                }
            }
        }
        return results;
    }
}
  
//TEST CASE
console.log(deepSum([
[
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
],
[
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
],
[
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
]
])); // 316

console.log(deepSum([
[
    [20, 10],
    [15],
    [1, 1]
],
[
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
],
[
    [3, 5, 1],
    [1, 5, 3],
    [1]
],
[
    [2]
]
])); // 156

console.log(deepSum([])); // No number