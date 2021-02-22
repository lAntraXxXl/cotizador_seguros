import React from 'react';
import styled from '@emotion/styled';
import {primerLetraMayuscula} from '../helper';
import PropTypes from 'prop-types';

const ContendorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {
    const {marca,year,plan} = datos;
    //si algun dato no trae datos devuelve un null y no se carga la vista
    if(marca === '' || year === '' || plan === ''){
        return null;
    }

    return ( 
        <ContendorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {primerLetraMayuscula(marca)}</li>
                <li>Plan: {primerLetraMayuscula(plan)}</li>
                <li>Año del auto: {primerLetraMayuscula(year)}</li>
            </ul>
        </ContendorResumen>
     );
}
 
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;