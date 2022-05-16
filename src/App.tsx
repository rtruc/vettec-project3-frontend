import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BottomNavBar } from "./components/Nav/NavBar/BottomNavBar";
import { NavBar } from "./components/Nav/NavBar/NavBar";
import { TopBar } from "./components/Nav/NavBar/TopNavBar";
// import { TopBarThick } from "./components/Nav/TopBarThick";
import { All, Completed, Todo } from "./pages";


function App() {
    return (
        // <div style={{backgroundColor: "blue"}}>
            <BrowserRouter>

                <TopBar />

                <Routes>
                    <Route path="/" element={<Todo />} />
                    <Route path="/completed" element={<Completed />} />
                    <Route path="/all" element={<All />} />
                    {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
                </Routes>

                {/* <TopBarThick /> */}
                <BottomNavBar />

            </BrowserRouter>
        // </div>
    );
}

export default App;
