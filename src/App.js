import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0px;
  } 
  to {
    transform: rotate(360deg);
    border-radius: 100px;
  } 
`

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 36px;
    &:hover {
      font-size: 40px;
    }
  }
`

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😀</span>
      </Box>
    </Wrapper>
  )
}

export default App
