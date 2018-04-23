import React from 'react';
import Henkilo from './components/Henkilo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
                    henkilot: [
                                  { nimi: 'Pennasen Jaska',
                                    arkaluonteinen: 'kylla' },
                                  { nimi: 'Pynnösen Jorkka',
                                    arkaluonteinen: 'ei' },
                                    { nimi: 'Hentun Liisa',
                                    arkaluonteinen: 'kylla' },
                                    { nimi: 'Puntun Paavo',
                                    arkaluonteinen: 'ei' }
                                  ],
                    uusiNimi: '',
                    naytaKaikki: true
                 }
  }



  naytaPiilota = () => {
    this.setState({naytaKaikki: !this.state.naytaKaikki})
  }

 

  render() {
                                    // If ("boolean")  ? then                : else
      const esillaVaiPiilossa = this.state.naytaKaikki ? this.state.henkilot : this.state.henkilot.filter(alkioObjekti => alkioObjekti.arkaluonteinen === 'kylla')
                                    // If ("boolean")   ? then       : else
      const liimalappuEtiketti = this.state.naytaKaikki ? 'Piilota ' : 'Näytä '


    return (
      <div>

          <button onClick={this.naytaPiilota}>
            {liimalappuEtiketti} arkaluonteiset
          </button>

        <h2>Nimilista</h2>

        {/* Yhden henkilön näyttäminen olisi 
            <Henkilo key={this.state.henkilot[0].nimi} props={this.state.henkilot[0]} />
            Järjestetään taulukon sisältämä lista uudelleen map-function avulla (näytetään siis kaikki taulukon sisältämät JSON-oliot)
        */}

        { esillaVaiPiilossa
          .map(
                hlo =>  
                  <Henkilo key={hlo.nimi} props={hlo} />
          )
        }
      </div>
    )
  }
}

export default App



/*
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
*/


/*
import React from 'react'
const Henkilo = ({ props }) => {
  return ( 
    <div>{props.nimi}</div>
  )
}
export default Henkilo
*/