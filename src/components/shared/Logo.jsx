import styled from "styled-components";
import { theme } from "../../theme";
import logo from '../../assets/images/logo-orange.png';

function Logo({ className }) {
	return (
		<LogoStyled className={className}>
			<h2>CRAZEE</h2>
			<img
				src={logo}
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

  h2 {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    line-height: 1em;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${theme.colors.primary};
  }

  img {
    object-fit: contain;
    object-position: center;
    width: 80px;
    height: 60px;
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;
