import styled from "styled-components";
import { NavBar } from "./NavBar";
import { NavBarButton } from "../../_archived/Header/NavBarButton"
import { useSelector } from "react-redux";
import { State } from "../../../redux/state";


const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-end;
    margin-left: 10px;
`

const Row = styled.div`
    display:flex;
    flex-direction: row;
`


export const BottomNavBar = () => {
    const { inventory } = useSelector((state: State) => state);
    const style = `bottom`;

    let maxStorageCapacity = 0;
    let currentStorage = 0;
    if (inventory.length !== 0) {
        maxStorageCapacity = inventory[0].warehouse.maxStorageCapacity;
        for (let i = 0; i < inventory.length; i++) {
            currentStorage += inventory[i].item.unitVolume * inventory[i].quantity;
        }
    }

    return (
        <NavBar position={style}>

            <Row>
                <Column>
                    <div>Current Capacity:</div>
                    <div>Max Capacity:</div>
                </Column>
                <Column>
                    <div>{currentStorage}</div>
                    <div>{maxStorageCapacity}</div>
                </Column>
            </Row>

            {/* //TODO: ADD NEW INVENTORY ENTRY*/}
            {/* <NavBarButton onClick={() => dispatch(addTask(pathname))}>+</NavBarButton> */}
            <NavBarButton>+</NavBarButton>

        </NavBar>
    )
}