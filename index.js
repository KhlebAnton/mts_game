const btnInfoMenu = document.getElementById('btn_info_menu');
const btnInfoGame = document.getElementById('btn_info_game');
const startMenu = document.getElementById('start_menu');
const instruction = document.getElementById('instruction');
const main = document.getElementById('main');

const game = document.getElementById('game');
const winBoard = document.getElementById('win_board');


function next(hide, show) {
    hide.closest('.screen').classList.add('hidden');
    document.getElementById(`${show}`).classList.remove('hidden');
    showBtnAnimation(show)
}
document.body.style.height = window.innerHeight + 'px';

window.addEventListener('resize', function() {
  document.body.style.height = window.innerHeight + 'px';
});


//анимация кнопки
function showBtnAnimation(btn) {
    if(document.getElementById(`${btn}`).querySelector('.btn_start_game.animated')) {
        document.getElementById(`${btn}`).querySelector('.btn_start_game.animated').classList.add('go');
        setTimeout(()=> {
            document.getElementById(`${btn}`).querySelector('.btn_start_game.animated').classList.remove('go');
        },4000)
    }
}

// прозрачный фон 
function toggleBackImage() {
    document.querySelector('body').classList.toggle('bg_image');
}



//первый экран
function showStartMenu() {
    startMenu.classList.remove('hidden')
}
function hideStartMenu() {
    startMenu.classList.add('hidden')
}

//инструкция
let screenHiden; //с какого экрана вызван показ интсрукции(start_menu or game)
function showInstruction(screen) {
    screenHiden = screen.closest('.screen');
    screenHiden.classList.add("hidden");
    instruction.classList.remove("hidden");
}
function hideInstruction() {
    screenHiden.classList.remove("hidden");
    instruction.classList.add("hidden");
}

//показ этапа игры

function showStartGame(level) {
    startMenu.classList.add("hidden");
    document.getElementById(`start_game_${level}`).classList.remove("hidden");
}
function hideStartGame(level) {
    document.getElementById(`start_game_${level}`).classList.add("hidden");
}
//игра 
function showGame() {
    toggleBackImage();
    game.classList.remove('hidden')
}


// при прохождении уровня
function showWinBoard() {
    winBoard.classList.remove('hidden')
}
function HideWinBoard() {
    winBoard.classList.add('hidden')
}

/// sections
function showSection1(){
    document.getElementById('section_1').classList.remove('hidden')
}
function showSection2(){
    document.getElementById('section_2').classList.remove('hidden')
}
function showSection3(){
    document.getElementById('section_3').classList.remove('hidden')
}
function showSection4(){
    document.getElementById('section_4').classList.remove('hidden')
}
function showSection5(){
    document.getElementById('section_5').classList.remove('hidden')
}
function closeSection(section){
    section.closest('.screen').classList.add('hidden')
}

const video = document.querySelector('video');
function playVideo() {
    video.currentTime = 0;
    video.play();
}

function showVideo(elem) {
    elem.closest('.screen').classList.add('hidden')
    document.getElementById('video').classList.remove("hidden");

}