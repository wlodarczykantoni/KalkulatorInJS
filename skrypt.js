const display = document.getElementById("display")
let on = false; 
console.log(on)
//Włączenie kalkulatora
$('#ON').on('click', function() {
        on=true;
        console.log(on)
        $('#display').text('0');          
        $('#display').css('background-color', '#d3d3d3'); 
        $('#display').show();
    
});
    //Wyłączenie kalkulatora
    $('#OFF').on('click', function() {
        location.reload(); 
    });

function addToDisplay(input){
    display.value += input;
}
function clear(){
    display.value ="";
}
function calculate(){
    display.value = eval(display.value);
}