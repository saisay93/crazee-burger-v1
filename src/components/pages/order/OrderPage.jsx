import { useParams, Link } from "react-router-dom";
function OrderPage() {
	const { username } = useParams();

	return (
		<>
			<h1>Bonjour {username}</h1>
			<Link to="/">
				<button type="button">Déconnexion</button>
			</Link>
		</>
	);
}

export default OrderPage;
