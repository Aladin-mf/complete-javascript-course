'use strict';
// let f
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b =666;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g()
// f()
// h()
// f()

// const boardPassenger=function(n,wait){
// const perGroup=n/3
// setTimeout(function(){
//   console.log(`we are now boarding all ${n} passengers`);
//   console.log(`there are 3 groups, each with ${perGroup} passengers`);

// },wait*1000)

// console.log(`we are about to board all the passengers in ${wait} seconds`);

// }
// boardPassenger(180,5)

(function () {
  const header = document.querySelector(`h1`);
  header.style.color = `red`
  
    document.querySelector(`body`).addEventListener('click', function () {
      header.style.color = `blue`;
    })
})();
