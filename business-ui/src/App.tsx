import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Notifications from "./components/Notifications/Notifications";
import Profile from "./components/Profile/Profile";
import Customers from "./components/Customers/Customers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
