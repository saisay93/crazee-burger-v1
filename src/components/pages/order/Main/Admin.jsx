import styled from "styled-components";
import AdminPanel from "./AdminPanel";
import { useContext } from "react";
import PanelContext from "../../../../context/PanelContext";
import AdminTabs from "./AdminTabs";

export default function Admin() {
	const { isTabOpened, isAddTabSelected } = useContext(PanelContext);

	return (
		<AdminStyle>
			<AdminTabs />
			{isTabOpened && <AdminPanel label={isAddTabSelected ? "Ajouter un produit" : "Modifier un produit"} />}
		</AdminStyle>
	);
}

const AdminStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right:0;
`;
