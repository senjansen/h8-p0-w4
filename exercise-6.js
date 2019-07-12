function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var digit = 0;
    var minDigit = 0;

    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            digit = i.toString().length + (angka / i).toString().length;
        }
        if (minDigit === 0 || digit < minDigit) {
            minDigit = digit;
        }
    }
    return minDigit;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2