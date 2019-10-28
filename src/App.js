import React,{useState,useEffect,Fragment} from 'react';
import Formulario from './components/Formulario'

function App() {
  //utilizar use state con 3 states diferentes

  let [artista,agregarArtista]=useState('')
  let [letra,agregarLetra]=useState([])
  let [info,agregarInfo]=useState({})

  //metodo para consultar la api de letras de canciones

    const consultarAPILetra=(busqueda)=>{
      console.log(busqueda)
    }

  return (
    <Fragment>
      <Formulario
      consultarAPILetra={consultarAPILetra}
      />
    </Fragment>
  );
}

export default App;
