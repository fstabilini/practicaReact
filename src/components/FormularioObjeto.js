import React, {useState} from 'react'

export default function FormularioObjeto() {

  const [persona, setPersona] = useState({  
    nombre: '',
    apellido: ''
  })

  console.log(persona);

  // function handleNombre(e) {
  //   setPersona({
  //     ...persona,
  //     nombre: e.target.value
  //   })
  // }

  // function handleApellido(e) {  
  //   setPersona({
  //     ...persona,
  //     apellido: e.target.value
  //   })
  // }

  
  function handleChange(e) {  
    setPersona({
      ...persona,
      [e.target.name]: e.target.value
    })
  }   
  
  function handleSubmit() {        
    setPersona({  
      nombre: '',
      apellido: ''
    })    
  }

  return (
    <div>
      <input type="text" value={persona.nombre} name='nombre' onChange={handleChange}/>
      <input type="text" value={persona.apellido} name= 'apellido' onChange={handleChange}/>
      <button onClick={handleSubmit}
      >Enviar</button>
      </div>
  )
}
