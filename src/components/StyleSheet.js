import React from 'react'
import './stylesheet.css'
function StyleSheet(props) {
    const className = props.primary ? 'primary': ''
  return (
    <div>
      <h2 className={`${className} font-xl`}>This is a style sheet</h2> 
    </div>
  )
}

export default StyleSheet
