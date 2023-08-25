let on_this_p = document.querySelector("#on_this_p");
let reset_btn = document.querySelector("#reset_btn");
let stored_data = document.querySelectorAll("[data-value]");

stored_data.forEach((option) => {
  option.addEventListener("change", (e) => {
    on_this_p.style[option.dataset.value] = e.target.value;
  });
});

reset_btn.addEventListener("click", (e) => {
  stored_data.forEach((option) => {
    on_this_p.style[option.dataset.value] = "";
  });
});

//``````````````````` Defining a Constructor```````````````````

// function Car(make, model, year){
// this.make = make;
// this.model = model;
// this.year = year;
// this.setkm = function(miles){
//   this.miles = miles
//  }
// }
// // Using a constructor
// const car1 = new Car('Toyota', 'Prius', 2000);

// // Adding method to the constructor prototype
// // Car.prototype.age = function(){
// // return (new Date()).getFullYear() - this.year;
// // }
// // car1.age();

// // console.log(car1)
// let car2 = new Car("Toyota", "Corolla", 2020);
// car2.setkm(1000);
// console.log(car2);var ourArry = [10, 20, 30];

// var ourArry = [10, 20, 30];
// ourArry[2] = 44;

// console.log(ourArry)
