import React from 'react'
import './Layout.scss'

function Bouton(props) {
  return (
    <button className='btnLayout'>{props.title}</button>
  )
}

export default Bouton
