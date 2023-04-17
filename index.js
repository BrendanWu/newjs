const dataGetter = require("./dataset_1");
console.log("Console log");

console.log("Developers are not vim experts, cloud technicians skills required.");

console.log("There are things developers do that will change using CHATGPT");

const data = dataGetter();
console.log(data)
for(let i = 0; i < Object.entries(data).length; i++){
    console.log(Object.entries(data)[i][1])
}