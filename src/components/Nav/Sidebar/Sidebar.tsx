import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { theme } from "../../../css/theme"
import { updateTypeFilter } from "../../../redux/actions/actions"
import { State } from "../../../redux/state"
import { CheckBox } from "../../Generics/Buttons/CheckBox"
import { BrandFilterCheckBox } from "../../Generics/Buttons/CompanyFilterCheckBox copy"
import { TypeFilterCheckBox } from "../../Generics/Buttons/TypeFilterCheckBox"
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
    
    margin-top: 55px;
    padding-top: 5px;

    margin-bottom: 50px;
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
    
    let { brands, inventory } = useSelector((state: State) => state);
    
    const dispatch = useDispatch();

    let companyNames: string[] = []; 
    // for(const brand of brands) {
    //     companyNames.push(brand.brandName)
    // }

    for(const record of inventory) {
        if(!companyNames.includes(record.item.brand.brandName)) {
            companyNames.push(record.item.brand.brandName)
        }
    }
    companyNames.sort()
    
    // console.log("COMPANY NAMES: ", companyNames)

    return (
        <SidebarDiv>
            <Header>FILTERS</Header>

            <Column>
                <SubHeader>Type</SubHeader>
                <Row>
                    {/* // TODO: DETERMINE FILTERS PROGRAMMATICALLY BASED UPON DATA SET */}
                    <TypeFilterCheckBox  type="beer"/>
                    <FilterTitle>Beverage</FilterTitle>
                </Row>
                <Row>
                    <TypeFilterCheckBox  type="book"/>
                    <FilterTitle>Book</FilterTitle>
                </Row>

                {/* // TODO: DETERMINE FILTERS PROGRAMMATICALLY BASED UPON DATA SET */}
                <SubHeader>Brand</SubHeader>
                {
                    companyNames.map((companyName) => {
                        return (
                            <Row key={companyName}>
                                <BrandFilterCheckBox type={companyName}/>
                                {/* <FilterTitle>{(companyName.split(" "))[0].substring(0,10)}</FilterTitle> */}
                                <FilterTitle>{(companyName.substring(0,10))}</FilterTitle>
                            </Row>
                        )
                    })
                }

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