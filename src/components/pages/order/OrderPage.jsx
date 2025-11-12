import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import { theme } from "../../../theme/index";
import PanelContext from "../../../context/PanelContext";
import { useState } from "react";

function OrderPage() {
	const [isAdminMode, setIsAdminMode] = useState(false);
	const [isTabOpened, setIsTabOpened] = useState(true);
	const [isAddTabSelected, setIsAddTabSelected] = useState(true);
  const [isEditTabSelected, setIsEditTabSelected] = useState(false)

	const PanelContextValue = {
		isAdminMode,
		setIsAdminMode,
		isTabOpened,
		setIsTabOpened,
		isAddTabSelected,
		setIsAddTabSelected,
    	isEditTabSelected,
		setIsEditTabSelected,
	};

	return (
		<PanelContext value={PanelContextValue}>
			<OrderPageStyled>
				<div className="container">
					<NavBar />
					<Main />
				</div>
			</OrderPageStyled>
		</PanelContext>
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
