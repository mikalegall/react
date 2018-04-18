// import React from 'react'
import React, {Component} from 'react';
import ReactDOM from 'react-dom'

function Näkkileipä(props) {
  return (
    <div>
      Keväällä on {props.kevät}
      <br />
      Kesällä on {props.kesä}
      <br />
      Syksyllä on {props.syksy}
      <br />
      Talvella on {props.talvi} ja silloin maistuukin {props.lautanen}   
    </div>
  )
}
export default Näkkileipä;
