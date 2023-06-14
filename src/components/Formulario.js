import React, {useState} from 'react'

export default function Formulario() {

  const [nombre, setNombre] = useState('')

  console.log("Estado Nombre: ",nombre)

  function cambiar(e) {
    setNombre(e.target.value)
  }

  function borrar () {
    setNombre('')
  }
  
  return (
    <div>
      <input type="text" onChange={cambiar} value={nombre} />
      <button onClick={borrar}>Enviar</button>
      </div>
  )
}










// const [apellido, setApellido] = useState('')
{/* <input type="text" value={apellido} onChange={handleApellido}/> */}
// function handleApellido(e) {
  //   setApellido(e.target.value)
  // } 