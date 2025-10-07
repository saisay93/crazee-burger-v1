import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LoginForm() {
	const [name, setName] = useState("");

	const handelChange = (e) => {
		setName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setName("");
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
				value={name}
			/>
			<NavLink to={`/order/${name}`}>
				<button type="submit">Accédez à votre espace</button>
			</NavLink>
		</form>
	);
}

export default LoginForm;
