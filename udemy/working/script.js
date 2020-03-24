/*condition ? expr1 : expr2;*/
function isUserValid(bool) {
	return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied";

var automatedAnswer =
	"Your account # is " + (isUserValid(false) ? "1234" : "Not available");
	
