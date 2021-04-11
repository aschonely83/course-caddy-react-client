import React from 'react' 

const RoundListItem = ({ round }) => {
  return ( 
  <li className="" key={round.id}>
    <figure>
      Par: {round.par} <br></br>
      Score: {round.score} 
      <img className="" 
        src={round.card_url}
        alt="score card" 
      />
    </figure>  
  </li>      
  )
}

export default RoundListItem