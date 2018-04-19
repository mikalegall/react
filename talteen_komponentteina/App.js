import React from 'react'
import ElementtiPalikka from './components/ElementtiPalikka'

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

export default App