import { Routes, Route } from "react-router-dom";

import Login from "./components/User/Login";
import Register from "./components/User/Register";
// install react bootstrap : npm install react-bootstrap bootstrap
// install router : npm install react-router-dom

function App() {
    return (
        <>
            <Routes>
                <Route path='login/' element={<Login />} />
                <Route path='register/' element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
