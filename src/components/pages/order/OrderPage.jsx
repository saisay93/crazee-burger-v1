import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme/index";

function OrderPage() {
	

	return (
		<OrderPageStyled>
			<div className="container">
				<NavBar />
				<Main />
			</div>
		</OrderPageStyled>
	);
}

export default OrderPage;

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;

  .container {
    display: flex;
    flex-direction: column;
    width: 1400px;
    height: 95vh;
  }
`;
