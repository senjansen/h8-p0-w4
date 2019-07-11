function cariMedian(arr) {
    // you can only write your code here!
    var median = 0;
    if (arr.length % 2 === 1) {
        median = (arr.length / 2) + 0.5 - 1;
        return arr[median];
    } else {
        value2 = arr.length / 2;
        value1 = value2 - 1;
        median = (arr[value1] + arr[value2]) / 2; 
        return median;
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5