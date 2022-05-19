import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../../redux/state";
import { SortMenu } from "../../Generics/DropDownMenus/SortMenu";
import { WarehouseMenu } from "../../Generics/DropDownMenus/WarehouseMenu";
import { SearchForm } from "../../Generics/SearchForm";
import { Title } from "../../Generics/Text/Static/Title";
import { NavBarButton } from "../../_archived/Header/NavBarButton"
import { NavBar } from "./NavBar";
import { NavBarBundle } from "./NavBarBundle";

// const Title = styled.h4`
//     margin: 0;
// `

const ColumnCenterJustified = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    text-align: left;
    align-items:center;
    justify-content:center;
    margin-right:40px;
    /* height: 45px; */
    /* justify-content:end; */
`

export const TopBar = () => {
    const { warehouses } = useSelector((state: State) => state);

    return (
        <>
            <NavBar position="top">
            <NavBarBundle>
                {/* //TODO: WIRE BUTTON TO REVEAL/DISMISS SIDEBAR */}
                <NavBarButton> ≡ </NavBarButton>

            <ColumnCenterJustified>
                    <Title>Amazin' Beers </Title>
                    <Title>& Books</Title>
            </ColumnCenterJustified>
                
            </NavBarBundle>


                <NavBarBundle>
                    <Title>Warehouse:</Title>
                    <WarehouseMenu>
                        {warehouses.map((warehouse) => {
                            return (
                                < option key={warehouse.warehouseID} 
                                         value={warehouse.warehouseID}>
                                             {warehouse.warehouseName}</option>
                            )
                        })}
                    </WarehouseMenu>
                </NavBarBundle>

                <NavBarBundle>
                    <Title>Sort:</Title>
                    <SortMenu />
                </NavBarBundle>

                <SearchForm />
            </NavBar>

        </>
    )
}
