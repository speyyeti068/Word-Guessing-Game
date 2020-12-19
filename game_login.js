function addUser (){
    var player1Name = document.getElementById("input1").value;

    var player2Name = document.getElementById("input2").value;

    localStorage.setItem("player1Name", player1Name);

    localStorage.setItem("player2Name", player2Name);

    var score = prompt("How many points do you want to play to?", 0);

    if(score > 0){
        localStorage.setItem("setScore", score);

        window.location = "game_page.html";
    }
}