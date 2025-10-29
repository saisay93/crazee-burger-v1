import { NavLink } from "react-router-dom";

function ErrorPage() {
	return (
		<>
			<h1>ErrorPage</h1>
			<NavLink to="/">
				<button type="button">Retourner à la page d'accueil</button>
			</NavLink>
		</>
	);
}

export default ErrorPage;
