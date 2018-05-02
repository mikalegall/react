import React from 'react'
import luettelointiPalvelu from '../services/puhelinluettelointi'

/*
// ***********************************************************************************************************
  // Lomakkeen kentän kautta vastaanotetaan muutos eli tieto siitä mitä halutaan poistaa
  kasittelePoistaminen = (event) => {
    event.preventDefault()
    console.log("PÖÖ 'event' = ", event.value)

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
      .catch(virheilmoitus => { // Mikäli promise menee tilaan "response_resolve_result_rejected" käsitellään virheilmoitus 
            // TODO: Käsittele virheilmoitus jollain tavalla
            alert(`Poistettavan olion (ID:llä '${event.id}') poistaminen epäonnistui, koska `, virheilmoitus)
        this.setState({ notes: this.state.henkilot }) // Tökätään renderiä setState-metodin kautta
      })
  }
// ***********************************************************************************************************
*/

const Henkilo = ({ props }) => {


  return (
  
      <div className="pöö">
          {props.nimi} {props.numero} <button type="submit" value={props.id} onClick={this.kasittelePoistaminen} >poista</button>
      </div>

  )
}

export default Henkilo