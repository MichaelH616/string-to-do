// Remove blanks

//loop through string
// if the index is not blank, add it to a new string

function removeBlanks(string) {
    let newString = "";
    for (let i = 0; i<string.length; i++) {
        if (string[i] != " ") {
            newString += string[i];
        }
    }
    
    console.log(newString);
}

removeBlanks(" Pl ayTha tF u nkyM usi c ");
removeBlanks("I can not BELIEVE it's not BUTTER");

// Get Digits

// loop through string looking for numbers
// if it is a number add it to a new string of numbers

function getDigits(string) {
    let num = "";
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string[i])){
            num += string[i]
        }
    }
    console.log(num);
    }

getDigits("abc8c0d1ngd0j0!8");
getDigits("0s1a3y5w7h9a2t4?6!8?0");

// Acronyms

// split the string into an array of words
// check if first character is not empty
// take the first letter of each word, capitalize it, then return it to a new string 

function acronym(string) {
    let stringArr = string.split(" ");
    let stringAcronym = "";
    // console.log(stringArr);
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i].length > 0) {
            stringAcronym += stringArr[i][0].toUpperCase();
        }
        
    }
    console.log(stringAcronym);
}

acronym(" there's no free lunch - gotta pay yer way. ")
acronym("Live from New York, it's Saturday Night!")

// Count Non-Spaces

// loop through string check if character is a non-space
// increase count of characters

function countNonSpaces(string) {
    let charCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            charCount += 1;
        }
    }
    console.log(charCount);
}

countNonSpaces("Honey pie, you are driving me crazy")
countNonSpaces("Hello world !")

// Remove Short Strings

// loop through array of strings check if length is greater than num provided
// if true return the value in new array

function removeShorterStrings(stringArr, num) {
    let shortArr = [];
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i].length >= num ) {
            shortArr.push(stringArr[i]);
        }
    }
    console.log(shortArr);
}

removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) 
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)


