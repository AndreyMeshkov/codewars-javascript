//
// Removing Elements
//
// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.
//
// 	Example:
//
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
	return arr.filter(function(el, index) {
		return index % 2 === 0;
	});
}

// or arrow function
// const removeEveryOther = (arr) => arr.filter((el,index) => index % 2 === 0);
