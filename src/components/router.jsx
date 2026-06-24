import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Selesai from "../Selesai";

function Router() {
return (
<div> 
     <Routes>
          <Route path="/" element={<App />} />
       <Route path="/Selesai" element={<Selesai />} />
        </Routes>
</div>
);
}

export default Router;