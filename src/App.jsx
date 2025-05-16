import { useState } from 'react'
import { Button } from './components/Button'

export function App() {
  const [clicked, setClicked] = useState(false)
  const [numero, setNumero] = useState(100)

  function handleAlterarEstado(){
      if (clicked === false) {
        setClicked(true)
        return
      }

      setClicked(false)
  }

  function handleAcrescentar(){
    setNumero(numero+100)
}

  return (
    clicked ? (
      <div>
        <h1>Atividade useState</h1>
        <Button setClicked={handleAlterarEstado} text='Mostrar'/>
        <h2>Acrescentar 100</h2>
        <button onClick={handleAcrescentar}>Somar 100</button>
        <h2>Numero: {numero}</h2> 
      </div>
    ) : (
      <div>
        <h1>Atividade useState</h1>
        <p>Agora você pode me ver!</p>
        <Button setClicked={handleAlterarEstado} text='Esconder'/>
        <h2>Acrescentar 100</h2>
        <button onClick={handleAcrescentar}>Somar 100</button>
        <h2>Numero: {numero}</h2>   
      </div>
    )
  )
}
