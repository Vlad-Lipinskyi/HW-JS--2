// Зберігання температури за Цельсієм та Фаренгейтом
const tempC = 31;
const tempF = tempC * 9/5 + 32;
console.log(tempF);

console.log("");

// Зберігання кількості днів у місяці
const days = 30;
const hours = days * 24;
const minutes = hours * 60;
console.log(hours); 
console.log(minutes);

console.log("");

// Зберігання рівня здоров'я та енергії гравця
let health = 100;
let energy = 100;
health -= 20;
energy -= 30;
console.log(health); 
console.log(energy); 

console.log("");

// Зберігання суми покупки в магазині
let price = 1000;
let priceSale = price * 0.9;
console.log(priceSale); 

console.log("");

// Зберігання числа з плаваючою комою
let notIntegerNumber = 7.52;
console.log(Math.floor(notIntegerNumber));

console.log("");

// Зберігання рядка, який містить числа з плаваючою комою
let numberString = "45.67";
console.log(parseFloat(numberString)); 

console.log("");

// Зберігання рядка, який містить ціле число
let integerString = "1000";
console.log(parseInt(integerString));

console.log("");

// Зберігання числа та обчислення квадратного кореня
let numberSqrt = 64;
console.log(Math.sqrt(numberSqrt));

console.log("");

// Перетворення рядка у ціле число та цілочисельного значення у рядок
let integerNumberr = 50;
let stringNumber = "75";
console.log(parseInt(stringNumber)); 
console.log(integerNumberr.toString()); 