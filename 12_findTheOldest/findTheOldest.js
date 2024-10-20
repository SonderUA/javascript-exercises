const findTheOldest = function (arr) {
	return arr
		.map((item) => {
			if (item.yearOfDeath) {
				return item;
			}
			item.yearOfDeath = new Date().getFullYear();
			return item;
		})
		.sort((a, b) => {
			aFullYear = a.yearOfDeath - a.yearOfBirth;
			bFullYear = b.yearOfDeath - b.yearOfBirth;
			return aFullYear > bFullYear ? -1 : 1;
		})[0];
};

// Do not edit below this line
module.exports = findTheOldest;
