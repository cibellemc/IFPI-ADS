interface InputDadosProps {
    label?: string
    valor: number
    onChange?: () => {}
}

export function InputDados(props: InputDadosProps) {
    return (
        <>
            <span>{props.label}</span>
            <div>
                <input type='number' value={props.valor}/>
            </div>
        </>
    )
}