// complete the given function

function palindrome(str){

	let start = 0;
	let end = str.length-1;

	while(start<=end) {
		if(str[start] != str[end]) {
			return false;
			break;
		}
		start++;
		end--;
	}
	return true;
}
module.exports = palindrome
