import styled from "styled-components";
import { theme } from "../../theme";
import PrimaryButton from "./PrimaryButton";

function Card({ imageSource, bodyTitle, bodyInfo }) {
	return (
		<CardStyled>
			<div className="header">
				<img src={imageSource} alt={bodyTitle} />
			</div>
			<div className="body">
				<h3 className="body-title">{bodyTitle}</h3>
				<p className="body-info">{bodyInfo}</p>
				<PrimaryButton className="primary-button" label="Ajouter" />
			</div>
		</CardStyled>
	);
}

export default Card;

const CardStyled = styled.div`
  background-color: white;
  width: 240px;
  height: 330px;
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.medium};
  display: flex;
  flex-direction: column;

  .header {
    padding: 50px 20px 15px;

    img {
      width: 200px;
      height: 145px;
      object-fit: contain;
    }
  }

  .body {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    width: 200px;
    height: 110px;
    margin: 0 auto 15px;
  }

  .body-title {
    grid-area: 1 / 1 / 2 / 3;
    align-self: center;
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .primary-button {
    grid-area: 2 / 2 / 3 / 3;
    align-self: center;
    width: 95px;
    height: 38px;
    font-size: ${theme.fonts.size.XS};
  }

  .body-info {
    grid-area: 2 / 1 / 3 / 2;
    align-self: center;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.primary};
  }
`;
