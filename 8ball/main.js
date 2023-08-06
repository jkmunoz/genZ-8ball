// client's username..
var userName = 'Julianna';
// User's questions.
var userQuestion = 'Will my tikTok video go viral?';
// Random number between 0 and 7.
var randomNumber = Math.floor(Math.random() * 8);
// Random eightball message, chosen by the random number. 
var eightBall = randomNumber;

// This generates two seperate responses depending on if a username is given or not.).
if (userName) {
    console.log(`Hello, ${userName}!`);
} else {
    console.log('Hello!');
}

// This will pring after the user gives us their name nad question. 
// It returns the question back. 
console.log(`${userName} wants to know "${userQuestion}"
Let's see...`)

// Switch statement that pairs a response with a random number. 
console.log(`*Shakes eightball*`);
switch (eightBall) {
    case 0:
        console.log('Response: For sure, my guy!');
        break;
    case 1:
        console.log('Response: Bet. No Cap. On God.');
        break;
    case 2:
        console.log('Response: Go for it Sis!');
        break;
    case 3:
        console.log("Response: Get those W's");
        break;
    case 4:
        console.log("response: This ain't it cheif.");
        break;
    case 5:
        console.log("Response: You future is giving L's.");
        break;
    case 6:
        console.log('response: Outlook is mid.');
        break;
    case 7:
        console.log("response: It's giving sus vibes.");
        break;
}