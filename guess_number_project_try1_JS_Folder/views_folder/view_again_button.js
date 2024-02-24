"use strict"

let text_message = document.querySelector(".text_message") ;
let actual_score_numeber = document.querySelector(".actual_score_number") ;
let actual_high_score = document.querySelector(".actual_high_score") ;
let input_number_field = document.querySelector(".input_number_field") ;
let body_elements = document.querySelector("body") ;
let again_button = document.querySelector(".button_again") ;
let text_hidden_number = document.querySelector(".text_hidden_number") ;


export function add_event_listener_function_again_button(recieved_control_restore_again_clicked)
{

    again_button.addEventListener( "click" , 
    function(event_info_object)
    {

        recieved_control_restore_again_clicked();
    })


}
export function restore_values_again_function()
{
    text_message.textContent = "Start Guessing..." ;
    actual_score_numeber.textContent = 20 ;
    input_number_field.value = "" ;
    body_elements.style.backgroundColor = "rgb(42, 42, 42)" ;
    text_hidden_number.textContent = `?` ;
    document.querySelector(".div_hidden_number").style.width = "100px" ;

}