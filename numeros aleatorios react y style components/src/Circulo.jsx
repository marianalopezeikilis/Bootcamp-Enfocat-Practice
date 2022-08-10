import React from "react";
import styled, { css } from 'styled-components'

const CirculoSt = styled.div`
  background-color: pink;
  border-radius: 100%;
height:60px;
width:60px;
color:white;
text-align:center;
font-size: 3em;
`;

function Circulo(props) {
  return <CirculoSt >{props.texto}</CirculoSt>;
}

export default Circulo;
