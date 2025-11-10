import styled from "styled-components";
import { theme } from "../../../../theme";

function Panel() {
  return (
    <PanelStyled>Panel</PanelStyled>
  )
}

export default Panel

const PanelStyled = styled.div`
  background: ${theme.colors.white};
  height: 25vh;
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;