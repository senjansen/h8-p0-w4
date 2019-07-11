function cariModus(arr) {
    // you can only write your code here!
    var newArray = [];
    var result = [];
    var nilaiSama = 0;

    newArray = arr.slice().sort(function(a, b){return a - b});
    
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i + 1] === newArray[i]) {
            result.push(newArray[i]);
            nilaiSama++;
        }
    }

    if (result.length > 0) {
        result = result[0];
    }
    
    if (nilaiSama === 0) {
        result = -1;
    }
    
    if (nilaiSama + 1 === newArray.length) {
        result = -1;
    }

    return result;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1