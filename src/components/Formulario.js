import React, {useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaYear, calcularMarca, obtenerPlan} from '../helper';
import PropTypes from 'prop-types';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select =styled.select`
    display: block;   
    width: 100%;
    padding: 8px;
    border: 1px solid #E3EAF4;
    -webkit-appearance:none;
    border-radius:8px;
    color: #555;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #5BA1A5;
    border: none;
    border-radius: 4px;
    color: #FFF;
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin: 2rem auto;
    padding: 1rem;
    text-align: center;
    transition: background-color .3s ease;
    width: 60%;

    &:hover{
        background-color: #81C490;
        cursor: pointer;
    }   
`;

const Error = styled.div`
    background-color: #E14A4E;
    color: #FFF;
    margin-bottom: 2rem;
    padding: 1rem;
    text-align: center;
    width: 100%;
`;

const Formulario = ({guardarResumen, guardarCargando}) => {

    const [datos, guardarDatos] = useState({
        marca:'',
        year:'',
        plan:''
    });

    const [error, guardarError] = useState(false);

    const {marca,year,plan} = datos;

    const obtenerDatos = e => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarServicio = e => {
        e.preventDefault();

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);
        //definimos la base $$
        let resultado = 2000;

        //diferencia de años
        const diferencia = obtenerDiferenciaYear(year);

        //por cada año hay que restar el 3%
        resultado -= ((diferencia  * 3) * resultado) / 100;

        //europeo aumenta 30%
        //americano aumenta 15%
        //asiatico aumenta 5%
        resultado = calcularMarca(marca) * resultado;

        //seguro basico aumenta 20%
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

        guardarCargando(true);

        setInterval(() => {
            guardarCargando(false);
            //seguro premium aumenta 50%
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            })
        }, 3000);
    }

    return ( 

        <form onSubmit={cotizarServicio}>
            { error ? <Error> Todos los campos son obligatorios.</Error>: null}
            <Campo>
                <Label>Marca</Label>
                <Select name="marca" value={marca} onChange={obtenerDatos}>
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select name="year" value={year} onChange={obtenerDatos}>
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio type="radio" name="plan" value="Basico" checked={plan === "Basico"} onChange={obtenerDatos} /> Básico
                <InputRadio type="radio" name="plan" value="Premium" checked={plan === "Premium"} onChange={obtenerDatos} /> Premium
            </Campo>
            
            <Boton type="submit">Cotizar</Boton>
        </form>

     );
}

Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}

 
export default Formulario;