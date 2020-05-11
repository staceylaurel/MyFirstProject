//4.
let me = {
    firstName: 'Stacey',
    lastName: 'Tannehill'
};

//5.
const nifty = 50;
console.log(nifty);

//6. adding 5 and 4 to equal 9 here
console.log(add(5, 4));
function add(num1, num2) {
    return num1 + num2;

}
//7. NOTES!

//8.
alert("Hello World!");
console.log('Hello World');

//9.
function checkAge([age, name]) {
    if (age < 21) {
        alert("Sorry" + name + ", you aren't old enought to view this page!");

    }
    let charles = {
        name: "Charles",
        age: 21,
    };

    let abby = {
        name: 'Abby',
        age: 27,
    };

    let james = {
        name: "James",
        age: 18,
    };

    let john = {
        name: "John",
        age: 17,
    };
}
var times = 4;
for (var i = 0; i < times; ++i) {
    console.log(i)
}

//10. Veggie time
var veggies = ["Kale", "Arugala", "Raddish"]
for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

//11. Fur Babies
class roomMatesPets 
{ 
    name = Barkley;
    breed = Cockerdoodle;
}
        console.log(name + breed)
{
    name = Tamale;
    breed = BlackCat;
        
        console.log(name + "is a" + breed)
}

//12.
i = name
var friends = [
    { name: 'Wonho', age: 21 },
    { name: 'Shownu', age: 27 },
    { name: "Jooheon", age: 18 },
    { name: "Kihyun", age: 17 },
    { name: "Minhyuk", age: 22 },
];

for (let i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age)
}

//step 14: getLength function
function getLength(string) {
    return string.length;
}
let length = getLength("Hello World");

if (length % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}