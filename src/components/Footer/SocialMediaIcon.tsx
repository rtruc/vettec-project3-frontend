import styled from "styled-components";
import { theme } from "../../css/theme";
import { Icon } from "./Icon"


const hover_Color = 'rgb(235, 16, 246)';

const SocialMediaIconDiv = styled.a`
    display: flex;
    align-items: center;
    
    padding: 0px 5px;
    height: 100%;

    transition: background-color .2s ease-out 100ms;    

    &:hover {
        background-color: ${theme.hover_Color};
    }
`

interface SocialMediaIconProps {
    iconInfo: {
        link: string;
        iconURL: string;
        altTxt: string;
    };
}

// export const SocialMediaIcon = ({ iconInfo }) => {
export const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ iconInfo }) => {

    return (
        <SocialMediaIconDiv href={iconInfo.link}>
            <Icon alt={iconInfo.altTxt} src={iconInfo.iconURL} />
        </SocialMediaIconDiv>
    )
}
