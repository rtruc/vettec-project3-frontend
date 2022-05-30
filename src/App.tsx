import axios from "axios";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarBottom } from "./components/Nav/NavBar/NavBarBottom";
import { NavBarTop } from "./components/Nav/NavBar/NavBarTop";
import { Sidebar } from "./components/Nav/Sidebar/Sidebar";
import { InventoryPage } from "./pages/InventoryPage";
import { updateWarehouses } from "./redux/actions/actions";


function App() {

    const dispatch = useDispatch();
    axios.get(`${process.env.REACT_APP_REST_URL}/warehouses`)
        .then(({ data }) => dispatch(updateWarehouses(data)))
        .catch((error) => console.log("WAREHOUSE UPDATE FAILED", error))

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
