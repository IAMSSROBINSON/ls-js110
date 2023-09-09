let memberDirectory = { // variable declaration, initialized to global object
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidName(name) { 
  // return (/^\w+ \w+$/).test(name); //  returns boolean true if the the argument matches the pattern of a word or character that consists of uppercase, lowercase, digits or underscores followed by a space, follows again by a word, character, digit or underscore. Otherwise returns false.
  return /^[A-Za-z]+ [A-Za-z]+$/i.test(name); // return boolean true if an alphabetical string of one or more characters followed by a space followed by the same exists within the argument. Otherwise it returns false.
}

function isValidPhone(phone) {
  return (/^\d{3}-\d{4}$/).test(phone); // returns true if the argument follows the patterns of 3digits, followed by a dash followed by 4 digits. Otherwise it returns false.
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone); // uses the logical AND operator to evaluate both operands for truthiness. If they both evaluate to truthy values then the operator returns true, otherwise returns false. So both the name validation and phone validation must evaluated to a truthy value respectively for the function to return true.
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) { // if validation evaluates to true for both arguments
    memberDirectory[name] = phone; // add the name to the object property and assign the phone to the value to create a key : value pair
  } else {
    console.log('Invalid member information.'); // if validation does not evaluate to true the output this error message to the console
  }
}

addMember('Laura Carlisle', '444-2223');
addMember('Rachel Garcia', '232-1191');
addMember('Earl 5mith', '331-9191'); // this now produces an error message as intended since the name string contains a digit
addMember('Alexander III', '500-9991'); // The firstName does not have to start with an uppercase character and the lastName does not have to be an uppercase character followed by lowercase characters => this was done to accommodate a range of type of names and titles.

console.log(memberDirectory);

/*

Caroline manages the member directory of her club and decided to implement a program she can use for doing that. Since the club is not very big, it's sufficient for her to keep the members' names and phone numbers in an object. Later she wants to add functionality that allows her to write this object to a file.

One requirement Caroline takes very seriously is input validation. She intended for her code to strictly require that only alphabetic letters be included in the members' first and last names, separated by a space. But upon making a typo when entering the information of the newest member, she realizes that isn't the case.

Figure out why not and fix the code so that it works as expected. You may also consider writing a few more test cases to ensure that the input validation requirement is properly met.

=> only alphabetic chars for first and last names separated by a space
  - Earl 5mith passes the test when it should not

The regular expression /^\w+ \w+$/ breaks down as such:

/ / forward slashes indicate a regular expression pattern to test within the slashes
^ carat ensures the pattern is matches from the start of a string
\w+ matches a word, string, uppercase, lowercase, digit or underscore_ match
' ' empty character space checks for the above string separated by a space
\w+ matches a word, string, uppercase, lowercase, digit or underscore_ match
$ ensures the pattern matches up until the end of the string or line and not just match part of the string

So the current regex is allowing the input string to contain digits which is not want we want. If the input string contains a digit it should invoke the else clause on line 24 to output an error message to the console.

To fix this we can alter the regular expression to only include alphabetical characters for the first name and last name separated by a space. A question I would ask it whether requirement should accept both uppercase and lowercase characters as inputs. The test cases indicate that they should be uppercase although it would be reasonable to accept lowercase inputs and then coerce the first characters of the first name and last name to uppercase if they are not as such already.

This regular expression will check for: /^[A-Z][a-z]* [A-Z][a-z]*$/

/ => start of a regEx pattern
^ => check from the start of the input or newline
[A-Z] => check for an alphabetical character starting with uppercase for first name
[a-z]+ => follow on from uppercase character to check for one or more alphabetical characters in lowercase (* => one or more)
' ' => check for a space to separate the first name from the last name
[A-Z] => check for an alphabetical character starting with uppercase for last name
[a-z]+ => follow on from uppercase character to check for one or more alphabetical characters in lowercase (* => one or more)
$ => check until the end of the input or newline
/ => end of a regEx pattern

If the manager wanted to open the inputs up to allow for upper and lowercase entries then a similar regular expression could be used but with some alterations:

/^[A-Za-z]+ [A-Za-z]+$/ or
/^[a-z]+ [a-z]$/i (where the `i` states that the argument is case insensitive) 

*/