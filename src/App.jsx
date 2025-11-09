import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { theme } from "./theme";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/order/:username" element={<OrderPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<StyledContainer>
				<ToastContainer />
			</StyledContainer>
		</>
	);
}

export default App;

const StyledContainer = styled(ToastContainer)`
  .Toastify__toast {
	background-color: ${theme.colors.background_dark}
  }
`;