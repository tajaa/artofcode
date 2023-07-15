import styled from "styled-components";

export const StyledContainer = styled.div`
    margin: 0px 15px 15px;
    .article-card {
        // border: solid 0.5px whitesmoke;
        max-width:400px;
        display: flex;
        flex-direction: column;
        color:white;
        align-items:center;

        img {
            max-width: 400px;
        }
    
        .title {
            background-color: teal;
            padding: 5px 10px 0px 10px;
            font-size:25px;
            font-family: ${(props) => props.theme.fonts.secondary};
            text-align:center;

        }

        .divider {
            height:1jpx;
            margin-top: 3px;
            margin-bottom:13px;
            width:45%;
            border-radius: 10px;
            background-color: white;
        }

        .description {
            font-size: 15px;
            font-family: ${(props)=> props.theme.fonts.secondary};
            text-align:center;
            font-weight:300;
            padding:12px;

        }

        .data-section {
            display:flex;
            width:70%;
            justify-content:space-around;
            margin-bottom:30px;
        }

        span {
            padding-left:2px;
            font-size:11px;
        }

        .vertical-centered {
            display:flex;
            align-items: 
        }
        .more {
            
        }
    }
`