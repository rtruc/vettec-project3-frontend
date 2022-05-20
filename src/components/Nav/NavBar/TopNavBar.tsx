import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateInventory } from "../../../redux/actions/actions";
import { State } from "../../../redux/state";
import { SortMenu } from "../../Generics/DropDownMenus/SortMenu";
import { WarehouseMenu } from "../../Generics/DropDownMenus/WarehouseMenu";
import { SearchForm } from "../../Generics/SearchForm";
import { Title } from "../../Generics/Text/Title";
import { NavBar } from "./NavBar";
import { NavBarBundle } from "./NavBarBundle";
import { NavBarButton } from "./NavBarButton";


const ColumnCenterJustified = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top:5px;
    margin-bottom: 5px;
    text-align: left;
    align-items:center;
    justify-content:center;
    margin-right:40px;
    /* height: 45px; */
    /* justify-content:end; */
`

export const TopBar = () => {
    const { warehouses, currentWarehouse } = useSelector((state: State) => state);
    const dispatch = useDispatch();

    const refreshInventory = () => {
        dispatch(updateInventory([]));
        axios.get(`${ process.env.REACT_APP_REST_URL}/warehouses/${currentWarehouse?.warehouseID}`)
             .then(({data}) => dispatch(updateInventory(data)))
             .catch((error) => console.log("WAREHOUSE UPDATE FAILED", error))
    }

    return (
        <>
            <NavBar position="top">
                <NavBarBundle>
                    {/* //TODO: WIRE BUTTON TO REVEAL/DISMISS SIDEBAR */}
                    {/* <NavBarButton> ≡ </NavBarButton> */}

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
                    <NavBarButton onClick={() => refreshInventory()}> ↻ </NavBarButton>
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
