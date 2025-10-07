import React, { useState } from "react";

function LoginForm() {
	const [name, setName] = useState("");

	const handelChange = (e) => {
		setName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Bonjour ${name}`);
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
			<button type="submit">Accédez à votre espace</button>
		</form>
	);
}

export default LoginForm;
