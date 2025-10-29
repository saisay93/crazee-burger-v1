import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";

function OrderPage() {
	

	return (
		<OrderPageStyled>
			<NavBar />
			<Main />
		</OrderPageStyled>
	);
}

export default OrderPage;

const OrderPageStyled = styled.div`
  background-color: #FF9F1A;
  height: 100vh;
  padding: 24px 56px;
 
`;
