import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const muistiinpanot = [
  {
    avain: 1,
    sisältö: 'HTML on hyvin tuskallista musiikki leikkiä',
    date: '2017-12-10T17:30:31.098Z',
    important: true
  },
  {
    avain: 2,
    sisältö: 'Selain pystyy suorittamaan vain javascriptiä',
    date: '2017-12-10T18:39:34.091Z',
    important: false
  },
  {
    avain: 3,
    sisältö: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
    date: '2017-12-10T19:20:14.298Z',
    important: true
  }
]



ReactDOM.render(
  <App ominaisuusProperties={muistiinpanot} />,
  document.getElementById('root')
)


/*
const { ominaisuusProperties } = parametrinaProps;

const rivitTaulukossa = () =>
ominaisuusProperties.map(   // Jokaiselle muistiinpanot-nimisen taulukko-olion alkiolle annetaan väliaikainen työnimi "alkioOlio", jolla yhteen alkioon viitataan 
    alkioOlio =>
        <li key={ alkioOlio.avain }>
            {alkioOlio.sisältö}
            <br />
            {alkioOlio.date}
        </li>
)

  return (
    <div>
      <h1>Muistiinpanot</h1>
      <ul>
        {rivitTaulukossa()}
      </ul>
    </div>
  )
}
*/

/*
const ElementtiPalikka = ({ parametrinaProps }) => {
  return (
    <li>{parametrinaProps.sisältö}</li>
  )
}

const App = ({ ominaisuusProperties }) => {
  return (
    <div>
      <h1>Muistiinpanot</h1>
      <ul>
        {ominaisuusProperties.map(
          alkioOlio =>
            <ElementtiPalikka
              key={alkioOlio.avain}
              parametrinaProps={alkioOlio}
            />
        )
        }
      </ul>
    </div>
  )
}
*/