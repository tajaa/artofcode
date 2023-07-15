import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  position: sticky;
  top:0;
  

  .nav-items{
    background-color:whitesmoke; 
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    padding: 1px;
    font-family: ${(props)=> props.theme.fonts.primary};
  }
  

  span {
    a {
      color: black;
      text-decoration: none;
      font-size: 22px;
      padding: 0px 10px 0px 10px;
      font-weight: 600;
      letter-spacing:1px;

      &:hover {
        background-color: teal;
        color: white;
      }
    }
  }


`;