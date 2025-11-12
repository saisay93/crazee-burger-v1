import React, { useContext } from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../../theme";
import Tab from "../../../shared/Tab.jsx";
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

	const selectTab = (tabSelected) => {
		if (tabSelected === "Add") {
			setIsAddTabSelected(true);
			setIsEditTabSelected(false);
			!isTabOpened && setIsTabOpened(!isTabOpened);
		}

		if (tabSelected === "Edit") {
			setIsAddTabSelected(false);
			setIsEditTabSelected(true);
			!isTabOpened && setIsTabOpened(!isTabOpened);
		}
	};

	const tabsConfig = [
		{
			id: 1,
			label: "",
			Icon: isTabOpened ? <FiChevronDown /> : <FiChevronUp />,
			className: !isTabOpened && "tab--highlighted",
			onClick: () => setIsTabOpened(!isTabOpened),
		},
		{
			id: 2,
			label: "Ajouter un produit",
			Icon: <AiOutlinePlus />,
			className: isAddTabSelected && "tab--highlighted",
			onClick: () => selectTab("Add"),
		},
		{
			id: 3,
			label: "Modifier un produit",
			Icon: <MdModeEditOutline />,
			className: isEditTabSelected && "tab--highlighted",
			onClick: () => selectTab("Edit"),
		},
	];

	return (
		<AdminTabsStyled>
			{/* <Tab
				Icon={isTabOpened ? <FiChevronDown /> : <FiChevronUp />}
				className={!isTabOpened && "tab--highlighted"}
				onClick={() => setIsTabOpened(!isTabOpened)}
			/>
			<Tab
				label="Ajouter un produit"
				Icon={<AiOutlinePlus />} 
				className={isAddTabSelected && "tab--highlighted"}
				onClick={() => selectTab("Add")}
			/>
			<Tab
				label="Modifier un produit"
				Icon={<MdModeEditOutline />}
				className={isEditTabSelected && "tab--highlighted"}
				onClick={() => selectTab("Edit")}
			/> */}

			{tabsConfig.map((tab) => (
				<Tab
					key={tab.id}
					label={tab.label}
					Icon={tab.Icon}
					className={tab.className}
					onClick={tab.onClick}
				/>
			))}
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
