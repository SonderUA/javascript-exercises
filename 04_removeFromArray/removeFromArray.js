const removeFromArray = function (array, ...args) {
	let result = array.filter((element) => {
		isThere = true;
		for (const arg of args) {
			if (element === arg) {
				isThere = false;
				break;
			}
		}
		return isThere;
	});
	return result;
};

// Do not edit below this line
module.exports = removeFromArray;
