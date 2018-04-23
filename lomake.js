import React from 'react';
import Henkilo from './components/Henkilo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
                    henkilot: [
                                  { nimi: ' ' }
                              ],
                    uusiNimi: ''
                 }
  }


  kasitteleMuutos = (event) => {
    // event.target vastaa kontrolloitua syötekomponenttia eli tässä tapauksessa <input> elementtiä
      //  event.target.value vastaa kontrolloidun syötekomponentin kentän arvoa eli sitä mitä käyttäjä on <input> elementin tekstilaatikkoon kirjoittanut
          this.setState({ uusiNimi: event.target.value })
  }


  // Lomakkeen kentän kautta vastaanotetaan muutos, joka halutaan tallentaa
  lisaaMuutos = (event) => {
    event.preventDefault()
    const olioJSON = {
      nimi: this.state.uusiNimi
    }
    // Luodaan concat-metodilla uusi henkilot-taulukko ja lisätään sen loppuun uusi alkio
  const henkilot = this.state.henkilot.concat(olioJSON) // React:in PureComponent:in Tila:a (State) ei saa muokata (push) vaan aina tehdään kopio (concat), johon muutos toteutetaan
  this.setState({ // Lopulta komponentin Tila (state) päivitetään
    henkilot, // uudella taulukolla, johon on lisätty uusi nimi ja
    uusiNimi: ''  // tyhjennetään kontrolloidun syötekomponentin kenttä
  })
}


render() {

    return (
      <div>
        <h2>Henkilöluettelo</h2>

        <form onSubmit={this.lisaaMuutos}>

          <div>
            Lisättävä nimi:
            <br />
              <input 
                     value={this.state.uusiNimi} 
                     // Tapahtumankäsittelijää kutsutaan aina kun syötekomponentissa tapahtuu jotain 
                     onChange={this.kasitteleMuutos}
              />
          </div>


          <div>
            <button type="submit"> Lisää </button>
          </div>
        </form>

        <h2>Nimilista</h2>

        {/* Yhden henkilön näyttäminen olisi 
            <Henkilo key={this.state.henkilot[0].nimi} props={this.state.henkilot[0]} />
            Järjestetään taulukon sisältämä lista uudelleen map-function avulla (näytetään siis kaikki taulukon sisältämät JSON-oliot)
        */}

        { this.state.henkilot
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


/* index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
ReactDOM.render(
  <App />,
  document.getElementById('juuriElementti')
)
*/


/* Henkilo.js
import React from 'react'
const Henkilo = ({ props }) => {
  return (
    <div>{props.nimi}</div>
  )
}
export default Henkilo
*/


/* index.html
<!DOCTYPE html>
<html lang="fi">
  <head>
    <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Mika Le Gall</title>
  </head>
  <body>
    <div id="juuriElementti"></div>
  </body>
</html>
*/