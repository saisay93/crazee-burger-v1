import styled from "styled-components";
import PanelTab from "../../../shared/PanelTab";
import { theme } from "../../../../theme";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export default function AdminPanel() {
	return (
		<AdminPanelStyle>
			<div className="container-tab">
				<PanelTab icon={<FiChevronDown />} />
				<PanelTab
					label="Ajouter un produit"
					icon={<AiOutlinePlus className="icon-tab" />}
				/>
				<PanelTab
					label="Modifier un produit"
					icon={<MdModeEditOutline className="icon-tab" />}
				/>
			</div>
		</AdminPanelStyle>
	);
}

const AdminPanelStyle = styled.div`
  background: ${theme.colors.white};
  width: 100%;
  height: 25vh;
  position: absolute;
  bottom: 0;
  position: relative;
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};

  .container-tab {
  position: absolute;
  top: -43px;
  left: 70px;
  display: flex;
  flex-direction: row;
  }

  .icon-tab{
    width: 16px;
    height: 16px;
    margin-right: 13px;
  }

`;
