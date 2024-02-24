"use strict" ;


import * as config from  "../config.js"

export let flag ;
export function set_falg_value_function( falg_value )
{
    flag = falg_value ;
}
export let user_guessed_value ;
export function add_event_listener_function_check_button(recieved_control_check_guessed_number )
{
    document.querySelector(".button_check").addEventListener( "click" ,
    function(event_info_object)
    {
        // console.log(flag)
        if( (+document.querySelector(".actual_score_number").textContent <= 0) || (flag === false) ) return ;

        if( document.querySelector(".input_number_field").value !== "")
        user_guessed_value = +document.querySelector(".input_number_field").value
        recieved_control_check_guessed_number()
    })

}
export function display_msg_too_high_function()
{
    document.querySelector(".text_message").textContent = "Too high!! Guess lower" ;
}
export function display_msg_too_low_function()
{
    document.querySelector(".text_message").textContent = "Too low!! Guess higher" ;
}
export function display_wrong_input_function()
{
    document.querySelector(".text_message").style.color = "red" ; 
    document.querySelector(".text_message").textContent = "Empty input!! Enter correct number"     
}
export function make_msg_text_white_function()
{
    document.querySelector(".text_message").style.color = "white" ; 
}
export function decrease_total_score_function()
{
   document.querySelector(".actual_score_number").textContent = +document.querySelector(".actual_score_number").textContent - 1 ;
}
export function making_screen_green_success_function()
{
    document.querySelector("body").style.backgroundColor = "rgb(96, 179, 71)"
    document.querySelector(".text_message").textContent = "🎉Correct Guess!!"
    document.querySelector(".text_hidden_number").textContent = String(user_guessed_value) ;
    document.querySelector(".div_hidden_number").style.width = "180px" ;

    if( +document.querySelector(".actual_score_number").textContent > +document.querySelector(".actual_high_score").textContent)
    {
        // console.log(`new high score`) ;
        document.querySelector(".actual_high_score").textContent = document.querySelector(".actual_score_number").textContent ;
    }
    
}

