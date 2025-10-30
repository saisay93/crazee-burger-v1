import React from 'react'
import styled from 'styled-components';

function Main() {
  return (
    <MainStyled>Main</MainStyled>
  )
}

export default Main

const MainStyled = styled.div`
  width: 100%;
  height: 83vh;
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  margin: 0 auto;
`;