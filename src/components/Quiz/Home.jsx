import React from 'react'
import { Link } from 'react-router-dom'
import { Topics } from './Topics'

const Home = () => {
  return (
    <div>
      <h1 style={{marginTop:"-50px"}}>Welcome to QuizMaster!</h1><br />
      <h3>Please select a topic below to begin your quiz:</h3>
      <br />
      <div className="maintopics">
        <Link className='links' to="Web"><Topics url="Web" topicname="Web Development"/></Link>
        <Link className='links' to="DataAnalyst"><Topics topicname="Data Analyst"/></Link>
        <Link className='links' to="Artificial"><Topics topicname="Artificial Intelligence"/></Link>
        <Link className='links' to="CyberSec"><Topics topicname="Cyber Security"/></Link>  
      </div>
    </div>
  )
}

export default Home;