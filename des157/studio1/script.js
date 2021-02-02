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
            let myText = `You wake up at 8am and take ${noun1} out for their daily walk. As you are walking through ${noun2}, you notice there’s a new restaurant that popped up. ${noun1} suddenly starts ${verb1} in circles, and you know they’re about to do their thing. The owner of the new restaurant storms out and ${adverb1} shouts “THAT IS NOT ACCEPTABLE!” You shake your ${bodypart} and walk away...it didn’t bother you too much. <br><br>However, ${noun1} had a different opinion. ${noun1} was deeply offended. Now everyday when walking past the restaurant, ${noun1} looks ${adverb2} at the owner straight in the eyes and pees in front of the restaurant entrance. <br><br>Just because.`;
            madlib.innerHTML = myText;
            madlib.className = "output";
        }
        else{
            let myText = "<br>Please give me words to put in your Mad Lib!";
            madlib.innerHTML = myText;
            madlib.className = "error";
        };

    });

}());