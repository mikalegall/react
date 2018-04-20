import React from 'react'

const Sisalto = ({ props }) => {
    console.log('Sisältö props on:  ', props)

    return (
        <div>
           { props.map(
            ob =>
              <Osa
                key={ob.id}
                props={ob}
              />
            )
          }
      </div>
    )
}


const Osa = ({ props }) => {
    console.log('Osa props on:  ', props)
      return (
          <div>
            {props.nimi} {props.tehtavia}
        </div>
      )
    }



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
            <br />
            <br />
      </div>
    )
}

export default Kurssi