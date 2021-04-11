import React from 'react'
import RoundListItem from './RoundListItem';

const RoundsList = ({ rounds }) => {
  return (
    <div>
      <h1 className="pb-6">Completed Rounds</h1>      
      <ul>
        {rounds.map((round) => ( 
          <RoundListItem key={round.id} round={round} />
        ))}
      </ul>
    </div>    
  )    
}

export default RoundsList;