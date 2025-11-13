import styled from "styled-components";
import { theme } from "../../theme";

function PrimaryButton({ label, Icon, className }) {
	return (
		<PrimaryButtonStyled className={className} type="submit">
			<span>{label}</span>
			{Icon && Icon}
		</PrimaryButtonStyled>
	);
}

export default PrimaryButton;

const PrimaryButtonStyled = styled.button`
  background-color: ${theme.colors.primary};
  border-radius: ${theme.borderRadius.round};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 18px 24px;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.bold};

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 0.3s ease-out;
  }

  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
  }
`;
