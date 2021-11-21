question_player= "player1"
answer_player= "player2";
player1_score= 0;
player2_score= 0;
update_player1_score= 0;
update_player2_score= 0;
function send(){
    number_1= document.getElementById("input_number_1").value;
    number_2= document.getElementById("input_number_2").value;
    actual_answer= parseInt(number_1) * parseInt(number_2);

    question_number= "<h4>" + number_1 + " X " + number_2 + "</h4>";
    input_box= "<br>Answer : <input type='text' id='input_check_box'>";
    check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row= question_number + input_box + check_button;
    document.getElementById("div_output").innerHTML= row;
    document.getElementById("input_number_1").value= "";
    document.getElementById("input_number_2").value= "";
}

function check(){
    get_answer= document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(answer_player == "player1"){
            update_player1_score= player1_score + 1;
            document.getElementById("player1_score").innerHTML= update_player1_score;
            setallthings();
        }
        if(answer_player == "player2"){
            update_player2_score= player2_score + 1;
            document.getElementById("player2_score").innerHTML= update_player2_score;
            setallthings();
        }
    }

    if(question_player == "player1"){
        question_player= "player2";
        document.getElementById("question_player_name").innerHTML= name_2;
    }
    if(question_player == "player2"){
        question_player= "player1";
        document.getElementById("question_player_name").innerHTML= name_1;
    }
    if(answer_player == "player1"){
        answer_player= "player2";
        document.getElementById("answer_player_name").innerHTML= name_2;
    }
    if(answer_player == "player2"){
        answer_player= "player1";
        document.getElementById("answer_player_name").innerHTML= name_1;
    }
}

function setallthings(){
    name_1= localStorage.getItem("name 1");
    name_2= localStorage.getItem("name 2");
    document.getElementById("player1_name").innerHTML= name_1;
    document.getElementById("player2_name").innerHTML= name_2;
    document.getElementById("player1_score").innerHTML= update_player1_score;
    document.getElementById("player2_score").innerHTML= update_player2_score;
    document.getElementById("question_player_name").innerHTML= name_1;
    document.getElementById("answer_player_name").innerHTML= name_2;
}