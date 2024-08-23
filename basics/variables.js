const accountId  = 21231123;
let accountEmail = "saugat@gmail.com";
var accountPassword = "1231213";
accountCity = "Ktm";
let hey = null;

accountEmail = "saugat2@gmail.com";
accountPassword = "1031213";
accountCity = "PKR";

console.log(accountEmail);
console.table([accountPassword, accountId, accountEmail, accountCity, hey]);

// for (let i = 1; i <= 5; i++) {
//   let stars = "";

//   // Adding spaces before the stars
//   for (let j = 1; j <= 5 - i; j++) {
//     stars += " ";
//   }

//   // Adding stars
//   for (let k = 1; k <= i; k++) {
//     stars += "*";
//   }

//   console.log(stars);
// }

let iteration = 10;
for (i = 1; i < iteration; i++) {
  let star = "";
  
  for (let j = 1; j < Math.abs(iteration-i*2); j++) {
      star += " ";
    }
  
      star += "*";


  // for(k=1; k<i-j; k++){
  // }
  console.log(star);
}