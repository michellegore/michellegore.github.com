(function(){
    'use strict';

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');
    const gameData = {
        dice: ['1die.png', '2die.png', '3die.png', '4die.png', '5die.png', '6die.png'],
        players: ['Bunny', 'Froggy'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener("click", function(){
        // randomly set game index //
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">QUIT</button>';

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });

        console.log(gameData.index);
        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<h2>Roll the dice for ${gameData.players[gameData.index]}</h2>`;
        actionArea.innerHTML = '<button id="roll">ROLL</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<h2>Roll the dice for ${gameData.players[gameData.index]}</h2>`;
        game.innerHTML +=  `<img src="${gameData.dice[gameData.roll1-1]}">
                            <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        //if two 1's are rolled
        if(gameData.rollSum === 2){
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2000);
        }
        // if either die is a 1
        else if(gameData.roll1 ===1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${
                gameData.players[gameData.index]
            }</p>`;
            setTimeout(setUpTurn, 2000);
        }
        // if neither die is a 1
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">ROLL AGAIN</button> <br><br> <b>or</b> <br><br> <button id="pass">PASS</button>'

            document.getElementById('rollagain').addEventListener('click', function (){
                setUpTurn();
            });
            
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]}
                wins with ${gameData.score[gameData.index]} points!</h2>`;

                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = "START OVER";
        }

        else{
            score.innerHTML = `<img id="bunny" src="bunny.svg" alt="bunny">
            <h3><strong>${gameData.players[0]} : <br>${gameData.score[0]}</strong> points</h3>
            <br><img id="froggy" src="froggy.svg" alt="froggy">
            <h4><strong>${gameData.players[1]} : <br>${gameData.score[1]}</strong> points</h4>`;
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<img id="bunny" src="bunny.svg" alt="bunny">
        <h3><strong>${gameData.players[0]} : <br>${gameData.score[0]}</strong> points</h3>
        <br><img id="froggy" src="froggy.svg" alt="froggy">
        <h4><strong>${gameData.players[1]} : <br>${gameData.score[1]}</strong> points</h4>`;
    }

})();