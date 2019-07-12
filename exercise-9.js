function checkAB(num) {
    // you can only write your code here!
    var jumlahAb = 0;

    for (var i = 0; i < num.length; i++) {
        if ((num[i] === 'a') && (num[i+4] === 'b')) {
            jumlahAb++
        } else if ((num[i] === 'a') && (num[i-4] === 'b')) {
            jumlahAb++
        }
    }

    if (jumlahAb > 0) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false