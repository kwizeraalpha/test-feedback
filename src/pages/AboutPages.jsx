import React from 'react'
import Card from '../component/shared/Card'
import { Link } from 'react-router-dom'

function AboutPages() {
  return (
    <Card>
    <div className='about'>
      <h1>About This Project</h1>
      <p>This is a React app to leave feedback for product or Service</p>
      <p>Version: 1.0.0</p>
      <p>
        <Link to='/'>Back To Home</Link>
      </p>
    </div>
    </Card>
  )
}

export default AboutPages
