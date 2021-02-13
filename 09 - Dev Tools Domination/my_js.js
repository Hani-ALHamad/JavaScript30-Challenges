    // clearing
    console.log("%c 1: console.cleaer()", 'font-size:15px; background: green')
    console.clear()
    // Regular
    console.log("%c 2: Normal console log", 'font-size:15px; background: green')
    console.log("hello")
    // Interpolated
    console.log("%c 3: console.log() with adding string %s", 'font-size:15px; background: green')
    console.log("hello, this is a %s string", "😃")
    // Styled
    console.log("%c 4: console.log() with styling", 'font-size:15px; background: green')
    console.log("%c I am some styled text", 'font-size:20px; background: blue')
    // warning!
    console.log("%c 5: console.warn", 'font-size:15px; background: green')
    console.warn("this is console.warn")
    // Error :|
    console.log("%c 6: console.error", 'font-size:15px; background: green')
    console.error("this is console.error")
    // Info
    console.log("%c 7: console.info", 'font-size:15px; background: green')
    console.info("this is console.info")
    // Testing
    console.log("%c 8: console.assert, which is used for testing", 'font-size:15px; background: green')
    console.assert(1 === 2, "that was wrong!")

    // Viewing DOM Elements
console.log("%c 9: console.dir", 'font-size:15px; background: green')
const p = document.querySelector('p');
console.dir(p)
    // Grouping together
// const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
console.log("%c 10: console.groupEnd , used for grouping results", 'font-size:15px; background: green')
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});
    // counting
console.log("%c 11: console.count, for counting", 'font-size:15px; background: green')
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
    // timing

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.log("%c 12: console.time, shows the time a certain task took to do", 'font-size:15px; background: green')
        console.timeEnd('fetching data');
        console.log(data);
    });
    
    //table
console.log("%c 13: console.table", 'font-size:15px; background: green')
console.table(dogs);