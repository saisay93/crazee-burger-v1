import React, { useState } from "react";

function LoginForm() {
	const [name, setName] = useState("");

	const handelChange = (e) => {
		setName(e.target.value);
	};

	const handleClick = () => {
		if (name) {
			alert(`Bonjour ${name}`);
		}
	};

	return (
		<form>
			<h1>Bienvenue chez nous !</h1>
			<h2>Connectez-vous</h2>
			<input
				type="text"
				placeholder="Entrez votre prénom..."
				onChange={handelChange}
				required
				value={name}
			/>
			<input
				type="submit"
				value="Accédez à votre espace"
				onClick={handleClick}
			/>
		</form>
	);
}

export default LoginForm;
