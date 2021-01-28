(function(){
    'use strict';

    var myForm = document.querySelector('#myform');
    var madlib = document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        var noun1 = document.querySelector('#noun1').value;
        var noun2 = document.querySelector('#noun2').value;
        var adjective = document.querySelector('#adjective').value;
        var verb = document.querySelector('#verb').value;

        if(noun1 && noun2 && adjective && verb){
            var myText = `${noun1} and ${noun2} are ${adjective} and are going to ${verb} today!`;
        }
        else{
            var myText = "Please give me words to put in your Mad Lib!";
        };

        madlib.innerHTML = myText;

    });

}());