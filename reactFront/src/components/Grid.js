import React from 'react';
import styled from 'styled-components';

// 꼬우면 styled 로 직접 변경해라 ! 
// 일단 쓰기 쉽게 만든다!
export const Grid= styled.div`
  display: grid;
  box-sizing:border-box;
  width:${p=>p.width || '100vw' };
  height:${p=>p.height || '100vh'};
  grid-template-columns:repeat(${p=>(p.colCount || 'auto-fit')},1fr);
  grid-template-rows:repeat(${p=>(p.rowCount  || 'auto-fit')}, 1fr);
  align-content:stretch;
  justify-content:stretch;
  align-items:center;
  justify-items:center;
  grid-auto-flow:row dense;
  grid-auto-rows:1fr;
  grid-auto-columns:1fr; 
`;

export const GridItem= styled.div`
  grid-area:${
    p=>{if(!p.area) return;
       return p.area.split(' ').reduce((acc,token)=>{
              acc+=`${token}/`;
             return acc
        },'').slice(0,-1);
    }
  };
  background-color:${p=>p.bgColor};
  /* border-bottom: 1px ridge #BDBDBD; */
`
