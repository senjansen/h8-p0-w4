function graduates (students) {
    // Code disini
    let results = {};
    let allClass = [];
    let initClass = [];
    
    if (students.length === 0) {
        return results;
    }
    
    for (let i = 0; i < students.length; i++) {
        initClass = students[i].class;
        
        if (allClass.includes(initClass)) {
            continue;
        } else {
            allClass.push(initClass)
        }
    }

    for (let j = 0; j < allClass.length; j++) {
        let arrClass = [];
        for (let k = 0; k < students.length; k++) {
            let objStudents = {};
            if ((allClass[j] === students[k].class) && (students[k].score > 75)) {
                objStudents.name = students[k].name;
                objStudents.score = students[k].score;
                arrClass.push(objStudents);
            }
        }
        results[allClass[j]] = arrClass;
    }
    return results;
}

console.log(graduates([
{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
},
{
    name: 'Alexei',
    score: 85,
    class: 'wolves'
},
{
    name: 'Sergei',
    score: 74,
    class: 'foxes'
},
{
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
}
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
{
    name: 'Alexander',
    score: 100,
    class: 'foxes'
},
{
    name: 'Alisa',
    score: 76,
    class: 'wolves'
},
{
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
},
{
    name: 'Albert',
    score: 71,
    class: 'wolves'
},
{
    name: 'Viktor',
    score: 80,
    class: 'tigers'
}
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])); //{}