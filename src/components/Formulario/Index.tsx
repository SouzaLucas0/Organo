import Input from "../Input/Index";
import Option from "../Option/Index";
import BotaoSubmit from "../Botao/Index"
import './Formulario.css'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { IColaborador } from "../../shared/interfaces/Colaborador";

interface FormularioProps {
    novoIntegrante: (colaborador: IColaborador) => void
}
const Formulario = (props:FormularioProps) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const id = uuidv4();

    const getDados = (event) => {
        event.preventDefault()
        props.novoIntegrante({
            id,
            like: false,
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('')
        setNomeTime('')
        setCorTime('');

        setTimeout(() => {
            window.location.href = `#${id}`;
        }, 200);
        
    }


    return(
        <section>
            <form className="form" onSubmit={getDados}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Input
                    label="Nome"
                    placeholder='seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    required={true}
                />
                <Input
                    label="Cargo"
                    placeholder='seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Input
                    label="Imagem (URL da imagem)"                    
                    placeholder='sua imagem Ex: https://github.com/"Seu Perfil".png'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}                
                />
                <Option 
                    label="Time"
                    placeholder='seu time'
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    required={true}
                />
                <BotaoSubmit>
                    Criar Card
                </BotaoSubmit>
            </form>
            <form className="form" onSubmit={(event) => {
                event.preventDefault();
                props.novoTime({
                    nome: nomeTime,
                    cor: corTime
                })
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Input
                    label="Nome do Time"
                    placeholder='o nome do novo time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                    required={true}
                />
                <Input
                    label="Cor"
                    placeholder='a cor'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <BotaoSubmit>
                    Criar time
                </BotaoSubmit>                
            </form>
        </section>
    );
}

export default Formulario;