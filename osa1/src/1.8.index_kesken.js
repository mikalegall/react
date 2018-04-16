import React from 'react'
import ReactDOM from 'react-dom'


// Tehdään tyhmä React-komponentti, joka palauttaa JSX-elementin 'button' ja näyttää button-elementissä sen tekstin,
// joka React-komponentille 'PainikeNappi' on annettu sitä kutsuttaessa parametrinä (props)
const PainikeNappi = (ominaisuudet) => {
                      console.log('Tämä on PainikeNappi-elementin vastaanottama "ominaisuudet-olio" (props): ', ominaisuudet)

  const { handleClick, kirjoitus, näkkileipä, foo } = ominaisuudet // Destrukturoinnilla voi kerätä ominaisuus-olion (props) muuttujien arvot suoraan
                                                                   // saman nimisiksi ja omiksi muuttujikseen eli ei tarvitse erikseen kirjoittaa montaa riviä 
                                                                   // const handleClick = this.ominaisuudet.handleClick
                                                                   // const kirjoitus = this.ominaisuudet.kirjoitus
                                                                   // const kirjoitus = this.ominaisuudet.näkkileipä
                                                                   // const kirjoitus = this.ominaisuudet.foo

console.log('handleClick on: ', handleClick)
  return ( // Palauta tätä tyhmää React-komponenttia kutsuneelle taholle JSX-elementti 'button'
    <button onClick={handleClick}>
      {kirjoitus}
      <br />
      {näkkileipä}
    </button>
  )
}

// Sijoita tyhmät React-komponentit 'import' jälkeen (ennen luokan 'Class' luomista tai ennen ReactDOM.render):
// Muodostetaan tässä React-komponentti luokkasyntaksilla Class, josta voi päätellä, että komponentti tarvitsee
// Tila-käsitteen (State) tai käyttää elinkaarimetodeja
class App extends React.PureComponent {
    constructor() {
      super()
      this.state = {
        laskuriHyvä: 0,
        laskuriNeutraali: 0,
        laskuriHuono: 0
      }
    }

    // Kun metodi määritellään Class-propertynä, on määrittelykontekstina App-komponentti ja jokainen sieltä kutsuttava komponentti
    // saa käyttöönsä funktiometodin, jonka this on sidottu App-komponenttiin riippumatta siitä miten ja kenen toimesta metodia kutsutaan. 
    kasvataYhdella = () => {
      this.setState((prevState) => ({
        laskuriHyvä: prevState.laskuriHyvä + 1
      }));
    }

    asetaArvoon = (arvo) => {
      return () => {
        this.setState({ laskuriHyvä: arvo })
      }
    }
  

    render() {

      return (
        <div>
          <h2>anna palautetta</h2>
          <p>
{/*          <button onClick={() => this.setState({ laskuriHyvä: this.state.laskuriHyvä + 1 }) & console.log('Klikattiin "Hyvä"')}>
*/}
            {/* Kutsutaan tyhmää React-komponenttia nimeltä 'PainikeNappi' ja annetaan sille 'kirjoitus' niminen parametri (props), jolle määritellään arvo "Hyvä" */}
            <PainikeNappi kirjoitus='Hyvä' näkkileipä='PÖÖ' foo='Bar'
                 // onClick-attribuutille pitää antaa arvoksi aaltosulkeissa viite koodissa määriteltyyn funktioon
                 onClick={this.asetaArvoon(this.state.counter+1)}
             />

{/*          <button onClick={() => this.setState({ laskuriNeutraali: this.state.laskuriNeutraali + 1 }) & console.log('Klikattiin "Neutraali"')}>
            neutraali
*/}
            <PainikeNappi onClick={() => this.setState.laskuriNeutraali+ 1} 
                                    kirjoitus='Neutraali'
             />
{/*         <button onClick={() => this.setState({ laskuriHuono: this.state.laskuriHuono + 1 }) & console.log('Klikattiin "Huono"')}>
            huono
*/}            <PainikeNappi onClick={() => this.setState.laskuriHuono + 1} 
                                    kirjoitus='Huono'
             />
          </p>
          <h2>statistiikka</h2>
          <p>
            Hyvä {this.state.laskuriHyvä}
            <br />
            Neutraali {this.state.laskuriNeutraali}
            <br />
            Huono {this.state.laskuriHuono}
            <br />
            Keskiarvo { (this.state.laskuriHyvä - this.state.laskuriHuono) / (this.state.laskuriHyvä + this.state.laskuriNeutraali + this.state.laskuriHuono) }
            <br />
            Positiivisia { Math.round((this.state.laskuriHyvä * 100 / (this.state.laskuriHyvä + this.state.laskuriNeutraali + this.state.laskuriHuono)),1) } %
        </p>
        </div>
      )
    }
  }

  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
