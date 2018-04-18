import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  console.log('"Button handleClick" välittää muuttujalle "const Button" ominaisuutena "props.handleClick" seuraavaa: ', props.handleClick),
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

// const Display = ({ counter }) => <div>{counter}</div>
/*const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}*/
/*const PaljastaArvot = ({ laskuriHyvä, laskuriNeutraali, laskuriHuono}) => 
<div>
  Hyvä {laskuriHyvä}
  <br />
  Neutraali {laskuriNeutraali}
  <br />
  Huono {laskuriHuono}
  <br />
  Keskiarvo { (laskuriHyvä - laskuriHuono) / (laskuriHyvä + laskuriNeutraali + laskuriHuono) }
  <br />
  Positiivisia { Math.round((laskuriHyvä * 100 / (laskuriHyvä + laskuriNeutraali + laskuriHuono)),1) } %
</div>
*/

const Statistics = (props) => 
<div>
  <Statistic teksti='Hyvä' naytaArvo={props.laskuriHyvä}/>
  <Statistic teksti='Neutraali' naytaArvo={props.laskuriNeutraali}/>
  <Statistic teksti='Huono' naytaArvo={props.laskuriHuono}/>
  <Statistic teksti='Keskiarvo' naytaArvo={(props.laskuriHyvä - props.laskuriHuono) / (props.laskuriHyvä + props.laskuriNeutraali + props.laskuriHuono)}/>
  <Statistic teksti='Positiivisia' naytaArvo={Math.round((props.laskuriHyvä * 100 / (props.laskuriHyvä + props.laskuriNeutraali + props.laskuriHuono)),1)} loppukaneetti='%'/>
</div>

const Statistic = (props) =>{
  return (
  <div>
      <p>{props.teksti} {props.naytaArvo}{props.loppukaneetti}</p>
  </div>
  )
}

class App extends React.PureComponent {
    constructor() {
      super()
      this.state = {
        laskuriHyvä: 0,
        laskuriNeutraali: 0,
        laskuriHuono: 0,
      }  
    }

    render() {
      return (
        <div>
          <p>
          <b>Anna palautetta</b>
          </p>
          <div>
            <Button
              handleClick={() => this.setState({ laskuriHyvä: this.state.laskuriHyvä + 1 }) & console.log('Renderöitiin "Hyvä"')}
              text="Hyvä"
            />
            <Button
            handleClick={() => this.setState({ laskuriNeutraali: this.state.laskuriNeutraali + 1 }) & console.log('Renderöitiin "Neutraali"')}
            text="Neutraali"
            />
            <Button
              handleClick={() => this.setState({ laskuriHuono: this.state.laskuriHuono + 1 }) & console.log('Renderöitiin "Huono"')}
              text="Huono"
            />
          </div>

          <p>
          <b>Statistiikka</b>
          </p>
          <Statistics laskuriHyvä={this.state.laskuriHyvä} laskuriNeutraali={this.state.laskuriNeutraali} laskuriHuono={this.state.laskuriHuono}/>
        </div>
      )
    }
  }

 
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
