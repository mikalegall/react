import React from 'react'
import Sisalto from './Sisalto'

const Kurssi = ({ props }) => {
    console.log('Kurssi props.osat on:  ', props.osat)
    
let yhteensäSumma = props.osat.reduce(
    function
    (summa, tehtavatPerOsa){
        return summa + tehtavatPerOsa.tehtavia
    }, 0 // "0" = "summa" (tämä alustus on pakollinen laskennan aloituspisteeksi) https://youtu.be/Wl98eZpkp-c?t=5m38s
)    


    return (
        <div>
            <b>{props.nimi}</b>
                <Sisalto props={props.osat}/>
                yhteensä {yhteensäSumma} tehtävää
      </div>
    )
  }

export default Kurssi