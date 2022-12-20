import CardColaborador from '../CardColaborador';
import './Time.css'
import hexToRgba from 'hex-to-rgba';
import { IColaborador } from '../../shared/interfaces/Colaborador';
import { ITime } from '../../shared/interfaces/ITimes';

interface TimeProps {
    colaboradores: IColaborador[],
    aoDeletar: (id:string) => void
    aoLike: (id:string) => void
    mudarCor: (cor: string, id: string) => void
    cor: string
    timeID: string
    nome: string
}

const Time = ({aoDeletar, aoLike, colaboradores, cor, mudarCor, nome, timeID}: TimeProps) => {


    return(
        <>
            {(colaboradores.length > 0) &&         
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
                                    key={colaborador.id}
                                    nome={colaborador.nome}
                                    imagem={colaborador.imagem}
                                    cargo={colaborador.cargo}
                                    like={colaborador.like}
                                    id={colaborador.id}
                                    data={colaborador.data}
                                    corPrimaria={cor}
                                    aoDeletar={aoDeletar}
                                    aoLike={aoLike}
                                />)
                        })}
                </div>
            </section>}
        </>
    )
}

export default Time;