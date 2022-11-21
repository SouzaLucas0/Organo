import './Botao.css'

const BotaoSubmit = (props) => {
    return(
        <button className='botaoSubmit'>
            {props.children}
        </button>
    )
}

export default BotaoSubmit;