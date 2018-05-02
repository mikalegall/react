import React from 'react'
import luettelointiPalvelu from '../services/puhelinluettelointi'


// ***********************************************************************************************************
  // Lomakkeen kentän kautta vastaanotetaan muutos eli tieto siitä mitä halutaan poistaa
  kasitteleMuutos = (event) => {
    event.preventDefault()
    console.log("PÖÖ 'event' = ", event)
      luettelointiPalvelu
      .deleteObj(event)
      .then(
        response =>
          {
              console.log("Delete object -toiminnon form-tägi eli REST/delete-toiminto: axios:in 'response' = ", response)

            this.setState({ // Lopulta komponentin Tila (state) päivitetään
                        henkilot: this.state.henkilot.concat(response), // ja
                        uusiNimi: '', // tyhjennetään kontrolloidun syötekomponentin kenttä
                        uusiNumero: '',
                        rajaus: ''
                      // Yllä oleva Tilan päivittäminen aiheuttaa renderöinnin, jolloin juuri poistettu muistiinpano
                      // saadaan myös ruudulta poistettua 'componentDidMount()' avulla, joka aiheuttaa taas uudelleen renderöinnin
                      })
					  
					  // this.setState({ henkilot: response.data })
				  }
			)
  }
// ***********************************************************************************************************



const Henkilo = ({ props }) => {


  return (
  
    <form onSubmit={this.kasitteleMuutos}>
      <div>
          {props.nimi}
          {props.numero}
          <button type="submit" value={props.id}>poista</button>
      </div>
    </form>
  )
}

export default Henkilo