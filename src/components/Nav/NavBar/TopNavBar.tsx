import { useSelector } from "react-redux";
import { State } from "../../../redux/state";
import { SortMenu } from "../../Generics/DropDownMenus/SortMenu";
import { WarehouseMenu } from "../../Generics/DropDownMenus/WarehouseMenu";
import { SearchForm } from "../../Generics/SearchForm";
import { Title } from "../../Generics/Text/Static/Title";
import { NavBarButton } from "../../_archived/Header/NavBarButton"
import { NavBar } from "./NavBar";
import { NavBarBundle } from "./NavBarBundle";


export const TopBar = () => {
    const { warehouses } = useSelector((state: State) => state);

    return (
        <>
            <NavBar position="top">

                {/* //TODO: WIRE BUTTON TO REVEAL/DISMISS SIDEBAR */}
                <NavBarButton> ≡ </NavBarButton>

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
