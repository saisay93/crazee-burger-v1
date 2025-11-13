import { createContext } from "react";

export default createContext({
	isAdminMode: false,
	setIsAdminMode: () => {},
	isTabOpened: true,
	setIsTabOpened: () => {},
	currentTabSelected: false,
	setCurrentTabSelected: () => {}
});
