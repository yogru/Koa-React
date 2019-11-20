import React from 'react';
import {Table} from 'reactstrap';
const ResumeTable =({header , pairOfthtdArr })=>{
 const trs= pairOfthtdArr.map((thtd,key)=>{
    return (
        <tr key={key}>
            <th scope="row">{thtd['th']}</th>
            <td>{thtd['td']}</td>
       </tr>
    )
 })
    return (
        <>
            {header}
         <Table>
            {/* <thead>{header}</thead> */}
           <tbody>
               {trs}
          </tbody>
        </Table>
        </>
    )
}
export default ResumeTable;