const btnInfoMenu = document.getElementById('btn_info_menu');
const btnInfoGame = document.getElementById('btn_info_game');
const startMenu = document.getElementById('start_menu');
const instruction = document.getElementById('instruction');
const main = document.getElementById('main');

const game = document.getElementById('game');
const winBoard = document.getElementById('win_board');


function next(hide, show) {
    $('.screen').addClass('hidden');
    document.getElementById(`${show}`).classList.remove('hidden');
    showBtnAnimation(show);
    showLoadingProgress(0)
}
//document.body.style.height = window.innerHeight + 'px';

window.addEventListener('resize', function() {
  //document.body.style.height = window.innerHeight + 'px';
});

//copy promo
function copyPromo() {
    let promo = document.getElementById('copy_promocode').textContent;
  
    navigator.clipboard.writeText(promo)
      .then(() => {
  
      })
      .catch(err => {
        console.log('Something went wrong', err);
      });
  }


//анимация кнопки
function showBtnAnimation(btn) {
    if(document.getElementById(`${btn}`).querySelector('.btn_start_game.animated')) {
        document.getElementById(`${btn}`).querySelector('.btn_start_game.animated').classList.add('go');
        /*setTimeout(()=> {
            document.getElementById(`${btn}`).querySelector('.btn_start_game.animated').classList.remove('go');
        },4000)*/
    }
}
function showLoadingProgress(num){
    if(num < 15)
        num = 15;
    //$('.btn_start_game.animated.go:after').css("width",num+"%");
    $("body").append('<style>.btn_start_game.animated.go::after{width: ' + num + '%;}</style>');
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

//menu
let screenHidenMenu;
const menuScreen = document.getElementById('menu');
function showMenu(screen) {
    menuScreen.classList.remove('hidden');
    screenHidenMenu = screen.closest('.screen');
    screenHidenMenu.classList.add("hidden");
};
function hideMenu() {
    menuScreen.classList.add('hidden');
    screenHidenMenu.classList.remove("hidden");
};

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
    if(!tip_flags[0]) {
        tip_flags[0] = true;
        document.getElementById('section_1').classList.remove('hidden')
    }
}
function showSection2(){
    if(!tip_flags[1]) {
        tip_flags[1] = true;
        document.getElementById('section_2').classList.remove('hidden')
    }
}
function showSection3(){
    //if(!tip_flags[2]) {
        tip_flags[2] = true;
        document.getElementById('section_3').classList.remove('hidden')
    //}
}
function showSection4(){
    if(!tip_flags[3]) {
        tip_flags[3] = true;
        document.getElementById('section_4').classList.remove('hidden')
    }
}
function showSection5(){
    if(!tip_flags[4]) {
        tip_flags[4] = true;
        document.getElementById('section_5').classList.remove('hidden')
    }
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

function sendMessageToApp(msg){
    window.parent.postMessage(msg, "*");
}
let wins = 0;
let tip_flags = [
    0,0,0,0,0
]
window.addEventListener('message', (msg) => {
    let first_game = true;
    msg = msg.data;
    console.log("receiveMessage " + msg)
    if (msg.includes("onContentLoading")) {
        $(".btn_start_game.animated").addClass("go")
        let progress = Math.round((msg.split(" ")[1]));
        console.log("onContentLoading " + progress)
        showLoadingProgress(progress)
        //percentElement.innerText = progress + '%';
    }
    if (msg.includes("onContentLoaded")) {
        console.log("onContentLoaded");
        $(".btn_start_game.animated.go").removeClass("go")
    }
    if(msg.includes("win")){
        wins++;
        if(wins<=3)
        next(null, 'win_board_'+wins)
        else {
            next(null, 'win_supergame')
            //+win_supergame_promo
        }

    }
    /*if(msg.includes("win1")){
        next(null, 'win_board_2')
    }
    if(msg.includes("win2")){
        next(null, 'win_board_3')
    }
    if(msg.includes("win3")){
        next(null, 'win_supergame')
    }*/
    if(msg.includes("tip1")){
        showSection1()
    }
    if(msg.includes("tip2")){
        showSection2()
    }
    if(msg.includes("tip3")){
        showSection3()
    }
    if(msg.includes("tip4")){
        showSection4()
    }
});

$(".section ").on("click",function(){
    $(this).addClass("hidden");
})


function startGame(index){
    sendMessageToApp("startGame "+index);
}
/*

$("body").on("click",function (){
    sendMessageToApp("log fff");
})*/

//slider
const slider = document.querySelector('.slider');
const sliders = document.querySelectorAll('.slide');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
let count = 0;
function nextSlide() {
   slidePrev.classList.remove('disabled')
   if(count != sliders.length - 1) {
    sliders[count].classList.remove('visible')
    sliders[count + 1].classList.add('visible')
    count++;
   }
   if(count != sliders.length - 2) { 
    slideNext.classList.add('disabled')
   }
}
function prevSlide() {
    slideNext.classList.remove('disabled')
    if(count != 0) {
     sliders[count].classList.remove('visible')
     sliders[count - 1].classList.add('visible')
     count= count - 1;
    }
    if(count === 0) { 
        slidePrev.classList.add('disabled')
       }
 }
const sliderBtn = document.querySelector('.slider-progress');
let countProgress = 60;
 function sliderProgress() {
    $("body").append('<style>.start_game .slider-progress.animated.go::after{width: ' + countProgress + '%;}</style>');
    countProgress += 40;
    if (countProgress > 100) {
        setTimeout(()=> {
            sliderBtn.classList.remove('animated')
        }, 300)
        
    }
 }