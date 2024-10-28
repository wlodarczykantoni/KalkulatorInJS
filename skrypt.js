
let on = false; 
console.log(on)
//Włączenie kalkulatora
$('#ON').on('click', function() {
        on=true;
        console.log(on)
        $('#okno').text('0');          
        $('#okno').css('background-color', '#d3d3d3'); 
        $('#okno').show();
    
});
    //Wyłączenie kalkulatora
    $('#OFF').on('click', function() {
        location.reload(); 
    });