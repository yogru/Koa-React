import react from 'react';
import styled from 'styled-components';

const PRE = styled.pre`
white-space:pre-line;
`;

 const FONT =(styled.div`
     display:inline;
    font-size:${ p=>p.size || '13.5pt'};
    font-family:${p=>p.face|| 'Hanna' };
    font-weight:${p=>p.weight || 'normal'};
`);

export {FONT,PRE}

// const Font = ({ children, size='13.5pt' ,face="Hanna", weight="normal"})=>{
//     const FontStyle= styled.span`
//     font-size:${size};
//     font-family:${face};
//     font-weight:${weight};`;
//    return (
//      <FontStyle>
//           {children}
//      </FontStyle>
//    )
// }