
//arrow fn
let sumOfTwoNumbers = (a, b) => a + b;
console.log(sumOfTwoNumbers(10, 20));
/////multiline string

let greeting = `Hello World,     
 Greetings to all,
 Keep Learning and Practicing!`
                
 console.log(greeting);

 ///////////////string literals
 let firstName="Rushi"
 let lastName="D"

 let name = `My name is ${firstName} ${lastName}`
 console.log(name);

 //Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);

//Object Destructuring
let person = {names: "Peter", age: 28};
let {names, age} = person; // Object destructuring assignment
console.log(names, age);

//higher order fn
let arr=[5,5,5,5,4]
 function sum(index,key){
    return index+key
 }

 let result =arr.reduce(sum,0);
 console.log("sum =",result);

 //filter.
console.log(arr.filter((i)=>i==4))


//
var asyncCall =  new Promise((resolve, reject) => {
    // do something
    resolve();
 }).then(()=> {   
    console.log('DON!');
 })


