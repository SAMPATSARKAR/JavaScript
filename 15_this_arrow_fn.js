// const User = {
//     username :"Hitesh",
//     price : 999,
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);
//         console.log(this);
//     }
// }
// User.welcomeMessage();
// User.username="Sam";
// User.welcomeMessage();
// console.log(this);//as node/global variable has empty Obj

//-----------------------this doesnot work in function------------

// const chai = function(){
//     let username = "Hitesh"
//     console.log(this);//function has mnay methods
//     console.log(this.username);
    
// }
// chai()
// ------------------
// const chai = () => {
//     let username = "Hitesh"
//     console.log(this);//gives empty paranthesis
//     console.log(this.username);
    
// }
// chai()
// --------------------------
// const addtwo = (num1,nunm2)=>({usesrname:"Sampat"})
// console.log(addtwo(2,3));
// const add = (a,b) => a * b;
// console.log(add(2,3));

// const objt = {
//     name:"sampat",
//     rollno:4
// }
// console.log(Object.keys(objt));

const tinderUser = new Object();
tinderUser.username="Sampat"
tinderUser.city="New Delhi"
tinderUser.isLoggedin=true 
console.log(tinderUser);
console.log(Object.entries(tinderUser));
