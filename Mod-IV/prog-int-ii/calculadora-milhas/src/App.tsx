import './App.css'
import { InputDados } from './components/input-dados'
import { MostradorBotoesBonus } from './components/mostrador-bonus'
import { MostradorBotoesMilhas } from './components/mostrador-milhas'
import stylesMostrador from './styles/mostrador.module.css'

function App() {
  return (
    <div>
      <h1>Calcular milhas com bônus</h1>
      <MostradorBotoesMilhas />
      <div className={stylesMostrador.Mostrador}>
        <InputDados label='Preço milheiro'/>
      </div>
      <MostradorBotoesBonus />
    </div>
    
  )
}

export default App
