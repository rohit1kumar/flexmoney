import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Header from "./Header";
import Customs from "./props";
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/users" element={<Customs />} />
            </Routes>
        </BrowserRouter>
    );

}



export default App;
