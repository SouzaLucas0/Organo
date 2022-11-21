import Input from "../Input/Index";
import Option from "../Option/Index";
import BotaoSubmit from "../Botao/Index"
import './Formulario.css'
import { useState } from "react";

const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const getDados = (event) => {
        event.preventDefault()
        props.novoIntegrante({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('')
    }


    return(
        <section>
            <form className="form" onSubmit={getDados}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Input
                    label="Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    required={true}
                />
                <Input
                    label="Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Input
                    label="Imagem (URL da imagem)"                    
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}                
                />
                <Option 
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    required={true}
                />
                <BotaoSubmit>
                    Criar Card
                </BotaoSubmit>
            </form>
        </section>
    );
}

export default Formulario;