// var btn = document.querySelector('.just');
// var theme_btn = document.querySelector('.game_screen');

// function clickme(){
//     btn.style.display = 'block';
//     theme_btn.style.display = 'none';
// }

// function myClick(){
//     theme_btn.style.display = 'block';
//     btn.style.display = 'none';
// }

// var btn = document.querySelector('.just');
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
