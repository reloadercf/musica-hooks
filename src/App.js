import React,{useState,useEffect,Fragment} from 'react';
import Formulario from './components/Formulario'

function App() {
  //utilizar use state con 3 states diferentes

  let [artista,agregarArtista]=useState('')
  let [letra,agregarLetra]=useState([])
  let [info,agregarInfo]=useState({})

  return (
    <Fragment>
      <Formulario/>
    </Fragment>
  );
}

export default App;
