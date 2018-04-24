import React from 'react';
import Henkilo from './components/Henkilo'
import LisaysLomake from './components/LisaysLomake'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
                  henkilot: [
                              { nimi: 'Arto Hellas', numero: '040-123456' },
                              { nimi: 'Martti Tienari', numero: '040-654321' },
                              { nimi: 'Arto Järvinen', numero: '040-999' },
                              { nimi: 'Lea Kutvonen', numero: '040-888' }
                            ],
                  uusiNimi: '',
                  uusiNumero: '',
                  rajaus: ''
                 }
  }


  
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
kasitteleMuutosNimi = (event) => {
    // event.target vastaa kontrolloidun syötekomponentin input-kenttää
      //  event.target.value vastaa kontrolloidun syötekomponentin kentän arvoa
        console.log('kasitteleMuutosNimi --> event.target.value on: ', event.target.value)
          this.setState({ uusiNimi: event.target.value })
  }
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
kasitteleMuutosNumero = (event) => {
  // event.target vastaa kontrolloidun syötekomponentin input-kenttää
    //  event.target.value vastaa kontrolloidun syötekomponentin kentän arvoa
      console.log('kasitteleMuutosNumero --> event.target.value on: ', event.target.value)
        this.setState({ uusiNumero: event.target.value })
}
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



// ***********************************************************************************************************
  // Lomakkeen kentän kautta vastaanotetaan muutos, joka halutaan tallentaa
  lisaaMuutos = (event) => {
    event.preventDefault()
        console.log('this.state.uusiNimi = ', this.state.uusiNimi)

        // 2.7. JÄIN TÄHÄN!! IF 'this.state.henkilot.nimi' (luuppaa läpi) === this.state.uusiNimi NIIN window.alert('Henkilö on jo tallennettu')
        // https://react-cn.github.io/react/tips/if-else-in-JSX.html
        let ehdokas = this.state.uusiNimi
        this.state.henkilot.forEach(function(taulukonAlkio) {
                                            console.log('PÖÖ = ', taulukonAlkio.nimi)
          if (taulukonAlkio.nimi === ehdokas) {
            window.alert('Henkilö on jo tallennettu')
        }
        }) 
        // TODO: IF ehdon täyttyessä hyppää pois tästä 'lisaaMuutos()' -funktiometodista eli keskeytä alla olevien rivien suorittaminen
       
      
       const olioJSON = {
        nimi: this.state.uusiNimi,
        numero: this.state.uusiNumero
      }

  const henkilot = this.state.henkilot.concat(olioJSON)
      this.setState({ // // Lopulta komponentin Tila (state) päivitetään
        henkilot, // uudella muistiinpanolla ja
        uusiNimi: '', // tyhjennetään kontrolloidun syötekomponentin kenttä
        uusiNumero: ''  // tyhjennetään kontrolloidun syötekomponentin kenttä
      })
  }
// ***********************************************************************************************************
  





render() {

    return (
      <div>


        <h2>Puhelinluettelo</h2>
        <LisaysLomake props={this.state} />

        <h2> Lisää uusi</h2>
        <form onSubmit={this.lisaaMuutos}>
          <div>
            nimi:
            <input 
            value={this.state.uusiNimi} 
            // Tapahtumankäsittelijää kutsutaan aina kun syötekomponentissa tapahtuu jotain 
            onChange={this.kasitteleMuutosNimi}
          />
          </div>
          
          
          <div>
            numero:
            <input 
            value={this.state.uusiNumero} 
            // Tapahtumankäsittelijää kutsutaan aina kun syötekomponentissa tapahtuu jotain 
            onChange={this.kasitteleMuutosNumero}
          />
          </div>
          
          
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>



        <h2>Numerot</h2>
        {this.state.henkilot.map(hlo =>  
        <Henkilo key={hlo.nimi} props={hlo} />
        )}


      </div>
    )
  }
}

export default App