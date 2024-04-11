//import { apiKey } from "./util";

//const userMessage = 'Hello World';
//console.log(userMessage);
//console.log(9 + 10);
//console.log('hello' + 'Anoushka');

//console.log(10 === 5);

//Functions

//function greet() {
// console.log();
//  return "Hi I am returning";
//}

//greet();


//function abc(username, message) {
//  console.log(username);
// console.log("hi");
//}

//Arrow Functions 
/*export default (username, message) => {
    console.log("hi");
    return username + message;
};
*/

const user = {
    name: 'Anoushka',
    age: 25,
    greet() {
        return 4 + 10;
    }
};
console.log(user);
console.log(user.age)
console.log(user.greet());


//class
class User {
    constructor(name1, age1) {
        this.name = name1;
        this.age = age1;
    }
    greet() {
        console.log("HII");
    }
}

const obj1 = new User("Anoushka", 24);
const obj2 = new User("Chetan", 26);

console.log(obj1.age);
console.log(obj2.age);
console.log(obj1);