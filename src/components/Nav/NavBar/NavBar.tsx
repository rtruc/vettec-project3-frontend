import styled from "styled-components"
import { theme } from "../../../css/theme";


const NavBarBaseStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

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

const TopNavBarStyle = styled(NavBarBaseStyle)`
    top: 0;
`

const BottomNavBarStyle = styled(NavBarBaseStyle)`
    bottom: 0;
    /* height: 50px; */
`

export interface NavBarProps {
    position?: string;
    children?: React.ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({position, children}) => {

    const NavBarDiv = position === 'top' ? TopNavBarStyle : BottomNavBarStyle;

    return (
        <>
            <NavBarDiv>
                {children !== null ? children : null}
            </NavBarDiv>
        </>
    );
}