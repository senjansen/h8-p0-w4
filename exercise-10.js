function changeMe(arr) {
    // you can only write your code here!
    var data = {};
    var num = 1;
    var d = new Date();
    var thisYear = d.getFullYear();

    if (arr.length === 0) {
        console.log('""');
    }

    for (var i = 0; i < arr.length; i++) {
        data.firstName = arr[i][0];
        data.lastName =  arr[i][1];
        data.gender = arr[i][2];

        if (arr[i][3] > thisYear || !arr[i][3]) {
            data.age = 'Invalid Birth Year';
        } else {
            data.age = thisYear - arr[i][3];
        }

        console.log(num + '. ' + data.firstName + data.lastName + ':');
        console.log(data);
        num++;
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""