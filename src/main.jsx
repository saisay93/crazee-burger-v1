import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import OrderPage from "./components/pages/order/OrderPage.jsx";
import ErrorPage from "./components/pages/error/ErrorPage.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/order/:name" element={<OrderPage />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
