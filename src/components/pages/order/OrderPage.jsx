import { useParams, NavLink } from "react-router-dom";
function OrderPage() {
	const { name } = useParams();

	return (
		<>
			<h1>Bonjour {name}</h1>
			<NavLink to="/">
				<button type="button">Déconnexion</button>
			</NavLink>
		</>
	);
}

export default OrderPage;
