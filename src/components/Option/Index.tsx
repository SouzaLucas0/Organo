import '../Input/Input.css'

interface OptionProps {
    aoAlterado: (valor:string) => void
    label: string
    valor: string
    itens: string[]
    placeholder: string
    required?: boolean
}

const Option = ({aoAlterado, label, valor, itens, placeholder, required = false}: OptionProps) => {
    const input = (event:React.ChangeEvent<HTMLSelectElement>) => {
        aoAlterado(event.target.value);
    }    
    return(
        <div>
            <label
                htmlFor="iTime"
                className='form__label'>
                    {label}
            </label>
            <select
                name="time"
                id="iTime"
                className='form__input'
                value={valor}
                onChange={input}
                required={required}>
                    <option value="">Escolha seu Time</option>
                    
                    {itens.map(item => (
                        <option key={item}>{item}</option>
                    ))}
            </select>
        </div>
    )
}

export default Option