import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Card from "./Card";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formattedPrice } from "../../../../utils/maths";

function Menu() {
	return (
		<MenuStyled>
			{fakeMenu2.map((item) => (
				<Card
					key={item.id}
					imageSource={item.imageSource}
					title={item.title}
					price={formattedPrice(item.price)}
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
