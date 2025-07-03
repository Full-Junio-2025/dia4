import './App.css';
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'
import { useState } from 'react'
import { evaluate } from 'mathjs'
import LogoFreecodecamp from './componentes/LogoFreecodecamp'

function App() {

    const [input,setInput] = useState('');

    const agregarInput = val =>{
       setInput(input + val);
    }

    const calcularResultado = () =>{
        if(input){
            setInput(evaluate(input));
        }else{
            alert('Ingrese valores');
        }

    }

  return (
    <div className="App">
        <LogoFreecodecamp />
        <div className='contenedor-calculadora'>
            
            <Pantalla input={input} />

            <div className='fila'>
                <Boton manejarClic={agregarInput}>100</Boton>
                <Boton manejarClic={agregarInput}>200</Boton>
                <Boton manejarClic={agregarInput}>300</Boton>
                <Boton manejarClic={agregarInput}>+</Boton>
            </div>
            <div className='fila'>
                <Boton manejarClic={agregarInput}>400</Boton>
                <Boton manejarClic={agregarInput}>500</Boton>
                <Boton manejarClic={agregarInput}>600</Boton>
                <Boton manejarClic={agregarInput}>-</Boton>
            </div>

            <div className='fila'>
                <Boton manejarClic={agregarInput}>700</Boton>
                <Boton manejarClic={agregarInput}>800</Boton>
                <Boton manejarClic={agregarInput}>900</Boton>
                <Boton manejarClic={agregarInput}>*</Boton>
            </div>

            <div className='fila'>
                <Boton manejarClic={calcularResultado}>=</Boton>
                <Boton manejarClic={agregarInput}>0</Boton>
                <Boton manejarClic={agregarInput}>.</Boton>
                <Boton manejarClic={agregarInput}>/</Boton>
            </div>

            <div className='fila'>
                <BotonClear manejarClear = {() => setInput('')}>Clear</BotonClear>
            </div>
        </div>
    </div>
  );
}

export default App;
