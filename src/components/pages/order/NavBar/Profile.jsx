import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { BsPersonCircle } from "react-icons/bs";

function Profile({ username }) {
	return (
		<ProfileStyled>
			<div className="info">
				<p>
					Hey, <strong>{username}</strong>
				</p>
				<Link to="/">
					<button type="button">Se déconnecter</button>
				</Link>
			</div>
			<BsPersonCircle className="user-icon" />
		</ProfileStyled>
	);
}

export default Profile;

const ProfileStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  gap: 10px;
  margin-left: 50px;

  .info {
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      color: rgba(116, 123, 145, 1);

      strong {
        line-height: 22px;
        color: ${theme.colors.primary};
      }
    }

    button {
      border: none;
      background-color: transparent;
      color: rgba(116, 123, 145, 1);
      font-family: "Open Sans", sans-serif;
      font-size: ${theme.fonts.size.XXS};
      font-weight: 400;
      line-height: 14px;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .user-icon {
    width: 36px;
    height: 36px;
    color: rgba(116, 123, 145, 1);
  }
`;
