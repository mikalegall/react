import React from 'react'

const Note = ({note, toggleImportance}) => {
  const label = note.important ? 'Poista "Tärkeä" -luokittelu' : 'Aseta tärkeäksi'
  return (
    <li>{note.content} <button onClick={toggleImportance}>{label}</button></li>
  )
}

export default Note

/*
const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}
*/