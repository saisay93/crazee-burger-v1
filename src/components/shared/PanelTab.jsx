import styled from "styled-components";
import { theme } from "../../theme";

function PanelTab({ label, icon }) {
	return (
		<Tabstyled>
			{icon && icon}
			{label}
		</Tabstyled>
	);
}

export default PanelTab;

const Tabstyled = styled.div`
  background: ${theme.colors.white};
  min-width: 60px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
 
  border: 1px solid ${theme.colors.greyLight};
  border-bottom: 2px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;

  padding: 13px 22px;
  margin-right: 1px;
  font-size: ${theme.fonts.size.P0};
  
  color: ${theme.colors.greySemiDark};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
    border-bottom: 2px solid ${theme.colors.white};

  }
`;
