import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetailsFilling from "./Pages/DetailsFilling";
import CheckSelectedId from "./Components/CheckSelectedId";
import PredictCareer from "./Pages/PredictCareer";
import AboutUs from "./Pages/AboutUs";
import MyResumes from "./Pages/MyResumes";
import Notfound from "./Components/Notfound";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"; 

const App = () => {
  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/template/fill-details"
          element={
            <CheckSelectedId>
              <DetailsFilling />
            </CheckSelectedId>
          }
        />
        <Route exact path="/predict" element={<PredictCareer />} />
        <Route exact path="/my/resumes" element={<MyResumes />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        {/* If someone attempts to navigate to a page that does not exist, they will be redirected to a 404 page. */}
        <Route exact path="*" element={<Notfound />} />
      </Routes>
      </LocalizationProvider>
     
    </Router>
  );
};

export default App;
