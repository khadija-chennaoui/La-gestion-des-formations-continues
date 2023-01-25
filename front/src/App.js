import { Routes, Route } from "react-router-dom";
import DashbordAdmin from "./components/admin/DashbordAdmin";
import Statistic from "./components/admin/Statistic";
import TableEmployer from "./components/admin/employer/TableEmployer";
import TableOrganisme from "./components/admin/organisme/TableOrganisme";
import TableFormation from "./components/admin/formation/TableFormation";
import TableAssigniement from "./components/admin/assigniement/TableAssigniement";
import Login from "./components/Authentification/login";
import MaFormation from "./components/emloyer/MaFormation";
import Error from "./components/emloyer/Error";
import PrivateRoute from "./privateRoute/PrivateRoutes";
import PrivateRole from "./privateRoute/PrivateRole";
import Event from "./components/Event";

export default function App() {
  return (
    <>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Error/>} />
        <Route path="event" element={<Event/>} />
        
        {/* Private Routes */}
        <Route element={<PrivateRoute />}>

          {/* Private Role de Emloyer */}
          <Route element={<PrivateRole role='Emplyer'/>}>
            <Route path="/maFormation" element={<MaFormation />} />
          </Route>

          {/* Private Role de Admin */}
          <Route element={<PrivateRole role='Admin'/>}>
           <Route path="/dashboard" element={<DashbordAdmin />}>
              <Route path="/dashboard/statistic" element={<Statistic />}/>
              <Route index element={<Statistic />}/>
              <Route path="/dashboard/employer" element={<TableEmployer />}/>
              <Route path="/dashboard/organisme" element={<TableOrganisme />}/>
              <Route path="/dashboard/formation" element={<TableFormation />}/>
              <Route path="/dashboard/assigniement" element={<TableAssigniement/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
