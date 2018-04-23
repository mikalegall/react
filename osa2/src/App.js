import React from 'react';
import Henkilo from './components/Henkilo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      henkilot: [
        { nimi: 'Arto Hellas' }
      ],
      uusiNimi: ''
    }
  }


  kasitteleMuutos = (event) => {
    // event.target vastaa kontrolloidun syötekomponentin input-kenttää
      //  event.target.value vastaa kontrolloidun syötekomponentin kentän arvoa
        console.log('kasitteleMuutos --> event.target.value on: ', event.target.value)
          this.setState({ uusiNimi: event.target.value })
  }


  // Lomakkeen kentän kautta vastaanotetaan muutos, joka halutaan tallentaa
  lisaaMuutos = (event) => {
    event.preventDefault()

    console.log('this.state.uusiNimi = ', this.state.uusiNimi)

    // JÄIN TÄHÄN!! If this.state.uusiNimi = this.state.henkilot diipadaapaa NIIN tee jotain

    const olioJSON = {
      nimi: this.state.uusiNimi
    }

    const henkilot = this.state.henkilot.concat(olioJSON)
    this.setState({ // // Lopulta komponentin Tila (state) päivitetään
      henkilot, // uudella muistiinpanolla ja
      uusiNimi: ''   // tyhjennetään kontrolloidun syötekomponentin kenttä
    })
}
  



render() {

    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <form onSubmit={this.lisaaMuutos}>
          <div>
            nimi:

            <input 
            value={this.state.uusiNimi} 
            // Tapahtumankäsittelijää kutsutaan aina kun syötekomponentissa tapahtuu jotain 
            onChange={this.kasitteleMuutos}
          />

          </div>

          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>

        {/* Yhden henkilön näyttäminen olisi 
              <Henkilo key={this.state.henkilot[0].nimi} props={this.state.henkilot[0]} />
        */}
        {console.log('this.state.henkilot[0].nimi = ', this.state.henkilot[0].nimi)}
        {// Järjestetään taulukon sisältämä lista uudelleen map-function avulla (näytetään kaikki taulukon sisältämät JSON-oliot)
        }
        {this.state.henkilot.map(hlo =>  
        <Henkilo key={hlo.nimi} props={hlo} />
        )}
      </div>
    )
  }
}

export default App