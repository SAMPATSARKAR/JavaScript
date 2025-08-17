const User = {
    username:"Sampat",
    IsloggedIn:true
}
function handleObj(anyobj){
    console.log(`username is ${anyobj.username} and he/she is loggged in: ${anyobj.IsloggedIn}`);
}
handleObj(User);