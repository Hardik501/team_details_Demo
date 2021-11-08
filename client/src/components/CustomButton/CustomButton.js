import React from "react";
import {Button} from "antd";

const CustomButton = ({text, onClick, dark}) => {
    return <Button className={dark ? "custom-button-dark" : "custom-button"} shape="round" onClick={onClick}>{text}</Button>
}

export default CustomButton
