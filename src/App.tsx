import { ChangeEvent, useState } from "react";
import * as C  from './App.styles';


function App() {

  const [Metar, setMetar] = useState<string>('');
  const [Taf, setTaf] = useState<string>('');
  const API_KEY =`${process.env.REACT_APP_API_KEY}>`;

  const loadMetar = async () => {
      let response = await fetch (`https://api.checkwx.com/metar/${('')}/decoded/&API_KEY=${process.env.REACT_APP_API_KEY}`);
      let jsonMetar = await response.json()
      return setMetar(jsonMetar);
}
  

  const loadTaf = async () => {
      let response = await fetch (`https://api.checkwx.com/taf/${('')}/decoded/&API_KEY=${process.env.REACT_APP_API_KEY}`);
      let jsonTaf = await response.json()
      return setTaf(jsonTaf);
}


  const handleSearchButton = (e:ChangeEvent<HTMLButtonElement>) => {
       setMetar(e.target.value)
       setTaf(e.target.value)
       loadMetar()
       loadTaf()
}

  return (
    <C.Container>
        <C.header>Aviation WX</C.header>
        <C.searchInput
        className="searchInfo">
        <input type="text" value={Metar && Taf}
         placeholder="Digite o código ICAO"/>
        <C.button onChange={handleSearchButton}>Buscar</C.button>
        </C.searchInput>
    </C.Container>
  );

}
export default App;
