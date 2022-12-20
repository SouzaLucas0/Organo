import { ReactElement } from 'react';
import './Botao.css'


interface BotaoProps {
    children: ReactElement | string
}

const BotaoSubmit = (props: BotaoProps) => {
    return(
        <button className='botaoSubmit'>
            
                {props.children}
            
        </button>
    )
}

export default BotaoSubmit;