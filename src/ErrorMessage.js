import React from 'react'
import { Link } from 'react-router-dom'

const ErrorMessage = () => {
  return (
    <div>
        <h1>opps page not found</h1>
        <p>loremgjkjghl.,y/
        </p>
        <p>back to home page<span><Link to='/'></Link>homepage</span>.</p>
    </div>
  )
}

export default ErrorMessage