import React from 'react';
import styled from 'styled-components';

const Font = ({ children, size='13.5pt' ,face="Hanna", weight="normal"})=>{
    const FontStyle= styled.span`
    font-size:${size};
    font-family:${face};
    font-weight:${weight};`;
   return (
     <FontStyle>
        {children}
     </FontStyle>
   )
}

export default Font;