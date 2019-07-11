function ubahHuruf(kata) {
    // you can only write your code here!
    var arrayChar = [];

    for (var i = 0; i < kata.length; i++) {
        arrayChar[i] = kata.charCodeAt([i]);
        arrayChar[i]++;
        arrayChar[i] = String.fromCharCode(arrayChar[i]); 
    }

    arrayChar = arrayChar.join('');

    return arrayChar;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu