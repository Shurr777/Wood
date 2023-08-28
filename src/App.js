import './App.css';
import {useEffect, Suspense} from "react";
import {BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/Pages/HomePage/HomePage";
import ConnectModalWindow from "./components/ConnectModalWindow/ConnectModalWindow";

function App() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const renderLoader = () => <p>Loading</p>;

    return (
        <div className="App">
            <BrowserRouter>
                <Suspense fallback={renderLoader()}>
                    <div className="AppOverlay">
                        <NavBar/>
                        <ConnectModalWindow/>
                        <Routes>
                            <Route path="/*" element={<Navigate to="main"/>}/>
                            <Route path="main" element={<HomePage/>}/>
                        </Routes>

                    </div>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
