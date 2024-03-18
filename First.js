let name = "sathvik";
let age = 45;
let address = "fathimanagar";

const greet = (name) => {
  console.log(`Hello ${name}`);
};

const say = () => {
  console.log("Hello world");
};

module.exports = { name, age }; // we can pass the arguments as object  (or) we can simply pass if there is only one variable to export
