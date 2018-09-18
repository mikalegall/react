// Käynnistys: npm run watch

console.log('Moikka, moi! Tämä on Node.js/express backend toteutus :) ')

let taulukkoonTallennettujaOlioita = [
																				{
																					"nimi": "Arto Hellas",
																					"numero": "040-123456",
																					"id": 1
																				},
																				{
																					"nimi": "Martti Tienari",
																					"numero": "040-123456",
																					"id": 2
																				},
																				{
																					"nimi": "Arto Järvinen",
																					"numero": "040-123456",
																					"id": 3
																				},
																				{
																					"nimi": "Lea Kutvonen",
																					"numero": "040-123456",
																					"id": 4
																				}
			  															]


/*
 const http = require('http')	// Ottaa käyttöön Noden sisäänrakennetun web-palvelimen määrittelevän CommonJS-moduulin
								// Vastaa Reactissa ES6-moduulin käyttöönotossa import http from 'http'
*/
const express = require('express')
/*
JavaScriptissä ES6-moduulin käyttöönotossa voitaisiin sanoa myös suoraan vain
	import express from 'express';
*/

/*
 const app = http.createServer((pyynto, vastaus) => {	// CommonJS-moduuli "http" luo http-palvelimen metodilla createServer web-palvelimen
	// response.writeHead(200, { 'Content-Type': 'text/plain' })
  vastaus.writeHead(200, { 'Content-Type': 'application/json' })
  
	// response.end('Morotus vaan sullekin!')
  vastaus.end(JSON.stringify(taulukkoonTallennettujaOlioita))	// Muuttujaan tallennettu taulukko muunetaan JSONiksi stringify-metodilla
})
*/
const app = express()

/* const port = 3001
app.listen(port)
console.log(`Palvelin käynnistetty porttiin ${port}`)
*/
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Palvelin käynnistetty porttiin ${PORT}`)
})



// MIDDLEWARE funktiot alkaa
/*
Middleware functions are functions that have access to 
Route
the request object (req), the response object (res),
and
the next middleware function
(execute any code, make changes to Route aka. the request and the response objects, end the request-response cycle, call the next middleware function)
in the application’s request-response cycle (in the stack).
The next middleware function is commonly denoted by a variable named next.
*/



// HTTP POST -pyyntöön body-osa mukaan
const bodyParser = require('body-parser')	// Node.js-express: body-parser kirjasto https://github.com/expressjs/body-parser
																					// ottaa POST-pyyntöön liitetyn JSON-muotoisen datan ja muuntaa sen JavaScript-olioksi sekä sijoittaa sen
																					// request-olion body-kenttään ennen kuin kutsuu API-endpointin route-käsittelijää

// Middlewareja voi olla käytössä useita, jolloin ne suoritetaan peräkkäin siinä järjestyksessä kun ne on otettu koodissa käyttöön
// HTTP POST -pyyntöön body mukaan JSON muodossa
app.use(bodyParser.json())


//  Käyttötapahtumien muistiin merkitseminen (logg, loki)
const lokitus = (pyynto, vastaus, seuraava) => {
	console.log('Method:', pyynto.method)
	console.log('Path:  ', pyynto.path)
	console.log('Body:  ', pyynto.body)
	console.log('---')
	seuraava()
  }


// Middlewareja voi olla käytössä useita, jolloin ne suoritetaan peräkkäin siinä järjestyksessä kun ne on otettu koodissa käyttöön
app.use(lokitus)


// Sallitaan kommunikointi myös muualta kuin omalta alueelta (esim. eri portista, domainista...)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// lisäämällä package.json tiedostoon
// "dependencies": { "cors": "^2.8.4" }
// tai ajamalla samassa kansiossa komentoriviltä komento npm install cors --save
const cors = require('cors')
// Middlewareja voi olla käytössä useita, jolloin ne suoritetaan peräkkäin siinä järjestyksessä kun ne on otettu koodissa käyttöön
app.use(cors())


// MIDDLEWARE funktiot loppuu




app.get('/', (pyynto, vastaus) =>
	{
		console.log('"Juureen" tehdyn pyynnön mukana tulleet headerit ovat (ALKAA)', pyynto.headers)
		console.log('Pyynnön mukana tulleet headerit (LOPPUU)')
	vastaus.send('<h1>Tämä on etusivu tai itseasiassa backendin Node.js Express-palvelimen toteutus juuressa. Tervehdys vaan teillekin!</h1>')	// Vastauksen "send" metodi saa stringistä johtuen content-type-headerin arvoksi text/html
	}
)


/*
Node.js on Googlen chrome V8 -JavaScriptmoottoriin perustuva JavaScriptin suoritusympäristö,
jolla on paketinhallintaympäristö NPM (node packet manager). Sieltä löytyy web-server paketti nimeltä Express,
joka sisältää tarvittavat tiedostot HTTP-palvelin -moduulin toteuttamiseksi.
*/
// Route on muotoa app.METHOD(PATH, HANDLER) oleva resurssi, jossa
// 'app' nimiseen muuttujaan on sijoitettu Express-palvelinsovellusta vastaava olio.
/*
HTTP-metodi on kohdassa METHOD joko 'get', 'post', 'put' tai 'delete',
endpoint on URI:a määrittelevä 'loremipsus'-osoite kohdassa PATH kuten esim. ('/info'), ja
tapahtuman käsittelijä on foobar(request, response) kohdassa HANDLER kuten esim. 'function (pyynto, vastaus)'
*/
app.get('/info', (pyynto, vastaus) => {

		console.log('Endpointtiin "info" tehdyn pyynnön mukana tulleet headerit ovat (ALKAA)', pyynto.headers)
		console.log('Pyynnön mukana tulleet headerit (LOPPUU)')
		
		vastaus.send('Listattuna ' + taulukkoonTallennettujaOlioita.length + ' henkilön tiedot' + '<br />' + new Date())	// Vastauksen "json" metodi saa content-type-headerin arvoksi application/json
																																																											// NodeJS-expressiä käytettäessä muunnos tapahtuu automaattisesti ilman stringify-metodia
	})


// Lisätään REST toteutus
// Route voidaan myös HTTP-metodin osalta ketjuttaa endpointtiin, jolloin kaikki löytyy kätevästi samasta paikasta
// (katso myös vastaus-olioon liittyvät metodit http://expressjs.com/en/guide/routing.html )	
app.route('/tamaOnSovelluksenEndpointEliURI/:id?') // Kaksoispiste ilmaisee parametrin ja kysymysmerkki ilmaisee, että se ei ole pakollinen (optional)
					.get(function (pyynto, vastaus) {

						const yksiloivaTunnus = Number(pyynto.params.id)	// Castataan JSON-stringi numeroksi

							if (pyynto.params.id === undefined) {

								console.log('Endpointtiin tehdyn "Hae kaikki" pyynnön mukana tulleet headerit ovat (ALKAA)', pyynto.headers)
								console.log('Pyynnön mukana tulleet headerit (LOPPUU)')
								
								vastaus.json(taulukkoonTallennettujaOlioita)	// Vastauksen "json" metodi saa content-type-headerin arvoksi application/json
																															// NodeJS-expressiä käytettäessä muunnos tapahtuu automaattisesti ilman stringify-metodia
							}  else {

												console.log('Pyynnön "GET yksi kpl" mukana tulleet headerit ovat (ALKAA)', pyynto.headers)
												console.log('Pyynnön mukana tulleet headerit (LOPPUU)')
												console.log('yksiloivaTunnus = ', yksiloivaTunnus)

												const haunTulos = taulukkoonTallennettujaOlioita.find
																						(
																							alkioOlio => 
																									alkioOlio.id === yksiloivaTunnus
																						)
												console.log('haunTulos = ', haunTulos)


													if (haunTulos) {	// Javascript-olio on truth, undefined on false
																vastaus.json(haunTulos)
													} else {
																		vastaus.status(404).end()	// Metodi "end" ilmoittaa siitä, että pyyntöön tulee vastata ilman dataa, koska vastaukseen ei liity mitään palautettavaa
																 }

											}

						})

					.post(function (pyynto, vastaus) {

						const alkioOlio = pyynto.body
						console.log('POSTin alkioOlio (body) =', alkioOlio)
						console.log('Pyynnön "POST yksi kpl" mukana tulleet headerit ovat (ALKAA)', pyynto.headers)
						console.log('Pyynnön mukana tulleet headerit (LOPPUU)')

						const uusiOlio = pyynto.body

						/*
							// const maxId = taulukkoonTallennettujaOlioita.length > 0 ? taulukkoonTallennettujaOlioita.map(alkioOlio => alkioOlio.id).sort().reverse()[0] : 0
							// uusiOlio.id = maxId + 1
							const generateId = () => {
							const maxId = taulukkoonTallennettujaOlioita.length > 0 ? taulukkoonTallennettujaOlioita.map(alkioOlio => alkioOlio.id).sort().reverse()[0] : 0
							return maxId + 1
						*/
						function getRandomInt(max) {
							return Math.floor(Math.random() * Math.floor(max));
						}


							if (uusiOlio.nimi === undefined) {
									return vastaus.status(400).json({error: 'Sisältö puuttuu, lisää "NIMI"'})
								}

							if (uusiOlio.numero === undefined) {
								return vastaus.status(400).json({error: 'Sisältö puuttuu, lisää "NUMERO"'})
							}


							// Estäa tiedon lisäämisen mikäli saman niminen henkilö on jo tallennettuna taulukkoon samalla numerolla
							taulukkoonTallennettujaOlioita.map(alkioOlio =>
																			alkioOlio.nimi === uusiOlio.nimi 				
																			&&
																				taulukkoonTallennettujaOlioita.map(alkioOlio =>
																																alkioOlio.numero === uusiOlio.numero
																			?
																			vastaus.status(400).json({error: 'Vain yksilölliset yhdistelmät sallittaan...'})
																			: 0
																												   )
															   )
														
							
							const uusiOlioMuokattu = {
																				id: getRandomInt(9999),
																				nimi: uusiOlio.nimi,
																				numero: uusiOlio.numero
																				// important: uusiOlio.important || false	// Or-lauseessa ei siirrytä oikealle puolelle mikäli vasemman puolen ehto täyttyy
																																									// eli mikäli "important" kenttään on asetettu jokin arvo
																			}

							taulukkoonTallennettujaOlioita = taulukkoonTallennettujaOlioita.concat(uusiOlioMuokattu)	// Tehdään kopio (concat), johon muutos toteutetaan. Tässä tapahtuu
																																																				// varsinainen tallennus palvelimen muistiin
	
							vastaus.json(uusiOlioMuokattu)

						})

						.put(function (pyynto, vastaus) {

							const yksiloivaTunnus = Number(pyynto.params.id)	// Castataan JSON-stringi numeroksi

							console.log('Pyynnön "PUT yksi kpl" mukana tulleet headerit ovat (ALKAA)', pyynto.headers)
							console.log('Pyynnön mukana tulleet headerit (LOPPUU)')  
							// TODO: Muokkaa yhtä "asiaa" ja tallenna se takaisin

						})

						.delete(function (pyynto, vastaus) {

							const yksiloivaTunnus = Number(pyynto.params.id)	// Castataan JSON-stringi numeroksi

							console.log('Pyynnön "DELETE yksi kpl" mukana tulleet headerit ovat (ALKAA)', pyynto.headers)
							console.log('Pyynnön mukana tulleet headerit (LOPPUU)')

							taulukkoonTallennettujaOlioita = taulukkoonTallennettujaOlioita.filter(alkioOlio => alkioOlio.id !== yksiloivaTunnus)

							vastaus.status(204).end()	// Metodi "end" ilmoittaa siitä, että pyyntöön tulee vastata ilman dataa, koska vastaukseen ei liity mitään palautettavaa
						})


						
// MIDDLEWARE funktiot JATKUU alkaa
const erhe = (pyynto, vastaus) => {
	vastaus.status(404).send({erhe: 'Tuntematon endpoint (URI)'})
}

// Middlewareja voi olla käytössä useita, jolloin ne suoritetaan peräkkäin siinä järjestyksessä kun ne on otettu koodissa käyttöön
app.use(erhe)

// MIDDLEWARE funktiot JATKUU loppuu






/*
Ketjutetun routen runko talteen

app.route('/api/persons/:id?')
	.get(function (pyynto, vastaus) {
		if (pyynto.params.id === undefined) {
				// TODO: Palauta kaikki eli käsittele kuin pyyntö olisi tullut endpointtiin /api/persons/
		}  else {
						// TODO: Palauta vain yksi eli parametrin yksilöivä "asia" (käsittele kuin pyyntö olisi tullut esim. endpointtiin /api/persons/4 )
						}
					
	})
	.post(function (pyynto, vastaus) {
				// TODO: Lisää uusi "asia"
	})
	.put(function (pyynto, vastaus) {
				// TODO: Muokkaa yhtä "asiaa" ja tallenna se takaisin
	})
	.delete(function (pyynto, vastaus) {
		const yksiloivaTunnus = Number(pyynto.params.id)	// Castataan JSON-stringi numeroksi
					
		console.log('Pyynnön "DELETE yksi kpl" mukana tulleet headerit ovat (ALKAA)', pyynto.headers)
		console.log('Pyynnön mukana tulleet headerit (LOPPUU)')
				
		taulukkoonTallennettujaOlioita = taulukkoonTallennettujaOlioita.filter(alkioOlio => alkioOlio.id !== yksiloivaTunnus)
					
		vastaus.status(204).end()	// Metodi "end" ilmoittaa siitä, että pyyntöön tulee vastata ilman dataa, koska vastaukseen ei liity mitään palautettavaa
	})
*/

