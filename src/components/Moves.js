import React from 'react';
import axios  from 'axios';
import './Moves.css'

class Stats extends Component {
    constructor(props){
        super(props);
        this.state = { 
            stats : []
        }

BaseStatus = () => {
     
     const name = this.state.stats
    // const handleApiCall = () =>{
        componentDidMount = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`)
            .then((response)=> {
                response.data.stats.map((e)=>{
                        name.push(e.stat.name, e.base_stat) 
                  })
                },(err) =>{
                 console.log('error');
                })
            }
             
            // }

                console.log('------------', name)
                let display = ''
                name.map((e,i) => { return display = display + parseInt(e)})
                console.log('------------',[9,8,7,6,5,4])
                render () {
                 return (
                    <>
                    <div className='pokemon-container'>
                        <p>{name}</p>
                </div>
                    </>
                 )
            }
        }
    }

           
    

export default Stats