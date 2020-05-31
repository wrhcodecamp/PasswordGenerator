//set the randomly generated passwords length to null
var passLength = "";

//here im writing a function to take a string from the user
function passAskLength() {
	passLength = prompt("Enter your desired password length between 8-128");
	console.log(passLength);
	var passLengthInt = parseInt(passLength);

	if (
		passLength !== "" &&
		passLengthInt >= 8 &&
		passLengthInt <= 128 &&
		Number.isInteger(passLengthInt)
	) {
		alert("your pass is " + passLengthInt + " characters long");
		askPassCrit();
	} else {
		alert("please enter a proper whole number");
	}
}
function askPassCrit() {
	var lowercase = "abcdefghijklmnopqrstuvwxyz";
	var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numeric = "0123456789";
	var specialcharacter = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

	//figured out how to do this part with booleans i think

	var numericC = false;
	var lowercaseC = false;
	var uppercaseC = false;
	var specialcharacterC = false;
	NumericQ();
}
function NumericQ() {
	numericC = confirm("numeric character?");
	uppercaseQ();
}
function uppercaseQ() {
	uppercaseC = confirm("uppercase character?");
	lowercaseQ();
}
function lowercaseQ() {
	lowercaseC = confirm("lowercase character?");
	specialcharacterQ();
}
function specialcharacterQ() {
	specialcharacterC = confirm("special character?");
	validated();
}
function validated() {
	if (numericC===false && lowercaseC===false && uppercaseC===false && specialcharacterC===false) {
		alert("You must choose at least 1 yes");
	passAskLength();
	}
	else {
		alert("good");
	}
}
//here's where the code gets nasty