import React from 'react';
import Note from './components/Note'
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      newNote: '',
      showAll: true
    }
    console.log('Käytiin konstruktorissa')
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
    console.log('Käytiin renderissä')
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


  componentDidMount() {
    console.log('Elinkaarimetodi "componentDidMount" suoritettiin')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('Promise muuttunut fulfilled tilaan ja setState-metodia tökkäisty eli käsketty renderöimään')
        this.setState({ notes: response.data })
      })
  }


}

export default App