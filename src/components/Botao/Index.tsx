import { ReactElement } from 'react';
import './Botao.css'
import React from 'react';


interface BotaoProps {
    children: ReactElement
}

const BotaoSubmit = (props: BotaoProps) => {
    return(
        <button className='botaoSubmit'>
            {props.children}
        </button>
    )
}

export default BotaoSubmit;