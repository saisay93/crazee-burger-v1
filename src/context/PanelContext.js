import { createContext } from "react";

export default createContext({
	isAdminMode: false,
	setIsAdminMode: () => {},
	isTabOpened: true,
	setIsTabOpened: () => {},
	isAddTabSelected: true,
	setIsAddTabSelected: () => {},
	isEditTabSelected: true,
	setIsEditTabSelected: () => {},
});
