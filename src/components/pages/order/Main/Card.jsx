import styled from "styled-components";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../shared/PrimaryButton";

function Card({ imageSource, title, price }) {
	return (
		<CardStyled>
			<div className="image">
				<img src={imageSource} alt={title} />
			</div>
			<div className="infos">
				<h3 className="title">{title}</h3>
				<p className="price">{price}</p>
				<PrimaryButton className="button" label="Ajouter" />
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
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;

  .image {
    padding: 50px 20px 15px;

    img {
      width: 200px;
      height: 145px;
      object-fit: contain;
    }
  }

  .infos {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    width: 200px;
    height: 110px;
    margin: 0 auto 15px;
  }

  .title {
    grid-area: 1 / 1 / 2 / 3;
    align-self: center;
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .button {
    grid-area: 2 / 2 / 3 / 3;
    align-self: center;
    width: 95px;
    height: 38px;
    font-size: ${theme.fonts.size.XS};
  }

  .price {
    grid-area: 2 / 1 / 3 / 2;
    align-self: center;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.primary};
  }
`;
