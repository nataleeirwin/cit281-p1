/*
    CIT 281 Project 1
    Name: Natalee Irwin
*/

let today = new Date();
function dayOfWeek() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[today.getDay()];
}

console.log(dayOfWeek());