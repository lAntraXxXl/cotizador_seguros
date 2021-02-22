import React, {useState} from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor =styled.div`
  max-width:600px;
  margin: 3rem auto;
  box-shadow: 0 0 10px 4px rgba(0,0,0,.25);
  border-radius: 5px;
  overflow: hidden;
`;

const ContenedorFormulario=styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion:0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  });

  const {cotizacion, datos} = resumen;

  const [cargando, guardarCargando] = useState(false);

  return (
    <Contenedor>
      <Header 
        titulo="Cotizador en React"
      />
      <ContenedorFormulario>
        <Formulario 
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        { cargando
          ?
            <Spinner />
          : null
        }
        { !cargando
          ?
            <Resumen 
              datos={datos}
            />
          : null
        }
        { !cargando
          ?
            <Resultado 
              cotizacion={cotizacion}
            />
          : null
        }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
