//const names = ["james, art, jr, don"];

// console.log(`this names is ${names[Math.floor(Math.random() * names.length -1) + 1]}`)
// console.log(names)

// console.log(`the number is ${1+4}`);

//============================================================================================================

// const user = {
//   name: "don",
//   age: 30,
//   employed: false,
//   salary: 105000,
//   position: "Software Engineer"
// }
//
// console.log(`I am ${user.name}, ${user.age}. I am not ${user.employed}, I am looking for a ${user.position} with a salary of ${user.salary}. ` )




//============================================================================================================

function request(page, id){

  const URL = `http://server.com/${page}/${id}`;

  console.log(`this is URL ${URL}`)
}
request('pages', 5)
