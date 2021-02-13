// Array.prototype.some() // is at least one person 19 or older?
obj = {};
Object.values(people).some(function(my){
    obj["isAdult"] = ((new Date()).getFullYear() - my.year > 18);
    console.log(obj);
    return 1;
});

// Array.prototype.every() // is everyone 19 or older?
obj= {}
Object.values(people).every(function(my) {
    return obj["allAdult"] = ((new Date()).getFullYear() - my.year > 18);
});
console.log(obj);

// Array.prototype.find() // find the comment with the ID of 823423
console.log(Object.values(comments).find(function(my){
    return my.id == 823423;
}));

// Array.prototype.findIndex() // Find the comment with this ID
console.log(Object.values(comments).findIndex(function (my) {
    return my.id == 823423;
}));

// delete the comment with the ID of 823423
let comments2 = comments
comments2.splice([(Object.values(comments).findIndex(function (my) {
    return my.id == 823423;
}))],1);


