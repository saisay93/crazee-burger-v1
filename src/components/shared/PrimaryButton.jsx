import styled from "styled-components";
import { theme } from "../../styles/theme";

function PrimaryButton({ label, Icon }) {
	return (
		<PrimaryButtonStyled type="submit">
			<span>{label}</span>
			{Icon && Icon}
		</PrimaryButtonStyled>
	);
}

export default PrimaryButton;

const PrimaryButtonStyled = styled.button`
  background-color: ${theme.colors.primary_burger};
  border-radius: ${theme.borderRadius.round};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 18px 24px;
  border: 1px solid ${theme.colors.primary_burger};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.P0};
  font-weight: ${theme.weights.bold};
  

  .user-icon{
    width: 15px;
	height: 15px;
    margin-left: 10px;
  }

  &:hover{ 
    cursor: pointer;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
   }

   &:active{
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary_burger};
   }
`;
