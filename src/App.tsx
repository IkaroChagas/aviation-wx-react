import { useState, useEffect } from "react";
import * as C  from './App.styles';
import {api} from './Api';
import { metarType } from './types/metar'
import { tafType } from './types/taf'


function App() {
  
  const [Metar, setMetar] = useState<metarType>({icao: ''});
  const [Taf, setTaf] = useState<tafType>({icao: ''});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
      loadMetar();
      loadTaf()
  },[Metar, Taf])

  
  const loadMetar = async () => {
      let json = await api.getMetar();
      setMetar(json);
}
  
  const loadTaf = async () => {
      let json = await api.getTaf()
      setTaf(json);
}

  const handleSearchButton = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    setSubmit(true)
  }

  return (
    <C.Container>

      <C.header><h1>
        Aviation WX
      </h1>
      </C.header>
      <div className="form-wx">
        {submit && <div>Enviando informações</div>}
      <form onSubmit={handleSearchButton} >
        <fieldset>
          <label>
            <input type='text'/>
          </label>
        </fieldset>
        <button type="submit">Buscar</button>
      </form>
      {Metar && JSON.stringify(Metar)}
      </div>
        
    </C.Container>
  );

}
export default App;
