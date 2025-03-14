// 1 one d, two d array => []
const oned = [1, 2, 3, 4, 5];
console.log("1-D", oned);
const twod = [
    ["A", "B"],//0
    [5, 6],//1
    ["C", "D"]  //2
];
console.log("2-D", twod);
// number of elements in array = length
console.log("Number 1-D", oned.length);
console.log("Number of 2nd elements in 2-D: ", twod[1].length);

// 2. Scope of variables in function
let a = 5;//global variable
function outer(name) {
    console.log("Outer function: "+ a);
    console.log("Outer function: "+ name);
    function inner() {
        let b = 10;//local variable
        console.log("Inner function: "+ a);
        console.log("Inner function: "+ b);// local var
        console.log("Inner function: "+ name);// global var
    }
    // console.log("Inner function: "+ b);// undefined, not work
    inner();
}
outer("Ace");
// 3 EXAMPLE
// SYNTAX => class ClassName {}
// name, address, city
// pass the parameters/ args => constructor
class Customer{
    constructor(name, address, city){
        this.name = name;
        this.address = address;
        this.city = city;
    }
}
// need to create instance =>  new
let cust1 = new Customer("Ace", "123 Yonge Street", "Toronto");
let cust2 = new Customer("Jezrel", "321 Casar Street", "Otawa");
console.log("Customer 1: ", cust1);
console.log("Customer 2: ", cust2);
// 4 CALLBACK FUNCTION
function SumAndAvg(numbers, callback){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]; // Add 
    }
    let avg = sum / numbers.length;
    let product = ""
    callback(sum, avg, product);
    callback(sum, avg);
}
function displaySumAvg(sum, avg){
    console.log("Sum: "+ sum);
    console.log("Average: "+ avg);
}
SumAndAvg([1, 2], displaySumAvg);
SumAndAvg([5, 5], displaySumAvg);
// 5. JSON
const person = {
    name: "Ace",
    age: 234567,
    city: "Toronto"
}
// Convert JSON to string => JSON.stringify()
// let conv_str = JSON.toString();
// console.log(conv_str);
let conv_str2 = JSON.stringify(person);
console.log(conv_str2);

