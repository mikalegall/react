import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
    constructor() {
      super()
      this.state = {
        laskuriHyvä: 0,
        laskuriNeutraali: 0,
        laskuriHuono: 0
      }
    }
  
    render() {
      return (
        <div>
          <h2>anna palautetta</h2>
          <p>
          <button onClick={() => this.setState({ laskuriHyvä: this.state.laskuriHyvä + 1 }) & console.log('Klikattiin "Hyvä"')}>
            hyvä
          </button>
          <button onClick={() => this.setState({ laskuriNeutraali: this.state.laskuriNeutraali + 1 }) & console.log('Klikattiin "Neutraali"')}>
            neutraali
          </button>
          <button onClick={() => this.setState({ laskuriHuono: this.state.laskuriHuono + 1 }) & console.log('Klikattiin "Huono"')}>
            huono
          </button>
          </p>
          <h2>statistiikka</h2>
          <p>
            Hyvä {this.state.laskuriHyvä}
            <br />
            Neutraali {this.state.laskuriNeutraali}
            <br />
            Huono {this.state.laskuriHuono}
        </p>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )


/*
class App extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        counter: 1,
        nimi: 'Lare'
      }
    
  
    setInterval(() => {
        this.setState({ counter: this.state.counter + 1 })
      }, 1000)
    }

    render() {
        console.log('renderöidään', this.state.counter)
        return (
        <div>
            {this.state.counter}
            <br />
                {this.state.nimi}
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
*/


/*
const App = (props) => {
    
    var {kapseliPropsi} = props
  

    return (
      <div>
      <b>anna palautetta</b>
      
      <br />
      <b>statistiikka</b>
      <div>{kapseliPropsi.arvo}</div>
      </div>
    )
  }

  const laskuriMuuttuja = {
    arvo: 1
  }

  const renderoi = () => {
    ReactDOM.render(
      <App kapseliPropsi={laskuriMuuttuja} />,
      document.getElementById('root')
    )
  }
  
  setInterval(() => {
    renderoi()
    laskuriMuuttuja.arvo += 1;
  }, 1000)

  */

