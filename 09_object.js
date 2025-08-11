const mysys = Symbol("key1")
const JsUser = {
    name:"Sampat",
    "full name": "Sampat Sarkar",
    [mysys]:"myKey1",
    age :18,
    location :"Jaipur",
    email:"sampatsarkar@gmail.com",
    isLoggedIn:false,
    lastLogonDays:["Monday","Saturday"]
    
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysys]);
// console.log(typeof JsUser[mysys]);

JsUser.email="Sampat@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="Sampat@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Sampat");
}
JsUser.greetingTwo= function(){
    console.log(`Hello JsUser, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
