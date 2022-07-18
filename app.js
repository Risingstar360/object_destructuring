//Object destructuring 1

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); will return an object numPlanets : 8
// console.log(yearNeptuneDiscovered); will return an object yearNeptuneDiscovered : 1846

//Object destructuring 2

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;

  console.log(discoveryYears); //Will return an object containing yearNeptuneDiscovered : 1846 and yearMarsDiscovered : 1659

  //Object destructuring 3

  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) //Will return a string template literal containing the data 'Alejandro' and Purple
  getUserData({firstName: "Melissa"}) // Will return a string template literal containing thr data 'Melissa' and the color 'green' 
  getUserData({})  //Will return undefined followed by 'green'

  //Array Destructuring 1
  
  let [first, second, third] = ["Maya", "Marisa", "Chi"];

  console.log(first); //logs 'Maya'
  console.log(second); //logs 'Marisa'
  console.log(third); //logs 'Chi'

  //Array Destructuring 3



  let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]

  console.log(raindrops); //logs 'raindrops on roses'
  console.log(whiskers); // logs 'whiskers on kittens'
  console.log(aFewOfMyFavoriteThings); //logs 'Bright copper kettles', 'warm woolen mittens', 'Brown paper pachages tied up with string'

  //Array Destructuring

  let numbers = [10, 20, 30];
  [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

  console.log(numbers);
  
  //logs [10, 30, 20]



//ES5 Assigning Variables to Object Properties

// var obj = {
//     numbers: {
//       a: 1,
//       b: 2
//     }
//   };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

  const obj = {
    numbers: {
        a:1,
        b:2
    }
  };

  let {a,b} = obj.numbers;

  //ES5 Array Swap

// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

let arr = [1,2];

[arr[0],arr[1]] = [arr[1],arr[0]];

//ES2015 One-Line Array Swap with Destructuring

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})