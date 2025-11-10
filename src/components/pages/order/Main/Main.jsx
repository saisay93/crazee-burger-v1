import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Menu from "./Menu";
import Basket from "./Basket";
import AdminPanel from "./AdminPanel";

function Main() {
	return (
		<MainStyled>
			{/* <Basket /> */}
			<Menu />
      <AdminPanel />
		</MainStyled>
	);
}

export default Main;

const MainStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  display: grid;
  grid-template-columns: 1fr; //  1fr for Menu only layout ---> Remove at Ticket F07
  /* grid-template-columns: 25% 1fr; */  // For Basket and Menu layout ---> Ticket F07
  overflow: scroll;
  position: relative;
`;