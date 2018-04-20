import React from 'react'
import Osa from './Osa'

const Sisalto = ({ props }) => {
    console.log('Sisältö props on:  ', props)

    return (
        <div>
          {props.nimi}
           { props.map(
            ob =>
              <Osa
                key={ob.id}
                props={ob}
              />
            )
          }
{/*
            <Osa key={props[0].id} nimi={props[0].nimi} tehtavia={props[0].tehtavia}/>
            <Osa key={props[1].id} nimi={props[1].nimi} tehtavia={props[1].tehtavia}/>
            <Osa key={props[2].id} nimi={props[2].nimi} tehtavia={props[2].tehtavia}/>
*/}
      </div>
    )
  }

export default Sisalto