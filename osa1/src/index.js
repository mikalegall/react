import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto  osa1={osa1} tehtavia1={tehtavia1} 
                osa2={osa2} tehtavia2={tehtavia2}
                osa3={osa3} tehtavia3={tehtavia3}
      />
      <Yhteensa yhteensä={tehtavia1 + tehtavia2 + tehtavia3} />
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
        <p>{props.osa1} {props.tehtavia1}
        <br />
        {props.osa2} {props.tehtavia2}
        <br />
        {props.osa3} {props.tehtavia3}
        </p>
    </div>
    )
}

const Yhteensa = (props) =>{
    return (
    <div>
        <p>Yhteensä {props.yhteensä} tehtävää</p>
    </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)