import { useState } from 'react';
import Banner from './components/Banner/Index';
import Formulario from './components/Formulario/Index';
import Time from './components/Time';
import { v4 as uuidv4 } from 'uuid';
import { IColaborador } from './shared/interfaces/Colaborador';

function App() {
  /*Lista de times para o imput select*/
  const [times, setTime] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57c278',
    },
    {
      id: uuidv4(),
      nome: 'Front End',
      cor: '#82cffa',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#a6d157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#e06869',
    },
    {
      id: uuidv4(),
      nome: 'UX e Designer',
      cor: '#d86ebf',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#ffba05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#ff8a29',
    }        
  ])
  /*lista de pessoas cadastradas*/
  const [integrantes, setIntegrantes] = useState<IColaborador[]>([]);
  const guardaNovoIntegrante = (dados:IColaborador) => {
    setIntegrantes([...integrantes, dados]);
  }

  function deletarColaborador(id:string) {
    setIntegrantes(integrantes.filter(integrante => integrante.id !== id))
  }

  interface ITime {
    id: string
    nome: string
    cor: string
  }

  function mudaCorTime(cor:string, id:string) :ITime  {
    setTime(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime:any) {
    setTime([...times, {...novoTime, id: uuidv4()}])
  }

  function favoritarIntegrante (id:string) {
    setIntegrantes(integrantes.map(integrante => {
      if(integrante.id === id) {
        integrante.like = !integrante.like;        
      }
      return integrante
    }))
  }
  /*TODO Abstrair times.map para um componente isolado*/
  return (
    <div className="App">
        <Banner 
          imgPath = "./img/banner.png"
          alt = "Banner principal do Organo"
        />
        <Formulario
          novoIntegrante={guardaNovoIntegrante}
          times={times.map(time => (time.nome))}
          novoTime={cadastrarTime}
        />         
        {times.map(time => <Time
            key={time.id}
            timeID={time.id}
            nome={time.nome}
            cor={time.cor}
            colaboradores={integrantes.filter(item => time.nome === item.time)}
            aoDeletar={deletarColaborador}
            mudarCor={mudaCorTime}
            aoLike={favoritarIntegrante}
        />)}
    </div>
  );
}

export default App;
