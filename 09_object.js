// const mysys = Symbol("key1")
// const JsUser = {
//     name:"Sampat",
//     "full name": "Sampat Sarkar",
//     [mysys]:"myKey1",
//     age :18,
//     location :"Jaipur",
//     email:"sampatsarkar@gmail.com",
//     isLoggedIn:false,
//     lastLogonDays:["Monday","Saturday"]
    
// }

// // console.log(JsUser.email);
// // console.log(JsUser["email"]);
// // console.log(JsUser["full name"]);
// // console.log(JsUser[mysys]);
// // console.log(typeof JsUser[mysys]);

// JsUser.email="Sampat@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email="Sampat@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello Sampat");
// }
// JsUser.greetingTwo= function(){
//     console.log(`Hello JsUser, ${this.name}`);
    
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


const tinderUser = new Object()
// const tinderUser = {}
tinderUser.ID = "123@ABC"
tinderUser.name = "Sampat"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

// const regularUser = {
//     email : "some@gmail.com",
//     fullname: {
//         Username:{
//             firstname:"Hitesh",
//             lastname:"Choudhary"
//         }
//     }
// }
// console.log(regularUser.fullname.Username.firstname);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}
// const obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
