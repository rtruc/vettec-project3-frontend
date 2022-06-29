import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarBottom } from "./components/Nav/NavBar/NavBarBottom";
import { NavBarTop } from "./components/Nav/NavBar/NavBarTop";
import { Sidebar } from "./components/Nav/Sidebar/Sidebar";
import { InventoryPage } from "./pages/InventoryPage";
import { updateStateItems, updateStateWarehouses } from "./redux/actions/actions";
import itemService from "./services/item.service";
import warehouseService from "./services/warehouse.service";


function App() {

    const dispatch = useDispatch();

    warehouseService.getWarehouseList()
                    .then( data => dispatch(updateStateWarehouses(data)))
                    .catch( error => console.log("WAREHOUSE UPDATE FAILED", error));
    itemService.getItemList()
               .then( data => dispatch(updateStateItems(data)))
               .catch( error => console.log("ITEM UPDATE FAILED", error));

    return (
        <BrowserRouter>

            <NavBarTop />
            <Sidebar />

            <Routes>
                <Route path="/" element={<InventoryPage />} />
                <Route path="*" element={<InventoryPage />} />
            </Routes>

            <NavBarBottom />

        </BrowserRouter>
    );
}

export default App;
