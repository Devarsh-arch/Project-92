
name_1= "";
name_2= "";
function adduser(){
    name_1= document.getElementById("player_login_input_1").value;
    name_2= document.getElementById("player_login_input_2").value;
    localStorage.setItem("name 1", name_1);
    localStorage.setItem("name 2", name_2);
    window.location= "quiz_game_page.html"
}