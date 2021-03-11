(function(){
    'use strict';

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const verb1 = document.querySelector('#verb1').value;
        const adverb1 = document.querySelector('#adverb1').value;
        const bodypart = document.querySelector('#bodypart').value;
        const adverb2 = document.querySelector('#adverb2').value;

        if(noun1 && noun2 && verb1 && adverb1 && bodypart && adverb2){
            myForm.remove();
            let myText = `You wake up at 8am and take <b>${noun1}</b> out for their daily walk. As you are walking through <b>${noun2}</b>, you notice there’s a new restaurant that popped up. <b>${noun1}</b> suddenly starts <b>${verb1}</b> in circles, and you know they’re about to do their thing. The owner of the new restaurant storms out and <b>${adverb1}</b> shouts “THAT IS NOT ACCEPTABLE!” You shake your <b>${bodypart}</b> and walk away...it didn’t bother you too much. <br><br>However, <b>${noun1}</b> had a different opinion. <b>${noun1}</b> was deeply offended. Now everyday when walking past the restaurant, <b>${noun1}</b> looks <b>${adverb2}</b> at the owner straight in the eyes and pees in front of the restaurant entrance. <br><br>Just because.
                <br><br>
                <button id="reload" onClick="window.location.reload();">START OVER</button>
                <audio autoplay id="bark" src="http://tizours.free.fr/dicoanimaux/cris/chien.wav"></audio>`;
            madlib.innerHTML = myText;
            madlib.className = "output";
        }
        else{
            let myText = "<br>Please give me words to put in your Mad Lib!";
            madlib.innerHTML = myText;
            madlib.className = "error";
        };

    });

    const surprise = document.getElementById('surprise');
    const dog = document.getElementById('dog');

    surprise.addEventListener("click", function(event){
        event.preventDefault();
        dog.id = 'dogflip';
    });

    surprise.addEventListener("mouseout", function(event){
        event.preventDefault();
        dog.id = 'dog';
    })

}());