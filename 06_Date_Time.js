let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
console.log('\n');

let myCreateDate = new Date(2025,0,23)
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());
console.log('\n');

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log('\n');

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log('\n');
console.log(newDate.toLocaleDateString('default',
    {weekday:"long",
    year:"2-digit",
    month:"long",
    day:"2-digit"
    }));


