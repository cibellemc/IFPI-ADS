interface InputDadosProps {
    label?: string
}

export function InputDados(props: InputDadosProps) {
    return (
        <>
            <span>{props.label}</span>
            <div>
                <input type='number' />
            </div>
        </>
    )
}