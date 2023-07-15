import styled from "styled-components";

export const StyledContainer = styled.div`
    display:flex;
    justify-content: center;

    .content {
        width: 1140px;
        min-height: 100vh;
    }

    .news-container {
        padding-top: 50px;
        display:flex;

        .articles-section {
            display:flex;
            max-width:78%;
            // background-color:cyan;
            flex-wrap: wrap;
            border-right: solid 1px white;
        }

        .info-section {
            // background-color:cyan;
            max-width:22%;
            margin-left:18px;
            color:white;
        }
    }
`