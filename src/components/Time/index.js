import CardColaborador from '../CardColaborador';
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return(
        (props.colaboradores.length > 0) && 
        <section
            className='time'
            style={{backgroundColor: hexToRgba(props.cor, '0.2')}}
        >
                <input value={props.cor} type="color" className='input-color' onChange={event => {
                    props.mudarCor(event.target.value, props.timeID)
                }}/>
                <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
                <div className='cardColaborador'>
                    {props.colaboradores.map(colaborador => {
                        return(
                            <CardColaborador
                                key={colaborador.id}
                                colaborador={colaborador}
                                corPrimaria={props.cor}
                                aoDeletar={props.aoDeletar}
                                aoLike={props.aoLike}
                            />)
                    })}
            </div>
        </section>
    )
}

export default Time;