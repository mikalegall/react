import axios from 'axios'

// Tämä ei ole React komponentti (tyhmällä komponentilla olisi propsit ja älykkäällä state) vaan moduuli

const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  // return axios.get(baseUrl)
  const request = axios.get(baseUrl)
  /*
  // return request.then(response => { return response.data }) Kun sisältää vain yhden lausekkeen voidaan aaltosulkeet ja return pudottaa pois
  /*return request.then(response => response.data) // Poistetaan vastauksesta tilpehöörit (headerit, request statukset yms),
                                                 // kun ollaan kiinnostuneita vain data arraysta
  */

  const nonExisting = {
    id: 10000,
    content: 'Tätä muistiinpanoa ei ole palvelimella',
    date: '2017-12-10T17:30:31.098Z',
    important: true
  }

  return request.then(response => response.data.concat(nonExisting))
}


const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}


const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }