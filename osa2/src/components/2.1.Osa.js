import React from 'react'

const Osa = ({ props }) => {
  console.log('Osa props on:  ', props)
    return (
        <div>
          {props.nimi} {props.tehtavia}
      </div>
    )
  }

export default Osa