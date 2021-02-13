// start with strings, numbers and booleans
console.log("%c 1: making a normal different copy, when you edit the original one the second one wont change.", 'font-size:12px; background: green')
// Let's say we have an array
//* const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players
console.log("players", players, "\n", "team", team)
// You might think we can just do something like this:
console.log("%c 2: when we try to change team[3] it will change the original 'player' value as well ", 'font-size:12px; background: green')
team[3] = 'Lux';
console.log("players",players,"\n", "team",team)
console.log("%c that means 'team' is not a new array, its just a reference to the original array.", 'font-size:12px; background: green')
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
console.log("%c 3: we can fix this by making a new array by using slice() ,and now if we change 'team2', 'players' wont change", 'font-size:12px; background: green')
const team2 = players.slice();
console.log("team2",team2)
// one way

// or create a new array and concat the old one in
console.log("%c 4: we can concat the old array and creat a new array: const team3 = [].concat(players)", 'font-size:12px; background: green')
const team3 = [].concat(players)
// or use the new ES6 Spread

console.log("%c 5: we can use ES6 features as well, and will have same results as concating: const team4 = [...players]", 'font-size:12px; background: green')
const team4 = [...players]
console.log("%c 6: and another different way: const team5 = Array.from(players)", 'font-size:12px; background: green')
const team5 = Array.from(players)
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
console.log("%c 7: now with objects. \nconst person = {\nname: 'Wes Bos',\nage: 80\n};\n\nand if we want to make a copy of it we use the Object.assign method\nconst cap2 = Object.assign({}, person)\n\nanother way:\nconst cap3 = {...person};", 'font-size:12px; background: green')
const cap2 = Object.assign({}, person)
console.log("cap2",cap2)

// const person = {
//     name: 'Wes Bos',
//     age: 80
// };

    // and think we make a copy:

    // how do we take a copy instead?

    // We will hopefully soon see the object ...spread
const cap3 = {...person};
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
console.log("%c 8: a more complicated object:\nconst wes = {\n    name: 'Wes',\n    age: 100,\n    social: {\n        twitter: '@wesbos',\n        facebook: 'wesbos.developer'\n    }\n\n};", 'font-size:12px; background: green')
const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
};
console.log("wes",wes)
console.log("%c and we use const dev = Object.assign({}, wes);\n\nthis cloning is only one level deep, means it wont reach 'social' in 'wes' and edit it\n\ninstead, we can use JSON.parse(JSON.stringify()) to solve that problem:\n\nconst dev2 = JSON.parse(JSON.stringify(wes));\n\n but in general we dont need to make an object inside another object.", 'font-size:12px; background: green')

const dev2 = JSON.parse(JSON.stringify(wes));