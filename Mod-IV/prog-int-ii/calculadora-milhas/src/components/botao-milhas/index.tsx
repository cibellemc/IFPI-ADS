import styles from '../../styles/button.module.css'

interface BotaoMilhasProps {
    valorMilhas?: number
    onClick?: () => void
}

export function BotaoMilhas(props: BotaoMilhasProps) {
    return (
        <button className={styles.Button}>{props.valorMilhas}k</button>
    )
}