function urutkanAbjad(str) {
    // you can only write your code here!
    var newArray = [];

    for (i = 0; i < str.length; i++) {
        newArray[i] = str[i];
    }

    result = newArray.sort().join('');
    
    return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'