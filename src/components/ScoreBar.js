import React from 'react'
import styled from 'styled-components'

const Status = styled.div(({ float }) => (`
    color: #494949;
    font-size: 18px;
    padding: 8px;
    float: ${ float || 'left' };
`))


function Score (){
 return (
     <div>
         <div style={{ height:'32px'}}>
             <status key={0} float='left'>score:10%</status>
             <Status key={1} float='right'>Max:30%</Status>
         
        </div>
       

     </div>
 )
}
export default Score