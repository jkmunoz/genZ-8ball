// client's username..
var userName = 'Julianna';
// User's questions.
var userQuestion = 'Will my tikTok video go viral?';
// Random number between 0 and 7.
var randomNumber = Math.floor(Math.random() * 8);
// Random eightball message. 
var eightBall = randomNumber;

// This generates two seperate responses depending on if a username is given or not.).
if (userName) {
    console.log(`Hello, ${userName}`);
} else {
    console.log('Hello!');
}

// This will pring after the user gives us their name nad question. 
// It returns the question back. 
console.log(`Ah! I see ${userName}, you want to know ${userQuestion}. 
Let's have a look...`)

// Switch statement that pairs a response with a random number. 
console.log(`*Shakes eightball*`);
switch (eightBall) {
    case 0:
        console.log('For sure, my guy!.');
        break;
    case 1:
        console.log('Bet. No Cap. On God.');
        break;
    case 2:
        console.log('Go for it Sis!');
        break;
    case 3:
        console.log("Get those W's");
        break;
    case 4:
        console.log("This ain't it cheif.");
        break;
    case 5:
        console.log("You future is giving L's.");
        break;
    case 6:
        console.log('Outlook is mid.');
        break;
    case 7:
        console.log("It's giving sus vibes.");
        break;
}