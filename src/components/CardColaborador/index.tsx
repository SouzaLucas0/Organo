import './Card.css';
import {AiOutlineCloseCircle, AiFillLike, AiOutlineLike} from 'react-icons/ai';
import { IColaborador } from '../../shared/interfaces/Colaborador';

interface CardColaboradorProps {
    
    corPrimaria: string
    nome: string
    imagem: string
    cargo: string
    data: string
    id: string
    like: boolean
    aoLike: (id:string) => void
    aoDeletar: (id:string) => void
}

const CardColaborador = ({nome, imagem, cargo, corPrimaria, data, like, aoLike, aoDeletar, id}: CardColaboradorProps) => {
    function favoritar() {
        aoLike(id)
    }
    return(
        <div id={id.toString()} className='colaborador'>
            <AiOutlineCloseCircle className='deletar' onClick={() => aoDeletar(id)}/>
            <div className='cabecalho' style={{backgroundColor: corPrimaria}}>
                <img className='card__img' src={imagem} alt="Imamgem do colaborador" />
            </div>
            <div className='rodape'>
                <h4>
                    {nome}
                </h4>
                <h5>
                    {cargo}
                </h5>
                <h5>
                    {new Date(data).toLocaleDateString()}
                </h5>
                <div className='like'>
                    {like 
                        ? <AiFillLike onClick={favoritar}/>
                        : <AiOutlineLike onClick={favoritar}/>}
                </div>
            </div>
        </div>
    )
}

export default CardColaborador;