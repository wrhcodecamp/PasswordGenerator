GOAL: MAKE RANDOMIZED SECURE PASSWORDS
ON CLICK BEGIN THE FUNCTION
PROMPTED TO PICK PASSWORD LENGTH
ASKED FOR LENGTH OF PASSWORD 8-128 CHARACTERS
ASK CRITERIA FOR PASSWORD
NUMBER UPPER LOWER AND SPECIAL
THEY MUST CHOOSE AT LEAST ONE
THEN THE PASSWORD IS GENERATED TO THEIR SPEFICICATIONS

// Array of special characters to be included in the password
// Array of numeric characters to be included in the password
// Array of lowercase characters to be included in the password
// Array of uppercase characters to be included in the password
//you did this
// Function to prompt user for password options
// variable to store the length of password from user input
//your if conditional is wrong you need to figure out why it is wrong
// Conditional statement to check if password length is a number. Prompts end if this evaluates false
// Conditional statement to check if password length is at least eight characters long. Prompts end if this evaluates false
// variable to store boolean regarding the inclusion of special characters
// variable to store boolean regarding the inclusion of numeric characters
// variable to store boolean regarding the inclusion of lowercase characters
// variable to store boolean regarding the inclusion of uppercase characters
// Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
// Object to store user input
// Function for getting a random element from an array
// Function to generate password with user input
// variable to store the password as it’s being concatenated
// Array to store types of characters to include in the password
// Array to contain one of each type of chosen character to ensure each will be used
// Conditional statement that adds an Array of special characters into an Array of possible characters based on user input
// Push new random special character to var guaranteedCharacters
// Conditional statement that adds an Array of numeric characters into an Array of possible characters based on user input
// Push new random special character to var guaranteedCharacters
// Conditional statement that adds an Array of lowercase characters into an Array of possible characters based on user input
// Push new random lower-cased character to var guaranteedCharacters
// Conditional statement that adds an Array of uppercase characters into an Array of possible characters based on user input
// Push new random upper-cased character to var guaranteedCharacters
// For loop to iterate over the password length from the options object, selecting random indices from the Array of possible characters and concatenating those characters into the result variable
// Mix in at least one of each guaranteed character in the result
// Transform the result into a string and pass into var writePassword
// Get references to the #generate Button
// Write password to the #password input
// Add event listener to generate button
