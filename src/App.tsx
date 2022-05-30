import axios from "axios";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BottomNavBar } from "./components/Nav/NavBar/BottomNavBar";
import { TopBar } from "./components/Nav/NavBar/TopNavBar";
import { Sidebar } from "./components/Nav/Sidebar/Sidebar";
import { InventoryPage } from "./pages/InventoryPage";
import { updateWarehouses } from "./redux/actions/actions";


function App() {

    const dispatch = useDispatch();
    axios.get(`${process.env.REACT_APP_REST_URL}/warehouses`)
        .then(({ data }) => dispatch(updateWarehouses(data)))
        .catch((error) => console.log("WAREHOUSE UPDATE FAILED", error))
    // axios.get(`${process.env.REACT_APP_REST_URL}/brands`)
    //     .then(({ data }) => dispatch(updateBrands(data)))
    //     .catch((error) => console.log("WAREHOUSE UPDATE FAILED", error))

    return (
        <BrowserRouter>

            <TopBar />
            <Sidebar />

            <Routes>
                <Route path="/" element={<InventoryPage />} />
                <Route path="*" element={<InventoryPage />} />
            </Routes>

            <BottomNavBar />

        </BrowserRouter>
    );
}

export default App;
