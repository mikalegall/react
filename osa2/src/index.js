import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


ReactDOM.render(
  <App  />,
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