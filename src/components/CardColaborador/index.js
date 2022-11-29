import './Card.css'
import {AiOutlineCloseCircle, AiFillLike, AiOutlineLike} from 'react-icons/ai'

const CardColaborador = (props) => {
    function favoritar() {
        props.aoLike(props.colaborador.id)
    }
    return(
        <div id={props.colaborador.id} className='colaborador'>
            <AiOutlineCloseCircle className='deletar' onClick={() => props.aoDeletar(props.colaborador.id)}/>
            <div className='cabecalho' style={{backgroundColor: props.corPrimaria}}>
                <img className='card__img' src={props.colaborador.imagem} alt="Imamgem do colaborador" />
            </div>
            <div className='rodape'>
                <h4>
                    {props.colaborador.nome}
                </h4>
                <h5>
                    {props.colaborador.cargo}
                </h5>
                <div className='like'>
                    {props.colaborador.like 
                        ? <AiFillLike onClick={favoritar}/>
                        : <AiOutlineLike onClick={favoritar}/>}
                </div>
            </div>
        </div>
    )
}

export default CardColaborador;