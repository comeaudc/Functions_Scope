//  Functions and Scope
// A function is a REUSABLE block of code designed to perform a single purpose.

//Defining Functions
    //3 ways to define a function
        // 1. Function Delaraction - Master first - hoistable
            // 1a. function keyword
            // 1b. name of function
            // 1c. parenthases - arguments/parmeters
            // 1d. curly braces for our logic 
            function sayHello(){
                console.log(`Hello, World`)
            }

        // 2. Arrow Function - Master Second - not hoistable - single line implicit return
            // 2a. Declare a variable
            // 2b. parenthases - arguments/parameters
            // 2c. arrow - => points to the logic to be performed
            // 2d. curly braces to encapsulate logic
            let saidHello = () => {
                console.log(`Hello the last time`)
            }

        // 3. Function Expression - Dont master - not hoistable
            // 3a. Declare a variable
            // 3b. Using function keyword
            // 3c. parenthases - arguments/parmeters
            // 3d. curly braces for our logic 
            let sayingHello = function () {
                console.log(`Hello Again`)
            }

// Hoisting - hoists or brings a function to the top of its scope to be used at anytime. To be used befire declaration

// Calling/invoking/running/executing functions - are functions are called the same way
    // Function name followed by parenthatses
    // ** if there are qrguments (data passed in) they go inside of the parenthases

// sayHello()      // Function declaration - hoistable 
// saidHello()     // Arrow Function - not hoistable
// sayingHello()   // Function expression - not hoistable

//Activity
//What can we infer?
    // n1, n2 are numbers
function areBothEven(n1, n2){

    return !(n1 % 2) && !(n2 % 2) // If both are even we get a truthy response
    // If it is an even number. it would return 0 (which is falsey) then we add the ! before making it truthy
}


// Parameters are placeholders declared during function creation
function computeArea(width, height){
    if(typeof width !== Number || typeof height !== Number) return `Not a valid data type`


    return `The area of a rectangle with width of ${width} and a height of ${height} is ${height * width} square units.`
}

// arguments - are vaues passed into a funtion execution
// console.log(computeArea(14,13))

let planetHasWater = function (planet){
    
    planet = planet.toLowerCase()
    console.log(planet)
   return planet === "earth" || planet === "mars" ?  true : false;
}



let currentPLanet = "PLUto"
console.log(planetHasWater(currentPLanet))

// console.log(currentPLanet)



//Arguments
// Function Declaration with name: getDevObj
// function getDevObject(name) { // 1 parameter called name
//     let skills = []; // Allocating memory via a varable called skills. AKA declared an empty array

//     // console.log(arguments)
//     //created a for loop. Loops through all arguments starting at index 1
//     for (let i = 1; i < arguments.length; i++) { 
//       skills.push(arguments[i]); //Pushing each argument element to skills array
//     }

//     //Return an object that has 2 properties
//     return {
//       devName: name, //First argument = name
//       jobSkills: skills // skills array
//     };
//   }


//Rest parameter (spread operator in function declaration) takes dynamic number of arguments and puts them into an array
function getDevObject(name, ...skills){
    return {
        devName: name,
        jobSkills: skills
    }
}

  // Caching/saving return value into a variable
 let dev = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'React', 'Node', "Express")


function createsPlayer(name, numberOfLegs = 5){
    return {
        name: name,
        numLegs: numberOfLegs
    }
}

// console.log(createsPlayer(2))


// All functions and methods are invoked with ()

// (function(name){
//     //Reach out to a third server and get data, or connect to a live chat
//     console.log(`Your are now connected`)
// })('Dylan')



// Pass by value
// All primitive data types are pass my value
// pass the value itself into functions
// not the variable/place memory

// let myVar = 20;

// function passBy(myVar) {
//     myVar = myVar * 10; //creates a seperate copy variable in memory
//     //does not affect the OG variable
//     return myVar;
// }

// myVar = passBy(myVar)

// console.log(myVar);           // 20



// Pass by Refernce
// let myVar = { value: 20, type: 'Number' }

// function passBy(x) {
//     x.value = x.value * 20;
// }

// console.log(myVar)

// passBy(myVar)

// console.log(myVar)

let animals = ['Duck', 'Crab', 'Frog']

let zoo = [...animals]

zoo.push('Elephant')

console.log(animals)
console.log(zoo)

function deletedlast(array){
 array.pop()
}

deletedlast(animals)

console.log(animals)
console.log(zoo)





// Moral of the story. Be careful passing objects and arrays into functions.







let numArray = [
    { value: 10 },
    { value: 20 },
    { value: 0 },
    { value: -10 }, 
    { value: 15 }, 
    { value: 28 }, 
    { value: -1000 },
    { value: 42 },
    { value: 7 }
];

function returnEven(array) {
    let newArray = []; //Entirely new/serparate array

    array.forEach((element) => {
        if (element.value % 2 == 0) {
            newArray.push(element);
        }
    });

    return newArray;
}

let newArray = returnEven(numArray);

newArray[0].value += 10;

numArray[3].value = 67;

let myEvenValue = newArray[1].value;
myEvenValue /= 2;