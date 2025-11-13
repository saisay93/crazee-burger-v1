import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./Menu";
import Basket from "./Basket";
import Admin from "./Admin";
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";

function Main() {
	const { isAdminMode } = useContext(OrderContext);
	return (
		<MainStyled>
			{/* <Basket /> */}
			<Menu />
			{isAdminMode && <Admin />}
		</MainStyled>
	);
}

export default Main;

const MainStyled = styled.div`
  flex: 1;
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.strong};
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  display: grid;
  grid-template-columns: 1fr; //  1fr for Menu only layout ---> Remove at Ticket F07
  /* grid-template-columns: 25% 1fr; */  // For Basket and Menu layout ---> Ticket F07
  overflow: scroll;
  position: relative;
  
`;
