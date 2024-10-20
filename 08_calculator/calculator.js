const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	return arr.reduce((total, item) => total + item, 0);
};

const multiply = function (arr) {
	return arr.reduce((total, item) => total * item, 1);
};

const power = function (a, b) {
	return a ** b;
};

const factorial = function (num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		arr.push(i);
	}
	return arr.reduce((total, item) => total * item, 1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
