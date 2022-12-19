import '../Input/Input.css'

interface OptionProps {
    aoAlterado: (valor:string) => void
    label: string
    valor: string
    required: boolean
    itens: string[]
}

const Option = (props: OptionProps) => {
    const input = (event:React.ChangeEvent<HTMLSelectElement>) => {
        props.aoAlterado(event.target.value);
    }    
    return(
        <div>
            <label
                htmlFor="iTime"
                className='form__label'>
                    {props.label}
            </label>
            <select
                name="time"
                id="iTime"
                className='form__input'
                value={props.valor}
                onChange={input}
                required={props.required}>
                    <option value="">Escolha seu Time</option>
                    
                    {props.itens.map(item => (
                        <option key={item}>{item}</option>
                    ))}
            </select>
        </div>
    )
}

export default Option