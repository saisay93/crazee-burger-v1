import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme";
import Tab from "../../../shared/Tab.jsx"
import PanelContext from "../../../../context/PanelContext";

function AdminTabs() {

    const {
		isTabOpened,
		setIsTabOpened,
		isAddTabSelected,
		setIsAddTabSelected,
		isEditTabSelected,
		setIsEditTabSelected,
	} = useContext(PanelContext);

	const [label, setLabel] = useState(""); 

	const handleAddTab = () => {
		setIsAddTabSelected(true);
		setIsEditTabSelected(false);
		!isTabOpened && setIsTabOpened(!isTabOpened);
		setLabel("Ajouter un produit");
	};

	const handleSelectedTab = () => {
		setIsEditTabSelected(true);
		setIsAddTabSelected(false);
		!isTabOpened && setIsTabOpened(!isTabOpened);
		setLabel("Modifier un produit");
	};
    
	return (
		<AdminTabsStyled>
			<Tab
                label=""
				icon={isTabOpened ? <FiChevronDown /> : <FiChevronUp />}
				className={!isTabOpened && "tab--highlighted"}
				onClick={() => setIsTabOpened(!isTabOpened)}
			/>
			<Tab
				label="Ajouter un produit"
				icon={<AiOutlinePlus />}
				className={isAddTabSelected && "tab--highlighted"}
				onClick={handleAddTab}
			/>
			<Tab
				label="Modifier un produit"
				icon={<MdModeEditOutline />}
				className={isEditTabSelected && "tab--highlighted"}
				onClick={handleSelectedTab}
			/>
		</AdminTabsStyled>
	);
}

export default AdminTabs;

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
