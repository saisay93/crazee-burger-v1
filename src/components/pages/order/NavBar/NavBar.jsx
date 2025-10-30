import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../shared/Logo";
import { BsPersonCircle } from "react-icons/bs";

function NavBar() {
	const { username } = useParams();
	return (
		<NavBarStyled>
			<button type="button" className="logobtn">
			  <Logo />
			</button>
			<div className="navBarRight">
				<div className="greeting">
          <h1>Hey, <span>{username}</span></h1>
          <Link to="/">
            <button type="button">Se déconnecter</button>
          </Link>
        </div>
        <BsPersonCircle className="user-icon" />
			</div>
		</NavBarStyled>
	);
}
export default NavBar;

const NavBarStyled = styled.div`
  background-color: white;
  width: 100%;
  height: 98px;
  border-radius: 15px 15px 0px 0px;
  padding: 0 70px 0px 20px;
  display: flex;
  justify-content: space-between;

  .logobtn:hover{
      text-decoration: none;
      cursor: pointer;
  }

  .navBarRight {
    display: flex;
    align-items: center;
    gap: 10px;
  }

   h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: rgba(116, 123, 145, 1);
   }

  span {
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      line-height: 22px;
      color: #FF9F1A;
    }

   button {
    border: none;
    background-color: transparent;
    color: rgba(116, 123, 145, 1);
    font-family: "Open Sans", sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .user-icon{
    width: 36px;
    height: 36px;
    color: rgba(116, 123, 145, 1);
  }
  
`;
