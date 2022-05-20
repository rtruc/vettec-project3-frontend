import styled from "styled-components";
import { NavBar } from "./NavBar";
import { useSelector } from "react-redux";
import { State } from "../../../redux/state";
import { NavBarButton } from "./NavBarButton";

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
    justify-content: space-between;
    
    /* gap:10px; */
    /* justify-content: flex-start; */
`

const Title = styled.h4`
    margin: 0;
`

const Data = styled.div`
    min-width:50px;
`


export const BottomNavBar = () => {
    const { inventory, currentWarehouse: currentWarehouse } = useSelector((state: State) => state);
    const style = `bottom`;

    let warehouseID: number | null = null;
    let maxStorageCapacity = 0;
    let currentStorage = 0;
    let location = "";
    let bookCount = 0;
    let bookSpace = 0;
    let beerCount = 0;
    let beerSpace = 0;
    let itemCount = 0;
    let percentFull = 0.0;

    if (currentWarehouse) {
        maxStorageCapacity = currentWarehouse.maxStorageCapacity;
        for (let i = 0; i < inventory.length; i++) {
            const currentItemsTotalSpace = inventory[i].item.unitVolume * inventory[i].quantity;
            currentStorage += currentItemsTotalSpace;
            itemCount++;
            if (inventory[i].item.itemType === "book") {
                bookCount++;
                bookSpace += inventory[i].item.unitVolume * inventory[i].quantity;
            } else {
                beerCount++;
                beerSpace += inventory[i].item.unitVolume * inventory[i].quantity;;
            }
        }

        location = currentWarehouse.location.city + ", "
            + currentWarehouse.location.state + " - "
            + currentWarehouse.location.country;
        warehouseID = currentWarehouse.warehouseID;
    }

    return (
        <NavBar position={style}>

            <Row>

                <ColumnBundle>
                    <ColumnRightJustified>
                        <Title>Current Capacity:</Title>
                        <Title>Max Capacity:</Title>
                    </ColumnRightJustified>
                    <ColumnLeftJustified>
                        <Data>{currentWarehouse ? currentStorage : ""}</Data>
                        <Data>{currentWarehouse ? maxStorageCapacity : ""}</Data>
                    </ColumnLeftJustified>
                </ColumnBundle>

                <Spacer />

                <ColumnBundle>
                    <ColumnRightJustified>
                        <Title>Total Items:</Title>
                        <Title>Percent Full:</Title>
                    </ColumnRightJustified>
                    <ColumnLeftJustified>
                        <Data>{currentWarehouse ? itemCount : ""}</Data>
                        <Data>{currentWarehouse ? (currentStorage / maxStorageCapacity * 100).toFixed(2) + "%" : ""}</Data>
                    </ColumnLeftJustified>
                </ColumnBundle>

                <Spacer />

                <ColumnBundle>
                    <ColumnRightJustified>
                        <Title>Beer Count:</Title>
                        <Title>Book Count:</Title>
                    </ColumnRightJustified>
                    <ColumnLeftJustified>
                        <Data>{currentWarehouse ? beerCount : ""}</Data>
                        <Data>{currentWarehouse ? bookCount : ""}</Data>
                    </ColumnLeftJustified>
                </ColumnBundle>

                <Spacer />

                <ColumnBundle>
                    <ColumnRightJustified>
                        <Title>Beer Space:</Title>
                        <Title>Book Space:</Title>
                    </ColumnRightJustified>
                    <ColumnLeftJustified>
                        <Data>{currentWarehouse ? beerSpace : ""}</Data>
                        <Data>{currentWarehouse ? bookSpace : ""}</Data>
                    </ColumnLeftJustified>
                </ColumnBundle>

                <Spacer />

                <ColumnBundle>
                    <ColumnRightJustified>
                        <Title>Location:</Title>
                        <Title>ID:</Title>
                    </ColumnRightJustified>
                    <ColumnLeftJustified>
                        <Data>{currentWarehouse ? location : ""}</Data>
                        <Data>{currentWarehouse ? warehouseID : ""}</Data>
                    </ColumnLeftJustified>
                </ColumnBundle>


            </Row>
            <NavBarButton>+</NavBarButton>

            {/* //TODO: ADD NEW INVENTORY ENTRY*/}
            {/* <NavBarButton onClick={() => dispatch(addTask(pathname))}>+</NavBarButton> */}

        </NavBar>
    )
}