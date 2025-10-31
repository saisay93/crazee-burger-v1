import { useParams } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../shared/Logo";
import { theme } from "../../../../theme/index";
import NavBarRightSide from "./NavBarRightSide";
import {refreshPage} from "../../../../utils/window";

function NavBar() {
	const { username } = useParams();

	return (
		<NavBarStyled>
			<Logo className="logo-order-page" onClick={refreshPage}/>
			<NavBarRightSide username={username} />
		</NavBarStyled>
	);
}
export default NavBar;

const NavBarStyled = styled.nav`
  background-color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0 0;
  padding: 0 70px 0px 20px;

  .logo-order-page:hover {
    cursor: pointer;
  }
`;
