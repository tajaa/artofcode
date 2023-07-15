import { StyledContainer } from "./navBar.styles";

function NavBar(props){
    return (
        <StyledContainer>
        <div className="nav-items">
            <div>
                <span>
                    <a href="/">Home</a>
                </span>
                <span>
                    <a href="/">Computer Science</a>
                </span>
                <span>
                    <a href="/">Algorithms</a>
                </span>
                <span>
                    <a href="/">Data Structures</a>
                </span>
            </div>
        </div>
    </StyledContainer>
    )
}

export default NavBar;