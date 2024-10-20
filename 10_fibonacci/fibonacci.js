const fibonacci = function (num) {
	if (+num < 0) {
		return "OOPS";
	}
	let [start, result] = [1, 0];
	for (let i = 0; i < Math.floor(+num / 2); i++) {
		result += start; // 1 3 8 21 ...
		start += result; // 2 5 13 34 ...
	}
	return Number.isInteger(+num / 2) ? result : start;
};

// Do not edit below this line
module.exports = fibonacci;
