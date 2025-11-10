import styled from "styled-components";
import PanelTab from "../../../shared/PanelTab";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import Panel from "./Panel";

export default function AdminPanel() {
	return (
		<AdminPanelStyle>
			<div div className="container-tab">
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
			<Panel />
		</AdminPanelStyle>
	);
}

const AdminPanelStyle = styled.div`
  position: relative;
  
  .container-tab{display: flex;
  margin-left: 70px;
  width: fit-content;
  position: absolute;
  top: -42px;
  }

  .icon-tab{
    width: 16px;
    height: 16px;
    margin-right: 13px;
  }


`;
