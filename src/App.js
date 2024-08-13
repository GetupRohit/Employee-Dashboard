import "./App.css";
import "./table.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./components/Login/login";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserHistory } from "history";
// import CgOrderList from "./components/phase4/CG/Order/list";
import NotFoundPage from "./components/404page.jsx/404";
import Dashboard from "./components/dashboard/list";
import FeedBack from "./components/feedback/list";
import Leaves from "./components/leaves/list";
import Attandance from "./components/Attendance/list";
import DailyTimesheet from "./components/daily-timesheet/list";
import WorkLog from "./components/work-log/list";
import Reimbursement from "./components/reimbursements/list";
import Reports from "./components/reports/list";
import NotFound from "./components/404page.jsx/404";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/privateRoute";
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
 

  return (
    <div className="App">
      <Routes>
      <Route 
          path="/login" 
          element={<LoginPage onLogin={setIsAuthenticated} />} 
        />
        <Route exact path="*" element={<NotFound />} />
        {/* <Route
          exact
          path="/dashboard/"
          element={<Dashboard/>}
        /> */}
              <Route 
          path="/" 
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />
         <Route
          exact
          path="/feedback"
          element={<FeedBack/>}
        />
        <Route
          exact
          path="/leave"
          element={<Leaves/>}
        />
        <Route
          exact
          path="/attendance"
          element={<Attandance/>}
        />
      <Route
          exact
          path="/daily-timesheet"
          element={<DailyTimesheet/>}
        />
          <Route
          exact
          path="/work-log"
          element={<WorkLog/>}
        />
              <Route
          exact
          path="/reimbursements"
          element={<Reimbursement/>}
        />
          <Route
          exact
          path="/reports"
          element={<Reports/>}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
