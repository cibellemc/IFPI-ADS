import styles from '../../styles/button.module.css'

interface BotaoBonusProps {
    valorBonus?: number
}

export function BotaoBonus(props: BotaoBonusProps) {
    return (
        <button className={styles.Button}>
        {props.valorBonus}%</button>
    )
}