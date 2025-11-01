import styled from "styled-components";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../shared/PrimaryButton";

function Card() {
	return (
		<Cardstyled>
			<div className="image">
				<img src="/src/assets/images/burger-bacon-egg.png" alt="" />
			</div>
			<div className="infos">
				<div className="title">
					<p>Burger Smoke BBQ</p>
				</div>
				<span className="price">5,60 €</span>
				<PrimaryButton className="button" label="Ajouter"/>
			</div>
		</Cardstyled>
	);
}

export default Card;

const Cardstyled = styled.div`
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
