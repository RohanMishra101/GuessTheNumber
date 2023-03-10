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

var _getWord = document.querySelector('.givenWord');
var _getKeyWord = document.querySelector('.button');

function getRandNum(){
    var randomNumber = Math.floor(Math.random() * 20);
    return randomNumber;
}

function countryCity(){
    themeScreen.style.display = 'none';
    gameMain.style.display = 'block';
    var _randNum = getRandNum();
    var _givenWord = countriesCities[_randNum];
    console.log(_givenWord.length);
    // var underScores = "_".repeat(_givenWord.length);
    var underScores = _givenWord.replace(/[a-z]/gi, '_ ');
    _getWord.textContent = underScores;
    console.log(_givenWord);
}