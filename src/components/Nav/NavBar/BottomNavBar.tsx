import { githubIcon, linkedinIcon } from "../../../img/icons";
import { IconBundle } from "../../_archived/Footer/IconBundle";
import { ListControls } from "../../_archived/Footer/ListControls";
import { SocialMediaIcon } from "../../_archived/Footer/SocialMediaIcon";
import { NavBar } from "./NavBar";
import { NavBarBundle } from "./NavBarBundle";


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

export const BottomNavBar = () => {

    const style = `
        bottom: 0;
        height: 50px;
    `

    return (
        <NavBar additionalStyle={style}>

            <NavBarBundle>
                <SocialMediaIcon iconInfo={juhSocial[0]} />
                <SocialMediaIcon iconInfo={juhSocial[1]} />
            </NavBarBundle>

            <ListControls />

            <NavBarBundle>
                <SocialMediaIcon iconInfo={trucSocial[0]} />
                <SocialMediaIcon iconInfo={trucSocial[1]} />
            </NavBarBundle>

        </NavBar>
    )
}