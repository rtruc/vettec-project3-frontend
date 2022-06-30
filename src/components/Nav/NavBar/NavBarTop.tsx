import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateStateInvRecords } from "../../../redux/actions/actions";
import { State } from "../../../redux/state";
import { DropDownMenuSort } from "../../Generics/DropDownMenus/DropDownMenuSort";
import { DropDownMenuWarehouse } from "../../Generics/DropDownMenus/DropDownMenuWarehouse";
import { SearchForm } from "../../Generics/SearchForm";
import { Title } from "./Text/Title";
import { NavBar } from "./NavBar";
// import { NavBarBundle } from "./NavBarBundle";
import { NavBarButton } from "../../Generics/Buttons/TextButton";
import warehouseService from "../../../services/warehouse.service";


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
const NavBarBundle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`


export const NavBarTop = () => {
    const { warehouses, activeWarehouse: currentWarehouse } = useSelector((state: State) => state);
    const dispatch = useDispatch();

    const refreshInventory = () => {
        dispatch(updateStateInvRecords([]));
        warehouseService.getInventoryRecordsForSelectedWarehouse(currentWarehouse?.warehouseID || -1)
             .then(records => dispatch(updateStateInvRecords(records)))
             .catch((error) => console.log("WAREHOUSE UPDATE FAILED", error))
    }

    return (
        <>
            <NavBar position="top">
                <NavBarBundle>

                    <ColumnCenterJustified>
                        <Title>Amazin' Beers </Title>
                        <Title>& Books</Title>
                    </ColumnCenterJustified>

                </NavBarBundle>


                <NavBarBundle>
                    <Title>Warehouse:</Title>
                    <DropDownMenuWarehouse>
                        {warehouses.map((warehouse) => {
                            return (
                                < option key   = {warehouse.warehouseID}
                                         value = {warehouse.warehouseID}>
                                    {warehouse.warehouseName}
                                </option>
                            )
                        })}
                    </DropDownMenuWarehouse>
                    <NavBarButton onClick={() => refreshInventory()}> ↻ </NavBarButton>
                </NavBarBundle>

                <NavBarBundle>
                    <Title>Sort:</Title>
                    <DropDownMenuSort />
                </NavBarBundle>

                <SearchForm />
            </NavBar>

        </>
    )
}
