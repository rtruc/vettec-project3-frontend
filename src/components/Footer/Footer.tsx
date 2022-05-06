import styled from "styled-components";
import { githubIcon, linkedinIcon } from "../../img/icons";
import { theme } from "../../css/theme";
import { IconBundle } from "./IconBundle";
import { ListControls } from "./ListControls";
import { SocialMediaIcon } from "./SocialMediaIcon";

// TODO: THEME
// const navBar_BackgroundColor = 'rgba(233, 16, 246, 0.5)';


const FooterDiv = styled.div`
    display: flex;
    flex-direction: row;

    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    height: 50px;

    background-color: ${theme.navBar_BackgroundColor};

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    z-index: 10;`


export const Footer = () => {

    const juhSocial = [
        {
            link: "https://www.linkedin.com/in/juhyun-shin/",
            iconURL: linkedinIcon,
            altTxt: "LinkedIn Icon"
        },
        {
            link: "https://github.com/JoJoTwice",
            iconURL: githubIcon,
            altTxt: "Github Icon"
        }
    ];

    const trucSocial = [
        {
            link: "https://github.com/rtruc/",
            iconURL: githubIcon,
            altTxt: "Github Icon"
        },
        {
            link: "https://www.linkedin.com/in/richard-truchanowicz/",
            iconURL: linkedinIcon,
            altTxt: "LinkedIn Icon"
        }
    ];


    return (
        <FooterDiv>

            <IconBundle>
                <SocialMediaIcon iconInfo={juhSocial[0]} />
                <SocialMediaIcon iconInfo={juhSocial[1]} />
            </IconBundle>

            <ListControls />

            <IconBundle>
                <SocialMediaIcon iconInfo={trucSocial[0]} />
                <SocialMediaIcon iconInfo={trucSocial[1]} />
            </IconBundle>

        </FooterDiv>
    )
}