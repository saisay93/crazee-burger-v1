import styled from 'styled-components';
import { theme } from "../../../../theme/index";
import Card from './Card';


function Main() {
  return (
    <MainStyled>
      <Card />
    </MainStyled>
  )
}

export default Main

const MainStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
`;