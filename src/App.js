import React from 'react'

import './App.css'
import styled from 'styled-components'
import Title from './components/Title'
import ProgressBar from './components/ProgressBar'
import ScoreBar from './components/ScoreBar'

const Container = styled.div`
  border: 5px solid #eeeeee;  
  display: flex;
  flex-direction: column;
  height: 600px;
  margin: 50px auto;
  min-width: 500px;
  width: 40%;  
  
`
const Content = styled.div`
  display: flex;
  flex-grow: 1;  
  flex-direction: column;
  padding: 40px; 60px;
  text-align: left;
`

function App () {
  return (
    <div className='App'>
    <container>

    
      
      <ProgressBar />
      <Content>
         <Title />
         <ScoreBar />
      </Content>
      
    </container>
    </div>
  )
}

export default App
