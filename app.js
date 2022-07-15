let list = [
    "file:///D:/JavaScript-darsi/Media-Plaer/mp3/Marmalade.mp3",
    "D:/JavaScript-darsi/Media-Plaer/mp3/Milliy-bola.mp3",
    "file:///D:/JavaScript-darsi/MediA-PLaeR/mp3/Doim-8K.mp3",
    "D:/JavaScript-darsi/Media-Plaer/mp3/Shape-off-you.mp3",
    "D:/JavaScript-darsi/Media-Plaer/mp3/Tun.mp3",
    "D:/JavaScript-darsi/Media-Plaer/mp3/Lolipop.mp3",
    "D:/JavaScript-darsi/Media-Plaer/mp3/Gio-Peka.mp3",
    "D:/JavaScript-darsi/Media-Plaer/mp3/Only-you.mp3",
    "file:///D:/JavaScript-darsi/MediA-PLaeR/mp3/Rock%60n-rolls.mp3",
];

let currentAudioIndex = 0;

if (currentAudioIndex>8) {
    list[currentAudioIndex=0]
}

let h2 = document.querySelector('.h2');

let audio = new Audio(list[0])

function getName() {
    let soundName = list[currentAudioIndex];
    let splittedName = soundName.split('/');
    h2.innerText = splittedName[splittedName.length-1];
}

function playSound() {
    audio.play();
    document.querySelector('#play').style.display="none";
    document.querySelector('#pause').style.display="block";
    getName();
}

function pauseSound() {
    audio.pause();
    document.querySelector('#play').style.display="block";
    document.querySelector('#pause').style.display="none";
    getName();
}

function nextSound() {
    currentAudioIndex++;
    if (list[currentAudioIndex] !== undefined) {
        audio.pause();
        audio = new Audio(list[currentAudioIndex]);
        audio.play();
        getName();
    }
}

function prevSound() {
    currentAudioIndex--;
    if (list[currentAudioIndex] !== undefined) {
        audio.pause();
        audio = new Audio(list[currentAudioIndex]);
        audio.play();
        getName();
    }
}