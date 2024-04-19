import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './componentes/Cabecalho/Cabecalho'
import Lateral_esq from './componentes/Lateral_esq/Lateral_esq'
import Corpo from './componentes/Corpo/Corpo'
import Rodape from './componentes/Rodape/Rodape'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho />
      
      <Lateral_esq />

      <Corpo />
      
      <Rodape />
  
    </>
  )
}

export default App
