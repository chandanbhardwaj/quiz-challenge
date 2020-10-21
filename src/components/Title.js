import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: #494949;
    margin: 0;
`
const Subtitle = styled.h2`
    color: #a2a2a2;
    font-weight: 400;
    font-size: 18px;
    padding: 4px 2px;
    margin: 0;
` 

const TitleBar = ()=> (
    <div>
        <Title>
            Question 1 of 20
        </Title>
        <Subtitle>
            category
        </Subtitle>
        <div>
            
                stars
            
        </div>
    </div>
)
export default TitleBar