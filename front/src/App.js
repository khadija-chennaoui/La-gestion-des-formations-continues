import { Routes, Route } from "react-router-dom";
import DashbordAdmin from "./components/admin/DashbordAdmin"
import Statistic from "./components/admin/Statistic"
import TableEmployer from "./components/admin/TableEmployer"
export default function App() {
  return (
    <>
    <Routes>
        <Route path="/dashboard" element={<DashbordAdmin/>}/>
        <Route path="/dashboard/statistic" element={<Statistic/>}/>
        <Route path="/dashboard/employer" element={<TableEmployer/>}/>
        <Route path="/" element={<h1 className="">me homme</h1>}/>
    </Routes>
    </>
  );
}

