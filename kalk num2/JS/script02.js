function to_display(character) {
    console.log("to_display");
    on_display = document.getElementById("id_display").value;
    on_display = on_display + character.value;
    document.getElementById("id_display").value = on_display;
}

function operator(character){
    console.log("operator");
    on_display = document.getElementById("id_display").value;
    expression = expression + on_display + character.value;
    document.getElementById("id_display").value = "";
    console.log(expression);
}