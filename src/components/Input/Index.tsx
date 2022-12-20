import './Input.css'
interface InputProps {
    aoAlterado: (valor: string) => void,
    placeholder: string,
    label: string,
    valor: string,
    required?: boolean
}

const Input = ({aoAlterado, label, placeholder, required, valor}: InputProps) => {
    const placeholderValue = `Informe ${placeholder}`;
    let type = "text";
    let className = "form__input"
    if(label === 'Cor') {
        type = 'color'
        className = "form__input color"
    }

    const input = (event:React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(event.target.value);
    }
    return (
        <div>            
            <label
                htmlFor={label}
                className="form__label">
                    {label}
            </label>
            <input
                value={valor}
                onChange={input}
                type={type}
                className={className}
                id={label}
                placeholder={placeholderValue}
                required={required}
            />           
        </div>
    )
}

export default Input;