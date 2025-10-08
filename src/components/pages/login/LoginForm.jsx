import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
		<form action="submit" onSubmit={handleSubmit}>
			<h1>Bienvenue chez nous !</h1>
			<br />
			<h2>Connectez-vous</h2>
			<input
				type="text"
				placeholder="Entrez votre prénom..."
				onChange={handelChange}
				required
				value={inputValue}
			/>
			<button type="submit">Accédez à votre espace</button>
		</form>
	);
}

export default LoginForm;
