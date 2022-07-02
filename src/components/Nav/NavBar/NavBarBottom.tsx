import styled from "styled-components";
import { NavBar } from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/state";
import { NavBarButton, NavBarButton_Inactive } from "../../Generics/Buttons/NavBarButton";
import { displayAddInventoryRecordCard } from "../../../redux/actions/actions";

const ColumnBundle = styled.div`
    display: flex;
    flex-direction: row;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    gap: 5px;
    justify-content:center;
`

const ColumnRightJustified = styled(Column)`
    align-items:flex-end;
`
const ColumnLeftJustified = styled(Column)`

`


const Spacer = styled.div`
    min-width:10px;   
`

const Row = styled.div`
    display:flex;
    flex-direction: row;
    padding-right: 15px;
    height: 50px;

    flex-grow: 100;
    justify-content: left;
    
    /* gap:10px; */
    /* justify-content: flex-start; */
`

const Title = styled.h4`
    margin: 0;
`

const Data = styled.div`
    min-width:50px;
`


export const NavBarBottom = () => {
    const { inventoryRecords: inventory, activeWarehouse } = useSelector((state: State) => state);
    const style = `bottom`;

    let warehouseID: number | null = null;
    let maxStorageCapacity = 0;
    let currentStorage = 0;
    let location = "";
    let itemCount = 0;

    if (activeWarehouse) {
        maxStorageCapacity = activeWarehouse.maxStorageCapacity;
        for (let i = 0; i < inventory.length; i++) {
            const currentItemsTotalSpace = inventory[i].item.unitVolume * inventory[i].quantity;
            currentStorage += currentItemsTotalSpace;
            itemCount++;
        }

        warehouseID = activeWarehouse.warehouseID;
        location = activeWarehouse.location.city + ", "
            + activeWarehouse.location.state + " - "
            + activeWarehouse.location.country;
    }

    const dispatch = useDispatch();

    return (
        <NavBar position={style}>

            <Row>

                <ColumnBundle>
                    <ColumnRightJustified>
                        <Title>Current Capacity:</Title>
                        <Title>Max Capacity:</Title>
                    </ColumnRightJustified>
                    <ColumnLeftJustified>
                        <Data>{activeWarehouse ? currentStorage : ""}</Data>
                        <Data>{activeWarehouse ? maxStorageCapacity : ""}</Data>
                    </ColumnLeftJustified>
                </ColumnBundle>

                <Spacer />

                <ColumnBundle>
                    <ColumnRightJustified>
                        <Title>Total Items:</Title>
                        <Title>Percent Full:</Title>
                    </ColumnRightJustified>
                    <ColumnLeftJustified>
                        <Data>{activeWarehouse ? itemCount : ""}</Data>
                        <Data>{activeWarehouse ? (currentStorage / maxStorageCapacity * 100).toFixed(2) + "%" : ""}</Data>
                    </ColumnLeftJustified>
                </ColumnBundle>

                <Spacer />

                <Spacer />

                <ColumnBundle>
                    <ColumnRightJustified>
                        <Title>Location:</Title>
                        <Title>ID:</Title>
                    </ColumnRightJustified>
                    <ColumnLeftJustified>
                        <Data>{activeWarehouse ? location : ""}</Data>
                        <Data>{activeWarehouse ? warehouseID : ""}</Data>
                    </ColumnLeftJustified>
                </ColumnBundle>

                <Spacer />

            </Row>

            {activeWarehouse ? 
            <NavBarButton onClick={() => dispatch(displayAddInventoryRecordCard())}>+</NavBarButton> :
            <NavBarButton_Inactive >+</NavBarButton_Inactive> 
            }

        </NavBar>
    )
}