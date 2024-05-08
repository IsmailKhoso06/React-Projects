import React from 'react'
import Versity from './Versity'

function Universities({versity}) {
  return (
    <>
      <ul className="list-group" style={{listStyleType:"disc"}}>
      {versity.map((versity, index) => (
       <Versity key={index} versity={versity} />
      ))}       
      </ul>
    </>
  )
}

export default Universities
