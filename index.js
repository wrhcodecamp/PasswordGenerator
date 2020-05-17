function makePassword() {
	let length = "";

	let special = "!@#$%^&*()/?<>,.|-_=+";
	let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
	let lower = "qwertyuiopasdfghjklzxcvbnm";
	let digits = "0123456789";

	let password = "";

	/*for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
  }*/

	let choices =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
}
var length = prompt(
	"Please enter password length",
	"8-128 characters ONLY INTEGERS"
);

if (length >= 8 && length <= 128 && Number.isInteger(length)) {
	alert(length);
} else {
	alert("Please pick a number between 8-128 that is an integer");
}
for (var i = 0; i < length - 1; i++) {
	console.log("it works");
}
