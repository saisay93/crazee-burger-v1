import styled from "styled-components";
import { toast } from "react-toastify";

function CustomToggleButton({ isAdminMode, onToggle, label }) {
	return (
		<CustomToggleButtonSyled
			className={isAdminMode ? "admin-on" : null}
			onClick={onToggle}
		>
			<div
				className={
					isAdminMode ? "circle circle-slide-right" : "circle circle-slide-left"
				}
			/>
			<div
				className={
					isAdminMode ? "label label-slide-right" : "label label-slide-left"
				}
			>
				{label}
			</div>
		</CustomToggleButtonSyled>
	);
}

export default CustomToggleButton;

const CustomToggleButtonSyled = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 40px;
  border-radius: 30px;
  border: 2px solid rgba(41, 39, 41, 1);
  background-color: rgba(41, 39, 41, 1);
  font-size: 10px;
  font-weight: bold;
  transition: all 0.5s ease;
  
  

  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(255, 160, 27, 1);
    margin-left: 5px;
    transition: transform 0.5s ease;
  }

  .label {
    color: rgba(255, 160, 27, 1);
    margin-right: auto;
    margin-left: 10px;
    transition: all 0.5s ease;
  }

  &:hover{
    cursor: pointer;
  }
  
  &.admin-on {
    color: rgba(41, 39, 41, 1);
    border: 2px solid #ffa01b;
    background-color: white;
 }

  .circle-slide-right {
    transform: translateX(156px);
  }

  .circle-slide-left {
    transform: translateX(0);
  }

  .label-slide-right {
    transform: translateX(-34px);
    color: rgba(41, 39, 41, 1);
  }

  .label-slide-left {
    transform: translateX(0);
    color: #ffa01b;
  }
`;
