import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';

function NavBar() {
    const { username } = useParams();
  return (
    <NavBarStyled>
        <h1>Bonjour {username}</h1>
			<Link to="/">
				<button type="button">Déconnexion</button>
			</Link>
    </NavBarStyled>
  )
}
export default NavBar

const NavBarStyled = styled.div`
  background-color: white;
  width: 100%;
`;