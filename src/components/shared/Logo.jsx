import styled from "styled-components";
import { theme } from "../../styles/theme";

function Logo({ className }) {
	return (
		<LogoStyled className={className}>
			<h2>CRAZEE</h2>
			<img
				src="/public/images/logo-orange.png"
				alt="logo crazee burger orange"
			/>
			<h2>BURGER</h2>
		</LogoStyled>
	);
}

export default Logo;

const LogoStyled = styled.div`
	display: flex;
	align-items: center;
	

  h2{
	display: flex;
	font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
	line-height: 1em;
	letter-spacing: 1.5px;
	text-align: center;
	align-items: center;
	text-transform: uppercase;
	color: ${theme.colors.primary};
	}

  img{
	object-fit: contain;
	object-position: center;
	width: 80px;
	height: 60px;
	margin: 0 5px;
  }


`;
