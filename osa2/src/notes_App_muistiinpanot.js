
import React from 'react';
import Note from './components/Note'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: props.notes,
      newNote: 'uusi muistiinpano...',
      showAll: true
    }
}



addNote = (event) => {
  event.preventDefault()
  
  const muistiinpanoJSON = {
    content: this.state.newNote,
    date: new Date().new,
    important: Math.random() > 0.5,
    id: this.state.notes.length + 1
  }

  const notes = this.state.notes.concat(muistiinpanoJSON)

  this.setState({ // // Lopulta komponentin Tila (state) päivitetään
    notes, // uudella muistiinpanolla ja
    newNote: ''   // tyhjennetään kontrolloidun syötekomponentin kenttä
  })
}

handleNoteChange = (event) => {
  // event.target vastaa kontrolloidun syötekomponentin input-kenttää
    //  event.target.value vastaa kontrolloidun syötekomponentin kentän arvoa
      console.log('handleNoteChange --> event.target.value on: ', event.target.value)
        this.setState({ newNote: event.target.value })
}

toggleVisible = () => {
  this.setState({showAll: !this.state.showAll})
}

  render() {
                        // If ("boolean")  ? then             : else
    const notesToShow = this.state.showAll ? this.state.notes : this.state.notes.filter(note => note.important === true)
      
    const label = this.state.showAll ? 'vain tärkeät' : 'kaikki'
    

      return (
        
      <div>
        <h1>Muistiinpanot</h1>
        <div>
          <button onClick={this.toggleVisible}>
            näytä {label}
          </button>
        </div>
        <ul>
          {notesToShow.map(note => <Note key={note.id} note={note} />)}
        </ul>
        <form onSubmit={this.addNote}>
          <input 
            value={this.state.newNote} 
            // Tapahtumankäsittelijää kutsutaan aina kun syötekomponentissa tapahtuu jotain 
            onChange={this.handleNoteChange}
          />
              <button type="submit">tallenna</button>
        </form>
      </div>
    )
  }
}

export default App


/* index.js

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    id: 1,
    content: 'HTML on helppoa',
    date: '2017-12-10T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Selain pystyy suorittamaan vain javascriptiä',
    date: '2017-12-10T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
    date: '2017-12-10T19:20:14.298Z',
    important: true
  }
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)

*/


/* Note.js
import React from 'react'

const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

export default Note
*/