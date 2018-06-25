function returnEmployee(){
  let name = "Don";
  let age = 30;
  let position = 'Software Engineer';
  let salary = 105000;

  //ES5
  // console.log("His name is " + name + " , He is " + age + " years old, He works as a " + position + " and getting paid a " + salary + " a year." )


  // ES6 the back ticks tricks
  console.log(`His name is ${name}, He is ${age} years old, He works as a ${position} ang getting paid a ${salary} a year. `)
}

returnEmployee();
