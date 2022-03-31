import React from 'react'
import "./Card.css"

function Card({categories,isturnprop,setIsTurnProp}) {

    
   
   
  return (
    <div className="card-container" >
        
            <h2>Languages</h2>
       
        {categories.map((card,index)=> {
            const {name,img,options} = card

            {isturnprop ?
            



                <div key={index} className="card"> 
                    <img src ={img} alt={name} />
                    <p>{name}</p>


                    <ul>
                        {options.map((opt)=> {
                            return (
                                <li key={index}>{opt}

                                </li>
                            )
                        })}
                      
                    </ul>
                </div> 
            
        })}

    </div>
  )
}

export default Card
