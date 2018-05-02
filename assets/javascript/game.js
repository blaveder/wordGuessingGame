/*
PSUEDO CODE: 

Player hits any key to start game;

Display wins
Display current score
Display remaining guesses
Display letters guessed
Display hint button

Word is chosen by random in an array;
Words length is displayed with underscores (ie: HITMAN = _ _ _ _ _ _);
Player hits keys to guess hidden letters;
if the letter matches a letter in word the member gets a point.
if player guesses letter, tries stay the same; 
player is allowed 10 tries to guess word;
if player knows whole word they can enter it;
display letters player guessed below;
if turns equals zero and word not displayed - player loses;
if turns is greater than zero and player guesses word - player wins;
********************************hint button shows a letter ***************************;
if game over prompt to play again !

NOW CODE IT.

NEW PSUEDO CODE...REMEMBER BREAK IT THE FUCK DOWN...LIKE ELI5 ....TO A COMPUTER!

page opens.
confirm appears asking if they want to play
player clicks yes.
players action gets stored in a variable.
computer picks a movie title out of an array to use for the word.
blanks are shown to represent the letters of the word to guess.
example: word = Rudy. 4 blank lines will be present.

Wins score is set to 0
Losses score set to 0
Letters used area is clear of any letters
wining box that shows the image is empty;

Player ---------------
sees how many letters need to be solved.
picks letters to use from keyboard.
they get 6 chances + number of letters needed to guess.
ex: RUDY so player gets 10 tries.
when player picks a letter, its is displayed under "letters used"
number of guesses is substracted by 1.
if player picks correct letter: it is shown in the box and replaces the blank tile
game plays until : player wins, or number of guesses equals 0.
if player wins. "wins" is + 1.
if player losses "Losses" is + 1
prompt if they would like to play again.

reset:
computer picks movie at random.
blank tiles show how many letters
number of guesses is set to 0;
letters used is set to 0


*/
// GLOBAL VARIABLES
var words = ["labyrinth","topgun", "et","aliens"];
wins = 0;
losses = 0;
var score = 0;
var guesses = 12;
var lettersGuessed = [];
var complete = false;
var emptyMovie =[];
var guess = [];


// CODE TO STARTS GAME
startGame = function() {
    var beginGame = confirm("do you want to play");
    document.getElementById("winNumber").innerHTML = wins;
    document.getElementById("lossNumber").innerHTML = losses;
    document.getElementById("mylives").innerHTML = guesses;
    
    // CAPTURE KEYSTROKES
    

    if (beginGame === true) {
       
        emptyMovie =  words[Math.floor(Math.random()*words.length)];
        //checking my codes
        console.log(emptyMovie);

        //make blank lines for letters
        var seperateLetters = [];
        for(var i=0; i < emptyMovie.length; i++) {
            seperateLetters[i] = "_";
            
          document.getElementById("wordBox").innerHTML = seperateLetters.join("");
        };
        document.onkeyup = function(event) {
            var letter = String.fromCharCode(event.keyCode).toLowerCase();
            console.log(letter);

            for(var j = 0; j < emptyMovie.length; j++) {
                if(letter == emptyMovie[j]) {
                    
                    seperateLetters[j] = letter;
                    document.getElementById("wordBox").innerHTML = seperateLetters.join("");
                    console.log(seperateLetters);
                } 
            }
        }
        
// // GUESSING LETTERS 

// RESET GAME
    } else {
        console.log("player doesn't wish to play");
    }
}
 
