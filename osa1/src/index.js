import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  console.log('"Button handleClick" välittää muuttujalle "const Button" ominaisuutena "props.handleClick" seuraavaa: ', props.handleClick),
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  console.log('Yhteenveto annetusta palautteesta (sen järjestys): ', props.kaikki)
  if (props.kaikki.length === 0) {
    return (
      <div>
        <b>ei yhtään palautetta annettu</b>
      </div>
    )
  }
  
  return (
    <div>
      <table>
      	<tr>
			    <td><Statistic teksti='Hyvä' naytaArvo={props.laskuriHyvä}/>
			    </td>
        </tr>
        <tr>
        <td><Statistic teksti='Neutraali' naytaArvo={props.laskuriNeutraali}/>
        </td>
	      </tr>
        <tr>
        <td><Statistic teksti='Huono' naytaArvo={props.laskuriHuono}/>
        </td>
	      </tr>
        <tr>
        <td><Statistic teksti='Keskiarvo' naytaArvo={(props.laskuriHyvä - props.laskuriHuono) / (props.laskuriHyvä + props.laskuriNeutraali + props.laskuriHuono)}/>
        </td>
	      </tr>
        <tr>
        <td><Statistic teksti='Positiivisia' naytaArvo={Math.round((props.laskuriHyvä * 100 / (props.laskuriHyvä + props.laskuriNeutraali + props.laskuriHuono)),1)} loppukaneetti='%'/>
        </td>
	      </tr>
      </table>
    </div>
  )
}

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
        kaikki: []
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
              handleClick={() => this.setState({ laskuriHyvä: this.state.laskuriHyvä + 1, kaikki: this.state.kaikki.concat('+') }) & console.log('Renderöitiin "Hyvä"')}
              text="Hyvä"
            />
            <Button
            handleClick={() => this.setState({ laskuriNeutraali: this.state.laskuriNeutraali + 1, kaikki: this.state.kaikki.concat('0') }) & console.log('Renderöitiin "Neutraali"')}
            text="Neutraali"
            />
            <Button
              handleClick={() => this.setState({ laskuriHuono: this.state.laskuriHuono + 1, kaikki: this.state.kaikki.concat('-')}) & console.log('Renderöitiin "Huono"')}
              text="Huono"
            />
          </div>

          <p>
          <b>Statistiikka</b>
          </p>
          <Statistics laskuriHyvä={this.state.laskuriHyvä} laskuriNeutraali={this.state.laskuriNeutraali} laskuriHuono={this.state.laskuriHuono} kaikki={this.state.kaikki}/>
        </div>
      )
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
