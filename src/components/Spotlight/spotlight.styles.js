import styled from "styled-components";

export const StyledContainer = styled.div`

    .spotlight-section {
        display:flex;
        flex-direction:column;
        align-items: center;
        color:white;
        padding-top: 50px;

        .title {
            font-size: 120px;
            font-family: ${(props)=> props.theme.fonts.secondary};
            margin-bottom: -16px;
        }

        .description {
            font-size: 23px;
            color:white;
            font-family: ${(props)=> props.theme.fonts.primary}
            
        }

        .dividers-container{
            width:100%;
            display:flex;
            justify-content:center;
            align-items: center;
            font-size:20px;
            
            .icon-container{
             display:flex;
             align-items: center;
             margin: 0px 3px;
            
            }

            .divider {
                height:1px;
                width:35%;
                background-color: ${(props) => props.theme.colors.background.light};
            }
        }
    }

`