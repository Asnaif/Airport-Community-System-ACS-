import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import CreateAirlinePage from "../pages/CreateAirlinePage";
import GHA from "../pages/GHA";
import AirlineDashboard from "../pages/airline/AirlineDashboard";
import GHADashboard from "../pages/gha/GHADashboard";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/airline" element={<AirlineDashboard />} />
            <Route path="/airline/create-airline" element={<CreateAirlinePage />} />
            <Route path="/gha" element={<GHADashboard />} />
            <Route path="/gha/create-gha" element={<GHA />} />
        </Routes>
    )
}
export default Routing
