import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { theme } from "../../../css/theme"
import { updateBrandFilter, updateTypeFilter } from "../../../redux/actions/actions"
import { State } from "../../../redux/state"
import { CheckBox } from "../../Generics/Buttons/CheckBox"

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

    let { inventoryRecords } = useSelector((state: State) => state);

    let brandNames: string[] = [];
    for (const record of inventoryRecords) {
        if (!brandNames.includes(record.item.brand.brandName)) {
            brandNames.push(record.item.brand.brandName);
        }
    }
    brandNames.sort()

    let types: string[] = [];
    for (const record of inventoryRecords) {
        if (!types.includes(record.item.itemType)) {
            types.push(record.item.itemType);
        }
    }

    const dispatch = useDispatch();


    return (
        <SidebarDiv>
            <Header>FILTERS</Header>
            {inventoryRecords.length > 0 ?
                <Column>

                    <SubHeader>Type</SubHeader>
                    {
                        types.map((type) => {
                            return (
                                <Row key={type}>
                                    <CheckBox clickEvent={(e) => dispatch(updateTypeFilter(type, e.target.checked))} />
                                    <FilterTitle>{(type.charAt(0).toUpperCase() + type.slice(1))}</FilterTitle>
                                </Row>
                            )
                        })
                    }

                    <SubHeader>Brand</SubHeader>
                    {
                        brandNames.map((companyName) => {
                            return (
                                <Row key={companyName}>
                                    <CheckBox clickEvent={(e) => dispatch(updateBrandFilter(companyName, e.target.checked))} />
                                    <FilterTitle>{(companyName.substring(0, 12))}</FilterTitle>
                                </Row>
                            )
                        })
                    }

                </Column>
                :
                null
            }


        </SidebarDiv>
    )
}