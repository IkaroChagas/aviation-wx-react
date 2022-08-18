import { useState, useEffect, ChangeEvent } from 'react';
import {api} from './Api'
import * as C from './App.styles'


function App() {
const [metar, setMetar] = useState('');
const [taf, setTaf] = useState('');

useEffect(() => {
  loadMetar();
  loadTaf();
},[])


const loadMetar = async () => {
  let json = await api.getMetar();
  setMetar(json);
}

const loadTaf = async () => {
  let json = await api.getTaf();
  setTaf(json);
}

const handleChangeButton = (e:ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value
  setMetar(value)
  setTaf(value)
}

const showData = () => {
  console.log('NOME', metar && taf)
}

const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
}
  
  return (
    <C.Container>
      <C.header>
        <h1>Aviation WX</h1>
      </C.header>
      <form onSubmit={handleSubmit}>
        <label>
      <C.input onChange={handleChangeButton} type="text" value={metar && taf}
      placeholder='Digite o código ICAO'
       />
       </label>
       <div>
       <C.button onClick={showData}>Buscar</C.button>
       </div>
      </form>
      
      
    </C.Container>
  );
}

export default App;
