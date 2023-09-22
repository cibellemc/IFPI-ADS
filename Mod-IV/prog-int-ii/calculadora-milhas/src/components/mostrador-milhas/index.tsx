import { BotaoMilhas } from "../botao-milhas"
import { InputDados } from "../input-dados"
import styles from '../../styles/botoes.module.css'
import stylesMostrador from '../../styles/mostrador.module.css'

export function MostradorBotoesMilhas() {

  return (

    <div className={stylesMostrador.Mostrador}>

        <InputDados label='Milhas'/>

        <div className={styles.Botoes}>
            <BotaoMilhas valorMilhas={+1} />
            <BotaoMilhas valorMilhas={+10}/>
            <BotaoMilhas valorMilhas={-10}/>
            <BotaoMilhas valorMilhas={-1}/>
        </div>
        
    </div>
    
  )
}

