//*********HELLO WORLD program
console.log("hello world!!");

//*********CONST  && variables

//*old way
var oldName = "old";
//No, constants in the old days

//*new way AKA ES6+
const NAME = "new_constant";
let newName = "new_variable";

//console.log(" var: " + oldName + "\n const: " + NAME + "\n let: " + newName);

//**********Objects && methods
const userOne = {
  name: "john",
  age: 25,
  married: false,
  greeting: function () {
    console.log("Hi, my name is " + this.name + ", how are you ?");
  },
};
//dont do this !!
const userTwo = new Object({ name: "jane", age: 23, married: true });

// console.log(userOne);
// console.log(userTwo);
//userOne.greeting();
//******FUNCTIONS

//function declaration
function greeting(user) {
  console.log("Hi, my name is " + user.name + ", how are you ?");
}

//function expression
const greetingExpression = function (user) {
  console.log("Hi, my name is " + user.name + ", how are you ?");
};

//arrow functions

const bonjour = () => {
  console.log("bonjour la famille!!");
};
//arrow functions vs normal functions
const userThree = {
  name: "john",
  age: 25,
  married: false,
  greeting: function () {
    const hello = function () {
      console.log(this.name);
    };

    const helloArrow = () => {
      console.log(this.name);
    };

    hello();
    helloArrow();
  },
};

//userThree.greeting();

//**************DATA TYPES IN JS
//everything is object except for primitives such as:
// string
// number
// boolean
// undefined

let primitive = "I'm primitive";
let obj = {
  name: "john",
};

//passing by value
const modifyPrimitive = (prim) => {
  prim = "I'm modified primitive!";
};

//passing by refrence
const modifyObject = (obj) => {
  obj.name = "hamid is my new name!";
};

modifyPrimitive(primitive);
modifyObject(obj);

// console.log(primitive);
// console.log(obj);

//******** LOOPS  && control flow statements */
const randomArray = [15, 10, 17, 9, 8, 13, 99];

const forLoop = (tab) => {
  for (let i = 0; i < tab.length; i++) {
    console.log(i + ": " + tab[i]);
  }
};

const whileLoop = (tab) => {
  const length = tab.length;
  let i = 0;
  while (i < length) {
    console.log(i + ": " + tab[i]);
    i++;
  }
};

const doWhileLoop = (tab) => {
  const { length } = tab;
  let i = 0;
  do {
    console.log(i + ": " + tab[i]);
    i++;
  } while (i < length);
};

const forEachMethod = (tab) => {
  tab.forEach((val, i) => {
    console.log(i + ": " + val);
  });
};

//control flow statements

const ifStatement = (val) => {
  if (val === 1) {
    console.log("bonjour");
  } else if (val === 2) {
    console.log("bonsoir");
  } else {
    console.log("Salut !");
  }
};

const switchStatement = (val) => {
  switch (val) {
    case 1:
      console.log("bonjour");
      break;
    case 2:
      console.log("bonsoir");
      break;

    default:
      console.log("Salut !");
      break;
  }
};

const isAllowed = (age) => {
  const bool = age < 18 ? false : true;

  return bool;
};

//DOM manipulation
const h3Element = document.getElementById("play");
const form = document.querySelector("#form");
const inputField = document.getElementById("name");
const colorButton = document.getElementById("color_button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  h3Element.textContent = inputField.value;

  inputField.value = "";
});

colorButton.addEventListener("click", (e) => {
  if (document.querySelector("#title").style.color === "red") {
    document.querySelector("#title").style.color = "blue";
  } else {
    document.querySelector("#title").style.color = "red";
  }
});

//*******async actions
const jsonPlaceholderUrl = "https://jsonplaceholder.typicode.com";

fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
  //to be refactored
  response.json().then((json) => console.log(json))
);

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  console.log(users);
};

getUsers();
