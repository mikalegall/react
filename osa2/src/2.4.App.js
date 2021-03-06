import React from 'react'
import Kurssi from './components/Kurssi'

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2 // Tämä ei aiheuta ongelmaa "Middlewaret" kanssa, koska key on yksilöllinen per elementtilohko
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]
  

    return (
      <div>

          { kurssit.map(
            ob =>
              <Kurssi
                key={ob.id}
                props={ob}
              />
            )
          }
{/*     <Kurssi props={kurssit[0]} />
        <Kurssi props={kurssit[1]} />
*/}
    </div>
    )
  }

export default App