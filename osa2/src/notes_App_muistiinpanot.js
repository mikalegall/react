
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


/*
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form>
          <div>
            nimi: <input />
          </div>
          <div>
            debug: {this.state.newName}
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        foo
      </div>
    )
  }
}

export default App
*/