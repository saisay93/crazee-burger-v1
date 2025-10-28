import styled from "styled-components";
import { theme } from "../../styles/theme";

function InputText({ inputValue, handelChange, Icon, ...extraProps }) {
	return (
		<InputTextStyled>
			{Icon && Icon}
			<input
				type="text"
				onChange={handelChange}
				value={inputValue}
				{...extraProps}
			/>
		</InputTextStyled>
	);
}

export default InputText;

const InputTextStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  width: 100%;
  padding: 18px 24px;
  margin: 18px 0;
  gap: 15px;

  input{
    width: 90%;
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.greyDark};

    &::placeholder{
    background: ${theme.colors.white};  
    color: ${theme.colors.greyMedium};
  }

    &:focus{
      outline: none;
    }

  }

  .user-icon {
	  color: ${theme.colors.greyDark};
	  width: 15px;
	  height: 15px;
  }

  `;
