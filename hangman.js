// Transition of Game Screen
var themeScreen = document.querySelector('.themePicker_screen');
var gameMain = document.querySelector('.mainGame_screen');

function clickme(){
    themeScreen.style.display = 'none';
    gameMain.style.display = 'block';
}

function myClick(){
    themeScreen.style.display = 'block';
    gameMain.style.display = 'none';
}

// Gameplay Code


// Movies array
const movies = [
    "The Godfather",
    "The Shawshank Redemption",
    "The Dark Knight",
    "Forrest Gump",
    "Pulp Fiction",
    "The Lord of the Rings",
    "The Matrix",
    "Star Wars",
    "The Silence of the Lambs",
    "Goodfellas",
    "The Green Mile",
    "Schindler's List",
    "Gladiator",
    "Fight Club",
    "Inception",
    "The Prestige",
    "The Departed",
    "The Avengers",
    "Jurassic Park",
    "Titanic"
];
  
// Countries and Cities array
const countriesCities = [
    "Paris",
    "New York",
    "Tokyo",
    "London",
    "Barcelona",
    "Rome",
    "Amsterdam",
    "Berlin",
    "Dubai",
    "Sydney",
    "Hong Kong",
    "Rio de Janeiro",
    "Los Angeles",
    "Istanbul",
    "Moscow",
    "Seoul",
    "Madrid",
    "Toronto",
    "Mumbai",
    "Buenos Aires"
];
  
// Sports team and athletes array
const sports = [
    "Real Madrid",
    "Barcelona",
    "Manchester United",
    "New England Patriots",
    "Los Angeles Lakers",
    "Chicago Bulls",
    "Tiger Woods",
    "Serena Williams",
    "Cristiano Ronaldo",
    "Lionel Messi",
    "LeBron James",
    "Tom Brady",
    "Usain Bolt",
    "Michael Phelps",
    "Roger Federer",
    "Rafael Nadal",
    "Muhammad Ali",
    "Mike Tyson",
    "Manny Pacquiao",
    "Floyd Mayweather"
];
  
// Animal array
const animals = [
    "Lion",
    "Elephant",
    "Giraffe",
    "Tiger",
    "Kangaroo",
    "Hippopotamus",
    "Zebra",
    "Panda",
    "Gorilla",
    "Penguin",
    "Koala",
    "Crocodile",
    "Alligator",
    "Leopard",
    "Cheetah",
    "Rhino",
    "Gazelle",
    "Moose",
    "Puma",
    "Jaguar"
]; 
// Mixed array

movies.sort(() => Math.random() - 0.5);
countriesCities.sort(() => Math.random() - 0.5);
sports.sort(() => Math.random() - 0.5);
animals.sort(() => Math.random() - 0.5);


//Gusses limit
var guesses = 0;
var maxGuesses = 6;
var guessedLetters = [];
var _givenWord
// Concatenate the arrays together
const mixed = movies.concat(countriesCities, sports, animals);


var _getWord = document.querySelector('.givenWord');
var _getKeyWord = document.querySelector('.button');
var textbox = document.getElementById("guess_word");
var _wordCount = document.querySelector('#WordCount');

function getRandNum(){
    var randomNumber = Math.floor(Math.random() * 20);
    return randomNumber;
}

function countryCity(){
    themeScreen.style.display = 'none';
    gameMain.style.display = 'block';
    var _randNum = getRandNum();
    _givenWord = countriesCities[_randNum].toUpperCase();
    console.log(_givenWord.length);
    // var underScores = "_".repeat(_givenWord.length);
    // var underScores = _givenWord.replace(/[a-z]/gi, '_ ');
    var underScores = _givenWord.replace(/[a-z]/gi, '_').replace(/\s/g, '  ');
    _wordCount.textContent = "Word Count : " + _givenWord.length;
    _getWord.textContent = underScores;
    console.log(_givenWord);
}



// Function to check if the guessed letter is correct
function checkGuess(){
    var textboxValue = textbox.value.toUpperCase();
    console.log(textboxValue);
    
    for(var i = 0; i < _givenWord.length; i++){
        if(textboxValue == _givenWord[i]){
            
        }
    }

    // if(textboxValue == _givenWord){
    //     alert("You Won!! The wor was" + _givenWord);
    // }
}

