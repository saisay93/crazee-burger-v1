import styled from "styled-components";
import { theme } from "../../theme";

function InputText({ value, onChange, Icon, ...extraProps }) {
	return (
		<InputTextStyled>
			{Icon && Icon}
			<input value={value} onChange={onChange} type="text" {...extraProps} />
		</InputTextStyled>
	);
}

export default InputText;

const InputTextStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;
  gap: 15px;

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }

    /* &:focus{
      outline: none;
    } */
  }

  .user-icon {
    color: ${theme.colors.greySemiDark};
    width: 15px;
    height: 15px;
  }
`;
