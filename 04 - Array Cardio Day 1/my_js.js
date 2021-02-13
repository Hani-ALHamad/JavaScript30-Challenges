//1. Filter the list of inventors for those who were born in the 1500's

//* using forEach method, almost all of them can be solved using forEach method
// arr = []
// inventors.forEach(element => {
//     if (element["year"] >= 1500 && element["year"] < 1600) { arr.push(element)}
// });
// console.table(arr)

//*using filter method
console.table(Object.values(inventors).filter(function(x){
    if(x.year >= 1500 && x.year < 1600){return x}
}));


//2. Give us an array of the inventors first and last names
console.log(Object.values(inventors).map(function(x){return x.first +" "+x.last}))


//3. Sort the inventors by birthdate, oldest to youngest
function sorter1(a,b){
    yearA = a.year
    yearB = b.year
    compare = 0
    if(yearA > yearB){compare = 1}
    else if(yearA < yearB){compare =-1}
    return compare;
}
console.table(inventors.sort(sorter1))


//4. How many years did all the inventors live all together?
console.log(Object.values(inventors).reduce((t, {passed,year}) => t+(passed-year), 0));


//5. Sort the inventors by years lived
function sorter2(a, b) {
    yearA = a.passed - a.year
    yearB = b.passed - b.year
    compare = 0
    if (yearA > yearB) { compare = -1 }
    else if (yearA < yearB) { compare = 1 }
    return compare;
}
console.table(inventors.sort(sorter2))


//7. sort Exercise
// Sort the people alphabetically by last name
arr = people.sort()
for (let index = 1; index < arr.length; index++) {
    if ((arr[index-1].split(",")[0] === arr[index].split(",")[0]) && (arr[index-1].split(",")[1] < arr[index].split(",")[1])) {
        [arr[index-1], arr[index]] = [arr[index], arr[index-1]]
    }
}
console.log(arr)


// 8.Reduce Exercise
// Sum up the instances of each of these
//     const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

obj = {};
reducer = data.reduce(function(obj,item){
    if (obj[item] == undefined) { obj[item] = 0}
    obj[item]+=1
    return obj
}, {})

console.log(reducer)