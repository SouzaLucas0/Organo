import CardColaborador from '../CardColaborador';
import './Time.css'

const Time = (props) => {

    return(
        (props.colaboradores.length > 0) && 
        <section
            className='time'
            style={{backgroundColor: props.corSecundaria}}>                                
                <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='cardColaborador'>
                    {props.colaboradores.map(colaborador => 
                        <CardColaborador
                            key={colaborador.nome}
                            colaborador={colaborador}
                            corPrimaria={props.corPrimaria}
                        />
                    )}
            </div>
        </section>
    )
}

export default Time;