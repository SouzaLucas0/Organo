import { useState } from 'react';
import Banner from './components/Banner/Index';
import Formulario from './components/Formulario/Index';
import Time from './components/Time';
import { v4 as uuidv4 } from 'uuid';

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
  const [integrantes, setIntegrantes] = useState([
    {
      id: uuidv4(),
      like: false,
      nome: 'Lucas Souza',
      cargo: 'dev',
      imagem: 'https://github.com/SouzaLucas0.png',
      time: times[1].nome
    },

    {
      id: uuidv4(),
      like: false,
      nome: 'Lucas Souza',
      cargo: 'dev',
      imagem: 'https://github.com/SouzaLucas0.png',
      time: times[2].nome
    },
  ]);
  const guardaNovoIntegrante = (dados) => {
    setIntegrantes([...integrantes, dados]);
  }

  function deletarColaborador(id) {
    setIntegrantes(integrantes.filter(integrante => integrante.id !== id))
  }

  function mudaCorTime(cor, id) {
    setTime(times.map(time => {
      if(time.id === id) {
        time.cor = cor;        
      }
      return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTime([...times, {...novoTime, id: uuidv4()}])
  }

  function favoritarIntegrante (id) {
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
        <Banner />
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
