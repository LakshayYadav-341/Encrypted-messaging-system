import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Theme/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
