import React from 'react'
import Osa from './Osa'

const Sisalto = ({ props }) => {
    console.log('Sisältö props on:  ', props)
    return (
        <div>
            <Osa />
            <Osa />
            <Osa />
      </div>
    )
  }

export default Sisalto