import React from 'react'
import ReactDOM from 'react-dom'


/*const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}*/

const Display = ({ counter }) => <div>{counter}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

class App extends React.PureComponent {
    constructor() {
      super()
      this.state = {
        laskuriHyvä: 0,
        laskuriNeutraali: 0,
        laskuriHuono: 0,
        counter: 1
      }
    }
    

    asetaArvoon = (arvo) => {
      return () => {
        this.setState({ laskuriHyvä: arvo })
      }
    }

    
    render() {
      return (
        <div>
          <Display counter={this.state.counter}/>
          <div>
            <Button
              handleClick={this.asetaArvoon(this.state.counter + 1)}
              text="Plus"
            />
            <Button
              handleClick={this.asetaArvoon(this.state.counter - 1)}
              text="Minus"
            />
            <Button
              handleClick={this.asetaArvoon(0)}
              text="Zero"
            />
          </div>
        </div>
      )
    }
  }

  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
