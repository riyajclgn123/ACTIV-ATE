import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LandingPage from "./components/landingpage";
import { MantineProvider, createTheme } from "@mantine/core";
import '@mantine/core/styles.css';
import Exercise from "./pages/exercise";
import Food from "./pages/food";
import MealPlanner from "./pages/mealplanner";
import WeeklyReport from "./pages/weeklyreport";
import BMIIndicator from "./pages/bmiindicator";
import Dashboard from "./pages/dashboard";


// Define the theme correctly
const theme = createTheme({
  fontFamily: "Open Sans",
});



function App() {
  return (
    <Router>
      <MantineProvider theme={theme}>
        <Navbar />
       
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/exercise" element={<Exercise />} />
        <Route path="/food" element={<Food />} />
        <Route path="/mealplanner" element={<MealPlanner />} />
        <Route path="/weeklyreport" element={<WeeklyReport />} />
        <Route path="/bmiindicator" element={<BMIIndicator/>} />
          </Routes>
        <Footer />
      </MantineProvider>
    </Router>
  );
}

export default App;
