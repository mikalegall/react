import React from 'react'
import Sisalto from './Sisalto'

const Kurssi = ({ kurssi }) => {
    console.log(kurssi)
    return (
        <div>
            <b>{kurssi.nimi}</b>
            <Sisalto props={kurssi.osat}/>
        </div>
    )
  }

export default Kurssi