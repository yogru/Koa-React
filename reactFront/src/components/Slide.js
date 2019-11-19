import React,{useState} from 'react';
import styled from 'styled-components';
const Slide = (props)=>{
    const [index, setIdx] =useState(0);    
    const {children} = props;  
    const len = children.length;
    const onNext = (nextVal,e)=>{
       e.stopPropagation();
        setIdx(parseInt(nextVal)% len);
    }
    const InputList = Array(len).fill(true).map((_,idx)=>{
        return <Label sel={ index === idx } key={idx}>
                  <input  type="radio" checked={ index === idx}
                    value={idx}
                    onChange={(e)=>onNext(idx,e)}
                    style={{display:'none'}}
                />
               </Label>
    });
    return (
        <DivCon count= {len}>
              {children[index]}
            <RadioNavBlock {...props} >
               {InputList}    
            </RadioNavBlock> 
        </DivCon>
    );

};

export default Slide;

const DivCon=styled.div`
 display:inherit;
 margin:0px;
 padding:0px;
 box-sizing:border-box;
 position:relative;
 height:inherit;
 width:inherit;
`;

const Label = styled.label`
display:inline-block;
vertical-align:middle;
width:10px;
height:10px;
border:2px solid #666;
background:#fff;
transition:0.3s;
border-radius:50%;
cursor:pointer;
margin:3px;
background:${p=>(p.sel&&'#666')||'#FFFFFF'};
`
const RadioNavBlock= styled.div`
text-align:center;
position:absolute;
bottom:${p=>p.navBottom || '10px'};
right: ${p=>p.navRight || '0'};
width:100%;
text-align:center;
`