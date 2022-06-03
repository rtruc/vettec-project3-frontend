import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarBottom } from "./components/Nav/NavBar/NavBarBottom";
import { NavBarTop } from "./components/Nav/NavBar/NavBarTop";
import { Sidebar } from "./components/Nav/Sidebar/Sidebar";
import { InventoryPage } from "./pages/InventoryPage";
import { useItemsGetAll, useWarehousesGetAll } from "./util/restHelpers";


function App() {

    useWarehousesGetAll();
    useItemsGetAll();

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
