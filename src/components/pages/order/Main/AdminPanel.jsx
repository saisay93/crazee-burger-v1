import styled from "styled-components";
import AdminPanelTab from "./AdminPanelTab";

export default function AdminPanel() {
	return (
		<AdminPanelStyle>
			<div className="container-tab">
        <AdminPanelTab />
        <AdminPanelTab />
        <AdminPanelTab />
      </div>
		</AdminPanelStyle>
	);
}

const AdminPanelStyle = styled.div`
  background: #1f27c3;
  width: 100%;
  height: 25vh;
  position: absolute;
  bottom: 0;
  position: relative;

  .container-tab {
  position: absolute;
  top: -40px;
  left: 40px;
  }

`;
