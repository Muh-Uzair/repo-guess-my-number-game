"use strict" ;


import * as model from "./model.js" ;
import * as view_check_button from "./views_folder/view_check_button.js"
import * as config from "./config.js"
import * as view_again_button from "./views_folder/view_again_button.js"


function control_check_guessed_number()
{
    // console.log(view_check_button.user_guessed_value)
    // console.log(model.computer_generated_random_number)

    if(model.computer_generated_random_number === view_check_button.user_guessed_value)
    {
        // console.log(`YES`)
        view_check_button.making_screen_green_success_function();
        view_check_button.set_falg_value_function(false) ;
        view_check_button.make_msg_text_white_function() ;
    }
    else if(model.computer_generated_random_number <= view_check_button.user_guessed_value)
    {
        view_check_button.display_msg_too_high_function() ;
        view_check_button.decrease_total_score_function() ;
        view_check_button.make_msg_text_white_function() ;
    }
    else if(model.computer_generated_random_number >= view_check_button.user_guessed_value)
    {
        view_check_button.display_msg_too_low_function()
        view_check_button.decrease_total_score_function() ;
        view_check_button.make_msg_text_white_function() ;
    }
    else if(view_check_button.user_guessed_value === undefined)
    {
        view_check_button.display_wrong_input_function() ;
        view_check_button.decrease_total_score_function() ;
        
    }
    
}


function control_restore_again_clicked()
{
    
    view_again_button.restore_values_again_function() ;
    view_check_button.set_falg_value_function(true) ;
    model.generate_random_number_function() ;
}


function init()
{
    model.generate_random_number_function() ;
    view_check_button.add_event_listener_function_check_button(control_check_guessed_number)
    view_again_button.add_event_listener_function_again_button(control_restore_again_clicked) ;
    
    
}
init()