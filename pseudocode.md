GOAL: MAKE RANDOMIZED SECURE PASSWORDS
ON CLICK BEGIN THE FUNCTION
PROMPTED TO PICK PASSWORD LENGTH
ASKED FOR LENGTH OF PASSWORD 8-128 CHARACTERS
ASK CRITERIA FOR PASSWORD
NUMBER UPPER LOWER AND SPECIAL
THEY MUST CHOOSE AT LEAST ONE
THEN THE PASSWORD IS GENERATED TO THEIR SPEFICICATIONS

/_onclick begin function (PASSWORD)
prompt the user for LENGTH
it must be whole digits, geater than 7 and less than 129
store this in a variable
prompt them for CRITERIA of passwords and store that in an array
or seperate variables? (boolean?)
if a CRITERIAis met, then it will be included in picking from an array of the right CHARACTERS randomly
(the generation itself seems the hard part)
then store that in a value and alert it to the user_/

Set variables for the password itself, the choices on how to make the password, and an array for the selected components to contatone.

set length to be equal to whataver is put into the promt
if lenght is equal to or greater that 8, equal to or less than 128, and length is an integer, move forward, if not tell them to put in a proper answer.

prompt all the choices and store then in an array. randomly concatonate the string and store it to password, then show them the password
