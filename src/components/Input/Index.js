import './Input.css'
const Input = (props) => {
    const placeholder = `Informe ${props.placeholder}`;
    let type = "text";
    let className = "form__input"
    if(props.label === 'Cor') {
        type = 'color'
        className = "form__input color"
    }

    const input = (event) => {
        props.aoAlterado(event.target.value);
    }
    return (
        <div>            
            <label
                htmlFor={props.label}
                className="form__label">
                    {props.label}
            </label>
            <input
                value={props.valor}
                onChange={input}
                type={type}
                className={className}
                id={props.label}
                placeholder={placeholder}
                required={props.required}
            />           
        </div>
    )
}

export default Input;