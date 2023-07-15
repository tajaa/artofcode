import React from "react";
import { StyledContainer } from "./spotlight.styles";
import { ModelDiamond as Icon } from "react-basicons";

function Spotlight(props){
    return <StyledContainer>
        <div className="spotlight-section">
            <div className="title"> AUTOMATA</div>
            <p className="description">The Lost Art of Fundamentals</p>
            <div className="dividers-container">
                <div className="divider"/>
                <div className="icon-container">
                <Icon clssName="icon" size={20} color="white" />
                </div>
                <div className="divider" />
            </div>
        </div>
    </StyledContainer>
}

export default Spotlight;