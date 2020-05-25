var theButton = document.getElementById("passBtn");
var passLength = "";
function passAskLength() {
	passLength = prompt("Enter your desired password length between 8-128");
	console.log(passLength);
}
// now we have to make pass length into an int so it can be validated this fixes why it didnt work last time

var passLengthInt = parseInt(passLength);

if (
	passLength !== "" &&
	passLengthInt >= 8 &&
	passLengthInt <= 128 &&
	Number.isInteger(passLengthInt === true)
) {
	alert("your pass is" + passLengthInt + "characters long");
}
