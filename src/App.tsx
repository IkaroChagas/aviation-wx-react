import { ChangeEvent, useState } from 'react';
import { authAxios } from './config/Api'
import * as C from './App.styles'


function App() {
const [icao, setIcao] = useState('');
const [metar, setMetar] = useState<any>([]);
const [taf, setTaf] = useState<any>([]);
const [loading, setLoading] = useState(false);

const handleShowResult = async () => {
      setLoading(true)
  const metarData = await authAxios.get(`/metar/${icao}/`);
  const tafData = await authAxios.get(`/taf/${icao}/`);
      setMetar(metarData.data)
      setTaf(tafData.data)
      setIcao('')
      setLoading(false)
}

const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
  const icao = e.target.value;
  setIcao(icao)
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
       <C.msg>
        <C.load>{loading && 'Carregando...'}</C.load>
        {metar && 
        <>
        <C.textmetar><p>{metar.data}</p></C.textmetar>
        </> 
        }
       {taf &&
        <>
        <C.texttaf><p>{taf.data}</p></C.texttaf>
        </> 
        }
       </C.msg>
       </label>
    </C.Container>
  );
}

export default App;
