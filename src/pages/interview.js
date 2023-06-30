import React from "react";

const interview = () => {
  return (
    <>
      <h1> interview</h1>
    </>
    /* =========== 🔥🔥🔥 1. Javascript Excecution Context =========== */

    // when we try to execute the js code  there are two phase
    // 1.Creation phase
    //  In Creation phase 3 things happens.
    //     -> First it creates a Global or window object.
    //     -> then  it Set up memory heap for storing  function references and variables.
    //     -> then it initialized those functions and variables with undefined.
    //         Ex : a = undefined.
    //         function () {....}

    // 2.Execution Phase
    // During the execution phase js engine executes the code line by line assign the values to variables and executes the function call also for every new function created js engine created a new execution context altogether.

    /* ============ ❌❌❌❌  =========== */

    /* =========== 🔥🔥🔥 What is Hositing  ❌❌❌❌❌❌❌❌ =========== */

    // Duration the creation phase javascript engine  moves variable and function declaration to the top of the code this is know as hoisting.

    // function abc() {
    //     console.log("var", a); // a:undefined
    //     // console.log("let", b); // b:undefined : not initialized yet
    //     // console.log("const", c); // c:undefined : c is not initialized yet -- temporal deadzone
    //     var a = "Hey";
    //     // let b = "Hello";
    //     // const c = "World";
    //     console.log(a); // a: Hey : a is initialized
    // }
    // abc();

    /* =========== ❌❌❌❌ ====== ❌❌❌❌  =========== */

    /* =========== 🔥🔥🔥 Let, Var , Const  ❌❌❌❌❌❌❌❌ =========== */

    /* =========== 🔥🔥🔥 What is scope?  ❌❌❌❌❌❌❌❌ =========== */

    /*  Defination: Scope essentially means where these variables are available for use.

There are three types of scope
 1. Block Scope
 2. Functional Scope.
3. Global Scope

Declearing the variable at top of the file is a Global Scope
Delclearing the variable inside a function isa functional Scope
Declearing the variable inside the curly brases{} is a block Scope 

*/

    /* =========== 🔥🔥🔥 3. Difference btw Map and ForEach  =========== */
    // Map and ForEach are array functions to loop through the items of the array
    // MAP : Can return the value, can chain the method like ("filter, Find, findIndex etc.., ")
    // forEach: can not return value and create a new array

    // let arr = [1, 2, 3, 4, 5, 6, 7];
    // const forEachResult = arr.forEach((ar, i) => {
    //     arr[i] = ar + 1;
    // });
    // const arrResult = arr.map((i) => {
    //     console.log("Map array-->", arr)
    //     return i + 1;
    // })

    // console.log("ForEach --> ", forEachResult);
    // console.log("map Function --> ", arrResult);
    // console.log(arr);

    /* =========== ❌❌❌❌ ====== ❌❌❌❌  =========== */

    /* =========== 🔥🔥🔥  4. Difference btw null & undefined  =========== */

    // null :  is a acutal value. type of null is object
    // undefined : variable is decleared but not initialise the value. type of undefined is undefined
    // not defined : if we didnt declear the variable at then it is not defined

    // var a      ===> a is variable that is decleared
    // var a = 5  ===> a is variable that initialise to 5

    // console.log(typeof null);        // object
    // console.log(typeof undefined);   // undefined
    // console.log(null == undefined)  // true, it compare both entities without matching its typeof
    // console.log(null === undefined) // false , it strictly compare it typeof and entities

    /* =========== 🔥🔥🔥 11. PostIncrement & PreIncrement =========== */

    //  PostIncrement
    //  x++: the increment operator increments and returns the value before incrementing.
    // Example : a = b++  transform to ==> b = b + 1 then  a = b

    // let postInc = 3;
    // const PostInc2 = postInc++;
    // console.log("Post increment", postInc); // output 4
    // console.log("Post increment 2", PostInc2); // output 3

    //  PreIncrement
    //  ++x: the increment operator increments and returns the value after incrementing.
    // Example : a = ++b  transform to ==> b=b+1 then  a=b

    // let preInc = 3;
    // const preInc2 = ++preInc;
    // console.log("Pre increment", preInc); // output : 4
    // console.log("Pre increment 2", preInc2); // output : 4

    /* =========== 🔥🔥🔥 5. Event Delegation  =========== */

    /* =========== 🔥🔥🔥 5. Event Looping  =========== */

    // console.log("Execute one", 1);
    // setTimeout(() => {
    //   console.log("Execute 2", 2);
    // });
    // Promise.resolve().then(() => console.log("Execute 3", 3));
    // console.log("Execute 4", 4);

    /* =========== 🔥🔥🔥 6. Flatten Array  =========== */

    // let array1 = [
    //   [1, 2],
    //   [3, 4],
    //   [5, 6],
    //   [6, 7],
    //   [8, 9, 10, [11, 12]],
    // ];

    // let flattenArray = [].concat(...array1); // Method one
    // let flattedArray2 = array1.flat(2); // Method two

    // console.log("Using Flat Method", flattedArray2);
    // console.log("flattend array", flattenArray);

    // function custArray(arr1, depth) {
    //   let rest = [];
    //   arr1.forEach((ar) => {
    //     if (Array.isArray(ar) & (depth > 0)) {
    //       rest.push(...custArray(ar, depth - 1));
    //     } else {
    //       rest.push(ar);
    //     }
    //   });
    //   return rest;
    // }
    // const flatArray = custArray(array1, 4);
    // console.log(flatArray);

    /* =========== 🔥🔥🔥  7. SetTimeout Output  =========== */

    // function a() {
    //   for (var i = 0; i < 3; i++) {
    //     setTimeout(function log() {
    //       console.log(i);
    //     }, i * 1000);
    //   }
    // }
    // a();

    //  for var : output :  3 3 3  after every 1sec
    //  for let : output : 1 2 3 after every 1sec

    // using Closure
    // Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

    // function x() {
    //   for (var i = 0; i < 3; i++) {
    //     function num(i) {
    //       setTimeout(function log() {
    //         console.log(i);
    //       }, i * 1000);
    //     }
    //     num(i);
    //   }
    // }
    // x();

    /* =========== 🔥🔥🔥 8. Call Bind & Apply  =========== */

    // Call :  calls the function with a given this value and arguments provided individually
    // Apply : calls the specified function with a given this value, and arguments provided as an array

    // var person = {
    //   name: "syed Rehaman",
    //   helloFunc: function (thing) {
    //     console.log(this.name + " Says Hello " + thing);
    //   },
    // };

    // var anotherObj = {
    //   name: "Kausar",
    // };

    // person.helloFunc.call(anotherObj, "world");
    // person.helloFunc.apply(anotherObj, ["world"]);
    // const newFunction = person.helloFunc.bind(anotherObj); // completly create new function

    // newFunction(" to Syed");

    /* =========== 🔥🔥🔥 9. composition polyfill  =========== */

    /* =========== 🔥🔥🔥 10. Promise.all  =========== */

    /* =========== 🔥🔥🔥 11.1 Output  =========== */
    // var cd = -1;
    // function xCounter() {
    //   var cd = 0;
    //   return function () {
    //     ++cd;
    //     cd++;
    //     return cd;
    //   };
    // }
    // console.log(cd); //  output:  -1
    // var counter = xCounter();
    // console.log(counter()); // output: 1
    // console.log(counter()); // output:  2
    // console.log(cd); // output : -1

    /* =========== 🔥🔥🔥 11.2 Output   =========== */

    // var obj = {
    //   usernameId: 12,
    //   getX: function () {
    //     return this.usernameId;
    //   },
    // };
    // const outputVal = obj.getX;
    // console.log("Output ==>", outputVal()); // Printing function getX

    /* =========== 🔥🔥🔥 11.3  Output  ❌❌❌❌    =========== */

    // var objectsArray = { a: { b: { c: { d: "foo" } } } };

    // function findKeys(obj) {
    //   let result = [];
    //   Object.keys(obj).forEach((key) => {
    //     if (typeof Object.values(obj) === "object") {
    //       // console.log("im in object");
    //       result.push(key);
    //       // console.log(result);
    //     } else {
    //       // console.log("i am not object");
    //     }
    //   });

    //   console.log(obj);
    //   return obj;
    // }

    // findKeys(objectsArray);

    /* =========== 🔥🔥🔥 12  shallow copy and deep copy   =========== */

    // shallow copy : when one object holds the reference of another object this is called shallow copy

    // let classOne = {
    //   ename: "Jack",
    //   eaddress: "New York",
    // };

    // let classTwo = classOne; //Shallow Copy : output will be same for two objects
    // classTwo.ename = "Syed Rehaman";
    // console.log(classOne);
    // console.log(classTwo);

    // deep copy : when we completly clone an object into another variable this is called as deep copy. we dont have any references to the original object that is why it is deep copy

    // var employee = {
    //   eid: "E102",
    //   ename: "Jack",
    //   eaddress: "New York",
    //   salary: 50000,
    // };

    // var newEmployee = Object.assign({}, employee); //Deep Copy
    // let newEmp2 = { ...employee }; //Deep Copy

    // newEmployee.ename = "Syed Rehaman";
    // newEmp2.ename = "Kausar";
    // console.log("Employee", employee);
    // console.log("New Employee", newEmployee);
    // console.log("New Employee2", newEmp2);

    /* =========== 🔥🔥🔥 13  html form with validation & create mobile first approach  =========== */

    /* =========== 🔥🔥🔥 14  determine whether second string could form first string or not  =========== */

    // let stringOne = "SWITZERLANDS";
    // let stringTwo = "LzRIXTASDxquopWETnDAS";

    // function determineString(str1, str2) {
    //   let count = {};
    //   for (let i = 0; i < str1.length; i++) {
    //     if (str1[i] in count) {
    //       count[str1[i]]++;
    //     } else {
    //       count[str1[i]] = 1;
    //     }
    //   }
    //   for (let i = 0; i < str2.length; i++) {
    //     if (count[str2[i]] == 0 || !(str2[i] in count)) {
    //       return false;
    //       count[str2[i]]--;
    //     }
    //     return true;
    //   }

    //   return true;
    // }

    // if (determineString(stringOne, stringTwo)) {
    //   document.write("Yes");
    // } else {
    //   document.write("No");
    // }

    /* =========== 🔥🔥🔥 15  three types of invocations  =========== */

    // function add1() {
    //   console.log(a + b + c);
    //   return a + b + c;
    // }
    // function add2(arg1, arg2, arg3, arg4) {
    //   this.val1 = arg1;
    //   this.val2 = arg2;
    //   this.val3 = arg3;
    // }
    // add1(11, 22, 33);
    // add2(11, 22, 33, 44);
    // add1(11, 22, 33, 44, 55);

    /* =========== 🔥🔥🔥 16. fetch Json =========== */
    // const fetchJson = async () => {
    //   await fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       data.map((item) => item.title);
    //     });

    //   return fetchJson;
    // };

    // function appendData(data) {
    //   fetchJson();

    //   var mainContainer = document.getElementById("fetchdata");
    //   for (var i = 0; i < data.length; i++) {
    //     var div = document.createElement("div");
    //     div.innerText = "title: " + data[i];
    //     mainContainer.appendChild(div);
    //   }
    // }
    // appendData(fetchJson);
    // console.log(fetchJson);

    /* =========== 🔥🔥🔥 15  Local Storage and Session  =========== */
    /* 
1. localStorage and session storage are both are web storage API
2. With localStorage, the data is persisted until the user manually clears the browser cache or until your web app clears the data and with sessionStorage, the data is persisted only until the window or tab is closed
3. localStorage and session storage can store 10mb of data
4. There are four method for localStorage, setItem, getItem, removeItem, clear 
5. localStorage can only store string values. if we want to store a object or array as value we can use JSON.Stringify() to convert it to a string 

*/
  );
};

export default interview;
