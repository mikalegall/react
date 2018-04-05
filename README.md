# react
hyy_mooc_fullstack_spa_react_redux_node.js_mongodb
http://mooc.fi/courses/2018/fullstack/

PERUSKOODI
import React from 'react'
import ReactDOM from 'react-dom'


/** Uudelleen käytettävien CSS-määritysten luominen JSX-koodissa voi olla var, let tai const */
var tyylit = {
	color:'green',
	backgroundColor:'white',
	fontWeight:'bold'
}


/** Tämän React-komponentin sisään kaikki muu rakentuu  */
const SPAsovellusYlinTaso = () => {
    return (
        <div>

            {/** Kutsutaan tähän kohtaan näytettäväksi alemman tason komponentti */}
            <Komponentti1 />
            
            {/** Tässä "SPAsovellusYlinTaso"-tasoa alemmalle komponentille välitetään "properties"-ominaisuuksia */}
            <Komponentti2 omppu_ominaisuus='Maatuskanuken sisällä oleva Kindermunan kapseli' />
            
            {/* Samaa komponenttia voidaan käyttää uudelleen monta kertaa */}
            <Komponentti1 />
        </div>
      )
}    


        /** Luodaan uudelleen käytettävä React-komponentti */
        const Komponentti1 = () => {
            /** Tässä voi julistaa tarpeen mukaan paikallisia muuttujia */
            return (
                <div>
                {/** JSX-koodia, joka näyttää HTML-merkinnöiltä */}
                <p>Minä olen "const" Komponentti-muuttuja, joka tuodaan ylimmän tason "SPAsovellusYlinTaso"-komponentin sisältöön</p>
                </div>
            )
        }


                /** Luodaan uudelleen käytettävä React-komponentti */
                /** Komponentille voi antaa myös "properties"-ominaisuuksia */
                const Komponentti2 = (props) => {
                    return (
                        <div>
                        <p>Minä olen <span style={{color: 'red'}}> {props.omppu_ominaisuus}</span>, joka tuodaan ylimmän tason "SPAsovellusYlinTaso"-komponentin sisältöön</p>

                        {/** Uudelleen käytettävien CSS-määritysten käyttäminen JSX-koodissa */}
                        <div style={tyylit}>Minut on tyylitelty koodissa "var tyylit" kohdassa</div>
                        </div>
                    )
                }

/** Lopuksi piirretään (renderöidään) sivu näytettäväksi */
ReactDOM.render(
    <SPAsovellusYlinTaso />,
    document.getElementById('root')
)