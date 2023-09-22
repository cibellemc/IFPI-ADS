import { BotaoBonus } from "../botao-bonus"
import { InputDados } from "../input-dados"
import stylesBotao from '../../styles/botoes.module.css'
import stylesMostrador from '../../styles/mostrador.module.css'

export function MostradorBotoesBonus() {

  return (
    <div className={stylesMostrador.Mostrador}>

        <InputDados label='Bônus' valor={100}/>

        <div className={stylesBotao.Botoes}>
            <BotaoBonus valorBonus={80}/>
            <BotaoBonus valorBonus={100}/>
            <BotaoBonus valorBonus={150}/>
            <BotaoBonus valorBonus={200}/>
            <BotaoBonus valorBonus={250}/>
            <BotaoBonus valorBonus={300}/>
        </div>

    </div>
    
  )
}

