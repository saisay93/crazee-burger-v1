import styled from "styled-components";
import AdminPanel from "./AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import { AdminTabs, tabsConfig } from "./AdminTabs";

export default function Admin() {
	const { isTabOpened, currentTabSelected } = useContext(OrderContext);

	return (
		<AdminStyle>
			<AdminTabs />
			{isTabOpened && (
				<AdminPanel
					label={tabsConfig.find((tab) => tab.id === currentTabSelected)?.label}
				/>
			)}
		</AdminStyle>
	);
}

const AdminStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right:0;
`;
