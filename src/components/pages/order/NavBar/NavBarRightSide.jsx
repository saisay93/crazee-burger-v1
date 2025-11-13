import React, { useContext } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../shared/ToggleButton";
import { toast } from "react-toastify";
import OrderContext from "../../../../context/OrderContext";

function NavBarRightSide() {
	const { isAdminMode, setIsAdminMode } = useContext(OrderContext);

	const handleAdminMode = () => {
		setIsAdminMode(!isAdminMode);
		if (!isAdminMode) {
			notifyAdminOn();
		}
	};

	const notifyAdminOn = () =>
		toast.info("Mode admin activé", {
			position: "bottom-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});

	return (
		<NavBarRightSideStyled className="right-side">
			<ToggleButton
				isChecked={isAdminMode}
				onToggle={handleAdminMode}
				labelIfChecked="DESACTIVER LE MODE ADMIN"
				labelIfUnchecked="ACTIVER LE MODE ADMIN"
			/>
			<Profile />
		</NavBarRightSideStyled>
	);
}

export default NavBarRightSide;

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
`;
