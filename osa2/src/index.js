import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

/* import axios from 'axios'
axios.get('http://localhost:3001/notes')
     .then(response =>
        {
          const notes = response.data
  
            ReactDOM.render(
              <App notes={notes} />,
                document.getElementById('root')
            )
        }
      )
*/