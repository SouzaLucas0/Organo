import './Input.css'
const Input = (props) => {
    const placeholder = props.label.includes('Imagem') ? `Ex: https://github.com/"Seu Perfil".png` :`Informe seu ${props.label}`;

    const input = (event) => {
        props.aoAlterado(event.target.value);
    }
    return (
        <div>            
            <label
                htmlFor="iName"
                className="form__label">
                    {props.label}
            </label>
            <input
                value={props.valor}
                onChange={input}
                type="text"
                className="form__input"
                id="iName"
                placeholder={placeholder}
                required={props.required}
            />           
        </div>
    )
}

export default Input;