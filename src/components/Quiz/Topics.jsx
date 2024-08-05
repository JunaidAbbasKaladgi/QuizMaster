import React from 'react'
import './Quiz.css'

export const Topics = (props) => {
  return (
    <div>
          <div className='topics'>
            <h2 style={{color: 'black'}}>{props.topicname}</h2><br /><br />
        </div>
    </div>
  )
}
