import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
    border-top : 3px solid #112a45;
    border-radius: 10px;
`;

export default function CardCustum({children}) {
  return (
    <CardStyle>
      {children}
    </CardStyle>
  )
}
