import React from 'react'
import Bienvenida from './Bienvenida'

export default function Notificaciones() {

  const familia = ['chichi', 'chichina', 'luki', 'sol']

  return (
    <div>

       {familia.map(e => <Bienvenida nombre={e} />)
      }
    </div>
  )
}
