import styled from "styled-components"
import { theme } from "../../../css/theme"
import { CheckBox } from "../../Generics/Buttons/CheckBox"
import { FilterNumberField } from "./FilterNumberField"

const SidebarDiv = styled.div`
    display:flex;
    flex-direction:column;
    /* height: 100%; */
    width: 170px;
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    overflow-x: hidden; /* Disable horizontal scroll */

    z-index: 5;
    
    margin-top: 40px;
    padding-top: 5px;

    margin-bottom: 40px;
    padding-bottom: 10px;

    background-color: ${theme.sidebar_BackgroundColor};
`

const Column = styled.div`
    display:flex;
    flex-direction:column;
    padding-left: 25px;
`

const Row = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap: 4px;
`

const Header = styled.h2`
    margin:0px;
    padding-left: 10px;
`

const SubHeader = styled.h3`
    margin:0px;
    margin-top:10px;
    margin-bottom:5px;
    text-decoration:underline;
`

const FilterTitle = styled.h4`
    margin:0;
    padding-bottom:2px;
`

interface SidebarProps {
    children?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = () => {

    return (
        <SidebarDiv>
            <Header>FILTERS</Header>

            <Column>
                <SubHeader>Type</SubHeader>
                <Row>
                    {/* // TODO: DETERMINE FILTERS PROGRAMMATICALLY BASED UPON DATA SET */}
                    <CheckBox />
                    <FilterTitle>Beverage</FilterTitle>
                </Row>
                <Row>
                    <CheckBox />
                    <FilterTitle>Book</FilterTitle>
                </Row>


                <SubHeader>Company</SubHeader>
                <Row>
                    <CheckBox />
                    <FilterTitle>Miller</FilterTitle>
                </Row>
                <Row>
                    <CheckBox />
                    <FilterTitle>Ballantine</FilterTitle>
                </Row>

                <SubHeader>Quantity</SubHeader>
                <Row>
                    <CheckBox />
                    {/* <DropDownMenu> */}
                        {/* <option>{">"}</option> */}
                        {/* <option>=</option> */}
                        {/* <option>{"<"}</option> */}
                    {/* </DropDownMenu> */}
                    <FilterNumberField />
                </Row>

                <SubHeader>Size</SubHeader>
                <Row>
                    <CheckBox />
                    {/* <DropDownMenu> */}
                        {/* <option>{">"}</option> */}
                        {/* <option>=</option> */}
                        {/* <option>{"<"}</option> */}
                    {/* </DropDownMenu> */}
                    <FilterNumberField />
                </Row>

            </Column>

        </SidebarDiv>
    )
}