import styled from "styled-components";
import { theme } from "../../../../theme";

function AdminPanel({label}) {
  return (
    <AdminPanelStyled>{label}</AdminPanelStyled>
  )
}

export default AdminPanel

const AdminPanelStyled = styled.div`
  background: ${theme.colors.white};
  height: 250px;
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding: 17px 0 0 22px;
`;