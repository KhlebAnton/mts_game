const btnInfoMenu = document.getElementById('btn_info_menu');
const btnInfoGame = document.getElementById('btn_info_game');
const startMenu = document.getElementById('start_menu');
const instruction = document.getElementById('instruction');
const main = document.getElementById('main');
const startGame = document.getElementById('start_game');
const game = document.getElementById('game');

let screenHiden;
function showInstruction(screen) {
    screenHiden = screen.closest('.screen');
    screenHiden.classList.add("hidden");
    instruction.classList.remove("hidden");
}
function hideInstruction() {
    screenHiden.classList.remove("hidden");
    instruction.classList.add("hidden");
}


function showStartGame() {
    startMenu.classList.add("hidden");
    startGame.classList.remove("hidden");
}

function showGame() {
    toggleBackImage();
    startGame.classList.add("hidden");
    game.classList.remove('hidden')
}

function toggleBackImage() {
    document.querySelector('body').classList.toggle('bg_image')
}