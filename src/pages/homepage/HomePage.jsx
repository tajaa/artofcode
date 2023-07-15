import React from 'react'
import { Spotlight } from '../../components/Spotlight';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import { StyledContainer } from './homepage.styles';
import QuickInfoCard  from '../../components/QuickInfoCard/quickInfocard';

import articles from "../../data/articles.json"
import quick from "../../data/quick.json"



function HomePage(props) {
    return (
        <StyledContainer>
            <div className="content">
                <Spotlight/>
                <div className="news-container">
                    <div className="articles-section">
                {articles.map(({ urlToImage, title, description})=> (
                    <ArticleCard img={urlToImage} title={title} description={description}/>
                ))}
                  
                    </div>
                <div className="info-section">
                    {quick.map(({title, description})=> (
                        <QuickInfoCard title={title} description={description}/>
                    ))}
               
                </div>
         
                </div>
            </div>
        </StyledContainer> 
    );
}

export default HomePage;