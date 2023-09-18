import styled, { keyframes } from 'styled-components'

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`

const Wrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
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
      <Title>Hello</Title>
      <Box>
        <span>😀</span>
      </Box>
    </Wrapper>
  )
}

export default App
