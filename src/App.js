import { useState } from 'react';
import Banner from './components/Banner/Index';
import Formulario from './components/Formulario/Index';
import Time from './components/Time';

function App() {
  /*Lista de times para o imput select*/
  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57c278',
      corSecundaria:'#d9f7e9'
    },
    {
      nome:'Front End',
      corPrimaria:'#82cffa',
      corSecundaria:'#e8f8ff'
    },
    {
      nome:'Data Science',
      corPrimaria:'#a6d157',
      corSecundaria:'#f0f8e2'
    },
    {
      nome:'Devops',
      corPrimaria:'#e06869',
      corSecundaria:'#fde7e8'
    },
    {
      nome:'UX e Designer',
      corPrimaria:'#d86ebf',
      corSecundaria:'#fae9f5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#ffba05',
      corSecundaria:'#fff5d9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#ff8a29',
      corSecundaria:'#ffeedf'
    }        
  ]
  /*lista de pessoas cadastradas*/
  const [integrantes, setIntegrantes] = useState([]);
  
  const guardaNovoIntegrante = (dados) => {
    setIntegrantes([...integrantes, dados]);
  }

  /*TODO Abstrair times.map para um componente isolado*/
  return (
    <div className="App">
        <Banner />
        <Formulario
          novoIntegrante={guardaNovoIntegrante}
          times={times.map(time => (time.nome))}          
        />         
        {times.map(time => <Time
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={integrantes.filter(item => time.nome === item.time)}
        />)}
    </div>
  );
}

export default App;
