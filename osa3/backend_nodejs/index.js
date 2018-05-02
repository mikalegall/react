console.log('Moikka, moi! :) ')

let muistiinpanot = [
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


/*
 const http = require('http')	// Ottaa käyttöön Noden sisäänrakennetun web-palvelimen määrittelevän CommonJS-moduulin
								// Vastaa Reactissa ES6-moduulin käyttöönotossa import http from 'http'
*/
const express = require('express')


/*
 const app = http.createServer((pyynto, vastaus) => {	// CommonJS-moduuli "http" luo http-palvelimen metodilla createServer web-palvelimen
	// response.writeHead(200, { 'Content-Type': 'text/plain' })
  vastaus.writeHead(200, { 'Content-Type': 'application/json' })
  
	// response.end('Morotus vaan sullekin!')
  vastaus.end(JSON.stringify(muistiinpanot))	// Muuttujaan tallennettu taulukko muunetaan JSONiksi stringify-metodilla
})
*/
const app = express()

		app.get('/', (pyynto, vastaus) => {
  
			vastaus.send('<h1>Tervehdys vaan teillekin!</h1>')	// Vastauksen "send" metodi saa stringistä johtuen content-type-headerin arvoksi text/html
		}
		)


	app.get('/kahvikuppi', (pyynto, vastaus) => {
			vastaus.json(muistiinpanot)	// Vastauksen "json" metodi saa content-type-headerin arvoksi application/json
										// NodeJS-expressiä käytettäessä muunnos tapahtuu automaattisesti ilman stringify-metodia
	})


/* const port = 3001
app.listen(port)
console.log(`Palvelin käynnistetty porttiin ${port}`)
*/
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Palvelin käynnistetty porttiin ${PORT}`)
})
