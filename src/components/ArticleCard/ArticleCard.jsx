import React from "react";
import { StyledContainer } from "./articleCard.styles";
import MathsImg from "../../asset/maths.jpg"
import { ThumbsUp as Like, CommentChatMessageAlt as Comment, ArrowRight } from "react-basicons";


function ArticleCard({ title, description, img }){
    return (
        <StyledContainer>
      <div className="article-card">
            <img src={img} alt=""></img>
            <div className="title"> 
            {title} </div>
            <div className="divider" />
            <div className="description">{description}</div>
            <div className="data-section">
                <div className="like-icon vertical-centered">
                <Like color="white"/>
                    <span>100</span>
                </div>
                <div className="comments-icon vertical-centered">
                <Comment color="white"/>
                <span>100</span>
                </div>
               
                <div className="more vertical-centered">
                <span>  </span>
                    <ArrowRight color="white"/>
                     
            </div>
        </div>
    </div>
        </StyledContainer>
      
    );
};

export default ArticleCard