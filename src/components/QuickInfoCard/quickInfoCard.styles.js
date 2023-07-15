import styled from "styled-components";

export const StyledContainer = styled.div`
    .quick-card {
        font-family: ${(props)=> props.theme.fonts.secondary}; 
        margin-bottom: 20px;
        .title{
            font-size:25px;
            
            font-weight:600;
        }
        .description {
            font-size:16px;
            padding-top:8px;
            padding-bottom:20px;
            font-weight:300;

        }
    }
`