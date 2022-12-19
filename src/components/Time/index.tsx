import CardColaborador from '../CardColaborador';
import './Time.css'
import hexToRgba from 'hex-to-rgba';
import { IColaborador } from '../../shared/interfaces/Colaborador';

interface TimeProps {
    colaboradores: IColaborador[],
    aoDeletar: (id:number) => void
    aoLike: (id:number) => []   
    mudarCor: (cor: string, id: number) => []
    cor: string
    timeID: number
    nome: string
}

const Time = ({aoDeletar, aoLike, colaboradores, cor, mudarCor, nome, timeID}: TimeProps) => {
    return(
        (colaboradores.length > 0) && 
        <section
            className='time'
            style={{backgroundColor: hexToRgba(cor, '0.2')}}
        >
                <input value={cor} type="color" className='input-color' onChange={event => {
                    mudarCor(event.target.value, timeID)
                }}/>
                <h3 style={{borderColor: cor}}>{nome}</h3>
                <div className='cardColaborador'>
                    {colaboradores.map(colaborador => {
                        return(
                            <CardColaborador
                                nome={colaborador.nome}
                                imagem={colaborador.imagem}
                                cargo={colaborador.cargo}
                                key={colaborador.id}
                                like={colaborador.like}
                                id={colaborador.id}
                                corPrimaria={cor}
                                aoDeletar={aoDeletar}
                                aoLike={aoLike}
                            />)
                    })}
            </div>
        </section>
    )
}

export default Time;