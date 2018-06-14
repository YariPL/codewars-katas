//function take an array, then sorts all the elements
//inside by it's length from longer to shorter
//and then return the reversed array to pass the test

function sortByLength(array) {
  array.sort(function(a, b){
    return b.length - a.length;
  })
	return array.reverse();
};