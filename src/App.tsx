import { useState, useEffect, ChangeEvent } from 'react';
import {api} from './Api'
import * as C from './App.styles'


function App() {
const [Metar, setMetar] = useState('')
const [Taf, setTaf] = useState('')

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

const handleSearchButton = (e:ChangeEvent<HTMLFormElement>) => {
  e.preventDefault()
  setMetar(e.target.value)
  setTaf(e.target.value)

}
  
  return (
    <C.Container>
      <C.header>
        <h1>Aviation WX</h1>
      </C.header>
      <form onSubmit={handleSearchButton}>
      <C.input type="text"
      placeholder='Digite o código ICAO'
       />
      </form>
      {Metar && JSON.stringify(Metar)}
      {Taf && JSON.stringify(Taf)}
      <C.button>Buscar</C.button>
    </C.Container>
  );
}

export default App;
