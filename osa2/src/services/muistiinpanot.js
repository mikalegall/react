import axios from 'axios'

// Tämä ei ole React komponentti (tyhmällä komponentilla olisi propsit ja älykkäällä state) vaan moduuli 

const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
   return axios.get(baseUrl)
  /*const request = axios.get(baseUrl)
  */
  // return request.then(response => { return response.data }) Kun sisältää vain yhden lausekkeen voidaan aaltosulkeet ja return pudottaa pois
  /*return request.then(response => response.data) // Poistetaan vastauksesta tilpehöörit (headerit, request statukset yms),
                                                 // kun ollaan kiinnostuneita vain data arraysta
  */
}

const create = (newObject) => {
  // return axios.post(baseUrl, newObject)
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  // return axios.put(`${baseUrl}/${id}`, newObject)
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }   // Palauttaa olion, jonka kenttinä on muistiinpanojen käsittelyä hoitavat funktiot.
                                            // Funktiot palauttavat suoraan axiosin metodien palauttaman promisen.