import styles from '../../styles/button.module.css'

interface BotaoMilhasProps {
    valorMilhas?: number
    icon?: string
}

export function BotaoMilhas(props: BotaoMilhasProps) {
    return (
        <button className={styles.Button}>{props.icon}{props.valorMilhas}k</button>
    )
}