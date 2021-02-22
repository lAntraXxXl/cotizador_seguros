import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContedorHeader = styled.header`
    background-color: #2A3A49;
    padding:10px;
    font-weight: bold;
    color:#FFF;
`;

const TextoHeader =styled.h1`
    font-size:2em;
    margin:0;
    font-family: "Salabo 27px", serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
    <ContedorHeader>
        <TextoHeader>{titulo}</TextoHeader>
    </ContedorHeader>
     );
}
 
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;