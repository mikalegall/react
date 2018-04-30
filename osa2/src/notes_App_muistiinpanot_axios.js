import React from 'react';
import Note from './components/Note'
import noteService from './services/muistiinpanot'
// import axios from 'axios'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      notes: [/*
              {
                id: 0,
                content: "",
                date: "",
                important: true
              }*/
            ],
      newNote: '',
      showAll: true
    }
    console.log('Käytiin konstruktorissa')
  }



  componentWillMount() {
    console.log('Elinkaarimetodi "componentDidMount" suoritettiin')
    // axios
    //  .get('http://localhost:3001/notes')
    //  .then(response => {
    //    this.setState({ notes: response.data })
    //  })
  noteService
    .getAll()
    .then(response => {
      console.log('Promise muuttunut fulfilled tilaan ja setState-metodia tökkäisty eli käsketty renderöimään')      
      this.setState({ notes: response })
    })
  }


  toggleVisible = () => {
    this.setState({showAll: !this.state.showAll})
  }


addNote = (event) => {
  event.preventDefault()

  const muistiinpanoJSON = {
    content: this.state.newNote,
//    date: new Date().new,
    date: new Date(),
    important: Math.random() > 0.5,
//    id: this.state.notes.length + 1
  }
//  const notes = this.state.notes.concat(muistiinpanoJSON)
        noteService
        .create(muistiinpanoJSON)
    // axios
        // .post('http://localhost:3001/notes', muistiinpanoJSON)
        .then(
          response =>
            {
                console.log("Lisää muistiinpano -toiminnon form-tägi eli REST/put-toiminto: axios:in 'response' = ", response)
                this.setState({ // Lopulta komponentin Tila (state) päivitetään
                  notes: this.state.notes.concat(response), // uudella muistiinpanolla ja
                  newNote: '' // tyhjennetään kontrolloidun syötekomponentin kenttä.
                // Yllä oleva Tilan päivittäminen aiheuttaa renderöinnin, jolloin juuri lisätty uusi muistiinpano
                // saadaan myös ruudulle näkyviin 'componentDidMount()' avulla, joka aiheuttaa taas uudelleen renderöinnin :)
                })
            }
        )
}



/*
// Alla oleva "tehdas" luo yksilöllisiä tapahtumankäsittelijöitä
toggleImportanceOf = (id) => {
  return () => {
    console.log(`importance of ${id} needs to be toggled`)
 
    //const url = `http://localhost:3001/notes/${id}`
      const note = this.state.notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important } // Shallow copy: kenttien arvoina on vanhan olion kenttien arvot.
                                                                  // Jos vanhan olion kentät olisivat itsessään olioita, viittaisivat uuden olion kentät samoihin olioihin.
      noteService
    //axios
      // .put(url, changedNote)
      .update(id, changedNote)
      .then(response => {
        this.setState({
          // notes-taulokon note-oliot
          // Jos id on erisuuri kuin etsittävä id            ? niin lisää notes-taulukkoon olemassa oleva note-olio 
          notes: this.state.notes.map(note => note.id !== id ? note : changedNote)
                                                                  //: muutoin lisää muuttunutNote-olio (notes-taulukkoon) 
        })
      })
  }
}
*/
toggleImportanceOf = (id) => {
  return () => {
    const note = this.state.notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService // Murupolussa ./services/muistiinpanot.js
      .update(id, changedNote)  // oleva funktiometodi "REST/put" (axios.put) käyttää promiseja niinkuin myös fetch
      .then(changedNote => {
        const notes = this.state.notes.filter(n => n.id !== id)
        this.setState({
          notes: notes.concat(changedNote)
        })
      })
      .catch(virheilmoitus => { // Mikäli promise menee tilaan "response_resolve_result_rejected" käsitellään virheilmoitus 
            // TODO: Käsittele virheilmoitus jollain tavalla
            alert(`muistiinpano '${note.content}' on jo valitettavasti poistettu palvelimelta`)
        this.setState({ notes: this.state.notes.filter(n => n.id !== id) }) // Filtteröidään kaikki muut paitsi tämän virheen antaneen muistiinpanon ID näytettäväksi
      })
  }
}



handleNoteChange = (event) => {
  // event.target vastaa kontrolloidun syötekomponentin input-kenttää
    //  event.target.value vastaa kontrolloidun syötekomponentin kentän arvoa
      console.log('handleNoteChange --> event.target.value on: ', event.target.value)
        this.setState({ newNote: event.target.value })
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
          {notesToShow.map(
            note =>
              <Note
                key={note.id}
                note={note}
                toggleImportance={this.toggleImportanceOf(note.id)}
              />
           )}
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