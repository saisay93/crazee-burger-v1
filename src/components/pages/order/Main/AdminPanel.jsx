import styled from "styled-components";

export default function AdminPanel() {
	return <AdminPanelStyle>AdminPanel</AdminPanelStyle>;
}

const AdminPanelStyle = styled.div`
  background: #1f27c3;
  width: 100%;
  height: 25vh;
  position: absolute;
  bottom: 0;
  /* grid-area: 2 / 2 / 3 / 3; */
`;