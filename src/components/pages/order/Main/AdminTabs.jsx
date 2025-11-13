import { useContext } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../theme";
import Tab from "../../../shared/Tab.jsx";
import OrderContext from "../../../../context/OrderContext.js";
import { tabsConfig } from "./tabsConfig.jsx";

function AdminTabs() {
	const {
		isTabOpened,
		setIsTabOpened,
		currentTabSelected,
		setCurrentTabSelected,
	} = useContext(OrderContext);

	const selectTab = (tabSelected) => {
		setCurrentTabSelected(tabSelected);
		setIsTabOpened(true);
	};

	return (
		<AdminTabsStyled>
			<Tab
				Icon={isTabOpened ? <FiChevronDown /> : <FiChevronUp />}
				className={!isTabOpened && "tab--highlighted"}
				onClick={() => setIsTabOpened(!isTabOpened)}
			/>

			{tabsConfig.map((tab) => (
				<Tab
					key={tab.id}
					label={tab.label}
					Icon={tab.Icon}
					className={currentTabSelected === tab.id && "tab--highlighted"}
					onClick={() => selectTab(tab.id)}
				/>
			))}
		</AdminTabsStyled>
	);
}

export { AdminTabs, tabsConfig };

const AdminTabsStyled = styled.div`
  display: flex;
  margin-left: 70px;

  .tab--highlighted{
	background: ${theme.colors.dark};
	color:  ${theme.colors.white};
	border-bottom: 2px solid ${theme.colors.dark};

  }

  button{
    margin-right: 1px;
  }
`;
