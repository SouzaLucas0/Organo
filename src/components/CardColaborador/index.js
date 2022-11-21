import './Card.css'

const CardColaborador = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: props.corPrimaria}}>
                <img className='card__img' src={props.colaborador.imagem} alt="Imamgem do colaborador" />
            </div>
            <div className='rodape'>
                <h4 className='card__conteudo-nome'>{props.colaborador.nome}</h4>
                <h5 className='card__conteudo-cargo'>{props.colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default CardColaborador;