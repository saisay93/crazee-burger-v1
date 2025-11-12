import styled from "styled-components";
import { theme } from "../../theme";

function Tab({ label, icon, onClick, className }) {
	return (
		<TabStyled onClick={onClick} className={className}>
			{icon && icon}
			{label && <span className="label">{label}</span>}
		</TabStyled>
	);
}

export default Tab;

const TabStyled = styled.button`
  background: ${theme.colors.white};
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 1px;
 
  border: 1px solid ${theme.colors.greyLight};
  border-bottom: 2px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  box-shadow: 0px -6px 8px -2px #0000001A;
;

  padding: 0 22px;

  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
    border-bottom: 2px solid ${theme.colors.white};

  }

  .label{
    margin-left: 13px;
  }
`;
