import styled from "styled-components";
import { theme } from "../../../../theme/index";
import Card from "./Card";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { formattedPrice } from "../../../../utils/maths";

function Main() {
	return (
		<MainStyled>
			{fakeMenu2.map((item) => (
				<Card
					key={item.id}
					imageSource={item.imageSource}
					title={item.title}
					price={formattedPrice(item.price)}
				/>
			))}
		</MainStyled>
	);
}

export default Main;

const MainStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  display: grid;
  grid-template: repeat(auto-fill, 330px) / repeat(4, 240px);
  row-gap: 60px;
  column-gap: 85px;
  justify-content: center;
  overflow: scroll;
  padding: 50px 0;
`;
