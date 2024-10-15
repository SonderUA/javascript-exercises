function sumBetween(a, b) {
	let sum = 0;
	for (let i = a; i <= b; i++) {
		sum += i;
	}
	return sum;
}

const sumAll = function (num1, num2) {
	if (
		!Number.isInteger(num1) ||
		!Number.isInteger(num2) ||
		num1 < 0 ||
		num2 < 0
	) {
		return "ERROR";
	}

	return num1 <= num2 ? sumBetween(num1, num2) : sumBetween(num2, num1);
};

// Do not edit below this line
module.exports = sumAll;
