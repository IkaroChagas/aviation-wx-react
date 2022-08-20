import { useState } from 'react';
import { authAxios } from './Api'
import * as C from './App.styles'


function App() {
const [icao, setIcao] = useState('')
const [metar, setMetar] = useState(null);
const [taf, setTaf] = useState(null);


const getMetar = async (icao: string) => {
  const metar = await authAxios.get(`/metar/${icao}`);
      return metar;
}
      
const getTaf = async (icao: string) => {
  const taf = await authAxios.get(`/taf/${icao}`);
      return taf;
}

const handleShowResult = () => {
  getMetar(icao).then((res) => {
    setMetar(res.data)
  });

  getTaf(icao).then((res) => {
    setTaf(res.data)
  });
}


const handleChange = (e:any) => {
}
  
  return (
    <C.Container>
      <C.header>
        <h1>Aviation WX</h1>
      </C.header>
        <label>
      <C.input onChange={handleChange} value={icao}
      placeholder='Digite o código ICAO'/>
      <C.button onClick={handleShowResult}>Buscar</C.button>
      
      {JSON.stringify(metar, null, 2)}
      {JSON.stringify(taf, null, 2)}
      
       </label>
    </C.Container>
  );
}

export default App;
