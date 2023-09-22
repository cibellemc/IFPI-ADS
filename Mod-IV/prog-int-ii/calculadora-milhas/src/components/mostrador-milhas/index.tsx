import { BotaoMilhas } from "../botao-milhas"
import { InputDados } from "../input-dados"
import styles from '../../styles/botoes.module.css'
import stylesMostrador from '../../styles/mostrador.module.css'
import { useState } from 'react';

export function MostradorBotoesMilhas() {
  const [quantidadeMilhas, setQuantidadeMilhas] = useState(10);

  /*const aumentarMilhas = (valor: number) => {
    setQuantidadeMilhas(quantidadeMilhas + valor);
    console.log(quantidadeMilhas)
  };

  const diminuirMilhas = (valor: number) => {
    if (quantidadeMilhas + valor >= 0) {
      setQuantidadeMilhas(quantidadeMilhas + valor);
    }
  };*/

  return (
    <div className={stylesMostrador.Mostrador}>
      <InputDados label='Milhas' valor={quantidadeMilhas} />

      <div className={styles.Botoes}>
        <BotaoMilhas valorMilhas={1} /*onClick={() => aumentarMilhas(1000)}*/ />
        <BotaoMilhas valorMilhas={10} /*onClick={() => aumentarMilhas(10000)}*/ />
        <BotaoMilhas valorMilhas={-10} /*onClick={() => diminuirMilhas(10000)}*/ />
        <BotaoMilhas valorMilhas={-1} /*onClick={() => diminuirMilhas(1000)}*/ />
      </div>
    </div>
  );
}
