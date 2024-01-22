console.log('Hello Alura Midi')

function playSound(idSound) {

    document.querySelector(idSound).play();
};

const padList = document.querySelectorAll('.tecla');

var counter = 0;

while (counter < padList.length) {

    const pad = padList[counter];
    const instrument = pad.classList[1];

    const idAudio = `#som_${instrument}`;

    padList[counter].onclick = function () {
        playSound(idAudio);
    }
    counter ++;
};