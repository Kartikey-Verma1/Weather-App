import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import Overview from "./components/Overview";
import Contact from "./components/Contact"
const App = ()=>{
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />}/>
                        <Route path="/overview" element={<Overview />}/>
                        <Route path="/contact" element={<Contact />}/>
                    </Route>
                    <Route path="*" element={<Error />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;