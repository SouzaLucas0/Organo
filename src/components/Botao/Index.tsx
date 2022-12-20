import { ReactElement } from 'react';
import './Botao.css'
import React from 'react';


interface BotaoProps {
    children: ReactElement | string
}

const BotaoSubmit = (children: BotaoProps) => {
    return(
        <button className='botaoSubmit'>
            {children}
        </button>
    )
}

export default BotaoSubmit;