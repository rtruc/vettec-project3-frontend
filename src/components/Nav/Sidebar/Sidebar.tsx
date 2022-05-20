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

    let { inventory, currentWarehouse } = useSelector((state: State) => state);

    // const dispatch = useDispatch();

    let brandNames: string[] = [];
    for (const record of inventory) {
        if (!brandNames.includes(record.item.brand.brandName)) {
            brandNames.push(record.item.brand.brandName)
        }
    }
    brandNames.sort()


    return (
        <SidebarDiv>
            <Header>FILTERS</Header>

            <Column>
                <SubHeader>Type</SubHeader>
                {currentWarehouse ? <>
                    <Row>
                        <TypeFilterCheckBox type="beer" />
                        <FilterTitle>Beverage</FilterTitle>
                    </Row>
                    <Row>
                        <TypeFilterCheckBox type="book" />
                        <FilterTitle>Book</FilterTitle>
                    </Row>
                </> : null}

                <SubHeader>Brand</SubHeader>
                {
                    brandNames.map((companyName) => {
                        return (
                            <Row key={companyName}>
                                <BrandFilterCheckBox type={companyName} />
                                {/* <FilterTitle>{(companyName.split(" "))[0].substring(0,10)}</FilterTitle> */}
                                <FilterTitle>{(companyName.substring(0, 10))}</FilterTitle>
                            </Row>
                        )
                    })
                }

            </Column>

        </SidebarDiv>
    )
}