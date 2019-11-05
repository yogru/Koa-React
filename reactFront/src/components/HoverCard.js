import React  from 'react';
import {
  Card, CardImg
} from 'reactstrap';
import styled from 'styled-components';

const HoverCard = ({src ,id})=>{
    return (
        <HoverDIV id={id}>
           <Card  style={defaultCardStyle } >
             <CardImg top width="100%" src={src} alt="Card image cap" />
           </Card>
        </HoverDIV>
    );
}
export default HoverCard;

const defaultCardStyle= {
  backgroundColor: '#fff',
  borderColor: '#fff'
};

const HoverDIV = styled.div`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
`
