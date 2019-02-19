import React from 'react';
import axios  from 'axios'


const DisplayMove = (props) => {
    
return  axios.get(`https://pokeapi.co/api/v2/pokemon/${props.toLowerCase()}`)
            .then((response)=> {
                console.log(response)
                },(err) =>{
                 console.log('error');
                })
}

console.log(DisplayMove('Bulbasaur'))

export {DisplayMove}