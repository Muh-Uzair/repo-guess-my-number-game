"use strict" ;

export let computer_generated_random_number ;

export function generate_random_number_function()
{

    computer_generated_random_number = Math.trunc(Math.random() * 20) + 1 ;
    // console.log(computer_generated_random_number) ; 
}
