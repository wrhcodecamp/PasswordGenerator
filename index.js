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
	}
}
