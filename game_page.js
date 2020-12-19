var questionTurn = "Player1";

var answerTurn = "Player2";

var lowercaseWord = "";

var word1Div = document.getElementById("questionDiv");

var word2Div = document.getElementById("output");

var setScore = localStorage.getItem("setScore");

var word3Div = document.getElementById("gameDiv");

word2Div.style.display = "none";

player1Name = localStorage.getItem("player1Name");

player2Name = localStorage.getItem("player2Name");

player1Score = 0;

player2Score = 0;

document.getElementById("player1Name").innerHTML = player1Name + ": ";
document.getElementById("player2Name").innerHTML = player2Name + ": ";

document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;

document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;

function send(){
    var getWord = document.getElementById("Word1").value;

    lowercaseWord = getWord.toLowerCase();
    console.log(lowercaseWord);

    var charAt1 = lowercaseWord.charAt(1);
    console.log(charAt1);

    var charAt2 = lowercaseWord.charAt(Math.floor(lowercaseWord.length/2));
    console.log(charAt2);

    var charAt3 = lowercaseWord.charAt(lowercaseWord.length - 2);
    console.log(charAt3);

    var removeCharAt1 = lowercaseWord.replace(charAt1, "_");

    var removeCharAt2 = removeCharAt1.replace(charAt2, "_");

    var removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    console.log(removeCharAt3);

    var questionWord = "<h4 id = 'wordDisplay'> Q. " + removeCharAt3 + "</h4> <br>";

    var inputBox = "Answer: <input type = 'text' id = 'inputBox'>";

    var checkButton = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>";

    var row = questionWord + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;

    document.getElementById("Word1").innerHTML = "";

    word1Div.style.display = "none";

    word2Div.style.display = "block";
}

function check(){
    var answer = document.getElementById("inputBox").value;

    answerLowerCase = answer.toLowerCase();
    console.log(answerLowerCase);

    if(answerLowerCase == lowercaseWord){
        if(answerTurn == "Player1"){
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
            if(player1Score == setScore){
                word3Div.style.display = "none";
                document.getElementById("winner").innerHTML = player1Name + " Wins!!!";
            }
        }else{
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
            if(player2Score == setScore){
                word3Div.style.display = "none";
                document.getElementById("winner").innerHTML = player2Name + " Wins!!!";
            }
        }
    }


    if(questionTurn == "Player1"){
        questionTurn = "Player2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player2Name;
        
        answerTurn = "Player1";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player1Name;
    }else{
        questionTurn = "Player1";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name;
        
        answerTurn = "Player2";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name;
    }

    document.getElementById("output").innerHTML = "";

    word1Div.style.display = "block";

    word2Div.style.display = "none";
}