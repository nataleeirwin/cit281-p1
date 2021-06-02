/*
    CIT 281 Project 1
    Name: Natalee Irwin
*/

/*Return a string of lowercase letters with a random length of 
between 5 and 25 characters (range inclusive)*/


//first generate random string length
function stringLength() {
    let min = 5
    let max = 25
    return Math.floor(Math.random() * (max - min + 1) + min );
}

//generate the random letter string given length from stringLength function
function randomString(length) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let result = " ";
    for (let i = 0; i < length; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
}
 console.log(randomString(stringLength()));
