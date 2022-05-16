import styled from "styled-components"
import { theme } from "../../../css/theme";


const NavBarBaseStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    /* height: 200 px; */
    min-height:200;

    position: fixed;

    left: 0;
    right: 0;

    background-color: ${theme.navBar_BackgroundColor};

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    z-index: 10;
`

export interface NavBarProps {
    additionalStyle?: string;
    children?: React.ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({additionalStyle, children}) => {
    
    const NavBarDiv = styled(NavBarBaseStyle)`
        /* bottom: 0; */
        ${additionalStyle}
        `

    return (
        <>
            <NavBarDiv>
                {children === null ? null : children}
            </NavBarDiv>
        </>
    );
}