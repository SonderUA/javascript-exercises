const palindromes = function (string) {
	let filteredArray = string
		.split("")
		.filter((item) => {
			return item.match(/[a-z]/i) || item.match(/[0-9]/);
		})
		.map((item) => item.toLowerCase());
	let arrayCopy = filteredArray.join("");
	filteredArray = filteredArray.reverse().join("");

	return !arrayCopy.localeCompare(filteredArray);
};

// Do not edit below this line
module.exports = palindromes;
