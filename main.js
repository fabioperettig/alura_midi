console.log('Hello Alura Midi')

function playSound(idSound) {

    document.querySelector(idSound).play();
};

const padList = document.querySelectorAll('.tecla');


for(let counter = 0; counter < padList.length; counter++) {
    const pad = padList[counter];
    const instrument = pad.classList[1];
    const idAudio = `#som_${instrument}`;

    padList[counter].onclick = function () {
        playSound(idAudio);
    }

    pad.onkeydown = function(event){

        if(event.code == 'Space' || event.code == 'Enter') {
            pad.classList.add('ativa');
        }
    }

    pad.onkeyup = function(){
        pad.classList.remove('ativa');
    }

}
