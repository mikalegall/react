import React from 'react';
import ReactDOM from 'react-dom'
import { Näkkileipä } from './Näkkileipä'

/*
const Näkkileipä = (props) =>{
  return (
    <div>
      Keväällä on {props.kevät}
      <br />
      Kesällä on {props.kesä}
      <br />
      Syksyllä on {props.syksy}
      <br />
      Talvella on {props.talvi} ja silloin maistuukin {props.lautanen}
      <br />    
    </div>
  )
}
*/

class Vuodenaika extends React.PureComponent {
    constructor() {
      super()
      this.state = {
        kevät: 'Lämmin',
        kesä: 'Kuuma',
        syksy: 'Märkä',
        talvi: 'Kylmä',
      }  
    }

    render() {
      return (
        <div>
          <Näkkileipä lautanen='kupillinen kahvia' />
        </div>
      )
    }
  }


  ReactDOM.render(
    <Vuodenaika />,
    document.getElementById('root')
  )
