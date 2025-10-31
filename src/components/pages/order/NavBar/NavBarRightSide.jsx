import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Profile from "./Profile";

function NavBarRightSide({ username }) {
	return (
		<NavBarRightSideStyled className="right-side">
			<div className="admin-button">Admin Button</div>
			<Profile username={username} />
		</NavBarRightSideStyled>
	);
}

export default NavBarRightSide;

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .admin-button {
    border: 1px solid ${theme.colors.greyMedium};
    width: 80px;
    height: 50px;
    display: none;
    align-items: center;
    text-align: center;
  }
`;
