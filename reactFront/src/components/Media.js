import React from 'react';
import styled from 'styled-components';
import {Grid} from './Grid';

const MediaTemplate = styled(Grid)`
  grid-template-areas:
    "aside header header"
    "aside desc desc"
    "aside desc desc";
   width:100%;
   height:100%;
  align-items:stretch;
  justify-items:stretch;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;

const MediaComponent = (props)=>{
     const {img,header, children } =props;
     const Img =img&&img.src && <Image {...img} alt={img.alt || 'empty'}/>
    return (
      <MediaTemplate>
            <MediaHeader >{header}</MediaHeader>
            <MediaAside>{Img}</MediaAside>
             <MediaDesc>
                {children}
            </MediaDesc>
      </MediaTemplate>
    );
}
export default MediaComponent;
// style
const MediaHeader = styled.div`
  grid-area: header;
  border-bottom:1px solid #D8D8D8; 
`
const MediaDesc =styled.div`
  margin-top:30px;
  grid-area: desc;
`
const MediaAside = styled.div`
grid-area: aside;
align-self:center;
justify-items:center;
overflow:hidden;
`
const Image =  styled.img`
  width:${p=>p.width || '80%' };
  height:${p=>p.height || '300px' };
  display: block;
  box-sizing:border-box;
  margin-left:${p=>p.marginLeft || '30px' };
`