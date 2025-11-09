import styled from "styled-components";
import Card from "../../../shared/Card";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formattedPrice } from "../../../../utils/maths";
import { useState } from "react";

function Menu() {
	const [menu, setProducts] = useState(fakeMenu2);
	return (
		<MenuStyled>
			{menu.map(({ id, title, imageSource, price }) => (
				<Card
					key={id}
					imageSource={imageSource}
					bodyTitle={title}
					bodyInfo={formattedPrice(price)}
				/>
			))}
		</MenuStyled>
	);
}

export default Menu;

const MenuStyled = styled.div`
  display: grid;
  grid-template: repeat(auto-fill, 330px) / repeat(auto-fill, 240px);
  column-gap: 85px;
  row-gap: 60px;
  padding: 50px 0;
  justify-content: center;
  overflow: scroll;
`;
