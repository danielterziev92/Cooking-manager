import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Home from "./components/Home/Home";
// install react bootstrap : npm install react-bootstrap bootstrap
// install router : npm install react-router-dom

function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='login/' element={<Login />} />
                    <Route path='register/' element={<Register />} />
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
