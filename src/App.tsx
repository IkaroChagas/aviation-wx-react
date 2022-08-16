import { ChangeEvent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as C  from './App.styles';
import {api} from './Api';
import { metarType } from './types/metar'
import { tafType } from './types/taf'

function App() {
  const params = useParams();

  const [Metar, setMetar] = useState<metarType>({icao: '', raw_text: ''});
  const [Taf, setTaf] = useState<tafType>({icao: '', raw_text: ''});
  
  useEffect(( ) => {
    loadMetar();
    loadTaf()
  },[])

  
  const loadMetar = async () => {
      let json = await api.getMetar();
      setMetar(json);
}
  
  const loadTaf = async () => {
      let json = await api.getTaf()
      setTaf(json);
}

  const handleSearchButton = (e:ChangeEvent<HTMLButtonElement>) => {
       setMetar(e.target.value)
       setTaf(e.target.value)    
}

  return (
    <C.Container>
        <C.header>Aviation WX</C.header>

        <C.searchInput width={300}
         className="searchInfo"
         type="text" value={Metar && Taf}
         placeholder="Digite o código ICAO">
         </C.searchInput>
         <C.Button onChange={handleSearchButton}>Buscar</C.Button>
        
    </C.Container>
  );

  // 1 - npm run build
  // 2- npm install -g serve serve -s build

}
export default App;
