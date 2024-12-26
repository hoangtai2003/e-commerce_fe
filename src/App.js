import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" exact={true}  element={<Home />}></Route>
            </Routes>
        </>

    );
}

export default App;
