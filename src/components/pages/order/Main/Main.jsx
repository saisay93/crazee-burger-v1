import styled from 'styled-components';
import { theme } from "../../../../theme/index";
import Card from './Card';


function Main() {
  return (
    <MainStyled>
      <Card className="card"/>
      <Card className="card"/>
      <Card className="card"/>
      <Card className="card"/>
      <Card className="card"/>
      <Card className="card"/>
      
    </MainStyled>
  )
}

export default Main

const MainStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  display: grid;
  grid-template: repeat(auto-fill, 330px) / repeat(4, 240px);
  gap: 85px;
  justify-content: center;
  overflow: scroll;
  padding: 50px 0;

  .card{
    background-color: blueviolet;
    width: 240px;
    height: 330px;
  }
`;