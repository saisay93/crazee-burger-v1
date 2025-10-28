import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
import InputText from "../../shared/InputText";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../../shared/PrimaryButton";
import { FaChevronRight } from "react-icons/fa";
function LoginForm() {
	const [inputValue, setInputValue] = useState("");
	const navigate = useNavigate();

	const handelChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setInputValue("");
		navigate(`/order/${inputValue}`);
	};

	return (
		<LoginFormStyled action="submit" onSubmit={handleSubmit}>
			<h1>Bienvenue chez nous !</h1>
			<hr />
			<h2>Connectez-vous</h2>
			<InputText
				value={inputValue}
				onChange={handelChange}
				placeholder="Entrez votre prénom"
				Icon={<BsPersonCircle className="user-icon" />}
				required
			/>
			<PrimaryButton
				label="Accéder à mon espace"
				Icon={<FaChevronRight className="user-icon" />}
			/>
		</LoginFormStyled>
	);
}

export default LoginForm;

const LoginFormStyled = styled.form`
  max-width: 500px;
  min-width: 40px;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Amatic SC, cursive;

  h1{
	font-size: ${theme.fonts.P5};
	color: ${theme.colors.white};
	margin-top: 2rem;
  }

  h2{
	font-size: ${theme.fonts.P4};
	color: ${theme.colors.white};
  }

  hr{
	width: 400px;
	border: 1.5px solid ${theme.colors.primary_burger};
	margin: 2rem 0 2.5rem;

  }
`;
