import LoginForm from "./LoginForm";
import Logo from "../../shared/Logo";
import styled from "styled-components";
import backgroung from "/public/images/burger-background.jpg";

function LoginPage() {
	return (
		<LoginPageStyled>
			<Logo className="logo-login-page" />
			<LoginForm />
		</LoginPageStyled>
	);
}

export default LoginPage;

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroung});
  background-size: cover;
  background-position: center;

  .logo-login-page {
    transform: scale(2.5);
  }
`;
