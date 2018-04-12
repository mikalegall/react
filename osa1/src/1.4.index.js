import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'

    const osat = [
        {
        nimi: 'Reactin perusteet',
        tehtavia: 10
        },

        {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
        },

        {
        nimi: 'Komponenttien tila',
        tehtavia: 14
        }
    ]
  
    return (
      <div>

        <Otsikko kurssi={kurssi} />

{/* 
            <Sisalto osa1={osat[0].nimi} tehtavia1={osat[0].tehtavia}
                    osa2={osat[1].nimi} tehtavia2={osat[1].tehtavia}
                    osa3={osat[2].nimi} tehtavia3={osat[2].tehtavia}
            />

       <Yhteensa yhteensä={osat.forEach(
           (tehtavia)
           => {tehtavia + tehtavia
              }
        )}
        />
*/}

      <Sisalto osat={osat} />

      <Yhteensa osat={osat} />
      </div>
    )
  }


const Otsikko = (props) =>{
    return (
    <div>
        <p><b>{props.kurssi}</b></p>
    </div>
    )
}

const Sisalto = (props) =>{
      return (
    <div>
        <Osa osa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia} />
        <Osa osa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia} />
        <Osa osa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia} />
    </div>
    )
}

const Yhteensa = (props) =>{
    return (
    <div>
        <p>Yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
    </div>
    )
}

const Osa = (props) =>{
    return (
    <div>
        <p>{props.osa} {props.tehtavia}</p>
    </div>
    )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)