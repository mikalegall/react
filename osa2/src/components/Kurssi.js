import React from 'react'
import Sisalto from './Sisalto'

const Kurssi = ({ props }) => {
    console.log('Kurssi props.osat on:  ', props.osat)
    return (
        <div>
            <b>{props.nimi}</b>
                <Sisalto props={props.osat}/>
                yhteensä { }

                {props.osat
                .map(
                ob =>
                ob.tehtavia)
                .reduce(
                    (tehtavia, Xxxx) 
                )
                }

                { } tehtävää
      </div>
    )
  }

export default Kurssi